import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
import { Sparkles } from "lucide-react";
import { AiIcon } from "./AiIcon";
// ============================================
// Gradient helpers
// ============================================
const AI_GRADIENT = "linear-gradient(135deg, #4338CA 0%, #A78BFA 50%, #22D3EE 100%)";
const AI_GRADIENT_ANIMATED = "linear-gradient(135deg, #4338CA 0%, #A78BFA 25%, #22D3EE 50%, #A78BFA 75%, #4338CA 100%)";
function gradientBg(animated) {
    if (!animated)
        return { background: AI_GRADIENT };
    return {
        background: AI_GRADIENT_ANIMATED,
        backgroundSize: "300% 300%",
        animation: "ai-gradient-shift 3s ease-in-out infinite",
    };
}
const sizeClasses = {
    sm: "px-2.5 py-0.5 text-[10px] gap-1",
    md: "px-3 py-1 text-xs gap-1.5",
    lg: "px-4 py-1.5 text-sm gap-1.5",
};
const iconSizes = { sm: 10, md: 12, lg: 14 };
const aiIconSizes = { sm: "xs", md: "sm", lg: "sm" };
const AiBadge = React.forwardRef(({ variant = "solid", size = "md", children, icon, showIcon = true, animated = true, className, style, ...props }, ref) => {
    const hasCustomIcon = icon !== undefined;
    // Solid uses white Lucide icon, glow/stroke use AiIcon with SVG gradient
    const defaultIcon = variant === "solid"
        ? _jsx(Sparkles, { size: iconSizes[size] })
        : _jsx(AiIcon, { size: aiIconSizes[size], animated: animated });
    const leftIcon = hasCustomIcon ? icon : showIcon ? defaultIcon : null;
    // ---- Variant: solid ----
    // Gradient background, white text + icon
    if (variant === "solid") {
        return (_jsxs("div", { ref: ref, className: cn("inline-flex items-center font-text font-medium whitespace-nowrap rounded-full text-white", sizeClasses[size], className), style: { ...gradientBg(animated), ...style }, ...props, children: [leftIcon && _jsx("span", { className: "shrink-0", children: leftIcon }), children || "AI"] }));
    }
    // ---- Variant: glow ----
    // White background, gradient text + icon, glow shadow
    if (variant === "glow") {
        return (_jsxs("div", { ref: ref, className: cn("inline-flex items-center font-text font-medium whitespace-nowrap rounded-full bg-white", sizeClasses[size], className), style: {
                boxShadow: "0 0 16px rgba(167, 139, 250, 0.4)",
                ...style,
            }, ...props, children: [leftIcon && _jsx("span", { className: "shrink-0", children: leftIcon }), _jsx("span", { style: {
                        ...gradientBg(animated),
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }, children: children || "AI" })] }));
    }
    // ---- Variant: stroke ----
    // Gradient text + icon, gradient border
    const borderWidth = size === "sm" ? 1 : 1.5;
    return (_jsx("div", { ref: ref, className: cn("relative inline-flex rounded-full", className), style: {
            padding: `${borderWidth}px`,
            ...gradientBg(animated),
            ...style,
        }, ...props, children: _jsxs("div", { className: cn("inline-flex items-center font-text font-medium whitespace-nowrap rounded-full bg-white", sizeClasses[size]), children: [leftIcon && _jsx("span", { className: "shrink-0", children: leftIcon }), _jsx("span", { style: {
                        ...gradientBg(animated),
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }, children: children || "AI" })] }) }));
});
AiBadge.displayName = "AiBadge";
export { AiBadge };
