import * as React from "react";
import { cn } from "../lib/utils";

export interface PopoverProps {
  /** Trigger element */
  trigger: React.ReactNode;
  /** Popover content */
  children: React.ReactNode;
  /** Alignment relative to trigger */
  align?: "start" | "center" | "end";
  /** Side of trigger to show popover */
  side?: "top" | "bottom" | "left" | "right";
  /** Controlled open state */
  open?: boolean;
  /** Callback when open changes */
  onOpenChange?: (open: boolean) => void;
  /** Trigger on hover instead of click */
  triggerOnHover?: boolean;
  /** Close delay on hover (ms) */
  hoverCloseDelay?: number;
}

const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      trigger,
      children,
      align = "center",
      side = "bottom",
      open,
      onOpenChange,
      triggerOnHover = false,
      hoverCloseDelay = 150,
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = React.useState(false);
    const isOpen = open ?? internalOpen;
    const popoverRef = React.useRef<HTMLDivElement>(null);
    const closeTimeoutRef = React.useRef<NodeJS.Timeout>();

    const handleOpenChange = (newOpen: boolean) => {
      setInternalOpen(newOpen);
      onOpenChange?.(newOpen);
    };

    // Click outside to close
    React.useEffect(() => {
      if (triggerOnHover) return;

      const handleClickOutside = (event: MouseEvent) => {
        if (
          popoverRef.current &&
          !popoverRef.current.contains(event.target as Node)
        ) {
          handleOpenChange(false);
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [isOpen, triggerOnHover]);

    // Escape to close
    React.useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          handleOpenChange(false);
        }
      };

      if (isOpen) {
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
      }
    }, [isOpen]);

    const handleMouseEnter = () => {
      if (!triggerOnHover) return;
      clearTimeout(closeTimeoutRef.current);
      handleOpenChange(true);
    };

    const handleMouseLeave = () => {
      if (!triggerOnHover) return;
      closeTimeoutRef.current = setTimeout(() => {
        handleOpenChange(false);
      }, hoverCloseDelay);
    };

    const sideClasses = {
      top: "bottom-full mb-2",
      bottom: "top-full mt-2",
      left: "right-full mr-2",
      right: "left-full ml-2",
    };

    const alignClasses = {
      start: side === "top" || side === "bottom" ? "left-0" : "top-0",
      center:
        side === "top" || side === "bottom"
          ? "left-1/2 -translate-x-1/2"
          : "top-1/2 -translate-y-1/2",
      end: side === "top" || side === "bottom" ? "right-0" : "bottom-0",
    };

    return (
      <div
        ref={popoverRef}
        className="relative inline-block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          onClick={() => !triggerOnHover && handleOpenChange(!isOpen)}
          className="cursor-pointer"
        >
          {trigger}
        </div>
        {isOpen && (
          <div
            ref={ref}
            className={cn(
              "absolute z-50 min-w-[200px] rounded-lg border border-border bg-surface p-3 shadow-lg",
              "animate-in fade-in-0 zoom-in-95",
              sideClasses[side],
              alignClasses[align]
            )}
          >
            {children}
          </div>
        )}
      </div>
    );
  }
);
Popover.displayName = "Popover";

export { Popover };
