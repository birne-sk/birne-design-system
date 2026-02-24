import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const meta = {
    title: "Tokens/Colors",
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};
export default meta;
const Swatch = ({ color, label, css }) => (_jsxs("div", { className: "flex flex-col items-center gap-1.5", children: [_jsx("div", { className: "w-16 h-16 rounded-md border border-birne-black-10", style: { backgroundColor: color } }), _jsx("span", { className: "font-text text-xs text-text-heading font-medium", children: label }), _jsx("span", { className: "font-mono text-[10px] text-text-caption", children: css })] }));
const ScaleRow = ({ name, shades }) => (_jsxs("div", { className: "mb-8", children: [_jsx("h3", { className: "font-display text-lg text-text-heading mb-3", children: name }), _jsx("div", { className: "flex flex-wrap gap-4", children: shades.map((s) => (_jsx(Swatch, { label: s.label, css: s.css, color: s.color }, s.label))) })] }));
export const BrandColors = {
    name: "Brand Colors",
    render: () => (_jsxs("div", { children: [_jsx(ScaleRow, { name: "Birne Black", shades: [
                    { label: "100", css: "--birne-black-100", color: "hsl(310, 18%, 12%)" },
                    { label: "80", css: "--birne-black-80", color: "hsl(310, 10%, 28%)" },
                    { label: "60", css: "--birne-black-60", color: "hsl(310, 6%, 45%)" },
                    { label: "40", css: "--birne-black-40", color: "hsl(310, 4%, 62%)" },
                    { label: "20", css: "--birne-black-20", color: "hsl(310, 4%, 80%)" },
                    { label: "10", css: "--birne-black-10", color: "hsl(310, 3%, 88%)" },
                    { label: "5", css: "--birne-black-5", color: "hsl(310, 2%, 94%)" },
                    { label: "2", css: "--birne-black-2", color: "hsl(310, 1%, 97%)" },
                ] }), _jsx(ScaleRow, { name: "Birne Purple", shades: [
                    { label: "100", css: "--birne-purple-100", color: "hsl(289, 54%, 80%)" },
                    { label: "80", css: "--birne-purple-80", color: "hsl(289, 54%, 85%)" },
                    { label: "60", css: "--birne-purple-60", color: "hsl(289, 54%, 90%)" },
                    { label: "40", css: "--birne-purple-40", color: "hsl(289, 54%, 93%)" },
                    { label: "20", css: "--birne-purple-20", color: "hsl(289, 54%, 96%)" },
                ] }), _jsx(ScaleRow, { name: "Birne Lemon", shades: [
                    { label: "100", css: "--birne-lemon-100", color: "hsl(61, 97%, 72%)" },
                    { label: "80", css: "--birne-lemon-80", color: "hsl(61, 97%, 77%)" },
                    { label: "60", css: "--birne-lemon-60", color: "hsl(61, 97%, 82%)" },
                    { label: "40", css: "--birne-lemon-40", color: "hsl(61, 97%, 87%)" },
                    { label: "20", css: "--birne-lemon-20", color: "hsl(61, 97%, 92%)" },
                ] })] })),
};
export const TextColors = {
    name: "Text Colors",
    render: () => (_jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "font-display text-lg text-text-heading mb-3", children: "Text Colors" }), _jsxs("div", { className: "flex flex-wrap gap-6", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 rounded-md", style: { backgroundColor: "#221924" } }), _jsxs("div", { children: [_jsx("p", { className: "font-text text-sm text-text-heading font-medium", children: "Heading" }), _jsx("p", { className: "font-mono text-[10px] text-text-caption", children: "#221924" })] })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 rounded-md", style: { backgroundColor: "#716B74" } }), _jsxs("div", { children: [_jsx("p", { className: "font-text text-sm text-text-heading font-medium", children: "Body" }), _jsx("p", { className: "font-mono text-[10px] text-text-caption", children: "#716B74" })] })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 rounded-md", style: { backgroundColor: "#A09BA3" } }), _jsxs("div", { children: [_jsx("p", { className: "font-text text-sm text-text-heading font-medium", children: "Caption" }), _jsx("p", { className: "font-mono text-[10px] text-text-caption", children: "#A09BA3" })] })] })] })] })),
};
export const UIColors = {
    name: "UI Colors",
    render: () => (_jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "font-display text-lg text-text-heading mb-3", children: "UI Colors" }), _jsxs("div", { className: "flex flex-wrap gap-6", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 rounded-md border border-birne-black-10", style: { backgroundColor: "#FFFFFF" } }), _jsxs("div", { children: [_jsx("p", { className: "font-text text-sm text-text-heading font-medium", children: "Background" }), _jsx("p", { className: "font-mono text-[10px] text-text-caption", children: "#FFFFFF" })] })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 rounded-md border border-birne-black-10", style: { backgroundColor: "#FFFFFF" } }), _jsxs("div", { children: [_jsx("p", { className: "font-text text-sm text-text-heading font-medium", children: "Surface" }), _jsx("p", { className: "font-mono text-[10px] text-text-caption", children: "#FFFFFF" })] })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 rounded-md", style: { backgroundColor: "#D1D1D6" } }), _jsxs("div", { children: [_jsx("p", { className: "font-text text-sm text-text-heading font-medium", children: "Border" }), _jsx("p", { className: "font-mono text-[10px] text-text-caption", children: "#D1D1D6" })] })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-10 h-10 rounded-md border border-birne-black-10", style: { backgroundColor: "#F5F5F7" } }), _jsxs("div", { children: [_jsx("p", { className: "font-text text-sm text-text-heading font-medium", children: "Hover" }), _jsx("p", { className: "font-mono text-[10px] text-text-caption", children: "#F5F5F7" })] })] })] })] })),
};
export const SemanticColors = {
    name: "Semantic Colors",
    render: () => (_jsxs("div", { className: "space-y-4", children: [_jsx("h3", { className: "font-display text-lg text-text-heading mb-3", children: "Semantic Colors" }), _jsxs("div", { className: "flex flex-wrap gap-6", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsxs("div", { className: "flex gap-1", children: [_jsx("div", { className: "w-10 h-10 rounded-md", style: { backgroundColor: "#22c55e" } }), _jsx("div", { className: "w-10 h-10 rounded-md", style: { backgroundColor: "#f0fdf4" } })] }), _jsxs("div", { children: [_jsx("p", { className: "font-text text-sm text-text-heading font-medium", children: "Success" }), _jsx("p", { className: "font-mono text-[10px] text-text-caption", children: "green-500 / green-50" })] })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsxs("div", { className: "flex gap-1", children: [_jsx("div", { className: "w-10 h-10 rounded-md", style: { backgroundColor: "#f59e0b" } }), _jsx("div", { className: "w-10 h-10 rounded-md", style: { backgroundColor: "#fffbeb" } })] }), _jsxs("div", { children: [_jsx("p", { className: "font-text text-sm text-text-heading font-medium", children: "Warning" }), _jsx("p", { className: "font-mono text-[10px] text-text-caption", children: "amber-500 / amber-50" })] })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsxs("div", { className: "flex gap-1", children: [_jsx("div", { className: "w-10 h-10 rounded-md", style: { backgroundColor: "#ef4444" } }), _jsx("div", { className: "w-10 h-10 rounded-md", style: { backgroundColor: "#fef2f2" } })] }), _jsxs("div", { children: [_jsx("p", { className: "font-text text-sm text-text-heading font-medium", children: "Destructive" }), _jsx("p", { className: "font-mono text-[10px] text-text-caption", children: "red-500 / red-50" })] })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsxs("div", { className: "flex gap-1", children: [_jsx("div", { className: "w-10 h-10 rounded-md", style: { backgroundColor: "#3b82f6" } }), _jsx("div", { className: "w-10 h-10 rounded-md", style: { backgroundColor: "#eff6ff" } })] }), _jsxs("div", { children: [_jsx("p", { className: "font-text text-sm text-text-heading font-medium", children: "Info" }), _jsx("p", { className: "font-mono text-[10px] text-text-caption", children: "blue-500 / blue-50" })] })] })] })] })),
};
