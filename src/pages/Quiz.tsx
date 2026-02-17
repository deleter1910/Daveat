import { useNavigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useQuiz } from "@/hooks/useQuiz";
import { quizQuestions } from "@/components/quiz/quizData";
import { QuizHeader } from "@/components/quiz/QuizHeader";
import { QuizIntro } from "@/components/quiz/QuizIntro";
import { QuizProgressBar } from "@/components/quiz/QuizProgressBar";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { QuizEmailCapture } from "@/components/quiz/QuizEmailCapture";

export default function Quiz() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const {
    step,
    currentQuestionIndex,
    answers,
    result,
    totalQuestions,
    startQuiz,
    answerQuestion,
    setSubmitting,
  } = useQuiz();

  const handleEmailSubmit = async (firstName: string, email: string, turnstileToken: string) => {
    if (!result) return;

    setSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("quiz-subscribe", {
        body: {
          firstName,
          email,
          turnstileToken,
          quizResult: result,
          answers,
        },
      });

      if (error) throw error;

      navigate(`/quiz-ergebnis?typ=${result}`);
    } catch (error: any) {
      toast({
        title: "Fehler",
        description: error.message || "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
        variant: "destructive",
      });
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Ernährungs-Quiz – Finde deinen Typ"
        description="Finde in 2 Minuten heraus, welches unsichtbare Muster dich sabotiert – und was du sofort dagegen tun kannst."
        path="/quiz"
      />
      <QuizHeader />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full">
          {step === "intro" && <QuizIntro onStart={startQuiz} />}

          {step === "question" && (
            <div>
              <QuizProgressBar current={currentQuestionIndex} total={totalQuestions} />
              <QuizQuestion
                key={currentQuestionIndex}
                question={quizQuestions[currentQuestionIndex]}
                questionIndex={currentQuestionIndex}
                onAnswer={answerQuestion}
              />
            </div>
          )}

          {(step === "email" || step === "submitting") && (
            <QuizEmailCapture
              onSubmit={handleEmailSubmit}
              isSubmitting={step === "submitting"}
            />
          )}
        </div>
      </main>
    </div>
  );
}
