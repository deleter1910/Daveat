import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Battery, Scale, Shield, Clock, Frown, Users, Target, Sparkles, Check, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { TurnstileWidget } from "@/components/TurnstileWidget";
import { PainPointCard } from "@/components/landing/PainPointCard";
import { ProblemDeepeningSection } from "@/components/landing/ProblemDeepeningSection";
import { AgitateSection } from "@/components/landing/AgitateSection";
import { USPSection } from "@/components/landing/USPSection";
import { BenefitCard } from "@/components/landing/BenefitCard";
import { TestimonialCard } from "@/components/landing/TestimonialCard";
import { StepCard } from "@/components/landing/StepCard";
import { PricingCard } from "@/components/landing/PricingCard";
import { FAQSection } from "@/components/landing/FAQSection";

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || "";
const painPoints = [{
  icon: Scale,
  title: "Über CHF 1'000 pro Jahr",
  description: "Du gibst über CHF 1'000 pro Jahr aus für Fitnessabos, die du nicht nutzt, Diät-Apps, die du abbrichst, Nahrungsergänzungsmittel, die nicht wirken, und «Quick Fixes», die nach wenigen Wochen scheitern.",
  highlight: "CHF 1'000"
}, {
  icon: Clock,
  title: "30-60 Stunden pro Monat",
  description: "Du verlierst 30-60 Stunden jeden Monat durch Schuldgefühle nach dem Essen, Recherchen nach der nächsten Diät und mentale Erschöpfung, die alles länger dauern lässt.",
  highlight: "30-60 Stunden"
}, {
  icon: Frown,
  title: "Nichts hält",
  description: "Du hast alles versucht. Vielleicht sogar Ozempic. Nichts hält.",
  highlight: "alles"
}];
const benefits = [{
  icon: Battery,
  title: "Kein Extra-Aufwand",
  description: "Wir passen die Ernährung an dein Leben an, nicht umgekehrt. Kein separates Kochen."
}, {
  icon: Scale,
  title: "Budget statt Verbote",
  description: "Mit dem Energie-Budget entscheidest du selbst, wofür du es nutzt – flexibel und ohne Schuldgefühle."
}, {
  icon: Shield,
  title: "Persönliches Sicherheitsnetz",
  description: "Ich begleite dich als Ansprechpartner, um Fehlentscheidungen in Stressmomenten zu verhindern."
}, {
  icon: Users,
  title: "Familien-kompatibel",
  description: "Keine Extrawürste. Das System funktioniert mit dem, was deine Familie sowieso isst."
}, {
  icon: Target,
  title: "Fokus auf 20%",
  description: "Wir identifizieren die 3 Hebel, die 80% deiner Ergebnisse bringen. Weniger tun, mehr erreichen."
}, {
  icon: Sparkles,
  title: "Langfristige Ergebnisse",
  description: "Keine Crash-Diät, sondern nachhaltige Gewohnheiten, die nach 90 Tagen zur Routine werden."
}];
const testimonials = [{
  quote: "Nachdem ich den Kampf gegen mein Gewicht aufgegeben hatte, habe ich dank Daveat neue Motivation gefunden, mir selbst etwas Gutes zu tun. Mit seiner Unterstützung habe ich 17 Kilo verloren und fühle mich heute deutlich wohler in meinem Körper.",
  name: "Francesca",
  role: "35"
}, {
  quote: "Mit kleinen aber wichtigen Tipps konnte ich in 16 Monate 50kg verlieren. Die motivierende Beratung und Begleitung half und hilft mir sehr. Fühle mich so fit wie nie zuvor und werde dafür immer dankbar sein!",
  name: "Alessandro D.",
  role: "47"
}];
const steps = [{
  number: 1,
  title: "Strategie-Gespräch buchen",
  description: "In 15 Minuten prüfen wir, ob meine Methode zu dir passt. Kostenlos und unverbindlich."
}, {
  number: 2,
  title: "Deinen Blueprint erhalten",
  description: "Im 90-Minuten-Workshop analysieren wir deine Situation und erstellen deinen persönlichen Fahrplan."
}, {
  number: 3,
  title: "Mit Begleitung umsetzen",
  description: "90 Tage WhatsApp-Support. Ich helfe dir, dranzubleiben – bei jedem Restaurant, jedem Stress-Tag."
}];
const pricingOptions = [{
  title: "Alltags-Blueprint",
  subtitle: "Der Strategie-Workshop",
  price: "250 CHF",
  period: "einmalig",
  features: ["90 Minuten 1:1 Analyse", "Persönlicher Fahrplan (1 Seite)", "3 konkrete Hebel identifiziert", "Sofort umsetzbare Strategie"],
  isPopular: false,
  ctaText: "Workshop buchen",
  ctaLink: "/contact"
}, {
  title: "Mentor in der Hosentasche",
  subtitle: "3 Monate Begleitung",
  price: "150 CHF",
  period: "/ Monat",
  features: ["Alltags-Blueprint inklusive", "90 Tage WhatsApp-Support", "Schnelle Antworten bei Fragen", "Motivation in schwachen Momenten", "Nachhaltige Gewohnheitsänderung"],
  isPopular: true,
  ctaText: "Begleitung starten",
  ctaLink: "/contact"
}];
export default function Index() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
  });

  const handleTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const handleTurnstileError = useCallback(() => {
    setTurnstileToken(null);
    toast({
      title: "CAPTCHA Fehler",
      description: "Bitte lade die Seite neu und versuche es erneut.",
      variant: "destructive",
    });
  }, [toast]);

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken(null);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!turnstileToken) {
      toast({
        title: "CAPTCHA erforderlich",
        description: "Bitte bestätige, dass du kein Roboter bist.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("lead-magnet-subscribe", {
        body: { ...formData, turnstileToken },
      });

      if (error) throw error;

      // Redirect to thank you page
      navigate("/guide-danke");
    } catch (error: any) {
      toast({
        title: "Fehler",
        description: error.message || "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return <Layout>
      {/* Section 1: Hero with Lead Magnet Opt-in */}
      <section className="section-padding min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto relative max-w-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Headline & Subheadline */}
            <div className="max-w-xl">
              <h1 className="heading-xl mb-6 lg:mb-8 animate-fade-in-up break-words hyphens-auto">
                Du isst gesund, bist trotzdem müde?{" "}
                <span className="text-primary">Dann machst du wahrscheinlich einen dieser 5 Fehler.</span>
              </h1>
              <p className="text-body max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Finde in 10 Minuten heraus, was dich wirklich blockiert. Der kostenlose Guide für Berufstätige, die keine Lust mehr auf Diäten haben.
              </p>
            </div>

            {/* Right: Opt-in Form */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="p-6 sm:p-8 rounded-3xl border border-border bg-card">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      Vorname
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Dein Vorname"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="deine@email.com"
                    />
                  </div>

                  {/* Turnstile CAPTCHA */}
                  <div className="py-2">
                    <TurnstileWidget
                      siteKey={TURNSTILE_SITE_KEY}
                      onVerify={handleTurnstileVerify}
                      onError={handleTurnstileError}
                      onExpire={handleTurnstileExpire}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !turnstileToken}
                    className="w-full px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 animate-spin" size={18} />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        Ja, schick mir den Guide
                        <ArrowRight className="ml-2" size={18} />
                      </>
                    )}
                  </button>
                </form>

                {/* Trust Elements */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Check className="text-primary flex-shrink-0" size={16} />
                    <span>Kostenlos und ohne Verpflichtung</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Shield className="text-primary flex-shrink-0" size={16} />
                    <span>Kein Spam. Nur wertvolle Inhalte. Jederzeit abmelden.</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Sparkles className="text-primary flex-shrink-0" size={16} />
                    <span>Über 50kg Gewichtsverlust begleitet – wo Ozempic und andere Coaches scheiterten</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Problem (Pain Points) */}
      <section className="section-padding bg-card overflow-hidden">
        <div className="container mx-auto max-w-full overflow-hidden">
          <div className="max-w-2xl mb-16">
            <p className="text-primary font-medium mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              Das Problem
            </p>
            <h2 className="heading-lg break-words">
              Das weisst du <span className="text-primary">bereits</span>:
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((point, i) => <PainPointCard key={i} {...point} />)}
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
      <section className="section-padding overflow-hidden">
        <div className="container mx-auto max-w-full overflow-hidden">
        <div className="max-w-3xl">
            <p className="text-primary font-medium mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              Die Lösung
            </p>
            <h2 className="heading-lg mb-8 break-words">
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
        </div>
      </section>

      {/* Section 3b: USP - Das macht den Unterschied */}
      <USPSection />

      {/* Section 4: Benefits */}
      <section className="section-padding bg-card overflow-hidden">
        <div className="container mx-auto max-w-full overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-4 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              Unsere Prinzipien
              <span className="w-8 h-px bg-primary"></span>
            </p>
            <h2 className="heading-lg break-words">
              So funktioniert <span className="text-primary">Daveat</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => <BenefitCard key={i} {...benefit} />)}
          </div>
        </div>
      </section>

      {/* Section 5: Social Proof (Testimonials) */}
      <section className="section-padding overflow-hidden">
        <div className="container mx-auto max-w-full overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-4 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              Erfahrungen
              <span className="w-8 h-px bg-primary"></span>
            </p>
            <h2 className="heading-lg break-words">
              Was meine Klienten <span className="text-primary">sagen</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, i) => <TestimonialCard key={i} {...testimonial} />)}
          </div>
        </div>
      </section>

      {/* Section 6: How It Works */}
      <section className="section-padding bg-card overflow-hidden">
        <div className="container mx-auto max-w-full overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-4 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              Der Prozess
              <span className="w-8 h-px bg-primary"></span>
            </p>
            <h2 className="heading-lg break-words">
              So starten wir <span className="text-primary">
