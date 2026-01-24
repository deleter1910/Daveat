import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "«Ich habe alles versucht. Warum sollte das anders sein?»",
    answer:
      "Weil alles, was du versucht hast, externe Regeln aufzwang. Dies schafft innere Eigenverantwortung. Du folgst nicht meinem Plan—du folgst DEINEM Plan, den wir zusammen erstellt haben. Diese psychologische Verschiebung macht den Unterschied.",
  },
  {
    question: "«Ich habe keine Zeit dafür.»",
    answer:
      "Du verbringst bereits 30-60 Stunden pro Monat mit Schuldgefühlen, Recherchen und mentaler Last. Wir fügen deinem Zeitplan nichts hinzu—wir gewinnen diese Zeit zurück. Ausserdem untergräbst du deine Fähigkeit, für deine Familie da zu sein, indem du dich vernachlässigst. Kannst du es dir leisten, NICHT 90 Minuten zu investieren?",
  },
  {
    question: "«Was, wenn ich wieder scheitere?»",
    answer:
      "Jede gescheiterte Diät hat dich dich selbst weniger vertrauen lassen. Dieser Ansatz baut dieses Vertrauen wieder auf, indem wir mit kleinen, erreichbaren Veränderungen beginnen, die positive Dynamik schaffen. Wir richten dich nicht auf Perfektion ein—wir richten dich auf nachhaltigen Fortschritt ein.",
  },
  {
    question: "«Wie unterscheidet sich das von einem normalen Gesundheitscoach?»",
    answer:
      "Normale Coaches geben dir IHREN Plan. Ich helfe dir, DEINEN Plan zu erstellen. Normale Coaches fordern Perfektion. Ich plane für 80% Erfolg und 20% Freude. Normale Coaches verschwinden nach der Sitzung. Ich bin verfügbar, wenn du tatsächlich Unterstützung brauchst—um 21 Uhr, wenn die Gelüste kommen.",
  },
  {
    question: "«Geht es hier nur um Gewichtsverlust?»",
    answer:
      "Gewichtsverlust ist ein Nebenprodukt. Es geht um Energie, Selbstvertrauen, Präsenz und darum, zu werden, wer du sein willst. Klienten gewinnen körperliche Kapazität, mentale Klarheit, Selbstvertrauen und eine bessere Beziehung zum Essen. Die Waage ändert sich, weil sich dein Leben ändert.",
  },
];

export function FAQSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-primary"></span>
            FAQ
            <span className="w-8 h-px bg-primary"></span>
          </p>
          <h2 className="heading-lg">
            Häufige <span className="text-primary">Fragen</span>{" "}
            <span className="text-muted-foreground font-normal">(und ehrliche Antworten)</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-2xl px-6 bg-card data-[state=open]:border-primary transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
