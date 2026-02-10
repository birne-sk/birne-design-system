import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-text font-medium transition-all duration-base ease-apple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-birne-purple focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-birne-purple text-birne-black hover:bg-birne-purple-80 active:bg-birne-purple-60",
        secondary:
          "bg-birne-black text-white hover:bg-birne-black-80 active:bg-birne-black-60",
        outline:
          "border border-birne-black-40 bg-transparent text-birne-black hover:bg-birne-black-5 active:bg-birne-black-10",
        ghost:
          "text-birne-black hover:bg-birne-black-5 active:bg-birne-black-10",
        link: "text-birne-purple underline-offset-4 hover:underline",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 active:bg-red-700",
      },
      size: {
        sm: "h-8 px-3 text-sm rounded-xs",
        md: "h-10 px-4 text-base rounded-sm",
        lg: "h-12 px-6 text-md rounded-md",
        icon: "h-10 w-10 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
