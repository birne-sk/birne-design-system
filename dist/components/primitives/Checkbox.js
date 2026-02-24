import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
const CheckIcon = ({ size = "md" }) => {
    if (size === "sm") {
        return (_jsx("svg", { width: "10", height: "10", viewBox: "0 0 12 12", fill: "none", children: _jsx("path", { d: "M2.5 6L5 8.5L9.5 3.5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
    }
    return (_jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: _jsx("path", { d: "M2.5 6L5 8.5L9.5 3.5", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round" }) }));
};
const Checkbox = React.forwardRef(({ className, label, description, error, size = "md", id, disabled, checked, defaultChecked, onChange, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked || false);
    const isChecked = checked ?? internalChecked;
    const handleChange = (e) => {
        setInternalChecked(e.target.checked);
        onChange?.(e);
    };
    return (_jsxs("div", { className: cn("flex", size === "sm" ? "gap-2" : "gap-2.5", description ? "items-start" : "items-center", disabled && "opacity-50 cursor-not-allowed", className), children: [_jsxs("label", { htmlFor: inputId, className: cn("relative flex shrink-0 items-center justify-center rounded border border-birne-black transition-all cursor-pointer", size === "sm" ? "h-4 w-4" : "h-5 w-5", description && "mt-0.5", isChecked
                    ? "bg-birne-lemon"
                    : error
                        ? "border-red-500 bg-transparent"
                        : "bg-transparent", disabled && "cursor-not-allowed"), children: [isChecked && _jsx(CheckIcon, { size: size }), _jsx("input", { ref: ref, type: "checkbox", id: inputId, checked: isChecked, onChange: handleChange, disabled: disabled, className: "absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed", ...props })] }), (label || description) && (_jsxs("div", { children: [label && (_jsx("label", { htmlFor: inputId, className: cn("font-text text-text-heading cursor-pointer", size === "sm" ? "text-xs" : "text-sm", disabled && "cursor-not-allowed"), children: label })), description && (_jsx("p", { className: "font-text text-xs text-text-caption mt-0.5", children: description }))] }))] }));
});
Checkbox.displayName = "Checkbox";
const RadioGroup = React.forwardRef(({ className, name, options, value, defaultValue, onChange, direction = "vertical", ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || "");
    const currentValue = value ?? internalValue;
    const handleChange = (v) => {
        setInternalValue(v);
        onChange?.(v);
    };
    return (_jsx("div", { ref: ref, role: "radiogroup", className: cn("flex", direction === "vertical" ? "flex-col gap-2" : "flex-row gap-4", className), ...props, children: options.map((opt) => (_jsxs("label", { className: cn("flex gap-2.5 cursor-pointer", opt.description ? "items-start" : "items-center", opt.disabled && "cursor-not-allowed opacity-50"), onClick: () => !opt.disabled && handleChange(opt.value), children: [_jsxs("span", { className: cn("relative flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-all bg-transparent", opt.description && "mt-0.5", currentValue === opt.value
                        ? "border-birne-black bg-birne-lemon"
                        : "border-birne-black hover:border-birne-black"), children: [currentValue === opt.value && (_jsx("span", { className: "h-2 w-2 rounded-full bg-birne-black" })), _jsx("input", { type: "radio", name: name, value: opt.value, checked: currentValue === opt.value, onChange: () => handleChange(opt.value), disabled: opt.disabled, className: "absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed" })] }), _jsxs("div", { children: [_jsx("span", { className: "font-text text-sm text-text-heading block", children: opt.label }), opt.description && (_jsx("p", { className: "font-text text-xs text-text-caption -mt-0.5", children: opt.description }))] })] }, opt.value))) }));
});
RadioGroup.displayName = "RadioGroup";
const Switch = React.forwardRef(({ className, label, size = "md", disabled, checked, defaultChecked, onChange, id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked || false);
    const isChecked = checked ?? internalChecked;
    const handleChange = (e) => {
        setInternalChecked(e.target.checked);
        onChange?.(e);
    };
    const trackSize = size === "lg" ? "h-8 w-14" : "h-6 w-10";
    const knobSize = size === "lg" ? "h-6 w-6" : "h-4 w-4";
    const knobTranslate = size === "lg"
        ? (isChecked ? "translate-x-7" : "translate-x-1")
        : (isChecked ? "translate-x-5" : "translate-x-1");
    return (_jsxs("div", { className: cn("flex items-center gap-2.5", disabled && "opacity-50 cursor-not-allowed", className), children: [_jsxs("label", { htmlFor: inputId, className: cn("relative inline-flex items-center rounded-full border border-birne-black transition-colors cursor-pointer", trackSize, isChecked ? "bg-birne-lemon" : "bg-transparent", disabled && "cursor-not-allowed"), children: [_jsx("span", { className: cn("rounded-full bg-birne-black transition-transform duration-200", knobSize, knobTranslate) }), _jsx("input", { ref: ref, type: "checkbox", role: "switch", id: inputId, checked: isChecked, onChange: handleChange, disabled: disabled, className: "absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed", ...props })] }), label && (_jsx("label", { htmlFor: inputId, className: cn("font-text text-sm text-text-heading cursor-pointer", disabled && "cursor-not-allowed"), children: label }))] }));
});
Switch.displayName = "Switch";
export { Checkbox, RadioGroup, Switch };
