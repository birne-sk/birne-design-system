import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton, SkeletonText, SkeletonAvatar, SkeletonCard } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Primitives/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "circular", "rectangular"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    width: 200,
    height: 40,
  },
};

export const Text: Story = {
  render: () => <SkeletonText lines={3} className="max-w-md" />,
};

export const Avatar: Story = {
  render: () => (
    <div className="flex gap-4">
      <SkeletonAvatar size="sm" />
      <SkeletonAvatar size="md" />
      <SkeletonAvatar size="lg" />
    </div>
  ),
};

export const Card: Story = {
  render: () => (
    <div className="max-w-sm border border-border rounded-lg">
      <SkeletonCard />
    </div>
  ),
};

export const Shapes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="rectangular" width={200} height={100} />
      <Skeleton variant="circular" width={48} height={48} />
    </div>
  ),
};

export const ListItem: Story = {
  render: () => (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-3">
          <SkeletonAvatar />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" width="40%" />
            <Skeleton variant="text" width="70%" height={12} />
          </div>
        </div>
      ))}
    </div>
  ),
};

export const NoAnimation: Story = {
  args: {
    width: 200,
    height: 40,
    disableAnimation: true,
  },
};
