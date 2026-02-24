import * as React from "react";
export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
    content: string;
    position?: "top" | "bottom" | "left" | "right";
}
declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps & React.RefAttributes<HTMLDivElement>>;
export { Tooltip };
//# sourceMappingURL=Tooltip.d.ts.map