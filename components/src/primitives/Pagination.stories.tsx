import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";
import * as React from "react";

const meta: Meta<typeof Pagination> = {
  title: "Primitives/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = React.useState(1);
    return (
      <Pagination
        page={page}
        totalPages={10}
        onPageChange={setPage}
      />
    );
  },
};

export const FewPages: Story = {
  render: () => {
    const [page, setPage] = React.useState(1);
    return (
      <Pagination
        page={page}
        totalPages={5}
        onPageChange={setPage}
      />
    );
  },
};

export const ManyPages: Story = {
  render: () => {
    const [page, setPage] = React.useState(15);
    return (
      <Pagination
        page={page}
        totalPages={50}
        onPageChange={setPage}
      />
    );
  },
};

export const MoreSiblings: Story = {
  render: () => {
    const [page, setPage] = React.useState(10);
    return (
      <Pagination
        page={page}
        totalPages={20}
        onPageChange={setPage}
        siblingCount={2}
      />
    );
  },
};

export const FirstPage: Story = {
  render: () => {
    const [page, setPage] = React.useState(1);
    return (
      <Pagination
        page={page}
        totalPages={10}
        onPageChange={setPage}
      />
    );
  },
};

export const LastPage: Story = {
  render: () => {
    const [page, setPage] = React.useState(10);
    return (
      <Pagination
        page={page}
        totalPages={10}
        onPageChange={setPage}
      />
    );
  },
};
