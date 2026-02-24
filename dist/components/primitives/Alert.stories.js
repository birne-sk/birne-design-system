import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Alert, AlertTitle, AlertDescription } from "./Alert";
const meta = {
    title: "Primitives/Alert",
    component: Alert,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["info", "success", "warning", "destructive"],
        },
    },
};
export default meta;
export const Info = {
    args: {
        variant: "info",
        children: "Analýza prebieha. Prosím čakajte...",
    },
};
export const Success = {
    args: {
        variant: "success",
        children: "Analýza bola úspešne dokončená!",
    },
};
export const Warning = {
    args: {
        variant: "warning",
        children: "Dosiahli ste limit bezplatných analýz.",
    },
};
export const Destructive = {
    args: {
        variant: "destructive",
        children: "Nastala chyba pri spracovaní požiadavky.",
    },
};
export const WithTitle = {
    render: () => (_jsxs(Alert, { variant: "success", children: [_jsx(AlertTitle, { children: "Hotovo!" }), _jsx(AlertDescription, { children: "Va\u0161a anal\u00FDza Share of Search bola \u00FAspe\u0161ne dokon\u010Den\u00E1. V\u00FDsledky n\u00E1jdete ni\u017E\u0161ie." })] })),
};
export const Dismissible = {
    render: () => (_jsxs(Alert, { variant: "warning", onDismiss: () => alert("Dismissed!"), children: [_jsx(AlertTitle, { children: "Upozornenie" }), _jsx(AlertDescription, { children: "Zost\u00E1va v\u00E1m e\u0161te 2 bezplatn\u00E9 anal\u00FDzy tento mesiac." })] })),
};
export const AllVariants = {
    render: () => (_jsxs("div", { className: "space-y-3 max-w-lg", children: [_jsxs(Alert, { variant: "info", children: [_jsx(AlertTitle, { children: "Info" }), _jsx(AlertDescription, { children: "Informat\u00EDvna spr\u00E1va pre pou\u017E\u00EDvate\u013Ea." })] }), _jsxs(Alert, { variant: "success", children: [_jsx(AlertTitle, { children: "\u00DAspech" }), _jsx(AlertDescription, { children: "Oper\u00E1cia bola \u00FAspe\u0161ne dokon\u010Den\u00E1." })] }), _jsxs(Alert, { variant: "warning", children: [_jsx(AlertTitle, { children: "Upozornenie" }), _jsx(AlertDescription, { children: "Nie\u010Do si vy\u017Eaduje va\u0161u pozornos\u0165." })] }), _jsxs(Alert, { variant: "destructive", children: [_jsx(AlertTitle, { children: "Chyba" }), _jsx(AlertDescription, { children: "Nastala chyba pri spracovan\u00ED." })] })] })),
};
