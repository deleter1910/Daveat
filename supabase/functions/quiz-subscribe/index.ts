import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const TURNSTILE_SECRET_KEY = Deno.env.get("TURNSTILE_SECRET_KEY");
const EMAIL_FROM = Deno.env.get("EMAIL_FROM") || "Daveat <onboarding@resend.dev>";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const RATE_LIMIT_WINDOW_MS = 3600000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 20;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validQuizTypes = ["stress-esser", "perfektionist", "zeitmangel", "regelbrecher"];

interface QuizSubscribeRequest {
  firstName: string;
  email: string;
  turnstileToken: string;
  quizResult: string;
  answers: string[];
}

// Quiz type display data for email
const quizTypeData: Record<string, { title: string; subtitle: string; tips: string[] }> = {
  "stress-esser": {
    title: "Der Stress-Esser",
    subtitle: "Dein Körper nutzt Essen als Ventil.",
    tips: [
      "Erkenne den Auslöser: Bevor du zum Snack greifst, frag dich: \"Habe ich wirklich Hunger – oder fühle ich gerade etwas?\"",
      "Schaffe ein Alternativ-Ritual: Geh 5 Minuten an die frische Luft, trink ein Glas Wasser, oder ruf jemanden an.",
      "Plane dein Essen vor: Wenn du bereits weisst, was du heute isst, fällt die emotionale Spontan-Entscheidung weg.",
    ],
  },
  perfektionist: {
    title: "Der Perfektionist",
    subtitle: "Alles oder nichts – und meistens nichts.",
    tips: [
      "Erlaube dir die 80%-Lösung: Wenn du 5 von 7 Tagen solide isst, bist du weiter als 99% der Menschen.",
      "Streiche \"ab Montag\" aus deinem Wortschatz: Jede Mahlzeit ist ein Neuanfang.",
      "Definiere \"gut genug\": Schreib dir auf, wie ein realistisch guter Tag aussieht. Das ist dein neuer Standard.",
    ],
  },
  zeitmangel: {
    title: "Der Zeitmangel-Typ",
    subtitle: "Du hast für alles Zeit – ausser für dich.",
    tips: [
      "Investiere 30 Minuten am Sonntag: Plane deine 5 Mittagessen für die Woche. Das allein halbiert schlechte Entscheidungen.",
      "Mach Convenience gesund: Tiefkühlgemüse, vorgewaschene Salate, Dosenlinsen – \"gut genug\" schlägt \"gar nicht\".",
      "Iss BEVOR du hungrig bist: Ein vorgeplanter Snack um 15 Uhr verhindert das abendliche Chaos.",
    ],
  },
  regelbrecher: {
    title: "Der Regelbrecher",
    subtitle: "Du weisst alles – und tust nichts davon.",
    tips: [
      "Wähle EINE Sache: Eine Veränderung, die du 30 Tage durchziehst. Mehr braucht es am Anfang nicht.",
      "Mach es dir lächerlich einfach: \"Jeden Tag ein Glas Wasser vor dem Frühstück\" – das ist genug.",
      "Hol dir Accountability: Du brauchst jemanden, der fragt: \"Hast du's gemacht?\"",
    ],
  },
};

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
  data?: QuizSubscribeRequest;
}

