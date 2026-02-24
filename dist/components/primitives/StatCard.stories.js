import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StatCard } from "./StatCard";
const meta = {
    title: "Primitives/StatCard",
    component: StatCard,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "muted", "purple"],
        },
    },
};
export default meta;
export const Default = {
    args: {
        label: "Followers",
        value: "12,345",
        style: { maxWidth: 220 },
    },
};
export const WithTrend = {
    args: {
        label: "Share of Search",
        value: "34.2%",
        trend: { value: 5.3, label: "vs last month" },
        style: { maxWidth: 220 },
    },
};
export const NegativeTrend = {
    args: {
        label: "Engagement Rate",
        value: "2.1%",
        trend: { value: -1.2, label: "vs last month" },
        style: { maxWidth: 220 },
    },
};
export const WithDescription = {
    args: {
        label: "Total Posts",
        value: "847",
        description: "Last 30 days",
        style: { maxWidth: 220 },
    },
};
export const Variants = {
    render: () => (_jsxs("div", { className: "grid grid-cols-2 gap-4", style: { maxWidth: 480 }, children: [_jsx(StatCard, { variant: "default", label: "Default", value: "1,234" }), _jsx(StatCard, { variant: "muted", label: "Muted", value: "5,678" }), _jsx(StatCard, { variant: "purple", label: "Purple", value: "91%" })] })),
};
export const DashboardGrid = {
    render: () => (_jsxs("div", { className: "grid grid-cols-4 gap-4", style: { maxWidth: 960 }, children: [_jsx(StatCard, { label: "Profiles", value: "5", description: "Competitors tracked" }), _jsx(StatCard, { label: "Posts Analyzed", value: "2,847", trend: { value: 12, label: "vs last period" } }), _jsx(StatCard, { label: "Avg. Engagement", value: "3.2%", trend: { value: -0.5 } }), _jsx(StatCard, { variant: "purple", label: "Share of Search", value: "34%", trend: { value: 2.1, label: "growth" } })] })),
};
export const SOSMetrics = {
    render: () => (_jsxs("div", { className: "grid grid-cols-3 gap-4", style: { maxWidth: 720 }, children: [_jsx(StatCard, { variant: "muted", label: "Search Volume", value: "14,800", description: "Priemern\u00FD mesa\u010Dn\u00FD objem" }), _jsx(StatCard, { variant: "muted", label: "Keywords", value: "5", description: "Sledovan\u00E9 zna\u010Dky" }), _jsx(StatCard, { variant: "muted", label: "Period", value: "24 mo", description: "Analyzovan\u00E9 obdobie" })] })),
};
