import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
const Popover = React.forwardRef(({ trigger, children, align = "center", side = "bottom", open, onOpenChange, triggerOnHover = false, hoverCloseDelay = 150, }, ref) => {
    const [internalOpen, setInternalOpen] = React.useState(false);
    const isOpen = open ?? internalOpen;
    const popoverRef = React.useRef(null);
    const closeTimeoutRef = React.useRef();
    const handleOpenChange = (newOpen) => {
        setInternalOpen(newOpen);
        onOpenChange?.(newOpen);
    };
    // Click outside to close
    React.useEffect(() => {
        if (triggerOnHover)
            return;
        const handleClickOutside = (event) => {
            if (popoverRef.current &&
                !popoverRef.current.contains(event.target)) {
                handleOpenChange(false);
            }
        };
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [isOpen, triggerOnHover]);
    // Escape to close
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
    const handleMouseEnter = () => {
        if (!triggerOnHover)
            return;
        clearTimeout(closeTimeoutRef.current);
        handleOpenChange(true);
    };
    const handleMouseLeave = () => {
        if (!triggerOnHover)
            return;
        closeTimeoutRef.current = setTimeout(() => {
            handleOpenChange(false);
        }, hoverCloseDelay);
    };
    const sideClasses = {
        top: "bottom-full mb-2",
        bottom: "top-full mt-2",
        left: "right-full mr-2",
        right: "left-full ml-2",
    };
    const alignClasses = {
        start: side === "top" || side === "bottom" ? "left-0" : "top-0",
        center: side === "top" || side === "bottom"
            ? "left-1/2 -translate-x-1/2"
            : "top-1/2 -translate-y-1/2",
        end: side === "top" || side === "bottom" ? "right-0" : "bottom-0",
    };
    return (_jsxs("div", { ref: popoverRef, className: "relative inline-block", onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, children: [_jsx("div", { onClick: () => !triggerOnHover && handleOpenChange(!isOpen), className: "cursor-pointer", children: trigger }), isOpen && (_jsx("div", { ref: ref, className: cn("absolute z-50 min-w-[200px] rounded-lg border border-border bg-surface p-3 shadow-lg", "animate-in fade-in-0 zoom-in-95", sideClasses[side], alignClasses[align]), children: children }))] }));
});
Popover.displayName = "Popover";
export { Popover };
