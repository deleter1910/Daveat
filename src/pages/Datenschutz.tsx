import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Mail } from "lucide-react";

export default function Datenschutz() {
  return (
    <Layout>
      <SEO
        title="Datenschutz"
        description="Datenschutzerklärung von Daveat – Ernährungscoaching in der Schweiz."
        path="/datenschutz"
        noindex
      />
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <div className="max-w-2xl">
            <h1 className="heading-xl mb-12">
              <span className="text-primary">Datenschutz</span>
            </h1>
            
            <div className="space-y-8 text-muted-foreground">
              {/* Verantwortlicher */}
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">Verantwortlicher</h2>
                <p>Daveat Cundò</p>
                <p>Wetzikon, Schweiz</p>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  <span>hello@daveat.ch</span>
                </div>
              </div>

              {/* Erhobene Daten */}
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">Erhobene Daten</h2>
                <p>
                  Wenn du das Kontaktformular nutzt, erheben wir folgende Daten:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Name</li>
                  <li>E-Mail-Adresse</li>
                  <li>Deine Nachricht</li>
                </ul>
              </div>

              {/* Verwendungszweck */}
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">Verwendungszweck</h2>
                <p>
                  Deine Daten verwenden wir ausschliesslich, um deine Anfrage zu bearbeiten 
                  und dich zu kontaktieren. Wir speichern deine Daten nur so lange, wie es 
                  für die Bearbeitung notwendig ist.
                </p>
              </div>

              {/* Datenweitergabe */}
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">Datenweitergabe</h2>
                <p>
                  Deine Daten werden nicht an Dritte weitergegeben, es sei denn, dies ist 
                  zur Erfüllung gesetzlicher Pflichten erforderlich.
                </p>
              </div>

              {/* Deine Rechte */}
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">Deine Rechte</h2>
                <p>Du hast jederzeit das Recht auf:</p>
                <ul className="list-disc list-inside space-y-1 pl-2">
                  <li>Auskunft über deine gespeicherten Daten</li>
                  <li>Berichtigung unrichtiger Daten</li>
                  <li>Löschung deiner Daten</li>
                </ul>
                <p className="pt-2">
                  Für Anfragen zu deinen Daten kannst du dich jederzeit an uns wenden.
                </p>
              </div>

              {/* Kontakt */}
              <div className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">Kontakt</h2>
                <p>
                  Bei Fragen zum Datenschutz erreichst du uns unter:
                </p>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary" />
                  <span>hello@daveat.ch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
