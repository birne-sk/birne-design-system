import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AiGlow } from "./AiGlow";
import { AiIcon } from "./AiIcon";
import { Card } from "./Card";
import { Button } from "./Button";
import { IconCircle } from "./IconCircle";
import { Sparkles } from "lucide-react";
const meta = {
    title: "AI/AiGlow",
    component: AiGlow,
    tags: ["autodocs"],
    argTypes: {
        intensity: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        animated: { control: "boolean" },
    },
};
export default meta;
// ============================================
// Basic
// ============================================
export const Default = {
    render: () => (_jsx("div", { className: "p-8", children: _jsx(AiGlow, { children: _jsx(Card, { padding: "md", children: _jsx("p", { className: "font-text text-sm", children: "Card with AI glow" }) }) }) })),
};
export const Intensities = {
    name: "Intenzity",
    render: () => (_jsxs("div", { className: "flex items-center gap-8 p-8", children: [_jsx(AiGlow, { intensity: "sm", children: _jsx(Card, { padding: "md", children: _jsx("p", { className: "font-text text-sm", children: "SM" }) }) }), _jsx(AiGlow, { intensity: "md", children: _jsx(Card, { padding: "md", children: _jsx("p", { className: "font-text text-sm", children: "MD" }) }) }), _jsx(AiGlow, { intensity: "lg", children: _jsx(Card, { padding: "md", children: _jsx("p", { className: "font-text text-sm", children: "LG" }) }) })] })),
};
export const Animated = {
    name: "Animovany",
    render: () => (_jsxs("div", { className: "flex items-center gap-8 p-8", children: [_jsx(AiGlow, { animated: true, children: _jsx(Card, { padding: "md", children: _jsx("p", { className: "font-text text-sm", children: "Pulsing glow" }) }) }), _jsx(AiGlow, { animated: true, intensity: "lg", children: _jsx(Card, { padding: "md", children: _jsx("p", { className: "font-text text-sm", children: "Pulsing LG" }) }) })] })),
};
// ============================================
// With other components
// ============================================
export const WithButton = {
    name: "S buttonom",
    render: () => (_jsxs("div", { className: "flex items-center gap-6 p-8", children: [_jsx(AiGlow, { intensity: "md", className: "rounded-lg", children: _jsxs(Button, { variant: "primary", children: [_jsx(Sparkles, { size: 16 }), "Generate with AI"] }) }), _jsx(AiGlow, { intensity: "lg", animated: true, className: "rounded-lg", children: _jsxs(Button, { variant: "secondary", children: [_jsx(Sparkles, { size: 16 }), "AI Analysis"] }) })] })),
};
export const WithIconCircle = {
    name: "S icon circle",
    render: () => (_jsxs("div", { className: "flex items-center gap-6 p-8", children: [_jsx(AiGlow, { intensity: "md", className: "rounded-full", children: _jsx(IconCircle, { variant: "purple", size: "lg", children: _jsx(AiIcon, { size: "md" }) }) }), _jsx(AiGlow, { intensity: "lg", animated: true, className: "rounded-full", children: _jsx(IconCircle, { variant: "purple", size: "xl", children: _jsx(AiIcon, { size: "lg" }) }) })] })),
};
// ============================================
// Overview
// ============================================
export const OnDark = {
    name: "Na tmavom pozadi",
    render: () => (_jsxs("div", { className: "bg-birne-black p-8 rounded-xl flex items-center gap-8", children: [_jsx(AiGlow, { intensity: "md", children: _jsx(Card, { variant: "dark", padding: "md", children: _jsx("p", { className: "font-text text-sm text-white", children: "AI Insights" }) }) }), _jsx(AiGlow, { intensity: "lg", animated: true, className: "rounded-full", children: _jsx(IconCircle, { variant: "ghost", size: "xl", children: _jsx(AiIcon, { size: "lg" }) }) })] })),
};
