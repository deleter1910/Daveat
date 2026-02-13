import { Quote, CheckCircle, Users } from "lucide-react";
import { socialProof, socialProofBenefits } from "@/content/homepage";

export function SocialProofSection() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container mx-auto max-w-full overflow-hidden">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <p className="text-primary font-medium mb-3 sm:mb-4 flex items-center justify-center gap-2 text-sm sm:text-base">
            <span className="w-6 sm:w-8 h-px bg-primary"></span>
            {socialProof.label}
            <span className="w-6 sm:w-8 h-px bg-primary"></span>
          </p>
          <h2 className="heading-lg break-words">
            {socialProof.headline}{" "}
            <span className="text-primary">{socialProof.headlineHighlight}</span>
          </h2>
        </div>

        {/* Featured Story */}
        <div className="max-w-4xl mx-auto">
          {/* Hero Quote */}
          <div className="relative mb-8 sm:mb-12">
            <Quote className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 text-primary/20 flex-shrink-0" size={40} />
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight pl-6 sm:pl-8 break-words">
              {socialProof.heroQuote}
            </blockquote>
          </div>

          {/* Story Context */}
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-3xl break-words">
            {socialProof.storyContext}
          </p>

          {/* Benefits Grid */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
              {socialProof.benefitsTitle} <span className="text-primary">{socialProof.benefitsTitleHighlight}</span> {socialProof.benefitsTitleSuffix}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {socialProofBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ripple Effect */}
          <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-primary/30 bg-primary/5">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Users className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-base sm:text-lg text-foreground leading-relaxed">
                  {socialProof.rippleText}{" "}
                  <span className="text-primary font-semibold">{socialProof.rippleHighlight}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
