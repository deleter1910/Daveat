import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Für wen ist Daveat geeignet?",
    answer:
      "Daveat ist ideal für Berufstätige und Eltern zwischen 30-45 Jahren, die wenig Zeit haben, aber nachhaltig mehr Energie und Gesundheit erreichen wollen. Du brauchst keine Vorkenntnisse – nur die Bereitschaft, kleine Änderungen umzusetzen.",
  },
  {
    question: "Wie viel Zeit muss ich investieren?",
    answer:
      "Minimal. Der Strategie-Workshop dauert 90 Minuten. Danach sind es wenige Minuten pro Tag für Umsetzung. Die WhatsApp-Begleitung passt sich deinem Tempo an – du schreibst, wann es dir passt.",
  },
  {
    question: "Funktioniert das auch, wenn meine Familie nicht mitmacht?",
    answer:
      "Absolut. Das System ist darauf ausgelegt, in deinen bestehenden Familienalltag zu passen. Du musst nicht separat kochen oder besondere Anforderungen stellen.",
  },
  {
    question: "Was passiert nach den 3 Monaten Begleitung?",
    answer:
      "Nach 90 Tagen hast du die neuen Gewohnheiten verinnerlicht. Die meisten Klienten brauchen danach keine weitere Begleitung. Bei Bedarf gibt es aber flexible Verlängerungsoptionen.",
  },
  {
    question: "Muss ich auf alles verzichten?",
    answer:
      "Nein! Wir arbeiten mit einem Energie-Budget, nicht mit Verboten. Du entscheidest selbst, wofür du es einsetzt – Geschäftsessen, Familienfeier oder Dessert sind alle möglich.",
  },
  {
    question: "Ist das eine klassische Diät?",
    answer:
      "Definitiv nicht. Daveat ist eine Lifestyle-Strategie, keine kurzfristige Diät. Wir optimieren deinen Alltag für mehr Energie – Gewichtsverlust ist oft ein willkommener Nebeneffekt.",
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
            Häufige <span className="text-primary">Fragen</span>
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
