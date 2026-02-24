import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Spinner } from "./Spinner";
import { Button } from "./Button";
const meta = {
    title: "Primitives/Spinner",
    component: Spinner,
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl"],
        },
        color: {
            control: "select",
            options: ["default", "muted", "purple", "white"],
        },
    },
};
export default meta;
export const Default = {
    args: {},
};
export const Sizes = {
    render: () => (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Spinner, { size: "xs" }), _jsx(Spinner, { size: "sm" }), _jsx(Spinner, { size: "md" }), _jsx(Spinner, { size: "lg" }), _jsx(Spinner, { size: "xl" })] })),
};
export const Colors = {
    render: () => (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Spinner, { color: "default" }), _jsx(Spinner, { color: "muted" }), _jsx(Spinner, { color: "purple" }), _jsx("div", { className: "bg-birne-black p-2 rounded", children: _jsx(Spinner, { color: "white" }) })] })),
};
export const InButton = {
    render: () => (_jsxs("div", { className: "flex gap-4", children: [_jsxs(Button, { disabled: true, children: [_jsx(Spinner, { size: "sm" }), " Loading..."] }), _jsxs(Button, { variant: "secondary", disabled: true, children: [_jsx(Spinner, { size: "sm", color: "purple" }), " Saving..."] })] })),
};