zusammen</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connection line - desktop only */}
            <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            {steps.map((step, i) => <StepCard key={i} {...step} />)}
          </div>
        </div>
      </section>

      {/* Section 7: Pricing */}
      <section className="section-padding overflow-hidden">
        <div className="container mx-auto max-w-full overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-4 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              Investition
              <span className="w-8 h-px bg-primary"></span>
            </p>
            <h2 className="heading-lg mb-6 break-words">Struktur statt 
Diät-Stress<span className="text-primary">Diät-Stress</span>
            </h2>
            <p className="text-body break-words">
              Wir beenden das Rätselraten. Wähle den Einstieg, der zu dir passt.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingOptions.map((option, i) => <PricingCard key={i} {...option} />)}
          </div>
        </div>
      </section>

      {/* Section 8: FAQ */}
      <FAQSection />

      {/* Section 9: Final CTA */}
      <section className="section-padding bg-primary overflow-hidden">
        <div className="container mx-auto text-center max-w-full overflow-hidden">
          <h2 className="heading-lg text-primary-foreground mb-6 break-words">
            Bereit für mehr Energie?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-4 max-w-2xl mx-auto break-words">
            Lass uns gemeinsam herausfinden, wie du deine Gesundheit zurückgewinnst – ohne deinen Alltag auf den Kopf zu stellen.
          </p>
          <p className="text-primary-foreground/60 mb-10 break-words">
            15 Minuten · Kostenlos · Unverbindlich
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 rounded-full bg-background text-foreground font-medium hover:bg-foreground hover:text-background transition-all duration-300">
            Strategie-Gespräch anfragen
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </Layout>;
}