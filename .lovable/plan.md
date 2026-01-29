

## Datenschutz-Seite hinzufügen

**Aufgabe**: Eine neue Datenschutz-Seite mit grundlegenden Datenschutzinformationen erstellen und den Footer-Link aktualisieren.

### Übersicht der Änderungen

1. **Neue Seite erstellen**: `src/pages/Datenschutz.tsx`
2. **Route hinzufügen**: In `src/App.tsx` die neue Route `/datenschutz` registrieren
3. **Footer aktualisieren**: Den Datenschutz-Link von `#` zu `/datenschutz` ändern

---

### Schritt 1: Neue Datenschutz-Seite

**Datei: `src/pages/Datenschutz.tsx`** (neu erstellen)

Die Seite folgt dem gleichen Design wie die Impressum-Seite und enthält grundlegende Datenschutzinformationen:

**Inhalt:**
- Verantwortlicher (Daveat Cundò, Wetzikon, Schweiz)
- Erhobene Daten (Kontaktformular: Name, E-Mail, Nachricht)
- Verwendungszweck
- Datenweitergabe
- Deine Rechte (Auskunft, Berichtigung, Löschung)
- Kontakt für Datenschutzanfragen

---

### Schritt 2: Route registrieren

**Datei: `src/App.tsx`**

- Import der neuen Datenschutz-Komponente hinzufügen
- Route `/datenschutz` vor der Catch-All-Route einfügen

---

### Schritt 3: Footer-Link aktualisieren

**Datei: `src/components/layout/Footer.tsx`** (Zeile 86-88)

Von:
```jsx
<a href="#" className="hover:text-primary transition-colors">
  Datenschutz
</a>
```

Zu:
```jsx
<Link to="/datenschutz" className="hover:text-primary transition-colors">
  Datenschutz
</Link>
```

---

### Technische Details

| Datei | Aktion |
|-------|--------|
| `src/pages/Datenschutz.tsx` | Neu erstellen |
| `src/App.tsx` | Import + Route hinzufügen |
| `src/components/layout/Footer.tsx` | Link zu `/datenschutz` ändern |

### Ergebnis
- Klick auf "Datenschutz" im Footer führt zur neuen Datenschutz-Seite
- Die Seite zeigt grundlegende Datenschutzinformationen auf Deutsch
- Design passt zum Rest der Website (gleiche Struktur wie Impressum)

