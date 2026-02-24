import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
import { Check } from "lucide-react";
const Dropdown = React.forwardRef(({ trigger, children, align = "start", open, onOpenChange, disabled }, ref) => {
    const [internalOpen, setInternalOpen] = React.useState(false);
    const isOpen = open ?? internalOpen;
    const dropdownRef = React.useRef(null);
    const handleOpenChange = (newOpen) => {
        setInternalOpen(newOpen);
        onOpenChange?.(newOpen);
    };
    // Close on click outside
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target)) {
                handleOpenChange(false);
            }
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [isOpen]);
    // Close on Escape
    React.useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                handleOpenChange(false);
            }
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            return () => document.removeEventListener("keydown", handleEscape);
        }
    }, [isOpen]);
    const alignClasses = {
        start: "left-0",
        center: "left-1/2 -translate-x-1/2",
        end: "right-0",
    };
    return (_jsxs("div", { ref: dropdownRef, className: "relative inline-block", children: [_jsx("div", { onClick: () => !disabled && handleOpenChange(!isOpen), className: cn(disabled && "opacity-50 cursor-not-allowed"), children: trigger }), isOpen && (_jsx("div", { ref: ref, className: cn("absolute z-50 mt-1 min-w-[180px] rounded-lg border border-border bg-surface p-1 shadow-lg", "animate-in fade-in-0 zoom-in-95", alignClasses[align]), children: children }))] }));
});
Dropdown.displayName = "Dropdown";
const DropdownItem = React.forwardRef(({ className, icon, suffix, destructive, selected, children, disabled, ...props }, ref) => {
    return (_jsxs("button", { ref: ref, className: cn("flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm font-text text-left transition-colors", "hover:bg-birne-black-5 focus:bg-birne-black-5 focus:outline-none", destructive && "text-red-600 hover:bg-red-50 focus:bg-red-50", disabled && "opacity-50 cursor-not-allowed hover:bg-transparent", className), disabled: disabled, ...props, children: [selected !== undefined && (_jsx("span", { className: "w-4 shrink-0", children: selected && _jsx(Check, { size: 16 }) })), icon && _jsx("span", { className: "shrink-0 w-4", children: icon }), _jsx("span", { className: "flex-1", children: children }), suffix && (_jsx("span", { className: "shrink-0 text-text-caption text-xs", children: suffix }))] }));
});
DropdownItem.displayName = "DropdownItem";
// ============================================
// Dropdown Separator
// ============================================
const DropdownSeparator = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("my-1 h-px bg-border", className), ...props })));
DropdownSeparator.displayName = "DropdownSeparator";
// ============================================
// Dropdown Label
// ============================================
const DropdownLabel = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("px-2 py-1.5 text-xs font-medium text-text-caption", className), ...props })));
DropdownLabel.displayName = "DropdownLabel";
export { Dropdown, DropdownItem, DropdownSeparator, DropdownLabel };
