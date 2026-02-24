import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
import { BirneLogoSvg } from "./Header";
const Footer = React.forwardRef(({ className, logo, columns, bottomContent, socialLinks, variant = "default", ...props }, ref) => {
    const variantStyles = {
        default: "bg-birne-sand-20 text-birne-black",
        dark: "bg-birne-black text-white",
        sand: "bg-birne-sand text-birne-black",
    };
    return (_jsx("footer", { ref: ref, className: cn("w-full py-12", variantStyles[variant], className), ...props, children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8 mb-8", children: [_jsxs("div", { className: "md:col-span-1", children: [logo || (_jsx("div", { className: "text-birne-black mb-4", children: _jsx(BirneLogoSvg, {}) })), _jsx("p", { className: "text-sm text-text-body max-w-xs", children: "Strategick\u00FD marketing pre zna\u010Dky, ktor\u00E9 to myslia v\u00E1\u017Ene." })] }), columns?.map((column, index) => (_jsxs("div", { children: [_jsx("h4", { className: "font-display text-md font-normal mb-4", children: column.title }), _jsx("ul", { className: "space-y-2", children: column.links.map((link, linkIndex) => (_jsx("li", { children: _jsx("a", { href: link.href, className: "text-sm text-text-body hover:text-birne-purple transition-colors", children: link.label }) }, linkIndex))) })] }, index)))] }), _jsx("div", { className: "border-t border-border pt-8", children: _jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center gap-4", children: [_jsx("div", { className: "text-sm text-text-caption", children: bottomContent || (_jsxs(_Fragment, { children: ["\u00A9 ", new Date().getFullYear(), " Birne Studio s.r.o. V\u0161etky pr\u00E1va vyhraden\u00E9."] })) }), socialLinks && (_jsx("div", { className: "flex items-center gap-4", children: socialLinks }))] }) })] }) }));
});
Footer.displayName = "Footer";
export { Footer };
