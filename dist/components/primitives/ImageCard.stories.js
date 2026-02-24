import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ImageCard, ImageText, HeroImage } from "./ImageCard";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { MOOD_PHOTOS, TEAM_PHOTOS } from "../lib/supabase";
const meta = {
    title: "Primitives/ImageCard",
    component: ImageCard,
    tags: ["autodocs"],
    argTypes: {
        aspectRatio: {
            control: "select",
            options: ["square", "video", "portrait", "landscape", "wide", "auto"],
        },
        overlay: {
            control: "select",
            options: ["none", "light", "medium", "dark", "gradient", "gradientTop", "purple"],
        },
        contentPosition: {
            control: "select",
            options: ["top-left", "top-center", "top-right", "center", "bottom-left", "bottom-center", "bottom-right"],
        },
    },
};
export default meta;
// ============================================
// Basic Examples
// ============================================
export const Default = {
    args: {
        src: MOOD_PHOTOS.dec2025_003,
        alt: "Birne mood photo",
        aspectRatio: "video",
        overlay: "gradient",
        contentPosition: "bottom-left",
        children: (_jsxs(_Fragment, { children: [_jsx(ImageText, { variant: "eyebrow", color: "muted", children: "Case Study" }), _jsx(ImageText, { variant: "title", as: "h2", children: "Strategic Marketing" }), _jsx(ImageText, { variant: "body", color: "light", className: "mt-2 max-w-md", children: "How we helped a startup achieve 300% growth in 6 months." })] })),
    },
};
export const OverlayVariants = {
    render: () => (_jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: ["none", "light", "medium", "dark", "gradient", "purple"].map((overlay) => (_jsx(ImageCard, { src: MOOD_PHOTOS.dec2025_006, overlay: overlay, aspectRatio: "square", contentPosition: "bottom-left", children: _jsxs(ImageText, { variant: "caption", color: overlay === "light" ? "dark" : "white", children: ["overlay=\"", overlay, "\""] }) }, overlay))) })),
};
export const AspectRatios = {
    render: () => (_jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: ["square", "portrait", "landscape", "wide"].map((ratio) => (_jsx(ImageCard, { src: MOOD_PHOTOS.dec2025_014, aspectRatio: ratio, overlay: "medium", contentPosition: "center", children: _jsx(ImageText, { variant: "caption", children: ratio }) }, ratio))) })),
};
export const ContentPositions = {
    render: () => (_jsx("div", { className: "grid grid-cols-3 gap-4", children: ["top-left", "top-center", "top-right", "center", "bottom-left", "bottom-center", "bottom-right"].map((pos) => (_jsx(ImageCard, { src: MOOD_PHOTOS.dec2025_027, aspectRatio: "square", overlay: "medium", contentPosition: pos, children: _jsx(ImageText, { variant: "caption", children: pos }) }, pos))) })),
};
// ============================================
// Real-World Examples
// ============================================
export const CaseStudyCard = {
    render: () => (_jsx("div", { className: "max-w-md", children: _jsxs(ImageCard, { src: MOOD_PHOTOS.dec2025_030, aspectRatio: "landscape", overlay: "gradient", contentPosition: "bottom-left", className: "cursor-pointer hover:scale-[1.02] transition-transform", children: [_jsx(Badge, { variant: "purple", className: "mb-3", children: "Pr\u00EDpadov\u00E1 \u0161t\u00FAdia" }), _jsx(ImageText, { variant: "subtitle", as: "h3", children: "Rebranding pre SaaS startup" }), _jsx(ImageText, { variant: "body", color: "light", className: "mt-1", children: "Kompletn\u00E1 vizu\u00E1lna identita a web" })] }) })),
};
export const TeamMemberCard = {
    render: () => (_jsxs("div", { className: "grid grid-cols-2 gap-4 max-w-lg", children: [_jsxs(ImageCard, { src: TEAM_PHOTOS.jakub, aspectRatio: "portrait", overlay: "gradient", contentPosition: "bottom-left", children: [_jsx(ImageText, { variant: "subtitle", as: "h3", children: "Jakub" }), _jsx(ImageText, { variant: "caption", color: "muted", children: "Founder & Strategist" })] }), _jsxs(ImageCard, { src: TEAM_PHOTOS.marek, aspectRatio: "portrait", overlay: "gradient", contentPosition: "bottom-left", children: [_jsx(ImageText, { variant: "subtitle", as: "h3", children: "Marek" }), _jsx(ImageText, { variant: "caption", color: "muted", children: "Creative Director" })] })] })),
};
export const FeatureCard = {
    render: () => (_jsx("div", { className: "max-w-sm", children: _jsxs(ImageCard, { src: MOOD_PHOTOS.dec2025_033, aspectRatio: "video", overlay: "dark", contentPosition: "center", children: [_jsx(ImageText, { variant: "eyebrow", color: "muted", className: "mb-2", children: "Nov\u00E1 slu\u017Eba" }), _jsx(ImageText, { variant: "title", as: "h2", children: "Marketing Diagnostika" }), _jsx(ImageText, { variant: "body", color: "light", className: "mt-3 max-w-xs", children: "Komplexn\u00E1 anal\u00FDza va\u0161ej marketingovej strat\u00E9gie" }), _jsx(Button, { variant: "primary", size: "md", className: "mt-6", children: "Zisti\u0165 viac" })] }) })),
};
export const BlogPostCard = {
    render: () => (_jsx("div", { className: "max-w-md", children: _jsxs(ImageCard, { src: MOOD_PHOTOS.dec2025_037, aspectRatio: "video", overlay: "gradient", contentPosition: "bottom-left", children: [_jsx(ImageText, { variant: "eyebrow", color: "muted", children: "Blog \u2022 5 min \u010D\u00EDtanie" }), _jsx(ImageText, { variant: "subtitle", as: "h3", className: "mt-1", children: "Ako vybudova\u0165 zna\u010Dku, ktor\u00E1 vydr\u017E\u00ED" })] }) })),
};
// ============================================
// Hero Section Examples
// ============================================
export const HeroBasic = {
    render: () => (_jsxs(HeroImage, { src: MOOD_PHOTOS.dec2025_002, height: "lg", overlay: "gradient", align: "left", verticalAlign: "bottom", children: [_jsx(ImageText, { variant: "eyebrow", color: "muted", className: "mb-2", children: "Birne Studio" }), _jsx(ImageText, { variant: "title", as: "h1", className: "text-4xl md:text-5xl", children: "Strategic marketing for brands that mean business" }), _jsx(ImageText, { variant: "body", color: "light", className: "mt-4 max-w-xl", children: "We help ambitious brands grow through strategy, creativity, and execution." }), _jsxs("div", { className: "flex gap-4 mt-8", children: [_jsx(Button, { variant: "primary", size: "lg", children: "Kontaktujte n\u00E1s" }), _jsx(Button, { variant: "ghost", size: "lg", className: "text-white border-white hover:bg-white/10", children: "Na\u0161e pr\u00E1ce" })] })] })),
};
export const HeroCentered = {
    render: () => (_jsxs(HeroImage, { src: MOOD_PHOTOS.dec2025_014, height: "md", overlay: "dark", align: "center", verticalAlign: "center", children: [_jsx(ImageText, { variant: "eyebrow", color: "muted", className: "mb-4", children: "Pripraven\u00ED na zmenu?" }), _jsxs(ImageText, { variant: "title", as: "h1", className: "text-4xl md:text-5xl", children: ["Posu\u0148me v\u00E1\u0161 marketing", _jsx("br", {}), "na nov\u00FA \u00FArove\u0148"] }), _jsx(Button, { variant: "primary", size: "lg", className: "mt-8", children: "Za\u010Da\u0165 spolupr\u00E1cu" })] })),
};
// ============================================
// Image Text Showcase
// ============================================
export const TextVariants = {
    render: () => (_jsx(ImageCard, { src: MOOD_PHOTOS.dec2025_006, height: 400, overlay: "dark", contentPosition: "bottom-left", children: _jsxs("div", { className: "space-y-2", children: [_jsx(ImageText, { variant: "eyebrow", color: "muted", children: "Eyebrow text" }), _jsx(ImageText, { variant: "title", as: "h1", children: "Title variant" }), _jsx(ImageText, { variant: "subtitle", as: "h2", children: "Subtitle variant" }), _jsx(ImageText, { variant: "body", children: "Body text variant" }), _jsx(ImageText, { variant: "caption", color: "muted", children: "Caption variant" })] }) })),
};
export const TextColors = {
    render: () => (_jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs(ImageCard, { src: MOOD_PHOTOS.dec2025_027, aspectRatio: "video", overlay: "dark", contentPosition: "center", children: [_jsx(ImageText, { variant: "subtitle", color: "white", children: "White text" }), _jsx(ImageText, { variant: "body", color: "light", children: "Light text (90%)" }), _jsx(ImageText, { variant: "caption", color: "muted", children: "Muted text (70%)" })] }), _jsxs(ImageCard, { src: MOOD_PHOTOS.dec2025_030, aspectRatio: "video", overlay: "light", contentPosition: "center", children: [_jsx(ImageText, { variant: "subtitle", color: "dark", children: "Dark text" }), _jsx(ImageText, { variant: "body", color: "darkMuted", children: "Dark muted text" })] })] })),
};
