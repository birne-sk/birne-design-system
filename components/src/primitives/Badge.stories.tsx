import type { Meta, StoryObj } from "@storybook/react";
import { CheckCircle, Clock, XCircle, CircleDot } from "lucide-react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Primitives/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "purple", "outline", "success", "warning", "destructive"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Default" },
};

export const Purple: Story = {
  args: { children: "Purple", variant: "purple" },
};

export const OutlineBadge: Story = {
  args: { children: "Outline", variant: "outline" },
};

export const Success: Story = {
  args: { children: "Completed", variant: "success" },
};

export const Warning: Story = {
  args: { children: "Pending", variant: "warning" },
};

export const Destructive: Story = {
  args: { children: "Failed", variant: "destructive" },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Badge size="sm" variant="purple">Small</Badge>
      <Badge size="md" variant="purple">Medium</Badge>
      <Badge size="lg" variant="purple">Large</Badge>
    </div>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success" size="md"><CheckCircle size={12} strokeWidth={2} /> Completed</Badge>
      <Badge variant="warning" size="md"><Clock size={12} strokeWidth={2} /> Pending</Badge>
      <Badge variant="destructive" size="md"><XCircle size={12} strokeWidth={2} /> Failed</Badge>
      <Badge variant="purple" size="md"><CircleDot size={12} strokeWidth={2} /> Active</Badge>
    </div>
  ),
};
