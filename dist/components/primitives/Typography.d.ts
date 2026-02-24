import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const headingVariants: (props?: ({
    level?: "h3" | "h1" | "h2" | "h4" | "h5" | "h6" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
    as?: HeadingLevel;
}
declare const Heading: React.ForwardRefExoticComponent<HeadingProps & React.RefAttributes<HTMLHeadingElement>>;
declare const textVariants: (props?: ({
    variant?: "heading" | "body" | "caption" | null | undefined;
    size?: "sm" | "md" | "lg" | "xs" | "base" | "xl" | null | undefined;
    weight?: "bold" | "light" | "regular" | "medium" | "semibold" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {
    as?: "p" | "span" | "div";
}
declare const Text: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLParagraphElement>>;
export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
}
declare const Eyebrow: React.ForwardRefExoticComponent<EyebrowProps & React.RefAttributes<HTMLSpanElement>>;
export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
    htmlFor?: string;
}
declare const Label: React.ForwardRefExoticComponent<LabelProps & React.RefAttributes<HTMLLabelElement>>;
export { Heading, headingVariants, Text, textVariants, Eyebrow, Label };
//# sourceMappingURL=Typography.d.ts.map