import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
function getPageNumbers(currentPage, totalPages, siblingCount) {
    const totalPageNumbers = siblingCount * 2 + 3; // siblings + current + first + last
    if (totalPageNumbers >= totalPages) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);
    const showLeftEllipsis = leftSiblingIndex > 2;
    const showRightEllipsis = rightSiblingIndex < totalPages - 1;
    if (!showLeftEllipsis && showRightEllipsis) {
        const leftItemCount = 3 + 2 * siblingCount;
        const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
        return [...leftRange, "ellipsis", totalPages];
    }
    if (showLeftEllipsis && !showRightEllipsis) {
        const rightItemCount = 3 + 2 * siblingCount;
        const rightRange = Array.from({ length: rightItemCount }, (_, i) => totalPages - rightItemCount + i + 1);
        return [1, "ellipsis", ...rightRange];
    }
    const middleRange = Array.from({ length: rightSiblingIndex - leftSiblingIndex + 1 }, (_, i) => leftSiblingIndex + i);
    return [1, "ellipsis", ...middleRange, "ellipsis", totalPages];
}
const Pagination = React.forwardRef(({ className, page, totalPages, onPageChange, siblingCount = 1, showEdges = true, ...props }, ref) => {
    const pageNumbers = getPageNumbers(page, totalPages, siblingCount);
    const buttonBase = "inline-flex items-center justify-center h-9 min-w-9 px-2 rounded-md text-sm font-text transition-colors";
    const buttonEnabled = "hover:bg-birne-black-5 active:bg-birne-black-10 text-text-body";
    const buttonDisabled = "opacity-50 cursor-not-allowed text-text-caption";
    const buttonActive = "bg-birne-black text-white hover:bg-birne-black-80";
    return (_jsxs("nav", { ref: ref, className: cn("flex items-center gap-1", className), "aria-label": "Pagination", ...props, children: [_jsx("button", { className: cn(buttonBase, page <= 1 ? buttonDisabled : buttonEnabled), onClick: () => onPageChange(page - 1), disabled: page <= 1, "aria-label": "Previous page", children: _jsx(ChevronLeft, { size: 18 }) }), pageNumbers.map((pageNum, index) => pageNum === "ellipsis" ? (_jsx("span", { className: cn(buttonBase, "cursor-default text-text-caption"), children: _jsx(MoreHorizontal, { size: 18 }) }, `ellipsis-${index}`)) : (_jsx("button", { className: cn(buttonBase, pageNum === page ? buttonActive : buttonEnabled), onClick: () => onPageChange(pageNum), "aria-label": `Page ${pageNum}`, "aria-current": pageNum === page ? "page" : undefined, children: pageNum }, pageNum))), _jsx("button", { className: cn(buttonBase, page >= totalPages ? buttonDisabled : buttonEnabled), onClick: () => onPageChange(page + 1), disabled: page >= totalPages, "aria-label": "Next page", children: _jsx(ChevronRight, { size: 18 }) })] }));
});
Pagination.displayName = "Pagination";
export { Pagination };
