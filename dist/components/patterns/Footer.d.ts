import * as React from "react";
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
declare const Footer: React.ForwardRefExoticComponent<FooterProps & React.RefAttributes<HTMLElement>>;
export { Footer };
//# sourceMappingURL=Footer.d.ts.map