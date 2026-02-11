import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarGroup } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Primitives/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
    },
    status: {
      control: "select",
      options: [undefined, "online", "offline", "away", "busy"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {},
};

export const WithImage: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    alt: "John Doe",
  },
};

export const WithInitials: Story = {
  args: {
    initials: "JH",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="xs" initials="XS" />
      <Avatar size="sm" initials="SM" />
      <Avatar size="md" initials="MD" />
      <Avatar size="lg" initials="LG" />
      <Avatar size="xl" initials="XL" />
      <Avatar size="2xl" initials="2X" />
    </div>
  ),
};

export const WithStatus: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar initials="ON" status="online" />
      <Avatar initials="OF" status="offline" />
      <Avatar initials="AW" status="away" />
      <Avatar initials="BS" status="busy" />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <AvatarGroup max={3}>
      <Avatar
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
        alt="User 1"
      />
      <Avatar initials="AB" />
      <Avatar initials="CD" />
      <Avatar initials="EF" />
      <Avatar initials="GH" />
    </AvatarGroup>
  ),
};

export const GroupSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <AvatarGroup max={4} size="sm">
        <Avatar initials="A" />
        <Avatar initials="B" />
        <Avatar initials="C" />
        <Avatar initials="D" />
        <Avatar initials="E" />
      </AvatarGroup>
      <AvatarGroup max={4} size="md">
        <Avatar initials="A" />
        <Avatar initials="B" />
        <Avatar initials="C" />
        <Avatar initials="D" />
        <Avatar initials="E" />
      </AvatarGroup>
      <AvatarGroup max={4} size="lg">
        <Avatar initials="A" />
        <Avatar initials="B" />
        <Avatar initials="C" />
        <Avatar initials="D" />
        <Avatar initials="E" />
      </AvatarGroup>
    </div>
  ),
};
