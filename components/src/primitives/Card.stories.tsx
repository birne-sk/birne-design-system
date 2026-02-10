import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardFooter } from "./Card";
import { ContentStack } from "./ContentStack";
import { Heading, Text, Eyebrow } from "./Typography";
import { Button } from "./Button";

const meta: Meta<typeof Card> = {
  title: "Primitives/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "dark", "purple", "outline", "ghost"],
    },
    padding: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card variant="default" style={{ width: 360 }}>
      <ContentStack spacing="tight">
        <Eyebrow>Kategória</Eyebrow>
        <Heading level="h4">Nadpis karty</Heading>
        <Text size="sm">Popisný text, ktorý vysvetľuje obsah karty podrobnejšie.</Text>
      </ContentStack>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card variant="default" style={{ width: 360 }}>
      <ContentStack spacing="tight">
        <Heading level="h4">Card Title</Heading>
        <Text size="sm">Card description or subtitle goes here.</Text>
        <Text size="base">This is the main content of the card. It can contain any elements.</Text>
      </ContentStack>
      <CardFooter>
        <Button variant="link" size="sm">View details</Button>
      </CardFooter>
    </Card>
  ),
};

export const StatCard: Story = {
  render: () => (
    <Card variant="default" style={{ width: 200 }}>
      <div className="text-center">
        <Heading level="h3" className="text-text-heading">1,234</Heading>
        <Text size="xs" variant="caption">Followers</Text>
      </div>
    </Card>
  ),
};

export const DarkCard: Story = {
  render: () => (
    <Card variant="dark" style={{ width: 360 }}>
      <ContentStack spacing="tight">
        <Eyebrow className="text-white/40">Kategória</Eyebrow>
        <Heading level="h4" className="text-birne-lemon">Nadpis karty</Heading>
        <Text size="sm" className="text-white/60">Popisný text, ktorý vysvetľuje obsah karty podrobnejšie.</Text>
      </ContentStack>
    </Card>
  ),
};

export const PurpleCard: Story = {
  render: () => (
    <Card variant="purple" style={{ width: 360 }}>
      <ContentStack spacing="tight">
        <Eyebrow>Kategória</Eyebrow>
        <Heading level="h4">Nadpis karty</Heading>
        <Text size="sm">Popisný text, ktorý vysvetľuje obsah karty podrobnejšie.</Text>
      </ContentStack>
    </Card>
  ),
};

export const OutlineCard: Story = {
  render: () => (
    <Card variant="outline" style={{ width: 360 }}>
      <ContentStack spacing="tight">
        <Eyebrow>Kategória</Eyebrow>
        <Heading level="h4">Nadpis karty</Heading>
        <Text size="sm">Popisný text, ktorý vysvetľuje obsah karty podrobnejšie.</Text>
      </ContentStack>
    </Card>
  ),
};

export const AllVariants: Story = {
  name: "Všetky pozadia",
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Card variant="default" style={{ width: 240 }}>
        <ContentStack spacing="tight">
          <Eyebrow>Default</Eyebrow>
          <Heading level="h5">Birne Black 2</Heading>
          <Text size="sm">Základné pozadie karty.</Text>
        </ContentStack>
      </Card>
      <Card variant="dark" style={{ width: 240 }}>
        <ContentStack spacing="tight">
          <Eyebrow className="text-white/40">Dark</Eyebrow>
          <Heading level="h5" className="text-birne-lemon">Birne Black</Heading>
          <Text size="sm" className="text-white/60">Tmavé pozadie.</Text>
        </ContentStack>
      </Card>
      <Card variant="purple" style={{ width: 240 }}>
        <ContentStack spacing="tight">
          <Eyebrow>Purple</Eyebrow>
          <Heading level="h5">Birne Purple 40</Heading>
          <Text size="sm">Fialové pozadie.</Text>
        </ContentStack>
      </Card>
      <Card variant="outline" style={{ width: 240 }}>
        <ContentStack spacing="tight">
          <Eyebrow>Outline</Eyebrow>
          <Heading level="h5">Transparent + border</Heading>
          <Text size="sm">Len obrys.</Text>
        </ContentStack>
      </Card>
      <Card variant="ghost" style={{ width: 240 }}>
        <ContentStack spacing="tight">
          <Eyebrow>Ghost</Eyebrow>
          <Heading level="h5">Transparent</Heading>
          <Text size="sm">Bez pozadia.</Text>
        </ContentStack>
      </Card>
    </div>
  ),
};

export const PaddingSizes: Story = {
  render: () => (
    <div className="flex gap-4">
      <Card variant="default" padding="sm" style={{ width: 200 }}>
        <ContentStack spacing="tight">
          <Heading level="h6">Small</Heading>
          <Text size="sm">padding: 16px</Text>
        </ContentStack>
      </Card>
      <Card variant="default" padding="md" style={{ width: 200 }}>
        <ContentStack spacing="tight">
          <Heading level="h6">Medium</Heading>
          <Text size="sm">padding: 24px</Text>
        </ContentStack>
      </Card>
      <Card variant="default" padding="lg" style={{ width: 200 }}>
        <ContentStack spacing="tight">
          <Heading level="h6">Large</Heading>
          <Text size="sm">padding: 32px</Text>
        </ContentStack>
      </Card>
    </div>
  ),
};
