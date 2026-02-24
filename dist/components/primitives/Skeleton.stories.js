import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Skeleton, SkeletonText, SkeletonAvatar, SkeletonCard } from "./Skeleton";
const meta = {
    title: "Primitives/Skeleton",
    component: Skeleton,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["text", "circular", "rectangular"],
        },
    },
};
export default meta;
export const Default = {
    args: {
        width: 200,
        height: 40,
    },
};
export const Text = {
    render: () => _jsx(SkeletonText, { lines: 3, className: "max-w-md" }),
};
export const Avatar = {
    render: () => (_jsxs("div", { className: "flex gap-4", children: [_jsx(SkeletonAvatar, { size: "sm" }), _jsx(SkeletonAvatar, { size: "md" }), _jsx(SkeletonAvatar, { size: "lg" })] })),
};
export const Card = {
    render: () => (_jsx("div", { className: "max-w-sm border border-border rounded-lg", children: _jsx(SkeletonCard, {}) })),
};
export const Shapes = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsx(Skeleton, { variant: "text", width: "100%" }), _jsx(Skeleton, { variant: "text", width: "80%" }), _jsx(Skeleton, { variant: "rectangular", width: 200, height: 100 }), _jsx(Skeleton, { variant: "circular", width: 48, height: 48 })] })),
};
export const ListItem = {
    render: () => (_jsx("div", { className: "space-y-4", children: [1, 2, 3].map((i) => (_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(SkeletonAvatar, {}), _jsxs("div", { className: "flex-1 space-y-2", children: [_jsx(Skeleton, { variant: "text", width: "40%" }), _jsx(Skeleton, { variant: "text", width: "70%", height: 12 })] })] }, i))) })),
};
export const NoAnimation = {
    args: {
        width: 200,
        height: 40,
        disableAnimation: true,
    },
};
