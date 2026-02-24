import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const aiIconVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xs" | "xl" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface AiIconProps extends React.SVGAttributes<SVGSVGElement>, VariantProps<typeof aiIconVariants> {
    /** Enable gradient animation (default: true) */
    animated?: boolean;
    /** Override color (disables gradient, uses solid color) */
    color?: string;
}
/**
 * Three-star sparkle icon with animated gradient strokes.
 * The gradient rotates continuously for an "alive" AI feel.
 *
 * Stars: One large (center-left), two smaller (top-right, bottom-right)
 */
declare const AiIcon: React.ForwardRefExoticComponent<AiIconProps & React.RefAttributes<SVGSVGElement>>;
export { AiIcon, aiIconVariants };
//# sourceMappingURL=AiIcon.d.ts.map