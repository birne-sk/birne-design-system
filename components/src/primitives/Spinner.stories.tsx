import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";
import { Button } from "./Button";

const meta: Meta<typeof Spinner> = {
  title: "Primitives/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    color: {
      control: "select",
      options: ["default", "muted", "purple", "white"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner color="default" />
      <Spinner color="muted" />
      <Spinner color="purple" />
      <div className="bg-birne-black p-2 rounded">
        <Spinner color="white" />
      </div>
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button disabled>
        <Spinner size="sm" /> Loading...
      </Button>
      <Button variant="secondary" disabled>
        <Spinner size="sm" color="purple" /> Saving...
      </Button>
    </div>
  ),
};
