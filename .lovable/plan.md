

## 80/20 Newsletter im Footer integrieren

**Aufgabe**: Eine Newsletter-Anmeldung mit dem Beehiiv-Formular im Footer hinzufügen.

### Übersicht

Der Footer wird von einem 2-Spalten-Layout auf ein 3-Spalten-Layout erweitert, um die Newsletter-Anmeldung prominent zu platzieren.

### Änderung

**Datei: `src/components/layout/Footer.tsx`**

**1. useEffect Hook hinzufügen** (für das Beehiiv-Script)

```typescript
import { useState, useEffect } from "react";
```

**2. Script laden mit useEffect**

```typescript
useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://subscribe-forms.beehiiv.com/embed.js";
  script.async = true;
  document.body.appendChild(script);
  
  return () => {
    document.body.removeChild(script);
  };
}, []);
```

**3. Grid auf 3 Spalten erweitern**

Von:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 ...">
```

Zu:
```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 ...">
```

**4. Newsletter-Sektion hinzufügen** (zwischen Brand und Kontakt)

```jsx
{/* Newsletter */}
<div className="space-y-3 sm:space-y-4 text-center">
  <h4 className="text-base sm:text-lg font-semibold">80/20 Newsletter</h4>
  <p className="text-sm text-muted-foreground">
    Praktische Tipps für nachhaltige Gesundheit.
  </p>
  <div className="flex justify-center">
    <iframe
      src="https://subscribe-forms.beehiiv.com/cf754d78-cdfe-42b5-8bd0-2c612adde1f2"
      className="beehiiv-embed"
      data-test-id="beehiiv-embed"
      frameBorder="0"
      scrolling="no"
      style={{
        width: "100%",
        maxWidth: "400px",
        height: "280px",
        margin: 0,
        borderRadius: "8px",
        backgroundColor: "transparent",
        boxShadow: "none"
      }}
    />
  </div>
</div>
```

---

### Layout-Änderung

| Vorher | Nachher |
|--------|---------|
| 2 Spalten: Brand + Kontakt | 3 Spalten: Brand + Newsletter + Kontakt |
| `md:grid-cols-2` | `md:grid-cols-3` |

### Technische Details

- **Beehiiv Script**: Wird dynamisch via `useEffect` geladen und beim Unmount entfernt
- **iframe-Styling**: Responsive angepasst (100% Breite, max 400px) für Mobile-Kompatibilität
- **Höhe reduziert**: Von 339px auf 280px für bessere Proportionen im Footer

### Ergebnis
- Newsletter-Anmeldung erscheint prominent im Footer
- Beehiiv-Formular funktioniert vollständig (E-Mail-Eingabe, Bestätigung)
- Responsive Design: Auf Mobile stapeln sich alle 3 Sektionen untereinander
- Passt zum minimalistischen Daveat-Design

