import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ServiceIcon, serviceLabels, serviceDescriptions } from "./ServiceIcon";
import { Text, Heading } from "./Typography";
import { Card, CardContent } from "./Card";
const meta = {
    title: "Primitives/ServiceIcon",
    component: ServiceIcon,
    tags: ["autodocs"],
    argTypes: {
        service: {
            control: "select",
            options: ["diagnostika", "exekucia", "strategia", "vzdelavanie"],
        },
        size: {
            control: "number",
        },
    },
};
export default meta;
export const Diagnostika = {
    args: {
        service: "diagnostika",
        size: 82,
    },
};
export const Exekucia = {
    args: {
        service: "exekucia",
        size: 82,
    },
};
export const Strategia = {
    args: {
        service: "strategia",
        size: 82,
    },
};
export const Vzdelavanie = {
    args: {
        service: "vzdelavanie",
        size: 82,
    },
};
export const AllServices = {
    render: () => (_jsxs("div", { className: "flex gap-8 items-center", children: [_jsx(ServiceIcon, { service: "diagnostika" }), _jsx(ServiceIcon, { service: "exekucia" }), _jsx(ServiceIcon, { service: "strategia" }), _jsx(ServiceIcon, { service: "vzdelavanie" })] })),
};
export const Sizes = {
    render: () => (_jsxs("div", { className: "flex gap-8 items-end", children: [_jsx(ServiceIcon, { service: "strategia", size: 32 }), _jsx(ServiceIcon, { service: "strategia", size: 48 }), _jsx(ServiceIcon, { service: "strategia", size: 64 }), _jsx(ServiceIcon, { service: "strategia", size: 82 }), _jsx(ServiceIcon, { service: "strategia", size: 120 })] })),
};
export const CustomColors = {
    render: () => (_jsxs("div", { className: "flex gap-8", children: [_jsx(ServiceIcon, { service: "diagnostika", primaryColor: "#221924", accentColor: "#DCB1E6" }), _jsx(ServiceIcon, { service: "diagnostika", primaryColor: "#221924", accentColor: "#FAFD70" }), _jsx(ServiceIcon, { service: "diagnostika", primaryColor: "#716B74", accentColor: "#DCB1E6" })] })),
};
export const ServiceCards = {
    render: () => {
        const services = ["diagnostika", "strategia", "exekucia", "vzdelavanie"];
        return (_jsx("div", { className: "grid grid-cols-2 gap-4 max-w-2xl", children: services.map((service) => (_jsx(Card, { variant: "outline", className: "p-6", children: _jsxs(CardContent, { className: "flex flex-col items-center text-center gap-4", children: [_jsx(ServiceIcon, { service: service, size: 64 }), _jsxs("div", { children: [_jsx(Heading, { level: "h5", children: serviceLabels[service].sk }), _jsx(Text, { size: "sm", variant: "caption", className: "mt-1", children: serviceDescriptions[service].sk })] })] }) }, service))) }));
    },
};
export const OnDarkBackground = {
    render: () => (_jsxs("div", { className: "bg-birne-black p-8 rounded-lg flex gap-8", children: [_jsx(ServiceIcon, { service: "diagnostika", primaryColor: "#F8F7F8", accentColor: "#DCB1E6" }), _jsx(ServiceIcon, { service: "exekucia", primaryColor: "#F8F7F8", accentColor: "#DCB1E6" }), _jsx(ServiceIcon, { service: "strategia", primaryColor: "#F8F7F8", accentColor: "#DCB1E6" }), _jsx(ServiceIcon, { service: "vzdelavanie", primaryColor: "#F8F7F8", accentColor: "#DCB1E6" })] })),
};
