import * as React from "react";
export interface AccordionItemData {
    id: string;
    trigger: React.ReactNode;
    content: React.ReactNode;
}
export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    items: AccordionItemData[];
    /** Allow multiple items open at once */
    multiple?: boolean;
    /** Default open item IDs */
    defaultOpen?: string[];
    /** Variant */
    variant?: "default" | "separated";
}
declare const Accordion: React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<HTMLDivElement>>;
export { Accordion };
//# sourceMappingURL=Accordion.d.ts.map