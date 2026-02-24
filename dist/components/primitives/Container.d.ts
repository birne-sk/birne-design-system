import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const sectionVariants: (props?: ({
    background?: "dark" | "purple" | "lemon" | "white" | "transparent" | "sand" | "sandLight" | "darkSoft" | "purpleLight" | "lemonLight" | null | undefined;
    padding?: "sm" | "md" | "lg" | "none" | "xl" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface SectionProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof sectionVariants> {
    as?: "section" | "div" | "article" | "aside" | "header" | "footer";
}
declare const Section: React.ForwardRefExoticComponent<SectionProps & React.RefAttributes<HTMLElement>>;
declare const containerVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xl" | "full" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {
}
declare const Container: React.ForwardRefExoticComponent<ContainerProps & React.RefAttributes<HTMLDivElement>>;
declare const boxVariants: (props?: ({
    variant?: "dark" | "purple" | "outline" | "lemon" | "glass" | "glassDark" | "glassPurple" | "white" | "subtle" | "sand" | "elevated" | "outlineLight" | null | undefined;
    padding?: "sm" | "md" | "lg" | "none" | "xl" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface BoxProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof boxVariants> {
}
declare const Box: React.ForwardRefExoticComponent<BoxProps & React.RefAttributes<HTMLDivElement>>;
declare const gridVariants: (props?: ({
    cols?: 1 | 2 | "auto" | 3 | 4 | null | undefined;
    gap?: "sm" | "md" | "lg" | "none" | "xl" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface GridProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof gridVariants> {
}
declare const Grid: React.ForwardRefExoticComponent<GridProps & React.RefAttributes<HTMLDivElement>>;
declare const stackVariants: (props?: ({
    direction?: "horizontal" | "vertical" | null | undefined;
    gap?: "sm" | "md" | "lg" | "none" | "xs" | "xl" | null | undefined;
    align?: "center" | "end" | "start" | "stretch" | null | undefined;
    justify?: "center" | "end" | "start" | "between" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface StackProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof stackVariants> {
}
declare const Stack: React.ForwardRefExoticComponent<StackProps & React.RefAttributes<HTMLDivElement>>;
export { Section, sectionVariants, Container, containerVariants, Box, boxVariants, Grid, gridVariants, Stack, stackVariants, };
//# sourceMappingURL=Container.d.ts.map