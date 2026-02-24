import { jsx as _jsx } from "react/jsx-runtime";
import { Home } from "lucide-react";
import { Breadcrumb } from "./Breadcrumb";
const meta = {
    title: "Primitives/Breadcrumb",
    component: Breadcrumb,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};
export default meta;
const homeIcon = _jsx(Home, { size: 14, strokeWidth: 2 });
export const Default = {
    args: {
        items: [
            { icon: homeIcon, href: "/" },
            { label: "Nástroje", href: "/tools" },
            { label: "Share of Search" },
        ],
    },
};
export const TwoLevels = {
    args: {
        items: [
            { icon: homeIcon, href: "/" },
            { label: "Competitors Analysis" },
        ],
    },
};
export const Long = {
    args: {
        items: [
            { icon: homeIcon, href: "/" },
            { label: "Nástroje", href: "/tools" },
            { label: "Resonar", href: "/tools/resonar" },
            { label: "Job History", href: "/tools/resonar/history" },
            { label: "Kaufland SK Analysis" },
        ],
    },
};
