import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "./EmptyState";
import { IconCircle } from "./IconCircle";
import { Button } from "./Button";
import { BarChart3, Search, FileText, Inbox, AlertCircle } from "lucide-react";

const meta: Meta<typeof EmptyState> = {
  title: "Primitives/EmptyState",
  component: EmptyState,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <IconCircle variant="default" size="xl"><Inbox size={28} strokeWidth={1.5} /></IconCircle>,
    title: "Žiadne dáta",
    description: "Zatiaľ nemáte žiadne analýzy. Vytvorte svoju prvú analýzu.",
  },
};

export const WithAction: Story = {
  args: {
    icon: <IconCircle variant="default" size="xl"><BarChart3 size={28} strokeWidth={1.5} /></IconCircle>,
    title: "Žiadne výsledky",
    description: "Pre zobrazenie výsledkov spustite novú analýzu.",
    action: <Button variant="primary" size="sm">Nová analýza</Button>,
  },
};

export const NoJobs: Story = {
  args: {
    icon: <IconCircle variant="lemon" size="xl"><FileText size={28} strokeWidth={1.5} /></IconCircle>,
    title: "Žiadne joby",
    description: "Zatiaľ ste nespustili žiadnu analýzu konkurencie.",
    action: <Button variant="primary" size="sm">Spustiť analýzu</Button>,
  },
};

export const SearchEmpty: Story = {
  args: {
    icon: <IconCircle variant="muted" size="xl"><Search size={28} strokeWidth={1.5} /></IconCircle>,
    title: "Žiadne výsledky vyhľadávania",
    description: "Skúste upraviť kľúčové slová alebo rozšíriť dátumový rozsah.",
    action: <Button variant="soft" size="sm">Vymazať filtre</Button>,
  },
};

export const Error: Story = {
  args: {
    icon: <IconCircle variant="destructive" size="xl"><AlertCircle size={28} strokeWidth={1.5} /></IconCircle>,
    title: "Niečo sa pokazilo",
    description: "Nepodarilo sa načítať dáta. Skúste to znova neskôr.",
    action: <Button variant="soft" size="sm">Skúsiť znova</Button>,
  },
};
