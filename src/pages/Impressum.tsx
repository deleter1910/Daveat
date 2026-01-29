import { Layout } from "@/components/layout/Layout";
import { Mail } from "lucide-react";

export default function Impressum() {
  return (
    <Layout>
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <div className="max-w-2xl">
            <h1 className="heading-xl mb-12">
              <span className="text-primary">Impressum</span>
            </h1>
            
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-xl font-medium text-foreground">Daveat Cundò</p>
                <p className="text-muted-foreground">Wetzikon, Schweiz</p>
              </div>
              
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <span>hello@daveat.ch</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
