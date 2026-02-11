import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

// ============================================
// Section - Full-width background sections
// ============================================

const sectionVariants = cva("w-full", {
  variants: {
    background: {
      white: "bg-white",
      sand: "bg-birne-sand",
      sandLight: "bg-birne-sand-20",
      dark: "bg-birne-black text-white",
      darkSoft: "bg-[#1a1520] text-white",
      purple: "bg-birne-purple",
      purpleLight: "bg-birne-purple-20",
      lemon: "bg-birne-lemon",
      lemonLight: "bg-birne-lemon-20",
      transparent: "bg-transparent",
    },
    padding: {
      none: "",
      sm: "py-8 md:py-12",
      md: "py-12 md:py-16",
      lg: "py-16 md:py-24",
      xl: "py-24 md:py-32",
    },
  },
  defaultVariants: {
    background: "white",
    padding: "md",
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  as?: "section" | "div" | "article" | "aside" | "header" | "footer";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, background, padding, as: Component = "section", ...props }, ref) => {
    return (
      <Component
        ref={ref as any}
        className={cn(sectionVariants({ background, padding, className }))}
        {...props}
      />
    );
  }
);
Section.displayName = "Section";

// ============================================
// Container - Max-width centered container
// ============================================

const containerVariants = cva("mx-auto w-full px-4 md:px-6 lg:px-8", {
  variants: {
    size: {
      sm: "max-w-2xl",
      md: "max-w-4xl",
      lg: "max-w-6xl",
      xl: "max-w-7xl",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(containerVariants({ size, className }))}
        {...props}
      />
    );
  }
);
Container.displayName = "Container";

// ============================================
// Box - Nested container/card with background
// ============================================

const boxVariants = cva("rounded-xl", {
  variants: {
    variant: {
      // Solid backgrounds
      white: "bg-white text-birne-black",
      sand: "bg-birne-sand text-birne-black",
      dark: "bg-birne-black text-white",
      purple: "bg-birne-purple text-birne-black",
      lemon: "bg-birne-lemon text-birne-black",

      // Subtle/elevated on white
      elevated: "bg-white text-birne-black shadow-md",
      subtle: "bg-birne-black-2 text-birne-black",

      // Glass variants (for colored/dark backgrounds)
      glass: "bg-white/80 backdrop-blur-md text-birne-black border border-white/20",
      glassDark: "bg-white/5 backdrop-blur-md text-white border border-white/10",
      glassPurple: "bg-birne-purple-100/20 backdrop-blur-md text-birne-black border border-birne-purple-100/10",

      // Outline variants
      outline: "bg-transparent border border-border text-inherit",
      outlineLight: "bg-transparent border border-white/20 text-white",
    },
    padding: {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
      xl: "p-10",
    },
  },
  defaultVariants: {
    variant: "white",
    padding: "md",
  },
});

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxVariants> {}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ className, variant, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(boxVariants({ variant, padding, className }))}
        {...props}
      />
    );
  }
);
Box.displayName = "Box";

// ============================================
// Grid - Responsive grid layout
// ============================================

const gridVariants = cva("grid", {
  variants: {
    cols: {
      1: "grid-cols-1",
      2: "grid-cols-1 md:grid-cols-2",
      3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
      auto: "grid-cols-[repeat(auto-fit,minmax(280px,1fr))]",
    },
    gap: {
      none: "gap-0",
      sm: "gap-3",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    },
  },
  defaultVariants: {
    cols: 2,
    gap: "md",
  },
});

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols, gap, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(gridVariants({ cols, gap, className }))}
        {...props}
      />
    );
  }
);
Grid.displayName = "Grid";

// ============================================
// Stack - Vertical/horizontal stack
// ============================================

const stackVariants = cva("flex", {
  variants: {
    direction: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
    gap: {
      none: "gap-0",
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    },
  },
  defaultVariants: {
    direction: "vertical",
    gap: "md",
    align: "stretch",
    justify: "start",
  },
});

export interface StackProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackVariants> {}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, direction, gap, align, justify, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(stackVariants({ direction, gap, align, justify, className }))}
        {...props}
      />
    );
  }
);
Stack.displayName = "Stack";

export {
  Section,
  sectionVariants,
  Container,
  containerVariants,
  Box,
  boxVariants,
  Grid,
  gridVariants,
  Stack,
  stackVariants,
};
