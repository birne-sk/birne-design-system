import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
const statCardVariants = cva("rounded-lg border border-border bg-surface p-4 transition-all", {
    variants: {
        variant: {
            default: "bg-surface",
            muted: "bg-birne-black-2 border-transparent",
            purple: "bg-birne-purple-20 border-transparent",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});
const StatCard = React.forwardRef(({ className, variant, label, value, description, trend, icon, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn(statCardVariants({ variant, className })), ...props, children: [_jsxs("div", { className: "flex items-start justify-between", children: [_jsx("span", { className: "font-mono text-[11px] uppercase tracking-wider text-text-caption", children: label }), icon && _jsx("span", { className: "text-text-caption", children: icon })] }), _jsx("div", { className: "mt-2", children: _jsx("span", { className: "font-display text-2xl text-text-heading", children: value }) }), (description || trend) && (_jsxs("div", { className: "mt-1.5 flex items-center gap-2", children: [trend && (_jsxs("span", { className: cn("font-text text-xs font-medium", trend.value > 0 && "text-green-600", trend.value < 0 && "text-red-600", trend.value === 0 && "text-text-caption"), children: [trend.value > 0 ? "↑" : trend.value < 0 ? "↓" : "→", " ", Math.abs(trend.value), "%", trend.label ? ` ${trend.label}` : ""] })), description && (_jsx("span", { className: "font-text text-xs text-text-caption", children: description }))] }))] }));
});
StatCard.displayName = "StatCard";
export { StatCard, statCardVariants };
