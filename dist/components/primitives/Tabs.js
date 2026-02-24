import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
const TabsContext = React.createContext({
    value: "",
    onValueChange: () => { },
});
const Tabs = React.forwardRef(({ className, defaultValue = "", value: controlledValue, onValueChange, children, ...props }, ref) => {
    const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue);
    const value = controlledValue ?? uncontrolledValue;
    const handleChange = React.useCallback((v) => {
        setUncontrolledValue(v);
        onValueChange?.(v);
    }, [onValueChange]);
    return (_jsx(TabsContext.Provider, { value: { value, onValueChange: handleChange }, children: _jsx("div", { ref: ref, className: cn("w-full", className), ...props, children: children }) }));
});
Tabs.displayName = "Tabs";
const TabsList = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn("inline-flex items-center border-b border-border w-full gap-1", className), role: "tablist", ...props })));
TabsList.displayName = "TabsList";
const TabsTrigger = React.forwardRef(({ className, value, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    const isActive = context.value === value;
    return (_jsx("button", { ref: ref, role: "tab", "aria-selected": isActive, onClick: () => context.onValueChange(value), className: cn("inline-flex items-center justify-center whitespace-nowrap px-4 py-2.5 font-text text-sm font-medium transition-all -mb-px border-b-2", isActive
            ? "border-birne-black text-text-heading"
            : "border-transparent text-text-caption hover:text-text-body hover:border-birne-black-20", className), ...props }));
});
TabsTrigger.displayName = "TabsTrigger";
const TabsContent = React.forwardRef(({ className, value, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    if (context.value !== value)
        return null;
    return (_jsx("div", { ref: ref, role: "tabpanel", className: cn("mt-4", className), ...props }));
});
TabsContent.displayName = "TabsContent";
export { Tabs, TabsList, TabsTrigger, TabsContent };
