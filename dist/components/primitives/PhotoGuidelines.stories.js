import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ImageCard, ImageText } from "./ImageCard";
import { MOOD_PHOTOS } from "../lib/supabase";
/**
 * # Fotky a Text Guidelines
 *
 * Pravidlá pre používanie textu na fotkách v Birne Design System.
 *
 * ## Základné pravidlá
 *
 * 1. **Vždy používaj overlay** - text bez overlay je ťažko čitateľný
 * 2. **Gradient overlay je preferovaný** - vytvára prirodzený prechod
 * 3. **Drop shadow na texte** - zvyšuje čitateľnosť
 * 4. **Obmedzená paleta farieb** - biela, svetlá, tlmená
 *
 * ## Hierarchia textu na fotkách
 *
 * | Variant | Použitie | Font |
 * |---------|----------|------|
 * | `eyebrow` | Kategória, metadata | JetBrains Mono |
 * | `title` | Hlavný nadpis | Conforto |
 * | `subtitle` | Podnadpis | Conforto |
 * | `body` | Popisný text | General Sans |
 * | `caption` | Drobný text | General Sans |
 *
 * ## Farby textu
 *
 * | Farba | Opacity | Použitie |
 * |-------|---------|----------|
 * | `white` | 100% | Hlavné nadpisy |
 * | `light` | 90% | Sekundárny text |
 * | `muted` | 70% | Eyebrow, caption |
 * | `dark` | 100% | Na svetlom overlay |
 *
 * ## Overlay typy
 *
 * | Typ | Použitie |
 * |-----|----------|
 * | `gradient` | Default - text dole |
 * | `gradientTop` | Text hore |
 * | `dark` | Vela textu, tmavé pozadie |
 * | `medium` | Stredná čitateľnosť |
 * | `light` | Svetlý text (tmavý obsah) |
 * | `purple` | Brand highlight |
 */
