import { Quote, CheckCircle, Users } from "lucide-react";

const benefits = [
  "Energie, um für seine Familie da zu sein",
  "Selbstvertrauen, zu sozialen Events zu gehen",
  "Disziplin, die sich auf seine Arbeit und Beziehungen übertrug",
  "Freiheit vom ständigen Denken ans Essen",
  "Beweis, dass er sich wieder selbst vertrauen kann",
];

export function SocialProofSection() {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <p className="text-primary font-medium mb-3 sm:mb-4 flex items-center justify-center gap-2 text-sm sm:text-base">
            <span className="w-6 sm:w-8 h-px bg-primary"></span>
            Ergebnisse
            <span className="w-6 sm:w-8 h-px bg-primary"></span>
          </p>
          <h2 className="heading-lg">
            Echte Resultate. Echte Menschen.{" "}
            <span className="text-primary">Echte Transformation.</span>
          </h2>
        </div>

        {/* Featured Story */}
        <div className="max-w-4xl mx-auto">
          {/* Hero Quote */}
          <div className="relative mb-8 sm:mb-12">
            <Quote className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 text-primary/20" size={40} />
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight pl-6 sm:pl-8">
              „Ich habe <span className="text-primary">50kg</span> in{" "}
              <span className="text-primary">16 Monaten</span> verloren—nachdem alles andere gescheitert ist"
            </blockquote>
          </div>

          {/* Story Context */}
          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-3xl">
            Ein Klient kam zu mir, nachdem er diverse Diäten und Eigenversuche probiert hatte. 
            Nichts funktionierte. Innerhalb von 16 Monaten nach dem Erstellen seines Persönlichen 
            Umsetzungsplans und Disziplin verlor er 50kg.
          </p>

          {/* Benefits Grid */}
          <div className="mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">
              Aber das hat er <span className="text-primary">wirklich</span> gewonnen:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={18} />
                  <span className="text-sm sm:text-base text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ripple Effect */}
          <div className="p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-primary/30 bg-primary/5">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Users className="text-primary" size={20} />
              </div>
              <div>
                <p className="text-base sm:text-lg text-foreground leading-relaxed">
                  Seine Frau bemerkte es. Sie begann ihre eigene Transformation. 
                  Dann ein Freund, welcher sogar{" "}
                  <span className="text-muted-foreground">Ozempic</span> versucht hatte.{" "}
                  <span className="text-primary font-semibold">Der Welleneffekt ist real.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
