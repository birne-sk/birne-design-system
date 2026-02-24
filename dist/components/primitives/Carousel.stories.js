import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Carousel } from "./Carousel";
import { Card } from "./Card";
import { ContentStack } from "./ContentStack";
import { Heading, Text, Eyebrow } from "./Typography";
import { Badge } from "./Badge";
const meta = {
    title: "Primitives/Carousel",
    component: Carousel,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => (_jsxs(Carousel, { title: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Eyebrow, { children: "Proces" }), _jsx(Heading, { level: "h2", children: "Ako to funguje" })] }), showDots: false, gap: "md", children: [_jsx(Card, { variant: "default", children: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Heading, { level: "h5", children: "Zadajte k\u013E\u00FA\u010Dov\u00E9 slov\u00E1" }), _jsx(Text, { size: "sm", children: "Vyberte slov\u00E1, ktor\u00E9 chcete sledova\u0165 oproti konkurencii." })] }) }), _jsx(Card, { variant: "default", children: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Heading, { level: "h5", children: "Vyberte krajinu" }), _jsx(Text, { size: "sm", children: "Zvo\u013Ete trh, na ktorom chcete analyzova\u0165 vyh\u013Ead\u00E1vanie." })] }) }), _jsx(Card, { variant: "default", children: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Heading, { level: "h5", children: "Analyzujte v\u00FDsledky" }), _jsx(Text, { size: "sm", children: "Prezrite si grafy a tabu\u013Eky s podielom vyh\u013Ead\u00E1vania." })] }) }), _jsx(Card, { variant: "default", children: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Heading, { level: "h5", children: "Exportujte report" }), _jsx(Text, { size: "sm", children: "Stiahnite si v\u00FDsledky vo form\u00E1te PDF alebo CSV." })] }) })] })),
};
export const WithoutArrows = {
    render: () => (_jsxs(Carousel, { showArrows: false, gap: "md", children: [_jsx(Card, { variant: "purple", children: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Heading, { level: "h5", children: "Anal\u00FDza konkurencie" }), _jsx(Text, { size: "sm", children: "Porovnajte svoju zna\u010Dku s konkurenciou na soci\u00E1lnych sie\u0165ach." })] }) }), _jsx(Card, { variant: "purple", children: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Heading, { level: "h5", children: "Share of Search" }), _jsx(Text, { size: "sm", children: "Sledujte podiel vyh\u013Ead\u00E1vania va\u0161ej zna\u010Dky v \u010Dase." })] }) }), _jsx(Card, { variant: "purple", children: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Heading, { level: "h5", children: "Content Intelligence" }), _jsx(Text, { size: "sm", children: "Zistite, ak\u00FD obsah funguje najlep\u0161ie vo va\u0161om segmente." })] }) }), _jsx(Card, { variant: "purple", children: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Heading, { level: "h5", children: "Sentiment anal\u00FDza" }), _jsx(Text, { size: "sm", children: "Pochopte, ako z\u00E1kazn\u00EDci vn\u00EDmaj\u00FA va\u0161u zna\u010Dku online." })] }) })] })),
};
export const DarkCards = {
    name: "Dark varianty",
    render: () => (_jsxs(Carousel, { title: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Eyebrow, { children: "Cenn\u00EDk" }), _jsx(Heading, { level: "h2", children: "Pl\u00E1ny" })] }), showDots: false, gap: "md", children: [_jsx(Card, { variant: "dark", children: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Heading, { level: "h5", className: "text-birne-lemon", children: "Free pl\u00E1n" }), _jsx(Text, { size: "sm", className: "text-white/60", children: "3 anal\u00FDzy mesa\u010Dne a z\u00E1kladn\u00E9 metriky zadarmo." })] }) }), _jsx(Card, { variant: "dark", children: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Heading, { level: "h5", className: "text-birne-lemon", children: "Pro pl\u00E1n" }), _jsx(Text, { size: "sm", className: "text-white/60", children: "Neobmedzen\u00E9 anal\u00FDzy, export do PDF a prioritn\u00E1 podpora." })] }) }), _jsx(Card, { variant: "dark", children: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Heading, { level: "h5", className: "text-birne-lemon", children: "Enterprise" }), _jsx(Text, { size: "sm", className: "text-white/60", children: "API pr\u00EDstup, vlastn\u00FD deployment a SLA garancia." })] }) }), _jsx(Card, { variant: "dark", children: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Heading, { level: "h5", className: "text-birne-lemon", children: "Custom" }), _jsx(Text, { size: "sm", className: "text-white/60", children: "Rie\u0161enie na mieru pre v\u00E1\u0161 t\u00EDm a va\u0161e potreby." })] }) })] })),
};
const RoundedStar = ({ filled, size = 16 }) => (_jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", children: _jsx("path", { d: "M12 2C12.3 2 12.5 2.2 12.6 2.4L15 8.5C15.1 8.7 15.3 8.9 15.5 8.9L21.2 9.5C21.7 9.6 21.9 10.2 21.5 10.5L16.8 14.5C16.6 14.7 16.5 14.9 16.6 15.2L17.8 21C17.9 21.5 17.4 21.9 17 21.6L12.3 18.8C12.1 18.7 11.9 18.7 11.7 18.8L7 21.6C6.6 21.9 6.1 21.5 6.2 21L7.4 15.2C7.5 14.9 7.4 14.7 7.2 14.5L2.5 10.5C2.1 10.2 2.3 9.6 2.8 9.5L8.5 8.9C8.7 8.9 8.9 8.7 9 8.5L11.4 2.4C11.5 2.2 11.7 2 12 2Z", fill: filled ? "currentColor" : "currentColor", strokeLinejoin: "round", strokeLinecap: "round", className: filled ? "text-birne-lemon" : "text-birne-black-10" }) }));
const Stars = ({ count }) => (_jsx("div", { className: "flex gap-0.5", children: [1, 2, 3, 4, 5].map((i) => (_jsx(RoundedStar, { filled: i <= count, size: 16 }, i))) }));
const testimonials = [
    {
        stars: 5,
        text: "Kamarátska atmosféra a fajný catering, no kľúčový bol obsah a prezentácia. Užitočné informácie, case studies a aktívne cvičenia. Jeden z top workshopov posledných rokov.",
        name: "Lukáš Porhajaš",
        company: "Boxyland",
    },
    {
        stars: 4,
        text: "Praktické úlohy so značkami, SoS, CEP, behavioral biases a use-casy. Ocenil by som viac praxe, ideálne rozdeliť teóriu a venovať viac času vlastným značkám.",
        name: "Martin Krafčík",
        company: "Auglio",
    },
    {
        stars: 4,
        text: "Praktické cvičenia s templatmi na vlastné zadanie, ktoré si odnášame a používame ďalej. Case studies ukázali problem scoping aj analýzu konkurencie a rozhovor so zákazníkom.",
        name: "Filip Korman",
        company: "viridiusLAB",
    },
    {
        stars: 5,
        text: "Najväčší benefit boli praktické cvičenia, ktoré rozpohybujú kreativitu a myseľ správnym smerom. Ucelené informácie, žiadny bullshit navyše. Oceňujem profesionalitu oboch spíkrov.",
        name: "Matej Stacho",
        company: "Pescezles",
    },
];
export const Testimonials = {
    name: "Referencie",
    render: () => (_jsx(Carousel, { title: _jsxs(ContentStack, { spacing: "tight", children: [_jsx(Eyebrow, { children: "Referencie" }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Heading, { level: "h2", children: "D\u00F4veruj\u00FA n\u00E1m l\u00EDdri trhu" }), _jsx(Badge, { variant: "default", size: "md", children: "4.9 \u2605 z 9 hodnoten\u00ED" })] })] }), showDots: false, gap: "md", children: testimonials.map((t) => (_jsx(Card, { variant: "default", children: _jsxs("div", { className: "flex flex-col justify-between h-full", children: [_jsxs("div", { children: [_jsx(Stars, { count: t.stars }), _jsxs(Text, { size: "sm", className: "mt-4", children: ["\"", t.text, "\""] })] }), _jsxs("div", { className: "mt-6", children: [_jsx(Text, { size: "sm", className: "font-medium text-text-heading", children: t.name }), _jsx(Text, { size: "xs", variant: "caption", children: t.company })] })] }) }, t.name))) })),
};
