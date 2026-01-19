import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, FileText, Target, MessageCircle, Check } from "lucide-react";

const workshopFeatures = [
  "Wir analysieren deine Energie-Räuber und Zeit-Fallen.",
  "Wir erstellen deinen persönlichen 1-seitigen Fahrplan (Blueprint).",
  "Wir definieren 3 simple Hebel (Big Rocks), die 80% deiner Ergebnisse liefern.",
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
              Angebot
            </p>
            <h1 className="heading-xl mb-8">
              Struktur statt<br /><span className="text-primary">Diät-Stress</span>.
            </h1>
            <p className="text-body max-w-2xl">
              Wir beenden das Rätselraten. Wir starten mit einer klaren Analyse und gehen dann (optional) in die Umsetzung.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product 1: Workshop */}
            <div className="p-8 md:p-12 rounded-3xl border border-border bg-card hover:border-primary transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FileText className="text-primary" size={24} />
                </div>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">Der Start</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">Der "Alltags-Blueprint"</h3>
              <p className="text-muted-foreground mb-6 flex items-center gap-2">
                <Clock size={16} />
                90 Min Analyse & Strategie
              </p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-primary">250 CHF</span>
                <span className="text-muted-foreground ml-2">(Einmalig)</span>
              </div>

              <div className="mb-8">
                <p className="font-medium mb-4">Was wir tun:</p>
                <ul className="space-y-3">
                  {workshopFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="text-primary" size={12} />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20">
                <p className="flex items-start gap-2">
                  <Target className="text-primary flex-shrink-0 mt-1" size={18} />
                  <span><strong>Ergebnis:</strong> Du gehst mit absoluter Klarheit aus dem Gespräch. Du weißt genau, was zu tun ist.</span>
                </p>
              </div>
            </div>

            {/* Product 2: Mentoring */}
            <div className="p-8 md:p-12 rounded-3xl border border-border bg-card hover:border-primary transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="text-primary" size={24} />
                </div>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">Die Umsetzung</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">Dein Mentor in der Hosentasche</h3>
              <p className="text-muted-foreground mb-6 flex items-center gap-2">
                <Clock size={16} />
                3 Monate Support
              </p>
              
              <div className="mb-8">
                <span className="text-4xl font-bold text-primary">150 CHF</span>
                <span className="text-muted-foreground ml-2">/ Monat</span>
              </div>

              <p className="text-muted-foreground mb-8">
                Der Plan ist einfach, der Alltag ist schwer. Ich begleite dich 90 Tage lang per WhatsApp. Ich bin dein externer Speicher für Gesundheits-Entscheidungen. Egal ob im Restaurant, im Supermarkt oder bei einem Motivations-Tief: Ich sorge dafür, dass du auf Kurs bleibst – ohne Druck, aber mit Verbindlichkeit.
              </p>

              <div className="p-4 rounded-2xl bg-muted/50 border border-border">
                <p className="text-sm text-muted-foreground italic">
                  Optional nach dem Strategie-Workshop buchbar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="heading-lg text-primary-foreground mb-6">
            Bereit für den ersten Schritt?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Lass uns in einem kurzen Gespräch herausfinden, ob meine Methode zu dir passt.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-background text-foreground font-medium transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            Strategie-Gespräch anfragen
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
