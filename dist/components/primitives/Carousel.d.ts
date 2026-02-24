import * as React from "react";
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
declare const Carousel: React.ForwardRefExoticComponent<CarouselProps & React.RefAttributes<HTMLDivElement>>;
export { Carousel };
//# sourceMappingURL=Carousel.d.ts.map