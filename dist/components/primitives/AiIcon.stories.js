import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AiIcon } from "./AiIcon";
const meta = {
    title: "AI/AiIcon",
    component: AiIcon,
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl"],
        },
        animated: { control: "boolean" },
        color: { control: "color" },
    },
};
export default meta;
// ============================================
// Basic
// ============================================
export const Default = {
    args: {},
};
export const Sizes = {
    render: () => (_jsxs("div", { className: "flex items-end gap-4", children: [_jsxs("div", { className: "text-center", children: [_jsx(AiIcon, { size: "xs" }), _jsx("p", { className: "font-text text-xs text-text-caption mt-2", children: "xs" })] }), _jsxs("div", { className: "text-center", children: [_jsx(AiIcon, { size: "sm" }), _jsx("p", { className: "font-text text-xs text-text-caption mt-2", children: "sm" })] }), _jsxs("div", { className: "text-center", children: [_jsx(AiIcon, { size: "md" }), _jsx("p", { className: "font-text text-xs text-text-caption mt-2", children: "md" })] }), _jsxs("div", { className: "text-center", children: [_jsx(AiIcon, { size: "lg" }), _jsx("p", { className: "font-text text-xs text-text-caption mt-2", children: "lg" })] }), _jsxs("div", { className: "text-center", children: [_jsx(AiIcon, { size: "xl" }), _jsx("p", { className: "font-text text-xs text-text-caption mt-2", children: "xl" })] })] })),
};
// ============================================
// Animation
// ============================================
export const AnimatedVsStatic = {
    name: "Animovany vs Staticky",
    render: () => (_jsxs("div", { className: "flex items-center gap-6", children: [_jsxs("div", { className: "text-center", children: [_jsx(AiIcon, { size: "xl", animated: true }), _jsx("p", { className: "font-text text-xs text-text-caption mt-2", children: "Animated" })] }), _jsxs("div", { className: "text-center", children: [_jsx(AiIcon, { size: "xl", animated: false }), _jsx("p", { className: "font-text text-xs text-text-caption mt-2", children: "Static" })] })] })),
};
// ============================================
// Custom Colors
// ============================================
export const CustomColors = {
    name: "Vlastne farby",
    render: () => (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(AiIcon, { size: "lg" }), _jsx(AiIcon, { size: "lg", color: "#4338CA" }), _jsx(AiIcon, { size: "lg", color: "#A78BFA" }), _jsx(AiIcon, { size: "lg", color: "#221924" }), _jsx(AiIcon, { size: "lg", color: "#FFFFFF" })] })),
};
export const OnDarkBackground = {
    name: "Na tmavom pozadi",
    render: () => (_jsxs("div", { className: "bg-birne-black p-8 rounded-xl flex items-center gap-6", children: [_jsx(AiIcon, { size: "lg" }), _jsx(AiIcon, { size: "xl" }), _jsx(AiIcon, { size: "xl", color: "#FFFFFF" })] })),
};
// ============================================
// Use Cases
// ============================================
export const InlineWithText = {
    name: "Inline s textom",
    render: () => (_jsxs("div", { className: "space-y-3", children: [_jsxs("p", { className: "font-text text-sm flex items-center gap-1.5", children: [_jsx(AiIcon, { size: "sm" }), " AI-generated summary"] }), _jsxs("p", { className: "font-text text-base flex items-center gap-2", children: [_jsx(AiIcon, { size: "md" }), " AI-powered insights"] }), _jsxs("h3", { className: "font-display text-xl flex items-center gap-2", children: [_jsx(AiIcon, { size: "lg" }), " AI Analysis Report"] })] })),
};
