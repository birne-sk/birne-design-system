import type { Meta, StoryObj } from "@storybook/react";
import { Home } from "lucide-react";
import { Breadcrumb } from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Primitives/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const homeIcon = <Home size={14} strokeWidth={2} />;

export const Default: Story = {
  args: {
    items: [
      { icon: homeIcon, href: "/" },
      { label: "Nástroje", href: "/tools" },
      { label: "Share of Search" },
    ],
  },
};

export const TwoLevels: Story = {
  args: {
    items: [
      { icon: homeIcon, href: "/" },
      { label: "Competitors Analysis" },
    ],
  },
};

export const Long: Story = {
  args: {
    items: [
      { icon: homeIcon, href: "/" },
      { label: "Nástroje", href: "/tools" },
      { label: "Resonar", href: "/tools/resonar" },
      { label: "Job History", href: "/tools/resonar/history" },
      { label: "Kaufland SK Analysis" },
    ],
  },
};
