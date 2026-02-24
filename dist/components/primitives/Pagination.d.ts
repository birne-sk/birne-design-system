import * as React from "react";
export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
    /** Current page (1-indexed) */
    page: number;
    /** Total number of pages */
    totalPages: number;
    /** Callback when page changes */
    onPageChange: (page: number) => void;
    /** Number of pages to show around current */
    siblingCount?: number;
    /** Show first/last page buttons */
    showEdges?: boolean;
}
declare const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLElement>>;
export { Pagination };
//# sourceMappingURL=Pagination.d.ts.map