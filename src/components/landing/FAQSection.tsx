import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const faqs = [{
  question: "«Ich habe alles versucht. Warum sollte das anders sein?»",
  answer: "Weil du bisher immer den Plan von jemand anderem befolgt hast. Hier ist es umgekehrt: Wir bauen gemeinsam DEINEN Plan – einen, der zu deinem Alltag passt. Kein Ernährungsplan aus dem Internet, sondern deine eigenen Regeln. Das ist der Grund, warum es diesmal klappen kann."
}, {
  question: "«Ich habe keine Zeit dafür.»",
  answer: "Versteh ich. Aber mal ehrlich: Wie viel Zeit verbringst du pro Woche damit, dich schlecht zu fühlen, zu googeln oder am Montag wieder von vorne anzufangen? Wir fügen nichts hinzu – wir räumen auf. Ein 90-Minuten-Gespräch kann dir Monate an Hin und Her ersparen."
}, {
  question: "«Was, wenn ich wieder scheitere?»",
  answer: "Das Gefühl kenne ich. Jede gescheiterte Diät kratzt am Selbstvertrauen. Deshalb fangen wir bewusst klein an – so klein, dass du gar nicht scheitern kannst. Und darauf bauen wir auf. Kein Alles-oder-Nichts. Einfach ein nächster Schritt, den du wirklich gehen kannst."
}, {
  question: "«Wie unterscheidet sich das von einem normalen Gesundheitscoach?»",
  answer: "Die meisten Coaches geben dir ihren Plan. Ich helfe dir, deinen eigenen zu bauen. Die meisten fordern Perfektion. Ich plane für 80% Umsetzung und 20% Leben. Und ich bin auch um 21 Uhr da, wenn die Gelüste kommen – nicht nur zur gebuchten Stunde."
}, {
  question: "«Geht es hier nur um Gewichtsverlust?»",
  answer: "Gewicht ist ein Nebeneffekt. Im Kern geht es darum, dass du dich wieder wohl in deinem Körper fühlst. Mehr Energie, besserer Schlaf, weniger Kopfkino ums Essen. Die Waage verändert sich, weil sich dein Alltag verändert – nicht umgekehrt."
}];
export function FAQSection() {
  return <section className="section-padding overflow-hidden">
      <div className="container mx-auto max-w-full overflow-hidden">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <p className="text-primary font-medium mb-3 sm:mb-4 flex items-center justify-center gap-2 text-sm sm:text-base">
            <span className="w-6 sm:w-8 h-px bg-primary"></span>
            FAQ
            <span className="w-6 sm:w-8 h-px bg-primary"></span>
          </p>
          <h2 className="heading-lg break-words">
            Häufige <span className="text-primary">Fragen</span>{" "}
            <span className="text-muted-foreground font-normal">
(und ehrliche Antworten)</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, i) => <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-xl sm:rounded-2xl px-4 sm:px-6 bg-card data-[state=open]:border-primary transition-colors">
                <AccordionTrigger className="text-left text-base sm:text-lg font-medium hover:no-underline py-4 sm:py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground pb-4 sm:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>;
}