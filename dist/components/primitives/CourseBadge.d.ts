import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const capacityVariants: (props?: ({
    status?: "full" | "available" | "limited" | "almostFull" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface CapacityIndicatorProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof capacityVariants> {
    /** Number of available spots */
    spots: number;
    /** Custom label (overrides automatic) */
    label?: string;
}
declare const CapacityIndicator: React.ForwardRefExoticComponent<CapacityIndicatorProps & React.RefAttributes<HTMLSpanElement>>;
export interface DateCapacityBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Date to display */
    date: string;
    /** Number of available spots */
    spots: number;
    /** Size variant */
    size?: "sm" | "md" | "lg";
    /** Click handler */
    onClick?: () => void;
    /** Whether this date is selected */
    selected?: boolean;
}
declare const DateCapacityBadge: React.ForwardRefExoticComponent<DateCapacityBadgeProps & React.RefAttributes<HTMLDivElement>>;
export interface InstructorBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Instructor name */
    name: string;
    /** Avatar image URL (optional) */
    avatarUrl?: string;
    /** Initials (auto-generated from name if not provided) */
    initials?: string;
    /** Size variant */
    size?: "sm" | "md" | "lg";
    /** Click handler */
    onClick?: () => void;
    /** Whether this instructor is selected */
    selected?: boolean;
}
declare const InstructorBadge: React.ForwardRefExoticComponent<InstructorBadgeProps & React.RefAttributes<HTMLDivElement>>;
export { CapacityIndicator, DateCapacityBadge, InstructorBadge };
//# sourceMappingURL=CourseBadge.d.ts.map