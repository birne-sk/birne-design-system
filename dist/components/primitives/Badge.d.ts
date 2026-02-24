import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const badgeVariants: (props?: ({
    variant?: "destructive" | "default" | "dark" | "purple" | "lemon" | "onDark" | "onPurple" | "onGray" | "glass" | "glassDark" | "glassPurple" | "glassLemon" | "success" | "warning" | "info" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
    /** Left icon */
    icon?: React.ReactNode;
    /** Right icon */
    iconRight?: React.ReactNode;
}
declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLDivElement>>;
export interface MetaBadgeProps extends Omit<BadgeProps, "icon" | "children"> {
    /** Badge type */
    type: "date" | "location" | "duration" | "category" | "status";
    /** Value to display */
    value: string;
}
export { Badge, badgeVariants };
//# sourceMappingURL=Badge.d.ts.map