import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const iconCircleVariants = cva(
  "inline-flex items-center justify-center rounded-full shrink-0",
  {
    variants: {
      variant: {
        default: "bg-birne-black-5 text-birne-black",
        muted: "bg-birne-black-10 text-birne-black",
        dark: "bg-birne-black text-white",
        lemon: "bg-birne-lemon text-birne-black",
        purple: "bg-birne-purple-80 text-birne-black",
        success: "bg-green-100 text-green-600",
        warning: "bg-amber-100 text-amber-600",
        destructive: "bg-red-100 text-red-600",
        info: "bg-blue-100 text-blue-600",
        ghost: "bg-white/10 text-white",
      },
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface IconCircleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconCircleVariants> {}

const IconCircle = React.forwardRef<HTMLDivElement, IconCircleProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(iconCircleVariants({ variant, size, className }))}
      {...props}
    />
  )
);
IconCircle.displayName = "IconCircle";

export { IconCircle, iconCircleVariants };
