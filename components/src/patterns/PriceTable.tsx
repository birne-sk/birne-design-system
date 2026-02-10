import * as React from "react";
import { cn } from "../lib/utils";

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

const PriceTable = React.forwardRef<HTMLDivElement, PriceTableProps>(
  (
    {
      className,
      title,
      items,
      total,
      totalLabel = "Celkom",
      footerNote,
      currency = "€",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("bg-surface rounded-lg overflow-hidden", className)}
        {...props}
      >
        {/* Header */}
        {title && (
          <div className="px-6 py-4 bg-birne-sand-40 border-b border-border">
            <h3 className="font-display text-lg font-medium text-text-heading">
              {title}
            </h3>
          </div>
        )}

        {/* Items */}
        <div className="divide-y divide-border">
          {items.map((item, index) => (
            <div
              key={index}
              className="px-6 py-4 flex justify-between items-start"
            >
              <div className="flex-1">
                <p className="font-text text-base text-text-heading">
                  {item.description}
                </p>
                {item.note && (
                  <p className="font-text text-sm text-text-caption mt-1">
                    {item.note}
                  </p>
                )}
              </div>
              <div className="text-right ml-4">
                <span className="font-text text-base font-medium text-text-heading whitespace-nowrap">
                  {item.price} {currency}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Total */}
        {total && (
          <div className="px-6 py-4 bg-birne-black flex justify-between items-center">
            <span className="font-text text-base font-medium text-white">
              {totalLabel}
            </span>
            <span className="font-display text-xl font-medium text-white">
              {total} {currency}
            </span>
          </div>
        )}

        {/* Footer Note */}
        {footerNote && (
          <div className="px-6 py-3 bg-birne-sand-20 border-t border-border">
            <p className="font-text text-xs text-text-caption">{footerNote}</p>
          </div>
        )}
      </div>
    );
  }
);
PriceTable.displayName = "PriceTable";

export { PriceTable };
