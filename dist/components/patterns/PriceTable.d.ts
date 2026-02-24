import * as React from "react";
export interface PriceItem {
    description: string;
    price: string;
    note?: string;
}
export interface PriceTableProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Table title */
    title?: string;
    /** Price items */
    items: PriceItem[];
    /** Total amount */
    total?: string;
    /** Total label */
    totalLabel?: string;
    /** Footer note */
    footerNote?: string;
    /** Currency symbol */
    currency?: string;
}
declare const PriceTable: React.ForwardRefExoticComponent<PriceTableProps & React.RefAttributes<HTMLDivElement>>;
export { PriceTable };
//# sourceMappingURL=PriceTable.d.ts.map