import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const inputVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
    variant?: "ghost" | "default" | "filled" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, VariantProps<typeof inputVariants> {
    error?: boolean;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
declare const textareaVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size">, VariantProps<typeof textareaVariants> {
    error?: boolean;
}
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export { Input, inputVariants, Textarea, textareaVariants };
//# sourceMappingURL=Input.d.ts.map