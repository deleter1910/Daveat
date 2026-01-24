import { LucideIcon } from "lucide-react";

interface PainPointCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: string;
}

export function PainPointCard({ icon: Icon, title, description, highlight }: PainPointCardProps) {
  return (
    <div className="p-8 rounded-2xl border border-border bg-card/50 hover:border-destructive/50 transition-all duration-300 group overflow-hidden">
      <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6 group-hover:bg-destructive/20 transition-colors flex-shrink-0">
        <Icon className="text-destructive" size={28} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-primary break-words">{title}</h3>
      <p className="text-muted-foreground leading-relaxed break-words">{description}</p>
    </div>
  );
}
