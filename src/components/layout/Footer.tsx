import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import logoWhite from "@/assets/logo-white.png";
import logoGreen from "@/assets/logo-green.png";

const socialLinks = [
  { name: "Instagram", icon: Instagram, url: "#" },
];

export function Footer() {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://subscribe-forms.beehiiv.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className="bg-card border-t border-border overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16 max-w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4 text-center md:text-left">
            <Link
              to="/"
              className="inline-flex items-center gap-2 group"
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
            >
              <div className="relative h-8 w-8 sm:h-10 sm:w-10">
                <img
                  src={logoWhite}
                  alt="Daveat Logo"
                  className={cn(
                    "absolute inset-0 h-8 sm:h-10 w-auto transition-opacity duration-300",
                    isLogoHovered ? "opacity-0" : "opacity-100"
                  )}
                />
                <img
                  src={logoGreen}
                  alt="Daveat Logo"
                  className={cn(
                    "absolute inset-0 h-8 sm:h-10 w-auto transition-opacity duration-300",
                    isLogoHovered ? "opacity-100" : "opacity-0"
                  )}
                />
              </div>
            </Link>
            <div className="space-y-1 sm:space-y-2">
              <p className="text-xs sm:text-sm text-primary font-medium tracking-wide break-words">
                Lifestyle Strategy Partner | Nachhaltige Gesundheitstransformation
              </p>
              <p className="text-sm sm:text-base text-muted-foreground break-words">
                Keine Quick Fixes. Keine externen Regeln. Nur <span className="text-foreground font-medium">DEIN</span> Plan, gemeinsam erstellt, für <span className="text-foreground font-medium">DEIN</span> Leben.
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-3 sm:space-y-4 text-center">
            <h4 className="text-base sm:text-lg font-semibold">80/20 Newsletter</h4>
            <p className="text-sm text-muted-foreground">
              Praktische Tipps für nachhaltige Gesundheit.
            </p>
            <div className="flex justify-center">
              <iframe
                src="https://subscribe-forms.beehiiv.com/cf754d78-cdfe-42b5-8bd0-2c612adde1f2"
                className="beehiiv-embed"
                data-test-id="beehiiv-embed"
                frameBorder="0"
                scrolling="no"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "280px",
                  margin: 0,
                  borderRadius: "8px",
                  backgroundColor: "transparent",
                  boxShadow: "none"
                }}
              />
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-3 sm:space-y-4 text-center md:text-right">
            <h4 className="text-base sm:text-lg font-semibold">Kontakt</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-center justify-center md:justify-end gap-2 sm:gap-3 text-sm sm:text-base text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span>hello@daveat.com</span>
              </li>
            </ul>
            <div className="flex gap-3 sm:gap-4 pt-3 sm:pt-4 justify-center md:justify-end">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground order-2 sm:order-1">
            © {new Date().getFullYear()} Daveat. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground order-1 sm:order-2">
            <Link to="/datenschutz" className="hover:text-primary transition-colors">
              Datenschutz
            </Link>
            <Link to="/impressum" className="hover:text-primary transition-colors">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
