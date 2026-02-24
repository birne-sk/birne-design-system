import { jsx as _jsx } from "react/jsx-runtime";
import { Input, Textarea } from "./Input";
const inputMeta = {
    title: "Primitives/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        variant: {
            control: "select",
            options: ["default", "filled", "ghost"],
        },
        error: {
            control: "boolean",
        },
    },
};
export default inputMeta;
export const Default = {
    args: {
        placeholder: "Enter text...",
        style: { width: 320 },
    },
};
export const Filled = {
    args: {
        variant: "filled",
        placeholder: "Filled input",
        style: { width: 320 },
    },
};
export const GhostInput = {
    args: {
        variant: "ghost",
        placeholder: "Ghost input",
        style: { width: 320 },
    },
};
export const Small = {
    args: {
        size: "sm",
        placeholder: "Small input",
        style: { width: 320 },
    },
};
export const Large = {
    args: {
        size: "lg",
        placeholder: "Large input",
        style: { width: 320 },
    },
};
export const WithError = {
    args: {
        error: true,
        placeholder: "Error state",
        defaultValue: "Invalid value",
        style: { width: 320 },
    },
};
export const Disabled = {
    args: {
        disabled: true,
        placeholder: "Disabled input",
        style: { width: 320 },
    },
};
export const EmailInput = {
    args: {
        type: "email",
        placeholder: "vas@email.sk",
        style: { width: 320 },
    },
};
export const URLInput = {
    args: {
        type: "url",
        placeholder: "https://facebook.com/yourcompany",
        style: { width: 320 },
    },
};
export const TextareaDefault = {
    render: () => (_jsx(Textarea, { placeholder: "Kaufland\nBilla\nTesco\nLidl\nTerno", style: { width: 320 } })),
};
export const TextareaWithError = {
    render: () => (_jsx(Textarea, { error: true, defaultValue: "Invalid content", style: { width: 320 } })),
};
