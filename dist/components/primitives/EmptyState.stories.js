import { jsx as _jsx } from "react/jsx-runtime";
import { EmptyState } from "./EmptyState";
import { IconCircle } from "./IconCircle";
import { Button } from "./Button";
import { BarChart3, Search, FileText, Inbox, AlertCircle } from "lucide-react";
const meta = {
    title: "Primitives/EmptyState",
    component: EmptyState,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    args: {
        icon: _jsx(IconCircle, { variant: "default", size: "xl", children: _jsx(Inbox, { size: 28, strokeWidth: 1.5 }) }),
        title: "Žiadne dáta",
        description: "Zatiaľ nemáte žiadne analýzy. Vytvorte svoju prvú analýzu.",
    },
};
export const WithAction = {
    args: {
        icon: _jsx(IconCircle, { variant: "default", size: "xl", children: _jsx(BarChart3, { size: 28, strokeWidth: 1.5 }) }),
        title: "Žiadne výsledky",
        description: "Pre zobrazenie výsledkov spustite novú analýzu.",
        action: _jsx(Button, { variant: "primary", size: "sm", children: "Nov\u00E1 anal\u00FDza" }),
    },
};
export const NoJobs = {
    args: {
        icon: _jsx(IconCircle, { variant: "lemon", size: "xl", children: _jsx(FileText, { size: 28, strokeWidth: 1.5 }) }),
        title: "Žiadne joby",
        description: "Zatiaľ ste nespustili žiadnu analýzu konkurencie.",
        action: _jsx(Button, { variant: "primary", size: "sm", children: "Spusti\u0165 anal\u00FDzu" }),
    },
};
export const SearchEmpty = {
    args: {
        icon: _jsx(IconCircle, { variant: "muted", size: "xl", children: _jsx(Search, { size: 28, strokeWidth: 1.5 }) }),
        title: "Žiadne výsledky vyhľadávania",
        description: "Skúste upraviť kľúčové slová alebo rozšíriť dátumový rozsah.",
        action: _jsx(Button, { variant: "soft", size: "sm", children: "Vymaza\u0165 filtre" }),
    },
};
export const Error = {
    args: {
        icon: _jsx(IconCircle, { variant: "destructive", size: "xl", children: _jsx(AlertCircle, { size: 28, strokeWidth: 1.5 }) }),
        title: "Niečo sa pokazilo",
        description: "Nepodarilo sa načítať dáta. Skúste to znova neskôr.",
        action: _jsx(Button, { variant: "soft", size: "sm", children: "Sk\u00FAsi\u0165 znova" }),
    },
};
