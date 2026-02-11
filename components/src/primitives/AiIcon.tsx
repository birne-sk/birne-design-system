import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

// ============================================
// AiIcon - Sparkle Stars SVG with gradient
// ============================================

const aiIconVariants = cva("inline-block shrink-0", {
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-12 w-12",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface AiIconProps
  extends React.SVGAttributes<SVGSVGElement>,
    VariantProps<typeof aiIconVariants> {
  /** Enable gradient animation (default: true) */
  animated?: boolean;
  /** Override color (disables gradient, uses solid color) */
  color?: string;
}

/**
 * Three-star sparkle icon with animated gradient strokes.
 * The gradient rotates continuously for an "alive" AI feel.
 *
 * Stars: One large (center-left), two smaller (top-right, bottom-right)
 */
const AiIcon = React.forwardRef<SVGSVGElement, AiIconProps>(
  ({ className, size, animated = true, color, style, ...props }, ref) => {
    // Unique ID per instance for SVG gradient references
    const id = React.useId();
    const gradientId = `ai-grad-${id}`;

    const useGradient = !color;

    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(aiIconVariants({ size }), className)}
        style={style}
        {...props}
      >
        {useGradient && (
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4338CA" />
              <stop offset="50%" stopColor="#A78BFA" />
              <stop offset="100%" stopColor="#22D3EE" />
              {animated && (
                <animateTransform
                  attributeName="gradientTransform"
                  type="rotate"
                  values="0 0.5 0.5;360 0.5 0.5"
                  dur="3s"
                  repeatCount="indefinite"
                />
              )}
            </linearGradient>
          </defs>
        )}

        {/* Main sparkle (large, center-left) */}
        <path
          d="M9.5 2L11.2 8.8L18 10.5L11.2 12.2L9.5 19L7.8 12.2L1 10.5L7.8 8.8L9.5 2Z"
          fill={useGradient ? `url(#${gradientId})` : color}
        />

        {/* Small sparkle (top-right) */}
        <path
          d="M18.5 5L19.4 8.1L22.5 9L19.4 9.9L18.5 13L17.6 9.9L14.5 9L17.6 8.1L18.5 5Z"
          fill={useGradient ? `url(#${gradientId})` : color}
          opacity="0.8"
        />

        {/* Small sparkle (bottom-right) */}
        <path
          d="M17 15L17.7 17.3L20 18L17.7 18.7L17 21L16.3 18.7L14 18L16.3 17.3L17 15Z"
          fill={useGradient ? `url(#${gradientId})` : color}
          opacity="0.6"
        />
      </svg>
    );
  }
);
AiIcon.displayName = "AiIcon";

export { AiIcon, aiIconVariants };
