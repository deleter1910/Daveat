import { Crown, Percent, Shield, MessageCircle } from "lucide-react";
import { usp, uspItems } from "@/content/homepage";

const uspIcons = [Crown, Percent, Shield, MessageCircle];

export function USPSection() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container mx-auto max-w-full overflow-hidden">
        <div className="max-w-2xl mb-10 sm:mb-16">
          <p className="text-primary font-medium mb-4 sm:mb-6 flex items-center gap-2 text-sm sm:text-base">
            <span className="w-6 sm:w-8 h-px bg-primary"></span>
            {usp.label}
          </p>
          <h2 className="heading-lg break-words">
            {usp.headline} <span className="text-primary">{usp.headlineHighlight}</span>.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {uspItems.map((item, index) => {
            const Icon = uspIcons[index];
            return (
              <div
                key={index}
                className="group p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-border bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{item.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
