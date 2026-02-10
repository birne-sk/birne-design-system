import * as React from "react";
import { cn } from "../lib/utils";

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Carousel items */
  children: React.ReactNode;
  /** Headline displayed above the carousel */
  title?: React.ReactNode;
  /** Show navigation arrows */
  showArrows?: boolean;
  /** Show dot indicators */
  showDots?: boolean;
  /** Auto-play interval in ms (0 = disabled) */
  autoPlay?: number;
  /** Gap between items */
  gap?: "none" | "sm" | "md" | "lg";
  /** Number of items visible at once */
  itemsPerView?: number;
}

const ArrowButton = ({
  direction,
  onClick,
  disabled,
}: {
  direction: "left" | "right";
  onClick: () => void;
  disabled?: boolean;
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className="flex h-10 w-10 items-center justify-center rounded-full border border-birne-black-20 transition-all hover:bg-birne-black-2 disabled:opacity-30 disabled:cursor-not-allowed"
    aria-label={direction === "left" ? "Previous" : "Next"}
  >
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className={cn("text-text-heading", direction === "right" && "rotate-180")}
    >
      <path
        d="M10 12L6 8L10 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      className,
      children,
      title,
      showArrows = true,
      showDots = true,
      autoPlay = 0,
      gap = "md",
      itemsPerView = 3,
      ...props
    },
    ref
  ) => {
    const scrollRef = React.useRef<HTMLDivElement>(null);
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

    const scrollToIndex = (index: number) => {
      const container = scrollRef.current;
      if (!container) return;
      const child = container.children[index] as HTMLElement;
      if (!child) return;
      container.scrollTo({
        left: child.offsetLeft - container.offsetLeft,
        behavior: "smooth",
      });
      setActiveIndex(index);
    };

    const handleScroll = () => {
      const container = scrollRef.current;
      if (!container) return;
      const scrollLeft = container.scrollLeft;
      const children = Array.from(container.children) as HTMLElement[];
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
      if (autoPlay <= 0 || totalItems <= 1) return;
      const interval = setInterval(() => {
        setActiveIndex((prev) => {
          const next = (prev + 1) % totalItems;
          scrollToIndex(next);
          return next;
        });
      }, autoPlay);
      return () => clearInterval(interval);
    }, [autoPlay, totalItems]);

    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        {/* Header: title + arrows */}
        {(title || (showArrows && totalItems > 1)) && (
          <div className="flex items-end justify-between mb-6">
            <div>{title}</div>
            {showArrows && totalItems > 1 && (
              <div className="flex gap-2">
                <ArrowButton
                  direction="left"
                  onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                  disabled={activeIndex === 0}
                />
                <ArrowButton
                  direction="right"
                  onClick={() => scrollToIndex(Math.min(totalItems - 1, activeIndex + 1))}
                  disabled={activeIndex === totalItems - 1}
                />
              </div>
            )}
          </div>
        )}

        {/* Scroll container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className={cn(
            "flex overflow-x-auto snap-x snap-mandatory scrollbar-hide",
            gapStyles[gap]
          )}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((child, i) => (
            <div key={i} className="snap-start shrink-0" style={{ flexBasis: itemBasis, minWidth: itemBasis }}>
              {child}
            </div>
          ))}
        </div>

        {/* Dots */}
        {showDots && totalItems > 1 && (
          <div className="flex justify-center gap-1.5 mt-4">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === activeIndex
                    ? "w-5 bg-birne-black"
                    : "w-2 bg-birne-black-20 hover:bg-birne-black-40"
                )}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
);
Carousel.displayName = "Carousel";

export { Carousel };
