import * as React from "react";
export interface StarRatingProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Rating value (0-5) */
    value: number;
    /** Maximum stars */
    max?: number;
    /** Star size in pixels */
    size?: "sm" | "md" | "lg" | number;
    /** Show numeric value */
    showValue?: boolean;
    /** For dark backgrounds */
    variant?: "light" | "dark";
    /** Interactive - allows clicking to set rating */
    interactive?: boolean;
    /** Callback when rating changes (only if interactive) */
    onRatingChange?: (rating: number) => void;
    /** Gap between stars */
    gap?: "none" | "sm" | "md";
}
declare const StarRating: React.ForwardRefExoticComponent<StarRatingProps & React.RefAttributes<HTMLDivElement>>;
export interface RatingDisplayProps extends Omit<StarRatingProps, "interactive" | "onRatingChange"> {
    /** Label text */
    label?: string;
    /** Number of reviews */
    reviewCount?: number;
}
declare const RatingDisplay: React.ForwardRefExoticComponent<RatingDisplayProps & React.RefAttributes<HTMLDivElement>>;
export { StarRating, RatingDisplay };
//# sourceMappingURL=StarRating.d.ts.map