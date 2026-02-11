import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Calendar } from "lucide-react";

// ============================================
// Capacity Indicator
// ============================================

const capacityVariants = cva(
  "inline-flex items-center justify-center font-text text-xs font-medium px-2 py-0.5 rounded",
  {
    variants: {
      status: {
        available: "bg-emerald-100 text-emerald-700",
        limited: "bg-amber-100 text-amber-700",
        almostFull: "bg-red-100 text-red-700",
        full: "bg-birne-black-10 text-text-caption",
      },
    },
    defaultVariants: {
      status: "available",
    },
  }
);

export interface CapacityIndicatorProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof capacityVariants> {
  /** Number of available spots */
  spots: number;
  /** Custom label (overrides automatic) */
  label?: string;
}

const getCapacityStatus = (spots: number): "available" | "limited" | "almostFull" | "full" => {
  if (spots <= 0) return "full";
  if (spots <= 3) return "almostFull";
  if (spots <= 7) return "limited";
  return "available";
};

const getCapacityLabel = (spots: number): string => {
  if (spots <= 0) return "Obsadené";
  if (spots === 1) return "1 miesto";
  if (spots >= 2 && spots <= 4) return `${spots} miesta`;
  return `${spots} miest`;
};

const CapacityIndicator = React.forwardRef<HTMLSpanElement, CapacityIndicatorProps>(
  ({ className, spots, label, status, ...props }, ref) => {
    const autoStatus = status ?? getCapacityStatus(spots);
    const displayLabel = label ?? getCapacityLabel(spots);

    return (
      <span
        ref={ref}
        className={cn(capacityVariants({ status: autoStatus }), className)}
        {...props}
      >
        {displayLabel}
      </span>
    );
  }
);
CapacityIndicator.displayName = "CapacityIndicator";

// ============================================
// Date Badge with Capacity
// ============================================

export interface DateCapacityBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Date to display */
  date: string;
  /** Number of available spots */
  spots: number;
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Click handler */
  onClick?: () => void;
  /** Whether this date is selected */
  selected?: boolean;
}

const DateCapacityBadge = React.forwardRef<HTMLDivElement, DateCapacityBadgeProps>(
  ({ className, date, spots, size = "md", onClick, selected, ...props }, ref) => {
    const sizeClasses = {
      sm: "h-8 px-3 gap-2 text-xs",
      md: "h-10 px-4 gap-2.5 text-sm",
      lg: "h-12 px-5 gap-3 text-base",
    };

    const iconSizes = {
      sm: 14,
      md: 16,
      lg: 18,
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center font-text rounded-full border transition-all",
          sizeClasses[size],
          selected
            ? "bg-birne-black text-white border-birne-black"
            : "bg-white text-birne-black border-birne-black-20",
          onClick && "cursor-pointer hover:border-birne-black-40",
          className
        )}
        onClick={onClick}
        {...props}
      >
        <Calendar size={iconSizes[size]} className={selected ? "text-white" : "text-text-caption"} />
        <span className="font-medium">{date}</span>
        <CapacityIndicator spots={spots} />
      </div>
    );
  }
);
DateCapacityBadge.displayName = "DateCapacityBadge";

// ============================================
// Instructor Badge with Avatar
// ============================================

export interface InstructorBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Instructor name */
  name: string;
  /** Avatar image URL (optional) */
  avatarUrl?: string;
  /** Initials (auto-generated from name if not provided) */
  initials?: string;
  /** Size variant */
  size?: "sm" | "md" | "lg";
  /** Click handler */
  onClick?: () => void;
  /** Whether this instructor is selected */
  selected?: boolean;
}

const getInitials = (name: string): string => {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
};

const InstructorBadge = React.forwardRef<HTMLDivElement, InstructorBadgeProps>(
  (
    { className, name, avatarUrl, initials, size = "md", onClick, selected, ...props },
    ref
  ) => {
    const displayInitials = initials ?? getInitials(name);

    const sizeClasses = {
      sm: "h-8 pl-1 pr-3 gap-2 text-xs",
      md: "h-10 pl-1.5 pr-4 gap-2.5 text-sm",
      lg: "h-12 pl-2 pr-5 gap-3 text-base",
    };

    const avatarSizes = {
      sm: "w-6 h-6 text-[10px]",
      md: "w-7 h-7 text-xs",
      lg: "w-8 h-8 text-sm",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center font-text rounded-full border transition-all",
          sizeClasses[size],
          selected
            ? "bg-birne-black text-white border-birne-black"
            : "bg-white text-birne-black border-birne-black-20",
          onClick && "cursor-pointer hover:border-birne-black-40",
          className
        )}
        onClick={onClick}
        {...props}
      >
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className={cn("rounded-full object-cover", avatarSizes[size])}
          />
        ) : (
          <span
            className={cn(
              "rounded-full bg-birne-black-10 text-text-caption font-medium flex items-center justify-center",
              avatarSizes[size]
            )}
          >
            {displayInitials}
          </span>
        )}
        <span className="font-medium">{name}</span>
      </div>
    );
  }
);
InstructorBadge.displayName = "InstructorBadge";

export { CapacityIndicator, DateCapacityBadge, InstructorBadge };
