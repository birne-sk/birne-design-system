import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select } from "./Select";
import { Label } from "./Typography";
const meta = {
    title: "Primitives/Select",
    component: Select,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        error: { control: "boolean" },
    },
};
export default meta;
const countryOptions = [
    { label: "Slovensko", value: "sk" },
    { label: "Česká republika", value: "cz" },
    { label: "Poľsko", value: "pl" },
    { label: "Maďarsko", value: "hu" },
    { label: "Rakúsko", value: "at" },
    { label: "Nemecko", value: "de" },
];
const languageOptions = [
    { label: "Slovenčina", value: "sk" },
    { label: "Čeština", value: "cs" },
    { label: "English", value: "en" },
    { label: "Deutsch", value: "de" },
];
export const Default = {
    args: {
        options: countryOptions,
        placeholder: "Vyberte krajinu",
        style: { width: 320 },
    },
};
export const WithValue = {
    args: {
        options: countryOptions,
        defaultValue: "sk",
        style: { width: 320 },
    },
};
export const Language = {
    args: {
        options: languageOptions,
        placeholder: "Vyberte jazyk",
        style: { width: 320 },
    },
};
export const Small = {
    args: {
        options: countryOptions,
        size: "sm",
        placeholder: "Krajina",
        style: { width: 240 },
    },
};
export const Large = {
    args: {
        options: countryOptions,
        size: "lg",
        placeholder: "Vyberte krajinu",
        style: { width: 320 },
    },
};
export const WithError = {
    args: {
        options: countryOptions,
        error: true,
        placeholder: "Vyberte krajinu",
        style: { width: 320 },
    },
};
export const Disabled = {
    args: {
        options: countryOptions,
        disabled: true,
        defaultValue: "sk",
        style: { width: 320 },
    },
};
export const FormRow = {
    render: () => (_jsxs("div", { className: "flex gap-3", style: { width: 520 }, children: [_jsxs("div", { className: "flex-1", children: [_jsx(Label, { className: "block mb-1.5", children: "Krajina" }), _jsx(Select, { options: countryOptions, placeholder: "Vyberte krajinu" })] }), _jsxs("div", { className: "flex-1", children: [_jsx(Label, { className: "block mb-1.5", children: "Jazyk" }), _jsx(Select, { options: languageOptions, placeholder: "Vyberte jazyk" })] })] })),
};
