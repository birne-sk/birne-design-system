import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-display font-normal transition-all duration-base ease-apple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-birne-lemon focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-birne-lemon text-birne-black border border-birne-black hover:bg-birne-lemon-80 active:bg-birne-lemon-60",
        secondary:
          "bg-birne-black text-birne-purple border border-birne-black hover:bg-birne-black-80 active:bg-birne-black-60",
        soft:
          "bg-birne-black-2 text-birne-black border border-birne-black hover:bg-birne-black-5 active:bg-birne-black-10",
        destructive:
          "bg-red-50 text-red-600 border border-red-300 hover:bg-red-100 active:bg-red-200",
        ghost:
          "text-birne-black hover:bg-birne-black-5 active:bg-birne-black-10",
        link: "text-birne-black font-normal hover:opacity-70",
      },
      size: {
        sm: "h-8 px-4 text-sm rounded-full",
        md: "h-10 px-6 text-base rounded-full",
        lg: "h-12 px-8 text-md rounded-full",
        icon: "h-10 w-10 rounded-full p-0",
      },
    },
    compoundVariants: [
      { variant: "link", size: "sm", class: "h-auto px-0 rounded-none text-sm" },
      { variant: "link", size: "md", class: "h-auto px-0 rounded-none text-base" },
      { variant: "link", size: "lg", class: "h-auto px-0 rounded-none text-md" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, iconLeft, iconRight, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {iconLeft && <span className="shrink-0">{iconLeft}</span>}
        {children}
        {iconRight && <span className="shrink-0">{iconRight}</span>}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
