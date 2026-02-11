import * as React from "react";
import { cn } from "../lib/utils";
import { Sparkles } from "lucide-react";
import { AiIcon } from "./AiIcon";

// ============================================
// Gradient helpers
// ============================================

const AI_GRADIENT = "linear-gradient(135deg, #4338CA 0%, #A78BFA 50%, #22D3EE 100%)";
const AI_GRADIENT_ANIMATED = "linear-gradient(135deg, #4338CA 0%, #A78BFA 25%, #22D3EE 50%, #A78BFA 75%, #4338CA 100%)";

function gradientBg(animated: boolean): React.CSSProperties {
  if (!animated) return { background: AI_GRADIENT };
  return {
    background: AI_GRADIENT_ANIMATED,
    backgroundSize: "300% 300%",
    animation: "ai-gradient-shift 3s ease-in-out infinite",
  };
}

// ============================================
// AiBadge
// ============================================

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

const sizeClasses = {
  sm: "px-2.5 py-0.5 text-[10px] gap-1",
  md: "px-3 py-1 text-xs gap-1.5",
  lg: "px-4 py-1.5 text-sm gap-1.5",
} as const;

const iconSizes = { sm: 10, md: 12, lg: 14 } as const;
const aiIconSizes = { sm: "xs", md: "sm", lg: "sm" } as const;

const AiBadge = React.forwardRef<HTMLDivElement, AiBadgeProps>(
  (
    {
      variant = "solid",
      size = "md",
      children,
      icon,
      showIcon = true,
      animated = true,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const hasCustomIcon = icon !== undefined;

    // Solid uses white Lucide icon, glow/stroke use AiIcon with SVG gradient
    const defaultIcon = variant === "solid"
      ? <Sparkles size={iconSizes[size]} />
      : <AiIcon size={aiIconSizes[size]} animated={animated} />;

    const leftIcon = hasCustomIcon ? icon : showIcon ? defaultIcon : null;

    // ---- Variant: solid ----
    // Gradient background, white text + icon
    if (variant === "solid") {
      return (
        <div
          ref={ref}
          className={cn(
            "inline-flex items-center font-text font-medium whitespace-nowrap rounded-full text-white",
            sizeClasses[size],
            className
          )}
          style={{ ...gradientBg(animated), ...style }}
          {...props}
        >
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          {children || "AI"}
        </div>
      );
    }

    // ---- Variant: glow ----
    // White background, gradient text + icon, glow shadow
    if (variant === "glow") {
      return (
        <div
          ref={ref}
          className={cn(
            "inline-flex items-center font-text font-medium whitespace-nowrap rounded-full bg-white",
            sizeClasses[size],
            className
          )}
          style={{
            boxShadow: "0 0 16px rgba(167, 139, 250, 0.4)",
            ...style,
          }}
          {...props}
        >
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          <span
            style={{
              ...gradientBg(animated),
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {children || "AI"}
          </span>
        </div>
      );
    }

    // ---- Variant: stroke ----
    // Gradient text + icon, gradient border
    const borderWidth = size === "sm" ? 1 : 1.5;
    return (
      <div
        ref={ref}
        className={cn("relative inline-flex rounded-full", className)}
        style={{
          padding: `${borderWidth}px`,
          ...gradientBg(animated),
          ...style,
        }}
        {...props}
      >
        <div
          className={cn(
            "inline-flex items-center font-text font-medium whitespace-nowrap rounded-full bg-white",
            sizeClasses[size]
          )}
        >
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          <span
            style={{
              ...gradientBg(animated),
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {children || "AI"}
          </span>
        </div>
      </div>
    );
  }
);
AiBadge.displayName = "AiBadge";

export { AiBadge };
