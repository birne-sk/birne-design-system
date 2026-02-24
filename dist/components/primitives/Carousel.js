import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
const ArrowButton = ({ direction, onClick, disabled, }) => (_jsx("button", { type: "button", onClick: onClick, disabled: disabled, className: "flex h-10 w-10 items-center justify-center rounded-full border border-birne-black-20 transition-all hover:bg-birne-black-2 disabled:opacity-30 disabled:cursor-not-allowed", "aria-label": direction === "left" ? "Previous" : "Next", children: _jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", className: cn("text-text-heading", direction === "right" && "rotate-180"), children: _jsx("path", { d: "M10 12L6 8L10 4", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }));
const Carousel = React.forwardRef(({ className, children, title, showArrows = true, showDots = true, autoPlay = 0, gap = "md", itemsPerView = 3, ...props }, ref) => {
    const scrollRef = React.useRef(null);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const items = React.Children.toArray(children);
    const totalItems = items.length;
    const gapStyles = {
        none: "gap-0",
        sm: "gap-2",
        md: "gap-4",
        lg: "gap-6",
    };
    const gapPx = { none: 0, sm: 8, md: 16, lg: 24 };
    const itemBasis = `calc((100% - ${gapPx[gap] * (itemsPerView - 1)}px) / ${itemsPerView})`;
    const scrollToIndex = (index) => {
        const container = scrollRef.current;
        if (!container)
            return;
        const child = container.children[index];
        if (!child)
            return;
        container.scrollTo({
            left: child.offsetLeft - container.offsetLeft,
            behavior: "smooth",
        });
        setActiveIndex(index);
    };
    const handleScroll = () => {
        const container = scrollRef.current;
        if (!container)
            return;
        const scrollLeft = container.scrollLeft;
        const children = Array.from(container.children);
        let closest = 0;
        let minDist = Infinity;
        children.forEach((child, i) => {
            const dist = Math.abs(child.offsetLeft - container.offsetLeft - scrollLeft);
            if (dist < minDist) {
                minDist = dist;
                closest = i;
            }
        });
        setActiveIndex(closest);
    };
    React.useEffect(() => {
        if (autoPlay <= 0 || totalItems <= 1)
            return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => {
                const next = (prev + 1) % totalItems;
                scrollToIndex(next);
                return next;
            });
        }, autoPlay);
        return () => clearInterval(interval);
    }, [autoPlay, totalItems]);
    return (_jsxs("div", { ref: ref, className: cn("relative", className), ...props, children: [(title || (showArrows && totalItems > 1)) && (_jsxs("div", { className: "flex items-end justify-between mb-6", children: [_jsx("div", { children: title }), showArrows && totalItems > 1 && (_jsxs("div", { className: "flex gap-2", children: [_jsx(ArrowButton, { direction: "left", onClick: () => scrollToIndex(Math.max(0, activeIndex - 1)), disabled: activeIndex === 0 }), _jsx(ArrowButton, { direction: "right", onClick: () => scrollToIndex(Math.min(totalItems - 1, activeIndex + 1)), disabled: activeIndex === totalItems - 1 })] }))] })), _jsx("div", { ref: scrollRef, onScroll: handleScroll, className: cn("flex overflow-x-auto snap-x snap-mandatory scrollbar-hide", gapStyles[gap]), style: { scrollbarWidth: "none", msOverflowStyle: "none" }, children: items.map((child, i) => (_jsx("div", { className: "snap-start shrink-0", style: { flexBasis: itemBasis, minWidth: itemBasis }, children: child }, i))) }), showDots && totalItems > 1 && (_jsx("div", { className: "flex justify-center gap-1.5 mt-4", children: items.map((_, i) => (_jsx("button", { type: "button", onClick: () => scrollToIndex(i), className: cn("h-2 rounded-full transition-all", i === activeIndex
                        ? "w-5 bg-birne-black"
                        : "w-2 bg-birne-black-20 hover:bg-birne-black-40"), "aria-label": `Slide ${i + 1}` }, i))) }))] }));
});
Carousel.displayName = "Carousel";
export { Carousel };
