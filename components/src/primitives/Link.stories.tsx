import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";
import { Text } from "./Typography";

const meta: Meta<typeof Link> = {
  title: "Primitives/Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "subtle", "muted", "purple"],
    },
    size: {
      control: "select",
      options: ["sm", "base", "lg"],
    },
    external: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    href: "#",
    children: "Default link",
  },
};

export const Subtle: Story = {
  args: {
    href: "#",
    variant: "subtle",
    children: "Subtle link",
  },
};

export const Muted: Story = {
  args: {
    href: "#",
    variant: "muted",
    children: "Muted link",
  },
};

export const Purple: Story = {
  args: {
    href: "#",
    variant: "purple",
    children: "Purple link",
  },
};

export const ExternalLink: Story = {
  args: {
    href: "https://birne.sk",
    children: "External link",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link href="#" size="sm">
        Small link
      </Link>
      <Link href="#" size="base">
        Base link
      </Link>
      <Link href="#" size="lg">
        Large link
      </Link>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Link href="#" variant="default">
        Default (underlined)
      </Link>
      <Link href="#" variant="subtle">
        Subtle (underline on hover)
      </Link>
      <Link href="#" variant="muted">
        Muted (caption color)
      </Link>
      <Link href="#" variant="purple">
        Purple
      </Link>
    </div>
  ),
};

export const InlineWithText: Story = {
  render: () => (
    <Text>
      Toto je bežný text s{" "}
      <Link href="#" variant="default">
        odkazom
      </Link>{" "}
      v strede vety. Môžeš tiež použiť{" "}
      <Link href="https://birne.sk">externý odkaz</Link> s ikonou.
    </Text>
  ),
};

export const NoExternalIcon: Story = {
  args: {
    href: "https://birne.sk",
    external: false,
    children: "External link without icon",
  },
};
