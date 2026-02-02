

## Kontaktformular reparieren und E-Mail-Benachrichtigung hinzufügen

### Problemanalyse

Ich habe mehrere Probleme identifiziert:

| Problem | Beschreibung |
|---------|--------------|
| **RESEND_API_KEY fehlt** | Der API-Schlüssel für den E-Mail-Versand ist nicht konfiguriert |
| **JWT-Verifizierung aktiv** | Die Edge Function erwartet einen JWT-Token, den das öffentliche Formular nicht hat |
| **CORS-Header unvollständig** | Fehlende Supabase-Client-Header führen zu Zugriffsfehlern |
| **Keine Benachrichtigung an dich** | Aktuell erhält nur der Absender eine E-Mail, nicht du |

---

### Lösungsschritte

#### 1. Resend API Key konfigurieren

Du benötigst einen API-Schlüssel von Resend:
- Falls noch nicht vorhanden: Konto auf https://resend.com erstellen
- API-Key generieren unter https://resend.com/api-keys
- Domain verifizieren unter https://resend.com/domains (für `daveat.ch`)

Ich werde dich nach dem API-Key fragen, damit er sicher gespeichert wird.

#### 2. JWT-Verifizierung deaktivieren

Die `config.toml` muss erweitert werden:

```toml
[functions.send-contact-email]
verify_jwt = false
```

#### 3. CORS-Header aktualisieren

Die Edge Function braucht vollständige CORS-Header:

```typescript
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};
```

#### 4. E-Mail-Benachrichtigung an dich hinzufügen

Die Edge Function wird erweitert, um **zwei E-Mails** zu senden:
1. **Bestätigung an den Absender** (wie bisher)
2. **Benachrichtigung an hello@daveat.ch** mit allen Details der Anfrage

```typescript
// E-Mail an hello@daveat.ch
await resend.emails.send({
  from: "Daveat Kontaktformular <noreply@daveat.ch>",
  to: ["hello@daveat.ch"],
  subject: `Neue Kontaktanfrage von ${name}`,
  html: `
    <h2>Neue Kontaktanfrage</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Nachricht:</strong></p>
    <p>${escapeHtml(message)}</p>
  `,
});
```

---

### Technische Änderungen

| Datei | Aktion |
|-------|--------|
| `supabase/config.toml` | JWT-Verifizierung für `send-contact-email` deaktivieren |
| `supabase/functions/send-contact-email/index.ts` | CORS-Header erweitern + Benachrichtigungs-E-Mail hinzufügen |
| **Secret: RESEND_API_KEY** | API-Schlüssel von Resend hinzufügen |

---

### Wichtig: Resend Domain-Verifizierung

Damit E-Mails von `@daveat.ch` gesendet werden können, muss die Domain bei Resend verifiziert sein:

1. Gehe zu https://resend.com/domains
2. Füge `daveat.ch` hinzu
3. Konfiguriere die DNS-Einträge bei deinem Domain-Anbieter

Bis dahin kann `onboarding@resend.dev` als Absender verwendet werden (Resend Test-Domain).

---

### Ergebnis

Nach der Umsetzung:
- Das Kontaktformular funktioniert fehlerfrei
- Der Absender erhält eine Bestätigungs-E-Mail
- Du erhältst eine Benachrichtigung an hello@daveat.ch mit allen Anfrage-Details

