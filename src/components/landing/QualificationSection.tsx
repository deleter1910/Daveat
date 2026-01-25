import { CheckCircle, XCircle } from "lucide-react";

const idealFor = [
  "Mehrere Diäten und Programme ohne dauerhaften Erfolg versucht hast",
  "Glaubst, du hättest keine Zeit für deine Gesundheit",
  "Müde bist von Quick-Fix-Versprechen und externen Regeln",
  "Einen nachhaltigen Ansatz willst, der zu deinem tatsächlichen Leben passt",
  "Bereit bist, dir wieder selbst zu vertrauen und Disziplin aufzubauen",
  "Dir wichtig ist, präsent und energiegeladen für deine Familie zu sein",
];

const notFor = [
  "Eine Wunderpille oder 30-Tage-Transformation willst",
  "Nicht bereit bist, 90 Minuten in den Aufbau deiner Strategie zu investieren",
  "Erwartest, dass jemand anderes die Arbeit für dich macht",
  "Konstantes Händchenhalten und tägliche Check-ins brauchst",
  "Nicht bereit bist, Verantwortung für deine eigene Gesundheit zu übernehmen",
];

export function QualificationSection() {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <p className="text-primary font-medium mb-3 sm:mb-4 flex items-center justify-center gap-2 text-sm sm:text-base">
            <span className="w-6 sm:w-8 h-px bg-primary"></span>
            Passt es zu dir?
            <span className="w-6 sm:w-8 h-px bg-primary"></span>
          </p>
          <h2 className="heading-lg">
            Für wen das ist{" "}
            <span className="text-muted-foreground font-normal">(und für wen nicht)</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Ideal For - Left Column */}
          <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-primary/5 border border-primary/30">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <CheckCircle className="text-primary flex-shrink-0" size={20} />
              Das ist perfekt, wenn du:
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {idealFor.map((point, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-sm sm:text-base text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For - Right Column */}
          <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-card border border-border">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <XCircle className="text-muted-foreground flex-shrink-0" size={20} />
              Das ist NICHT für dich, wenn du:
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {notFor.map((point, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3">
                  <XCircle className="text-muted-foreground flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-sm sm:text-base text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
