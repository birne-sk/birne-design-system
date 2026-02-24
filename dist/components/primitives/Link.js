import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import { ExternalLink } from "lucide-react";
const linkVariants = cva("inline-flex items-center gap-1 font-text transition-all duration-base ease-apple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-birne-lemon focus-visible:ring-offset-2", {
    variants: {
        variant: {
            default: "text-birne-black underline underline-offset-2 hover:opacity-70",
            subtle: "text-birne-black no-underline hover:underline hover:underline-offset-2",
            muted: "text-text-caption no-underline hover:text-text-body",
            purple: "text-birne-purple no-underline hover:underline hover:underline-offset-2",
        },
        size: {
            sm: "text-sm",
            base: "text-base",
            lg: "text-lg",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "base",
    },
});
const Link = React.forwardRef(({ className, variant, size, external, as: Component = "a", children, href, ...props }, ref) => {
    // Auto-detect external links
    const isExternal = external ?? (href?.startsWith("http") || href?.startsWith("//"));
    const externalProps = isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {};
    return (_jsxs(Component, { ref: ref, href: href, className: cn(linkVariants({ variant, size, className })), ...externalProps, ...props, children: [children, isExternal && external !== false && (_jsx(ExternalLink, { className: "h-[1em] w-[1em] shrink-0" }))] }));
});
Link.displayName = "Link";
export { Link, linkVariants };
