interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

export function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="flex flex-col items-center text-center group overflow-hidden">
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
        <span className="text-xl sm:text-2xl font-bold text-primary-foreground">{number}</span>
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 break-words">{title}</h3>
      <p className="text-sm sm:text-base text-muted-foreground break-words">{description}</p>
    </div>
  );
}
