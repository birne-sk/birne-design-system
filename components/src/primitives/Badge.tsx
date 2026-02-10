import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-text text-xs font-medium tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default: "bg-birne-black-5 text-birne-black",
        purple: "bg-birne-purple-40 text-birne-black",
        outline: "border border-border bg-transparent text-text-body",
        success: "bg-green-100 text-green-800",
        warning: "bg-amber-100 text-amber-800",
        destructive: "bg-red-100 text-red-800",
      },
      size: {
        sm: "px-2.5 py-1 text-[10px] rounded-full",
        md: "px-3 py-1.5 text-xs rounded-full",
        lg: "px-4 py-2 text-sm rounded-full",
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
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(badgeVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge, badgeVariants };
