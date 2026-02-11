import type { Meta, StoryObj } from "@storybook/react";
import { AiGlow } from "./AiGlow";
import { AiBadge } from "./AiBadge";
import { AiIcon } from "./AiIcon";
import { Card } from "./Card";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { IconCircle } from "./IconCircle";
import { Sparkles } from "lucide-react";

const meta: Meta<typeof AiGlow> = {
  title: "AI/AiGlow",
  component: AiGlow,
  tags: ["autodocs"],
  argTypes: {
    intensity: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    animated: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof AiGlow>;

// ============================================
// Basic
// ============================================

export const Default: Story = {
  render: () => (
    <div className="p-8">
      <AiGlow>
        <Card padding="md">
          <p className="font-text text-sm">Card with AI glow</p>
        </Card>
      </AiGlow>
    </div>
  ),
};

export const Intensities: Story = {
  name: "Intenzity",
  render: () => (
    <div className="flex items-center gap-8 p-8">
      <AiGlow intensity="sm">
        <Card padding="md">
          <p className="font-text text-sm">SM</p>
        </Card>
      </AiGlow>
      <AiGlow intensity="md">
        <Card padding="md">
          <p className="font-text text-sm">MD</p>
        </Card>
      </AiGlow>
      <AiGlow intensity="lg">
        <Card padding="md">
          <p className="font-text text-sm">LG</p>
        </Card>
      </AiGlow>
    </div>
  ),
};

export const Animated: Story = {
  name: "Animovany",
  render: () => (
    <div className="flex items-center gap-8 p-8">
      <AiGlow animated>
        <Card padding="md">
          <p className="font-text text-sm">Pulsing glow</p>
        </Card>
      </AiGlow>
      <AiGlow animated intensity="lg">
        <Card padding="md">
          <p className="font-text text-sm">Pulsing LG</p>
        </Card>
      </AiGlow>
    </div>
  ),
};

// ============================================
// With other components
// ============================================

export const WithButton: Story = {
  name: "S buttonom",
  render: () => (
    <div className="flex items-center gap-6 p-8">
      <AiGlow intensity="md" className="rounded-lg">
        <Button variant="primary">
          <Sparkles size={16} />
          Generate with AI
        </Button>
      </AiGlow>
      <AiGlow intensity="lg" animated className="rounded-lg">
        <Button variant="secondary">
          <Sparkles size={16} />
          AI Analysis
        </Button>
      </AiGlow>
    </div>
  ),
};

export const WithIconCircle: Story = {
  name: "S icon circle",
  render: () => (
    <div className="flex items-center gap-6 p-8">
      <AiGlow intensity="md" className="rounded-full">
        <IconCircle variant="purple" size="lg">
          <AiIcon size="md" />
        </IconCircle>
      </AiGlow>
      <AiGlow intensity="lg" animated className="rounded-full">
        <IconCircle variant="purple" size="xl">
          <AiIcon size="lg" />
        </IconCircle>
      </AiGlow>
    </div>
  ),
};

// ============================================
// Overview
// ============================================

export const OnDark: Story = {
  name: "Na tmavom pozadi",
  render: () => (
    <div className="bg-birne-black p-8 rounded-xl flex items-center gap-8">
      <AiGlow intensity="md">
        <Card variant="dark" padding="md">
          <p className="font-text text-sm text-white">AI Insights</p>
        </Card>
      </AiGlow>
      <AiGlow intensity="lg" animated className="rounded-full">
        <IconCircle variant="ghost" size="xl">
          <AiIcon size="lg" />
        </IconCircle>
      </AiGlow>
    </div>
  ),
};
