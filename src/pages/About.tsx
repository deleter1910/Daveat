import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Leaf, HandHeart } from "lucide-react";
import davePhoto from "@/assets/dave-photo.jpeg";

const values = [
  {
    icon: Heart,
    title: "Verständnis statt Bewertung",
    description: "Ich höre zu, ohne zu urteilen. Jeder Mensch hat seine Geschichte und seine Herausforderungen.",
  },
  {
    icon: Leaf,
    title: "Nachhaltigkeit vor Schnelligkeit",
    description: "Langfristige Veränderung schlägt kurzfristige Erfolge. Wir bauen Gewohnheiten, keine Crash-Diäten.",
  },
  {
    icon: HandHeart,
    title: "Entlastung vor Optimierungswahn",
    description: "Du musst nicht perfekt sein. Es geht darum, dein Leben einfacher zu machen, nicht komplizierter.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <p className="text-primary font-medium mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              Über mich
            </p>
            <h1 className="heading-xl mb-8">
              Kein Fitness-Guru.<br />Sondern dein Stratege für<br /><span className="text-primary">mehr Energie</span>.
            </h1>
          </div>
        </div>
      </section>

      {/* Photo Section */}
      <section className="section-padding pt-0 pb-8">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="relative">
              {/* Green accent ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 blur-sm" />
              {/* Photo placeholder */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-primary/30 bg-card overflow-hidden">
                <img 
                  src={davePhoto} 
                  alt="Dave - Daveat Gründer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="section-padding pt-8">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              <p>
                Ich bin Dave. Und ich sage dir ehrlich: Ich war nie der Typ, der morgens um 5 aufsteht, einen Smoothie trinkt und ins Gym rennt.
              </p>

              <p>
                Ich war der Typ, der <span className="text-foreground font-medium">alles über Ernährung wusste</span> — und trotzdem abends auf dem Sofa Chips gegessen hat. Der sich am Montag vorgenommen hat, "ab jetzt alles anders zu machen". Und am Mittwoch wieder bei Pizza gelandet ist.
              </p>

              <p>
                <span className="text-foreground font-medium">Das Wissen war nie das Problem.</span> Das Problem war, dass kein einziger Plan zu meinem echten Leben gepasst hat. Nicht zu meinem Stress. Nicht zu meinem Zeitplan. Nicht zu der Art, wie ich tatsächlich funktioniere.
              </p>

              <div className="p-6 sm:p-8 rounded-2xl border border-primary/20 bg-primary/5 my-8">
                <p className="text-foreground">
                  Also habe ich aufgehört, fremde Regeln zu befolgen. Und angefangen, <strong>meine eigenen</strong> zu schreiben. Regeln, die zu meinem Alltag passen. Nicht perfekt — aber machbar. Und plötzlich hat es funktioniert.
                </p>
              </div>

              <p>
                Heute helfe ich anderen Menschen dabei, genau das Gleiche zu tun. Nicht mit einem weiteren Diätplan. Sondern mit einem System, das <span className="text-foreground font-medium">zu ihrem Leben passt</span> — nicht umgekehrt.
              </p>

              <p>
                Mein pragmatischster Grundsatz: <span className="text-primary font-medium">Was nicht in deinen Kalender passt, existiert nicht.</span> Ich coache Realität, keine Theorie.
              </p>
            </div>

            {/* Proof Point */}
            <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-border bg-card">
              <p className="text-xl sm:text-2xl font-bold text-center mb-4">
                Das Ergebnis, das mich am meisten bewegt hat:
              </p>
              <blockquote className="text-base sm:text-lg text-muted-foreground italic text-center leading-relaxed">
                "Mit kleinen aber wichtigen Tipps konnte ich in 16 Monaten <span className="text-primary font-bold not-italic">50kg verlieren</span>. Fühle mich so fit wie nie zuvor und werde dafür immer dankbar sein."
              </blockquote>
              <p className="text-center mt-4 text-sm text-muted-foreground">
                — Alessandro D., 47, Klient
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-4">Meine Werte</p>
            <h2 className="heading-lg">
              Wofür ich<br /><span className="text-primary">stehe</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl border border-border bg-background hover:border-primary transition-colors duration-300 group text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
                  <value.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg text-primary-foreground mb-6">
            Lass uns sprechen.
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Kein Verkaufsgespräch. Nur ein ehrlicher Austausch, ob meine Methode zu deiner Situation passt.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-background text-foreground font-medium transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            Unverbindlich anfragen
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
