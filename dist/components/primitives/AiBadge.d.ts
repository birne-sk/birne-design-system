import * as React from "react";
export interface AiBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * solid  — gradient pozadie, biely text + ikona
     * glow   — biele pozadie, gradient text + ikona, glow
     * stroke — gradient text + ikona, gradient stroke (border)
     */
    variant?: "solid" | "glow" | "stroke";
    /** sm | md | lg */
    size?: "sm" | "md" | "lg";
    children?: React.ReactNode;
    /** Left icon (default: Sparkles for solid, AiIcon for glow/stroke) */
    icon?: React.ReactNode;
    /** Show default icon (default: true) */
    showIcon?: boolean;
    /** Animate gradient (default: true) */
    animated?: boolean;
}
declare const AiBadge: React.ForwardRefExoticComponent<AiBadgeProps & React.RefAttributes<HTMLDivElement>>;
export { AiBadge };
//# sourceMappingURL=AiBadge.d.ts.map