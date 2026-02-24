import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
const Skeleton = React.forwardRef(({ className, variant = "rectangular", width, height, disableAnimation = false, style, ...props }, ref) => {
    const variantClasses = {
        text: "rounded h-4 w-full",
        circular: "rounded-full",
        rectangular: "rounded-md",
    };
    return (_jsx("div", { ref: ref, className: cn("bg-birne-black-10", !disableAnimation && "animate-pulse", variantClasses[variant], className), style: {
            width: typeof width === "number" ? `${width}px` : width,
            height: typeof height === "number" ? `${height}px` : height,
            ...style,
        }, ...props }));
});
Skeleton.displayName = "Skeleton";
// ============================================
// Skeleton presets
// ============================================
const SkeletonText = React.forwardRef(({ lines = 3, className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("space-y-2", className), children: Array.from({ length: lines }).map((_, i) => (_jsx(Skeleton, { variant: "text", width: i === lines - 1 ? "60%" : "100%", ...props }, i))) })));
SkeletonText.displayName = "SkeletonText";
const SkeletonAvatar = React.forwardRef(({ size = "md", className, ...props }, ref) => {
    const sizes = { sm: 32, md: 40, lg: 48 };
    return (_jsx(Skeleton, { ref: ref, variant: "circular", width: sizes[size], height: sizes[size], className: className, ...props }));
});
SkeletonAvatar.displayName = "SkeletonAvatar";
const SkeletonCard = React.forwardRef(({ className, ...props }, ref) => (_jsxs("div", { ref: ref, className: cn("p-4 space-y-4", className), ...props, children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(SkeletonAvatar, {}), _jsxs("div", { className: "flex-1 space-y-2", children: [_jsx(Skeleton, { variant: "text", width: "40%" }), _jsx(Skeleton, { variant: "text", width: "60%", height: 12 })] })] }), _jsx(SkeletonText, { lines: 3 })] })));
SkeletonCard.displayName = "SkeletonCard";
export { Skeleton, SkeletonText, SkeletonAvatar, SkeletonCard };
