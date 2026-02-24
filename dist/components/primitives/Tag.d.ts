import * as React from "react";
import { type VariantProps } from "class-variance-authority";
declare const tagVariants: (props?: ({
    variant?: "default" | "purple" | "outline" | "lemon" | "sand" | "selectableLight" | "selectableLightActive" | "selectableDark" | "selectableDarkActive" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof tagVariants> {
    /** Show remove button */
    removable?: boolean;
    /** Callback when remove is clicked */
    onRemove?: () => void;
    /** Left icon/element */
    icon?: React.ReactNode;
    /** Clickable tag */
    clickable?: boolean;
}
export interface SelectableTagProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "onClick"> {
    /** Tag label */
    children: React.ReactNode;
    /** Whether tag is selected/active */
    active?: boolean;
    /** Background context - determines color scheme */
    background?: "light" | "dark";
    /** Size of the tag */
    size?: "sm" | "md" | "lg";
    /** Click handler - called with new active state */
    onClick?: () => void;
    /** Whether tag can be deselected (shows X when active) */
    dismissible?: boolean;
}
declare const SelectableTag: React.ForwardRefExoticComponent<SelectableTagProps & React.RefAttributes<HTMLButtonElement>>;
declare const Tag: React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLSpanElement>>;
export interface TagInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> {
    /** Current tags */
    value: string[];
    /** Callback when tags change */
    onChange: (tags: string[]) => void;
    /** Tag variant */
    tagVariant?: VariantProps<typeof tagVariants>["variant"];
    /** Max tags allowed */
    maxTags?: number;
}
declare const TagInput: React.ForwardRefExoticComponent<TagInputProps & React.RefAttributes<HTMLInputElement>>;
export { Tag, TagInput, SelectableTag, tagVariants };
//# sourceMappingURL=Tag.d.ts.map