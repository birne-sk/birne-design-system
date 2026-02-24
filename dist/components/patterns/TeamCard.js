import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
const TeamCard = React.forwardRef(({ className, member, variant = "default", showContact = true, ...props }, ref) => {
    if (variant === "horizontal") {
        return (_jsxs("div", { ref: ref, className: cn("bg-surface rounded-lg p-4 flex items-center gap-4 shadow-sm", className), ...props, children: [_jsx("img", { src: member.photo, alt: member.name, className: "w-16 h-16 rounded-full object-cover" }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("h4", { className: "font-display text-md font-normal text-text-heading truncate", children: member.name }), _jsx("p", { className: "font-text text-sm text-text-caption truncate", children: member.position }), showContact && member.email && (_jsx("a", { href: `mailto:${member.email}`, className: "font-text text-sm text-birne-purple hover:underline truncate block", children: member.email }))] })] }));
    }
    if (variant === "compact") {
        return (_jsxs("div", { ref: ref, className: cn("text-center", className), ...props, children: [_jsx("img", { src: member.photo, alt: member.name, className: "w-20 h-20 rounded-full object-cover mx-auto mb-3" }), _jsx("h4", { className: "font-display text-base font-normal text-text-heading", children: member.name }), _jsx("p", { className: "font-text text-sm text-text-caption", children: member.position })] }));
    }
    // Default variant
    return (_jsxs("div", { ref: ref, className: cn("bg-surface rounded-lg overflow-hidden shadow-sm", className), ...props, children: [_jsx("div", { className: "aspect-[4/5] relative", children: _jsx("img", { src: member.photo, alt: member.name, className: "w-full h-full object-cover" }) }), _jsxs("div", { className: "p-5", children: [_jsx("h4", { className: "font-display text-lg font-normal text-text-heading", children: member.name }), _jsx("p", { className: "font-mono text-xs uppercase tracking-wider text-text-caption mt-1", children: member.position }), showContact && (_jsxs("div", { className: "mt-4 space-y-1", children: [member.email && (_jsx("a", { href: `mailto:${member.email}`, className: "font-text text-sm text-birne-purple hover:underline block", children: member.email })), member.phone && (_jsx("a", { href: `tel:${member.phone}`, className: "font-text text-sm text-text-body hover:text-birne-purple block", children: member.phone }))] }))] })] }));
});
TeamCard.displayName = "TeamCard";
export { TeamCard };
