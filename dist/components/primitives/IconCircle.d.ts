import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const iconCircleVariants: (props?: ({
    variant?: "destructive" | "ghost" | "default" | "dark" | "purple" | "lemon" | "success" | "warning" | "info" | "muted" | null | undefined;
    size?: "sm" | "md" | "lg" | "xl" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface IconCircleProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof iconCircleVariants> {
}
declare const IconCircle: React.ForwardRefExoticComponent<IconCircleProps & React.RefAttributes<HTMLDivElement>>;
export { IconCircle, iconCircleVariants };
//# sourceMappingURL=IconCircle.d.ts.map