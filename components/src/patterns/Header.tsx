import * as React from "react";
import { cn } from "../lib/utils";

const BirneLogoSvg = () => (
  <svg
    width="50"
    height="33"
    viewBox="0 0 66 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.778 36.5728L16.5624 31.2327C18.6601 32.9239 20.2813 33.1249 21.6317 33.1249C25.4161 33.1249 29.8779 28.1911 31.3681 26.0935L32.0455 25.1452C34.3441 21.9682 35.2225 19.3986 34.4097 18.4547C33.2603 17.1699 21.3607 17.3709 8.65267 35.0827L8.5172 35.2837L7.09694 37.3114L5.34019 39.9465L0 36.5685L24.7431 0L30.0833 3.37804L20.1459 18.0483C25.2151 13.9929 38.1941 9.32566 41.5765 13.5864C44.0762 16.6979 41.3056 23.1874 37.5211 28.3222L36.7782 29.3361C33.6012 33.6624 27.4482 40.4884 21.6361 40.4884C17.3753 40.4884 14.8756 38.2597 12.7824 36.5685L12.778 36.5728Z"
      fill="currentColor"
    />
    <path
      d="M65.1704 5.94273L47.9306 31.2933L42.5904 27.9153L59.8302 2.5647L65.1704 5.94273ZM45.6319 34.6757L42.0485 39.9504L36.7083 36.5723L40.2917 31.2977L45.6319 34.6757Z"
      fill="currentColor"
    />
  </svg>
);

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Logo component or element */
  logo?: React.ReactNode;
  /** Navigation items */
  navigation?: React.ReactNode;
  /** Right side actions (buttons, user menu, etc.) */
  actions?: React.ReactNode;
  /** Whether to use a sticky header */
  sticky?: boolean;
  /** Header variant */
  variant?: "default" | "transparent" | "dark";
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  (
    {
      className,
      logo,
      navigation,
      actions,
      sticky = false,
      variant = "default",
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default: "bg-surface border-b border-border",
      transparent: "bg-transparent",
      dark: "bg-birne-black text-white",
    };

    return (
      <header
        ref={ref}
        className={cn(
          "w-full z-50",
          variantStyles[variant],
          sticky && "sticky top-0",
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            {logo || (
              <a href="/" className="text-birne-black hover:opacity-80 transition-opacity">
                <BirneLogoSvg />
              </a>
            )}
          </div>

          {/* Navigation */}
          {navigation && (
            <nav className="hidden md:flex items-center gap-6">
              {navigation}
            </nav>
          )}

          {/* Actions */}
          {actions && (
            <div className="flex items-center gap-4">{actions}</div>
          )}
        </div>
      </header>
    );
  }
);
Header.displayName = "Header";

export { Header, BirneLogoSvg };
