import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AiBadge } from "./AiBadge";
import { Card } from "./Card";
import { Sparkles, Zap, BrainCircuit, Wand2 } from "lucide-react";
const meta = {
    title: "AI/AiBadge",
    component: AiBadge,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["solid", "glow", "stroke"],
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        animated: { control: "boolean" },
        showIcon: { control: "boolean" },
    },
};
export default meta;
// ============================================
// Basic
// ============================================
export const Default = {
    args: {
        children: "AI Generated",
    },
};
export const Variants = {
    name: "Tri varianty",
    render: () => (_jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [_jsxs("div", { className: "text-center space-y-2", children: [_jsx(AiBadge, { variant: "solid", children: "AI Generated" }), _jsx("p", { className: "font-text text-xs text-text-caption", children: "solid" })] }), _jsxs("div", { className: "text-center space-y-2", children: [_jsx(AiBadge, { variant: "glow", children: "AI Generated" }), _jsx("p", { className: "font-text text-xs text-text-caption", children: "glow" })] }), _jsxs("div", { className: "text-center space-y-2", children: [_jsx(AiBadge, { variant: "stroke", children: "AI Generated" }), _jsx("p", { className: "font-text text-xs text-text-caption", children: "stroke" })] })] })),
};
export const Sizes = {
    render: () => (_jsx("div", { className: "space-y-4", children: ["solid", "glow", "stroke"].map((variant) => (_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(AiBadge, { variant: variant, size: "sm", children: "AI" }), _jsx(AiBadge, { variant: variant, size: "md", children: "AI Generated" }), _jsx(AiBadge, { variant: variant, size: "lg", children: "AI Generated" })] }, variant))) })),
};
// ============================================
// Animation
// ============================================
export const AnimatedVsStatic = {
    name: "Animovany vs Staticky",
    render: () => (_jsx("div", { className: "space-y-4", children: ["solid", "glow", "stroke"].map((variant) => (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(AiBadge, { variant: variant, animated: true, children: "Animated" }), _jsx(AiBadge, { variant: variant, animated: false, children: "Static" })] }, variant))) })),
};
// ============================================
// Custom Icons
// ============================================
export const CustomIcons = {
    name: "Vlastne ikony",
    render: () => (_jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [_jsx(AiBadge, { icon: _jsx(Sparkles, { size: 12 }), children: "Sparkles" }), _jsx(AiBadge, { icon: _jsx(Zap, { size: 12 }), children: "Lightning" }), _jsx(AiBadge, { icon: _jsx(BrainCircuit, { size: 12 }), children: "Brain" }), _jsx(AiBadge, { icon: _jsx(Wand2, { size: 12 }), children: "Magic" }), _jsx(AiBadge, { showIcon: false, children: "No icon" })] })),
};
// ============================================
// On backgrounds
// ============================================
export const OnDarkBackground = {
    name: "Na tmavom pozadi",
    render: () => (_jsxs("div", { className: "bg-birne-black p-8 rounded-xl flex flex-wrap items-center gap-4", children: [_jsx(AiBadge, { variant: "solid", children: "AI Generated" }), _jsx(AiBadge, { variant: "glow", children: "AI Insights" }), _jsx(AiBadge, { variant: "stroke", children: "AI Summary" })] })),
};
export const OnSandBackground = {
    name: "Na sand pozadi",
    render: () => (_jsxs("div", { className: "bg-birne-sand p-8 rounded-xl flex flex-wrap items-center gap-4", children: [_jsx(AiBadge, { variant: "solid", children: "AI Generated" }), _jsx(AiBadge, { variant: "glow", children: "AI Insights" }), _jsx(AiBadge, { variant: "stroke", children: "AI Summary" })] })),
};
// ============================================
// Real-world usage
// ============================================
export const InCard = {
    name: "V karte",
    render: () => (_jsxs(Card, { padding: "lg", className: "max-w-sm", children: [_jsxs("div", { className: "flex items-center justify-between mb-3", children: [_jsx("h3", { className: "font-display text-lg", children: "Market Analysis" }), _jsx(AiBadge, { variant: "stroke", size: "sm", children: "AI" })] }), _jsx("p", { className: "font-text text-sm text-text-body", children: "Based on analysis of 2,847 data points, your brand awareness increased by 23% in Q4 compared to Q3." })] })),
};
export const FeatureLabels = {
    name: "Feature labels",
    render: () => (_jsx("div", { className: "space-y-3 max-w-md", children: [
            { variant: "solid", label: "AI Summary", desc: "Automatic report summaries" },
            { variant: "glow", label: "AI Insights", desc: "Data-driven recommendations" },
            { variant: "stroke", label: "AI Generated", desc: "Auto-generated content" },
        ].map((item) => (_jsxs("div", { className: "flex items-center gap-3 p-3 rounded-lg border border-border", children: [_jsx(AiBadge, { size: "sm", variant: item.variant, children: item.label }), _jsx("span", { className: "font-text text-sm text-text-body", children: item.desc })] }, item.label))) })),
};
