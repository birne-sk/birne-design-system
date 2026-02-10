import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Primitives/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "padded",
  },
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center min-h-[200px]">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: {
    content: "Share of Search zobrazuje váš podiel na trhu.",
    position: "top",
    children: (
      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-birne-black-5 text-text-caption text-xs cursor-help">?</span>
    ),
  },
};

export const Bottom: Story = {
  args: {
    content: "Kliknite pre zobrazenie detailov",
    position: "bottom",
    children: (
      <button className="font-text text-sm text-birne-purple hover:underline">Hover me</button>
    ),
  },
};

export const Positions: Story = {
  render: () => (
    <div className="flex items-center gap-12 p-12">
      <Tooltip content="Top tooltip" position="top">
        <span className="px-3 py-1.5 rounded-xs bg-birne-black-5 font-text text-sm cursor-help">Top</span>
      </Tooltip>
      <Tooltip content="Bottom tooltip" position="bottom">
        <span className="px-3 py-1.5 rounded-xs bg-birne-black-5 font-text text-sm cursor-help">Bottom</span>
      </Tooltip>
      <Tooltip content="Left tooltip" position="left">
        <span className="px-3 py-1.5 rounded-xs bg-birne-black-5 font-text text-sm cursor-help">Left</span>
      </Tooltip>
      <Tooltip content="Right tooltip" position="right">
        <span className="px-3 py-1.5 rounded-xs bg-birne-black-5 font-text text-sm cursor-help">Right</span>
      </Tooltip>
    </div>
  ),
};

export const InfoIcon: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span className="font-text text-sm text-text-heading">Share of Search</span>
      <Tooltip content="Percento vyhľadávaní pre vašu značku oproti konkurencii za posledných 12 mesiacov." position="top">
        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-birne-black-10 text-text-caption text-[10px] cursor-help">i</span>
      </Tooltip>
    </div>
  ),
};
