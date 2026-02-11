import { ArrowRight, Clock, Sparkles } from "lucide-react";

interface QuizIntroProps {
  onStart: () => void;
}

export function QuizIntro({ onStart }: QuizIntroProps) {
  return (
    <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
      <div className="mb-8 flex justify-center">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
          <Sparkles className="w-10 h-10 text-primary" />
        </div>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
        Welcher Ernährungs-Typ <span className="text-primary">bist du?</span>
      </h1>

      <p className="text-lg text-muted-foreground mb-4">
        7 kurze Fragen – und du weisst, was dich wirklich blockiert.
      </p>

      <p className="text-muted-foreground mb-8 flex items-center justify-center gap-2">
        <Clock size={16} />
        Dauert nur 2 Minuten
      </p>

      <button
        onClick={onStart}
        className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 text-lg"
      >
        Quiz starten
        <ArrowRight className="ml-2" size={20} />
      </button>

      <div className="mt-12 p-6 rounded-2xl border border-border bg-card text-left">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Was du bekommst:</strong> Dein persönlicher Energie-Blockade-Typ mit 3 konkreten Tipps, die sofort umsetzbar sind.
        </p>
      </div>
    </div>
  );
}
