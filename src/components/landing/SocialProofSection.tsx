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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium mb-4 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-primary"></span>
            Ergebnisse
            <span className="w-8 h-px bg-primary"></span>
          </p>
          <h2 className="heading-lg">
            Echte Resultate. Echte Menschen.{" "}
            <span className="text-primary">Echte Transformation.</span>
          </h2>
        </div>

        {/* Featured Story */}
        <div className="max-w-4xl mx-auto">
          {/* Hero Quote */}
          <div className="relative mb-12">
            <Quote className="absolute -top-4 -left-4 text-primary/20" size={64} />
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight pl-8">
              „Ich habe <span className="text-primary">50kg</span> in{" "}
              <span className="text-primary">16 Monaten</span> verloren—nachdem alles andere gescheitert ist"
            </blockquote>
          </div>

          {/* Story Context */}
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Ein Klient kam zu mir, nachdem er diverse Diäten und Eigenversuche probiert hatte. 
            Nichts funktionierte. Innerhalb von 16 Monaten nach dem Erstellen seines Persönlichen 
            Umsetzungsplans und Disziplin verlor er 50kg.
          </p>

          {/* Benefits Grid */}
          <div className="mb-12">
            <h3 className="text-xl font-bold mb-6">
              Aber das hat er <span className="text-primary">wirklich</span> gewonnen:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={20} />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ripple Effect */}
          <div className="p-8 rounded-2xl border border-primary/30 bg-primary/5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Users className="text-primary" size={24} />
              </div>
              <div>
                <p className="text-lg text-foreground leading-relaxed">
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
