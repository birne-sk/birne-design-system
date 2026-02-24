import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Toast, ToastContainer } from "./Toast";
import { Button } from "./Button";
const meta = {
    title: "Primitives/Toast",
    component: Toast,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "success", "error", "warning", "info"],
        },
    },
};
export default meta;
export const Default = {
    args: {
        title: "Notification",
        description: "This is a default toast message.",
    },
};
export const Success = {
    args: {
        variant: "success",
        title: "Success!",
        description: "Your changes have been saved successfully.",
    },
};
export const Error = {
    args: {
        variant: "error",
        title: "Error",
        description: "Something went wrong. Please try again.",
    },
};
export const Warning = {
    args: {
        variant: "warning",
        title: "Warning",
        description: "Your session will expire in 5 minutes.",
    },
};
export const Info = {
    args: {
        variant: "info",
        title: "Did you know?",
        description: "You can use keyboard shortcuts to navigate faster.",
    },
};
export const WithAction = {
    args: {
        variant: "default",
        title: "New update available",
        description: "A new version of the app is ready to install.",
        action: (_jsx(Button, { size: "sm", variant: "soft", children: "Update now" })),
    },
};
export const AllVariants = {
    render: () => (_jsxs("div", { className: "flex flex-col gap-3 max-w-sm", children: [_jsx(Toast, { title: "Default", description: "This is a default toast." }), _jsx(Toast, { variant: "success", title: "Success", description: "Operation completed." }), _jsx(Toast, { variant: "error", title: "Error", description: "Something went wrong." }), _jsx(Toast, { variant: "warning", title: "Warning", description: "Please be careful." }), _jsx(Toast, { variant: "info", title: "Info", description: "Here's some information." })] })),
};
export const InContainer = {
    render: () => (_jsx("div", { className: "relative h-64 bg-birne-sand-20 rounded-lg", children: _jsx(ToastContainer, { position: "bottom-right", children: _jsx(Toast, { variant: "success", title: "Saved!", description: "Your changes have been saved." }) }) })),
};
