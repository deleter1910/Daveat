
## Neues Testimonial hinzufügen

**Aufgabe**: Ein neues Testimonial von Alessandro D. zur Erfahrungen-Sektion auf der Startseite hinzufügen.

### Änderungen

**Datei: `src/pages/Index.tsx`**

1. **Testimonials-Array erweitern** (Zeile ~68):
```typescript
const testimonials = [
  {
    quote: "Nachdem ich den Kampf gegen mein Gewicht aufgegeben hatte, habe ich dank Daveat neue Motivation gefunden, mir selbst etwas Gutes zu tun. Mit seiner Unterstützung habe ich 17 Kilo verloren und fühle mich heute deutlich wohler in meinem Körper.",
    name: "Francesca",
    role: "35"
  },
  {
    quote: "Mit kleinen aber wichtigen Tipps konnte ich in 16 Monate 50kg verlieren. Die motivierende Beratung und Begleitung half und hilft mir sehr. Fühle mich so fit wie nie zuvor und werde dafür immer dankbar sein!",
    name: "Alessandro D.",
    role: "47"
  }
];
```

2. **Layout anpassen** um beide Testimonials anzuzeigen:
   - Grid-Layout von 1 Spalte auf 2 Spalten (Desktop) ändern
   - Alle Testimonials mit `.map()` rendern statt nur das erste

### Ergebnis
- Beide authentischen Testimonials werden nebeneinander angezeigt (Desktop)
- Auf Mobile werden sie untereinander gestapelt
- Konsistentes Design mit dem bestehenden `TestimonialCard`-Komponenten
