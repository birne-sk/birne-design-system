import * as React from "react";
import { cn } from "../lib/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Orientation */
  orientation?: "horizontal" | "vertical";
  /** Label in the middle */
  label?: string;
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, orientation = "horizontal", label, ...props }, ref) => {
    if (orientation === "vertical") {
      return (
        <div
          ref={ref}
          className={cn("w-px bg-border self-stretch", className)}
          role="separator"
          aria-orientation="vertical"
          {...props}
        />
      );
    }

    if (label) {
      return (
        <div
          ref={ref}
          className={cn("flex items-center gap-4", className)}
          role="separator"
          {...props}
        >
          <div className="flex-1 h-px bg-border" />
          <span className="font-text text-sm text-text-caption shrink-0">
            {label}
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn("h-px w-full bg-border", className)}
        role="separator"
        aria-orientation="horizontal"
        {...props}
      />
    );
  }
);
Divider.displayName = "Divider";

export { Divider };
