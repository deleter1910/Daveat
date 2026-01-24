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
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-primary"></span>
            Der wahre Wert
            <span className="w-8 h-px bg-primary"></span>
          </p>
          <h2 className="heading-lg mb-6">
            Die Transformation, die du <span className="text-primary">wirklich</span> kaufst
          </h2>
          <p className="text-body">
            Es geht nicht um Gewichtsverlust. Gewichtsverlust ist das Nebenprodukt.{" "}
            <span className="text-foreground font-semibold">Das bekommst du wirklich:</span>
          </p>
        </div>

        {/* Quantifiable Value */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-8 text-center">
            Quantifizierbarer Wert{" "}
            <span className="text-primary">(CHF 3'000 - 9'000 über 3 Jahre)</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Money Back */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Wallet className="text-primary" size={28} />
                </div>
                <h4 className="text-xl font-bold">Geld zurück in deiner Tasche</h4>
              </div>
              <p className="text-muted-foreground mb-4">
                <span className="text-primary font-bold text-2xl">CHF 1'000+</span>{" "}
                <span className="text-foreground">pro Jahr</span> direkte Einsparungen durch 
                Eliminierung verschwendeter Fitnessabos, gescheiterter Programme, unnötiger 
                Supplements und potenzieller medizinischer Kosten.
              </p>
              <p className="text-foreground font-medium">
                Das sind{" "}
                <span className="text-primary font-bold text-xl">CHF 3'000 - 9'000+</span>{" "}
                über drei Jahre.
              </p>
            </div>

            {/* Time Back */}
            <div className="p-8 rounded-2xl border border-border bg-background">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="text-primary" size={28} />
                </div>
                <h4 className="text-xl font-bold">Zurückgewonnene Zeit</h4>
              </div>
              <p className="text-muted-foreground mb-4">
                <span className="text-primary font-bold text-2xl">30-60 Stunden</span>{" "}
                <span className="text-foreground">pro Monat</span> mentaler Raum, der frei wird.
              </p>
              <p className="text-foreground mb-2">
                Raum für dein Business, deine Hobbys, deine Beziehungen.
              </p>
              <p className="text-muted-foreground italic">
                Oder einfach präsent sein mit deinen Kindern, statt an morgen zu denken.
              </p>
            </div>
          </div>
        </div>

        {/* Unquantifiable Value */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-2 text-center">
            Unquantifizierbarer Wert
          </h3>
          <p className="text-center text-muted-foreground mb-8">
            (Der Teil, der <span className="text-primary font-semibold">wirklich</span> zählt)
          </p>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg font-medium mb-6 text-center">Was Klienten wirklich gewinnen:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {emotionalBenefits.map((benefit, i) => (
                <div 
                  key={i} 
                  className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border"
                >
                  <benefit.icon className="text-primary flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-foreground text-sm">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ripple Effect */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto p-8 rounded-2xl border border-primary/20 bg-primary/5">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="text-primary" size={24} />
              <h3 className="text-xl font-semibold">Der Welleneffekt</h3>
            </div>
            <div className="space-y-4">
              {rippleEffects.map((effect, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <p className="text-foreground">{effect}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center">
          <div className="inline-block px-8 py-6 rounded-2xl border border-primary/30 bg-primary/5">
            <p className="text-xl md:text-2xl font-medium text-foreground">
              Es gibt kein Preisschild für ein Leben,<br />
              <span className="text-primary">das sich besser anfühlt.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
