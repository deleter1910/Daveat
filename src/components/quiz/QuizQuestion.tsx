import { useState } from "react";
import { type QuizTypeSlug, type QuizQuestion as QuizQuestionType } from "./quizData";

interface QuizQuestionProps {
  question: QuizQuestionType;
  questionIndex: number;
  onAnswer: (type: QuizTypeSlug) => void;
}

export function QuizQuestion({ question, questionIndex, onAnswer }: QuizQuestionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (answerIndex: number, type: QuizTypeSlug) => {
    if (selectedIndex !== null) return; // prevent double-click
    setSelectedIndex(answerIndex);

    // Short delay for visual feedback before advancing
    setTimeout(() => {
      onAnswer(type);
    }, 300);
  };

  return (
    <div
      key={questionIndex}
      className="max-w-2xl mx-auto animate-fade-in-up"
    >
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-8 text-center">
        {question.question}
      </h2>

      <div className="space-y-3">
        {question.answers.map((answer, i) => (
          <button
            key={i}
            onClick={() => handleClick(i, answer.type)}
            disabled={selectedIndex !== null}
            className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 ${
              selectedIndex === i
                ? "border-primary bg-primary/10 scale-[0.98]"
                : selectedIndex !== null
                ? "border-border bg-card opacity-50 cursor-not-allowed"
                : "border-border bg-card hover:border-primary/50 hover:bg-card/80 cursor-pointer"
            }`}
          >
            <div className="flex items-start gap-3">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors duration-200 ${
                selectedIndex === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}>
                {String.fromCharCode(65 + i)}
              </span>
              <span className="text-sm sm:text-base leading-relaxed pt-0.5">{answer.text}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
