import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Popover } from "./Popover";
import { Button } from "./Button";
import { Text, Heading } from "./Typography";
import { Avatar } from "./Avatar";
import { Info } from "lucide-react";
const meta = {
    title: "Primitives/Popover",
    component: Popover,
    tags: ["autodocs"],
    argTypes: {
        side: {
            control: "select",
            options: ["top", "bottom", "left", "right"],
        },
        align: {
            control: "select",
            options: ["start", "center", "end"],
        },
    },
};
export default meta;
export const Default = {
    render: () => (_jsx(Popover, { trigger: _jsx(Button, { variant: "soft", children: "Click me" }), children: _jsx(Text, { size: "sm", children: "This is popover content." }) })),
};
export const OnHover = {
    render: () => (_jsx(Popover, { trigger: _jsxs("span", { className: "inline-flex items-center gap-1 text-text-caption cursor-help", children: [_jsx(Info, { size: 16 }), " Hover for info"] }), triggerOnHover: true, children: _jsx(Text, { size: "sm", children: "This appears on hover!" }) })),
};
export const Positions = {
    render: () => (_jsxs("div", { className: "flex items-center justify-center gap-4 py-20", children: [_jsx(Popover, { side: "top", trigger: _jsx(Button, { variant: "soft", size: "sm", children: "Top" }), children: _jsx(Text, { size: "sm", children: "Top popover" }) }), _jsx(Popover, { side: "bottom", trigger: _jsx(Button, { variant: "soft", size: "sm", children: "Bottom" }), children: _jsx(Text, { size: "sm", children: "Bottom popover" }) }), _jsx(Popover, { side: "left", trigger: _jsx(Button, { variant: "soft", size: "sm", children: "Left" }), children: _jsx(Text, { size: "sm", children: "Left popover" }) }), _jsx(Popover, { side: "right", trigger: _jsx(Button, { variant: "soft", size: "sm", children: "Right" }), children: _jsx(Text, { size: "sm", children: "Right popover" }) })] })),
};
export const UserCard = {
    render: () => (_jsx(Popover, { trigger: _jsx(Avatar, { initials: "JH", className: "cursor-pointer" }), align: "start", children: _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Avatar, { initials: "JH", size: "lg" }), _jsxs("div", { children: [_jsx(Text, { weight: "medium", size: "sm", children: "Jakub Hrusovsky" }), _jsx(Text, { size: "xs", variant: "caption", children: "@jakub" })] })] }), _jsx(Text, { size: "sm", variant: "caption", children: "Product Designer at Birne Studio. Crafting digital experiences." }), _jsxs("div", { className: "flex gap-4 text-xs", children: [_jsxs("span", { children: [_jsx("strong", { children: "128" }), " followers"] }), _jsxs("span", { children: [_jsx("strong", { children: "56" }), " following"] })] })] }) })),
};
export const RichContent = {
    render: () => (_jsx(Popover, { trigger: _jsx(Button, { children: "View Details" }), children: _jsxs("div", { className: "space-y-2 min-w-[250px]", children: [_jsx(Heading, { level: "h6", children: "Order Summary" }), _jsxs("div", { className: "space-y-1", children: [_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx(Text, { size: "sm", variant: "caption", children: "Subtotal" }), _jsx(Text, { size: "sm", children: "$99.00" })] }), _jsxs("div", { className: "flex justify-between text-sm", children: [_jsx(Text, { size: "sm", variant: "caption", children: "Shipping" }), _jsx(Text, { size: "sm", children: "$5.00" })] }), _jsxs("div", { className: "flex justify-between text-sm", children: [_jsx(Text, { size: "sm", variant: "caption", children: "Tax" }), _jsx(Text, { size: "sm", children: "$8.32" })] }), _jsx("div", { className: "h-px bg-border my-2" }), _jsxs("div", { className: "flex justify-between", children: [_jsx(Text, { size: "sm", weight: "medium", children: "Total" }), _jsx(Text, { size: "sm", weight: "medium", children: "$112.32" })] })] })] }) })),
};
