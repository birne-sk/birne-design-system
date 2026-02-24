import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Calendar } from "lucide-react";
// ============================================
// Capacity Indicator
// ============================================
const capacityVariants = cva("inline-flex items-center justify-center font-text text-xs font-medium px-2 py-0.5 rounded-full", {
    variants: {
        status: {
            available: "bg-emerald-100 text-emerald-700",
            limited: "bg-amber-100 text-amber-700",
            almostFull: "bg-red-100 text-red-700",
            full: "bg-birne-black-10 text-text-caption",
        },
    },
    defaultVariants: {
        status: "available",
    },
});
const getCapacityStatus = (spots) => {
    if (spots <= 0)
        return "full";
    if (spots <= 3)
        return "almostFull";
    if (spots <= 7)
        return "limited";
    return "available";
};
const getCapacityLabel = (spots) => {
    if (spots <= 0)
        return "Obsadené";
    if (spots === 1)
        return "1 miesto";
    if (spots >= 2 && spots <= 4)
        return `${spots} miesta`;
    return `${spots} miest`;
};
const CapacityIndicator = React.forwardRef(({ className, spots, label, status, ...props }, ref) => {
    const autoStatus = status ?? getCapacityStatus(spots);
    const displayLabel = label ?? getCapacityLabel(spots);
    return (_jsx("span", { ref: ref, className: cn(capacityVariants({ status: autoStatus }), className), ...props, children: displayLabel }));
});
CapacityIndicator.displayName = "CapacityIndicator";
const DateCapacityBadge = React.forwardRef(({ className, date, spots, size = "md", onClick, selected, ...props }, ref) => {
    const sizeClasses = {
        sm: "h-8 px-3 gap-2 text-xs",
        md: "h-10 px-4 gap-2.5 text-sm",
        lg: "h-12 px-5 gap-3 text-base",
    };
    const iconSizes = {
        sm: 14,
        md: 16,
        lg: 18,
    };
    return (_jsxs("div", { ref: ref, className: cn("inline-flex items-center font-text rounded-full border transition-all", sizeClasses[size], selected
            ? "bg-birne-black text-white border-birne-black"
            : "bg-white text-birne-black border-birne-black-20", onClick && "cursor-pointer hover:border-birne-black-40", className), onClick: onClick, ...props, children: [_jsx(Calendar, { size: iconSizes[size], className: selected ? "text-white" : "text-text-caption" }), _jsx("span", { className: "font-medium", children: date }), _jsx(CapacityIndicator, { spots: spots })] }));
});
DateCapacityBadge.displayName = "DateCapacityBadge";
const getInitials = (name) => {
    return name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
};
const InstructorBadge = React.forwardRef(({ className, name, avatarUrl, initials, size = "md", onClick, selected, ...props }, ref) => {
    const displayInitials = initials ?? getInitials(name);
    const sizeClasses = {
        sm: "h-8 pl-1 pr-3 gap-2 text-xs",
        md: "h-10 pl-1.5 pr-4 gap-2.5 text-sm",
        lg: "h-12 pl-2 pr-5 gap-3 text-base",
    };
    const avatarSizes = {
        sm: "w-6 h-6 text-[10px]",
        md: "w-7 h-7 text-xs",
        lg: "w-8 h-8 text-sm",
    };
    return (_jsxs("div", { ref: ref, className: cn("inline-flex items-center font-text rounded-full border transition-all", sizeClasses[size], selected
            ? "bg-birne-black text-white border-birne-black"
            : "bg-white text-birne-black border-birne-black-20", onClick && "cursor-pointer hover:border-birne-black-40", className), onClick: onClick, ...props, children: [avatarUrl ? (_jsx("img", { src: avatarUrl, alt: name, className: cn("rounded-full object-cover", avatarSizes[size]) })) : (_jsx("span", { className: cn("rounded-full bg-birne-black-10 text-text-caption font-medium flex items-center justify-center", avatarSizes[size]), children: displayInitials })), _jsx("span", { className: "font-medium", children: name })] }));
});
InstructorBadge.displayName = "InstructorBadge";
export { CapacityIndicator, DateCapacityBadge, InstructorBadge };
