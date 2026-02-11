import type { Meta, StoryObj } from "@storybook/react";
import { AiIcon } from "./AiIcon";

const meta: Meta<typeof AiIcon> = {
  title: "AI/AiIcon",
  component: AiIcon,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    animated: { control: "boolean" },
    color: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof AiIcon>;

// ============================================
// Basic
// ============================================

export const Default: Story = {
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <div className="text-center">
        <AiIcon size="xs" />
        <p className="font-text text-xs text-text-caption mt-2">xs</p>
      </div>
      <div className="text-center">
        <AiIcon size="sm" />
        <p className="font-text text-xs text-text-caption mt-2">sm</p>
      </div>
      <div className="text-center">
        <AiIcon size="md" />
        <p className="font-text text-xs text-text-caption mt-2">md</p>
      </div>
      <div className="text-center">
        <AiIcon size="lg" />
        <p className="font-text text-xs text-text-caption mt-2">lg</p>
      </div>
      <div className="text-center">
        <AiIcon size="xl" />
        <p className="font-text text-xs text-text-caption mt-2">xl</p>
      </div>
    </div>
  ),
};

// ============================================
// Animation
// ============================================

export const AnimatedVsStatic: Story = {
  name: "Animovany vs Staticky",
  render: () => (
    <div className="flex items-center gap-6">
      <div className="text-center">
        <AiIcon size="xl" animated />
        <p className="font-text text-xs text-text-caption mt-2">Animated</p>
      </div>
      <div className="text-center">
        <AiIcon size="xl" animated={false} />
        <p className="font-text text-xs text-text-caption mt-2">Static</p>
      </div>
    </div>
  ),
};

// ============================================
// Custom Colors
// ============================================

export const CustomColors: Story = {
  name: "Vlastne farby",
  render: () => (
    <div className="flex items-center gap-4">
      <AiIcon size="lg" />
      <AiIcon size="lg" color="#4338CA" />
      <AiIcon size="lg" color="#A78BFA" />
      <AiIcon size="lg" color="#221924" />
      <AiIcon size="lg" color="#FFFFFF" />
    </div>
  ),
};

export const OnDarkBackground: Story = {
  name: "Na tmavom pozadi",
  render: () => (
    <div className="bg-birne-black p-8 rounded-xl flex items-center gap-6">
      <AiIcon size="lg" />
      <AiIcon size="xl" />
      <AiIcon size="xl" color="#FFFFFF" />
    </div>
  ),
};

// ============================================
// Use Cases
// ============================================

export const InlineWithText: Story = {
  name: "Inline s textom",
  render: () => (
    <div className="space-y-3">
      <p className="font-text text-sm flex items-center gap-1.5">
        <AiIcon size="sm" /> AI-generated summary
      </p>
      <p className="font-text text-base flex items-center gap-2">
        <AiIcon size="md" /> AI-powered insights
      </p>
      <h3 className="font-display text-xl flex items-center gap-2">
        <AiIcon size="lg" /> AI Analysis Report
      </h3>
    </div>
  ),
};
