import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Badge } from "./Badge";
import { ImageCard } from "./ImageCard";
import { Button } from "./Button";
import { Calendar, MapPin, Clock, Tag, CheckCircle, ArrowRight } from "lucide-react";
import { MOOD_PHOTOS } from "../lib/supabase";
const meta = {
    title: "Primitives/Badge",
    component: Badge,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: [
                "default", "purple", "lemon", "dark",
                "onDark", "onPurple", "onGray",
                "glass", "glassDark", "glassPurple", "glassLemon",
                "success", "warning", "destructive", "info"
            ],
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
    },
};
export default meta;
// ============================================
// Basic Variants
// ============================================
export const Default = {
    args: {
        children: "Badge",
    },
};
export const WithIcon = {
    args: {
        children: "19.2.2026",
        icon: _jsx(Calendar, { size: 12 }),
    },
};
export const SolidVariants = {
    render: () => (_jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(Badge, { variant: "default", children: "Default" }), _jsx(Badge, { variant: "purple", children: "Purple" }), _jsx(Badge, { variant: "lemon", children: "Lemon" }), _jsx(Badge, { variant: "dark", children: "Dark" })] })),
};
export const OnColoredBackgrounds = {
    name: "Na farebných pozadiach",
    render: () => (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex gap-2 p-4 bg-birne-purple rounded-lg", children: [_jsx(Badge, { variant: "onPurple", icon: _jsx(Calendar, { size: 12 }), children: "19.2.2026" }), _jsx(Badge, { variant: "onPurple", icon: _jsx(MapPin, { size: 12 }), children: "Bratislava" })] }), _jsxs("div", { className: "flex gap-2 p-4 bg-birne-black rounded-lg", children: [_jsx(Badge, { variant: "onDark", icon: _jsx(Calendar, { size: 12 }), children: "19.2.2026" }), _jsx(Badge, { variant: "onDark", icon: _jsx(MapPin, { size: 12 }), children: "Bratislava" })] }), _jsxs("div", { className: "flex gap-2 p-4 bg-birne-black-5 rounded-lg", children: [_jsx(Badge, { variant: "onGray", icon: _jsx(Calendar, { size: 12 }), children: "19.2.2026" }), _jsx(Badge, { variant: "onGray", icon: _jsx(MapPin, { size: 12 }), children: "Bratislava" })] })] })),
};
export const StatusVariants = {
    render: () => (_jsxs("div", { className: "flex flex-wrap gap-2", children: [_jsx(Badge, { variant: "success", icon: _jsx(CheckCircle, { size: 12 }), children: "Success" }), _jsx(Badge, { variant: "warning", children: "Warning" }), _jsx(Badge, { variant: "destructive", children: "Error" }), _jsx(Badge, { variant: "info", children: "Info" })] })),
};
export const Sizes = {
    render: () => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Badge, { size: "sm", children: "Small" }), _jsx(Badge, { size: "md", children: "Medium" }), _jsx(Badge, { size: "lg", children: "Large" })] })),
};
// ============================================
// Glass Variants (for different backgrounds)
// ============================================
export const GlassOnPhoto = {
    name: "Glass - Na fotke",
    render: () => (_jsx(ImageCard, { src: MOOD_PHOTOS.dec2025_003, aspectRatio: "video", overlay: "none", contentPosition: "top-left", className: "max-w-lg", children: _jsxs("div", { className: "flex gap-2", children: [_jsx(Badge, { variant: "glass", icon: _jsx(Calendar, { size: 12 }), children: "19.2.2026" }), _jsx(Badge, { variant: "glass", icon: _jsx(MapPin, { size: 12 }), children: "Bratislava" })] }) })),
};
export const OnGrayBackground = {
    name: "Na sivom pozadí",
    render: () => (_jsxs("div", { className: "bg-birne-black-5 p-8 rounded-xl max-w-lg", children: [_jsxs("div", { className: "flex gap-2 mb-4", children: [_jsx(Badge, { variant: "onGray", icon: _jsx(Calendar, { size: 12 }), children: "19.2.2026" }), _jsx(Badge, { variant: "onGray", icon: _jsx(MapPin, { size: 12 }), children: "Bratislava" })] }), _jsx("h3", { className: "font-display text-2xl text-birne-black mb-2", children: "4 hodiny, ktor\u00E9 v\u00E1m u\u0161etria \u010Fal\u0161ie desiatky hod\u00EDn mesa\u010Dne" }), _jsxs(Button, { variant: "primary", className: "mt-4", children: ["V ponuke na birne.sk ", _jsx(ArrowRight, { size: 16 })] })] })),
};
export const OnDarkBackground = {
    name: "Na tmavom pozadí",
    render: () => (_jsxs("div", { className: "bg-birne-black p-8 rounded-xl max-w-lg", children: [_jsxs("div", { className: "flex gap-2 mb-4", children: [_jsx(Badge, { variant: "onDark", icon: _jsx(Calendar, { size: 12 }), children: "19.2.2026" }), _jsx(Badge, { variant: "onDark", icon: _jsx(MapPin, { size: 12 }), children: "Bratislava" })] }), _jsx("h3", { className: "font-display text-2xl text-white mb-2", children: "4 hodiny, ktor\u00E9 v\u00E1m u\u0161etria \u010Fal\u0161ie desiatky hod\u00EDn mesa\u010Dne" }), _jsxs(Button, { variant: "primary", className: "mt-4", children: ["V ponuke na birne.sk ", _jsx(ArrowRight, { size: 16 })] })] })),
};
export const OnPurpleBackground = {
    name: "Na fialovom pozadí",
    render: () => (_jsxs("div", { className: "bg-birne-purple p-8 rounded-xl max-w-lg", children: [_jsxs("div", { className: "flex gap-2 mb-4", children: [_jsx(Badge, { variant: "onPurple", icon: _jsx(Calendar, { size: 12 }), children: "19.2.2026" }), _jsx(Badge, { variant: "onPurple", icon: _jsx(MapPin, { size: 12 }), children: "Bratislava" })] }), _jsx("h3", { className: "font-display text-2xl text-birne-black mb-2", children: "4 hodiny, ktor\u00E9 v\u00E1m u\u0161etria \u010Fal\u0161ie desiatky hod\u00EDn mesa\u010Dne" }), _jsxs(Button, { variant: "primary", className: "mt-4", children: ["V ponuke na birne.sk ", _jsx(ArrowRight, { size: 16 })] })] })),
};
// ============================================
// Real-World Examples
// ============================================
export const EventCard = {
    name: "Príklad: Event karta",
    render: () => (_jsx(ImageCard, { src: MOOD_PHOTOS.dec2025_006, height: 500, overlay: "gradient", contentPosition: "top-left", className: "max-w-2xl", children: _jsxs("div", { className: "flex flex-col justify-between h-full", children: [_jsxs("div", { className: "flex gap-2", children: [_jsx(Badge, { variant: "glass", size: "lg", icon: _jsx(Calendar, { size: 14 }), children: "19.2.2026" }), _jsx(Badge, { variant: "glass", size: "lg", icon: _jsx(MapPin, { size: 14 }), children: "Bratislava" })] }), _jsxs("div", { children: [_jsx("h2", { className: "font-display text-3xl text-white mb-4", children: "4 hodiny, ktor\u00E9 v\u00E1m u\u0161etria \u010Fal\u0161ie desiatky hod\u00EDn mesa\u010Dne" }), _jsxs(Button, { variant: "primary", size: "lg", children: ["V ponuke na birne.sk ", _jsx(ArrowRight, { size: 18 })] })] })] }) })),
};
export const CourseProgram = {
    name: "Príklad: Program kurzu",
    render: () => (_jsxs("div", { className: "bg-[#1a1520] p-8 rounded-xl max-w-2xl", children: [_jsx("h2", { className: "font-display text-3xl text-white mb-8", children: "Program kurzu" }), _jsx("div", { className: "grid grid-cols-2 gap-4", children: [
                    { title: "Produktivita s Claude", desc: "Workflow, vďaka ktorému ušetríte desiatky hodín mesačne." },
                    { title: "Weby na Lovable", desc: "Postavte web bez kódu, ktorý spĺňa trhové štandardy." },
                    { title: "Generatívna kreatíva", desc: "Node-based nástroje na vizuály, ktoré vyzerajú konzistentne." },
                    { title: "Marketingová analýza", desc: "Automatizovaný zber dát zo sociálnych sietí a prehľad o trhu." },
                ].map((item, i) => (_jsxs("div", { className: "bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10", children: [_jsx(Badge, { variant: "onDark", size: "md", icon: _jsx(Clock, { size: 12 }), className: "mb-3", children: "60 min\u00FAt" }), _jsx("h3", { className: "font-display text-lg text-white mb-2", children: item.title }), _jsx("p", { className: "font-text text-sm text-white/60", children: item.desc })] }, i))) })] })),
};
// ============================================
// Guidelines
// ============================================
export const Guidelines = {
    name: "Pravidlá použitia",
    render: () => (_jsxs("div", { className: "space-y-8 max-w-3xl", children: [_jsxs("div", { children: [_jsx("h3", { className: "font-display text-xl mb-4", children: "Kedy pou\u017Ei\u0165 ktor\u00FD variant" }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full font-text text-sm", children: [_jsx("thead", { children: _jsxs("tr", { className: "border-b border-border", children: [_jsx("th", { className: "text-left py-2 pr-4", children: "Pozadie" }), _jsx("th", { className: "text-left py-2 pr-4", children: "Variant" }), _jsx("th", { className: "text-left py-2", children: "Pr\u00EDklad" })] }) }), _jsxs("tbody", { children: [_jsxs("tr", { className: "border-b border-border", children: [_jsx("td", { className: "py-3 pr-4", children: "Biele/svetl\u00E9" }), _jsxs("td", { className: "py-3 pr-4", children: [_jsx("code", { children: "default" }), ", ", _jsx("code", { children: "purple" }), ", ", _jsx("code", { children: "lemon" })] }), _jsx("td", { className: "py-3", children: _jsx(Badge, { variant: "default", children: "Badge" }) })] }), _jsxs("tr", { className: "border-b border-border", children: [_jsx("td", { className: "py-3 pr-4", children: "Fotka" }), _jsx("td", { className: "py-3 pr-4", children: _jsx("code", { children: "glass" }) }), _jsx("td", { className: "py-3", children: _jsx(Badge, { variant: "glass", icon: _jsx(Calendar, { size: 12 }), children: "19.2.2026" }) })] }), _jsxs("tr", { className: "border-b border-border", children: [_jsx("td", { className: "py-3 pr-4", children: "Tmav\u00E9" }), _jsx("td", { className: "py-3 pr-4", children: _jsx("code", { children: "onDark" }) }), _jsx("td", { className: "py-3 bg-birne-black px-2 rounded", children: _jsx(Badge, { variant: "onDark", children: "Badge" }) })] }), _jsxs("tr", { className: "border-b border-border", children: [_jsx("td", { className: "py-3 pr-4", children: "Fialov\u00E9" }), _jsx("td", { className: "py-3 pr-4", children: _jsx("code", { children: "onPurple" }) }), _jsx("td", { className: "py-3 bg-birne-purple px-2 rounded", children: _jsx(Badge, { variant: "onPurple", children: "Badge" }) })] }), _jsxs("tr", { children: [_jsx("td", { className: "py-3 pr-4", children: "Siv\u00E9" }), _jsx("td", { className: "py-3 pr-4", children: _jsx("code", { children: "onGray" }) }), _jsx("td", { className: "py-3 bg-birne-black-5 px-2 rounded", children: _jsx(Badge, { variant: "onGray", children: "Badge" }) })] })] })] }) })] }), _jsxs("div", { children: [_jsx("h3", { className: "font-display text-xl mb-4", children: "Ikony" }), _jsxs("div", { className: "flex flex-wrap gap-3", children: [_jsx(Badge, { icon: _jsx(Calendar, { size: 12 }), children: "D\u00E1tum" }), _jsx(Badge, { icon: _jsx(MapPin, { size: 12 }), children: "Lok\u00E1cia" }), _jsx(Badge, { icon: _jsx(Clock, { size: 12 }), children: "Trvanie" }), _jsx(Badge, { icon: _jsx(Tag, { size: 12 }), children: "Kateg\u00F3ria" }), _jsx(Badge, { variant: "success", icon: _jsx(CheckCircle, { size: 12 }), children: "Status" })] })] }), _jsxs("div", { className: "bg-birne-sand-40 p-6 rounded-lg", children: [_jsx("h4", { className: "font-display text-lg mb-3", children: "Best Practices" }), _jsxs("ul", { className: "space-y-2 font-text text-sm", children: [_jsxs("li", { children: ["\u2713 Pou\u017E\u00EDvaj ", _jsx("code", { children: "glass" }), " variant na fotk\u00E1ch pre lep\u0161iu \u010Ditate\u013Enos\u0165"] }), _jsx("li", { children: "\u2713 Pridaj ikonu pre lep\u0161iu identifik\u00E1ciu typu inform\u00E1cie" }), _jsx("li", { children: "\u2713 Kombinuj maxim\u00E1lne 2-3 badges ved\u013Ea seba" }), _jsx("li", { children: "\u2713 Pou\u017E\u00EDvaj konzistentn\u00E9 ve\u013Ekosti v r\u00E1mci jedn\u00E9ho kontextu" }), _jsxs("li", { children: ["\u2717 Nepou\u017E\u00EDvaj ", _jsx("code", { children: "default" }), " variant na tmavom pozad\u00ED"] }), _jsx("li", { children: "\u2717 Ned\u00E1vaj pr\u00EDli\u0161 dlh\u00FD text do badge" })] })] })] })),
};
