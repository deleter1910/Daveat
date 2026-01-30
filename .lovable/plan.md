

## Newsletter-Formular im Daveat-Design

**Aufgabe**: Das Beehiiv iframe durch ein eigenes, vollständig anpassbares Newsletter-Formular ersetzen.

### Umsetzung

**1. Backend-Funktion erstellen: `supabase/functions/newsletter-subscribe/index.ts`**

Die Funktion:
- Nimmt eine E-Mail-Adresse entgegen
- Sendet sie an die Beehiiv API
- Gibt Erfolg oder Fehler zurück
- Prüft, ob die API-Keys konfiguriert sind

**2. Footer aktualisieren: `src/components/layout/Footer.tsx`**

Das iframe wird ersetzt durch:
- E-Mail-Eingabefeld (schwarzer Hintergrund, weisser Border)
- "Anmelden" Button mit grünem Hover-Effekt
- Loading-State während der Anmeldung
- Erfolgsmeldung nach erfolgreicher Anmeldung
- Fehlermeldung bei Problemen

**3. Supabase-Konfiguration: `supabase/config.toml`**

Die neue Funktion registrieren mit `verify_jwt = false` (öffentlich zugänglich).

### Design

```text
┌─────────────────────────────────────┐
│  80/20 Newsletter                   │
│  Praktische Tipps für nachhaltige   │
│  Gesundheit.                        │
│                                     │
│  ┌─────────────────────────────┐    │
│  │ deine@email.ch              │    │
│  └─────────────────────────────┘    │
│  ┌─────────────────────────────┐    │
│  │      Anmelden →             │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘
```

### Technische Details

| Datei | Aktion |
|-------|--------|
| `supabase/functions/newsletter-subscribe/index.ts` | Neu erstellen |
| `src/components/layout/Footer.tsx` | iframe durch eigenes Formular ersetzen |
| `supabase/config.toml` | Funktion registrieren |

### API-Keys später hinzufügen

Wenn du die Beehiiv-Zugangsdaten hast:
1. Öffne Lovable Cloud (Backend-Einstellungen)
2. Füge hinzu: `BEEHIIV_API_KEY` und `BEEHIIV_PUBLICATION_ID`
3. Das Formular funktioniert dann automatisch

### Ergebnis

- Newsletter-Formular passt perfekt zum Daveat-Design
- Schwarzer Hintergrund, weisse Schrift, grüne Akzente
- Nutzer bleiben auf deiner Seite
- Vollständige Kontrolle über Aussehen und Verhalten

