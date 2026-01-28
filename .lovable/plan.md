
## Doppelten Text im Hero-Header entfernen

**Aufgabe**: Den doppelten "Brechen wir diesen Kreislauf." Text entfernen und nur die grüne Version behalten.

### Aktuelle Situation

In der Hero-Sektion (Zeilen 102-104) steht:
```jsx
<h1 className="heading-xl ...">
  Jede gescheiterte Diät macht die nächste schwieriger.
  Brechen wir diesen Kreislauf.<span className="text-primary block sm:inline">
  Brechen wir diesen Kreislauf.</span>
</h1>
```

Der Text "Brechen wir diesen Kreislauf." erscheint zweimal:
1. Einmal in Weiss (Standard-Textfarbe)
2. Einmal in Grün (mit `text-primary`)

### Änderung

**Datei: `src/pages/Index.tsx`** (Zeilen 102-105)

Entferne die erste weisse Version und behalte nur den grünen Text:
```jsx
<h1 className="heading-xl mb-8 animate-fade-in-up break-words hyphens-auto max-w-full">
  Jede gescheiterte Diät macht die nächste schwieriger.
  <span className="text-primary block sm:inline">
    Brechen wir diesen Kreislauf.
  </span>
</h1>
```

### Ergebnis
- Der Header zeigt nur noch eine Zeile mit "Brechen wir diesen Kreislauf." in Grün
- Die Struktur der Überschrift bleibt korrekt (erste Zeile weiss, zweite Zeile grün)
