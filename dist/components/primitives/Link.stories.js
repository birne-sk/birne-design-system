import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "./Link";
import { Text } from "./Typography";
const meta = {
    title: "Primitives/Link",
    component: Link,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "subtle", "muted", "purple"],
        },
        size: {
            control: "select",
            options: ["sm", "base", "lg"],
        },
        external: {
            control: "boolean",
        },
    },
};
export default meta;
export const Default = {
    args: {
        href: "#",
        children: "Default link",
    },
};
export const Subtle = {
    args: {
        href: "#",
        variant: "subtle",
        children: "Subtle link",
    },
};
export const Muted = {
    args: {
        href: "#",
        variant: "muted",
        children: "Muted link",
    },
};
export const Purple = {
    args: {
        href: "#",
        variant: "purple",
        children: "Purple link",
    },
};
export const ExternalLink = {
    args: {
        href: "https://birne.sk",
        children: "External link",
    },
};
export const Sizes = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsx(Link, { href: "#", size: "sm", children: "Small link" }), _jsx(Link, { href: "#", size: "base", children: "Base link" }), _jsx(Link, { href: "#", size: "lg", children: "Large link" })] })),
};
export const AllVariants = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsx(Link, { href: "#", variant: "default", children: "Default (underlined)" }), _jsx(Link, { href: "#", variant: "subtle", children: "Subtle (underline on hover)" }), _jsx(Link, { href: "#", variant: "muted", children: "Muted (caption color)" }), _jsx(Link, { href: "#", variant: "purple", children: "Purple" })] })),
};
export const InlineWithText = {
    render: () => (_jsxs(Text, { children: ["Toto je be\u017En\u00FD text s", " ", _jsx(Link, { href: "#", variant: "default", children: "odkazom" }), " ", "v strede vety. M\u00F4\u017Ee\u0161 tie\u017E pou\u017Ei\u0165", " ", _jsx(Link, { href: "https://birne.sk", children: "extern\u00FD odkaz" }), " s ikonou."] })),
};
export const NoExternalIcon = {
    args: {
        href: "https://birne.sk",
        external: false,
        children: "External link without icon",
    },
};
