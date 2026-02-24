import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
// ============================================
// Table
// ============================================
const Table = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { className: "w-full overflow-x-auto rounded-lg border border-birne-black-20", children: _jsx("table", { ref: ref, className: cn("w-full border-collapse font-text text-sm", className), ...props }) })));
Table.displayName = "Table";
const TableHeader = React.forwardRef(({ className, ...props }, ref) => (_jsx("thead", { ref: ref, className: cn("bg-birne-black-2", className), ...props })));
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(({ className, ...props }, ref) => (_jsx("tbody", { ref: ref, className: cn("divide-y divide-border", className), ...props })));
TableBody.displayName = "TableBody";
const TableRow = React.forwardRef(({ className, clickable, ...props }, ref) => (_jsx("tr", { ref: ref, className: cn("border-b border-border transition-colors", clickable && "cursor-pointer hover:bg-birne-black-2", className), ...props })));
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(({ className, sortable, ...props }, ref) => (_jsx("th", { ref: ref, className: cn("px-4 py-3 text-left text-xs font-medium font-mono uppercase tracking-wider text-text-caption", sortable && "cursor-pointer hover:text-text-heading select-none", className), ...props })));
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(({ className, ...props }, ref) => (_jsx("td", { ref: ref, className: cn("px-4 py-3 text-text-body", className), ...props })));
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(({ className, ...props }, ref) => (_jsx("caption", { ref: ref, className: cn("mt-2 text-xs text-text-caption", className), ...props })));
TableCaption.displayName = "TableCaption";
export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption };
