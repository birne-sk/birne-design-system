import * as React from "react";
import { cn } from "../lib/utils";

export interface ContentStackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Gap size preset */
  spacing?: "tight" | "default" | "loose";
}

const ContentStack = React.forwardRef<HTMLDivElement, ContentStackProps>(
  ({ className, spacing = "default", ...props }, ref) => {
    const spacingStyles = {
      tight: "[&>*+*]:mt-2 [&>.eyebrow+*]:mt-1 [&>h1+*]:mt-3 [&>h2+*]:mt-3 [&>h3+*]:mt-2 [&>h4+*]:mt-2 [&>h5+*]:mt-2 [&>h6+*]:mt-2",
      default: [
        // Base spacing between all elements
        "[&>*+*]:mt-3",
        // Eyebrow → Heading: tight (label belongs to heading)
        "[&>.eyebrow+h1]:mt-1 [&>.eyebrow+h2]:mt-1 [&>.eyebrow+h3]:mt-1 [&>.eyebrow+h4]:mt-1 [&>.eyebrow+h5]:mt-1 [&>.eyebrow+h6]:mt-1",
        // Heading → Text: medium gap
        "[&>h1+p]:mt-4 [&>h2+p]:mt-4 [&>h3+p]:mt-3 [&>h4+p]:mt-3 [&>h5+p]:mt-3 [&>h6+p]:mt-3",
        // Text → Text: close together
        "[&>p+p]:mt-2",
        // Heading → Heading: extra space
        "[&>h1+h2]:mt-6 [&>h1+h3]:mt-6 [&>h2+h3]:mt-5 [&>h3+h4]:mt-4",
      ].join(" "),
      loose: "[&>*+*]:mt-6 [&>.eyebrow+*]:mt-2 [&>h1+*]:mt-6 [&>h2+*]:mt-5 [&>h3+*]:mt-4 [&>p+p]:mt-3",
    };

    return (
      <div
        ref={ref}
        className={cn(spacingStyles[spacing], className)}
        {...props}
      />
    );
  }
);
ContentStack.displayName = "ContentStack";

export { ContentStack };
