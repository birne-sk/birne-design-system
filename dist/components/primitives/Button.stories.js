import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "./Button";
const ArrowRight = () => (_jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: _jsx("path", { d: "M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const TrashIcon = () => (_jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: _jsx("path", { d: "M2.5 4.5H13.5M5.5 4.5V3.5C5.5 2.95 5.95 2.5 6.5 2.5H9.5C10.05 2.5 10.5 2.95 10.5 3.5V4.5M6.5 7.5V11.5M9.5 7.5V11.5M3.5 4.5L4.5 13C4.5 13.55 4.95 14 5.5 14H10.5C11.05 14 11.5 13.55 11.5 13L12.5 4.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }));
const MailIcon = () => (_jsxs("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", children: [_jsx("rect", { x: "2", y: "3.5", width: "12", height: "9", rx: "1.5", stroke: "currentColor", strokeWidth: "1.5" }), _jsx("path", { d: "M2 5L8 9L14 5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }));
const meta = {
    title: "Primitives/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["primary", "secondary", "soft", "destructive", "ghost", "link"],
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg", "icon"],
        },
    },
};
export default meta;
// ============================================
// Farby buttonov
// ============================================
export const Primary = {
    args: {
        children: "Primary",
        variant: "primary",
    },
};
export const Secondary = {
    args: {
        children: "Secondary",
        variant: "secondary",
    },
};
export const Soft = {
    args: {
        children: "Soft",
        variant: "soft",
    },
};
export const Destructive = {
    args: {
        children: "Destructive",
        variant: "destructive",
    },
};
export const Ghost = {
    args: {
        children: "Ghost",
        variant: "ghost",
    },
};
export const AllColors = {
    name: "Farby buttonov",
    render: () => (_jsxs("div", { className: "flex items-center gap-6", children: [_jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsx(Button, { variant: "primary", children: "Primary" }), _jsxs("span", { className: "font-text text-xs text-text-caption text-center", children: ["Birne Lemon fill", _jsx("br", {}), "+ Birne Black stroke"] })] }), _jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsx(Button, { variant: "secondary", children: "Secondary" }), _jsxs("span", { className: "font-text text-xs text-text-caption text-center", children: ["Birne Black fill", _jsx("br", {}), "+ Birne Purple text"] })] }), _jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsx(Button, { variant: "soft", children: "Soft" }), _jsxs("span", { className: "font-text text-xs text-text-caption text-center", children: ["Birne Off-White fill", _jsx("br", {}), "+ Birne Black stroke"] })] }), _jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsx(Button, { variant: "destructive", children: "Destructive" }), _jsxs("span", { className: "font-text text-xs text-text-caption text-center", children: ["Danger soft fill", _jsx("br", {}), "+ stroke"] })] })] })),
};
// ============================================
// Varianty
// ============================================
export const TextOnly = {
    name: "Text only",
    args: {
        children: "Text only",
        variant: "primary",
    },
};
export const WithIconLeft = {
    name: "S ikonkou",
    args: {
        children: "S ikonkou",
        variant: "primary",
        iconLeft: _jsx(MailIcon, {}),
    },
};
export const WithArrow = {
    name: "Text so šípkou",
    args: {
        children: "Text so šípkou",
        variant: "secondary",
        iconRight: _jsx(ArrowRight, {}),
    },
};
export const IconOnly = {
    name: "Icon (40×40)",
    args: {
        children: _jsx(ArrowRight, {}),
        variant: "primary",
        size: "icon",
        "aria-label": "Next",
    },
};
export const LinkButton = {
    name: "Link button",
    render: () => (_jsxs(Button, { variant: "link", children: ["Link button ", _jsx(ArrowRight, {})] })),
};
export const AllVariants = {
    name: "Varianty",
    render: () => (_jsxs("div", { className: "flex items-center gap-6", children: [_jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsx(Button, { variant: "primary", children: "Text only" }), _jsx("span", { className: "font-text text-xs text-text-caption", children: "Iba text" })] }), _jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsx(Button, { variant: "primary", iconLeft: _jsx(MailIcon, {}), children: "S ikonkou" }), _jsx("span", { className: "font-text text-xs text-text-caption", children: "Ikonka + text" })] }), _jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsx(Button, { variant: "secondary", iconRight: _jsx(ArrowRight, {}), children: "Text so \u0161\u00EDpkou" }), _jsx("span", { className: "font-text text-xs text-text-caption", children: "Text + \u0161\u00EDpka" })] }), _jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsx(Button, { variant: "primary", size: "icon", "aria-label": "Next", children: _jsx(ArrowRight, {}) }), _jsx("span", { className: "font-text text-xs text-text-caption", children: "Icon (40\u00D740)" })] }), _jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsxs(Button, { variant: "link", children: ["Link button ", _jsx(ArrowRight, {})] }), _jsx("span", { className: "font-text text-xs text-text-caption", children: "Text link so \u0161\u00EDpkou" })] })] })),
};
// ============================================
// So šípkou — všetky farby
// ============================================
export const ArrowButtons = {
    name: "So šípkou — všetky farby",
    render: () => (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Button, { variant: "primary", iconRight: _jsx(ArrowRight, {}), children: "Zobrazi\u0165 anal\u00FDzu" }), _jsx(Button, { variant: "secondary", iconRight: _jsx(ArrowRight, {}), children: "Pokra\u010Dova\u0165" }), _jsx(Button, { variant: "soft", iconRight: _jsx(ArrowRight, {}), children: "Viac inform\u00E1ci\u00ED" })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Button, { variant: "primary", size: "sm", iconRight: _jsx(ArrowRight, {}), children: "Small" }), _jsx(Button, { variant: "primary", size: "md", iconRight: _jsx(ArrowRight, {}), children: "Medium" }), _jsx(Button, { variant: "primary", size: "lg", iconRight: _jsx(ArrowRight, {}), children: "Large" })] })] })),
};
export const CTAExamples = {
    name: "CTA príklady",
    render: () => (_jsxs("div", { className: "flex flex-col gap-4 items-start", children: [_jsx(Button, { variant: "primary", iconRight: _jsx(ArrowRight, {}), children: "Zobrazi\u0165 anal\u00FDzu" }), _jsx(Button, { variant: "primary", iconRight: _jsx(ArrowRight, {}), children: "Spusti\u0165 anal\u00FDzu" }), _jsx(Button, { variant: "secondary", iconRight: _jsx(ArrowRight, {}), children: "Kontaktova\u0165 n\u00E1s" }), _jsx(Button, { variant: "secondary", iconRight: _jsx(ArrowRight, {}), children: "Pozrie\u0165 v\u00FDsledky" }), _jsx(Button, { variant: "soft", iconRight: _jsx(ArrowRight, {}), children: "Stiahnu\u0165 PDF" }), _jsxs(Button, { variant: "link", children: ["Zobrazi\u0165 v\u0161etko ", _jsx(ArrowRight, {})] })] })),
};
// ============================================
// Destructive
// ============================================
export const DestructiveVariants = {
    name: "Destructive varianty",
    render: () => (_jsxs("div", { className: "flex items-center gap-6", children: [_jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsx(Button, { variant: "destructive", children: "Odstr\u00E1ni\u0165" }), _jsx("span", { className: "font-text text-xs text-text-caption", children: "Text only" })] }), _jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsx(Button, { variant: "destructive", size: "icon", "aria-label": "Delete", children: _jsx(TrashIcon, {}) }), _jsx("span", { className: "font-text text-xs text-text-caption", children: "Icon" })] }), _jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsx(Button, { variant: "destructive", iconLeft: _jsx(TrashIcon, {}), children: "Odstr\u00E1ni\u0165" }), _jsx("span", { className: "font-text text-xs text-text-caption", children: "Ikonka + text" })] })] })),
};
// ============================================
// Veľkosti
// ============================================
export const Sizes = {
    render: () => (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Button, { size: "sm", children: "Small" }), _jsx(Button, { size: "md", children: "Medium" }), _jsx(Button, { size: "lg", children: "Large" }), _jsx(Button, { size: "icon", "aria-label": "Next", children: _jsx(ArrowRight, {}) })] })),
};
// ============================================
// Stavy
// ============================================
export const Disabled = {
    args: {
        children: "Disabled",
        disabled: true,
    },
};
export const DisabledAll = {
    name: "Disabled states",
    render: () => (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Button, { variant: "primary", disabled: true, children: "Primary" }), _jsx(Button, { variant: "secondary", disabled: true, children: "Secondary" }), _jsx(Button, { variant: "soft", disabled: true, children: "Soft" }), _jsx(Button, { variant: "destructive", disabled: true, children: "Destructive" })] })),
};
