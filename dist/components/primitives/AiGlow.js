import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
// ============================================
// AiGlow - Wrapper that adds AI glow effect
// ============================================
const glowValues = {
    sm: "0 0 8px rgba(167, 139, 250, 0.3)",
    md: "0 0 16px rgba(167, 139, 250, 0.4)",
    lg: "0 0 24px rgba(167, 139, 250, 0.5)",
};
const AiGlow = React.forwardRef(({ intensity = "md", animated = false, className, children, style, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("inline-flex", className), style: {
            boxShadow: glowValues[intensity],
            borderRadius: "inherit",
            animation: animated ? "ai-glow-pulse 2s ease-in-out infinite" : undefined,
            ...style,
        }, ...props, children: children }));
});
AiGlow.displayName = "AiGlow";
export { AiGlow };
