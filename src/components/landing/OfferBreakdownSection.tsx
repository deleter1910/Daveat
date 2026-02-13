import { CheckCircle, Clock, MessageCircle, Users, Sparkles } from "lucide-react";
import { offerBreakdown, sessionFeatures } from "@/content/homepage";

export function OfferBreakdownSection() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container mx-auto max-w-full overflow-hidden">
        {/* Header */}
        <div className="max-w-2xl mb-10 sm:mb-16">
          <p className="text-primary font-medium mb-4 sm:mb-6 flex items-center gap-2 text-sm sm:text-base">
            <span className="w-6 sm:w-8 h-px bg-primary"></span>
            {offerBreakdown.label}
          </p>
          <h2 className="heading-lg break-words">
            {offerBreakdown.headline} <span className="text-primary">{offerBreakdown.headlineHighlight}</span> {offerBreakdown.headlineSuffix}
          </h2>
        </div>

        {/* Core Offer Block */}
        <div className="mb-8 sm:mb-12">
          <div className="border border-primary/30 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12">
            {/* Core Offer Header */}
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center">
                <Clock className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  {offerBreakdown.coreOfferTitle} <span className="text-primary">{offerBreakdown.coreOfferHighlight}</span>{offerBreakdown.coreOfferSuffix}
                </h3>
              </div>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10">
              {offerBreakdown.coreOfferSubline}
            </p>

            {/* Features List */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
              {sessionFeatures.map((feature, i) => (
                <div key={i} className="flex gap-3 sm:gap-4">
                  <CheckCircle className="text-primary flex-shrink-0 mt-0.5 sm:mt-1" size={20} />
                  <div className="min-w-0">
                    <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1 break-words">{feature.title}</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm md:text-base break-words">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlight Box */}
            <div className="bg-primary/5 border border-primary/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
              <Sparkles className="text-primary flex-shrink-0 mt-0.5 sm:mt-1" size={20} />
              <p className="text-sm sm:text-base text-foreground">
                {offerBreakdown.coreOfferHighlightBox}
              </p>
            </div>
          </div>
        </div>

        {/* Add-ons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* WhatsApp Coaching */}
          <div className="border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 bg-card">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center">
                <MessageCircle className="text-primary" size={20} />
              </div>
              <div>
                <span className="text-[10px] sm:text-xs bg-muted text-muted-foreground px-2 py-0.5 sm:py-1 rounded-full">{offerBreakdown.whatsappLabel}</span>
                <h3 className="text-lg sm:text-xl font-bold mt-1">{offerBreakdown.whatsappTitle}</h3>
              </div>
            </div>
            <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
              {offerBreakdown.whatsappFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div className="border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 bg-card">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">{offerBreakdown.communityTitle} <span className="text-primary">{offerBreakdown.communityTitleHighlight}</span> {offerBreakdown.communityTitleSuffix}</h3>
              </div>
            </div>
            <ul className="space-y-2 sm:space-y-3 text-muted-foreground">
              {offerBreakdown.communityFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
