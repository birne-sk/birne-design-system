import * as React from "react";
import { cn } from "../lib/utils";

export interface BreadcrumbItem {
  label?: string;
  icon?: React.ReactNode;
  href?: string;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ className, items, separator, ...props }, ref) => {
    const sep = separator || (
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-text-caption">
        <path d="M4.5 3L7.5 6L4.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );

    return (
      <nav ref={ref} aria-label="Breadcrumb" className={cn("font-text", className)} {...props}>
        <ol className="flex items-center gap-1.5 text-sm">
          {items.map((item, i) => (
            <React.Fragment key={i}>
              {i > 0 && <li className="flex items-center">{sep}</li>}
              <li>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-text-caption hover:text-text-heading transition-colors flex items-center"
                  >
                    {item.icon || item.label}
                  </a>
                ) : (
                  <span className="text-text-heading font-medium flex items-center">{item.icon || item.label}</span>
                )}
              </li>
            </React.Fragment>
          ))}
        </ol>
      </nav>
    );
  }
);
Breadcrumb.displayName = "Breadcrumb";

export { Breadcrumb };
