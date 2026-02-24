import * as React from "react";
export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Controlled open state */
    open: boolean;
    /** Callback when drawer should close */
    onClose: () => void;
    /** Side to open from */
    side?: "left" | "right" | "top" | "bottom";
    /** Drawer title */
    title?: string;
    /** Drawer description */
    description?: string;
    /** Show close button */
    showCloseButton?: boolean;
    /** Close on overlay click */
    closeOnOverlayClick?: boolean;
    /** Close on Escape key */
    closeOnEscape?: boolean;
    /** Width/height of drawer */
    size?: "sm" | "md" | "lg" | "full";
}
declare const Drawer: React.ForwardRefExoticComponent<DrawerProps & React.RefAttributes<HTMLDivElement>>;
export { Drawer };
//# sourceMappingURL=Drawer.d.ts.map