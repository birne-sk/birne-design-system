import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardFooter } from "./Card";
import { ContentStack } from "./ContentStack";
import { Heading, Text, Eyebrow } from "./Typography";
import { Button } from "./Button";
const meta = {
    title: "Primitives/Card",
    component: Card,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "dark", "purple", "outline", "ghost"],
        },
        padding: {
            control: "select",
            options: ["none", "sm", "md", "lg"],
        },
    },
};
export default meta;
export const Default = {
    render: () => (_jsx(Card, { variant: "default", style: { width: 360 }, children: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Eyebrow, { children: "Kateg\u00F3ria" }), _jsx(Heading, { level: "h4", children: "Nadpis karty" }), _jsx(Text, { size: "sm", children: "Popisn\u00FD text, ktor\u00FD vysvet\u013Euje obsah karty podrobnej\u0161ie." })] }) })),
};
export const WithFooter = {
    render: () => (_jsxs(Card, { variant: "default", style: { width: 360 }, children: [_jsxs(ContentStack, { spacing: "tight", children: [_jsx(Heading, { level: "h4", children: "Card Title" }), _jsx(Text, { size: "sm", children: "Card description or subtitle goes here." }), _jsx(Text, { size: "base", children: "This is the main content of the card. It can contain any elements." })] }), _jsx(CardFooter, { children: _jsx(Button, { variant: "link", size: "sm", children: "View details" }) })] })),
};
export const StatCard = {
    render: () => (_jsx(Card, { variant: "default", style: { width: 200 }, children: _jsxs("div", { className: "text-center", children: [_jsx(Heading, { level: "h3", className: "text-text-heading", children: "1,234" }), _jsx(Text, { size: "xs", variant: "caption", children: "Followers" })] }) })),
};
export const DarkCard = {
    render: () => (_jsx(Card, { variant: "dark", style: { width: 360 }, children: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Eyebrow, { className: "text-white/40", children: "Kateg\u00F3ria" }), _jsx(Heading, { level: "h4", className: "text-birne-lemon", children: "Nadpis karty" }), _jsx(Text, { size: "sm", className: "text-white/60", children: "Popisn\u00FD text, ktor\u00FD vysvet\u013Euje obsah karty podrobnej\u0161ie." })] }) })),
};
export const PurpleCard = {
    render: () => (_jsx(Card, { variant: "purple", style: { width: 360 }, children: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Eyebrow, { children: "Kateg\u00F3ria" }), _jsx(Heading, { level: "h4", children: "Nadpis karty" }), _jsx(Text, { size: "sm", children: "Popisn\u00FD text, ktor\u00FD vysvet\u013Euje obsah karty podrobnej\u0161ie." })] }) })),
};
export const OutlineCard = {
    render: () => (_jsx(Card, { variant: "outline", style: { width: 360 }, children: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Eyebrow, { children: "Kateg\u00F3ria" }), _jsx(Heading, { level: "h4", children: "Nadpis karty" }), _jsx(Text, { size: "sm", children: "Popisn\u00FD text, ktor\u00FD vysvet\u013Euje obsah karty podrobnej\u0161ie." })] }) })),
};
export const AllVariants = {
    name: "Všetky pozadia",
    render: () => (_jsxs("div", { className: "flex flex-wrap gap-4", children: [_jsx(Card, { variant: "default", style: { width: 240 }, children: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Eyebrow, { children: "Default" }), _jsx(Heading, { level: "h5", children: "Birne Black 2" }), _jsx(Text, { size: "sm", children: "Z\u00E1kladn\u00E9 pozadie karty." })] }) }), _jsx(Card, { variant: "dark", style: { width: 240 }, children: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Eyebrow, { className: "text-white/40", children: "Dark" }), _jsx(Heading, { level: "h5", className: "text-birne-lemon", children: "Birne Black" }), _jsx(Text, { size: "sm", className: "text-white/60", children: "Tmav\u00E9 pozadie." })] }) }), _jsx(Card, { variant: "purple", style: { width: 240 }, children: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Eyebrow, { children: "Purple" }), _jsx(Heading, { level: "h5", children: "Birne Purple 40" }), _jsx(Text, { size: "sm", children: "Fialov\u00E9 pozadie." })] }) }), _jsx(Card, { variant: "outline", style: { width: 240 }, children: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Eyebrow, { children: "Outline" }), _jsx(Heading, { level: "h5", children: "Transparent + border" }), _jsx(Text, { size: "sm", children: "Len obrys." })] }) }), _jsx(Card, { variant: "ghost", style: { width: 240 }, children: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Eyebrow, { children: "Ghost" }), _jsx(Heading, { level: "h5", children: "Transparent" }), _jsx(Text, { size: "sm", children: "Bez pozadia." })] }) })] })),
};
export const PaddingSizes = {
    render: () => (_jsxs("div", { className: "flex gap-4", children: [_jsx(Card, { variant: "default", padding: "sm", style: { width: 200 }, children: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Heading, { level: "h6", children: "Small" }), _jsx(Text, { size: "sm", children: "padding: 16px" })] }) }), _jsx(Card, { variant: "default", padding: "md", style: { width: 200 }, children: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Heading, { level: "h6", children: "Medium" }), _jsx(Text, { size: "sm", children: "padding: 24px" })] }) }), _jsx(Card, { variant: "default", padding: "lg", style: { width: 200 }, children: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Heading, { level: "h6", children: "Large" }), _jsx(Text, { size: "sm", children: "padding: 32px" })] }) })] })),
};
