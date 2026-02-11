import * as React from "react";
import { cn } from "../lib/utils";
import { X } from "lucide-react";

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Controlled open state */
  open: boolean;
  /** Callback when drawer should close */
  onClose: () => void;
  /** Side to open from */
  side?: "left" | "right" | "top" | "bottom";
  /** Drawer title */
  title?: string;
  /** Drawer description */
  description?: string;
  /** Show close button */
  showCloseButton?: boolean;
  /** Close on overlay click */
  closeOnOverlayClick?: boolean;
  /** Close on Escape key */
  closeOnEscape?: boolean;
  /** Width/height of drawer */
  size?: "sm" | "md" | "lg" | "full";
}

const sizeClasses = {
  left: { sm: "w-64", md: "w-80", lg: "w-96", full: "w-full" },
  right: { sm: "w-64", md: "w-80", lg: "w-96", full: "w-full" },
  top: { sm: "h-32", md: "h-48", lg: "h-64", full: "h-full" },
  bottom: { sm: "h-32", md: "h-48", lg: "h-64", full: "h-full" },
};

const positionClasses = {
  left: "inset-y-0 left-0",
  right: "inset-y-0 right-0",
  top: "inset-x-0 top-0",
  bottom: "inset-x-0 bottom-0",
};

const translateClasses = {
  left: { open: "translate-x-0", closed: "-translate-x-full" },
  right: { open: "translate-x-0", closed: "translate-x-full" },
  top: { open: "translate-y-0", closed: "-translate-y-full" },
  bottom: { open: "translate-y-0", closed: "translate-y-full" },
};

const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      className,
      open,
      onClose,
      side = "right",
      title,
      description,
      showCloseButton = true,
      closeOnOverlayClick = true,
      closeOnEscape = true,
      size = "md",
      children,
      ...props
    },
    ref
  ) => {
    // Close on Escape
    React.useEffect(() => {
      if (!closeOnEscape) return;

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onClose();
        }
      };

      if (open) {
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
      }
    }, [open, closeOnEscape, onClose]);

    // Prevent body scroll when open
    React.useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "";
        };
      }
    }, [open]);

    if (!open) return null;

    return (
      <div className="fixed inset-0 z-50">
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50 transition-opacity"
          onClick={closeOnOverlayClick ? onClose : undefined}
        />

        {/* Drawer */}
        <div
          ref={ref}
          className={cn(
            "fixed bg-surface shadow-xl transition-transform duration-300 ease-apple flex flex-col",
            positionClasses[side],
            sizeClasses[side][size],
            open ? translateClasses[side].open : translateClasses[side].closed,
            className
          )}
          {...props}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="flex items-start justify-between p-4 border-b border-border">
              <div>
                {title && (
                  <h2 className="font-display text-lg text-text-heading">
                    {title}
                  </h2>
                )}
                {description && (
                  <p className="font-text text-sm text-text-caption mt-1">
                    {description}
                  </p>
                )}
              </div>
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="p-1 rounded-md hover:bg-birne-black-5 transition-colors"
                >
                  <X size={20} className="text-text-caption" />
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div className="flex-1 overflow-auto p-4">{children}</div>
        </div>
      </div>
    );
  }
);
Drawer.displayName = "Drawer";

export { Drawer };
