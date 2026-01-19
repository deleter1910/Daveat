import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Mail, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast({
        title: "Nachricht gesendet!",
        description: "Ich melde mich persönlich bei dir.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error: any) {
      toast({
        title: "Fehler",
        description: error.message || "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <p className="text-primary font-medium mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary"></span>
              Kontakt
            </p>
            <h1 className="heading-xl mb-8">
              Lass uns prüfen,<br />ob es <span className="text-primary">passt</span>.
            </h1>
            <p className="text-body max-w-2xl">
              Du musst noch nicht wissen, wie dein Weg aussieht. Schreib mir einfach kurz, wo du gerade stehst. Ich melde mich persönlich bei dir, um zu schauen, ob meine Methode dir helfen kann.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding pt-8">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="p-8 md:p-12 rounded-3xl border border-border bg-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Dein Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="deine@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Was ist deine größte Herausforderung?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" size={18} />
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      Nachricht senden
                      <Send className="ml-2" size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Email Info */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 text-muted-foreground">
                <Mail className="text-primary" size={18} />
                <span>hello@daveat.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
