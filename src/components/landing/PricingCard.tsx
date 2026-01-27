import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { useAnalyticsContext } from "@/components/AnalyticsProvider";

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
}

export function PricingCard({
  title,
  subtitle,
  price,
  period,
  features,
  isPopular = false,
  ctaText,
  ctaLink,
}: PricingCardProps) {
  const { trackCTAClick } = useAnalyticsContext();

  const handleClick = () => {
    trackCTAClick(ctaText, `pricing-${title.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <div
      className={`relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl border overflow-hidden ${
        isPopular ? "border-primary bg-card" : "border-border bg-card/50"
      } hover:border-primary transition-colors`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 sm:px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-medium">
            Empfohlen
          </span>
        </div>
      )}
      <div className="mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 break-words">{title}</h3>
        <p className="text-sm sm:text-base text-muted-foreground break-words">{subtitle}</p>
      </div>
      <div className="mb-4 sm:mb-6">
        <span className="text-3xl sm:text-4xl font-bold">{price}</span>
        <span className="text-sm sm:text-base text-muted-foreground ml-2">{period}</span>
      </div>
      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 sm:gap-3">
            <Check className="text-primary mt-0.5 flex-shrink-0" size={18} />
            <span className="text-sm sm:text-base text-muted-foreground break-words">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        to={ctaLink}
        onClick={handleClick}
        className={`w-full flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
          isPopular
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "bg-foreground text-background hover:bg-primary hover:text-primary-foreground"
        }`}
      >
        {ctaText}
        <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
      </Link>
    </div>
  );
}
