

## Testimonials auf echte Klientenaussagen reduzieren

### Aktuelle Situation

- **SocialProofSection**: Enthält die Geschichte vom 50kg-Klienten (16 Monate)
- **Testimonials-Sektion**: 3 fiktive Testimonials (Sarah M., Thomas K., Julia R.)
- **Echte Aussagen**: Nur 1 echte Aussage von Francesca vorhanden

### Geplante Änderungen

#### Option A: Nur Francescas Testimonial zeigen

**Datei: `src/pages/Index.tsx`**

Die Testimonials-Array auf eine einzige echte Aussage reduzieren:

```typescript
const testimonials = [{
  quote: "Nachdem ich den Kampf gegen mein Gewicht aufgegeben hatte, habe ich dank Daveat neue Motivation gefunden, mir selbst etwas Gutes zu tun. Mit seiner Unterstützung habe ich 17 Kilo verloren und fühle mich heute deutlich wohler in meinem Körper.",
  name: "Francesca",
  role: "35"
}];
```

**Layout-Anpassung:**
- Grid von 3 Spalten auf zentrierte Einzelkarte ändern
- Karte grösser und prominenter gestalten
- Max-Breite auf `max-w-2xl` setzen für bessere Lesbarkeit

#### Alternative Option B: Testimonials-Sektion entfernen

Falls du nur eine Aussage hast und die SocialProofSection (50kg-Geschichte) bereits echte Ergebnisse zeigt, könnte die Testimonials-Sektion komplett entfernt werden um Redundanz zu vermeiden.

---

### Technische Umsetzung (Option A)

| Datei | Änderung |
|-------|----------|
| `src/pages/Index.tsx` | Testimonials-Array auf 1 Eintrag reduzieren, Grid-Layout anpassen |

**Vorher:**
```text
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
```

**Nachher:**
```text
<div className="flex justify-center">
  <div className="max-w-2xl">
```

---

### Frage zur Klärung

Möchtest du:
- **Option A**: Nur Francescas Testimonial anzeigen (empfohlen)
- **Option B**: Die Testimonials-Sektion komplett entfernen (da SocialProofSection bereits existiert)

