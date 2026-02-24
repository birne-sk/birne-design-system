import * as React from "react";
export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Orientation */
    orientation?: "horizontal" | "vertical";
    /** Label in the middle */
    label?: string;
}
declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLDivElement>>;
export { Divider };
//# sourceMappingURL=Divider.d.ts.map