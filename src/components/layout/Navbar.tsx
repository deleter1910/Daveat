import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoWhite from "@/assets/logo-white.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logoWhite} alt="Daveat Logo" className="h-10 w-auto" />
          <span className="text-2xl font-bold font-['Clash_Display']">
            Daveat<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 hover:text-primary",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="hidden md:inline-flex btn-primary text-sm"
        >
          Get in Touch
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-[65px] bg-background z-40 transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-2xl font-medium transition-colors duration-300 hover:text-primary",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground"
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary text-lg"
            >
              Get in Touch
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
