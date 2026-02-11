import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingDown, Zap, Users, Clock, Check, ChevronRight, Quote } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    text: "Steigende Absenzen und sinkende Produktivität",
  },
  {
    icon: Users,
    text: "Mitarbeitende, die nach dem Mittag kaum noch leistungsfähig sind",
  },
  {
    icon: Zap,
    text: "Klassische BGM-Massnahmen, die gut gemeint sind – aber nicht wirken",
  },
];

const steps = [
  {
    number: "01",
    title: "Kurzes Gespräch",
    description: "Wir klären in 15 Minuten, wo Ihr Team steht und was am meisten bringen würde.",
  },
  {
    number: "02",
    title: "Massgeschneiderter Workshop",
    description: "Ich entwickle einen Workshop, der genau auf die Bedürfnisse und den Alltag Ihres Teams zugeschnitten ist.",
  },
  {
    number: "03",
    title: "Optional: Follow-up",
    description: "Für Mitarbeitende, die tiefer einsteigen wollen, biete ich individuelles Coaching an.",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <p className="text-primary font-medium mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              Für Unternehmen
            </p>
            <h1 className="heading-xl mb-8">
              Müde Teams kosten mehr<br />als <span className="text-primary">Sie denken</span>.
            </h1>
            <p className="text-body max-w-2xl">
              Praxisnahe Workshops zu Ernährung und Energie – damit Ihre Mitarbeitenden leistungsfähig bleiben, ohne auszubrennen.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 text-lg"
              >
                Unverbindliches Gespräch vereinbaren
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem + Stats Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-10">
              Das Problem, das <span className="text-primary">niemand ausspricht</span>
            </h2>

            <div className="space-y-4 mb-12">
              {problems.map((problem, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl border border-border bg-card"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <problem.icon className="text-primary" size={20} />
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed pt-1">{problem.text}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 sm:p-8 rounded-2xl border border-primary/20 bg-primary/5 text-center">
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">CHF 8'000</p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Durchschnittliche Ersparnis pro Mitarbeitende/Jahr durch weniger Absenzen
                </p>
              </div>
              <div className="p-6 sm:p-8 rounded-2xl border border-primary/20 bg-primary/5 text-center">
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">75%</p>
                <p className="text-sm sm:text-base text-muted-foreground">
                  der Schweizer Betriebe setzen BGM-Massnahmen um – aber wie viele davon wirken wirklich?
                </p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Quelle: Gesundheitsförderung Schweiz, Job-Stress-Index
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-4">Die Lösung</p>
              <h2 className="heading-lg">
                Kein Frontalvortrag.<br /><span className="text-primary">Ein echter Workshop.</span>
              </h2>
            </div>

            <div className="p-8 md:p-12 rounded-3xl border border-border bg-background mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Was Sie erwartet</h3>
                  <ul className="space-y-3">
                    {[
                      "Interaktiver Workshop (60–120 Min.)",
                      "Sofort anwendbare Tipps für den Arbeitsalltag",
                      "Basierend auf der 80/20-Philosophie: machbar statt perfekt",
                      "Für Teams jeder Grösse, vor Ort oder hybrid",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="text-primary" size={12} />
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Was es nicht ist</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-muted-foreground/50 flex-shrink-0 mt-0.5">&#x2717;</span>
                      <span>Kein PowerPoint-Marathon</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-muted-foreground/50 flex-shrink-0 mt-0.5">&#x2717;</span>
                      <span>Keine Diät-Vorschriften</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-muted-foreground/50 flex-shrink-0 mt-0.5">&#x2717;</span>
                      <span>Kein erhobener Zeigefinger</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Flagship Workshop */}
            <div className="p-6 sm:p-8 rounded-2xl border border-primary/20 bg-primary/5">
              <p className="text-sm text-primary font-medium mb-2">Beliebtestes Thema</p>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                Energie durch Ernährung – was wirklich funktioniert im Arbeitsalltag
              </h3>
              <p className="text-muted-foreground mb-4">
                Warum das 14-Uhr-Tief kein Schicksal ist. Und was Ihr Team konkret ändern kann, ohne den ganzen Alltag umzukrempeln.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ChevronRight className="text-primary" size={16} />
                <span>Weitere Themen auf Anfrage: Meal Prep, Stressessen, 80/20-Regel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-4">So läuft es ab</p>
              <h2 className="heading-lg">
                In <span className="text-primary">3 Schritten</span> zum Workshop
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="p-6 sm:p-8 rounded-2xl border border-border bg-card text-center"
                >
                  <span className="text-4xl font-bold text-primary/20 block mb-4">{step.number}</span>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Dave Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-4">Warum daveat</p>
              <h2 className="heading-lg">
                Kein Theoretiker.<br /><span className="text-primary">Ein Praktiker.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Ich bin Dave – zertifizierter Ernährungsberater und jemand, der selbst jahrelang zwischen Wissen und Umsetzung feststeckte.
                </p>
                <p>
                  Mein Ansatz ist nicht akademisch, sondern <span className="text-foreground font-medium">alltagsgetestet</span>. Ich spreche die Sprache Ihrer Mitarbeitenden, nicht die eines Lehrbuchs.
                </p>
                <p>
                  Was ich im 1:1-Coaching bewiesen habe, bringe ich jetzt in Ihr Team: Ernährungswissen, das hängenbleibt – weil es machbar ist.
                </p>
              </div>

              {/* Proof Point */}
              <div className="p-6 sm:p-8 rounded-2xl border border-border bg-background flex flex-col justify-center">
                <Quote className="text-primary/30 mb-4" size={32} />
                <blockquote className="text-base sm:text-lg italic leading-relaxed text-muted-foreground mb-4">
                  "Mit kleinen aber wichtigen Tipps konnte ich in 16 Monaten <span className="text-primary font-bold not-italic">50kg verlieren</span>. Fühle mich so fit wie nie zuvor."
                </blockquote>
                <p className="text-sm text-muted-foreground">
                  — Alessandro D., 47, Coaching-Klient
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                "Zertifizierter Ernährungsberater",
                "Praxisnah, ohne Fachjargon",
                "80/20-Ansatz: machbar statt perfekt",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="text-primary" size={12} />
                  </div>
                  <span className="text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg text-primary-foreground mb-6">
            Bereit, etwas für Ihr Team zu tun?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Lassen Sie uns in 15 Minuten klären, ob ein Workshop für Ihr Team passt. Unverbindlich und kostenlos.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-background text-foreground font-medium transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            Gespräch vereinbaren
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
