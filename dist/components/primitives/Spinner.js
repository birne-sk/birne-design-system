import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
const spinnerVariants = cva("animate-spin", {
    variants: {
        size: {
            xs: "h-3 w-3",
            sm: "h-4 w-4",
            md: "h-6 w-6",
            lg: "h-8 w-8",
            xl: "h-12 w-12",
        },
        color: {
            default: "text-birne-black",
            muted: "text-text-caption",
            purple: "text-birne-purple",
            white: "text-white",
        },
    },
    defaultVariants: {
        size: "md",
        color: "default",
    },
});
const Spinner = React.forwardRef(({ className, size, color, label = "Loading...", ...props }, ref) => {
    return (_jsxs("svg", { ref: ref, className: cn(spinnerVariants({ size, color, className })), xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", role: "status", "aria-label": label, ...props, children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "3" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }));
});
Spinner.displayName = "Spinner";
export { Spinner, spinnerVariants };
