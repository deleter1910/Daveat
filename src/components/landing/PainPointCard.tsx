import { LucideIcon } from "lucide-react";

interface PainPointCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function PainPointCard({ icon: Icon, title, description }: PainPointCardProps) {
  return (
    <div className="p-6 rounded-2xl border border-border bg-card/50 hover:border-destructive/50 transition-all duration-300 group">
      <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
        <Icon className="text-destructive" size={24} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
