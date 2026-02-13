import { Heart, CheckCircle, Target } from "lucide-react";
import { authority, emotionalStatements, methodReasons } from "@/content/homepage";

export function AuthoritySection() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container mx-auto max-w-full overflow-hidden">
        {/* Header */}
        <div className="max-w-2xl mb-10 sm:mb-16">
          <p className="text-primary font-medium mb-4 sm:mb-6 flex items-center gap-2 text-sm sm:text-base">
            <span className="w-6 sm:w-8 h-px bg-primary"></span>
            {authority.label}
          </p>
          <h2 className="heading-lg break-words">
            {authority.headline}{" "}
            <span className="text-primary">{authority.headlineHighlight}</span> {authority.headlineSuffix}
          </h2>
        </div>

        {/* Block 1: Empathie */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-10 sm:mb-16">
          {/* Left: Story */}
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Heart className="text-primary" size={20} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold">
                {authority.empathyTitle}
              </h3>
            </div>
            <p className="text-body mb-6 sm:mb-8">
              {authority.empathyBody}
            </p>
          </div>

          {/* Right: Emotional Statements */}
          <div className="space-y-3 sm:space-y-4">
            {emotionalStatements.map((statement, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card border border-border/50"
              >
                <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-sm sm:text-base text-foreground italic">{statement}</p>
              </div>
            ))}
            <p className="text-base sm:text-lg font-semibold text-foreground pt-3 sm:pt-4">
              {authority.empathyClosing}{" "}
              <span className="text-primary">{authority.empathyClosingHighlight}</span> {authority.empathyClosingSuffix}
            </p>
          </div>
        </div>

        {/* Empathy Highlight Box */}
        <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-primary/5 border border-primary/30 mb-12 sm:mb-20">
          <p className="text-base sm:text-lg md:text-xl text-center max-w-3xl mx-auto break-words">
            {authority.empathyHighlightBox}{" "}
            <span className="text-primary font-semibold">
              {authority.empathyHighlightBoxHighlight}
            </span>
            .
          </p>
        </div>

        {/* Block 2: Methode */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3 sm:mb-4">
            {authority.methodTitle}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground text-center mb-8 sm:mb-12">
            {authority.methodSubline}
          </p>

          {/* Checkmark Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {methodReasons.slice(0, 4).map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg sm:rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1">
                    {reason.title}
                  </h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Fifth item centered */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-lg sm:rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors max-w-md">
              <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1">
                  {methodReasons[4].title}
                </h4>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {methodReasons[4].description}
                </p>
              </div>
            </div>
          </div>

          {/* Closing Highlight */}
          <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-primary/5 border border-primary/30">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Target className="text-primary" size={20} />
              <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">
                {authority.importantLabel}
              </span>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-center font-medium max-w-2xl mx-auto break-words">
              {authority.importantText}{" "}
              <span className="text-primary font-semibold">
                {authority.importantHighlight}
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
