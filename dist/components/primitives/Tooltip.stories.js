import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tooltip } from "./Tooltip";
const meta = {
    title: "Primitives/Tooltip",
    component: Tooltip,
    parameters: {
        layout: "padded",
    },
    decorators: [
        (Story) => (_jsx("div", { className: "flex items-center justify-center min-h-[200px]", children: _jsx(Story, {}) })),
    ],
    tags: ["autodocs"],
    argTypes: {
        position: {
            control: "select",
            options: ["top", "bottom", "left", "right"],
        },
    },
};
export default meta;
export const Top = {
    args: {
        content: "Share of Search zobrazuje váš podiel na trhu.",
        position: "top",
        children: (_jsx("span", { className: "inline-flex items-center justify-center w-5 h-5 rounded-full bg-birne-black-5 text-text-caption text-xs cursor-help", children: "?" })),
    },
};
export const Bottom = {
    args: {
        content: "Kliknite pre zobrazenie detailov",
        position: "bottom",
        children: (_jsx("button", { className: "font-text text-sm text-birne-purple hover:underline", children: "Hover me" })),
    },
};
export const Positions = {
    render: () => (_jsxs("div", { className: "flex items-center gap-12 p-12", children: [_jsx(Tooltip, { content: "Top tooltip", position: "top", children: _jsx("span", { className: "px-3 py-1.5 rounded-xs bg-birne-black-5 font-text text-sm cursor-help", children: "Top" }) }), _jsx(Tooltip, { content: "Bottom tooltip", position: "bottom", children: _jsx("span", { className: "px-3 py-1.5 rounded-xs bg-birne-black-5 font-text text-sm cursor-help", children: "Bottom" }) }), _jsx(Tooltip, { content: "Left tooltip", position: "left", children: _jsx("span", { className: "px-3 py-1.5 rounded-xs bg-birne-black-5 font-text text-sm cursor-help", children: "Left" }) }), _jsx(Tooltip, { content: "Right tooltip", position: "right", children: _jsx("span", { className: "px-3 py-1.5 rounded-xs bg-birne-black-5 font-text text-sm cursor-help", children: "Right" }) })] })),
};
export const InfoIcon = {
    render: () => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "font-text text-sm text-text-heading", children: "Share of Search" }), _jsx(Tooltip, { content: "Percento vyh\u013Ead\u00E1van\u00ED pre va\u0161u zna\u010Dku oproti konkurencii za posledn\u00FDch 12 mesiacov.", position: "top", children: _jsx("span", { className: "inline-flex items-center justify-center w-4 h-4 rounded-full bg-birne-black-10 text-text-caption text-[10px] cursor-help", children: "i" }) })] })),
};
