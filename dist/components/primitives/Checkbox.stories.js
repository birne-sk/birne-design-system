import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Checkbox, RadioGroup, Switch } from "./Checkbox";
import { Label } from "./Typography";
const checkboxMeta = {
    title: "Primitives/Checkbox & Radio",
    component: Checkbox,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};
export default checkboxMeta;
export const Checkboxes = {
    render: () => (_jsxs("div", { className: "space-y-3", children: [_jsx(Label, { className: "block", children: "Checkboxes" }), _jsx(Checkbox, { label: "Mo\u017Enos\u0165 1", defaultChecked: true }), _jsx(Checkbox, { label: "Mo\u017Enos\u0165 2" })] })),
};
export const CheckboxStates = {
    name: "Checkbox — stavy",
    render: () => (_jsxs("div", { className: "space-y-3", children: [_jsx(Checkbox, { label: "Neza\u0161krtnut\u00FD" }), _jsx(Checkbox, { label: "Za\u0161krtnut\u00FD", defaultChecked: true }), _jsx(Checkbox, { label: "Disabled", disabled: true }), _jsx(Checkbox, { label: "Disabled checked", disabled: true, defaultChecked: true }), _jsx(Checkbox, { label: "Error", error: true })] })),
};
export const CheckboxSizes = {
    name: "Checkbox — veľkosti",
    render: () => (_jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "space-y-3", children: [_jsx(Checkbox, { label: "Default (md)", defaultChecked: true }), _jsx(Checkbox, { label: "Default unchecked" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Checkbox, { size: "sm", label: "Small (sm)", defaultChecked: true }), _jsx(Checkbox, { size: "sm", label: "Small unchecked" })] })] })),
};
export const CheckboxWithDescription = {
    render: () => (_jsx(Checkbox, { label: "S\u00FAhlas\u00EDm so zasielan\u00EDm newslettera", description: "V s\u00FAlade so z\u00E1sadami ochrany osobn\u00FDch \u00FAdajov." })),
};
export const RadioGroupDefault = {
    name: "Radio Group",
    render: () => (_jsxs("div", { className: "space-y-3", children: [_jsx(Label, { className: "block", children: "Radio Group" }), _jsx(RadioGroup, { name: "demo", defaultValue: "1", options: [
                    { label: "Radio 1", value: "1" },
                    { label: "Radio 2", value: "2" },
                ] })] })),
};
export const RadioHorizontal = {
    render: () => (_jsx(RadioGroup, { name: "period", direction: "horizontal", defaultValue: "30", options: [
            { label: "7 dní", value: "7" },
            { label: "30 dní", value: "30" },
            { label: "90 dní", value: "90" },
        ] })),
};
export const RadioWithDescriptions = {
    render: () => (_jsx(RadioGroup, { name: "plan", defaultValue: "free", options: [
            {
                label: "Free",
                value: "free",
                description: "3 analýzy mesačne, základné metriky",
            },
            {
                label: "Pro",
                value: "pro",
                description: "Neobmedzené analýzy, export do PDF, prioritná podpora",
            },
            {
                label: "Enterprise",
                value: "enterprise",
                description: "Vlastný deployment, API prístup, SLA",
                disabled: true,
            },
        ] })),
};
export const SwitchToggle = {
    name: "Switch (Toggle)",
    render: () => (_jsxs("div", { className: "flex items-end gap-8", children: [_jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsx(Switch, { defaultChecked: true }), _jsx("span", { className: "font-text text-xs text-text-caption", children: "md (default)" })] }), _jsxs("div", { className: "flex flex-col items-center gap-2", children: [_jsx(Switch, { size: "lg", defaultChecked: true }), _jsx("span", { className: "font-text text-xs text-text-caption", children: "lg" })] })] })),
};
export const SwitchStates = {
    name: "Switch — stavy",
    render: () => (_jsxs("div", { className: "space-y-4", children: [_jsx(Switch, { label: "Vypnut\u00FD" }), _jsx(Switch, { label: "Zapnut\u00FD", defaultChecked: true }), _jsx(Switch, { label: "Disabled off", disabled: true }), _jsx(Switch, { label: "Disabled on", disabled: true, defaultChecked: true })] })),
};
export const FormExample = {
    render: () => (_jsxs("div", { className: "max-w-md space-y-6", children: [_jsxs("div", { children: [_jsx(Label, { className: "block mb-3", children: "Re\u017Eim anal\u00FDzy" }), _jsx(RadioGroup, { name: "analysis-mode", defaultValue: "single", options: [
                            { label: "Analýza jednej krajiny", value: "single" },
                            { label: "Analýza viacerých krajín", value: "multi" },
                        ] })] }), _jsxs("div", { children: [_jsx(Label, { className: "block mb-3", children: "Platformy" }), _jsxs("div", { className: "space-y-3", children: [_jsx(Checkbox, { label: "Facebook", defaultChecked: true }), _jsx(Checkbox, { label: "Instagram", defaultChecked: true }), _jsx(Checkbox, { label: "Meta Ads" })] })] }), _jsx("div", { className: "border-t border-border pt-4", children: _jsx(Switch, { label: "Posiela\u0165 v\u00FDsledky na email", defaultChecked: true }) })] })),
};
