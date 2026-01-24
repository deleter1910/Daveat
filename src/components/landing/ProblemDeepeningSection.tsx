import { XCircle } from "lucide-react";

const failureReasons = [
  {
    text: "Du die falsche Kennzahl verfolgst",
    detail: "(die Zahl auf der Waage statt Gesundheit)",
  },
  {
    text: "Du den falschen Ansatz verwendest",
    detail: "(externe Regeln statt innere Überzeugung)",
  },
  {
    text: "Mit dem falschen Zeitrahmen",
    detail: "(30-Tage-Fixes statt nachhaltige Lifestyle-Integration)",
  },
];

export function ProblemDeepeningSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Main Statement */}
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-8">
              Das eigentliche Problem?{" "}
              <span className="text-primary">Man hat dir eine Lüge verkauft.</span>
            </h2>
          </div>

          {/* The Lie */}
          <div className="space-y-6 mb-12">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Die Diätindustrie will, dass du glaubst, Transformation passiert in 30 Tagen. 
              Dass du perfekt essen musst. Dass du eine komplette Lebensumstellung brauchst.
            </p>
          </div>

          {/* Authority Stat */}
          <div className="py-12 mb-12 border-y border-border">
            <p className="text-4xl md:text-5xl font-bold text-center">
              Deshalb scheitern <span className="text-destructive">95%</span> aller Diäten.
            </p>
          </div>

          {/* The Truth */}
          <div className="space-y-6 mb-16">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Was sie dir nicht sagen: Du musst nicht alles perfekt machen. Du musst nur{" "}
              <span className="text-foreground font-semibold">80% richtig machen</span>, um 
              nachhaltige Veränderung zu erreichen. Und 20% sollten pure Freude sein – denn 
              das Leben muss erfüllend bleiben.
            </p>
          </div>

          {/* Why You Fail */}
          <div className="bg-card rounded-3xl border border-border p-8 md:p-12 mb-12">
            <p className="text-xl text-foreground mb-8">
              Du scheiterst nicht, weil dir die Willenskraft fehlt.{" "}
              <span className="text-primary font-semibold">Du scheiterst, weil:</span>
            </p>
            
            <div className="space-y-6">
              {failureReasons.map((reason, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <XCircle className="text-destructive" size={18} />
                  </div>
                  <div>
                    <span className="text-lg font-semibold text-foreground">{reason.text}</span>
                    <span className="text-lg text-muted-foreground"> {reason.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Question */}
          <div className="text-center">
            <p className="text-xl text-muted-foreground mb-4">
              Jede Diät, die du versucht hast, hat dir fremde Regeln aufgezwungen.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-primary">
              Was wäre, wenn du deine eigenen Regeln erschaffst?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
