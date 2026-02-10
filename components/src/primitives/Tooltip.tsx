import * as React from "react";
import { cn } from "../lib/utils";

export interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  position?: "top" | "bottom" | "left" | "right";
}

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ className, content, position = "top", children, ...props }, ref) => {
    const [visible, setVisible] = React.useState(false);

    const positionClasses = {
      top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
      bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
      left: "right-full top-1/2 -translate-y-1/2 mr-3",
      right: "left-full top-1/2 -translate-y-1/2 ml-3",
    };

    const arrowPosition = {
      top: "left-1/2 -translate-x-1/2 -bottom-[4px]",
      bottom: "left-1/2 -translate-x-1/2 -top-[4px]",
      left: "top-1/2 -translate-y-1/2 -right-[4px]",
      right: "top-1/2 -translate-y-1/2 -left-[4px]",
    };

    return (
      <div
        ref={ref}
        className={cn("relative inline-flex", className)}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        {...props}
      >
        {children}
        {visible && (
          <div
            role="tooltip"
            style={{ filter: "drop-shadow(0 0 0.5px rgba(0,0,0,0.15)) drop-shadow(0 4px 12px rgba(0,0,0,0.04))" }}
            className={cn(
              "absolute z-50 pointer-events-none",
              positionClasses[position]
            )}
          >
            <div className="relative">
              <div className="relative z-10 px-4 py-3 rounded-sm bg-white text-text-body font-text text-xs min-w-[200px] max-w-sm whitespace-normal">
                {content}
              </div>
              <span
                className={cn(
                  "absolute z-[5] h-[8px] w-[8px] rotate-45 bg-white",
                  arrowPosition[position]
                )}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
);
Tooltip.displayName = "Tooltip";

export { Tooltip };
