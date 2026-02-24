import * as React from "react";
export interface DropdownProps {
    /** Trigger element */
    trigger: React.ReactNode;
    /** Menu items */
    children: React.ReactNode;
    /** Alignment */
    align?: "start" | "center" | "end";
    /** Controlled open state */
    open?: boolean;
    /** Callback when open changes */
    onOpenChange?: (open: boolean) => void;
    /** Disable the dropdown */
    disabled?: boolean;
}
declare const Dropdown: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLDivElement>>;
export interface DropdownItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Left icon */
    icon?: React.ReactNode;
    /** Right element (e.g., shortcut, badge) */
    suffix?: React.ReactNode;
    /** Destructive action styling */
    destructive?: boolean;
    /** Show checkmark (for selectable items) */
    selected?: boolean;
}
declare const DropdownItem: React.ForwardRefExoticComponent<DropdownItemProps & React.RefAttributes<HTMLButtonElement>>;
declare const DropdownSeparator: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownLabel: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
export { Dropdown, DropdownItem, DropdownSeparator, DropdownLabel };
//# sourceMappingURL=Dropdown.d.ts.map