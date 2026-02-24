import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
const ChevronIcon = ({ open }) => (_jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", className: cn("text-text-caption transition-transform duration-200", open && "rotate-180"), children: _jsx("path", { d: "M4 6L8 10L12 6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const Accordion = React.forwardRef(({ className, items, multiple = false, defaultOpen = [], variant = "default", ...props }, ref) => {
    const [openItems, setOpenItems] = React.useState(new Set(defaultOpen));
    const toggle = (id) => {
        setOpenItems((prev) => {
            const next = new Set(multiple ? prev : []);
            if (prev.has(id)) {
                next.delete(id);
            }
            else {
                next.add(id);
            }
            return next;
        });
    };
    return (_jsx("div", { ref: ref, className: cn(variant === "separated" ? "space-y-2" : "divide-y divide-border", className), ...props, children: items.map((item) => {
            const isOpen = openItems.has(item.id);
            return (_jsxs("div", { className: cn(variant === "separated" &&
                    "bg-birne-black-2 rounded-lg overflow-hidden"), children: [_jsxs("button", { type: "button", onClick: () => toggle(item.id), className: cn("flex w-full items-center justify-between py-4 text-left font-display font-normal text-text-heading transition-colors hover:text-birne-black-80", variant === "separated" && "px-5"), "aria-expanded": isOpen, children: [_jsx("span", { className: "text-base", children: item.trigger }), _jsx(ChevronIcon, { open: isOpen })] }), _jsx("div", { className: cn("grid transition-all duration-200", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"), children: _jsx("div", { className: "overflow-hidden", children: _jsx("div", { className: cn("pb-4 font-text text-sm text-text-body", variant === "separated" && "px-5"), children: item.content }) }) })] }, item.id));
        }) }));
});
Accordion.displayName = "Accordion";
export { Accordion };
