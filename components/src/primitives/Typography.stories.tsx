import type { Meta, StoryObj } from "@storybook/react";
import { Heading, Text, Eyebrow, Label } from "./Typography";
import { ContentStack } from "./ContentStack";

const meta: Meta<typeof Heading> = {
  title: "Primitives/Typography",
  component: Heading,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;

export const Headings: StoryObj = {
  name: "Headings — Conforto Regular",
  render: () => (
    <div className="space-y-4">
      <Heading level="h1">Heading 1 — 48px</Heading>
      <Heading level="h2">Heading 2 — 34px</Heading>
      <Heading level="h3">Heading 3 — 28px</Heading>
      <Heading level="h4">Heading 4 — 24px</Heading>
      <Heading level="h5">Heading 5 — 21px</Heading>
      <Heading level="h6">Heading 6 — 19px</Heading>
    </div>
  ),
};

export const BodyText: StoryObj = {
  name: "Body Text — General Sans",
  render: () => (
    <div className="space-y-3">
      <Text size="xl">Text XL — 21px</Text>
      <Text size="lg">Text LG — 19px</Text>
      <Text size="md">Text MD — 17px</Text>
      <Text size="base">Text Base — 15px (default)</Text>
      <Text size="sm">Text SM — 13px</Text>
      <Text size="xs">Text XS — 11px</Text>
    </div>
  ),
};

export const TextVariants: StoryObj = {
  name: "Text Variants — General Sans",
  render: () => (
    <div className="space-y-2">
      <Text variant="heading">Heading — #221924</Text>
      <Text variant="body">Body — #716B74</Text>
      <Text variant="caption">Caption — #A09BA3</Text>
    </div>
  ),
};

export const TextWeights: StoryObj = {
  name: "Text Weights — General Sans",
  render: () => (
    <div className="space-y-2">
      <Text weight="light">Light weight — 300</Text>
      <Text weight="regular">Regular weight — 400</Text>
      <Text weight="medium">Medium weight — 500</Text>
      <Text weight="semibold">Semibold weight — 600</Text>
      <Text weight="bold">Bold weight — 700</Text>
    </div>
  ),
};

export const EyebrowText: StoryObj = {
  name: "Eyebrow — JetBrains Mono",
  render: () => (
    <div className="space-y-4">
      <Eyebrow>Nová funkcia</Eyebrow>
      <Eyebrow>Analýza konkurencie</Eyebrow>
      <Eyebrow>Aktualizované 12. feb 2025</Eyebrow>
    </div>
  ),
};

export const Labels: StoryObj = {
  name: "Labels — General Sans",
  render: () => (
    <div className="space-y-3">
      <div>
        <Label>Vyberte krajinu</Label>
      </div>
      <div>
        <Label>Kľúčové slová</Label>
      </div>
      <div>
        <Label>Email</Label>
      </div>
    </div>
  ),
};

export const TypographyComposition: StoryObj = {
  name: "Kompozícia — ContentStack",
  render: () => (
    <ContentStack className="max-w-lg">
      <Eyebrow>Competitors Analysis</Eyebrow>
      <Heading level="h1">Share of Search</Heading>
      <Text size="md" variant="body">
        Porovnajte si svoju pozíciu na trhu oproti konkurencii.
        Zadajte kľúčové slová a vyberte krajinu.
      </Text>
      <Text size="sm" variant="caption">
        Posledných 30 dní <span className="px-2">•</span> Aktualizované dnes
      </Text>
    </ContentStack>
  ),
};

export const ContentStackSpacings: StoryObj = {
  name: "ContentStack — porovnanie",
  render: () => (
    <div className="flex gap-12">
      <div>
        <Text size="sm" variant="caption" className="mb-4">Tight</Text>
        <ContentStack spacing="tight" className="max-w-sm">
          <Eyebrow>Kategória</Eyebrow>
          <Heading level="h3">Nadpis sekcie</Heading>
          <Text size="base">Popisný text, ktorý vysvetľuje obsah sekcie podrobnejšie.</Text>
          <Text size="sm" variant="caption">Metadata <span className="px-2">•</span> Dátum</Text>
        </ContentStack>
      </div>
      <div>
        <Text size="sm" variant="caption" className="mb-4">Default</Text>
        <ContentStack className="max-w-sm">
          <Eyebrow>Kategória</Eyebrow>
          <Heading level="h3">Nadpis sekcie</Heading>
          <Text size="base">Popisný text, ktorý vysvetľuje obsah sekcie podrobnejšie.</Text>
          <Text size="sm" variant="caption">Metadata <span className="px-2">•</span> Dátum</Text>
        </ContentStack>
      </div>
      <div>
        <Text size="sm" variant="caption" className="mb-4">Loose</Text>
        <ContentStack spacing="loose" className="max-w-sm">
          <Eyebrow>Kategória</Eyebrow>
          <Heading level="h3">Nadpis sekcie</Heading>
          <Text size="base">Popisný text, ktorý vysvetľuje obsah sekcie podrobnejšie.</Text>
          <Text size="sm" variant="caption">Metadata <span className="px-2">•</span> Dátum</Text>
        </ContentStack>
      </div>
    </div>
  ),
};
