import * as React from "react";
declare const BirneLogoSvg: () => import("react/jsx-runtime").JSX.Element;
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
declare const Header: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLElement>>;
export { Header, BirneLogoSvg };
//# sourceMappingURL=Header.d.ts.map