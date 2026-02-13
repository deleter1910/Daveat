import { useState, useCallback } from "react";
import { ArrowRight, Loader2, Shield } from "lucide-react";
import { TurnstileWidget } from "@/components/TurnstileWidget";
import { useToast } from "@/hooks/use-toast";
import { quizEmailCapture } from "@/content/quiz";

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY || "";

interface QuizEmailCaptureProps {
  onSubmit: (firstName: string, email: string, turnstileToken: string) => Promise<void>;
  isSubmitting: boolean;
}

export function QuizEmailCapture({ onSubmit, isSubmitting }: QuizEmailCaptureProps) {
  const { toast } = useToast();
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [formData, setFormData] = useState({ firstName: "", email: "" });

  const handleTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const handleTurnstileError = useCallback(() => {
    setTurnstileToken(null);
    toast({
      title: "CAPTCHA Fehler",
      description: "Bitte lade die Seite neu und versuche es erneut.",
      variant: "destructive",
    });
  }, [toast]);

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken(null);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!turnstileToken) {
      toast({
        title: "CAPTCHA erforderlich",
        description: "Bitte bestätige, dass du kein Roboter bist.",
        variant: "destructive",
      });
      return;
    }

    await onSubmit(formData.firstName, formData.email, turnstileToken);
  };

  return (
    <div className="max-w-md mx-auto animate-fade-in-up">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">
          {quizEmailCapture.headline}
        </h2>
        <p className="text-muted-foreground">
          {quizEmailCapture.subline}
        </p>
      </div>

      <div className="p-6 sm:p-8 rounded-3xl border border-border bg-card">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="quiz-firstName" className="block text-sm font-medium mb-2">
              Vorname
            </label>
            <input
              type="text"
              id="quiz-firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              placeholder="Dein Vorname"
            />
          </div>
          <div>
            <label htmlFor="quiz-email" className="block text-sm font-medium mb-2">
              E-Mail
            </label>
            <input
              type="email"
              id="quiz-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              placeholder="deine@email.com"
            />
          </div>

          <div className="py-2">
            <TurnstileWidget
              siteKey={TURNSTILE_SITE_KEY}
              onVerify={handleTurnstileVerify}
              onError={handleTurnstileError}
              onExpire={handleTurnstileExpire}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !turnstileToken}
            className="w-full px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 animate-spin" size={18} />
                {quizEmailCapture.submittingButton}
              </>
            ) : (
              <>
                {quizEmailCapture.submitButton}
                <ArrowRight className="ml-2" size={18} />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
          <Shield className="text-primary flex-shrink-0" size={16} />
          <span>{quizEmailCapture.privacyNote}</span>
        </div>
      </div>
    </div>
  );
}
