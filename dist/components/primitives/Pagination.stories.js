import { jsx as _jsx } from "react/jsx-runtime";
import { Pagination } from "./Pagination";
import * as React from "react";
const meta = {
    title: "Primitives/Pagination",
    component: Pagination,
    tags: ["autodocs"],
};
export default meta;
export const Default = {
    render: () => {
        const [page, setPage] = React.useState(1);
        return (_jsx(Pagination, { page: page, totalPages: 10, onPageChange: setPage }));
    },
};
export const FewPages = {
    render: () => {
        const [page, setPage] = React.useState(1);
        return (_jsx(Pagination, { page: page, totalPages: 5, onPageChange: setPage }));
    },
};
export const ManyPages = {
    render: () => {
        const [page, setPage] = React.useState(15);
        return (_jsx(Pagination, { page: page, totalPages: 50, onPageChange: setPage }));
    },
};
export const MoreSiblings = {
    render: () => {
        const [page, setPage] = React.useState(10);
        return (_jsx(Pagination, { page: page, totalPages: 20, onPageChange: setPage, siblingCount: 2 }));
    },
};
export const FirstPage = {
    render: () => {
        const [page, setPage] = React.useState(1);
        return (_jsx(Pagination, { page: page, totalPages: 10, onPageChange: setPage }));
    },
};
export const LastPage = {
    render: () => {
        const [page, setPage] = React.useState(10);
        return (_jsx(Pagination, { page: page, totalPages: 10, onPageChange: setPage }));
    },
};
