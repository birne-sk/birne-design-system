import type { Meta, StoryObj } from "@storybook/react";
import { Progress, Spinner } from "./Progress";
import { Badge } from "./Badge";
import { CheckCircle, Clock } from "lucide-react";

const meta: Meta<typeof Progress> = {
  title: "Primitives/Progress",
  component: Progress,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100 } },
    size: { control: "select", options: ["sm", "md", "lg"] },
    variant: { control: "select", options: ["default", "success", "destructive"] },
    showLabel: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 60,
    style: { maxWidth: 400 },
  },
};

export const WithLabel: Story = {
  args: {
    value: 73,
    showLabel: true,
    style: { maxWidth: 400 },
  },
};


export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <div>
        <span className="font-text text-xs text-text-caption mb-1 block">Small</span>
        <Progress value={70} size="sm" />
      </div>
      <div>
        <span className="font-text text-xs text-text-caption mb-1 block">Medium</span>
        <Progress value={70} size="md" />
      </div>
      <div>
        <span className="font-text text-xs text-text-caption mb-1 block">Large</span>
        <Progress value={70} size="lg" />
      </div>
    </div>
  ),
};

export const AnalysisProgress: Story = {
  render: () => (
    <div className="max-w-md space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-text text-sm font-medium text-text-heading">Scraping competitors...</span>
        <span className="font-text text-sm text-text-caption">3/5</span>
      </div>
      <Progress value={60} size="md" />
      <div className="flex flex-wrap gap-1.5">
        <Badge variant="success" size="sm"><CheckCircle size={12} strokeWidth={2} /> Kaufland</Badge>
        <Badge variant="success" size="sm"><CheckCircle size={12} strokeWidth={2} /> Billa</Badge>
        <Badge variant="warning" size="sm"><Clock size={12} strokeWidth={2} /> Tesco</Badge>
        <Badge variant="default" size="sm">Lidl</Badge>
        <Badge variant="default" size="sm">Terno</Badge>
      </div>
    </div>
  ),
};

export const SpinnerDefault: Story = {
  render: () => <Spinner />,
};

export const SpinnerWithLabel: Story = {
  render: () => <Spinner label="Načítavam výsledky..." />,
};

export const SpinnerSizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

export const SpinnerVariants: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Spinner variant="default" label="Default" />
      <Spinner variant="purple" label="Purple" />
      <Spinner variant="muted" label="Muted" />
      <div className="bg-birne-black p-3 rounded-md">
        <Spinner variant="white" />
      </div>
    </div>
  ),
};
