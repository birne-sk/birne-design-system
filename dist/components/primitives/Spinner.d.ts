import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const spinnerVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xs" | "xl" | null | undefined;
    color?: "default" | "purple" | "muted" | "white" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface SpinnerProps extends React.SVGAttributes<SVGSVGElement>, VariantProps<typeof spinnerVariants> {
    /** Screen reader label */
    label?: string;
}
declare const Spinner: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<SVGSVGElement>>;
export { Spinner, spinnerVariants };
//# sourceMappingURL=Spinner.d.ts.map