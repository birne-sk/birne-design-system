import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
const badgeVariants = cva("inline-flex items-center gap-1.5 font-text font-medium transition-colors", {
    variants: {
        variant: {
            // Solid variants
            default: "bg-birne-black-5 text-birne-black",
            purple: "bg-birne-purple-40 text-birne-black",
            lemon: "bg-birne-lemon text-birne-black",
            dark: "bg-birne-black text-white",
            // On colored backgrounds (same color, lighter)
            onDark: "bg-white/15 text-white",
            onPurple: "bg-birne-purple-40 text-birne-black",
            onGray: "bg-white text-birne-black",
            // Glass variants (for use on images/colored backgrounds)
            glass: "bg-white/80 backdrop-blur-md text-birne-black border border-white/20",
            glassDark: "bg-black/20 backdrop-blur-md text-white border border-white/10",
            glassPurple: "bg-birne-purple-100/30 backdrop-blur-md text-birne-black border border-birne-purple-100/20",
            glassLemon: "bg-birne-lemon/30 backdrop-blur-md text-birne-black border border-birne-lemon/20",
            // Status variants
            success: "bg-green-100 text-green-800",
            warning: "bg-amber-100 text-amber-800",
            destructive: "bg-red-100 text-red-800",
            info: "bg-blue-100 text-blue-800",
        },
        size: {
            sm: "px-2 py-0.5 text-[10px] rounded-full",
            md: "px-3 py-1 text-xs rounded-full",
            lg: "px-4 py-1.5 text-sm rounded-full",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "md",
    },
});
const Badge = React.forwardRef(({ className, variant, size, icon, iconRight, children, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn(badgeVariants({ variant, size, className })), ...props, children: [icon && _jsx("span", { className: "shrink-0 -ml-0.5", children: icon }), children, iconRight && _jsx("span", { className: "shrink-0 -mr-0.5", children: iconRight })] }));
});
Badge.displayName = "Badge";
export { Badge, badgeVariants };
