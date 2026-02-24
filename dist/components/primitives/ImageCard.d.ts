import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const imageCardVariants: (props?: ({
    aspectRatio?: "video" | "auto" | "square" | "portrait" | "landscape" | "wide" | null | undefined;
    overlay?: "none" | "dark" | "purple" | "light" | "medium" | "gradient" | "gradientTop" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ImageCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof imageCardVariants> {
    /** Image source URL */
    src: string;
    /** Alt text for accessibility */
    alt?: string;
    /** Content position */
    contentPosition?: "top-left" | "top-center" | "top-right" | "center" | "bottom-left" | "bottom-center" | "bottom-right";
    /** Fixed height instead of aspect ratio */
    height?: string | number;
}
declare const ImageCard: React.ForwardRefExoticComponent<ImageCardProps & React.RefAttributes<HTMLDivElement>>;
declare const imageTextVariants: (props?: ({
    variant?: "title" | "body" | "caption" | "subtitle" | "eyebrow" | null | undefined;
    color?: "dark" | "light" | "muted" | "white" | "darkMuted" | null | undefined;
    shadow?: "sm" | "md" | "lg" | "none" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ImageTextProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof imageTextVariants> {
    as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}
declare const ImageText: React.ForwardRefExoticComponent<ImageTextProps & React.RefAttributes<HTMLElement>>;
export interface HeroImageProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Background image URL */
    src: string;
    /** Alt text */
    alt?: string;
    /** Hero height */
    height?: "sm" | "md" | "lg" | "full" | "screen";
    /** Overlay style */
    overlay?: VariantProps<typeof imageCardVariants>["overlay"];
    /** Content alignment */
    align?: "left" | "center" | "right";
    /** Vertical alignment */
    verticalAlign?: "top" | "center" | "bottom";
}
declare const HeroImage: React.ForwardRefExoticComponent<HeroImageProps & React.RefAttributes<HTMLDivElement>>;
export { ImageCard, imageCardVariants, ImageText, imageTextVariants, HeroImage };
//# sourceMappingURL=ImageCard.d.ts.map