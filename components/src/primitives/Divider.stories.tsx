import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";
import { Text } from "./Typography";

const meta: Meta<typeof Divider> = {
  title: "Primitives/Divider",
  component: Divider,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  render: () => (
    <div className="space-y-4">
      <Text>Content above the divider</Text>
      <Divider />
      <Text>Content below the divider</Text>
    </div>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-4">
      <Text>Content above</Text>
      <Divider label="or" />
      <Text>Content below</Text>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex items-center gap-4 h-8">
      <Text>Left</Text>
      <Divider orientation="vertical" />
      <Text>Center</Text>
      <Divider orientation="vertical" />
      <Text>Right</Text>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div className="p-4 border border-border rounded-lg max-w-sm">
      <Text weight="medium">Section 1</Text>
      <Text size="sm" variant="caption">Some content here</Text>
      <Divider className="my-4" />
      <Text weight="medium">Section 2</Text>
      <Text size="sm" variant="caption">More content here</Text>
      <Divider className="my-4" label="Additional" />
      <Text weight="medium">Section 3</Text>
      <Text size="sm" variant="caption">Even more content</Text>
    </div>
  ),
};
