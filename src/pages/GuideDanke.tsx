import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function GuideDanke() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Logo */}
      <header className="py-6 px-4">
        <div className="container mx-auto">
          <Link to="/" className="inline-block">
            <img src="/favicon.png" alt="Daveat" className="h-10 w-10" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
          </div>

          {/* Confirmation */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Dein Guide ist unterwegs.
          </h1>

          <p className="text-lg text-muted-foreground mb-4">
            Schau in dein Postfach – der Guide kommt in den nächsten 2 Minuten.
          </p>
          <p className="text-muted-foreground mb-8">
            Falls du ihn nicht findest, prüfe deinen Spam-Ordner.
          </p>

          {/* Reading Instruction */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-12 text-left">
            <p className="text-foreground">
              <strong>Eines noch:</strong> Nimm dir beim Lesen wirklich 10 Minuten Zeit. Nicht überfliegen, sondern verstehen. Die 5 Fehler klingen einfach – aber die Erkenntnis dahinter kann verändern, wie du über Ernährung denkst.
            </p>
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-border mx-auto mb-12"></div>

          {/* Hormozi CTA */}
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Willst du nicht warten?
            </h2>
            <p className="text-muted-foreground mb-6">
              Während dein Guide unterwegs ist: Buche jetzt dein kostenloses Strategiegespräch – und wir starten direkt mit deinem persönlichen Plan.
            </p>
            <p className="text-primary font-medium mb-6">
              Diesen Monat noch 4 Plätze frei.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300"
            >
              Kostenloses Strategiegespräch buchen
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>

          {/* Back to Home */}
          <div className="mt-12">
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
