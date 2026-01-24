import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import {
  ArrowRight,
  Battery,
  Scale,
  Shield,
  Clock,
  Frown,
  Users,
  Target,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { PainPointCard } from "@/components/landing/PainPointCard";
import { ProblemDeepeningSection } from "@/components/landing/ProblemDeepeningSection";
import { AgitateSection } from "@/components/landing/AgitateSection";
import { USPSection } from "@/components/landing/USPSection";
import { BenefitCard } from "@/components/landing/BenefitCard";
import { SocialProofSection } from "@/components/landing/SocialProofSection";
import { AuthoritySection } from "@/components/landing/AuthoritySection";
import { StepCard } from "@/components/landing/StepCard";
import { OfferBreakdownSection } from "@/components/landing/OfferBreakdownSection";
import { ValueStackSection } from "@/components/landing/ValueStackSection";
import { PricingCard } from "@/components/landing/PricingCard";
import { FAQSection } from "@/components/landing/FAQSection";
import { QualificationSection } from "@/components/landing/QualificationSection";
import { TwoPathSection } from "@/components/landing/TwoPathSection";

const painPoints = [
  {
    icon: Scale,
    title: "Über CHF 1'000 pro Jahr",
    description:
      "Du gibst über CHF 1'000 pro Jahr aus für Fitnessabos, die du nicht nutzt, Diät-Apps, die du abbrichst, Nahrungsergänzungsmittel, die nicht wirken, und «Quick Fixes», die nach wenigen Wochen scheitern.",
    highlight: "CHF 1'000",
  },
  {
    icon: Clock,
    title: "30-60 Stunden pro Monat",
    description:
      "Du verlierst 30-60 Stunden jeden Monat durch Schuldgefühle nach dem Essen, Recherchen nach der nächsten Diät und mentale Erschöpfung, die alles länger dauern lässt.",
    highlight: "30-60 Stunden",
  },
  {
    icon: Frown,
    title: "Nichts hält",
    description:
      "Du hast alles versucht. Vielleicht sogar Ozempic. Nichts hält.",
    highlight: "alles",
  },
];

const benefits = [
  {
    icon: Battery,
    title: "Kein Extra-Aufwand",
    description:
      "Wir passen die Ernährung an dein Leben an, nicht umgekehrt. Kein separates Kochen.",
  },
  {
    icon: Scale,
    title: "Budget statt Verbote",
    description:
      "Mit dem Energie-Budget entscheidest du selbst, wofür du es nutzt – flexibel und ohne Schuldgefühle.",
  },
  {
    icon: Shield,
    title: "Persönliches Sicherheitsnetz",
    description:
      "Ich begleite dich als Ansprechpartner, um Fehlentscheidungen in Stressmomenten zu verhindern.",
  },
  {
    icon: Users,
    title: "Familien-kompatibel",
    description:
      "Keine Extrawürste. Das System funktioniert mit dem, was deine Familie sowieso isst.",
  },
  {
    icon: Target,
    title: "Fokus auf 20%",
    description:
      "Wir identifizieren die 3 Hebel, die 80% deiner Ergebnisse bringen. Weniger tun, mehr erreichen.",
  },
  {
    icon: Sparkles,
    title: "Langfristige Ergebnisse",
    description:
      "Keine Crash-Diät, sondern nachhaltige Gewohnheiten, die nach 90 Tagen zur Routine werden.",
  },
];


const steps = [
  {
    number: 1,
    title: "Strategie-Gespräch buchen",
    description:
      "In 15 Minuten prüfen wir, ob meine Methode zu dir passt. Kostenlos und unverbindlich.",
  },
  {
    number: 2,
    title: "Deinen Blueprint erhalten",
    description:
      "Im 90-Minuten-Workshop analysieren wir deine Situation und erstellen deinen persönlichen Fahrplan.",
  },
  {
    number: 3,
    title: "Mit Begleitung umsetzen",
    description:
      "90 Tage WhatsApp-Support. Ich helfe dir, dranzubleiben – bei jedem Restaurant, jedem Stress-Tag.",
  },
];

const pricingOptions = [
  {
    title: "Alltags-Blueprint",
    subtitle: "Der Strategie-Workshop",
    price: "250 CHF",
    period: "einmalig",
    features: [
      "90 Minuten 1:1 Analyse",
      "Persönlicher Fahrplan (1 Seite)",
      "3 konkrete Hebel identifiziert",
      "Sofort umsetzbare Strategie",
    ],
    isPopular: false,
    ctaText: "Workshop buchen",
    ctaLink: "/contact",
  },
  {
    title: "Mentor in der Hosentasche",
    subtitle: "3 Monate Begleitung",
    price: "150 CHF",
    period: "/ Monat",
    features: [
      "Alltags-Blueprint inklusive",
      "90 Tage WhatsApp-Support",
      "Schnelle Antworten bei Fragen",
      "Motivation in schwachen Momenten",
      "Nachhaltige Gewohnheitsänderung",
    ],
    isPopular: true,
    ctaText: "Begleitung starten",
    ctaLink: "/contact",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Section 1: Hero */}
      <section className="section-padding min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto relative">
        <div className="max-w-5xl">
            <h1 className="heading-xl mb-8 animate-fade-in-up">
              Jede gescheiterte Diät macht die nächste schwieriger.<br />
              <span className="text-primary">Brechen wir diesen Kreislauf.</span>
            </h1>
            <p className="text-body max-w-2xl mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Du brauchst keine neue Diät. Du brauchst eine Strategie, die mit deinem Leben funktioniert – nicht dagegen.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link to="/services" className="btn-primary">
                Zum Angebot <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link to="/about" className="btn-outline">
                Über mich
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Problem (Pain Points) */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-primary font-medium mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              Das Problem
            </p>
            <h2 className="heading-lg">
              Das weisst du <span className="text-primary">bereits</span>:
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((point, i) => (
              <PainPointCard key={i} {...point} />
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-xl md:text-2xl text-muted-foreground italic max-w-3xl mx-auto">
              "Und mit jedem gescheiterten Versuch vertraust du dir selbst ein bisschen weniger."
            </p>
          </div>
        </div>
      </section>

      {/* Section 2b: Problem Deepening */}
      <ProblemDeepeningSection />

      {/* Section 2c: Agitate - Consequences */}
      <AgitateSection />

      {/* Section 3: Solution */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium mb-6 flex items-center gap-2">
                <span className="w-8 h-px bg-primary"></span>
                Die Lösung
              </p>
              <h2 className="heading-lg mb-8">
                Es gibt einen anderen Weg.<br />
                <span className="text-primary">Und er funktioniert.</span>
              </h2>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Target className="text-primary" size={28} />
                  Der Persönliche Umsetzungsplan
                </h3>
                <p className="text-body">
                  Dies ist <span className="text-muted-foreground line-through">kein weiteres Diätprogramm</span>. Es ist eine{" "}
                  <span className="text-foreground font-semibold">90-minütige Strategiesitzung</span>, in der wir gemeinsam{" "}
                  <span className="text-primary font-semibold">DEINEN</span> Plan entwickeln—
                </p>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-foreground">einen, der zu <span className="text-primary font-semibold">DEINEM</span> Leben passt</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-foreground"><span className="text-primary font-semibold">DEINE</span> Worte verwendet</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-foreground">und zu <span className="text-primary font-semibold">DEINEN</span> Regeln wird</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 rounded-2xl border border-primary/30 bg-primary/5">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Sparkles className="text-primary-foreground" size={24} />
                </div>
                <p className="text-foreground">
                  <strong>Daveat</strong> ist dein persönlicher Lifestyle-Stratege. Keine Diät, sondern ein System für nachhaltige Energie.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <Target className="text-primary" size={48} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Dein Plan</h3>
                  <p className="text-muted-foreground">
                    90 Minuten. Co-kreiert. Für dein Leben gemacht.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3b: USP - Das macht den Unterschied */}
      <USPSection />

      {/* Section 4: Benefits */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-4 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              Unsere Prinzipien
              <span className="w-8 h-px bg-primary"></span>
            </p>
            <h2 className="heading-lg">
              So funktioniert <span className="text-primary">Daveat</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <BenefitCard key={i} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Social Proof */}
      <SocialProofSection />

      {/* Section 5b: Authority - Warum es funktioniert */}
      <AuthoritySection />

      {/* Section 6: How It Works */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-4 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              Der Prozess
              <span className="w-8 h-px bg-primary"></span>
            </p>
            <h2 className="heading-lg">
              So starten wir <span className="text-primary">zusammen</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connection line - desktop only */}
            <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            {steps.map((step, i) => (
              <StepCard key={i} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 6b: Offer Breakdown - Was du bekommst */}
      <OfferBreakdownSection />

      {/* Section 6c: Value Stack - Die wahre Transformation */}
      <ValueStackSection />

      {/* Section 7: Pricing */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-4 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              Investition
              <span className="w-8 h-px bg-primary"></span>
            </p>
            <h2 className="heading-lg mb-6">
              Struktur statt <span className="text-primary">Diät-Stress</span>
            </h2>
            <p className="text-body">
              Wir beenden das Rätselraten. Wähle den Einstieg, der zu dir passt.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingOptions.map((option, i) => (
              <PricingCard key={i} {...option} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <FAQSection />

      {/* Section 8b: Qualification - Für wen das ist */}
      <QualificationSection />

      {/* Section 8c: Two-Path - Die Wahl liegt bei dir */}
      <TwoPathSection />

      {/* Section 9: Final CTA */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            {/* Headline - Attention */}
            <h2 className="heading-lg text-foreground mb-6">
              Bereit, den <span className="text-primary">Kreislauf</span> zu durchbrechen?
            </h2>
            
            {/* Subheadline - Interest */}
            <p className="text-2xl text-foreground font-medium mb-4">
              Starte mit einem kostenlosen 15-Minuten-Klarheitsgespräch
            </p>
            
            {/* Risk Reversal */}
            <p className="text-lg text-muted-foreground mb-10">
              Bevor du irgendwas bezahlst, lass uns herausfinden, ob das überhaupt für dich passt.
            </p>
            
            {/* Prozess-Transparenz */}
            <div className="bg-muted/30 border border-border rounded-2xl p-8 mb-10 text-left">
              <p className="text-foreground mb-6 text-center">
                In diesem 15-minütigen Gespräch:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">
                    Verstehe ich deine spezifische Situation und was dich bisher blockiert hat
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">
                    Zeige ich dir, wie der Persönliche Umsetzungsplan konkret für <span className="text-foreground font-semibold">DEIN</span> Leben funktionieren würde
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">
                    Findest du heraus, ob die 80/20-Philosophie zu dir passt
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">
                    Entscheidest <span className="text-foreground font-semibold">DU</span>, ob du die 90-Minuten-Strategiesitzung buchen willst
                  </span>
                </li>
              </ul>
            </div>
            
            {/* Trust Statement */}
            <p className="text-xl text-foreground font-semibold mb-4">
              Kein Druck. Keine Verkaufspräsentation. Keine Verpflichtung.
            </p>
            
            {/* Ehrlichkeits-Statement */}
            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
              Nur ein ehrliches Gespräch zwischen zwei Menschen darüber, ob ich dir wirklich helfen kann—oder ob eine andere Lösung besser für dich wäre.
            </p>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              Wenn es nicht passt, sage ich dir das direkt. Wenn es passt, erstellen wir gemeinsam deinen Plan.
            </p>
            
            {/* CTA Button - Action */}
            <Link
              to="/contact"
              className="inline-flex items-center px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold text-lg uppercase tracking-wide hover:bg-primary/90 transition-all duration-300"
            >
              Kontaktiere mich jetzt für ein kostenloses Klärungsgespräch
              <ArrowRight className="ml-3" size={20} />
            </Link>

            {/* Trust Reinforcement - Was passiert danach */}
            <div className="mt-16 pt-12 border-t border-border">
              <h3 className="text-xl text-foreground font-semibold mb-6">
                Was passiert nach dem Klarheitsgespräch?
              </h3>
              <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
                Wenn wir beide das Gefühl haben, dass es passt, buchst du die 90-Minuten-Strategiesitzung. Dort erstellen wir gemeinsam deinen Persönlichen Umsetzungsplan—live, in Echtzeit, mit deinen Worten, für dein Leben.
              </p>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Optional kannst du danach WhatsApp-Coaching und 8020 Club Zugang hinzufügen.
              </p>
              <p className="text-foreground font-medium">
                Aber zuerst: Lass uns einfach reden.
              </p>
            </div>

            {/* P.S. Section - Last Chance Urgency */}
            <div className="mt-12">
              <div className="bg-background border border-border rounded-2xl p-8 text-left max-w-2xl mx-auto space-y-6">
                {/* P.S. - Emotional Urgency */}
                <p className="text-muted-foreground">
                  <span className="font-bold text-foreground">P.S.</span> Jeder Tag, den du wartest, ist ein weiterer Tag im Kreislauf. Ein weiterer Tag, an dem deine Kinder dich kämpfen sehen. Ein weiterer Tag, an dem du dir weniger vertraust. Der beste Zeitpunkt zu starten war gestern. Der zweitbeste Zeitpunkt ist <span className="text-foreground font-semibold">genau jetzt</span>.
                </p>
                
                {/* P.P.S. - 80/20 Philosophy Reminder */}
                <p className="text-muted-foreground">
                  <span className="font-bold text-foreground">P.P.S.</span> Denk dran: Du musst nicht alles perfekt machen. Du musst nur 80% richtig machen. Und 20% sollten pure Freude sein—denn Transformation, die nicht erfüllend ist, wird nicht halten. Lass uns gemeinsam <span className="text-foreground font-semibold">DEINE</span> Strategie aufbauen.
                </p>
              </div>
              
              {/* Final CTA Repetition */}
              <div className="mt-12 text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold text-lg uppercase tracking-wide hover:bg-primary/90 transition-all duration-300"
                >
                  Jetzt kostenloses Klarheitsgespräch buchen
                  <ArrowRight className="ml-3" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
