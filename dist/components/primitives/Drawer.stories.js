import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Drawer } from "./Drawer";
import { Button } from "./Button";
import { Text } from "./Typography";
import { Input } from "./Input";
import * as React from "react";
const meta = {
    title: "Primitives/Drawer",
    component: Drawer,
    tags: ["autodocs"],
    argTypes: {
        side: {
            control: "select",
            options: ["left", "right", "top", "bottom"],
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg", "full"],
        },
    },
};
export default meta;
export const Default = {
    render: () => {
        const [open, setOpen] = React.useState(false);
        return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: () => setOpen(true), children: "Open Drawer" }), _jsx(Drawer, { open: open, onClose: () => setOpen(false), title: "Drawer Title", description: "This is a drawer component.", children: _jsx(Text, { children: "Drawer content goes here." }) })] }));
    },
};
export const Left = {
    render: () => {
        const [open, setOpen] = React.useState(false);
        return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: () => setOpen(true), children: "Open Left Drawer" }), _jsx(Drawer, { open: open, onClose: () => setOpen(false), side: "left", title: "Navigation", children: _jsxs("nav", { className: "space-y-2", children: [_jsx(Text, { className: "p-2 hover:bg-birne-black-5 rounded cursor-pointer", children: "Dashboard" }), _jsx(Text, { className: "p-2 hover:bg-birne-black-5 rounded cursor-pointer", children: "Projects" }), _jsx(Text, { className: "p-2 hover:bg-birne-black-5 rounded cursor-pointer", children: "Settings" })] }) })] }));
    },
};
export const Bottom = {
    render: () => {
        const [open, setOpen] = React.useState(false);
        return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: () => setOpen(true), children: "Open Bottom Sheet" }), _jsx(Drawer, { open: open, onClose: () => setOpen(false), side: "bottom", size: "md", title: "Share", children: _jsxs("div", { className: "flex gap-4 justify-center py-4", children: [_jsx(Button, { variant: "soft", children: "Copy Link" }), _jsx(Button, { variant: "soft", children: "Email" }), _jsx(Button, { variant: "soft", children: "Twitter" })] }) })] }));
    },
};
export const Large = {
    render: () => {
        const [open, setOpen] = React.useState(false);
        return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: () => setOpen(true), children: "Open Large Drawer" }), _jsx(Drawer, { open: open, onClose: () => setOpen(false), size: "lg", title: "Edit Profile", description: "Make changes to your profile here.", children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "font-text text-sm text-text-heading mb-1 block", children: "Name" }), _jsx(Input, { placeholder: "Enter your name" })] }), _jsxs("div", { children: [_jsx("label", { className: "font-text text-sm text-text-heading mb-1 block", children: "Email" }), _jsx(Input, { type: "email", placeholder: "Enter your email" })] }), _jsx("div", { className: "pt-4", children: _jsx(Button, { children: "Save Changes" }) })] }) })] }));
    },
};
export const NoCloseButton = {
    render: () => {
        const [open, setOpen] = React.useState(false);
        return (_jsxs(_Fragment, { children: [_jsx(Button, { onClick: () => setOpen(true), children: "Open Drawer" }), _jsx(Drawer, { open: open, onClose: () => setOpen(false), showCloseButton: false, title: "Minimal Drawer", children: _jsx(Text, { children: "Click outside or press Escape to close." }) })] }));
    },
};
