import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
const selectVariants = cva("flex w-full font-text bg-surface text-text-heading border border-birne-black-20 transition-all duration-base ease-apple appearance-none bg-no-repeat bg-right pr-8 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-[1.5px] focus-visible:border-birne-black disabled:cursor-not-allowed disabled:opacity-50", {
    variants: {
        size: {
            sm: "h-8 px-2 py-1.5 text-sm rounded-xs",
            md: "h-10 px-3 py-2 text-base rounded-sm",
            lg: "h-12 px-4 py-3 text-md rounded-md",
        },
    },
    defaultVariants: {
        size: "md",
    },
});
const Select = React.forwardRef(({ className, size, options, placeholder, error, ...props }, ref) => {
    return (_jsxs("div", { className: "relative", children: [_jsxs("select", { ref: ref, className: cn(selectVariants({ size, className }), error && "border-red-500 text-red-600 focus-visible:border-red-500"), ...props, children: [placeholder && (_jsx("option", { value: "", disabled: true, children: placeholder })), options.map((opt) => (_jsx("option", { value: opt.value, disabled: opt.disabled, children: opt.label }, opt.value)))] }), _jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-text-caption", children: _jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: _jsx("path", { d: "M3 4.5L6 7.5L9 4.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })] }));
});
Select.displayName = "Select";
export { Select, selectVariants };
