import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center font-mono text-xs uppercase tracking-wider transition-colors",
  {
    variants: {
      variant: {
        default: "bg-birne-sand text-text-body",
        purple: "bg-birne-purple text-birne-black",
        lemon: "bg-birne-lemon text-birne-black",
        dark: "bg-birne-black text-white",
        outline: "border border-border bg-transparent text-text-body",
        success: "bg-green-100 text-green-800",
        warning: "bg-amber-100 text-amber-800",
        destructive: "bg-red-100 text-red-800",
      },
      size: {
        sm: "px-1.5 py-0.5 text-[10px] rounded-2xs",
        md: "px-2 py-1 text-xs rounded-xs",
        lg: "px-3 py-1.5 text-sm rounded-sm",
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
