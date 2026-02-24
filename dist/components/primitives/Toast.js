import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react";
const toastVariants = cva("pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-lg border p-4 shadow-lg transition-all font-text", {
    variants: {
        variant: {
            default: "bg-surface border-border text-text-heading",
            success: "bg-green-50 border-green-200 text-green-800",
            error: "bg-red-50 border-red-200 text-red-800",
            warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
            info: "bg-blue-50 border-blue-200 text-blue-800",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
const iconMap = {
    default: Info,
    success: CheckCircle,
    error: AlertCircle,
    warning: AlertTriangle,
    info: Info,
};
const iconColorMap = {
    default: "text-text-caption",
    success: "text-green-600",
    error: "text-red-600",
    warning: "text-yellow-600",
    info: "text-blue-600",
};
const Toast = React.forwardRef(({ className, variant = "default", title, description, closable = true, onClose, icon, action, children, ...props }, ref) => {
    const Icon = iconMap[variant || "default"];
    return (_jsxs("div", { ref: ref, className: cn(toastVariants({ variant, className })), role: "alert", ...props, children: [_jsx("div", { className: cn("shrink-0 mt-0.5", iconColorMap[variant || "default"]), children: icon || _jsx(Icon, { size: 20 }) }), _jsxs("div", { className: "flex-1 min-w-0", children: [title && (_jsx("p", { className: "text-sm font-medium leading-tight", children: title })), description && (_jsx("p", { className: cn("text-sm opacity-80", title && "mt-1"), children: description })), children, action && _jsx("div", { className: "mt-3", children: action })] }), closable && (_jsx("button", { onClick: onClose, className: "shrink-0 rounded-md p-1 opacity-50 hover:opacity-100 transition-opacity", children: _jsx(X, { size: 16 }) }))] }));
});
Toast.displayName = "Toast";
const positionClasses = {
    "top-left": "top-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-4 right-4",
};
const ToastContainer = React.forwardRef(({ className, position = "bottom-right", children, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("fixed z-50 flex flex-col gap-2 pointer-events-none", positionClasses[position], className), ...props, children: children }));
});
ToastContainer.displayName = "ToastContainer";
export { Toast, ToastContainer, toastVariants };
