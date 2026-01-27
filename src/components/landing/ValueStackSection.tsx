import { Wallet, Clock, Sparkles, Users, Heart } from "lucide-react";

const emotionalBenefits = [
  {
    icon: Sparkles,
    text: "Energiegeladen aufwachen statt erschöpft",
  },
  {
    icon: Heart,
    text: "In den Spiegel schauen ohne Scham",
  },
  {
    icon: Users,
    text: "Mit Freunden essen gehen ohne Schuldgefühle",
  },
  {
    icon: Sparkles,
    text: "Mit deinen Kindern spielen ohne ausser Atem zu kommen",
  },
  {
    icon: Heart,
    text: "Dir wieder selbst vertrauen, nachdem du bewiesen hast, dass du dich ändern kannst",
  },
  {
    icon: Sparkles,
    text: "Dich stark, fähig, diszipliniert fühlen—und beobachten, wie sich diese Disziplin auf Arbeit und Beziehungen überträgt",
  },
];

const rippleEffects = [
  "Dein Partner bemerkt es und beginnt die eigene Reise",
  "Deine Kinder wachsen auf und beobachten ein Elternteil, das gut isst, sich bewegt, Energie hat und präsent ist",
  "Du durchbrichst Zyklen ungesunder Beziehungen zum Essen für die nächste Generation",
];

export function ValueStackSection() {
  return (
    <section className="section-padding bg-card overflow-hidden">
      <div className="container mx-auto max-w-full overflow-hidden">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className="text-primary font-medium mb-3 sm:mb-4 flex items-center justify-center gap-2 text-sm sm:text-base">
            <span className="w-6 sm:w-8 h-px bg-primary"></span>
            Der wahre Wert
            <span className="w-6 sm:w-8 h-px bg-primary"></span>
          </p>
          <h2 className="heading-lg mb-4 sm:mb-6 break-words">
            Die Transformation, die du <span className="text-primary">wirklich</span> kaufst
          </h2>
          <p className="text-body break-words">
            Es geht nicht um Gewichtsverlust. Gewichtsverlust ist das Nebenprodukt.{" "}
            <span className="text-foreground font-semibold">Das bekommst du wirklich:</span>
          </p>
        </div>

        {/* Quantifiable Value */}
        <div className="mb-10 sm:mb-16">
          <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-center">
            Quantifizierbarer Wert{" "}
            <span className="text-primary">(CHF 3'000 - 9'000 über 3 Jahre)</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Money Back */}
            <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-border bg-background">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Wallet className="text-primary" size={24} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold">Geld zurück in deiner Tasche</h4>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                <span className="text-primary font-bold text-xl sm:text-2xl">CHF 1'000+</span>{" "}
                <span className="text-foreground">pro Jahr</span> direkte Einsparungen durch 
                Eliminierung verschwendeter Fitnessabos, gescheiterter Programme, unnötiger 
                Supplements und potenzieller medizinischer Kosten.
              </p>
              <p className="text-sm sm:text-base text-foreground font-medium">
                Das sind{" "}
                <span className="text-primary font-bold text-lg sm:text-xl">CHF 3'000 - 9'000+</span>{" "}
                über drei Jahre.
              </p>
            </div>

            {/* Time Back */}
            <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-border bg-background">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="text-primary" size={24} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold">Zurückgewonnene Zeit</h4>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                <span className="text-primary font-bold text-xl sm:text-2xl">30-60 Stunden</span>{" "}
                <span className="text-foreground">pro Monat</span> mentaler Raum, der frei wird.
              </p>
              <p className="text-sm sm:text-base text-foreground mb-2">
                Raum für dein Business, deine Hobbys, deine Beziehungen.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground italic">
                Oder einfach präsent sein mit deinen Kindern, statt an morgen zu denken.
              </p>
            </div>
          </div>
        </div>

        {/* Unquantifiable Value */}
        <div className="mb-10 sm:mb-16">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">
            Unquantifizierbarer Wert
          </h3>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
            (Der Teil, der <span className="text-primary font-semibold">wirklich</span> zählt)
          </p>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg font-medium mb-4 sm:mb-6 text-center">Was Klienten wirklich gewinnen:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {emotionalBenefits.map((benefit, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-background border border-border"
                >
                  <benefit.icon className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <p className="text-foreground text-xs sm:text-sm">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ripple Effect */}
        <div className="mb-10 sm:mb-16">
          <div className="max-w-3xl mx-auto p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-primary/20 bg-primary/5">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Users className="text-primary" size={20} />
              <h3 className="text-lg sm:text-xl font-semibold">Der Welleneffekt</h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {rippleEffects.map((effect, i) => (
                <div key={i} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <p className="text-sm sm:text-base text-foreground">{effect}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center">
          <div className="inline-block px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl border border-primary/30 bg-primary/5">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-foreground break-words">
              Es gibt kein Preisschild für ein Leben,<br />
              <span className="text-primary">das sich besser anfühlt.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
