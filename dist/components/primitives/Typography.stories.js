import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Heading, Text, Eyebrow, Label } from "./Typography";
import { ContentStack } from "./ContentStack";
const meta = {
    title: "Primitives/Typography",
    component: Heading,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};
export default meta;
export const Headings = {
    name: "Headings — Conforto Regular",
    render: () => (_jsxs("div", { className: "space-y-4", children: [_jsx(Heading, { level: "h1", children: "Heading 1 \u2014 48px" }), _jsx(Heading, { level: "h2", children: "Heading 2 \u2014 34px" }), _jsx(Heading, { level: "h3", children: "Heading 3 \u2014 28px" }), _jsx(Heading, { level: "h4", children: "Heading 4 \u2014 24px" }), _jsx(Heading, { level: "h5", children: "Heading 5 \u2014 21px" }), _jsx(Heading, { level: "h6", children: "Heading 6 \u2014 19px" })] })),
};
export const BodyText = {
    name: "Body Text — General Sans",
    render: () => (_jsxs("div", { className: "space-y-3", children: [_jsx(Text, { size: "xl", children: "Text XL \u2014 21px" }), _jsx(Text, { size: "lg", children: "Text LG \u2014 19px" }), _jsx(Text, { size: "md", children: "Text MD \u2014 17px" }), _jsx(Text, { size: "base", children: "Text Base \u2014 15px (default)" }), _jsx(Text, { size: "sm", children: "Text SM \u2014 13px" }), _jsx(Text, { size: "xs", children: "Text XS \u2014 11px" })] })),
};
export const TextVariants = {
    name: "Text Variants — General Sans",
    render: () => (_jsxs("div", { className: "space-y-2", children: [_jsx(Text, { variant: "heading", children: "Heading \u2014 #221924" }), _jsx(Text, { variant: "body", children: "Body \u2014 #716B74" }), _jsx(Text, { variant: "caption", children: "Caption \u2014 #A09BA3" })] })),
};
export const TextWeights = {
    name: "Text Weights — General Sans",
    render: () => (_jsxs("div", { className: "space-y-2", children: [_jsx(Text, { weight: "light", children: "Light weight \u2014 300" }), _jsx(Text, { weight: "regular", children: "Regular weight \u2014 400" }), _jsx(Text, { weight: "medium", children: "Medium weight \u2014 500" }), _jsx(Text, { weight: "semibold", children: "Semibold weight \u2014 600" }), _jsx(Text, { weight: "bold", children: "Bold weight \u2014 700" })] })),
};
export const EyebrowText = {
    name: "Eyebrow — JetBrains Mono",
    render: () => (_jsxs("div", { className: "space-y-4", children: [_jsx(Eyebrow, { children: "Nov\u00E1 funkcia" }), _jsx(Eyebrow, { children: "Anal\u00FDza konkurencie" }), _jsx(Eyebrow, { children: "Aktualizovan\u00E9 12. feb 2025" })] })),
};
export const Labels = {
    name: "Labels — General Sans",
    render: () => (_jsxs("div", { className: "space-y-3", children: [_jsx("div", { children: _jsx(Label, { children: "Vyberte krajinu" }) }), _jsx("div", { children: _jsx(Label, { children: "K\u013E\u00FA\u010Dov\u00E9 slov\u00E1" }) }), _jsx("div", { children: _jsx(Label, { children: "Email" }) })] })),
};
export const TypographyComposition = {
    name: "Kompozícia — ContentStack",
    render: () => (_jsxs(ContentStack, { className: "max-w-lg", children: [_jsx(Eyebrow, { children: "Competitors Analysis" }), _jsx(Heading, { level: "h1", children: "Share of Search" }), _jsx(Text, { size: "md", variant: "body", children: "Porovnajte si svoju poz\u00EDciu na trhu oproti konkurencii. Zadajte k\u013E\u00FA\u010Dov\u00E9 slov\u00E1 a vyberte krajinu." }), _jsxs(Text, { size: "sm", variant: "caption", children: ["Posledn\u00FDch 30 dn\u00ED ", _jsx("span", { className: "px-2", children: "\u2022" }), " Aktualizovan\u00E9 dnes"] })] })),
};
export const ContentStackSpacings = {
    name: "ContentStack — porovnanie",
    render: () => (_jsxs("div", { className: "flex gap-12", children: [_jsxs("div", { children: [_jsx(Text, { size: "sm", variant: "caption", className: "mb-4", children: "Tight" }), _jsxs(ContentStack, { spacing: "tight", className: "max-w-sm", children: [_jsx(Eyebrow, { children: "Kateg\u00F3ria" }), _jsx(Heading, { level: "h3", children: "Nadpis sekcie" }), _jsx(Text, { size: "base", children: "Popisn\u00FD text, ktor\u00FD vysvet\u013Euje obsah sekcie podrobnej\u0161ie." }), _jsxs(Text, { size: "sm", variant: "caption", children: ["Metadata ", _jsx("span", { className: "px-2", children: "\u2022" }), " D\u00E1tum"] })] })] }), _jsxs("div", { children: [_jsx(Text, { size: "sm", variant: "caption", className: "mb-4", children: "Default" }), _jsxs(ContentStack, { className: "max-w-sm", children: [_jsx(Eyebrow, { children: "Kateg\u00F3ria" }), _jsx(Heading, { level: "h3", children: "Nadpis sekcie" }), _jsx(Text, { size: "base", children: "Popisn\u00FD text, ktor\u00FD vysvet\u013Euje obsah sekcie podrobnej\u0161ie." }), _jsxs(Text, { size: "sm", variant: "caption", children: ["Metadata ", _jsx("span", { className: "px-2", children: "\u2022" }), " D\u00E1tum"] })] })] }), _jsxs("div", { children: [_jsx(Text, { size: "sm", variant: "caption", className: "mb-4", children: "Loose" }), _jsxs(ContentStack, { spacing: "loose", className: "max-w-sm", children: [_jsx(Eyebrow, { children: "Kateg\u00F3ria" }), _jsx(Heading, { level: "h3", children: "Nadpis sekcie" }), _jsx(Text, { size: "base", children: "Popisn\u00FD text, ktor\u00FD vysvet\u013Euje obsah sekcie podrobnej\u0161ie." }), _jsxs(Text, { size: "sm", variant: "caption", children: ["Metadata ", _jsx("span", { className: "px-2", children: "\u2022" }), " D\u00E1tum"] })] })] })] })),
};
