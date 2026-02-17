import { Link, useSearchParams } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ArrowRight, Lightbulb, RotateCcw, Flame, Target, Clock, BookOpen } from "lucide-react";
import { quizTypes, type QuizTypeSlug } from "@/components/quiz/quizData";
import { QuizHeader } from "@/components/quiz/QuizHeader";
import { quizResult, typeCTAs } from "@/content/quiz";

const typeIcons: Record<QuizTypeSlug, typeof Flame> = {
  "stress-esser": Flame,
  perfektionist: Target,
  zeitmangel: Clock,
  regelbrecher: BookOpen,
};

export default function QuizErgebnis() {
  const [searchParams] = useSearchParams();
  const typ = searchParams.get("typ") as QuizTypeSlug | null;
  const quizType = typ ? quizTypes[typ] : null;

  if (!quizType) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <SEO
          title="Quiz-Ergebnis"
          description="Dein persönliches Quiz-Ergebnis von Daveat."
          path="/quiz-ergebnis"
          noindex
        />
        <QuizHeader />
        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">{quizResult.notFoundHeadline}</h1>
            <p className="text-muted-foreground mb-8">
              {quizResult.notFoundText}
            </p>
            <Link
              to="/quiz"
              className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300"
            >
              <RotateCcw className="mr-2" size={18} />
              {quizResult.notFoundButton}
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const TypeIcon = typeIcons[quizType.slug];
  const ctaHeadline = typeCTAs[quizType.slug];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title={`Dein Ergebnis: ${quizType.label} – Daveat Quiz`}
        description={`Du bist der Typ "${quizType.label}". Erfahre, was das für deine Ernährung bedeutet und wie Daveat dir helfen kann.`}
        path="/quiz-ergebnis"
        noindex
      />
      <QuizHeader />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Result Header */}
          <div className="text-center mb-10 animate-fade-in-up">
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <TypeIcon className="w-10 h-10 text-primary" />
              </div>
            </div>

            <p className="text-primary font-medium mb-3">{quizResult.resultLabel}</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {quizType.title}
            </h1>
            <p className="text-lg text-muted-foreground italic">
              {quizType.subtitle}
            </p>
          </div>

          {/* Description */}
          <div
            className="p-6 sm:p-8 rounded-2xl border border-border bg-card mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
              {quizType.description}
            </p>
          </div>

          {/* Tips */}
          <div className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
              <Lightbulb className="text-primary" size={24} />
              {quizResult.tipsHeadline}
            </h2>

            <div className="space-y-4">
              {quizType.tips.map((tip, i) => (
                <div
                  key={i}
                  className="p-5 sm:p-6 rounded-2xl border border-border bg-card"
                >
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary-foreground">{i + 1}</span>
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed text-muted-foreground pt-1">
                      {tip}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-border mx-auto mb-12"></div>

          {/* CTA */}
          <div
            className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8 text-center animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h2 className="text-2xl font-bold mb-4">
              {ctaHeadline}
            </h2>
            <p className="text-muted-foreground mb-6">
              {quizResult.ctaSubline.replace("{type}", quizType.title)}
            </p>
            <p className="text-primary font-medium mb-6">
              {quizResult.ctaUrgency}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300"
            >
              {quizResult.ctaButton}
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>

          {/* Back Links */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
            <Link
              to="/quiz"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <RotateCcw size={14} />
              {quizResult.retakeLink}
            </Link>
            <span className="hidden sm:inline text-border">|</span>
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {quizResult.homeLink}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
