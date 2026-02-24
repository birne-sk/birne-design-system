import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";
const meta = {
    title: "Primitives/Tabs",
    component: Tabs,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => (_jsxs(Tabs, { defaultValue: "new", style: { maxWidth: 600 }, children: [_jsxs(TabsList, { children: [_jsx(TabsTrigger, { value: "new", children: "New Analysis" }), _jsx(TabsTrigger, { value: "history", children: "Job History" })] }), _jsx(TabsContent, { value: "new", children: _jsx("p", { className: "font-text text-text-body", children: "Create a new competitor analysis by filling in the form below." }) }), _jsx(TabsContent, { value: "history", children: _jsx("p", { className: "font-text text-text-body", children: "Your previous analyses will appear here." }) })] })),
};
export const ThreeTabs = {
    render: () => (_jsxs(Tabs, { defaultValue: "overview", style: { maxWidth: 600 }, children: [_jsxs(TabsList, { children: [_jsx(TabsTrigger, { value: "overview", children: "AI Overview" }), _jsx(TabsTrigger, { value: "metrics", children: "Metrics" }), _jsx(TabsTrigger, { value: "posts", children: "Top Posts" })] }), _jsx(TabsContent, { value: "overview", children: _jsx("p", { className: "font-text text-text-body", children: "AI-generated overview of competitor landscape." }) }), _jsx(TabsContent, { value: "metrics", children: _jsx("p", { className: "font-text text-text-body", children: "Detailed metrics comparison across competitors." }) }), _jsx(TabsContent, { value: "posts", children: _jsx("p", { className: "font-text text-text-body", children: "Top performing posts from all competitors." }) })] })),
};
export const ReportTabs = {
    render: () => (_jsxs(Tabs, { defaultValue: "sos", style: { maxWidth: 600 }, children: [_jsxs(TabsList, { children: [_jsx(TabsTrigger, { value: "sos", children: "Share of Search" }), _jsx(TabsTrigger, { value: "volume", children: "Volume Trends" }), _jsx(TabsTrigger, { value: "growth", children: "YoY Growth" })] }), _jsx(TabsContent, { value: "sos", children: _jsx("div", { className: "bg-birne-sand-20 rounded-md p-4", children: _jsx("p", { className: "font-text text-sm text-text-body", children: "Share of Search stacked bar chart placeholder" }) }) }), _jsx(TabsContent, { value: "volume", children: _jsx("div", { className: "bg-birne-sand-20 rounded-md p-4", children: _jsx("p", { className: "font-text text-sm text-text-body", children: "Volume trends line chart placeholder" }) }) }), _jsx(TabsContent, { value: "growth", children: _jsx("div", { className: "bg-birne-sand-20 rounded-md p-4", children: _jsx("p", { className: "font-text text-sm text-text-body", children: "Year-over-year growth heatmap placeholder" }) }) })] })),
};
