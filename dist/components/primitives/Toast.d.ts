import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const toastVariants: (props?: ({
    variant?: "default" | "error" | "success" | "warning" | "info" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof toastVariants> {
    /** Toast title */
    title?: string;
    /** Toast description */
    description?: string;
    /** Show close button */
    closable?: boolean;
    /** Close callback */
    onClose?: () => void;
    /** Custom icon */
    icon?: React.ReactNode;
    /** Action button */
    action?: React.ReactNode;
}
declare const Toast: React.ForwardRefExoticComponent<ToastProps & React.RefAttributes<HTMLDivElement>>;
export interface ToastContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    position?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
}
declare const ToastContainer: React.ForwardRefExoticComponent<ToastContainerProps & React.RefAttributes<HTMLDivElement>>;
export { Toast, ToastContainer, toastVariants };
//# sourceMappingURL=Toast.d.ts.map