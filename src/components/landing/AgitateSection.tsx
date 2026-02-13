import { Wallet, Clock, TrendingDown, ChevronRight } from "lucide-react";
import { agitate } from "@/content/homepage";

const consequenceIcons = [Wallet, Clock, TrendingDown];

export function AgitateSection() {
  return (
    <section className="section-padding bg-card overflow-hidden">
      <div className="container mx-auto max-w-full overflow-hidden">
        {/* Headline */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <p className="text-destructive font-medium mb-4 sm:mb-6 flex items-center gap-2 text-sm sm:text-base">
            <span className="w-6 sm:w-8 h-px bg-destructive"></span>
            {agitate.label}
          </p>
          <h2 className="heading-lg mb-4 sm:mb-6 break-words">
            {agitate.headline}{" "}
            <span className="text-destructive">{agitate.headlineHighlight}</span>?
          </h2>
          <p className="text-body break-words">
            {agitate.subline}
          </p>
        </div>

        {/* Consequences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-16">
          {agitate.consequences.map((item, i) => {
            const Icon = consequenceIcons[i];
            return (
              <div
                key={i}
                className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-border/50 bg-background/50 hover:border-destructive/30 transition-colors duration-300"
              >
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-destructive/10 flex items-center justify-center mb-4 sm:mb-6">
                  <Icon className="text-destructive" size={22} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 break-words">{item.title}</h3>
                {'descriptionParts' in item && item.descriptionParts && (
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed break-words">
                    {item.descriptionParts.map((part, j) =>
                      j % 2 === 1 ? <span key={j} className="text-destructive font-semibold">{part}</span> : <span key={j}>{part}</span>
                    )}
                  </p>
                )}
                {'spirals' in item && item.spirals && (
                  <ul className="space-y-2 sm:space-y-3">
                    {item.spirals.map((spiral, j) => (
                      <li key={j} className="flex items-start gap-2 sm:gap-3">
                        <ChevronRight
                          className="text-destructive flex-shrink-0 mt-0.5 sm:mt-1"
                          size={14}
                        />
                        <span className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          {spiral}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Cruel Irony Block */}
        <div className="max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-2 border-destructive/30 bg-destructive/5">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed break-words">
              <span className="text-destructive font-bold">{agitate.cruelIronyLabel}</span>{" "}
              {agitate.cruelIrony}
            </p>
          </div>
        </div>

        {/* Emotional Closing */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed break-words">
            {agitate.emotionalClosing}{" "}
            <span className="text-foreground font-medium">{agitate.emotionalClosingHighlight}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
