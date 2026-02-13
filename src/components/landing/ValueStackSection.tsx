import { Wallet, Clock, Sparkles, Users, Heart } from "lucide-react";
import { valueStack, emotionalBenefits, rippleEffects } from "@/content/homepage";

const emotionalBenefitIcons = [Sparkles, Heart, Users, Sparkles, Heart, Sparkles];

export function ValueStackSection() {
  return (
    <section className="section-padding bg-card overflow-hidden">
      <div className="container mx-auto max-w-full overflow-hidden">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className="text-primary font-medium mb-3 sm:mb-4 flex items-center justify-center gap-2 text-sm sm:text-base">
            <span className="w-6 sm:w-8 h-px bg-primary"></span>
            {valueStack.label}
            <span className="w-6 sm:w-8 h-px bg-primary"></span>
          </p>
          <h2 className="heading-lg mb-4 sm:mb-6 break-words">
            {valueStack.headline} <span className="text-primary">{valueStack.headlineHighlight}</span> {valueStack.headlineSuffix}
          </h2>
          <p className="text-body break-words">
            {valueStack.subline}{" "}
            <span className="text-foreground font-semibold">{valueStack.sublineHighlight}</span>
          </p>
        </div>

        {/* Quantifiable Value */}
        <div className="mb-10 sm:mb-16">
          <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-center">
            {valueStack.quantifiableHeadline}{" "}
            <span className="text-primary">{valueStack.quantifiableHighlight}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {/* Money Back */}
            <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-border bg-background">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Wallet className="text-primary" size={24} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold">{valueStack.moneyTitle}</h4>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                <span className="text-primary font-bold text-xl sm:text-2xl">{valueStack.moneyAmount}</span>{" "}
                <span className="text-foreground">{valueStack.moneyPeriod}</span> {valueStack.moneyDescription}
              </p>
              <p className="text-sm sm:text-base text-foreground font-medium">
                {valueStack.moneyTotal}{" "}
                <span className="text-primary font-bold text-lg sm:text-xl">{valueStack.moneyTotalAmount}</span>{" "}
                {valueStack.moneyTotalSuffix}
              </p>
            </div>

            {/* Time Back */}
            <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-border bg-background">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="text-primary" size={24} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold">{valueStack.timeTitle}</h4>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                <span className="text-primary font-bold text-xl sm:text-2xl">{valueStack.timeAmount}</span>{" "}
                <span className="text-foreground">{valueStack.timePeriod}</span> {valueStack.timeDescription}
              </p>
              <p className="text-sm sm:text-base text-foreground mb-2">
                {valueStack.timeDetail}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground italic">
                {valueStack.timeEmotional}
              </p>
            </div>
          </div>
        </div>

        {/* Unquantifiable Value */}
        <div className="mb-10 sm:mb-16">
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">
            {valueStack.unquantifiableHeadline}
          </h3>
          <p className="text-center text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
            {valueStack.unquantifiableSubline} <span className="text-primary font-semibold">{valueStack.unquantifiableHighlight}</span> {valueStack.unquantifiableSuffix}
          </p>

          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg font-medium mb-4 sm:mb-6 text-center">{valueStack.emotionalIntro}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {emotionalBenefits.map((benefit, i) => {
                const Icon = emotionalBenefitIcons[i];
                return (
                  <div
                    key={i}
                    className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-background border border-border"
                  >
                    <Icon className="text-primary flex-shrink-0 mt-0.5" size={18} />
                    <p className="text-foreground text-xs sm:text-sm">{benefit}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Ripple Effect */}
        <div className="mb-10 sm:mb-16">
          <div className="max-w-3xl mx-auto p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-primary/20 bg-primary/5">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Users className="text-primary" size={20} />
              <h3 className="text-lg sm:text-xl font-semibold">{valueStack.rippleTitle}</h3>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {rippleEffects.map((effect, i) => (
                <div key={i} className="flex items-start gap-2 sm:gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                  <p className="text-sm sm:text-base text-foreground">{effect}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center">
          <div className="inline-block px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl border border-primary/30 bg-primary/5">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-foreground break-words">
              {valueStack.closingLine}<br />
              <span className="text-primary">{valueStack.closingHighlight}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
