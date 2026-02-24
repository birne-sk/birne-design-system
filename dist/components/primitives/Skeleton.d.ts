import * as React from "react";
export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Predefined shape */
    variant?: "text" | "circular" | "rectangular";
    /** Width (accepts any CSS value) */
    width?: string | number;
    /** Height (accepts any CSS value) */
    height?: string | number;
    /** Disable animation */
    disableAnimation?: boolean;
}
declare const Skeleton: React.ForwardRefExoticComponent<SkeletonProps & React.RefAttributes<HTMLDivElement>>;
declare const SkeletonText: React.ForwardRefExoticComponent<Omit<SkeletonProps, "variant"> & {
    lines?: number;
} & React.RefAttributes<HTMLDivElement>>;
declare const SkeletonAvatar: React.ForwardRefExoticComponent<Omit<SkeletonProps, "variant"> & {
    size?: "sm" | "md" | "lg";
} & React.RefAttributes<HTMLDivElement>>;
declare const SkeletonCard: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export { Skeleton, SkeletonText, SkeletonAvatar, SkeletonCard };
//# sourceMappingURL=Skeleton.d.ts.map