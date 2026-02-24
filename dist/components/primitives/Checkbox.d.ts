import * as React from "react";
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
    label?: React.ReactNode;
    description?: string;
    error?: boolean;
    size?: "sm" | "md";
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export interface RadioOption {
    label: string;
    value: string;
    description?: string;
    disabled?: boolean;
}
export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
    name: string;
    options: RadioOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    direction?: "horizontal" | "vertical";
}
declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLDivElement>>;
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
    label?: React.ReactNode;
    size?: "md" | "lg";
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
export { Checkbox, RadioGroup, Switch };
//# sourceMappingURL=Checkbox.d.ts.map