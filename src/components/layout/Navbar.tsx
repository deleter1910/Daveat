import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoWhite from "@/assets/logo-white.png";
import logoGreen from "@/assets/logo-green.png";

const navLinks = [
  { label: "Quiz", to: "/quiz" },
  { label: "Für Firmen", to: "/services" },
  { label: "Über mich", to: "/about" },
  { label: "Kontakt", to: "/contact" },
];

export function Navbar() {
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
          onClick={() => setIsMobileOpen(false)}
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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-foreground"
          aria-label="Menu"
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileOpen(false)}
                className="text-base text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
