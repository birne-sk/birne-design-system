import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StarRating, RatingDisplay } from "./StarRating";
import { Box } from "./Container";
import { Text } from "./Typography";
import * as React from "react";
const meta = {
    title: "Primitives/StarRating",
    component: StarRating,
    tags: ["autodocs"],
    argTypes: {
        value: {
            control: { type: "range", min: 0, max: 5, step: 0.5 },
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        variant: {
            control: "select",
            options: ["light", "dark"],
        },
        gap: {
            control: "select",
            options: ["none", "sm", "md"],
        },
    },
};
export default meta;
// ============================================
// Basic Examples
// ============================================
export const Default = {
    args: {
        value: 4,
    },
};
export const FullRating = {
    name: "Plné hodnotenie (5/5)",
    render: () => (_jsxs("div", { className: "space-y-2", children: [_jsx(StarRating, { value: 5 }), _jsx(Text, { size: "sm", variant: "caption", children: "fill-birne-lemon stroke-birne-black strokeWidth=1.5" })] })),
};
export const PartialRating = {
    name: "Čiastočné hodnotenie (3.5/5)",
    render: () => (_jsxs("div", { className: "space-y-2", children: [_jsx(StarRating, { value: 3.5 }), _jsx(Text, { size: "sm", variant: "caption", children: "fill-transparent pre pr\u00E1zdne" })] })),
};
export const EmptyRating = {
    name: "Prázdne hodnotenie",
    render: () => (_jsx(StarRating, { value: 0 })),
};
export const Sizes = {
    name: "Veľkosti",
    render: () => (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "space-y-1", children: [_jsx(Text, { size: "sm", variant: "caption", children: "Small (16px)" }), _jsx(StarRating, { value: 4, size: "sm" })] }), _jsxs("div", { className: "space-y-1", children: [_jsx(Text, { size: "sm", variant: "caption", children: "Medium (20px) - default" }), _jsx(StarRating, { value: 4, size: "md" })] }), _jsxs("div", { className: "space-y-1", children: [_jsx(Text, { size: "sm", variant: "caption", children: "Large (24px)" }), _jsx(StarRating, { value: 4, size: "lg" })] }), _jsxs("div", { className: "space-y-1", children: [_jsx(Text, { size: "sm", variant: "caption", children: "Custom (32px)" }), _jsx(StarRating, { value: 4, size: 32 })] })] })),
};
export const WithValue = {
    name: "S číselnou hodnotou",
    render: () => (_jsxs("div", { className: "space-y-4", children: [_jsx(StarRating, { value: 4.5, showValue: true }), _jsx(StarRating, { value: 3.8, showValue: true, size: "lg" })] })),
};
// ============================================
// On Different Backgrounds
// ============================================
export const OnDarkBackground = {
    name: "Na tmavom pozadí",
    render: () => (_jsxs(Box, { variant: "dark", padding: "lg", className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx(StarRating, { value: 5, variant: "dark", showValue: true }), _jsx(Text, { size: "sm", className: "text-white/60", children: "stroke-birne-lemon na tmavom pozad\u00ED" })] }), _jsx("div", { className: "space-y-2", children: _jsx(StarRating, { value: 3.5, variant: "dark", showValue: true }) }), _jsx("div", { className: "space-y-2", children: _jsx(StarRating, { value: 0, variant: "dark" }) })] })),
};
export const OnPurpleBackground = {
    name: "Na fialovom pozadí",
    render: () => (_jsxs(Box, { variant: "purple", padding: "lg", className: "space-y-4", children: [_jsx(StarRating, { value: 4.5, showValue: true }), _jsx(StarRating, { value: 3 })] })),
};
// ============================================
// Interactive
// ============================================
export const Interactive = {
    name: "Interaktívne",
    render: () => {
        const [rating, setRating] = React.useState(3);
        return (_jsxs("div", { className: "space-y-4", children: [_jsx(Text, { size: "sm", children: "Klikni na hviezdi\u010Dku pre zmenu hodnotenia:" }), _jsx(StarRating, { value: rating, interactive: true, onRatingChange: setRating, size: "lg", showValue: true }), _jsxs(Text, { size: "sm", variant: "caption", children: ["Aktu\u00E1lne: ", rating, "/5"] })] }));
    },
};
// ============================================
// Rating Display
// ============================================
export const RatingDisplayExample = {
    name: "Rating Display",
    render: () => (_jsxs("div", { className: "space-y-6", children: [_jsx(RatingDisplay, { value: 4.5, showValue: true, label: "Hodnotenie kurzu", reviewCount: 128 }), _jsx(RatingDisplay, { value: 4.8, showValue: true, label: "Spokojnos\u0165 z\u00E1kazn\u00EDkov", reviewCount: 56, size: "lg" })] })),
};
// ============================================
// Real-World Examples
// ============================================
export const ProductCard = {
    name: "Príklad: Produktová karta",
    render: () => (_jsxs(Box, { variant: "outline", padding: "md", className: "max-w-xs", children: [_jsx("div", { className: "aspect-video bg-birne-sand-40 rounded-lg mb-4" }), _jsx(Text, { weight: "medium", className: "mb-1", children: "AI Marketing Kurz" }), _jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(StarRating, { value: 4.8, size: "sm" }), _jsx(Text, { size: "xs", variant: "caption", children: "(128 recenzi\u00ED)" })] }), _jsx(Text, { size: "lg", weight: "medium", children: "199 \u20AC" })] })),
};
export const TestimonialCard = {
    name: "Príklad: Testimonial",
    render: () => (_jsxs(Box, { variant: "subtle", padding: "lg", className: "max-w-md", children: [_jsx(StarRating, { value: 5, size: "sm", className: "mb-3" }), _jsx(Text, { className: "mb-4 italic", children: "\"Najlep\u0161ia invest\u00EDcia do vzdel\u00E1vania, ak\u00FA som urobil tento rok. U\u0161etril som desiatky hod\u00EDn pr\u00E1ce.\"" }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 rounded-full bg-birne-purple-40" }), _jsxs("div", { children: [_jsx(Text, { size: "sm", weight: "medium", children: "J\u00E1n Nov\u00E1k" }), _jsx(Text, { size: "xs", variant: "caption", children: "Marketing Manager" })] })] })] })),
};
export const CourseHeader = {
    name: "Príklad: Hlavička kurzu",
    render: () => (_jsxs(Box, { variant: "dark", padding: "lg", className: "max-w-lg", children: [_jsx(Text, { size: "sm", className: "text-birne-lemon mb-2", children: "ONLINE KURZ" }), _jsx(Text, { size: "xl", weight: "medium", className: "text-white mb-4", children: "AI v Marketingu" }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(StarRating, { value: 4.9, variant: "dark", showValue: true }), _jsx(Text, { size: "sm", className: "text-white/60", children: "2,456 \u0161tudentov" })] })] })),
};
// ============================================
// All Ratings Preview
// ============================================
export const AllRatings = {
    name: "Všetky hodnoty",
    render: () => (_jsx("div", { className: "space-y-2", children: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].map((val) => (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(StarRating, { value: val }), _jsx(Text, { size: "sm", className: "w-8", children: val })] }, val))) })),
};
