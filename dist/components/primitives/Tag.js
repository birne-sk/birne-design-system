import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import { X } from "lucide-react";
const tagVariants = cva("inline-flex items-center gap-1.5 font-text font-normal transition-all", {
    variants: {
        variant: {
            default: "bg-birne-black-5 text-text-heading border border-transparent",
            outline: "bg-transparent text-text-heading border border-border",
            purple: "bg-birne-purple-20 text-birne-black border border-transparent",
            lemon: "bg-birne-lemon-20 text-birne-black border border-transparent",
            sand: "bg-birne-sand-60 text-birne-black border border-transparent",
            // Selectable variants for light backgrounds
            selectableLight: "bg-transparent text-birne-black border border-birne-black-20",
            selectableLightActive: "bg-birne-black text-white border border-birne-black",
            // Selectable variants for dark backgrounds
            selectableDark: "bg-transparent text-white border border-white/20",
            selectableDarkActive: "bg-birne-purple text-birne-black border border-birne-purple",
        },
        size: {
            sm: "h-6 px-2.5 text-xs rounded-full",
            md: "h-8 px-3.5 text-sm rounded-full",
            lg: "h-9 px-4 text-sm rounded-full",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "md",
    },
});
const SelectableTag = React.forwardRef(({ className, children, active = false, background = "light", size = "md", onClick, dismissible = true, ...props }, ref) => {
    const variant = active
        ? background === "dark"
            ? "selectableDarkActive"
            : "selectableLightActive"
        : background === "dark"
            ? "selectableDark"
            : "selectableLight";
    const iconSize = size === "sm" ? 12 : size === "md" ? 14 : 16;
    return (_jsxs("button", { ref: ref, type: "button", onClick: onClick, className: cn(tagVariants({ variant, size }), "cursor-pointer hover:opacity-80", className), ...props, children: [_jsx("span", { children: children }), active && dismissible && (_jsx(X, { size: iconSize, className: "shrink-0 -mr-0.5" }))] }));
});
SelectableTag.displayName = "SelectableTag";
const Tag = React.forwardRef(({ className, variant, size, removable, onRemove, icon, clickable, children, onClick, ...props }, ref) => {
    const handleRemove = (e) => {
        e.stopPropagation();
        onRemove?.();
    };
    return (_jsxs("span", { ref: ref, className: cn(tagVariants({ variant, size, className }), clickable && "cursor-pointer hover:opacity-80", onClick && "cursor-pointer hover:opacity-80"), onClick: onClick, ...props, children: [icon && _jsx("span", { className: "shrink-0", children: icon }), _jsx("span", { children: children }), removable && (_jsx("button", { type: "button", onClick: handleRemove, className: "shrink-0 rounded hover:bg-birne-black-10 p-0.5 -mr-0.5 transition-colors", children: _jsx(X, { size: size === "sm" ? 12 : 14 }) }))] }));
});
Tag.displayName = "Tag";
const TagInput = React.forwardRef(({ className, value, onChange, tagVariant = "default", maxTags, placeholder = "Add tag...", disabled, ...props }, ref) => {
    const [inputValue, setInputValue] = React.useState("");
    const inputRef = React.useRef(null);
    const handleKeyDown = (e) => {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            const newTag = inputValue.trim();
            if (newTag && !value.includes(newTag)) {
                if (!maxTags || value.length < maxTags) {
                    onChange([...value, newTag]);
                }
            }
            setInputValue("");
        }
        else if (e.key === "Backspace" && !inputValue && value.length > 0) {
            onChange(value.slice(0, -1));
        }
    };
    const removeTag = (tagToRemove) => {
        onChange(value.filter((tag) => tag !== tagToRemove));
    };
    return (_jsxs("div", { className: cn("flex flex-wrap gap-1.5 p-2 border border-birne-black-20 rounded-md bg-surface min-h-[42px] cursor-text", "focus-within:border-[1.5px] focus-within:border-birne-black", disabled && "opacity-50 cursor-not-allowed", className), onClick: () => inputRef.current?.focus(), children: [value.map((tag) => (_jsx(Tag, { variant: tagVariant, size: "sm", removable: !disabled, onRemove: () => removeTag(tag), children: tag }, tag))), _jsx("input", { ref: inputRef, type: "text", value: inputValue, onChange: (e) => setInputValue(e.target.value), onKeyDown: handleKeyDown, placeholder: value.length === 0 ? placeholder : "", disabled: disabled || (maxTags !== undefined && value.length >= maxTags), className: "flex-1 min-w-[80px] bg-transparent outline-none font-text text-sm placeholder:text-text-caption", ...props })] }));
});
TagInput.displayName = "TagInput";
export { Tag, TagInput, SelectableTag, tagVariants };
