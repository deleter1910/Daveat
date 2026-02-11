import { ArrowRight, Clock } from "lucide-react";

interface QuizIntroProps {
  onStart: () => void;
}

export function QuizIntro({ onStart }: QuizIntroProps) {
  return (
    <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
        Du tust das Richtige – aber es{" "}
        <span className="text-primary">funktioniert nicht?</span>
      </h1>

      <p className="text-lg text-muted-foreground mb-4">
        Die meisten scheitern nicht an Wissen oder Willenskraft. Sondern an einem Muster, das sie nicht sehen.
      </p>

      <p className="text-muted-foreground mb-8 flex items-center justify-center gap-2">
        <Clock size={16} />
        7 Fragen, 2 Minuten – und du weisst, was dich blockiert.
      </p>

      <button
        onClick={onStart}
        className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 text-lg"
      >
        Meinen Typ herausfinden
        <ArrowRight className="ml-2" size={20} />
      </button>

      <div className="mt-12 p-6 rounded-2xl border border-border bg-card text-left">
        <p className="text-sm text-muted-foreground">
          Die meisten kennen alle Regeln. Trotzdem ändert sich nichts. Dieses Quiz zeigt dir <strong className="text-foreground">warum</strong> – und gibt dir 3 Tipps, die du heute noch umsetzen kannst.
        </p>
      </div>
    </div>
  );
}
