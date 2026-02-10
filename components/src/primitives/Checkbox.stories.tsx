import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, RadioGroup, Switch } from "./Checkbox";
import { Label } from "./Typography";

const checkboxMeta: Meta<typeof Checkbox> = {
  title: "Primitives/Checkbox & Radio",
  component: Checkbox,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default checkboxMeta;

export const Checkboxes: StoryObj = {
  render: () => (
    <div className="space-y-3">
      <Label className="block">Checkboxes</Label>
      <Checkbox label="Možnosť 1" defaultChecked />
      <Checkbox label="Možnosť 2" />
    </div>
  ),
};

export const CheckboxStates: StoryObj = {
  name: "Checkbox — stavy",
  render: () => (
    <div className="space-y-3">
      <Checkbox label="Nezaškrtnutý" />
      <Checkbox label="Zaškrtnutý" defaultChecked />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
      <Checkbox label="Error" error />
    </div>
  ),
};

export const CheckboxSizes: StoryObj = {
  name: "Checkbox — veľkosti",
  render: () => (
    <div className="space-y-4">
      <div className="space-y-3">
        <Checkbox label="Default (md)" defaultChecked />
        <Checkbox label="Default unchecked" />
      </div>
      <div className="space-y-2">
        <Checkbox size="sm" label="Small (sm)" defaultChecked />
        <Checkbox size="sm" label="Small unchecked" />
      </div>
    </div>
  ),
};

export const CheckboxWithDescription: StoryObj = {
  render: () => (
    <Checkbox
      label="Súhlasím so zasielaním newslettera"
      description="V súlade so zásadami ochrany osobných údajov."
    />
  ),
};

export const RadioGroupDefault: StoryObj = {
  name: "Radio Group",
  render: () => (
    <div className="space-y-3">
      <Label className="block">Radio Group</Label>
      <RadioGroup
        name="demo"
        defaultValue="1"
        options={[
          { label: "Radio 1", value: "1" },
          { label: "Radio 2", value: "2" },
        ]}
      />
    </div>
  ),
};

export const RadioHorizontal: StoryObj = {
  render: () => (
    <RadioGroup
      name="period"
      direction="horizontal"
      defaultValue="30"
      options={[
        { label: "7 dní", value: "7" },
        { label: "30 dní", value: "30" },
        { label: "90 dní", value: "90" },
      ]}
    />
  ),
};

export const RadioWithDescriptions: StoryObj = {
  render: () => (
    <RadioGroup
      name="plan"
      defaultValue="free"
      options={[
        {
          label: "Free",
          value: "free",
          description: "3 analýzy mesačne, základné metriky",
        },
        {
          label: "Pro",
          value: "pro",
          description: "Neobmedzené analýzy, export do PDF, prioritná podpora",
        },
        {
          label: "Enterprise",
          value: "enterprise",
          description: "Vlastný deployment, API prístup, SLA",
          disabled: true,
        },
      ]}
    />
  ),
};

export const SwitchToggle: StoryObj = {
  name: "Switch (Toggle)",
  render: () => (
    <div className="flex items-end gap-8">
      <div className="flex flex-col items-center gap-2">
        <Switch defaultChecked />
        <span className="font-text text-xs text-text-caption">md (default)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Switch size="lg" defaultChecked />
        <span className="font-text text-xs text-text-caption">lg</span>
      </div>
    </div>
  ),
};

export const SwitchStates: StoryObj = {
  name: "Switch — stavy",
  render: () => (
    <div className="space-y-4">
      <Switch label="Vypnutý" />
      <Switch label="Zapnutý" defaultChecked />
      <Switch label="Disabled off" disabled />
      <Switch label="Disabled on" disabled defaultChecked />
    </div>
  ),
};

export const FormExample: StoryObj = {
  render: () => (
    <div className="max-w-md space-y-6">
      <div>
        <Label className="block mb-3">Režim analýzy</Label>
        <RadioGroup
          name="analysis-mode"
          defaultValue="single"
          options={[
            { label: "Analýza jednej krajiny", value: "single" },
            { label: "Analýza viacerých krajín", value: "multi" },
          ]}
        />
      </div>
      <div>
        <Label className="block mb-3">Platformy</Label>
        <div className="space-y-3">
          <Checkbox label="Facebook" defaultChecked />
          <Checkbox label="Instagram" defaultChecked />
          <Checkbox label="Meta Ads" />
        </div>
      </div>
      <div className="border-t border-border pt-4">
        <Switch label="Posielať výsledky na email" defaultChecked />
      </div>
    </div>
  ),
};
