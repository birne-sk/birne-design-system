import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-text font-medium transition-colors",
  {
    variants: {
      variant: {
        // Solid variants
        default: "bg-birne-black-5 text-birne-black",
        purple: "bg-birne-purple-40 text-birne-black",
        lemon: "bg-birne-lemon text-birne-black",
        dark: "bg-birne-black text-white",

        // Outline variants
        outline: "border border-border bg-transparent text-text-body",
        outlineLight: "border border-white/30 bg-transparent text-white",
        outlineDark: "border border-birne-black/20 bg-transparent text-birne-black",

        // Glass variants (for use on images/colored backgrounds)
        glass: "bg-white/80 backdrop-blur-md text-birne-black border border-white/20",
        glassDark: "bg-black/20 backdrop-blur-md text-white border border-white/10",
        glassPurple: "bg-birne-purple-100/30 backdrop-blur-md text-birne-black border border-birne-purple-100/20",
        glassLemon: "bg-birne-lemon/30 backdrop-blur-md text-birne-black border border-birne-lemon/20",

        // Status variants
        success: "bg-green-100 text-green-800",
        warning: "bg-amber-100 text-amber-800",
        destructive: "bg-red-100 text-red-800",
        info: "bg-blue-100 text-blue-800",
      },
      size: {
        sm: "px-2 py-0.5 text-[10px] rounded-full",
        md: "px-3 py-1 text-xs rounded-full",
        lg: "px-4 py-1.5 text-sm rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /** Left icon */
  icon?: React.ReactNode;
  /** Right icon */
  iconRight?: React.ReactNode;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, icon, iconRight, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size, className }))}
        {...props}
      >
        {icon && <span className="shrink-0 -ml-0.5">{icon}</span>}
        {children}
        {iconRight && <span className="shrink-0 -mr-0.5">{iconRight}</span>}
      </div>
    );
  }
);
Badge.displayName = "Badge";

// ============================================
// Predefined Badge with Icons
// ============================================

export interface MetaBadgeProps extends Omit<BadgeProps, "icon" | "children"> {
  /** Badge type */
  type: "date" | "location" | "duration" | "category" | "status";
  /** Value to display */
  value: string;
}

export { Badge, badgeVariants };
