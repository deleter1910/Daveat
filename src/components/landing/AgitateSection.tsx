import { Wallet, Clock, TrendingDown, ChevronRight } from "lucide-react";

const consequences = [
  {
    icon: Wallet,
    title: "Der Geldabfluss geht weiter",
    description: (
      <>
        Weitere <span className="text-destructive font-semibold">CHF 1'000-3'000</span> verschwendet dieses Jahr für Lösungen, die nicht funktionieren. Das sind{" "}
        <span className="text-destructive font-semibold">CHF 3'000-9'000+</span> über die nächsten drei Jahre—genug für jedes Jahr einen Familienurlaub nach Italien.
      </>
    ),
  },
  {
    icon: Clock,
    title: "Die Zeit verschwindet",
    description: (
      <>
        <span className="text-destructive font-semibold">30-60 Stunden pro Monat</span> verschlungen von Schuldgefühlen, Recherchen und mentaler Last. Das ist praktisch ein{" "}
        <span className="text-destructive font-semibold">Teilzeitjob</span>, den du mit Sorgen statt mit Präsenz bei deinen Kindern, Hobby, Familie und Freunden verbringst.
      </>
    ),
  },
  {
    icon: TrendingDown,
    title: "Die Abwärtsspirale vertieft sich",
    description: null,
    spirals: [
      "Deine Energie sinkt → du schläfst schlechter → du hast keine Kapazität für Bewegung",
      "Du isst aus Stress → fühlst dich schlechter → vertraust dir weniger → mehr Stress",
      "Du meidest soziale Essen oder fühlst dich danach schuldig",
      "Deine Kinder, Familie oder Freunde beobachten, wie du mit Essen kämpfst, und lernen dieselben ungesunden Muster",
    ],
  },
];

export function AgitateSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        {/* Headline */}
        <div className="max-w-3xl mb-16">
          <p className="text-destructive font-medium mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-destructive"></span>
            Die Konsequenzen
          </p>
          <h2 className="heading-lg mb-6">
            Was passiert, wenn sich{" "}
            <span className="text-destructive">nichts ändert</span>?
          </h2>
          <p className="text-body">
            Seien wir ehrlich, wohin dieser Weg führt:
          </p>
        </div>

        {/* Consequences Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {consequences.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-border/50 bg-background/50 hover:border-destructive/30 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
                <item.icon className="text-destructive" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              {item.description && (
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              )}
              {item.spirals && (
                <ul className="space-y-3">
                  {item.spirals.map((spiral, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <ChevronRight
                        className="text-destructive flex-shrink-0 mt-1"
                        size={16}
                      />
                      <span className="text-muted-foreground text-sm leading-relaxed">
                        {spiral}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Cruel Irony Block */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="p-8 rounded-2xl border-2 border-destructive/30 bg-destructive/5">
            <p className="text-lg md:text-xl leading-relaxed">
              <span className="text-destructive font-bold">Die grausame Ironie:</span>{" "}
              Du vernachlässigst deine Gesundheit, um dich um alle anderen zu kümmern—aber dadurch untergräbst du deine Fähigkeit, tatsächlich für sie da zu sein.
            </p>
          </div>
        </div>

        {/* Emotional Closing */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Am schmerzhaftesten? Jeden Morgen schaust du in den Spiegel und siehst jemanden, der du nicht sein willst.{" "}
            <span className="text-foreground font-medium">Jemand, der feststeckt. Jemand, der sich selbst aufgegeben hat.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
