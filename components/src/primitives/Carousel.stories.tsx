import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./Carousel";
import { Card } from "./Card";
import { ContentStack } from "./ContentStack";
import { Heading, Text, Eyebrow } from "./Typography";
import { Badge } from "./Badge";

const meta: Meta<typeof Carousel> = {
  title: "Primitives/Carousel",
  component: Carousel,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Carousel title={<ContentStack spacing="tight"><Eyebrow>Proces</Eyebrow><Heading level="h2">Ako to funguje</Heading></ContentStack>} showDots={false} gap="md">
      <Card variant="default">
        <ContentStack spacing="tight">
          <Heading level="h5">Zadajte kľúčové slová</Heading>
          <Text size="sm">Vyberte slová, ktoré chcete sledovať oproti konkurencii.</Text>
        </ContentStack>
      </Card>
      <Card variant="default">
        <ContentStack spacing="tight">
          <Heading level="h5">Vyberte krajinu</Heading>
          <Text size="sm">Zvoľte trh, na ktorom chcete analyzovať vyhľadávanie.</Text>
        </ContentStack>
      </Card>
      <Card variant="default">
        <ContentStack spacing="tight">
          <Heading level="h5">Analyzujte výsledky</Heading>
          <Text size="sm">Prezrite si grafy a tabuľky s podielom vyhľadávania.</Text>
        </ContentStack>
      </Card>
      <Card variant="default">
        <ContentStack spacing="tight">
          <Heading level="h5">Exportujte report</Heading>
          <Text size="sm">Stiahnite si výsledky vo formáte PDF alebo CSV.</Text>
        </ContentStack>
      </Card>
    </Carousel>
  ),
};

export const WithoutArrows: Story = {
  render: () => (
    <Carousel showArrows={false} gap="md">
      <Card variant="purple">
        <ContentStack spacing="tight">
          <Heading level="h5">Analýza konkurencie</Heading>
          <Text size="sm">Porovnajte svoju značku s konkurenciou na sociálnych sieťach.</Text>
        </ContentStack>
      </Card>
      <Card variant="purple">
        <ContentStack spacing="tight">
          <Heading level="h5">Share of Search</Heading>
          <Text size="sm">Sledujte podiel vyhľadávania vašej značky v čase.</Text>
        </ContentStack>
      </Card>
      <Card variant="purple">
        <ContentStack spacing="tight">
          <Heading level="h5">Content Intelligence</Heading>
          <Text size="sm">Zistite, aký obsah funguje najlepšie vo vašom segmente.</Text>
        </ContentStack>
      </Card>
      <Card variant="purple">
        <ContentStack spacing="tight">
          <Heading level="h5">Sentiment analýza</Heading>
          <Text size="sm">Pochopte, ako zákazníci vnímajú vašu značku online.</Text>
        </ContentStack>
      </Card>
    </Carousel>
  ),
};

export const DarkCards: Story = {
  name: "Dark varianty",
  render: () => (
    <Carousel title={<ContentStack spacing="tight"><Eyebrow>Cenník</Eyebrow><Heading level="h2">Plány</Heading></ContentStack>} showDots={false} gap="md">
      <Card variant="dark">
        <ContentStack spacing="tight">
          <Heading level="h5" className="text-birne-lemon">Free plán</Heading>
          <Text size="sm" className="text-white/60">3 analýzy mesačne a základné metriky zadarmo.</Text>
        </ContentStack>
      </Card>
      <Card variant="dark">
        <ContentStack spacing="tight">
          <Heading level="h5" className="text-birne-lemon">Pro plán</Heading>
          <Text size="sm" className="text-white/60">Neobmedzené analýzy, export do PDF a prioritná podpora.</Text>
        </ContentStack>
      </Card>
      <Card variant="dark">
        <ContentStack spacing="tight">
          <Heading level="h5" className="text-birne-lemon">Enterprise</Heading>
          <Text size="sm" className="text-white/60">API prístup, vlastný deployment a SLA garancia.</Text>
        </ContentStack>
      </Card>
      <Card variant="dark">
        <ContentStack spacing="tight">
          <Heading level="h5" className="text-birne-lemon">Custom</Heading>
          <Text size="sm" className="text-white/60">Riešenie na mieru pre váš tím a vaše potreby.</Text>
        </ContentStack>
      </Card>
    </Carousel>
  ),
};

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <span key={i} className={i <= count ? "text-birne-lemon" : "text-birne-black-20"}>
        ★
      </span>
    ))}
  </div>
);

const testimonials = [
  {
    stars: 5,
    text: "Kamarátska atmosféra a fajný catering, no kľúčový bol obsah a prezentácia. Užitočné informácie, case studies a aktívne cvičenia. Jeden z top workshopov posledných rokov.",
    name: "Lukáš Porhajaš",
    company: "Boxyland",
  },
  {
    stars: 4,
    text: "Praktické úlohy so značkami, SoS, CEP, behavioral biases a use-casy. Ocenil by som viac praxe, ideálne rozdeliť teóriu a venovať viac času vlastným značkám.",
    name: "Martin Krafčík",
    company: "Auglio",
  },
  {
    stars: 4,
    text: "Praktické cvičenia s templatmi na vlastné zadanie, ktoré si odnášame a používame ďalej. Case studies ukázali problem scoping aj analýzu konkurencie a rozhovor so zákazníkom.",
    name: "Filip Korman",
    company: "viridiusLAB",
  },
  {
    stars: 5,
    text: "Najväčší benefit boli praktické cvičenia, ktoré rozpohybujú kreativitu a myseľ správnym smerom. Ucelené informácie, žiadny bullshit navyše. Oceňujem profesionalitu oboch spíkrov.",
    name: "Matej Stacho",
    company: "Pescezles",
  },
];

export const Testimonials: Story = {
  name: "Referencie",
  render: () => (
    <Carousel
      title={
        <ContentStack spacing="tight">
          <Eyebrow>Referencie</Eyebrow>
          <div className="flex items-center gap-3">
            <Heading level="h2">Dôverujú nám lídri trhu</Heading>
            <Badge variant="outline" size="md">4.9 ★ z 9 hodnotení</Badge>
          </div>
        </ContentStack>
      }
      showDots={false}
      gap="md"
    >
      {testimonials.map((t) => (
        <Card key={t.name} variant="default">
          <div className="flex flex-col justify-between h-full">
            <div>
              <Stars count={t.stars} />
              <Text size="sm" className="mt-4">"{t.text}"</Text>
            </div>
            <div className="mt-6">
              <Text size="sm" className="font-medium text-text-heading">{t.name}</Text>
              <Text size="xs" variant="caption">{t.company}</Text>
            </div>
          </div>
        </Card>
      ))}
    </Carousel>
  ),
};
