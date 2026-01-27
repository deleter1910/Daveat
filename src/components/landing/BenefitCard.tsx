import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function BenefitCard({ icon: Icon, title, description }: BenefitCardProps) {
  return (
    <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-border bg-card hover:border-primary transition-colors group overflow-hidden">
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors flex-shrink-0">
        <Icon className="text-primary" size={22} />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 break-words">{title}</h3>
      <p className="text-sm sm:text-base text-muted-foreground break-words">{description}</p>
    </div>
  );
}
