import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const selectVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface SelectOption {
    label: string;
    value: string;
    disabled?: boolean;
}
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">, VariantProps<typeof selectVariants> {
    options: SelectOption[];
    placeholder?: string;
    error?: boolean;
}
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
export { Select, selectVariants };
//# sourceMappingURL=Select.d.ts.map