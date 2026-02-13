import { quizTypeTexts, quizQuestionTexts } from "@/content/quiz";

export type QuizTypeSlug = "stress-esser" | "perfektionist" | "zeitmangel" | "regelbrecher";

export interface QuizType {
  slug: QuizTypeSlug;
  title: string;
  subtitle: string;
  description: string;
  tips: string[];
}

export interface QuizAnswer {
  text: string;
  type: QuizTypeSlug;
}

export interface QuizQuestion {
  question: string;
  answers: QuizAnswer[];
}

const typeOrder: QuizTypeSlug[] = ["stress-esser", "perfektionist", "zeitmangel", "regelbrecher"];

export const quizTypes: Record<QuizTypeSlug, QuizType> = Object.fromEntries(
  typeOrder.map(slug => [slug, { slug, ...quizTypeTexts[slug] }])
) as Record<QuizTypeSlug, QuizType>;

const answerTypeOrder: QuizTypeSlug[] = ["stress-esser", "perfektionist", "zeitmangel", "regelbrecher"];

export const quizQuestions: QuizQuestion[] = quizQuestionTexts.map(q => ({
  question: q.question,
  answers: q.answers.map((text, i) => ({ text, type: answerTypeOrder[i] })),
}));

// Deterministic priority for tie-breaking
const typePriority: QuizTypeSlug[] = ["stress-esser", "perfektionist", "zeitmangel", "regelbrecher"];

export function calculateQuizResult(answers: QuizTypeSlug[]): QuizTypeSlug {
  const counts: Record<QuizTypeSlug, number> = {
    "stress-esser": 0,
    perfektionist: 0,
    zeitmangel: 0,
    regelbrecher: 0,
  };

  for (const answer of answers) {
    counts[answer]++;
  }

  let maxCount = 0;
  let winner: QuizTypeSlug = typePriority[0];

  for (const type of typePriority) {
    if (counts[type] > maxCount) {
      maxCount = counts[type];
      winner = type;
    }
  }

  return winner;
}
