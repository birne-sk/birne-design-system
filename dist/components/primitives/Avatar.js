import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";
import { User } from "lucide-react";
const avatarVariants = cva("relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-birne-sand-60 text-birne-black font-text font-medium", {
    variants: {
        size: {
            xs: "h-6 w-6 text-xs",
            sm: "h-8 w-8 text-sm",
            md: "h-10 w-10 text-base",
            lg: "h-12 w-12 text-lg",
            xl: "h-16 w-16 text-xl",
            "2xl": "h-20 w-20 text-2xl",
        },
    },
    defaultVariants: {
        size: "md",
    },
});
const Avatar = React.forwardRef(({ className, size, src, alt, initials, status, ...props }, ref) => {
    const [imageError, setImageError] = React.useState(false);
    const iconSizes = {
        xs: 12,
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
        "2xl": 40,
    };
    const statusColors = {
        online: "bg-green-500",
        offline: "bg-gray-400",
        away: "bg-yellow-500",
        busy: "bg-red-500",
    };
    const statusSizes = {
        xs: "h-1.5 w-1.5 border",
        sm: "h-2 w-2 border",
        md: "h-2.5 w-2.5 border-2",
        lg: "h-3 w-3 border-2",
        xl: "h-4 w-4 border-2",
        "2xl": "h-5 w-5 border-2",
    };
    return (_jsxs("div", { ref: ref, className: cn(avatarVariants({ size, className })), ...props, children: [src && !imageError ? (_jsx("img", { src: src, alt: alt || "Avatar", className: "h-full w-full object-cover", onError: () => setImageError(true) })) : initials ? (_jsx("span", { children: initials })) : (_jsx(User, { size: iconSizes[size || "md"], className: "text-birne-black-60" })), status && (_jsx("span", { className: cn("absolute bottom-0 right-0 rounded-full border-white", statusColors[status], statusSizes[size || "md"]) }))] }));
});
Avatar.displayName = "Avatar";
const AvatarGroup = React.forwardRef(({ className, max = 4, size = "md", children, ...props }, ref) => {
    const childArray = React.Children.toArray(children);
    const visibleChildren = childArray.slice(0, max);
    const remainingCount = childArray.length - max;
    const overlapSizes = {
        xs: "-ml-1.5",
        sm: "-ml-2",
        md: "-ml-2.5",
        lg: "-ml-3",
        xl: "-ml-4",
        "2xl": "-ml-5",
    };
    return (_jsxs("div", { ref: ref, className: cn("flex items-center", className), ...props, children: [visibleChildren.map((child, index) => (_jsx("div", { className: cn("ring-2 ring-white rounded-full", index > 0 && overlapSizes[size || "md"]), children: React.isValidElement(child)
                    ? React.cloneElement(child, { size })
                    : child }, index))), remainingCount > 0 && (_jsx("div", { className: cn(avatarVariants({ size }), "ring-2 ring-white bg-birne-black-10", overlapSizes[size || "md"]), children: _jsxs("span", { className: "text-birne-black-60", children: ["+", remainingCount] }) }))] }));
});
AvatarGroup.displayName = "AvatarGroup";
export { Avatar, AvatarGroup, avatarVariants };
