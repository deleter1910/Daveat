
## Impressum-Seite hinzufügen

**Aufgabe**: Eine neue Impressum-Seite erstellen mit den angegebenen rechtlichen Informationen und den Footer-Link aktualisieren.

### Übersicht der Änderungen

1. **Neue Seite erstellen**: `src/pages/Impressum.tsx`
2. **Route hinzufügen**: In `src/App.tsx` die neue Route `/impressum` registrieren
3. **Footer aktualisieren**: Den Impressum-Link in `src/components/layout/Footer.tsx` von `#` zu `/impressum` ändern

---

### Schritt 1: Neue Impressum-Seite

**Datei: `src/pages/Impressum.tsx`** (neu erstellen)

Die Seite wird dem bestehenden Design-System folgen (wie About.tsx):
- Layout-Komponente für Navbar und Footer
- Minimalistisches, übersichtliches Design
- Daveat Brand-Farben (Schwarz, Weiss, Grün)

Inhalt:
```
IMPRESSUM

Daveat Cundò
Wetzikon, Schweiz

E-Mail: hello@daveat.ch
```

---

### Schritt 2: Route registrieren

**Datei: `src/App.tsx`**

- Import der neuen Impressum-Komponente hinzufügen
- Route `/impressum` vor der Catch-All-Route einfügen

---

### Schritt 3: Footer-Link aktualisieren

**Datei: `src/components/layout/Footer.tsx`** (Zeile 89-90)

Von:
```jsx
<a href="#" className="hover:text-primary transition-colors">
  Impressum
</a>
```

Zu:
```jsx
<Link to="/impressum" className="hover:text-primary transition-colors">
  Impressum
</Link>
```

---

### Technische Details

| Datei | Aktion |
|-------|--------|
| `src/pages/Impressum.tsx` | Neu erstellen |
| `src/App.tsx` | Import + Route hinzufügen |
| `src/components/layout/Footer.tsx` | Link zu `/impressum` ändern |

### Ergebnis
- Klick auf "Impressum" im Footer führt zur neuen Impressum-Seite
- Die Seite zeigt die rechtlich erforderlichen Angaben
- Design passt zum Rest der Website
