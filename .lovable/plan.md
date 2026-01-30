

## Newsletter-Formular im Daveat-Design

**Aufgabe**: Das Beehiiv iframe durch ein eigenes, vollständig anpassbares Newsletter-Formular ersetzen, das zum dunklen Daveat-Design passt.

### Lösung

Wir ersetzen das iframe mit einem eigenen Formular, das:
- Ein E-Mail-Eingabefeld im Daveat-Design hat (dunkler Hintergrund, weisse Schrift, grüner Akzent)
- Die Anmeldung über eine Backend-Funktion an Beehiiv sendet
- Erfolgsmeldungen und Fehlerbehandlung enthält

### Änderungen

**1. Backend-Funktion erstellen: `supabase/functions/newsletter-subscribe/index.ts`**

Eine Edge-Funktion, die die E-Mail-Adresse an die Beehiiv API sendet.

**2. Footer aktualisieren: `src/components/layout/Footer.tsx`**

Das iframe durch ein eigenes Formular ersetzen:
- E-Mail-Eingabefeld mit schwarzem Hintergrund und weissem Border
- Button mit grünem Hover-Effekt (wie andere Buttons auf der Seite)
- Erfolgsmeldung nach Anmeldung
- Loading-State während der Anmeldung

### Design des neuen Formulars

```
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

### Voraussetzung

Du benötigst einen **Beehiiv API-Key** und deine **Publication ID**, um die Anmeldung über die API zu ermöglichen. Diese findest du in deinem Beehiiv-Dashboard unter Settings → Integrations → API.

### Ergebnis

- Newsletter-Formular passt perfekt zum Daveat-Design
- Schwarzer Hintergrund, weisse Schrift, grüne Akzente
- Nutzer bleiben auf deiner Seite (kein iframe, keine Weiterleitung)
- Vollständige Kontrolle über Aussehen und Verhalten