function validateInput(body: unknown): ValidationResult {
  if (!body || typeof body !== "object") {
    return { valid: false, error: "Invalid request body" };
  }

  const { firstName, email, turnstileToken, quizResult, answers } = body as Record<string, unknown>;

  if (typeof turnstileToken !== "string" || turnstileToken.trim().length === 0) {
    return { valid: false, error: "CAPTCHA-Verifizierung erforderlich" };
  }

  if (typeof firstName !== "string" || firstName.trim().length === 0) {
    return { valid: false, error: "Vorname ist erforderlich" };
  }
  if (firstName.length > 100) {
    return { valid: false, error: "Vorname darf maximal 100 Zeichen haben" };
  }

  if (typeof email !== "string" || email.trim().length === 0) {
    return { valid: false, error: "E-Mail ist erforderlich" };
  }
  if (email.length > 255) {
    return { valid: false, error: "E-Mail darf maximal 255 Zeichen haben" };
  }
  if (!emailRegex.test(email.trim())) {
    return { valid: false, error: "Ungültiges E-Mail-Format" };
  }

  if (typeof quizResult !== "string" || !validQuizTypes.includes(quizResult)) {
    return { valid: false, error: "Ungültiges Quiz-Ergebnis" };
  }

  if (!Array.isArray(answers) || answers.length !== 7) {
    return { valid: false, error: "Ungültige Antworten" };
  }
  for (const a of answers) {
    if (typeof a !== "string" || !validQuizTypes.includes(a)) {
      return { valid: false, error: "Ungültige Antworten" };
    }
  }

  const sanitizedFirstName = firstName.trim().replace(/[\x00-\x1F\x7F]/g, "");
  const sanitizedEmail = email.trim().toLowerCase();

  return {
    valid: true,
    data: {
      firstName: sanitizedFirstName,
      email: sanitizedEmail,
      turnstileToken: (turnstileToken as string).trim(),
      quizResult: quizResult as string,
      answers: answers as string[],
    },
  };
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildEmailHtml(firstName: string, quizResult: string): string {
  const typeData = quizTypeData[quizResult];
  if (!typeData) return "";

  const tipsHtml = typeData.tips
    .map(
      (tip, i) => `
    <tr>
      <td style="padding: 12px 16px; border-bottom: 1px solid #f0f0f0;">
        <strong style="color: #00AA00;">${i + 1}.</strong> ${escapeHtml(tip)}
      </td>
    </tr>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h1 style="color: #1a1a1a; font-size: 24px; margin-bottom: 24px;">Hallo ${escapeHtml(firstName)}!</h1>

  <p style="margin-bottom: 16px;">Danke, dass du das Quiz gemacht hast. Hier ist dein Ergebnis:</p>

  <div style="background: #f8f8f8; border-left: 4px solid #00FF00; padding: 20px; margin: 24px 0; border-radius: 0 8px 8px 0;">
    <h2 style="color: #1a1a1a; font-size: 22px; margin: 0 0 8px 0;">${escapeHtml(typeData.title)}</h2>
    <p style="color: #666; margin: 0; font-style: italic;">${escapeHtml(typeData.subtitle)}</p>
  </div>

  <h3 style="color: #1a1a1a; font-size: 18px; margin: 32px 0 16px 0;">Deine 3 persönlichen Tipps:</h3>

  <table style="width: 100%; border-collapse: collapse; background: #fafafa; border-radius: 8px; overflow: hidden;">
    ${tipsHtml}
  </table>

  <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 32px 0;">

  <h2 style="color: #1a1a1a; font-size: 20px; margin-bottom: 16px;">Bereit für den nächsten Schritt?</h2>

  <p style="margin-bottom: 16px;">
    Tipps sind gut – aber was du wirklich brauchst, ist ein <strong>persönlicher Plan</strong>, der zu deinem Typ passt.
  </p>

  <p style="margin-bottom: 24px;">
    Im kostenlosen Strategiegespräch schauen wir gemeinsam, welche konkreten Schritte für dich als <strong>${escapeHtml(typeData.title)}</strong> am meisten bewirken.
  </p>

  <div style="text-align: center; margin: 32px 0;">
    <a href="https://www.daveat.ch/contact"
       style="display: inline-block; padding: 16px 32px; background: #00FF00; color: #000; text-decoration: none; border-radius: 9999px; font-weight: 600; font-size: 16px;">
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
</html>`;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Environment check:", {
      hasResendKey: !!RESEND_API_KEY,
      hasSupabaseUrl: !!SUPABASE_URL,
      hasServiceKey: !!SUPABASE_SERVICE_ROLE_KEY,
      hasTurnstileKey: !!TURNSTILE_SECRET_KEY,
      emailFrom: EMAIL_FROM,
    });

    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("cf-connecting-ip") ||
      "unknown";

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Rate limit check
    const windowStart = new Date(Date.now() - RATE_LIMIT_WINDOW_MS).toISOString();

    const { count, error: countError } = await supabase
      .from("quiz_rate_limits")
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

    // Parse and validate
    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return new Response(JSON.stringify({ error: "Ungültige Anfrage" }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const validation = validateInput(body);
    if (!validation.valid || !validation.data) {
      return new Response(JSON.stringify({ error: validation.error }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const { firstName, email, turnstileToken, quizResult, answers } = validation.data;

    // Verify Turnstile
    const isTurnstileValid = await verifyTurnstileToken(turnstileToken, clientIp);
    if (!isTurnstileValid) {
      return new Response(
        JSON.stringify({ error: "CAPTCHA-Verifizierung fehlgeschlagen. Bitte versuche es erneut." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Record rate limit
    try {
      await supabase.from("quiz_rate_limits").insert({ ip_address: clientIp });
    } catch {
      // Silently ignore if table doesn't exist
    }

    // Check existing subscriber
    const { data: existingSubscriber } = await supabase
      .from("quiz_subscribers")
      .select("id, email_sent_at")
      .eq("email", email)
      .single();

    if (existingSubscriber) {
      await supabase
        .from("quiz_subscribers")
        .update({
          first_name: firstName,
          quiz_result: quizResult,
          answers: answers,
        })
        .eq("email", email);
    } else {
      const { error: insertError } = await supabase.from("quiz_subscribers").insert({
        first_name: firstName,
        email: email,
        quiz_result: quizResult,
        answers: answers,
        source: "quiz",
      });

      if (insertError) {
        console.error("Insert subscriber error:", insertError);
      }
    }

    // Send personalized email
    console.log("Sending quiz result email to:", email, "from:", EMAIL_FROM);
    const emailHtml = buildEmailHtml(firstName, quizResult);

    const typeTitle = quizTypeData[quizResult]?.title || "Dein Quiz-Ergebnis";

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: EMAIL_FROM,
        to: [email],
        subject: `Dein Ergebnis: ${typeTitle} – und was du jetzt tun kannst`,
        html: emailHtml,
      }),
    });

    if (!emailRes.ok) {
      const errorText = await emailRes.text();
      console.error("Resend API error:", emailRes.status, errorText);
      return new Response(
        JSON.stringify({
          error: "E-Mail konnte nicht gesendet werden. Bitte versuche es später erneut.",
        }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Quiz email sent successfully to:", email);

    // Update email_sent_at
    await supabase
      .from("quiz_subscribers")
      .update({ email_sent_at: new Date().toISOString() })
      .eq("email", email);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : undefined;
    console.error("Error in quiz-subscribe:", errorMessage, errorStack);
    return new Response(
      JSON.stringify({ error: "Ein Fehler ist aufgetreten. Bitte versuche es erneut." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
