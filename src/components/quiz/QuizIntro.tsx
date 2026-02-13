import { ArrowRight, Clock } from "lucide-react";
import { quizIntro } from "@/content/quiz";

interface QuizIntroProps {
  onStart: () => void;
}

export function QuizIntro({ onStart }: QuizIntroProps) {
  return (
    <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
        {quizIntro.headline}{" "}
        <span className="text-primary">{quizIntro.headlineHighlight}</span>
      </h1>

      <p className="text-lg text-muted-foreground mb-4">
        {quizIntro.subline}
      </p>

      <p className="text-muted-foreground mb-8 flex items-center justify-center gap-2">
        <Clock size={16} />
        {quizIntro.timeNote}
      </p>

      <button
        onClick={onStart}
        className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 text-lg"
      >
        {quizIntro.cta}
        <ArrowRight className="ml-2" size={20} />
      </button>

      <div className="mt-12 p-6 rounded-2xl border border-border bg-card text-left">
        <p className="text-sm text-muted-foreground">
          {quizIntro.bottomNote}
        </p>
      </div>
    </div>
  );
}
