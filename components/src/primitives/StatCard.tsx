import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const statCardVariants = cva(
  "rounded-lg border border-border bg-surface p-4 transition-all",
  {
    variants: {
      variant: {
        default: "bg-surface",
        muted: "bg-birne-black-2 border-transparent",
        purple: "bg-birne-purple-20 border-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface StatCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statCardVariants> {
  label: string;
  value: string | number;
  description?: string;
  trend?: { value: number; label?: string };
  icon?: React.ReactNode;
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ className, variant, label, value, description, trend, icon, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(statCardVariants({ variant, className }))}
        {...props}
      >
        <div className="flex items-start justify-between">
          <span className="font-mono text-[11px] uppercase tracking-wider text-text-caption">
            {label}
          </span>
          {icon && <span className="text-text-caption">{icon}</span>}
        </div>
        <div className="mt-2">
          <span className="font-display text-2xl text-text-heading">{value}</span>
        </div>
        {(description || trend) && (
          <div className="mt-1.5 flex items-center gap-2">
            {trend && (
              <span
                className={cn(
                  "font-text text-xs font-medium",
                  trend.value > 0 && "text-green-600",
                  trend.value < 0 && "text-red-600",
                  trend.value === 0 && "text-text-caption"
                )}
              >
                {trend.value > 0 ? "↑" : trend.value < 0 ? "↓" : "→"}{" "}
                {Math.abs(trend.value)}%{trend.label ? ` ${trend.label}` : ""}
              </span>
            )}
            {description && (
              <span className="font-text text-xs text-text-caption">{description}</span>
            )}
          </div>
        )}
      </div>
    );
  }
);
StatCard.displayName = "StatCard";

export { StatCard, statCardVariants };
