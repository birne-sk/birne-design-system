import * as React from "react";
import { cn } from "../lib/utils";

// ============================================
// AiGlow - Wrapper that adds AI glow effect
// ============================================

const glowValues = {
  sm: "0 0 8px rgba(167, 139, 250, 0.3)",
  md: "0 0 16px rgba(167, 139, 250, 0.4)",
  lg: "0 0 24px rgba(167, 139, 250, 0.5)",
} as const;

export interface AiGlowProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Glow intensity */
  intensity?: "sm" | "md" | "lg";
  /** Enable pulse animation */
  animated?: boolean;
  /** Children to wrap */
  children: React.ReactNode;
}

const AiGlow = React.forwardRef<HTMLDivElement, AiGlowProps>(
  ({ intensity = "md", animated = false, className, children, style, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("inline-flex", className)}
        style={{
          boxShadow: glowValues[intensity],
          borderRadius: "inherit",
          animation: animated ? "ai-glow-pulse 2s ease-in-out infinite" : undefined,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
);
AiGlow.displayName = "AiGlow";

export { AiGlow };
