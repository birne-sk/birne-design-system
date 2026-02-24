import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, AvatarGroup } from "./Avatar";
const meta = {
    title: "Primitives/Avatar",
    component: Avatar,
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl", "2xl"],
        },
        status: {
            control: "select",
            options: [undefined, "online", "offline", "away", "busy"],
        },
    },
};
export default meta;
export const Default = {
    args: {},
};
export const WithImage = {
    args: {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
        alt: "John Doe",
    },
};
export const WithInitials = {
    args: {
        initials: "JH",
    },
};
export const Sizes = {
    render: () => (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Avatar, { size: "xs", initials: "XS" }), _jsx(Avatar, { size: "sm", initials: "SM" }), _jsx(Avatar, { size: "md", initials: "MD" }), _jsx(Avatar, { size: "lg", initials: "LG" }), _jsx(Avatar, { size: "xl", initials: "XL" }), _jsx(Avatar, { size: "2xl", initials: "2X" })] })),
};
export const WithStatus = {
    render: () => (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Avatar, { initials: "ON", status: "online" }), _jsx(Avatar, { initials: "OF", status: "offline" }), _jsx(Avatar, { initials: "AW", status: "away" }), _jsx(Avatar, { initials: "BS", status: "busy" })] })),
};
export const Group = {
    render: () => (_jsxs(AvatarGroup, { max: 3, children: [_jsx(Avatar, { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop", alt: "User 1" }), _jsx(Avatar, { initials: "AB" }), _jsx(Avatar, { initials: "CD" }), _jsx(Avatar, { initials: "EF" }), _jsx(Avatar, { initials: "GH" })] })),
};
export const GroupSizes = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsxs(AvatarGroup, { max: 4, size: "sm", children: [_jsx(Avatar, { initials: "A" }), _jsx(Avatar, { initials: "B" }), _jsx(Avatar, { initials: "C" }), _jsx(Avatar, { initials: "D" }), _jsx(Avatar, { initials: "E" })] }), _jsxs(AvatarGroup, { max: 4, size: "md", children: [_jsx(Avatar, { initials: "A" }), _jsx(Avatar, { initials: "B" }), _jsx(Avatar, { initials: "C" }), _jsx(Avatar, { initials: "D" }), _jsx(Avatar, { initials: "E" })] }), _jsxs(AvatarGroup, { max: 4, size: "lg", children: [_jsx(Avatar, { initials: "A" }), _jsx(Avatar, { initials: "B" }), _jsx(Avatar, { initials: "C" }), _jsx(Avatar, { initials: "D" }), _jsx(Avatar, { initials: "E" })] })] })),
};
