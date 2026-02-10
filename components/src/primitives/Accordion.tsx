import * as React from "react";
import { cn } from "../lib/utils";

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

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={cn(
      "text-text-caption transition-transform duration-200",
      open && "rotate-180"
    )}
  >
    <path
      d="M4 6L8 10L12 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ className, items, multiple = false, defaultOpen = [], variant = "default", ...props }, ref) => {
    const [openItems, setOpenItems] = React.useState<Set<string>>(
      new Set(defaultOpen)
    );

    const toggle = (id: string) => {
      setOpenItems((prev) => {
        const next = new Set(multiple ? prev : []);
        if (prev.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
        }
        return next;
      });
    };

    return (
      <div
        ref={ref}
        className={cn(
          variant === "separated" ? "space-y-2" : "divide-y divide-border",
          className
        )}
        {...props}
      >
        {items.map((item) => {
          const isOpen = openItems.has(item.id);
          return (
            <div
              key={item.id}
              className={cn(
                variant === "separated" &&
                  "bg-birne-black-2 rounded-lg overflow-hidden"
              )}
            >
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className={cn(
                  "flex w-full items-center justify-between py-4 text-left font-display font-normal text-text-heading transition-colors hover:text-birne-black-80",
                  variant === "separated" && "px-5"
                )}
                aria-expanded={isOpen}
              >
                <span className="text-base">{item.trigger}</span>
                <ChevronIcon open={isOpen} />
              </button>
              <div
                className={cn(
                  "grid transition-all duration-200",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden">
                  <div
                    className={cn(
                      "pb-4 font-text text-sm text-text-body",
                      variant === "separated" && "px-5"
                    )}
                  >
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);
Accordion.displayName = "Accordion";

export { Accordion };
