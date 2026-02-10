import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Primitives/Accordion",
  component: Accordion,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

const faqItems = [
  {
    id: "1",
    trigger: "Čo je Share of Search?",
    content:
      "Share of Search je metrika, ktorá meria podiel vyhľadávania vašej značky oproti konkurencii. Koreluje s trhovým podielom a pomáha predpovedať budúci vývoj.",
  },
  {
    id: "2",
    trigger: "Ako často sa dáta aktualizujú?",
    content:
      "Dáta sa aktualizujú denne. Historické dáta sú dostupné za posledných 12 mesiacov s mesačnou granularitou.",
  },
  {
    id: "3",
    trigger: "Koľko kľúčových slov môžem sledovať?",
    content:
      "V základnom pláne môžete sledovať až 50 kľúčových slov. Pro plán ponúka neobmedzený počet slov a Enterprise plán pridáva API prístup.",
  },
  {
    id: "4",
    trigger: "Podporujete export dát?",
    content:
      "Áno, dáta je možné exportovať do CSV a PDF. Pro a Enterprise plány podporujú aj automatické reporty na email.",
  },
];

export const Default: Story = {
  args: {
    items: faqItems,
    style: { maxWidth: 560 },
  },
};

export const Separated: Story = {
  args: {
    items: faqItems,
    variant: "separated",
    style: { maxWidth: 560 },
  },
};

export const MultipleOpen: Story = {
  args: {
    items: faqItems,
    multiple: true,
    defaultOpen: ["1", "3"],
    style: { maxWidth: 560 },
  },
};

export const DefaultOpen: Story = {
  args: {
    items: faqItems,
    defaultOpen: ["1"],
    style: { maxWidth: 560 },
  },
};
