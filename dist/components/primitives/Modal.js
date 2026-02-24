import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
// ============================================
// Modal Overlay
// ============================================
const Modal = React.forwardRef(({ className, open = true, onClose, children, ...props }, ref) => {
    if (!open)
        return null;
    return (_jsxs("div", { ref: ref, className: cn("fixed inset-0 z-50 flex items-center justify-center", className), ...props, children: [_jsx("div", { className: "absolute inset-0 bg-birne-black/60", onClick: onClose, "aria-hidden": "true" }), children] }));
});
Modal.displayName = "Modal";
// ============================================
// Modal Content
// ============================================
const modalContentVariants = cva("relative z-10 bg-surface rounded-xl shadow-xl font-text max-h-[85vh] overflow-y-auto", {
    variants: {
        size: {
            sm: "w-full max-w-sm",
            md: "w-full max-w-md",
            lg: "w-full max-w-lg",
            xl: "w-full max-w-xl",
        },
    },
    defaultVariants: {
        size: "md",
    },
});
const ModalContent = React.forwardRef(({ className, size, ...props }, ref) => (_jsx("div", { ref: ref, className: cn(modalContentVariants({ size, className })), ...props })));
ModalContent.displayName = "ModalContent";
// ============================================
// Modal Header
// ============================================
const ModalHeader = React.forwardRef(({ className, onClose, children, ...props }, ref) => (_jsxs("div", { ref: ref, className: cn("flex items-center justify-between gap-4 px-6 pt-6 pb-0", className), ...props, children: [_jsx("div", { children: children }), onClose && (_jsx("button", { onClick: onClose, className: "text-text-caption hover:text-text-heading transition-colors text-lg leading-none", "aria-label": "Close", children: "\u2715" }))] })));
ModalHeader.displayName = "ModalHeader";
// ============================================
// Modal Title
// ============================================
const ModalTitle = React.forwardRef(({ className, ...props }, ref) => (_jsx("h3", { ref: ref, className: cn("font-display text-xl text-text-heading", className), ...props })));
ModalTitle.displayName = "ModalTitle";
// ============================================
// Modal Body
// ============================================
const ModalBody = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("pl-6 pr-10 pt-2 pb-4 text-sm text-text-body", className), ...props })));
ModalBody.displayName = "ModalBody";
// ============================================
// Modal Footer
// ============================================
const ModalFooter = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("flex items-center gap-3 px-6 pb-6 pt-2", className), ...props })));
ModalFooter.displayName = "ModalFooter";
export { Modal, ModalContent, ModalHeader, ModalTitle, ModalBody, ModalFooter, modalContentVariants };
