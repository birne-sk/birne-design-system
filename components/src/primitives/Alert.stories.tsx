import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Primitives/Alert",
  component: Alert,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "destructive"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    variant: "info",
    children: "Analýza prebieha. Prosím čakajte...",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Analýza bola úspešne dokončená!",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Dosiahli ste limit bezplatných analýz.",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Nastala chyba pri spracovaní požiadavky.",
  },
};

export const WithTitle: Story = {
  render: () => (
    <Alert variant="success">
      <AlertTitle>Hotovo!</AlertTitle>
      <AlertDescription>
        Vaša analýza Share of Search bola úspešne dokončená. Výsledky nájdete nižšie.
      </AlertDescription>
    </Alert>
  ),
};

export const Dismissible: Story = {
  render: () => (
    <Alert variant="warning" onDismiss={() => alert("Dismissed!")}>
      <AlertTitle>Upozornenie</AlertTitle>
      <AlertDescription>
        Zostáva vám ešte 2 bezplatné analýzy tento mesiac.
      </AlertDescription>
    </Alert>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-3 max-w-lg">
      <Alert variant="info">
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>Informatívna správa pre používateľa.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <AlertTitle>Úspech</AlertTitle>
        <AlertDescription>Operácia bola úspešne dokončená.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <AlertTitle>Upozornenie</AlertTitle>
        <AlertDescription>Niečo si vyžaduje vašu pozornosť.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertTitle>Chyba</AlertTitle>
        <AlertDescription>Nastala chyba pri spracovaní.</AlertDescription>
      </Alert>
    </div>
  ),
};
