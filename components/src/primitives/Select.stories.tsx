import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";
import { Label } from "./Typography";

const meta: Meta<typeof Select> = {
  title: "Primitives/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    error: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const countryOptions = [
  { label: "Slovensko", value: "sk" },
  { label: "Česká republika", value: "cz" },
  { label: "Poľsko", value: "pl" },
  { label: "Maďarsko", value: "hu" },
  { label: "Rakúsko", value: "at" },
  { label: "Nemecko", value: "de" },
];

const languageOptions = [
  { label: "Slovenčina", value: "sk" },
  { label: "Čeština", value: "cs" },
  { label: "English", value: "en" },
  { label: "Deutsch", value: "de" },
];

export const Default: Story = {
  args: {
    options: countryOptions,
    placeholder: "Vyberte krajinu",
    style: { width: 320 },
  },
};

export const WithValue: Story = {
  args: {
    options: countryOptions,
    defaultValue: "sk",
    style: { width: 320 },
  },
};

export const Language: Story = {
  args: {
    options: languageOptions,
    placeholder: "Vyberte jazyk",
    style: { width: 320 },
  },
};

export const Small: Story = {
  args: {
    options: countryOptions,
    size: "sm",
    placeholder: "Krajina",
    style: { width: 240 },
  },
};

export const Large: Story = {
  args: {
    options: countryOptions,
    size: "lg",
    placeholder: "Vyberte krajinu",
    style: { width: 320 },
  },
};

export const WithError: Story = {
  args: {
    options: countryOptions,
    error: true,
    placeholder: "Vyberte krajinu",
    style: { width: 320 },
  },
};

export const Disabled: Story = {
  args: {
    options: countryOptions,
    disabled: true,
    defaultValue: "sk",
    style: { width: 320 },
  },
};

export const FormRow: Story = {
  render: () => (
    <div className="flex gap-3" style={{ width: 520 }}>
      <div className="flex-1">
        <Label className="block mb-1.5">Krajina</Label>
        <Select options={countryOptions} placeholder="Vyberte krajinu" />
      </div>
      <div className="flex-1">
        <Label className="block mb-1.5">Jazyk</Label>
        <Select options={languageOptions} placeholder="Vyberte jazyk" />
      </div>
    </div>
  ),
};
