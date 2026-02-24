import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const linkVariants: (props?: ({
    variant?: "default" | "purple" | "muted" | "subtle" | null | undefined;
    size?: "sm" | "lg" | "base" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof linkVariants> {
    /** Show external link icon */
    external?: boolean;
    /** Render as different component (for React Router, Next.js Link, etc.) */
    as?: React.ElementType;
}
declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
export { Link, linkVariants };
//# sourceMappingURL=Link.d.ts.map