import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import logoWhite from "@/assets/logo-white.png";
import logoGreen from "@/assets/logo-green.png";

export function Navbar() {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 group"
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
      </nav>
    </header>
  );
}
