import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Divider } from "./Divider";
import { Text } from "./Typography";
const meta = {
    title: "Primitives/Divider",
    component: Divider,
    tags: ["autodocs"],
};
export default meta;
export const Horizontal = {
    render: () => (_jsxs("div", { className: "space-y-4", children: [_jsx(Text, { children: "Content above the divider" }), _jsx(Divider, {}), _jsx(Text, { children: "Content below the divider" })] })),
};
export const WithLabel = {
    render: () => (_jsxs("div", { className: "space-y-4", children: [_jsx(Text, { children: "Content above" }), _jsx(Divider, { label: "or" }), _jsx(Text, { children: "Content below" })] })),
};
export const Vertical = {
    render: () => (_jsxs("div", { className: "flex items-center gap-4 h-8", children: [_jsx(Text, { children: "Left" }), _jsx(Divider, { orientation: "vertical" }), _jsx(Text, { children: "Center" }), _jsx(Divider, { orientation: "vertical" }), _jsx(Text, { children: "Right" })] })),
};
export const InCard = {
    render: () => (_jsxs("div", { className: "p-4 border border-border rounded-lg max-w-sm", children: [_jsx(Text, { weight: "medium", children: "Section 1" }), _jsx(Text, { size: "sm", variant: "caption", children: "Some content here" }), _jsx(Divider, { className: "my-4" }), _jsx(Text, { weight: "medium", children: "Section 2" }), _jsx(Text, { size: "sm", variant: "caption", children: "More content here" }), _jsx(Divider, { className: "my-4", label: "Additional" }), _jsx(Text, { weight: "medium", children: "Section 3" }), _jsx(Text, { size: "sm", variant: "caption", children: "Even more content" })] })),
};
