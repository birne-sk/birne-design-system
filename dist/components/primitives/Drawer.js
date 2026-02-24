import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
import { X } from "lucide-react";
const sizeClasses = {
    left: { sm: "w-64", md: "w-80", lg: "w-96", full: "w-full" },
    right: { sm: "w-64", md: "w-80", lg: "w-96", full: "w-full" },
    top: { sm: "h-32", md: "h-48", lg: "h-64", full: "h-full" },
    bottom: { sm: "h-32", md: "h-48", lg: "h-64", full: "h-full" },
};
const positionClasses = {
    left: "inset-y-0 left-0",
    right: "inset-y-0 right-0",
    top: "inset-x-0 top-0",
    bottom: "inset-x-0 bottom-0",
};
const translateClasses = {
    left: { open: "translate-x-0", closed: "-translate-x-full" },
    right: { open: "translate-x-0", closed: "translate-x-full" },
    top: { open: "translate-y-0", closed: "-translate-y-full" },
    bottom: { open: "translate-y-0", closed: "translate-y-full" },
};
const Drawer = React.forwardRef(({ className, open, onClose, side = "right", title, description, showCloseButton = true, closeOnOverlayClick = true, closeOnEscape = true, size = "md", children, ...props }, ref) => {
    // Close on Escape
    React.useEffect(() => {
        if (!closeOnEscape)
            return;
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        if (open) {
            document.addEventListener("keydown", handleEscape);
            return () => document.removeEventListener("keydown", handleEscape);
        }
    }, [open, closeOnEscape, onClose]);
    // Prevent body scroll when open
    React.useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
            return () => {
                document.body.style.overflow = "";
            };
        }
    }, [open]);
    if (!open)
        return null;
    return (_jsxs("div", { className: "fixed inset-0 z-50", children: [_jsx("div", { className: "absolute inset-0 bg-black/50 transition-opacity", onClick: closeOnOverlayClick ? onClose : undefined }), _jsxs("div", { ref: ref, className: cn("fixed bg-surface shadow-xl transition-transform duration-300 ease-apple flex flex-col", positionClasses[side], sizeClasses[side][size], open ? translateClasses[side].open : translateClasses[side].closed, className), ...props, children: [(title || showCloseButton) && (_jsxs("div", { className: "flex items-start justify-between p-4 border-b border-border", children: [_jsxs("div", { children: [title && (_jsx("h2", { className: "font-display text-lg text-text-heading", children: title })), description && (_jsx("p", { className: "font-text text-sm text-text-caption mt-1", children: description }))] }), showCloseButton && (_jsx("button", { onClick: onClose, className: "p-1 rounded-md hover:bg-birne-black-5 transition-colors", children: _jsx(X, { size: 20, className: "text-text-caption" }) }))] })), _jsx("div", { className: "flex-1 overflow-auto p-4", children: children })] })] }));
});
Drawer.displayName = "Drawer";
export { Drawer };