const meta = {
    title: "Guidelines/Fotky a Text",
};
export default meta;
export const OverlayComparison = {
    name: "1. Overlay porovnanie",
    render: () => (_jsx("div", { className: "space-y-8", children: _jsxs("div", { children: [_jsx("h3", { className: "font-display text-xl mb-4", children: "Bez overlay vs. s overlay" }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs(ImageCard, { src: MOOD_PHOTOS.dec2025_003, aspectRatio: "video", overlay: "none", contentPosition: "bottom-left", children: [_jsx(ImageText, { variant: "subtitle", children: "Bez overlay" }), _jsx(ImageText, { variant: "body", children: "Text je \u0165a\u017Eko \u010Ditate\u013En\u00FD" })] }), _jsxs(ImageCard, { src: MOOD_PHOTOS.dec2025_003, aspectRatio: "video", overlay: "gradient", contentPosition: "bottom-left", children: [_jsx(ImageText, { variant: "subtitle", children: "S gradient overlay" }), _jsx(ImageText, { variant: "body", color: "light", children: "Text je \u010Ditate\u013En\u00FD" })] })] })] }) })),
};
export const TextHierarchy = {
    name: "2. Hierarchia textu",
    render: () => (_jsx("div", { className: "space-y-8", children: _jsx(ImageCard, { src: MOOD_PHOTOS.dec2025_006, height: 500, overlay: "gradient", contentPosition: "bottom-left", children: _jsxs("div", { className: "space-y-3", children: [_jsx(ImageText, { variant: "eyebrow", color: "muted", children: "1. EYEBROW \u2014 kateg\u00F3ria, metadata (mono, uppercase)" }), _jsx(ImageText, { variant: "title", as: "h1", children: "2. Title \u2014 hlavn\u00FD nadpis (Conforto, ve\u013Ek\u00FD)" }), _jsx(ImageText, { variant: "subtitle", as: "h2", children: "3. Subtitle \u2014 podnadpis (Conforto, stredn\u00FD)" }), _jsx(ImageText, { variant: "body", color: "light", children: "4. Body \u2014 popisn\u00FD text (General Sans, norm\u00E1lny)" }), _jsx(ImageText, { variant: "caption", color: "muted", children: "5. Caption \u2014 drobn\u00FD text, d\u00E1tumy (General Sans, mal\u00FD)" })] }) }) })),
};
export const ColorUsage = {
    name: "3. Použitie farieb",
    render: () => (_jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "space-y-4", children: [_jsx("h4", { className: "font-text text-sm font-medium", children: "Tmav\u00FD overlay (dark/gradient)" }), _jsxs(ImageCard, { src: MOOD_PHOTOS.dec2025_014, aspectRatio: "square", overlay: "dark", contentPosition: "center", children: [_jsx(ImageText, { variant: "subtitle", color: "white", children: "White (100%)" }), _jsx(ImageText, { variant: "body", color: "light", children: "Light (90%)" }), _jsx(ImageText, { variant: "caption", color: "muted", children: "Muted (70%)" })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h4", { className: "font-text text-sm font-medium", children: "Svetl\u00FD overlay" }), _jsxs(ImageCard, { src: MOOD_PHOTOS.dec2025_014, aspectRatio: "square", overlay: "light", contentPosition: "center", children: [_jsx(ImageText, { variant: "subtitle", color: "dark", children: "Dark (100%)" }), _jsx(ImageText, { variant: "body", color: "darkMuted", children: "Dark muted (70%)" })] })] })] })),
};
export const DropShadow = {
    name: "4. Drop shadow",
    render: () => (_jsxs("div", { className: "space-y-4", children: [_jsx("h4", { className: "font-text text-sm font-medium", children: "Shadow zvy\u0161uje \u010Ditate\u013Enos\u0165 na n\u00EDzkom kontraste" }), _jsx(ImageCard, { src: MOOD_PHOTOS.dec2025_027, aspectRatio: "wide", overlay: "medium", contentPosition: "center", children: _jsxs("div", { className: "flex gap-8", children: [_jsxs("div", { className: "text-center", children: [_jsx(ImageText, { variant: "subtitle", shadow: "none", children: "Bez shadow" }), _jsx(ImageText, { variant: "caption", shadow: "none", color: "muted", children: "shadow=\"none\"" })] }), _jsxs("div", { className: "text-center", children: [_jsx(ImageText, { variant: "subtitle", shadow: "sm", children: "Small shadow" }), _jsx(ImageText, { variant: "caption", shadow: "sm", color: "muted", children: "shadow=\"sm\"" })] }), _jsxs("div", { className: "text-center", children: [_jsx(ImageText, { variant: "subtitle", shadow: "md", children: "Medium shadow" }), _jsx(ImageText, { variant: "caption", shadow: "md", color: "muted", children: "shadow=\"md\" (default)" })] }), _jsxs("div", { className: "text-center", children: [_jsx(ImageText, { variant: "subtitle", shadow: "lg", children: "Large shadow" }), _jsx(ImageText, { variant: "caption", shadow: "lg", color: "muted", children: "shadow=\"lg\"" })] })] }) })] })),
};
export const CorrectUsage = {
    name: "5. Správne použitie",
    render: () => (_jsxs("div", { className: "space-y-8", children: [_jsx("h3", { className: "font-display text-xl", children: "Odpor\u00FA\u010Dan\u00E9 vzory" }), _jsxs("div", { className: "grid grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("span", { className: "font-text text-sm text-text-caption", children: "Case Study karta" }), _jsxs(ImageCard, { src: MOOD_PHOTOS.dec2025_030, aspectRatio: "video", overlay: "gradient", contentPosition: "bottom-left", children: [_jsx(ImageText, { variant: "eyebrow", color: "muted", children: "Pr\u00EDpadov\u00E1 \u0161t\u00FAdia" }), _jsx(ImageText, { variant: "subtitle", as: "h3", children: "N\u00E1zov projektu" }), _jsx(ImageText, { variant: "caption", color: "light", children: "Kr\u00E1tky popis" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("span", { className: "font-text text-sm text-text-caption", children: "Blog karta" }), _jsxs(ImageCard, { src: MOOD_PHOTOS.dec2025_033, aspectRatio: "video", overlay: "gradient", contentPosition: "bottom-left", children: [_jsx(ImageText, { variant: "eyebrow", color: "muted", children: "Blog \u2022 5 min" }), _jsx(ImageText, { variant: "subtitle", as: "h3", children: "N\u00E1zov \u010Dl\u00E1nku" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("span", { className: "font-text text-sm text-text-caption", children: "Team karta" }), _jsxs(ImageCard, { src: MOOD_PHOTOS.dec2025_037, aspectRatio: "portrait", overlay: "gradient", contentPosition: "bottom-left", children: [_jsx(ImageText, { variant: "subtitle", as: "h3", children: "Meno" }), _jsx(ImageText, { variant: "caption", color: "muted", children: "Poz\u00EDcia" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("span", { className: "font-text text-sm text-text-caption", children: "Feature karta (centered)" }), _jsxs(ImageCard, { src: MOOD_PHOTOS.dec2025_002, aspectRatio: "portrait", overlay: "dark", contentPosition: "center", children: [_jsx(ImageText, { variant: "eyebrow", color: "muted", children: "Nov\u00E9" }), _jsx(ImageText, { variant: "title", as: "h2", children: "Feature" }), _jsx(ImageText, { variant: "body", color: "light", className: "mt-2", children: "Popisn\u00FD text" })] })] })] })] })),
};
export const DosDonts = {
    name: "6. Do's and Don'ts",
    render: () => (_jsxs("div", { className: "space-y-8", children: [_jsxs("div", { className: "grid grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("span", { className: "font-text text-sm text-green-600 font-medium", children: "\u2713 Spr\u00E1vne" }), _jsxs(ImageCard, { src: MOOD_PHOTOS.dec2025_006, aspectRatio: "video", overlay: "gradient", contentPosition: "bottom-left", children: [_jsx(ImageText, { variant: "eyebrow", color: "muted", children: "Kateg\u00F3ria" }), _jsx(ImageText, { variant: "subtitle", children: "Jasn\u00E1 hierarchia" }), _jsx(ImageText, { variant: "body", color: "light", children: "Gradient overlay, spr\u00E1vne farby" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("span", { className: "font-text text-sm text-red-600 font-medium", children: "\u2717 Nespr\u00E1vne" }), _jsxs(ImageCard, { src: MOOD_PHOTOS.dec2025_006, aspectRatio: "video", overlay: "none", contentPosition: "bottom-left", children: [_jsx("span", { className: "font-display text-2xl text-yellow-400", style: { textShadow: 'none' }, children: "Zl\u00E1 farba" }), _jsx("span", { className: "font-text text-white text-xs", children: "Bez overlay, zl\u00FD kontrast, nekonzistentn\u00E9" })] })] })] }), _jsxs("div", { className: "bg-birne-sand-40 p-6 rounded-lg", children: [_jsx("h4", { className: "font-display text-lg mb-4", children: "Pravidl\u00E1" }), _jsxs("ul", { className: "space-y-2 font-text text-sm", children: [_jsx("li", { children: "\u2713 V\u017Edy pou\u017E\u00EDvaj overlay pre \u010Ditate\u013Enos\u0165" }), _jsx("li", { children: "\u2713 Pou\u017Ei ImageText komponent pre konzistentn\u00E9 \u0161t\u00FDly" }), _jsx("li", { children: "\u2713 Dodr\u017Euj hierarchiu: eyebrow \u2192 title \u2192 body" }), _jsx("li", { children: "\u2713 Pou\u017E\u00EDvaj len white/light/muted farby na tmavom overlay" }), _jsx("li", { children: "\u2717 Nepou\u017E\u00EDvaj n\u00E1hodn\u00E9 farby textu" }), _jsx("li", { children: "\u2717 Ned\u00E1vaj pr\u00EDli\u0161 ve\u013Ea textu na fotku" }), _jsx("li", { children: "\u2717 Nevyp\u00EDnaj drop shadow pokia\u013E nie je dostato\u010Dn\u00FD kontrast" })] })] })] })),
};
