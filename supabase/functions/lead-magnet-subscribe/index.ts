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

interface LeadMagnetRequest {
  firstName: string;
  email: string;
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
  data?: LeadMagnetRequest;
}

function validateInput(body: unknown): ValidationResult {
  if (!body || typeof body !== 'object') {
    return { valid: false, error: "Invalid request body" };
  }

  const { firstName, email, turnstileToken } = body as Record<string, unknown>;

  // Validate turnstile token
  if (typeof turnstileToken !== 'string' || turnstileToken.trim().length === 0) {
    return { valid: false, error: "CAPTCHA-Verifizierung erforderlich" };
  }

  // Validate firstName
  if (typeof firstName !== 'string' || firstName.trim().length === 0) {
    return { valid: false, error: "Vorname ist erforderlich" };
  }
  if (firstName.length > 100) {
    return { valid: false, error: "Vorname darf maximal 100 Zeichen haben" };
  }

  // Validate email
  if (typeof email !== 'string' || email.trim().length === 0) {
    return { valid: false, error: "E-Mail ist erforderlich" };
  }
  if (email.length > 255) {
    return { valid: false, error: "E-Mail darf maximal 255 Zeichen haben" };
  }
  if (!emailRegex.test(email.trim())) {
    return { valid: false, error: "Ungültiges E-Mail-Format" };
  }

  // Sanitize inputs
  const sanitizedFirstName = firstName.trim().replace(/[\x00-\x1F\x7F]/g, '');
  const sanitizedEmail = email.trim().toLowerCase();

  return {
    valid: true,
    data: {
      firstName: sanitizedFirstName,
      email: sanitizedEmail,
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

    // Initialize Supabase client
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Check rate limit
    const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MS).toISOString();

    const { count, error: countError } = await supabase
      .from("lead_magnet_rate_limits")
      .select("*", { count: "exact", head: true })
      .eq("ip_address", clientIp)
      .gte("created_at", windowStart);

    if (countError) {
      console.error("Rate limit check error:", countError);
      if (!countError.message.includes("does not exist")) {
        throw new Error("Rate limit check failed");
      }
    } else if (count !== null && count >= MAX_REQUESTS_PER_WINDOW) {
      return new Response(
        JSON.stringify({ error: "Zu viele Anfragen. Bitte versuche es später erneut." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Parse and validate input
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: "Ungültige Anfrage" }),
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

    const { firstName, email, turnstileToken } = validation.data;

    // Verify Turnstile CAPTCHA
    const isTurnstileValid = await verifyTurnstileToken(turnstileToken, clientIp);
    if (!isTurnstileValid) {
      return new Response(
        JSON.stringify({ error: "CAPTCHA-Verifizierung fehlgeschlagen. Bitte versuche es erneut." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Record this request for rate limiting
    try {
      await supabase
        .from("lead_magnet_rate_limits")
        .insert({ ip_address: clientIp });
    } catch {
      // Silently ignore if table doesn't exist
    }

    // Check if subscriber already exists
    const { data: existingSubscriber } = await supabase
      .from("lead_magnet_subscribers")
      .select("id, email_sent_at")
      .eq("email", email)
      .single();

    if (existingSubscriber) {
      // Update existing subscriber
      await supabase
        .from("lead_magnet_subscribers")
        .update({ first_name: firstName })
        .eq("email", email);
    } else {
      // Insert new subscriber
      const { error: insertError } = await supabase
        .from("lead_magnet_subscribers")
        .insert({
          first_name: firstName,
          email: email,
          source: "homepage_hero"
        });

      if (insertError) {
        console.error("Insert subscriber error:", insertError);
        // Continue anyway - email delivery is more important
      }
    }

    // Send confirmation email with PDF download link
    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Daveat <onboarding@resend.dev>",
        to: [email],
        subject: "Dein Guide: 5 Ernährungsfehler, die deine Energie sabotieren",
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h1 style="color: #1a1a1a; font-size: 24px; margin-bottom: 24px;">Hallo ${escapeHtml(firstName)}!</h1>

  <p style="margin-bottom: 16px;">Danke, dass du dir den Guide geholt hast. Hier ist dein versprochenes PDF:</p>

  <div style="text-align: center; margin: 32px 0;">
    <a href="https://www.daveat.ch/downloads/5-ernaehrungsfehler-guide.pdf"
       style="display: inline-block; padding: 16px 32px; background: #00FF00; color: #000; text-decoration: none; border-radius: 9999px; font-weight: 600; font-size: 16px;">
      Guide herunterladen
    </a>
  </div>

  <p style="margin-bottom: 16px;">
    <strong>Mein Tipp:</strong> Lies den Guide einmal in Ruhe durch. Nicht beim Pendeln, nicht zwischen zwei Meetings. Nimm dir 10 Minuten, in denen du wirklich da bist.
  </p>

  <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 32px 0;">

  <h2 style="color: #1a1a1a; font-size: 20px; margin-bottom: 16px;">Bereit für den nächsten Schritt?</h2>

  <p style="margin-bottom: 16px;">
    Falls du nach dem Lesen merkst, dass du einen persönlichen Plan willst – keinen generischen, sondern deinen eigenen – dann melde dich für ein kostenloses Strategiegespräch.
  </p>

  <p style="margin-bottom: 24px;">
    Wir schauen gemeinsam, wo du stehst und was der nächste sinnvolle Schritt für dich ist.
  </p>

  <div style="text-align: center; margin: 24px 0;">
    <a href="https://www.daveat.ch/contact"
       style="display: inline-block; padding: 12px 24px; border: 2px solid #1a1a1a; color: #1a1a1a; text-decoration: none; border-radius: 9999px; font-weight: 500;">
      Kostenloses Strategiegespräch buchen
    </a>
  </div>

  <p style="color: #666; font-size: 14px; margin-top: 32px;">
    Kein Druck. Nur Klarheit.
  </p>

  <p style="margin-top: 32px;">
    Beste Grüsse,<br>
    <strong>Dave</strong><br>
    <a href="https://www.daveat.ch" style="color: #00AA00;">daveat.ch</a>
  </p>
</body>
</html>
        `,
      }),
    });

    if (!emailRes.ok) {
      const errorText = await emailRes.text();
      console.error("Resend API error:", emailRes.status, errorText);
      throw new Error("Failed to send email");
    }

    // Update email_sent_at timestamp
    await supabase
      .from("lead_magnet_subscribers")
      .update({ email_sent_at: new Date().toISOString() })
      .eq("email", email);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    console.error("Error in lead-magnet-subscribe:", error);
    return new Response(
      JSON.stringify({ error: "Ein Fehler ist aufgetreten. Bitte versuche es erneut." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
