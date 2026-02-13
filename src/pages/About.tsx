import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Leaf, HandHeart } from "lucide-react";
import davePhoto from "@/assets/dave-photo.jpeg";
import {
  aboutHero,
  founderStory,
  founderBreakthrough,
  founderConclusion,
  proofPoint,
  valuesSection,
  values as valueTexts,
  aboutCta,
} from "@/content/about";

const valueIcons = [Heart, Leaf, HandHeart];
const values = valueTexts.map((v, i) => ({ ...v, icon: valueIcons[i] }));

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <p className="text-primary font-medium mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              {aboutHero.label}
            </p>
            <h1 className="heading-xl mb-8">
              {aboutHero.headline}<br />{aboutHero.headlineSecondLine}<br /><span className="text-primary">{aboutHero.headlineHighlight}</span>.
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
              {founderStory.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}

              <div className="p-6 sm:p-8 rounded-2xl border border-primary/20 bg-primary/5 my-8">
                <p className="text-foreground">{founderBreakthrough}</p>
              </div>

              {founderConclusion.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Proof Point */}
            <div className="mt-12 p-6 sm:p-8 rounded-2xl border border-border bg-card">
              <p className="text-xl sm:text-2xl font-bold text-center mb-4">
                {proofPoint.title}
              </p>
              <blockquote className="text-base sm:text-lg text-muted-foreground italic text-center leading-relaxed">
                "{proofPoint.quote}"
              </blockquote>
              <p className="text-center mt-4 text-sm text-muted-foreground">
                {proofPoint.attribution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary font-medium mb-4">{valuesSection.label}</p>
            <h2 className="heading-lg">
              {valuesSection.headline}<br /><span className="text-primary">{valuesSection.headlineHighlight}</span>.
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
            {aboutCta.headline}
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            {aboutCta.subline}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-background text-foreground font-medium transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            {aboutCta.cta}
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
