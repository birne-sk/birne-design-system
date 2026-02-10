import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2.5 4.5H13.5M5.5 4.5V3.5C5.5 2.95 5.95 2.5 6.5 2.5H9.5C10.05 2.5 10.5 2.95 10.5 3.5V4.5M6.5 7.5V11.5M9.5 7.5V11.5M3.5 4.5L4.5 13C4.5 13.55 4.95 14 5.5 14H10.5C11.05 14 11.5 13.55 11.5 13L12.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="2" y="3.5" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 5L8 9L14 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const meta: Meta<typeof Button> = {
  title: "Primitives/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "soft", "destructive", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Farby buttonov
// ============================================

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Soft: Story = {
  args: {
    children: "Soft",
    variant: "soft",
  },
};

export const Destructive: Story = {
  args: {
    children: "Destructive",
    variant: "destructive",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const AllColors: Story = {
  name: "Farby buttonov",
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Button variant="primary">Primary</Button>
        <span className="font-text text-xs text-text-caption text-center">Birne Lemon fill<br/>+ Birne Black stroke</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button variant="secondary">Secondary</Button>
        <span className="font-text text-xs text-text-caption text-center">Birne Black fill<br/>+ Birne Purple text</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button variant="soft">Soft</Button>
        <span className="font-text text-xs text-text-caption text-center">Birne Off-White fill<br/>+ Birne Black stroke</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button variant="destructive">Destructive</Button>
        <span className="font-text text-xs text-text-caption text-center">Danger soft fill<br/>+ stroke</span>
      </div>
    </div>
  ),
};

// ============================================
// Varianty
// ============================================

export const TextOnly: Story = {
  name: "Text only",
  args: {
    children: "Text only",
    variant: "primary",
  },
};

export const WithIconLeft: Story = {
  name: "S ikonkou",
  args: {
    children: "S ikonkou",
    variant: "primary",
    iconLeft: <MailIcon />,
  },
};

export const WithArrow: Story = {
  name: "Text so šípkou",
  args: {
    children: "Text so šípkou",
    variant: "secondary",
    iconRight: <ArrowRight />,
  },
};

export const IconOnly: Story = {
  name: "Icon (40×40)",
  args: {
    children: <ArrowRight />,
    variant: "primary",
    size: "icon",
    "aria-label": "Next",
  },
};

export const LinkButton: Story = {
  name: "Link button",
  render: () => (
    <Button variant="link">
      Link button <ArrowRight />
    </Button>
  ),
};

export const AllVariants: Story = {
  name: "Varianty",
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Button variant="primary">Text only</Button>
        <span className="font-text text-xs text-text-caption">Iba text</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button variant="primary" iconLeft={<MailIcon />}>S ikonkou</Button>
        <span className="font-text text-xs text-text-caption">Ikonka + text</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button variant="secondary" iconRight={<ArrowRight />}>Text so šípkou</Button>
        <span className="font-text text-xs text-text-caption">Text + šípka</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button variant="primary" size="icon" aria-label="Next"><ArrowRight /></Button>
        <span className="font-text text-xs text-text-caption">Icon (40×40)</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button variant="link">Link button <ArrowRight /></Button>
        <span className="font-text text-xs text-text-caption">Text link so šípkou</span>
      </div>
    </div>
  ),
};

// ============================================
// So šípkou — všetky farby
// ============================================

export const ArrowButtons: Story = {
  name: "So šípkou — všetky farby",
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button variant="primary" iconRight={<ArrowRight />}>Zobraziť analýzu</Button>
        <Button variant="secondary" iconRight={<ArrowRight />}>Pokračovať</Button>
        <Button variant="soft" iconRight={<ArrowRight />}>Viac informácií</Button>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="primary" size="sm" iconRight={<ArrowRight />}>Small</Button>
        <Button variant="primary" size="md" iconRight={<ArrowRight />}>Medium</Button>
        <Button variant="primary" size="lg" iconRight={<ArrowRight />}>Large</Button>
      </div>
    </div>
  ),
};

export const CTAExamples: Story = {
  name: "CTA príklady",
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <Button variant="primary" iconRight={<ArrowRight />}>Zobraziť analýzu</Button>
      <Button variant="primary" iconRight={<ArrowRight />}>Spustiť analýzu</Button>
      <Button variant="secondary" iconRight={<ArrowRight />}>Kontaktovať nás</Button>
      <Button variant="secondary" iconRight={<ArrowRight />}>Pozrieť výsledky</Button>
      <Button variant="soft" iconRight={<ArrowRight />}>Stiahnuť PDF</Button>
      <Button variant="link">Zobraziť všetko <ArrowRight /></Button>
    </div>
  ),
};

// ============================================
// Destructive
// ============================================

export const DestructiveVariants: Story = {
  name: "Destructive varianty",
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Button variant="destructive">Odstrániť</Button>
        <span className="font-text text-xs text-text-caption">Text only</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button variant="destructive" size="icon" aria-label="Delete"><TrashIcon /></Button>
        <span className="font-text text-xs text-text-caption">Icon</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button variant="destructive" iconLeft={<TrashIcon />}>Odstrániť</Button>
        <span className="font-text text-xs text-text-caption">Ikonka + text</span>
      </div>
    </div>
  ),
};

// ============================================
// Veľkosti
// ============================================

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="icon" aria-label="Next"><ArrowRight /></Button>
    </div>
  ),
};

// ============================================
// Stavy
// ============================================

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const DisabledAll: Story = {
  name: "Disabled states",
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="primary" disabled>Primary</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="soft" disabled>Soft</Button>
      <Button variant="destructive" disabled>Destructive</Button>
    </div>
  ),
};
