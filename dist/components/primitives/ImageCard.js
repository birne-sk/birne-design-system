import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
// ============================================
// Image Card - Card with background image
// ============================================
const imageCardVariants = cva("relative overflow-hidden rounded-xl bg-cover bg-center", {
    variants: {
        aspectRatio: {
            square: "aspect-square",
            video: "aspect-video",
            portrait: "aspect-[3/4]",
            landscape: "aspect-[4/3]",
            wide: "aspect-[16/9]",
            auto: "",
        },
        overlay: {
            none: "",
            light: "after:absolute after:inset-0 after:bg-white/30",
            medium: "after:absolute after:inset-0 after:bg-black/40",
            dark: "after:absolute after:inset-0 after:bg-black/60",
            gradient: "after:absolute after:inset-0 after:bg-gradient-to-t after:from-black/70 after:via-black/20 after:to-transparent",
            gradientTop: "after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/60 after:to-transparent",
            purple: "after:absolute after:inset-0 after:bg-birne-purple/40",
        },
    },
    defaultVariants: {
        aspectRatio: "video",
        overlay: "gradient",
    },
});
const positionClasses = {
    "top-left": "items-start justify-start text-left",
    "top-center": "items-start justify-center text-center",
    "top-right": "items-start justify-end text-right",
    "center": "items-center justify-center text-center",
    "bottom-left": "items-end justify-start text-left",
    "bottom-center": "items-end justify-center text-center",
    "bottom-right": "items-end justify-end text-right",
};
const ImageCard = React.forwardRef(({ className, aspectRatio, overlay, src, alt, contentPosition = "bottom-left", height, children, style, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn(imageCardVariants({ aspectRatio: height ? "auto" : aspectRatio, overlay, className })), style: {
            backgroundImage: `url(${src})`,
            height: typeof height === "number" ? `${height}px` : height,
            ...style,
        }, role: "img", "aria-label": alt, ...props, children: children && (_jsx("div", { className: cn("relative z-10 flex flex-col w-full h-full p-6", positionClasses[contentPosition]), children: children })) }));
});
ImageCard.displayName = "ImageCard";
// ============================================
// Image Text - Text optimized for image overlays
// ============================================
const imageTextVariants = cva("", {
    variants: {
        variant: {
            title: "font-display text-3xl md:text-4xl font-normal tracking-tight",
            subtitle: "font-display text-xl md:text-2xl font-normal",
            body: "font-text text-base md:text-lg",
            caption: "font-text text-sm",
            eyebrow: "font-mono text-xs uppercase tracking-wider",
        },
        color: {
            white: "text-white",
            light: "text-white/90",
            muted: "text-white/70",
            dark: "text-birne-black",
            darkMuted: "text-birne-black/70",
        },
        shadow: {
            none: "",
            sm: "drop-shadow-sm",
            md: "drop-shadow-md",
            lg: "drop-shadow-lg",
        },
    },
    defaultVariants: {
        variant: "body",
        color: "white",
        shadow: "md",
    },
});
const ImageText = React.forwardRef(({ className, variant, color, shadow, as: Component = "p", ...props }, ref) => {
    return (_jsx(Component, { ref: ref, className: cn(imageTextVariants({ variant, color, shadow, className })), ...props }));
});
ImageText.displayName = "ImageText";
const heightClasses = {
    sm: "min-h-[300px]",
    md: "min-h-[400px]",
    lg: "min-h-[500px]",
    full: "min-h-[600px]",
    screen: "min-h-screen",
};
const HeroImage = React.forwardRef(({ className, src, alt, height = "md", overlay = "gradient", align = "left", verticalAlign = "bottom", children, ...props }, ref) => {
    const alignClasses = {
        left: "items-start text-left",
        center: "items-center text-center",
        right: "items-end text-right",
    };
    const vAlignClasses = {
        top: "justify-start pt-12",
        center: "justify-center",
        bottom: "justify-end pb-12",
    };
    return (_jsxs("div", { ref: ref, className: cn("relative w-full bg-cover bg-center", heightClasses[height], className), style: { backgroundImage: `url(${src})` }, role: "img", "aria-label": alt, ...props, children: [overlay !== "none" && (_jsx("div", { className: cn("absolute inset-0", overlay === "light" && "bg-white/30", overlay === "medium" && "bg-black/40", overlay === "dark" && "bg-black/60", overlay === "gradient" && "bg-gradient-to-t from-black/70 via-black/20 to-transparent", overlay === "gradientTop" && "bg-gradient-to-b from-black/60 to-transparent", overlay === "purple" && "bg-birne-purple/40") })), _jsx("div", { className: cn("relative z-10 flex flex-col w-full h-full px-6 md:px-12 lg:px-24", alignClasses[align], vAlignClasses[verticalAlign]), children: _jsx("div", { className: "max-w-3xl", children: children }) })] }));
});
HeroImage.displayName = "HeroImage";
export { ImageCard, imageCardVariants, ImageText, imageTextVariants, HeroImage };
