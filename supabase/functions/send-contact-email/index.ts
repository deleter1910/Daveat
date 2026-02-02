import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const TURNSTILE_SECRET_KEY = Deno.env.get("TURNSTILE_SECRET_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Rate limiting configuration
const RATE_LIMIT_WINDOW_MS = 3600000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 3;

// Input validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactEmailRequest {
  name: string;
  email: string;
  subject?: string;
  message: string;
  turnstileToken: string;
}

// Verify Turnstile token with Cloudflare
async function verifyTurnstileToken(token: string, ip: string): Promise<boolean> {
  if (!TURNSTILE_SECRET_KEY) {
    console.error("TURNSTILE_SECRET_KEY not configured");
    return false;
  }

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: ip,
      }),
    });

    const result = await response.json();
    return result.success === true;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return false;
  }
}

interface ValidationResult {
  valid: boolean;
  error?: string;
  data?: ContactEmailRequest;
}

function validateInput(body: unknown): ValidationResult {
  if (!body || typeof body !== 'object') {
    return { valid: false, error: "Invalid request body" };
  }

  const { name, email, subject, message, turnstileToken } = body as Record<string, unknown>;

  // Validate turnstile token
  if (typeof turnstileToken !== 'string' || turnstileToken.trim().length === 0) {
    return { valid: false, error: "CAPTCHA verification required" };
  }

  // Validate name
  if (typeof name !== 'string' || name.trim().length === 0) {
    return { valid: false, error: "Name is required" };
  }
  if (name.length > 100) {
    return { valid: false, error: "Name must be less than 100 characters" };
  }

  // Validate email
  if (typeof email !== 'string' || email.trim().length === 0) {
    return { valid: false, error: "Email is required" };
  }
  if (email.length > 255) {
    return { valid: false, error: "Email must be less than 255 characters" };
  }
  if (!emailRegex.test(email.trim())) {
    return { valid: false, error: "Invalid email format" };
  }

  // Validate subject (optional but if provided, must be valid)
  const cleanSubject = typeof subject === 'string' ? subject.trim() : '';
  if (cleanSubject.length > 200) {
    return { valid: false, error: "Subject must be less than 200 characters" };
  }

  // Validate message
  if (typeof message !== 'string' || message.trim().length === 0) {
    return { valid: false, error: "Message is required" };
  }
  if (message.length > 5000) {
    return { valid: false, error: "Message must be less than 5000 characters" };
  }

  // Sanitize inputs - remove control characters and trim
  const sanitizedName = name.trim().replace(/[\x00-\x1F\x7F]/g, '');
  const sanitizedEmail = email.trim().toLowerCase();
  const sanitizedSubject = cleanSubject.replace(/[\x00-\x1F\x7F]/g, '') || 'Contact Form Submission';
  const sanitizedMessage = message.trim().replace(/[\x00-\x1F\x7F]/g, '');

  return {
    valid: true,
    data: {
      name: sanitizedName,
      email: sanitizedEmail,
      subject: sanitizedSubject,
      message: sanitizedMessage,
      turnstileToken: (turnstileToken as string).trim(),
    }
  };
}

// Escape HTML to prevent XSS in emails
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("cf-connecting-ip") || 
                     "unknown";

    // Initialize Supabase client for rate limiting
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Check rate limit
    const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MS).toISOString();
    
    const { count, error: countError } = await supabase
      .from("contact_rate_limits")
      .select("*", { count: "exact", head: true })
      .eq("ip_address", clientIp)
      .gte("created_at", windowStart);

    if (countError) {
      console.error("Rate limit check error:", countError);
      // Continue without rate limiting if table doesn't exist
      if (!countError.message.includes("does not exist")) {
        throw new Error("Rate limit check failed");
      }
    } else if (count !== null && count >= MAX_REQUESTS_PER_WINDOW) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Parse and validate input
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Invalid JSON body" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const validation = validateInput(body);
    if (!validation.valid || !validation.data) {
      return new Response(
        JSON.stringify({ error: validation.error }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { name, email, subject, message, turnstileToken } = validation.data;

    // Verify Turnstile CAPTCHA
    const isTurnstileValid = await verifyTurnstileToken(turnstileToken, clientIp);
    if (!isTurnstileValid) {
      return new Response(
        JSON.stringify({ error: "CAPTCHA verification failed. Please try again." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Record this request for rate limiting (if table exists)
    try {
      await supabase
        .from("contact_rate_limits")
        .insert({ ip_address: clientIp });
    } catch {
      // Silently ignore if table doesn't exist
    }

    // Send notification email to hello@daveat.ch
    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Daveat Kontaktformular <hello@daveat.ch>",
        to: ["hello@daveat.ch"],
        subject: `Neue Kontaktanfrage von ${name}`,
        html: `
          <h2>Neue Kontaktanfrage</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>E-Mail:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p><strong>Nachricht:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        `,
      }),
    });

    if (!notificationRes.ok) {
      const errorText = await notificationRes.text();
      console.error("Resend API error (notification):", notificationRes.status, errorText);
      throw new Error("Failed to send notification email");
    }

    // Send confirmation email to the sender
    const confirmationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Daveat <hello@daveat.ch>",
        to: [email],
        subject: "Danke für deine Nachricht!",
        html: `
          <h1>Hallo ${escapeHtml(name)}!</h1>
          <p>Danke für deine Nachricht. Ich melde mich so schnell wie möglich bei dir.</p>
          <p>Beste Grüsse,<br>Dave</p>
        `,
      }),
    });

    if (!confirmationRes.ok) {
      const errorText = await confirmationRes.text();
      console.error("Resend API error (confirmation):", confirmationRes.status, errorText);
      // Don't throw here - notification already sent successfully
      console.log("Notification sent but confirmation failed");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    console.error("Error in send-contact-email:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
