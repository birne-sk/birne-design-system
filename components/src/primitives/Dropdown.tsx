import * as React from "react";
import { cn } from "../lib/utils";
import { ChevronDown, Check } from "lucide-react";

// ============================================
// Dropdown Menu
// ============================================

export interface DropdownProps {
  /** Trigger element */
  trigger: React.ReactNode;
  /** Menu items */
  children: React.ReactNode;
  /** Alignment */
  align?: "start" | "center" | "end";
  /** Controlled open state */
  open?: boolean;
  /** Callback when open changes */
  onOpenChange?: (open: boolean) => void;
  /** Disable the dropdown */
  disabled?: boolean;
}

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ trigger, children, align = "start", open, onOpenChange, disabled }, ref) => {
    const [internalOpen, setInternalOpen] = React.useState(false);
    const isOpen = open ?? internalOpen;
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    const handleOpenChange = (newOpen: boolean) => {
      setInternalOpen(newOpen);
      onOpenChange?.(newOpen);
    };

    // Close on click outside
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          handleOpenChange(false);
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }
    }, [isOpen]);

    // Close on Escape
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

    const alignClasses = {
      start: "left-0",
      center: "left-1/2 -translate-x-1/2",
      end: "right-0",
    };

    return (
      <div ref={dropdownRef} className="relative inline-block">
        <div
          onClick={() => !disabled && handleOpenChange(!isOpen)}
          className={cn(disabled && "opacity-50 cursor-not-allowed")}
        >
          {trigger}
        </div>
        {isOpen && (
          <div
            ref={ref}
            className={cn(
              "absolute z-50 mt-1 min-w-[180px] rounded-lg border border-border bg-surface p-1 shadow-lg",
              "animate-in fade-in-0 zoom-in-95",
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
Dropdown.displayName = "Dropdown";

// ============================================
// Dropdown Item
// ============================================

export interface DropdownItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Left icon */
  icon?: React.ReactNode;
  /** Right element (e.g., shortcut, badge) */
  suffix?: React.ReactNode;
  /** Destructive action styling */
  destructive?: boolean;
  /** Show checkmark (for selectable items) */
  selected?: boolean;
}

const DropdownItem = React.forwardRef<HTMLButtonElement, DropdownItemProps>(
  (
    { className, icon, suffix, destructive, selected, children, disabled, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm font-text text-left transition-colors",
          "hover:bg-birne-black-5 focus:bg-birne-black-5 focus:outline-none",
          destructive && "text-red-600 hover:bg-red-50 focus:bg-red-50",
          disabled && "opacity-50 cursor-not-allowed hover:bg-transparent",
          className
        )}
        disabled={disabled}
        {...props}
      >
        {selected !== undefined && (
          <span className="w-4 shrink-0">
            {selected && <Check size={16} />}
          </span>
        )}
        {icon && <span className="shrink-0 w-4">{icon}</span>}
        <span className="flex-1">{children}</span>
        {suffix && (
          <span className="shrink-0 text-text-caption text-xs">{suffix}</span>
        )}
      </button>
    );
  }
);
DropdownItem.displayName = "DropdownItem";

// ============================================
// Dropdown Separator
// ============================================

const DropdownSeparator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("my-1 h-px bg-border", className)}
    {...props}
  />
));
DropdownSeparator.displayName = "DropdownSeparator";

// ============================================
// Dropdown Label
// ============================================

const DropdownLabel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-xs font-medium text-text-caption",
      className
    )}
    {...props}
  />
));
DropdownLabel.displayName = "DropdownLabel";

export { Dropdown, DropdownItem, DropdownSeparator, DropdownLabel };
