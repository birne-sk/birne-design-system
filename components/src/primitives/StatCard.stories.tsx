import type { Meta, StoryObj } from "@storybook/react";
import { StatCard } from "./StatCard";

const meta: Meta<typeof StatCard> = {
  title: "Primitives/StatCard",
  component: StatCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "muted", "purple"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Followers",
    value: "12,345",
    style: { maxWidth: 220 },
  },
};

export const WithTrend: Story = {
  args: {
    label: "Share of Search",
    value: "34.2%",
    trend: { value: 5.3, label: "vs last month" },
    style: { maxWidth: 220 },
  },
};

export const NegativeTrend: Story = {
  args: {
    label: "Engagement Rate",
    value: "2.1%",
    trend: { value: -1.2, label: "vs last month" },
    style: { maxWidth: 220 },
  },
};

export const WithDescription: Story = {
  args: {
    label: "Total Posts",
    value: "847",
    description: "Last 30 days",
    style: { maxWidth: 220 },
  },
};

export const Variants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4" style={{ maxWidth: 480 }}>
      <StatCard variant="default" label="Default" value="1,234" />
      <StatCard variant="muted" label="Muted" value="5,678" />
      <StatCard variant="purple" label="Purple" value="91%" />
    </div>
  ),
};

export const DashboardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4" style={{ maxWidth: 960 }}>
      <StatCard
        label="Profiles"
        value="5"
        description="Competitors tracked"
      />
      <StatCard
        label="Posts Analyzed"
        value="2,847"
        trend={{ value: 12, label: "vs last period" }}
      />
      <StatCard
        label="Avg. Engagement"
        value="3.2%"
        trend={{ value: -0.5 }}
      />
      <StatCard
        variant="purple"
        label="Share of Search"
        value="34%"
        trend={{ value: 2.1, label: "growth" }}
      />
    </div>
  ),
};

export const SOSMetrics: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4" style={{ maxWidth: 720 }}>
      <StatCard
        variant="muted"
        label="Search Volume"
        value="14,800"
        description="Priemerný mesačný objem"
      />
      <StatCard
        variant="muted"
        label="Keywords"
        value="5"
        description="Sledované značky"
      />
      <StatCard
        variant="muted"
        label="Period"
        value="24 mo"
        description="Analyzované obdobie"
      />
    </div>
  ),
};
