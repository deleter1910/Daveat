import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-border bg-card hover:border-primary/50 transition-all duration-300 group">
      <Quote className="text-primary mb-3 sm:mb-4 opacity-50" size={24} />
      <p className="text-base sm:text-lg text-foreground mb-4 sm:mb-6 leading-relaxed">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-primary font-semibold text-xs sm:text-sm">{name.charAt(0)}</span>
        </div>
        <div>
          <p className="font-medium text-foreground text-sm sm:text-base">{name}</p>
          <p className="text-xs sm:text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
