import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Linkedin, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import logoWhite from "@/assets/logo-white.png";
import logoGreen from "@/assets/logo-green.png";

const quickLinks = [
  { name: "Startseite", path: "/" },
  { name: "Angebot", path: "/services" },
  { name: "Über mich", path: "/about" },
  { name: "Kontakt", path: "/contact" },
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "#" },
  { name: "Instagram", icon: Instagram, url: "#" },
];

export function Footer() {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center gap-2 group"
              onMouseEnter={() => setIsLogoHovered(true)}
              onMouseLeave={() => setIsLogoHovered(false)}
            >
              <div className="relative h-10 w-10">
                <img
                  src={logoWhite}
                  alt="Daveat Logo"
                  className={cn(
                    "absolute inset-0 h-10 w-auto transition-opacity duration-300",
                    isLogoHovered ? "opacity-0" : "opacity-100"
                  )}
                />
                <img
                  src={logoGreen}
                  alt="Daveat Logo"
                  className={cn(
                    "absolute inset-0 h-10 w-auto transition-opacity duration-300",
                    isLogoHovered ? "opacity-100" : "opacity-0"
                  )}
                />
              </div>
            </Link>
            <p className="text-muted-foreground">
              Gesundheit, die in deinen echten Alltag passt.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <span>hello@daveat.com</span>
              </li>
            </ul>
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Daveat. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Datenschutz
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
