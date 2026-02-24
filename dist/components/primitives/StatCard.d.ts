import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const statCardVariants: (props?: ({
    variant?: "default" | "purple" | "muted" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof statCardVariants> {
    label: string;
    value: string | number;
    description?: string;
    trend?: {
        value: number;
        label?: string;
    };
    icon?: React.ReactNode;
}
declare const StatCard: React.ForwardRefExoticComponent<StatCardProps & React.RefAttributes<HTMLDivElement>>;
export { StatCard, statCardVariants };
//# sourceMappingURL=StatCard.d.ts.map