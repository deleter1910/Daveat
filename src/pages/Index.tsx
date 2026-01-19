import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Battery, Scale, Shield } from "lucide-react";

const principles = [
  {
    icon: Battery,
    title: "Kein Extra-Aufwand.",
    description: "Wir passen die Ernährung an dein Leben an, nicht umgekehrt. Kein separates Kochen, keine stundenlangen Vorbereitungen.",
  },
  {
    icon: Scale,
    title: "Budget statt Verbote.",
    description: "Wer sich alles verbietet, hält nicht durch. Wir arbeiten mit einem \"Energie-Budget\". Du entscheidest selbst, wofür du es nutzt – ob für das Geschäftsessen oder den Familienabend.",
  },
  {
    icon: Shield,
    title: "Persönliches Sicherheitsnetz.",
    description: "Wissen allein reicht nicht. Ich begleite dich als Ansprechpartner im Hintergrund, um Fehlentscheidungen in Stressmomenten zu verhindern.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding min-h-[90vh] flex items-center">
        <div className="container mx-auto">
          <div className="max-w-5xl">
            <p className="text-primary font-medium mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              Willkommen bei Daveat
            </p>
            <h1 className="heading-xl mb-8">
              Gesundheit, die in deinen<br />echten Alltag <span className="text-primary">passt</span>.
            </h1>
            <p className="text-body max-w-2xl mb-12">
              Für Berufstätige und Eltern, die keine Zeit für komplizierte Diäten haben. Gewinne deine Energie zurück – mit einem System, das dich entlastet statt stresst.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary">Zum Angebot <ArrowRight className="ml-2" size={18} /></Link>
              <Link to="/about" className="btn-outline">Über mich</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <p className="text-primary font-medium mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              Verständnis
            </p>
            <h2 className="heading-lg mb-8">
              Warum du bisher gescheitert bist<br /><span className="text-primary">(Es liegt nicht an deiner Disziplin)</span>.
            </h2>
            <p className="text-body">
              Du hast Erfolg im Job und organisierst deinen Alltag. Aber beim Thema Ernährung und Energie fühlt es sich an wie ein ständiger Kampf. Warum? Weil die meisten Gesundheitstipps für Menschen gemacht sind, die unendlich Zeit haben. Du brauchst kein neues Rezeptbuch und keinen weiteren strengen Plan, der beim ersten Stress-Meeting zusammenbricht. Du brauchst eine Strategie, die für deinen Alltag arbeitet, nicht dagegen.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section - Principles */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-4">Unsere Prinzipien</p>
            <h2 className="heading-lg">
              So funktioniert<br /><span className="text-primary">Daveat</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, i) => (
              <div key={i} className="p-8 rounded-3xl border border-border bg-card hover:border-primary transition-colors group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <principle.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg text-primary-foreground mb-6">Bereit für mehr Energie?</h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Lass uns gemeinsam herausfinden, wie du deine Gesundheit zurückgewinnst – ohne deinen Alltag auf den Kopf zu stellen.
          </p>
          <Link to="/services" className="inline-flex items-center px-8 py-4 rounded-full bg-background text-foreground font-medium hover:bg-foreground hover:text-background transition-all">
            Zum Angebot <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
