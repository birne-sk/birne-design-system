import * as React from "react";
export interface AiGlowProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Glow intensity */
    intensity?: "sm" | "md" | "lg";
    /** Enable pulse animation */
    animated?: boolean;
    /** Children to wrap */
    children: React.ReactNode;
}
declare const AiGlow: React.ForwardRefExoticComponent<AiGlowProps & React.RefAttributes<HTMLDivElement>>;
export { AiGlow };
//# sourceMappingURL=AiGlow.d.ts.map