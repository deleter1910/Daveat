import { Heart, CheckCircle, Target } from "lucide-react";

const methodReasons = [
  {
    title: "Du besitzt es",
    description: "Wenn du deine eigenen Regeln setzt, verpflichtest du dich statt zu befolgen",
  },
  {
    title: "Es passt zu deinem Leben",
    description: "Keine radikale Umstellung – nur strategische Änderungen, die sich natürlich integrieren",
  },
  {
    title: "Du wirst unterstützt",
    description: "Anleitung in genau den Momenten, wenn du sie am meisten brauchst",
  },
  {
    title: "Es ist nachhaltig",
    description: "80% Aufwand, 20% Freude bedeutet, du kannst es tatsächlich beibehalten",
  },
  {
    title: "Die Community verstärkt es",
    description: "Andere auf derselben Reise schaffen natürliche Verantwortlichkeit",
  },
];

const emotionalStatements = [
  "Ich weiss, wie es sich anfühlt, in den Spiegel zu schauen und zu hassen, was du siehst.",
  "Ich kenne die Schuldgefühle nach jedem «Cheat Meal».",
  "Ich kenne die Erschöpfung des Versuchens und wieder Scheiterns.",
];

export function AuthoritySection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-primary font-medium mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-primary"></span>
            Warum es funktioniert
          </p>
          <h2 className="heading-lg">
            Warum das funktioniert, wenn{" "}
            <span className="text-primary">alles andere gescheitert</span> ist
          </h2>
        </div>

        {/* Block 1: Empathie */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Story */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Heart className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold">
                Ich bin diesen Weg gegangen. Ich kenne den Kampf.
              </h3>
            </div>
            <p className="text-body mb-8">
              Ich bin zwar ein zertifizierter Ernährungsberater, aber ich gebe
              keine Lehrbuchratschläge. Ich bin jemand, der durch die
              Selbstzweifel, die gescheiterten Diäten, den Jojo-Effekt und den
              eventuellen Durchbruch{" "}
              <span className="font-semibold text-foreground">gelebt hat</span>.
            </p>
          </div>

          {/* Right: Emotional Statements */}
          <div className="space-y-4">
            {emotionalStatements.map((statement, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50"
              >
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-foreground italic">{statement}</p>
              </div>
            ))}
            <p className="text-lg font-semibold text-foreground pt-4">
              Und ich weiss, was es braucht, um{" "}
              <span className="text-primary">endlich frei</span> zu kommen.
            </p>
          </div>
        </div>

        {/* Empathy Highlight Box */}
        <div className="p-8 rounded-2xl bg-primary/5 border border-primary/30 mb-20">
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
            Diese gelebte Erfahrung schafft Empathie, die nicht gelehrt oder
            zertifiziert werden kann. Wenn du mit mir sprichst, verstehe ich
            deinen Kampf nicht nur theoretisch —{" "}
            <span className="text-primary font-semibold">
              ich habe ihn gefühlt
            </span>
            .
          </p>
        </div>

        {/* Block 2: Methode */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Die Methode ist erprobt
          </h3>
          <p className="text-muted-foreground text-center mb-12">
            Das ist nicht experimentell. Das Framework funktioniert, weil:
          </p>

          {/* Checkmark Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {methodReasons.slice(0, 4).map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={22} />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {reason.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Fifth item centered */}
          <div className="flex justify-center mb-12">
            <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors max-w-md">
              <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={22} />
              <div>
                <h4 className="font-semibold text-foreground mb-1">
                  {methodReasons[4].title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {methodReasons[4].description}
                </p>
              </div>
            </div>
          </div>

          {/* Closing Highlight */}
          <div className="p-8 rounded-2xl bg-primary/5 border border-primary/30">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Target className="text-primary" size={24} />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Am wichtigsten
              </span>
            </div>
            <p className="text-xl md:text-2xl text-center font-medium max-w-2xl mx-auto">
              Wir optimieren nicht für kurzfristigen Gewichtsverlust. Wir
              optimieren für{" "}
              <span className="text-primary font-semibold">
                die Person, die du werden willst
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
