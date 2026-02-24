import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const avatarVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xs" | "xl" | "2xl" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
    /** Image source */
    src?: string;
    /** Alt text for image */
    alt?: string;
    /** Fallback initials (e.g., "JH" for Jakub Hrusovsky) */
    initials?: string;
    /** Show online/offline status */
    status?: "online" | "offline" | "away" | "busy";
}
declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLDivElement>>;
export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Maximum avatars to show before +N */
    max?: number;
    /** Size of avatars */
    size?: VariantProps<typeof avatarVariants>["size"];
    children: React.ReactNode;
}
declare const AvatarGroup: React.ForwardRefExoticComponent<AvatarGroupProps & React.RefAttributes<HTMLDivElement>>;
export { Avatar, AvatarGroup, avatarVariants };
//# sourceMappingURL=Avatar.d.ts.map