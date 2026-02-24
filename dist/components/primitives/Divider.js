import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
const Divider = React.forwardRef(({ className, orientation = "horizontal", label, ...props }, ref) => {
    if (orientation === "vertical") {
        return (_jsx("div", { ref: ref, className: cn("w-px bg-border self-stretch", className), role: "separator", "aria-orientation": "vertical", ...props }));
    }
    if (label) {
        return (_jsxs("div", { ref: ref, className: cn("flex items-center gap-4", className), role: "separator", ...props, children: [_jsx("div", { className: "flex-1 h-px bg-border" }), _jsx("span", { className: "font-text text-sm text-text-caption shrink-0", children: label }), _jsx("div", { className: "flex-1 h-px bg-border" })] }));
    }
    return (_jsx("div", { ref: ref, className: cn("h-px w-full bg-border", className), role: "separator", "aria-orientation": "horizontal", ...props }));
});
Divider.displayName = "Divider";
export { Divider };
