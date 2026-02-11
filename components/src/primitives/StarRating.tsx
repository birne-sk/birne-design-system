import * as React from "react";
import { cn } from "../lib/utils";

// ============================================
// Star Icon
// ============================================

interface StarIconProps {
  filled: boolean | "half";
  size: number;
  strokeColor: string;
  fillColor: string;
  strokeWidth: number;
}

const StarIcon: React.FC<StarIconProps> = ({
  filled,
  size,
  strokeColor,
  fillColor,
  strokeWidth,
}) => {
  const id = React.useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {filled === "half" && (
        <defs>
          <linearGradient id={`half-${id}`}>
            <stop offset="50%" stopColor={fillColor} />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
      )}
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill={
          filled === true
            ? fillColor
            : filled === "half"
            ? `url(#half-${id})`
            : "transparent"
        }
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// ============================================
// Star Rating Component
// ============================================

export interface StarRatingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Rating value (0-5) */
  value: number;
  /** Maximum stars */
  max?: number;
  /** Star size in pixels */
  size?: "sm" | "md" | "lg" | number;
  /** Show numeric value */
  showValue?: boolean;
  /** For dark backgrounds */
  variant?: "light" | "dark";
  /** Interactive - allows clicking to set rating */
  interactive?: boolean;
  /** Callback when rating changes (only if interactive) */
  onRatingChange?: (rating: number) => void;
  /** Gap between stars */
  gap?: "none" | "sm" | "md";
}

const sizeMap = {
  sm: 16,
  md: 20,
  lg: 24,
};

const gapMap = {
  none: "gap-0",
  sm: "gap-0.5",
  md: "gap-1",
};

const StarRating = React.forwardRef<HTMLDivElement, StarRatingProps>(
  (
    {
      className,
      value,
      max = 5,
      size = "md",
      showValue = false,
      variant = "light",
      interactive = false,
      onRatingChange,
      gap = "sm",
      ...props
    },
    ref
  ) => {
    const [hoverValue, setHoverValue] = React.useState<number | null>(null);
    const displayValue = hoverValue ?? value;

    const pixelSize = typeof size === "number" ? size : sizeMap[size];

    // Colors based on variant
    const strokeColor = variant === "dark" ? "hsl(61, 97%, 72%)" : "#221924"; // birne-lemon : birne-black
    const fillColor = "hsl(61, 97%, 72%)"; // birne-lemon

    const getStarState = (index: number): boolean | "half" => {
      const starNumber = index + 1;
      if (displayValue >= starNumber) return true;
      if (displayValue > starNumber - 1 && displayValue < starNumber) return "half";
      return false;
    };

    const handleClick = (index: number) => {
      if (interactive && onRatingChange) {
        onRatingChange(index + 1);
      }
    };

    const handleMouseEnter = (index: number) => {
      if (interactive) {
        setHoverValue(index + 1);
      }
    };

    const handleMouseLeave = () => {
      if (interactive) {
        setHoverValue(null);
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center",
          gapMap[gap],
          interactive && "cursor-pointer",
          className
        )}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {Array.from({ length: max }).map((_, index) => (
          <span
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            className={cn(
              "inline-flex",
              interactive && "transition-transform hover:scale-110"
            )}
          >
            <StarIcon
              filled={getStarState(index)}
              size={pixelSize}
              strokeColor={strokeColor}
              fillColor={fillColor}
              strokeWidth={1.5}
            />
          </span>
        ))}
        {showValue && (
          <span
            className={cn(
              "ml-2 font-text text-sm font-medium",
              variant === "dark" ? "text-white" : "text-birne-black"
            )}
          >
            {value.toFixed(1)}
          </span>
        )}
      </div>
    );
  }
);
StarRating.displayName = "StarRating";

// ============================================
// Rating with Label
// ============================================

export interface RatingDisplayProps extends Omit<StarRatingProps, "interactive" | "onRatingChange"> {
  /** Label text */
  label?: string;
  /** Number of reviews */
  reviewCount?: number;
}

const RatingDisplay = React.forwardRef<HTMLDivElement, RatingDisplayProps>(
  ({ label, reviewCount, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("inline-flex flex-col gap-1", className)}>
        {label && (
          <span className="font-text text-sm text-text-caption">{label}</span>
        )}
        <div className="flex items-center gap-2">
          <StarRating {...props} />
          {reviewCount !== undefined && (
            <span className="font-text text-sm text-text-caption">
              ({reviewCount})
            </span>
          )}
        </div>
      </div>
    );
  }
);
RatingDisplay.displayName = "RatingDisplay";

export { StarRating, RatingDisplay };
