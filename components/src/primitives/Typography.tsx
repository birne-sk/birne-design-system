import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

// ============================================
// Heading Component
// ============================================

const headingVariants = cva("font-display text-text-heading", {
  variants: {
    level: {
      h1: "text-4xl leading-[56px] font-normal tracking-tight",
      h2: "text-3xl leading-[42px] font-normal",
      h3: "text-2xl leading-[36px] font-normal",
      h4: "text-[24px] leading-[32px] font-normal",
      h5: "text-xl leading-[28px] font-normal",
      h6: "text-lg leading-[26px] font-normal",
    },
  },
  defaultVariants: {
    level: "h2",
  },
});

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingLevel;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = "h2", as, ...props }, ref) => {
    const Component = as || level || "h2";
    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ level, className }))}
        {...props}
      />
    );
  }
);
Heading.displayName = "Heading";

// ============================================
// Text Component
// ============================================

const textVariants = cva("font-text", {
  variants: {
    variant: {
      body: "text-text-body",
      heading: "text-text-heading",
      caption: "text-text-caption",
    },
    size: {
      xs: "text-xs leading-[16px]",
      sm: "text-sm leading-[18px]",
      base: "text-base leading-[22px]",
      md: "text-md leading-[25px]",
      lg: "text-lg leading-[28px]",
      xl: "text-xl leading-[32px]",
    },
    weight: {
      light: "font-light",
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "body",
    size: "base",
    weight: "regular",
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div";
}

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, size, weight, as: Component = "p", ...props }, ref) => (
    <Component
      ref={ref}
      className={cn(textVariants({ variant, size, weight, className }))}
      {...props}
    />
  )
);
Text.displayName = "Text";

// ============================================
// Eyebrow Component
// ============================================

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {}

const Eyebrow = React.forwardRef<HTMLSpanElement, EyebrowProps>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "eyebrow font-mono text-[14px] leading-[20px] uppercase tracking-wider text-text-caption",
        className
      )}
      {...props}
    />
  )
);
Eyebrow.displayName = "Eyebrow";

// ============================================
// Label Component
// ============================================

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        "font-text text-sm leading-[18px] font-normal text-text-heading",
        className
      )}
      {...props}
    />
  )
);
Label.displayName = "Label";

export { Heading, headingVariants, Text, textVariants, Eyebrow, Label };
