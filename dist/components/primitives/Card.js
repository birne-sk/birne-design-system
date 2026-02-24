import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
const cardVariants = cva("bg-birne-black-2 rounded-lg border-transparent transition-all", {
    variants: {
        variant: {
            default: "",
            dark: "bg-birne-black text-white",
            purple: "bg-birne-purple-40",
            outline: "bg-transparent border border-border",
            ghost: "bg-transparent",
        },
        padding: {
            none: "p-0",
            sm: "p-4",
            md: "p-6",
            lg: "p-8",
        },
    },
    defaultVariants: {
        variant: "default",
        padding: "md",
    },
});
const Card = React.forwardRef(({ className, variant, padding, ...props }, ref) => (_jsx("div", { ref: ref, className: cn(cardVariants({ variant, padding, className })), ...props })));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("flex flex-col space-y-1.5", className), ...props })));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (_jsx("h3", { ref: ref, className: cn("font-display text-xl font-normal leading-none tracking-tight text-text-heading", className), ...props })));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (_jsx("p", { ref: ref, className: cn("text-sm text-text-body", className), ...props })));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("pt-0", className), ...props })));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("flex items-center pt-4", className), ...props })));
CardFooter.displayName = "CardFooter";
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants, };
