import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Dropdown, DropdownItem, DropdownSeparator, DropdownLabel } from "./Dropdown";
import { Button } from "./Button";
import { Settings, User, LogOut, CreditCard, Keyboard, ChevronDown, Edit, Copy, Trash } from "lucide-react";
const meta = {
    title: "Primitives/Dropdown",
    component: Dropdown,
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => (_jsxs(Dropdown, { trigger: _jsxs(Button, { variant: "soft", children: ["Options ", _jsx(ChevronDown, { size: 16 })] }), children: [_jsx(DropdownItem, { icon: _jsx(Edit, { size: 16 }), children: "Edit" }), _jsx(DropdownItem, { icon: _jsx(Copy, { size: 16 }), children: "Duplicate" }), _jsx(DropdownSeparator, {}), _jsx(DropdownItem, { icon: _jsx(Trash, { size: 16 }), destructive: true, children: "Delete" })] })),
};
export const WithLabels = {
    render: () => (_jsxs(Dropdown, { trigger: _jsxs(Button, { variant: "soft", children: ["Account ", _jsx(ChevronDown, { size: 16 })] }), children: [_jsx(DropdownLabel, { children: "My Account" }), _jsx(DropdownItem, { icon: _jsx(User, { size: 16 }), children: "Profile" }), _jsx(DropdownItem, { icon: _jsx(CreditCard, { size: 16 }), children: "Billing" }), _jsx(DropdownItem, { icon: _jsx(Settings, { size: 16 }), children: "Settings" }), _jsx(DropdownItem, { icon: _jsx(Keyboard, { size: 16 }), suffix: "Ctrl+K", children: "Shortcuts" }), _jsx(DropdownSeparator, {}), _jsx(DropdownItem, { icon: _jsx(LogOut, { size: 16 }), children: "Log out" })] })),
};
export const Selectable = {
    render: () => (_jsxs(Dropdown, { trigger: _jsxs(Button, { variant: "soft", children: ["Status ", _jsx(ChevronDown, { size: 16 })] }), children: [_jsx(DropdownItem, { selected: true, children: "Active" }), _jsx(DropdownItem, { selected: false, children: "Inactive" }), _jsx(DropdownItem, { selected: false, children: "Pending" })] })),
};
export const AlignEnd = {
    render: () => (_jsx("div", { className: "flex justify-end", children: _jsxs(Dropdown, { align: "end", trigger: _jsxs(Button, { variant: "soft", children: ["Menu ", _jsx(ChevronDown, { size: 16 })] }), children: [_jsx(DropdownItem, { children: "Option 1" }), _jsx(DropdownItem, { children: "Option 2" }), _jsx(DropdownItem, { children: "Option 3" })] }) })),
};
export const DisabledItems = {
    render: () => (_jsxs(Dropdown, { trigger: _jsxs(Button, { variant: "soft", children: ["Actions ", _jsx(ChevronDown, { size: 16 })] }), children: [_jsx(DropdownItem, { icon: _jsx(Edit, { size: 16 }), children: "Edit" }), _jsx(DropdownItem, { icon: _jsx(Copy, { size: 16 }), disabled: true, children: "Duplicate (Pro only)" }), _jsx(DropdownItem, { icon: _jsx(Trash, { size: 16 }), destructive: true, children: "Delete" })] })),
};
