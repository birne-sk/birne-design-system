import * as React from "react";
export type ServiceType = "diagnostika" | "exekucia" | "strategia" | "vzdelavanie";
export interface ServiceIconProps extends React.SVGAttributes<SVGSVGElement> {
    /** Service type */
    service: ServiceType;
    /** Icon size */
    size?: number | string;
    /** Primary color (default: birne-black) */
    primaryColor?: string;
    /** Accent color (default: birne-purple) */
    accentColor?: string;
}
declare const ServiceIcon: React.ForwardRefExoticComponent<ServiceIconProps & React.RefAttributes<SVGSVGElement>>;
export declare const serviceLabels: Record<ServiceType, {
    sk: string;
    en: string;
}>;
export declare const serviceDescriptions: Record<ServiceType, {
    sk: string;
    en: string;
}>;
export { ServiceIcon };
//# sourceMappingURL=ServiceIcon.d.ts.map