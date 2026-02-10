import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const inputVariants = cva(
  "flex w-full font-text bg-surface text-text-heading placeholder:text-text-caption border border-border transition-all duration-base ease-apple file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-birne-purple focus-visible:ring-offset-0 focus-visible:border-birne-purple disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-8 px-2 py-1.5 text-sm rounded-xs",
        md: "h-10 px-3 py-2 text-base rounded-sm",
        lg: "h-12 px-4 py-3 text-md rounded-md",
      },
      variant: {
        default: "bg-surface",
        filled: "bg-birne-sand-20 border-transparent",
        ghost: "bg-transparent border-transparent hover:bg-birne-black-5",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size, variant, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          inputVariants({ size, variant, className }),
          error && "border-red-500 focus-visible:ring-red-500"
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

// ============================================
// Textarea Component
// ============================================

const textareaVariants = cva(
  "flex min-h-[80px] w-full font-text bg-surface text-text-heading placeholder:text-text-caption border border-border transition-all duration-base ease-apple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-birne-purple focus-visible:ring-offset-0 focus-visible:border-birne-purple disabled:cursor-not-allowed disabled:opacity-50 resize-none",
  {
    variants: {
      size: {
        sm: "px-2 py-1.5 text-sm rounded-xs",
        md: "px-3 py-2 text-base rounded-sm",
        lg: "px-4 py-3 text-md rounded-md",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    VariantProps<typeof textareaVariants> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, size, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          textareaVariants({ size, className }),
          error && "border-red-500 focus-visible:ring-red-500"
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Input, inputVariants, Textarea, textareaVariants };
