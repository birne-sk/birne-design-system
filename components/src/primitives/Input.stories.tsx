import type { Meta, StoryObj } from "@storybook/react";
import { Input, Textarea } from "./Input";

const inputMeta: Meta<typeof Input> = {
  title: "Primitives/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: "select",
      options: ["default", "filled", "ghost"],
    },
    error: {
      control: "boolean",
    },
  },
};

export default inputMeta;
type Story = StoryObj<typeof inputMeta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    style: { width: 320 },
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    placeholder: "Filled input",
    style: { width: 320 },
  },
};

export const GhostInput: Story = {
  args: {
    variant: "ghost",
    placeholder: "Ghost input",
    style: { width: 320 },
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    placeholder: "Small input",
    style: { width: 320 },
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    placeholder: "Large input",
    style: { width: 320 },
  },
};

export const WithError: Story = {
  args: {
    error: true,
    placeholder: "Error state",
    defaultValue: "Invalid value",
    style: { width: 320 },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled input",
    style: { width: 320 },
  },
};

export const EmailInput: Story = {
  args: {
    type: "email",
    placeholder: "vas@email.sk",
    style: { width: 320 },
  },
};

export const URLInput: Story = {
  args: {
    type: "url",
    placeholder: "https://facebook.com/yourcompany",
    style: { width: 320 },
  },
};

export const TextareaDefault: Story = {
  render: () => (
    <Textarea
      placeholder="Kaufland&#10;Billa&#10;Tesco&#10;Lidl&#10;Terno"
      style={{ width: 320 }}
    />
  ),
};

export const TextareaWithError: Story = {
  render: () => (
    <Textarea
      error
      defaultValue="Invalid content"
      style={{ width: 320 }}
    />
  ),
};
