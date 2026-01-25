import { TrendingDown, TrendingUp, ChevronRight } from "lucide-react";

const path1Points = [
  "Gib weitere über CHF 1'000 pro Jahr für Lösungen aus, die nicht funktionieren.",
  "Verliere weitere 30-60 Stunden pro Monat an Schuldgefühle und mentale Erschöpfung.",
  "Beobachte, wie du dir mit jedem gescheiterten Versuch ein bisschen weniger vertraust.",
  "Modelliere ungesunde Beziehungen zum Essen für deine Kinder.",
  "Verpasse Energie, Präsenz und Selbstvertrauen.",
];

const path2Points = [
  "Investiere 90 Minuten, um einen Plan zu co-kreieren, der tatsächlich zu deinem Leben passt.",
  "Gewinne CHF 3'000-9'000 und 360-720 Stunden über die nächsten drei Jahre zurück.",
  "Baue Vertrauen in dich selbst wieder auf.",
  "Gewinne Energie, um bei deiner Familie präsent zu sein.",
  "Werde die Person, die du sein willst—nicht durch Perfektion, sondern durch nachhaltigen 80/20-Fortschritt.",
];

export function TwoPathSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <p className="text-primary font-medium mb-3 sm:mb-4 flex items-center justify-center gap-2 text-sm sm:text-base">
            <span className="w-6 sm:w-8 h-px bg-primary"></span>
            Deine Entscheidung
            <span className="w-6 sm:w-8 h-px bg-primary"></span>
          </p>
          <h2 className="heading-lg">
            Die Wahl liegt <span className="text-primary">bei dir</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Path 1 - Pain Path */}
          <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-destructive/5 border border-destructive/20">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                <TrendingDown className="text-destructive" size={20} />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Weg 1</p>
                <h3 className="text-lg sm:text-xl font-bold">Mach weiter wie bisher</h3>
              </div>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {path1Points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3">
                  <ChevronRight className="text-destructive/60 flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-sm sm:text-base text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Path 2 - Pleasure Path */}
          <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-primary/10 border border-primary/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 sm:px-4 py-1 bg-primary text-primary-foreground text-xs sm:text-sm font-medium rounded-bl-lg">
              Empfohlen
            </div>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <TrendingUp className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground">Weg 2</p>
                <h3 className="text-lg sm:text-xl font-bold">Baue deine eigene Strategie</h3>
              </div>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {path2Points.map((point, i) => (
                <li key={i} className="flex items-start gap-2 sm:gap-3">
                  <ChevronRight className="text-primary flex-shrink-0 mt-0.5" size={16} />
                  <span className="text-sm sm:text-base text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
