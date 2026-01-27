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
    <section className="section-padding bg-card overflow-hidden">
      <div className="container mx-auto max-w-full overflow-hidden">
        {/* Headline */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <p className="text-destructive font-medium mb-4 sm:mb-6 flex items-center gap-2 text-sm sm:text-base">
            <span className="w-6 sm:w-8 h-px bg-destructive"></span>
            Die Konsequenzen
          </p>
          <h2 className="heading-lg mb-4 sm:mb-6 break-words">
            Was passiert, wenn sich{" "}
            <span className="text-destructive">nichts ändert</span>?
          </h2>
          <p className="text-body break-words">
            Seien wir ehrlich, wohin dieser Weg führt:
          </p>
        </div>

        {/* Consequences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-16">
          {consequences.map((item, i) => (
            <div
              key={i}
              className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-border/50 bg-background/50 hover:border-destructive/30 transition-colors duration-300"
            >
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-destructive/10 flex items-center justify-center mb-4 sm:mb-6">
                <item.icon className="text-destructive" size={22} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 break-words">{item.title}</h3>
              {item.description && (
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
                  {item.description}
                </p>
              )}
              {item.spirals && (
                <ul className="space-y-2 sm:space-y-3">
                  {item.spirals.map((spiral, j) => (
                    <li key={j} className="flex items-start gap-2 sm:gap-3">
                      <ChevronRight
                        className="text-destructive flex-shrink-0 mt-0.5 sm:mt-1"
                        size={14}
                      />
                      <span className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
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
        <div className="max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-2 border-destructive/30 bg-destructive/5">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed break-words">
              <span className="text-destructive font-bold">Die grausame Ironie:</span>{" "}
              Du vernachlässigst deine Gesundheit, um dich um alle anderen zu kümmern—aber dadurch untergräbst du deine Fähigkeit, tatsächlich für sie da zu sein.
            </p>
          </div>
        </div>

        {/* Emotional Closing */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed break-words">
            Am schmerzhaftesten? Jeden Morgen schaust du in den Spiegel und siehst jemanden, der du nicht sein willst.{" "}
            <span className="text-foreground font-medium">Jemand, der feststeckt. Jemand, der sich selbst aufgegeben hat.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
