import * as React from "react";
import { cn } from "../lib/utils";

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Predefined shape */
  variant?: "text" | "circular" | "rectangular";
  /** Width (accepts any CSS value) */
  width?: string | number;
  /** Height (accepts any CSS value) */
  height?: string | number;
  /** Disable animation */
  disableAnimation?: boolean;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      className,
      variant = "rectangular",
      width,
      height,
      disableAnimation = false,
      style,
      ...props
    },
    ref
  ) => {
    const variantClasses = {
      text: "rounded h-4 w-full",
      circular: "rounded-full",
      rectangular: "rounded-md",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "bg-birne-black-10",
          !disableAnimation && "animate-pulse",
          variantClasses[variant],
          className
        )}
        style={{
          width: typeof width === "number" ? `${width}px` : width,
          height: typeof height === "number" ? `${height}px` : height,
          ...style,
        }}
        {...props}
      />
    );
  }
);
Skeleton.displayName = "Skeleton";

// ============================================
// Skeleton presets
// ============================================

const SkeletonText = React.forwardRef<
  HTMLDivElement,
  Omit<SkeletonProps, "variant"> & { lines?: number }
>(({ lines = 3, className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-2", className)}>
    {Array.from({ length: lines }).map((_, i) => (
      <Skeleton
        key={i}
        variant="text"
        width={i === lines - 1 ? "60%" : "100%"}
        {...props}
      />
    ))}
  </div>
));
SkeletonText.displayName = "SkeletonText";

const SkeletonAvatar = React.forwardRef<
  HTMLDivElement,
  Omit<SkeletonProps, "variant"> & { size?: "sm" | "md" | "lg" }
>(({ size = "md", className, ...props }, ref) => {
  const sizes = { sm: 32, md: 40, lg: 48 };
  return (
    <Skeleton
      ref={ref}
      variant="circular"
      width={sizes[size]}
      height={sizes[size]}
      className={className}
      {...props}
    />
  );
});
SkeletonAvatar.displayName = "SkeletonAvatar";

const SkeletonCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-4 space-y-4", className)} {...props}>
      <div className="flex items-center gap-3">
        <SkeletonAvatar />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" width="40%" />
          <Skeleton variant="text" width="60%" height={12} />
        </div>
      </div>
      <SkeletonText lines={3} />
    </div>
  )
);
SkeletonCard.displayName = "SkeletonCard";

export { Skeleton, SkeletonText, SkeletonAvatar, SkeletonCard };
