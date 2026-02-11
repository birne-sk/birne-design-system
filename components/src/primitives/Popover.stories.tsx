import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";
import { Button } from "./Button";
import { Text, Heading } from "./Typography";
import { Avatar } from "./Avatar";
import { Info } from "lucide-react";

const meta: Meta<typeof Popover> = {
  title: "Primitives/Popover",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {
    side: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover trigger={<Button variant="soft">Click me</Button>}>
      <Text size="sm">This is popover content.</Text>
    </Popover>
  ),
};

export const OnHover: Story = {
  render: () => (
    <Popover
      trigger={
        <span className="inline-flex items-center gap-1 text-text-caption cursor-help">
          <Info size={16} /> Hover for info
        </span>
      }
      triggerOnHover
    >
      <Text size="sm">This appears on hover!</Text>
    </Popover>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="flex items-center justify-center gap-4 py-20">
      <Popover side="top" trigger={<Button variant="soft" size="sm">Top</Button>}>
        <Text size="sm">Top popover</Text>
      </Popover>
      <Popover side="bottom" trigger={<Button variant="soft" size="sm">Bottom</Button>}>
        <Text size="sm">Bottom popover</Text>
      </Popover>
      <Popover side="left" trigger={<Button variant="soft" size="sm">Left</Button>}>
        <Text size="sm">Left popover</Text>
      </Popover>
      <Popover side="right" trigger={<Button variant="soft" size="sm">Right</Button>}>
        <Text size="sm">Right popover</Text>
      </Popover>
    </div>
  ),
};

export const UserCard: Story = {
  render: () => (
    <Popover
      trigger={<Avatar initials="JH" className="cursor-pointer" />}
      align="start"
    >
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Avatar initials="JH" size="lg" />
          <div>
            <Text weight="medium" size="sm">Jakub Hrusovsky</Text>
            <Text size="xs" variant="caption">@jakub</Text>
          </div>
        </div>
        <Text size="sm" variant="caption">
          Product Designer at Birne Studio. Crafting digital experiences.
        </Text>
        <div className="flex gap-4 text-xs">
          <span><strong>128</strong> followers</span>
          <span><strong>56</strong> following</span>
        </div>
      </div>
    </Popover>
  ),
};

export const RichContent: Story = {
  render: () => (
    <Popover trigger={<Button>View Details</Button>}>
      <div className="space-y-2 min-w-[250px]">
        <Heading level="h6">Order Summary</Heading>
        <div className="space-y-1">
          <div className="flex justify-between text-sm">
            <Text size="sm" variant="caption">Subtotal</Text>
            <Text size="sm">$99.00</Text>
          </div>
          <div className="flex justify-between text-sm">
            <Text size="sm" variant="caption">Shipping</Text>
            <Text size="sm">$5.00</Text>
          </div>
          <div className="flex justify-between text-sm">
            <Text size="sm" variant="caption">Tax</Text>
            <Text size="sm">$8.32</Text>
          </div>
          <div className="h-px bg-border my-2" />
          <div className="flex justify-between">
            <Text size="sm" weight="medium">Total</Text>
            <Text size="sm" weight="medium">$112.32</Text>
          </div>
        </div>
      </div>
    </Popover>
  ),
};
