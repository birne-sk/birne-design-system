import * as React from "react";
export interface PopoverProps {
    /** Trigger element */
    trigger: React.ReactNode;
    /** Popover content */
    children: React.ReactNode;
    /** Alignment relative to trigger */
    align?: "start" | "center" | "end";
    /** Side of trigger to show popover */
    side?: "top" | "bottom" | "left" | "right";
    /** Controlled open state */
    open?: boolean;
    /** Callback when open changes */
    onOpenChange?: (open: boolean) => void;
    /** Trigger on hover instead of click */
    triggerOnHover?: boolean;
    /** Close delay on hover (ms) */
    hoverCloseDelay?: number;
}
declare const Popover: React.ForwardRefExoticComponent<PopoverProps & React.RefAttributes<HTMLDivElement>>;
export { Popover };
//# sourceMappingURL=Popover.d.ts.map