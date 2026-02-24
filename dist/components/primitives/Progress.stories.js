import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Progress, Spinner } from "./Progress";
import { Badge } from "./Badge";
import { CheckCircle, Clock } from "lucide-react";
const meta = {
    title: "Primitives/Progress",
    component: Progress,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {
        value: { control: { type: "range", min: 0, max: 100 } },
        size: { control: "select", options: ["sm", "md", "lg"] },
        variant: { control: "select", options: ["default", "success", "destructive"] },
        showLabel: { control: "boolean" },
    },
};
export default meta;
export const Default = {
    args: {
        value: 60,
        style: { maxWidth: 400 },
    },
};
export const WithLabel = {
    args: {
        value: 73,
        showLabel: true,
        style: { maxWidth: 400 },
    },
};
export const Sizes = {
    render: () => (_jsxs("div", { className: "space-y-4 max-w-md", children: [_jsxs("div", { children: [_jsx("span", { className: "font-text text-xs text-text-caption mb-1 block", children: "Small" }), _jsx(Progress, { value: 70, size: "sm" })] }), _jsxs("div", { children: [_jsx("span", { className: "font-text text-xs text-text-caption mb-1 block", children: "Medium" }), _jsx(Progress, { value: 70, size: "md" })] }), _jsxs("div", { children: [_jsx("span", { className: "font-text text-xs text-text-caption mb-1 block", children: "Large" }), _jsx(Progress, { value: 70, size: "lg" })] })] })),
};
export const AnalysisProgress = {
    render: () => (_jsxs("div", { className: "max-w-md space-y-2", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "font-text text-sm font-medium text-text-heading", children: "Scraping competitors..." }), _jsx("span", { className: "font-text text-sm text-text-caption", children: "3/5" })] }), _jsx(Progress, { value: 60, size: "md" }), _jsxs("div", { className: "flex flex-wrap gap-1.5", children: [_jsxs(Badge, { variant: "success", size: "sm", children: [_jsx(CheckCircle, { size: 12, strokeWidth: 2 }), " Kaufland"] }), _jsxs(Badge, { variant: "success", size: "sm", children: [_jsx(CheckCircle, { size: 12, strokeWidth: 2 }), " Billa"] }), _jsxs(Badge, { variant: "warning", size: "sm", children: [_jsx(Clock, { size: 12, strokeWidth: 2 }), " Tesco"] }), _jsx(Badge, { variant: "default", size: "sm", children: "Lidl" }), _jsx(Badge, { variant: "default", size: "sm", children: "Terno" })] })] })),
};
export const SpinnerDefault = {
    render: () => _jsx(Spinner, {}),
};
export const SpinnerWithLabel = {
    render: () => _jsx(Spinner, { label: "Na\u010D\u00EDtavam v\u00FDsledky..." }),
};
export const SpinnerSizes = {
    render: () => (_jsxs("div", { className: "flex items-center gap-6", children: [_jsx(Spinner, { size: "sm" }), _jsx(Spinner, { size: "md" }), _jsx(Spinner, { size: "lg" }), _jsx(Spinner, { size: "xl" })] })),
};
export const SpinnerVariants = {
    render: () => (_jsxs("div", { className: "flex items-center gap-6", children: [_jsx(Spinner, { variant: "default", label: "Default" }), _jsx(Spinner, { variant: "purple", label: "Purple" }), _jsx(Spinner, { variant: "muted", label: "Muted" }), _jsx("div", { className: "bg-birne-black p-3 rounded-md", children: _jsx(Spinner, { variant: "white" }) })] })),
};
