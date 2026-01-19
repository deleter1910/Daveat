import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Leaf, HandHeart } from "lucide-react";

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

      {/* Story Section */}
      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div className="p-8 rounded-3xl border border-border bg-card">
                <p className="text-xl leading-relaxed text-foreground">
                  "Ich habe Daveat gegründet, weil ich sah, wie viele engagierte Menschen an starren Diät-Vorgaben zerbrechen. Gesundheit ist kein Wettkampf. Es ist die Basis, um im Job und für die Familie da zu sein."
                </p>
              </div>
              
              <div className="p-8 rounded-3xl border border-primary/20 bg-primary/5">
                <p className="text-xl leading-relaxed text-foreground">
                  "Mein Ansatz ist pragmatisch: Was nicht in deinen Kalender passt, existiert nicht. Ich coache Realität, keine Theorie."
                </p>
              </div>
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
            Kontakt aufnehmen
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
