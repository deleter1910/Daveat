import { XCircle } from "lucide-react";
import { problemDeepening } from "@/content/homepage";

export function ProblemDeepeningSection() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container mx-auto max-w-full overflow-hidden">
        <div className="max-w-4xl mx-auto">
          {/* Main Statement */}
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="heading-lg mb-6 sm:mb-8 break-words">
              {problemDeepening.headline}{" "}
              <span className="text-primary">{problemDeepening.headlineHighlight}</span>
            </h2>
          </div>

          {/* The Lie */}
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              {problemDeepening.theLie}
            </p>
          </div>

          {/* Authority Stat */}
          <div className="py-8 sm:py-12 mb-8 sm:mb-12 border-y border-border">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center break-words">
              {problemDeepening.stat} <span className="text-destructive">{problemDeepening.statHighlight}</span> {problemDeepening.statSuffix}
            </p>
          </div>

          {/* The Truth */}
          <div className="space-y-4 sm:space-y-6 mb-10 sm:mb-16">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              {problemDeepening.theTruth}
            </p>
          </div>

          {/* Why You Fail */}
          <div className="bg-card rounded-2xl sm:rounded-3xl border border-border p-5 sm:p-8 md:p-12 mb-8 sm:mb-12">
            <p className="text-base sm:text-lg md:text-xl text-foreground mb-6 sm:mb-8">
              {problemDeepening.failIntro}{" "}
              <span className="text-primary font-semibold">{problemDeepening.failIntroHighlight}</span>
            </p>

            <div className="space-y-4 sm:space-y-6">
              {problemDeepening.failureReasons.map((reason, i) => (
                <div key={i} className="flex items-start gap-3 sm:gap-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                    <XCircle className="text-destructive" size={16} />
                  </div>
                  <div>
                    <span className="text-base sm:text-lg font-semibold text-foreground">{reason.text}</span>
                    <span className="text-base sm:text-lg text-muted-foreground"> {reason.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Closing Question */}
          <div className="text-center">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-3 sm:mb-4 break-words">
              {problemDeepening.closingLine}
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary break-words">
              {problemDeepening.closingHighlight}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
