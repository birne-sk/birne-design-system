import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
const EmptyState = React.forwardRef(({ className, icon, title, description, action, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn("flex flex-col items-center justify-center py-12 px-6 text-center", className), ...props, children: [icon && (_jsx("div", { className: "mb-4 text-text-caption text-3xl", children: icon })), _jsx("h3", { className: "font-display text-lg text-text-heading mb-1", children: title }), description && (_jsx("p", { className: "font-text text-sm text-text-caption max-w-sm", children: description })), action && _jsx("div", { className: "mt-4", children: action })] }));
});
EmptyState.displayName = "EmptyState";
export { EmptyState };
