import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Battery, Scale, Shield, Clock, Frown, Users, Target, Sparkles } from "lucide-react";
import { PainPointCard } from "@/components/landing/PainPointCard";
import { ProblemDeepeningSection } from "@/components/landing/ProblemDeepeningSection";
import { AgitateSection } from "@/components/landing/AgitateSection";
import { USPSection } from "@/components/landing/USPSection";
import { BenefitCard } from "@/components/landing/BenefitCard";
import { TestimonialCard } from "@/components/landing/TestimonialCard";
import { StepCard } from "@/components/landing/StepCard";
import { PricingCard } from "@/components/landing/PricingCard";
import { FAQSection } from "@/components/landing/FAQSection";
import {
  hero,
  problem,
  painPoints as painPointTexts,
  solution,
  principles,
  benefits as benefitTexts,
  featuredTestimonial,
  testimonialSection,
  testimonials as testimonialTexts,
  processSection,
  steps as stepTexts,
  pricingSection,
  pricingOptions as pricingTexts,
  finalCta,
} from "@/content/homepage";

export default function Index() {
  const painPointIcons = [Scale, Clock, Frown];
  const painPoints = painPointTexts.map((pt, i) => ({ ...pt, icon: painPointIcons[i] }));
  const benefitIcons = [Battery, Scale, Shield, Users, Target, Sparkles];
  const benefits = benefitTexts.map((b, i) => ({ ...b, icon: benefitIcons[i] }));
  const testimonials = testimonialTexts;
  const steps = stepTexts;
  const pricingOptions = pricingTexts;

  return <Layout>
      {/* Section 1: Hero with Quiz CTA */}
      <section className="section-padding min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="container mx-auto relative max-w-full overflow-hidden">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="heading-xl mb-6 lg:mb-8 animate-fade-in-up break-words hyphens-auto">
              {hero.headline}{" "}
              <span className="text-primary">{hero.headlineHighlight}</span>
            </h1>
            <p className="text-body mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {hero.subline}
            </p>

            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Link
                to="/quiz"
                className="inline-flex items-center px-10 py-5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 text-lg"
              >
                {hero.cta}
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>

            <div className="mt-10 flex items-center justify-center gap-3 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Sparkles className="text-primary flex-shrink-0" size={16} />
              <span>{hero.socialProof}</span>
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
              {problem.label}
            </p>
            <h2 className="heading-lg break-words">
              {problem.headline} <span className="text-primary">{problem.headlineHighlight}</span>:
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((point, i) => <PainPointCard key={i} {...point} />)}
          </div>
          <div className="mt-16 text-center">
            <p className="text-xl md:text-2xl text-muted-foreground italic max-w-3xl mx-auto">
              "{problem.closingQuote}"
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
              {solution.label}
            </p>
            <h2 className="heading-lg mb-8 break-words">
              {solution.headline}<br />
              <span className="text-primary">{solution.headlineHighlight}</span>
            </h2>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Target className="text-primary" size={28} />
                {solution.subHeading}
              </h3>
              <p className="text-body">
                {solution.bodyPrefix} <span className="text-muted-foreground line-through">{solution.bodyStrikethrough}</span>{solution.bodySuffix}{" "}
                <span className="text-foreground font-semibold">{solution.bodyHighlight}</span>{solution.bodyEnd}{" "}
                <span className="text-primary font-semibold">{solution.bodyEmphasis}</span> {solution.bodyEndSuffix}
              </p>
            </div>
            <div className="space-y-4 mb-8">
              {solution.bullets.map((b, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-foreground">{b.prefix} <span className="text-primary font-semibold">{b.emphasis}</span> {b.suffix}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 p-6 rounded-2xl border border-primary/30 bg-primary/5">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <Sparkles className="text-primary-foreground" size={24} />
              </div>
              <p className="text-foreground">
                {solution.highlightBox}
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
              {principles.label}
              <span className="w-8 h-px bg-primary"></span>
            </p>
            <h2 className="heading-lg break-words">
              {principles.headline} <span className="text-primary">{principles.headlineHighlight}</span>
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
              {testimonialSection.label}
              <span className="w-8 h-px bg-primary"></span>
            </p>
            <h2 className="heading-lg break-words">
              {testimonialSection.headline} <span className="text-primary">{testimonialSection.headlineHighlight}</span>
            </h2>
          </div>

          {/* Featured Testimonial */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="p-8 sm:p-10 rounded-2xl sm:rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-6">
                {featuredTestimonial.highlight}
              </p>
              <p className="text-base sm:text-lg text-foreground mb-6 leading-relaxed italic">
                "{featuredTestimonial.quote}"
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">{featuredTestimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{featuredTestimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{featuredTestimonial.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Other Testimonials */}
          <div className="max-w-3xl mx-auto">
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
              {processSection.label}
              <span className="w-8 h-px bg-primary"></span>
            </p>
            <h2 className="heading-lg break-words">
              {processSection.headline} <span className="text-primary">
{processSection.headlineHighlight}</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connection line - desktop only */}
            <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            {steps.map((step, i) => <StepCard key={i} {...step} />)}
          </div>
        </div>
      </section>

      {/* Section 7: Pricing - TEMPORARILY HIDDEN */}
      {/* <section className="section-padding overflow-hidden">
        <div className="container mx-auto max-w-full overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-4 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              {pricingSection.label}
              <span className="w-8 h-px bg-primary"></span>
            </p>
            <h2 className="heading-lg mb-6 break-words">{pricingSection.headline}{" "}
<span className="text-primary">{pricingSection.headlineHighlight}</span>
            </h2>
            <p className="text-body break-words">
              {pricingSection.subline}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingOptions.map((option, i) => <PricingCard key={i} {...option} />)}
          </div>
        </div>
      </section> */}

      {/* Section 8: FAQ */}
      <FAQSection />

      {/* Section 9: Final CTA */}
      <section className="section-padding bg-primary overflow-hidden">
        <div className="container mx-auto text-center max-w-full overflow-hidden">
          <h2 className="heading-lg text-primary-foreground mb-6 break-words">
            {finalCta.headline}
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/80 mb-4 max-w-2xl mx-auto break-words">
            {finalCta.subline}
          </p>
          <p className="text-primary-foreground/60 mb-10 break-words">
            {finalCta.details}
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 rounded-full bg-background text-foreground font-medium hover:bg-foreground hover:text-background transition-all duration-300">
            {finalCta.cta}
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </Layout>;
}
