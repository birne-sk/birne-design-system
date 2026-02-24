import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const progressVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare const progressFillVariants: (props?: ({
    variant?: "destructive" | "default" | "success" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof progressVariants>, VariantProps<typeof progressFillVariants> {
    value?: number;
    max?: number;
    showLabel?: boolean;
}
declare const Progress: React.ForwardRefExoticComponent<ProgressProps & React.RefAttributes<HTMLDivElement>>;
declare const spinnerVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xl" | null | undefined;
    variant?: "default" | "purple" | "muted" | "white" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof spinnerVariants> {
    label?: string;
}
declare const Spinner: React.ForwardRefExoticComponent<SpinnerProps & React.RefAttributes<HTMLDivElement>>;
export { Progress, progressVariants, Spinner, spinnerVariants };
//# sourceMappingURL=Progress.d.ts.map