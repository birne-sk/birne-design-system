import * as React from "react";
import { cn } from "../lib/utils";
import { BirneLogoSvg } from "./Header";

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Logo component or element */
  logo?: React.ReactNode;
  /** Footer columns with links */
  columns?: Array<{
    title: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  }>;
  /** Bottom bar content (copyright, etc.) */
  bottomContent?: React.ReactNode;
  /** Social links */
  socialLinks?: React.ReactNode;
  /** Footer variant */
  variant?: "default" | "dark" | "sand";
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  (
    {
      className,
      logo,
      columns,
      bottomContent,
      socialLinks,
      variant = "default",
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default: "bg-birne-sand-20 text-birne-black",
      dark: "bg-birne-black text-white",
      sand: "bg-birne-sand text-birne-black",
    };

    return (
      <footer
        ref={ref}
        className={cn("w-full py-12", variantStyles[variant], className)}
        {...props}
      >
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-1">
              {logo || (
                <div className="text-birne-black mb-4">
                  <BirneLogoSvg />
                </div>
              )}
              <p className="text-sm text-text-body max-w-xs">
                Strategický marketing pre značky, ktoré to myslia vážne.
              </p>
            </div>

            {/* Link Columns */}
            {columns?.map((column, index) => (
              <div key={index}>
                <h4 className="font-display text-md font-medium mb-4">
                  {column.title}
                </h4>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-sm text-text-body hover:text-birne-purple transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-sm text-text-caption">
                {bottomContent || (
                  <>
                    &copy; {new Date().getFullYear()} Birne Studio s.r.o. Všetky
                    práva vyhradené.
                  </>
                )}
              </div>

              {/* Social Links */}
              {socialLinks && (
                <div className="flex items-center gap-4">{socialLinks}</div>
              )}
            </div>
          </div>
        </div>
      </footer>
    );
  }
);
Footer.displayName = "Footer";

export { Footer };
