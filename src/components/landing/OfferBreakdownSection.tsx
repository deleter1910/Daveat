import { CheckCircle, Clock, MessageCircle, Users, Sparkles } from "lucide-react";

const sessionFeatures = [
  {
    title: "Diagnose deines Status Quo",
    description: "Was blockiert dich wirklich? Welchen emotionalen Preis zahlst du jeden Tag?"
  },
  {
    title: "Definiere deine Ziele",
    description: "90-Tage-, 180-Tage- und 365-Tage-Ziele—sowohl messbare Ergebnisse als auch das tiefere 'Warum', das dich wirklich motiviert"
  },
  {
    title: "Baue deine neue Identität",
    description: "Wer willst du werden? Wie sieht die transformierte Version von dir aus?"
  },
  {
    title: "Co-kreiere deine Big Rocks",
    description: "Persönliche Regeln für Ernährung, Struktur, Schlaf und Gewohnheiten, die zu DEINEM spezifischen Leben passen (nicht zum Ideal von jemand anderem)"
  },
  {
    title: "Designe dein Worst-Case-Protokoll",
    description: "Vorab geplante Reaktionen für Stress, Reisen, Gelüste und schwierige Situationen—damit du nie mit reiner Willenskraft kämpfen musst"
  }
];

export function OfferBreakdownSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-primary font-medium mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-primary"></span>
            Das Angebot
          </p>
          <h2 className="heading-lg">
            Was du <span className="text-primary">tatsächlich</span> bekommst
          </h2>
        </div>

        {/* Core Offer Block */}
        <div className="mb-12">
          <div className="border border-primary/30 rounded-3xl p-8 md:p-12">
            {/* Core Offer Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Clock className="text-primary" size={28} />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  Die <span className="text-primary">90-Minuten</span>-Strategiesitzung
                </h3>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-10">
              Wir erstellen deinen Blueprint zusammen, live, in Echtzeit:
            </p>

            {/* Features List */}
            <div className="space-y-6 mb-10">
              {sessionFeatures.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={22} />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm md:text-base">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlight Box */}
            <div className="bg-primary/5 border border-primary/30 rounded-2xl p-6 flex items-start gap-4">
              <Sparkles className="text-primary flex-shrink-0 mt-1" size={24} />
              <p className="text-foreground">
                <strong>Du gehst mit einem fertigen Plan</strong>, den du selbst erstellt hast. In deinen Worten. Für dein Leben.
              </p>
            </div>
          </div>
        </div>

        {/* Add-ons Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* WhatsApp Coaching */}
          <div className="border border-border rounded-2xl p-8 bg-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MessageCircle className="text-primary" size={24} />
              </div>
              <div>
                <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">Optional</span>
                <h3 className="text-xl font-bold mt-1">WhatsApp-Coaching</h3>
              </div>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                <span>On-Demand-Unterstützung mit <span className="text-primary font-medium">24-Stunden-Reaktionszeit</span></span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                <span>Echtzeit-Anleitung genau im Moment der Entscheidung: im Restaurant, im Supermarkt oder wenn du Rezeptideen brauchst</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                <span>Verantwortlichkeit ohne Starrheit—verfügbar in deiner Tasche, wenn es zählt</span>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div className="border border-border rounded-2xl p-8 bg-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Der <span className="text-primary">8020 Club</span> Community</h3>
              </div>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                <span>Schliesse dich anderen auf derselben Reise an</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                <span>Teile Motivation, Rezepte und Erfolge</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                <span>Sieh den Beweis, dass Transformation möglich ist, indem du andere erfolgreich siehst</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                <span>Organische Verantwortlichkeit ohne erzwungene Struktur</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
