interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

export function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <span className="text-2xl font-bold text-primary-foreground">{number}</span>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
