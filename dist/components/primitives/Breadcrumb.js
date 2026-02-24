import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
const Breadcrumb = React.forwardRef(({ className, items, separator, ...props }, ref) => {
    const sep = separator || (_jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", className: "text-text-caption", children: _jsx("path", { d: "M4.5 3L7.5 6L4.5 9", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }));
    return (_jsx("nav", { ref: ref, "aria-label": "Breadcrumb", className: cn("font-text", className), ...props, children: _jsx("ol", { className: "flex items-center gap-1.5 text-sm", children: items.map((item, i) => (_jsxs(React.Fragment, { children: [i > 0 && _jsx("li", { className: "flex items-center", children: sep }), _jsx("li", { children: item.href ? (_jsx("a", { href: item.href, className: "text-text-caption hover:text-text-heading transition-colors flex items-center", children: item.icon || item.label })) : (_jsx("span", { className: "text-text-heading font-medium flex items-center", children: item.icon || item.label })) })] }, i))) }) }));
});
Breadcrumb.displayName = "Breadcrumb";
export { Breadcrumb };
