import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Info, CheckCircle, AlertTriangle, AlertCircle } from "lucide-react";
import { cn } from "../lib/utils";

const alertVariants = cva(
  "relative w-full rounded-md border px-4 py-3 font-text text-sm flex items-center gap-3",
  {
    variants: {
      variant: {
        info: "bg-blue-50 border-blue-200 text-blue-800",
        success: "bg-green-50 border-green-200 text-green-800",
        warning: "bg-amber-50 border-amber-200 text-amber-800",
        destructive: "bg-red-50 border-red-200 text-red-800",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

const defaultIcons: Record<string, React.ReactNode> = {
  info: <Info size={18} strokeWidth={1.5} />,
  success: <CheckCircle size={18} strokeWidth={1.5} />,
  warning: <AlertTriangle size={18} strokeWidth={1.5} />,
  destructive: <AlertCircle size={18} strokeWidth={1.5} />,
};

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: React.ReactNode;
  onDismiss?: () => void;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "info", icon, onDismiss, children, ...props }, ref) => {
    const displayIcon = icon !== undefined ? icon : defaultIcons[variant || "info"];

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant, className }))}
        {...props}
      >
        {displayIcon && <span className="shrink-0">{displayIcon}</span>}
        <div className="flex-1">{children}</div>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="shrink-0 opacity-60 hover:opacity-100 transition-opacity"
            aria-label="Dismiss"
          >
            ✕
          </button>
        )}
      </div>
    );
  }
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("font-medium leading-none mb-1", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription, alertVariants };
