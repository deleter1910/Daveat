import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingDown, Zap, Users, Clock, Check, ChevronRight, Quote } from "lucide-react";
import {
  servicesHero,
  servicesProblem,
  problems,
  stats,
  statsSource,
  servicesSolution,
  workshopExpect,
  workshopNot,
  flagshipWorkshop,
  servicesProcess,
  servicesSteps,
  whyDaveat,
  servicesCta,
} from "@/content/services";

const problemIcons = [TrendingDown, Users, Zap];

export default function Services() {
  return (
    <Layout>
      <SEO
        title="Ernährungsworkshops für Unternehmen"
        description="Massgeschneiderte Ernährungs-Workshops für Firmen in der Schweiz. Steigern Sie die Gesundheit und Produktivität Ihrer Mitarbeitenden."
        path="/services"
      />
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <p className="text-primary font-medium mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              {servicesHero.label}
            </p>
            <h1 className="heading-xl mb-8">
              {servicesHero.headline}<br />{servicesHero.headlineSecondLine} <span className="text-primary">{servicesHero.headlineHighlight}</span>.
            </h1>
            <p className="text-body max-w-2xl">
              {servicesHero.subline}
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 text-lg"
              >
                {servicesHero.cta}
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
              {servicesProblem.headline} <span className="text-primary">{servicesProblem.headlineHighlight}</span>
            </h2>

            <div className="space-y-4 mb-12">
              {problems.map((problem, i) => {
                const Icon = problemIcons[i];
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 sm:p-6 rounded-2xl border border-border bg-card"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary" size={20} />
                    </div>
                    <p className="text-base sm:text-lg leading-relaxed pt-1">{problem}</p>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 sm:p-8 rounded-2xl border border-primary/20 bg-primary/5 text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              {statsSource}
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary font-medium mb-4">{servicesSolution.label}</p>
              <h2 className="heading-lg">
                {servicesSolution.headline}<br /><span className="text-primary">{servicesSolution.headlineHighlight}</span>
              </h2>
            </div>

            <div className="p-8 md:p-12 rounded-3xl border border-border bg-background mb-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">{workshopExpect.title}</h3>
                  <ul className="space-y-3">
                    {workshopExpect.items.map((item, i) => (
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
                  <h3 className="text-xl font-semibold mb-4">{workshopNot.title}</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    {workshopNot.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-muted-foreground/50 flex-shrink-0 mt-0.5">&#x2717;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Flagship Workshop */}
            <div className="p-6 sm:p-8 rounded-2xl border border-primary/20 bg-primary/5">
              <p className="text-sm text-primary font-medium mb-2">{flagshipWorkshop.label}</p>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                {flagshipWorkshop.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {flagshipWorkshop.description}
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ChevronRight className="text-primary" size={16} />
                <span>{flagshipWorkshop.moreTopics}</span>
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
              <p className="text-primary font-medium mb-4">{servicesProcess.label}</p>
              <h2 className="heading-lg">
                {servicesProcess.headline} <span className="text-primary">{servicesProcess.headlineHighlight}</span> {servicesProcess.headlineSuffix}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {servicesSteps.map((step, i) => (
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
              <p className="text-primary font-medium mb-4">{whyDaveat.label}</p>
              <h2 className="heading-lg">
                {whyDaveat.headline}<br /><span className="text-primary">{whyDaveat.headlineHighlight}</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="space-y-6 text-muted-foreground">
                {whyDaveat.story.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Proof Point */}
              <div className="p-6 sm:p-8 rounded-2xl border border-border bg-background flex flex-col justify-center">
                <Quote className="text-primary/30 mb-4" size={32} />
                <blockquote className="text-base sm:text-lg italic leading-relaxed text-muted-foreground mb-4">
                  "{whyDaveat.proofQuote}"
                </blockquote>
                <p className="text-sm text-muted-foreground">
                  {whyDaveat.proofAttribution}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {whyDaveat.credentials.map((point, i) => (
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
            {servicesCta.headline}
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            {servicesCta.subline}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-background text-foreground font-medium transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            {servicesCta.cta}
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
