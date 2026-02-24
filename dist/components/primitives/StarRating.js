import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
const StarIcon = ({ filled, size, strokeColor, fillColor, strokeWidth, }) => {
    const id = React.useId();
    return (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [filled === "half" && (_jsx("defs", { children: _jsxs("linearGradient", { id: `half-${id}`, children: [_jsx("stop", { offset: "50%", stopColor: fillColor }), _jsx("stop", { offset: "50%", stopColor: "transparent" })] }) })), _jsx("path", { d: "M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z", fill: filled === true
                    ? fillColor
                    : filled === "half"
                        ? `url(#half-${id})`
                        : "transparent", stroke: strokeColor, strokeWidth: strokeWidth, strokeLinecap: "round", strokeLinejoin: "round" })] }));
};
const sizeMap = {
    sm: 16,
    md: 20,
    lg: 24,
};
const gapMap = {
    none: "gap-0",
    sm: "gap-0.5",
    md: "gap-1",
};
const StarRating = React.forwardRef(({ className, value, max = 5, size = "md", showValue = false, variant = "light", interactive = false, onRatingChange, gap = "sm", ...props }, ref) => {
    const [hoverValue, setHoverValue] = React.useState(null);
    const displayValue = hoverValue ?? value;
    const pixelSize = typeof size === "number" ? size : sizeMap[size];
    // Colors based on variant
    const strokeColor = variant === "dark" ? "hsl(61, 97%, 72%)" : "#221924"; // birne-lemon : birne-black
    const fillColor = "hsl(61, 97%, 72%)"; // birne-lemon
    const getStarState = (index) => {
        const starNumber = index + 1;
        if (displayValue >= starNumber)
            return true;
        if (displayValue > starNumber - 1 && displayValue < starNumber)
            return "half";
        return false;
    };
    const handleClick = (index) => {
        if (interactive && onRatingChange) {
            onRatingChange(index + 1);
        }
    };
    const handleMouseEnter = (index) => {
        if (interactive) {
            setHoverValue(index + 1);
        }
    };
    const handleMouseLeave = () => {
        if (interactive) {
            setHoverValue(null);
        }
    };
    return (_jsxs("div", { ref: ref, className: cn("inline-flex items-center", gapMap[gap], interactive && "cursor-pointer", className), onMouseLeave: handleMouseLeave, ...props, children: [Array.from({ length: max }).map((_, index) => (_jsx("span", { onClick: () => handleClick(index), onMouseEnter: () => handleMouseEnter(index), className: cn("inline-flex", interactive && "transition-transform hover:scale-110"), children: _jsx(StarIcon, { filled: getStarState(index), size: pixelSize, strokeColor: strokeColor, fillColor: fillColor, strokeWidth: 1.5 }) }, index))), showValue && (_jsx("span", { className: cn("ml-2 font-text text-sm font-medium", variant === "dark" ? "text-white" : "text-birne-black"), children: value.toFixed(1) }))] }));
});
StarRating.displayName = "StarRating";
const RatingDisplay = React.forwardRef(({ label, reviewCount, className, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn("inline-flex flex-col gap-1", className), children: [label && (_jsx("span", { className: "font-text text-sm text-text-caption", children: label })), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(StarRating, { ...props }), reviewCount !== undefined && (_jsxs("span", { className: "font-text text-sm text-text-caption", children: ["(", reviewCount, ")"] }))] })] }));
});
RatingDisplay.displayName = "RatingDisplay";
export { StarRating, RatingDisplay };
