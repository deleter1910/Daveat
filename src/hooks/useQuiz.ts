import { useState, useCallback } from "react";
import { type QuizTypeSlug, quizQuestions, calculateQuizResult } from "@/components/quiz/quizData";

export type QuizStep = "intro" | "question" | "email" | "submitting";

interface QuizState {
  step: QuizStep;
  currentQuestionIndex: number;
  answers: QuizTypeSlug[];
  result: QuizTypeSlug | null;
}

export function useQuiz() {
  const [state, setState] = useState<QuizState>({
    step: "intro",
    currentQuestionIndex: 0,
    answers: [],
    result: null,
  });

  const startQuiz = useCallback(() => {
    setState({
      step: "question",
      currentQuestionIndex: 0,
      answers: [],
      result: null,
    });
  }, []);

  const answerQuestion = useCallback((type: QuizTypeSlug) => {
    setState((prev) => {
      const newAnswers = [...prev.answers, type];
      const isLastQuestion = prev.currentQuestionIndex >= quizQuestions.length - 1;

      if (isLastQuestion) {
        const result = calculateQuizResult(newAnswers);
        return {
          ...prev,
          answers: newAnswers,
          result,
          step: "email",
        };
      }

      return {
        ...prev,
        answers: newAnswers,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
      };
    });
  }, []);

  const setSubmitting = useCallback((submitting: boolean) => {
    setState((prev) => ({
      ...prev,
      step: submitting ? "submitting" : "email",
    }));
  }, []);

  const totalQuestions = quizQuestions.length;

  return {
    step: state.step,
    currentQuestionIndex: state.currentQuestionIndex,
    answers: state.answers,
    result: state.result,
    totalQuestions,
    startQuiz,
    answerQuestion,
    setSubmitting,
  };
}
