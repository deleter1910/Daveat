import { Crown, Percent, Shield, MessageCircle } from "lucide-react";

const uspItems = [
  {
    icon: Crown,
    title: "Du setzt die Regeln (nicht ich)",
    description: (
      <>
        Ein Diätplan wird <span className="text-muted-foreground line-through">aufgezwungen</span>. Ein Blueprint, den du mitgestaltest, ist{" "}
        <span className="text-foreground font-semibold">gewählt</span>. Dieser psychologische Unterschied zwischen Befolgung und Commitment? Das bestimmt den Erfolg.
      </>
    ),
  },
  {
    icon: Percent,
    title: "Die 80/20-Philosophie",
    description: (
      <>
        Strikte Diäten kollabieren bei der ersten Geburtstagsfeier, der ersten Hochzeit, der ersten stressigen Woche. Wir bauen{" "}
        <span className="text-foreground font-semibold">Flexibilität</span> ein, sodass „Unperfektion" nicht zum Scheitern führt. Denn das Leben muss erfüllend bleiben.
      </>
    ),
  },
  {
    icon: Shield,
    title: "Vorentschiedene schwierige Momente",
    description: (
      <>
        Wenn um 21 Uhr die Gelüste kommen und die Willenskraft versagt, musst du keine Entscheidung treffen—dein vergangenes Ich hat bereits entschieden, was dein aktuelles Ich tun wird. Das ist dein{" "}
        <span className="text-foreground font-semibold">Worst-Case-Protokoll</span>.
      </>
    ),
  },
  {
    icon: MessageCircle,
    title: "Unterstützung, wenn es wirklich zählt",
    description: (
      <>
        Veränderung passiert nicht in einer 90-Minuten-Sitzung. Sie passiert im Supermarkt, im Restaurant und spätabends, wenn die Emotionen hochkochen.{" "}
        <span className="text-foreground font-semibold">Optionales WhatsApp-Coaching</span> bedeutet Unterstützung genau dann, wenn du sie brauchst.
      </>
    ),
  },
];

export function USPSection() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container mx-auto max-w-full overflow-hidden">
        <div className="max-w-2xl mb-10 sm:mb-16">
          <p className="text-primary font-medium mb-4 sm:mb-6 flex items-center gap-2 text-sm sm:text-base">
            <span className="w-6 sm:w-8 h-px bg-primary"></span>
            Der Unterschied
          </p>
          <h2 className="heading-lg break-words">
            Das macht den <span className="text-primary">Unterschied</span>.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {uspItems.map((item, index) => {
            const Icon = item.icon;
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
