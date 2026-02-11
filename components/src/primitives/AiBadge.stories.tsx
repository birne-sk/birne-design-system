import type { Meta, StoryObj } from "@storybook/react";
import { AiBadge } from "./AiBadge";
import { Card } from "./Card";
import { Sparkles, Zap, BrainCircuit, Wand2 } from "lucide-react";

const meta: Meta<typeof AiBadge> = {
  title: "AI/AiBadge",
  component: AiBadge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "glow", "stroke"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    animated: { control: "boolean" },
    showIcon: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof AiBadge>;

// ============================================
// Basic
// ============================================

export const Default: Story = {
  args: {
    children: "AI Generated",
  },
};

export const Variants: Story = {
  name: "Tri varianty",
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <div className="text-center space-y-2">
        <AiBadge variant="solid">AI Generated</AiBadge>
        <p className="font-text text-xs text-text-caption">solid</p>
      </div>
      <div className="text-center space-y-2">
        <AiBadge variant="glow">AI Generated</AiBadge>
        <p className="font-text text-xs text-text-caption">glow</p>
      </div>
      <div className="text-center space-y-2">
        <AiBadge variant="stroke">AI Generated</AiBadge>
        <p className="font-text text-xs text-text-caption">stroke</p>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      {(["solid", "glow", "stroke"] as const).map((variant) => (
        <div key={variant} className="flex items-center gap-3">
          <AiBadge variant={variant} size="sm">AI</AiBadge>
          <AiBadge variant={variant} size="md">AI Generated</AiBadge>
          <AiBadge variant={variant} size="lg">AI Generated</AiBadge>
        </div>
      ))}
    </div>
  ),
};

// ============================================
// Animation
// ============================================

export const AnimatedVsStatic: Story = {
  name: "Animovany vs Staticky",
  render: () => (
    <div className="space-y-4">
      {(["solid", "glow", "stroke"] as const).map((variant) => (
        <div key={variant} className="flex items-center gap-4">
          <AiBadge variant={variant} animated>Animated</AiBadge>
          <AiBadge variant={variant} animated={false}>Static</AiBadge>
        </div>
      ))}
    </div>
  ),
};

// ============================================
// Custom Icons
// ============================================

export const CustomIcons: Story = {
  name: "Vlastne ikony",
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <AiBadge icon={<Sparkles size={12} />}>Sparkles</AiBadge>
      <AiBadge icon={<Zap size={12} />}>Lightning</AiBadge>
      <AiBadge icon={<BrainCircuit size={12} />}>Brain</AiBadge>
      <AiBadge icon={<Wand2 size={12} />}>Magic</AiBadge>
      <AiBadge showIcon={false}>No icon</AiBadge>
    </div>
  ),
};

// ============================================
// On backgrounds
// ============================================

export const OnDarkBackground: Story = {
  name: "Na tmavom pozadi",
  render: () => (
    <div className="bg-birne-black p-8 rounded-xl flex flex-wrap items-center gap-4">
      <AiBadge variant="solid">AI Generated</AiBadge>
      <AiBadge variant="glow">AI Insights</AiBadge>
      <AiBadge variant="stroke">AI Summary</AiBadge>
    </div>
  ),
};

export const OnSandBackground: Story = {
  name: "Na sand pozadi",
  render: () => (
    <div className="bg-birne-sand p-8 rounded-xl flex flex-wrap items-center gap-4">
      <AiBadge variant="solid">AI Generated</AiBadge>
      <AiBadge variant="glow">AI Insights</AiBadge>
      <AiBadge variant="stroke">AI Summary</AiBadge>
    </div>
  ),
};

// ============================================
// Real-world usage
// ============================================

export const InCard: Story = {
  name: "V karte",
  render: () => (
    <Card padding="lg" className="max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-display text-lg">Market Analysis</h3>
        <AiBadge variant="stroke" size="sm">AI</AiBadge>
      </div>
      <p className="font-text text-sm text-text-body">
        Based on analysis of 2,847 data points, your brand awareness
        increased by 23% in Q4 compared to Q3.
      </p>
    </Card>
  ),
};

export const FeatureLabels: Story = {
  name: "Feature labels",
  render: () => (
    <div className="space-y-3 max-w-md">
      {[
        { variant: "solid" as const, label: "AI Summary", desc: "Automatic report summaries" },
        { variant: "glow" as const, label: "AI Insights", desc: "Data-driven recommendations" },
        { variant: "stroke" as const, label: "AI Generated", desc: "Auto-generated content" },
      ].map((item) => (
        <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg border border-border">
          <AiBadge size="sm" variant={item.variant}>{item.label}</AiBadge>
          <span className="font-text text-sm text-text-body">{item.desc}</span>
        </div>
      ))}
    </div>
  ),
};
