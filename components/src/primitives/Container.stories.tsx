import type { Meta, StoryObj } from "@storybook/react";
import { Section, Container, Box, Grid, Stack } from "./Container";
import { Heading, Text } from "./Typography";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Clock, ArrowRight } from "lucide-react";

const meta: Meta<typeof Section> = {
  title: "Layout/Container",
  component: Section,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Section>;

// ============================================
// Basic Components
// ============================================

export const SectionBackgrounds: Story = {
  name: "Section - Pozadia",
  render: () => (
    <div className="space-y-1">
      <Section background="white" padding="sm">
        <Container><Text>white</Text></Container>
      </Section>
      <Section background="sand" padding="sm">
        <Container><Text>sand</Text></Container>
      </Section>
      <Section background="sandLight" padding="sm">
        <Container><Text>sandLight</Text></Container>
      </Section>
      <Section background="dark" padding="sm">
        <Container><Text>dark</Text></Container>
      </Section>
      <Section background="darkSoft" padding="sm">
        <Container><Text>darkSoft</Text></Container>
      </Section>
      <Section background="purple" padding="sm">
        <Container><Text>purple</Text></Container>
      </Section>
      <Section background="purpleLight" padding="sm">
        <Container><Text>purpleLight</Text></Container>
      </Section>
      <Section background="lemon" padding="sm">
        <Container><Text>lemon</Text></Container>
      </Section>
    </div>
  ),
};

export const ContainerSizes: Story = {
  name: "Container - Veľkosti",
  render: () => (
    <Section background="sandLight" padding="md">
      <div className="space-y-4">
        <Container size="sm" className="bg-white p-4 rounded"><Text>sm - max-w-2xl</Text></Container>
        <Container size="md" className="bg-white p-4 rounded"><Text>md - max-w-4xl</Text></Container>
        <Container size="lg" className="bg-white p-4 rounded"><Text>lg - max-w-6xl (default)</Text></Container>
        <Container size="xl" className="bg-white p-4 rounded"><Text>xl - max-w-7xl</Text></Container>
      </div>
    </Section>
  ),
};

export const BoxVariants: Story = {
  name: "Box - Varianty",
  render: () => (
    <div className="space-y-8 p-8">
      <div>
        <Text className="mb-4 font-medium">Na bielom pozadí:</Text>
        <div className="flex flex-wrap gap-4 p-6 bg-white rounded-xl">
          <Box variant="subtle" padding="md" className="w-40"><Text size="sm">subtle</Text></Box>
          <Box variant="elevated" padding="md" className="w-40"><Text size="sm">elevated</Text></Box>
          <Box variant="outline" padding="md" className="w-40"><Text size="sm">outline</Text></Box>
          <Box variant="sand" padding="md" className="w-40"><Text size="sm">sand</Text></Box>
          <Box variant="purple" padding="md" className="w-40"><Text size="sm">purple</Text></Box>
        </div>
      </div>

      <div>
        <Text className="mb-4 font-medium">Na tmavom pozadí:</Text>
        <div className="flex flex-wrap gap-4 p-6 bg-birne-black rounded-xl">
          <Box variant="glassDark" padding="md" className="w-40"><Text size="sm">glassDark</Text></Box>
          <Box variant="outlineLight" padding="md" className="w-40"><Text size="sm">outlineLight</Text></Box>
          <Box variant="white" padding="md" className="w-40"><Text size="sm">white</Text></Box>
        </div>
      </div>

      <div>
        <Text className="mb-4 font-medium">Na fialovom pozadí:</Text>
        <div className="flex flex-wrap gap-4 p-6 bg-birne-purple rounded-xl">
          <Box variant="glassPurple" padding="md" className="w-40"><Text size="sm">glassPurple</Text></Box>
          <Box variant="white" padding="md" className="w-40"><Text size="sm">white</Text></Box>
          <Box variant="glass" padding="md" className="w-40"><Text size="sm">glass</Text></Box>
        </div>
      </div>
    </div>
  ),
};

// ============================================
// Nested Patterns
// ============================================

export const NestedOnDark: Story = {
  name: "Vnorenie - Tmavé pozadie",
  render: () => (
    <Section background="darkSoft" padding="lg">
      <Container>
        <Heading level="h2" className="text-white mb-8">Program kurzu</Heading>
        <Grid cols={2} gap="lg">
          {[
            { title: "Produktivita s Claude", desc: "Workflow, vďaka ktorému ušetríte desiatky hodín mesačne." },
            { title: "Weby na Lovable", desc: "Postavte web bez kódu, ktorý spĺňa trhové štandardy." },
            { title: "Generatívna kreatíva", desc: "Node-based nástroje na vizuály, ktoré vyzerajú konzistentne." },
            { title: "Marketingová analýza", desc: "Automatizovaný zber dát zo sociálnych sietí." },
          ].map((item, i) => (
            <Box key={i} variant="glassDark" padding="lg">
              <Badge variant="glassDark" icon={<Clock size={12} />} className="mb-4">
                60 minút
              </Badge>
              <Heading level="h4" className="text-white mb-2">{item.title}</Heading>
              <Text size="sm" className="text-white/60">{item.desc}</Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Section>
  ),
};

export const NestedOnSand: Story = {
  name: "Vnorenie - Piesková sekcia",
  render: () => (
    <Section background="sand" padding="lg">
      <Container>
        <Heading level="h2" className="mb-8">Naše služby</Heading>
        <Grid cols={3} gap="lg">
          {[
            { title: "Diagnostika", desc: "Komplexná analýza vašej marketingovej stratégie." },
            { title: "Stratégia", desc: "Vytvoríme plán pre rast vašej značky." },
            { title: "Exekúcia", desc: "Realizujeme kampane a marketingové aktivity." },
          ].map((item, i) => (
            <Box key={i} variant="white" padding="lg">
              <Heading level="h5" className="mb-2">{item.title}</Heading>
              <Text size="sm" variant="caption">{item.desc}</Text>
              <Button variant="link" size="sm" className="mt-4 p-0">
                Zistiť viac <ArrowRight size={14} />
              </Button>
            </Box>
          ))}
        </Grid>
      </Container>
    </Section>
  ),
};

export const NestedOnPurple: Story = {
  name: "Vnorenie - Fialová sekcia",
  render: () => (
    <Section background="purple" padding="lg">
      <Container size="md">
        <Stack gap="lg" align="center" className="text-center">
          <Heading level="h2">Pripravení začať?</Heading>
          <Text className="max-w-lg">
            Dohodnite si bezplatnú konzultáciu a zistite, ako vám môžeme pomôcť.
          </Text>
          <Stack direction="horizontal" gap="md">
            <Button variant="primary" size="lg">
              Kontaktujte nás
            </Button>
            <Box variant="glass" padding="sm" className="px-6">
              <Text size="sm" weight="medium">alebo volajte +421 123 456 789</Text>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Section>
  ),
};

export const NestedOnWhite: Story = {
  name: "Vnorenie - Biela sekcia",
  render: () => (
    <Section background="white" padding="lg">
      <Container>
        <Heading level="h2" className="mb-8">Testimonials</Heading>
        <Grid cols={2} gap="lg">
          {[
            { quote: "Spolupráca s Birne nám pomohla zvýšiť predaje o 40%.", author: "Ján Novák", company: "TechCorp" },
            { quote: "Profesionálny prístup a skvelé výsledky.", author: "Mária Kováčová", company: "StartupXY" },
          ].map((item, i) => (
            <Box key={i} variant="subtle" padding="lg">
              <Text size="lg" className="mb-4 italic">"{item.quote}"</Text>
              <Text size="sm" weight="medium">{item.author}</Text>
              <Text size="sm" variant="caption">{item.company}</Text>
            </Box>
          ))}
        </Grid>
      </Container>
    </Section>
  ),
};

// ============================================
// Full Page Example
// ============================================

export const FullPageLayout: Story = {
  name: "Kompletný layout",
  render: () => (
    <div className="-m-4">
      {/* Hero */}
      <Section background="purple" padding="xl">
        <Container size="md">
          <Stack gap="lg" align="center" className="text-center">
            <Badge variant="glassPurple">Nový kurz</Badge>
            <Heading level="h1">AI v Marketingu</Heading>
            <Text size="lg" className="max-w-xl">
              Naučte sa využívať AI nástroje pre efektívnejší marketing.
            </Text>
            <Button variant="primary" size="lg">
              Rezervovať miesto <ArrowRight size={18} />
            </Button>
          </Stack>
        </Container>
      </Section>

      {/* Program */}
      <Section background="darkSoft" padding="lg">
        <Container>
          <Heading level="h2" className="text-white mb-8">Program</Heading>
          <Grid cols={2} gap="md">
            <Box variant="glassDark" padding="md">
              <Badge variant="glassDark" size="sm" icon={<Clock size={10} />}>60 min</Badge>
              <Heading level="h5" className="text-white mt-3">Modul 1</Heading>
              <Text size="sm" className="text-white/60 mt-1">Úvod do AI nástrojov</Text>
            </Box>
            <Box variant="glassDark" padding="md">
              <Badge variant="glassDark" size="sm" icon={<Clock size={10} />}>60 min</Badge>
              <Heading level="h5" className="text-white mt-3">Modul 2</Heading>
              <Text size="sm" className="text-white/60 mt-1">Praktické použitie</Text>
            </Box>
          </Grid>
        </Container>
      </Section>

      {/* Benefits */}
      <Section background="sandLight" padding="lg">
        <Container>
          <Heading level="h2" className="mb-8 text-center">Prečo tento kurz?</Heading>
          <Grid cols={3} gap="lg">
            {["Ušetríte čas", "Zvýšite produktivitu", "Získate náskok"].map((item, i) => (
              <Box key={i} variant="white" padding="lg" className="text-center">
                <Heading level="h5">{item}</Heading>
              </Box>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="white" padding="lg">
        <Container size="sm">
          <Box variant="purple" padding="xl" className="text-center">
            <Heading level="h3" className="mb-4">Máte otázky?</Heading>
            <Text className="mb-6">Radi vám odpovieme.</Text>
            <Button variant="secondary">Napíšte nám</Button>
          </Box>
        </Container>
      </Section>
    </div>
  ),
};

// ============================================
// Guidelines
// ============================================

export const NestingGuidelines: Story = {
  name: "Pravidlá vnárania",
  render: () => (
    <div className="space-y-8 max-w-4xl p-8">
      <Heading level="h2">Pravidlá pre vnorené kontajnery</Heading>

      <div>
        <Heading level="h4" className="mb-4">Odporúčané kombinácie</Heading>
        <div className="overflow-x-auto">
          <table className="w-full font-text text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4">Section pozadie</th>
                <th className="text-left py-2 pr-4">Box variant</th>
                <th className="text-left py-2">Badge variant</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 pr-4"><code>white</code></td>
                <td className="py-3 pr-4"><code>subtle</code>, <code>elevated</code>, <code>outline</code>, <code>sand</code></td>
                <td className="py-3"><code>default</code>, <code>purple</code>, <code>outline</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4"><code>sand</code>, <code>sandLight</code></td>
                <td className="py-3 pr-4"><code>white</code>, <code>elevated</code></td>
                <td className="py-3"><code>default</code>, <code>purple</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4"><code>dark</code>, <code>darkSoft</code></td>
                <td className="py-3 pr-4"><code>glassDark</code>, <code>outlineLight</code></td>
                <td className="py-3"><code>glassDark</code>, <code>outlineLight</code></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4"><code>purple</code></td>
                <td className="py-3 pr-4"><code>glassPurple</code>, <code>glass</code>, <code>white</code></td>
                <td className="py-3"><code>glassPurple</code>, <code>glass</code></td>
              </tr>
              <tr>
                <td className="py-3 pr-4"><code>lemon</code></td>
                <td className="py-3 pr-4"><code>white</code>, <code>glass</code></td>
                <td className="py-3"><code>glassLemon</code>, <code>default</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Box variant="sand" padding="lg">
        <Heading level="h5" className="mb-3">Best Practices</Heading>
        <ul className="space-y-2 font-text text-sm">
          <li>✓ Používaj <code>Section</code> pre full-width pozadia</li>
          <li>✓ Vždy obaľ obsah do <code>Container</code> pre správne odsadenie</li>
          <li>✓ Na tmavom pozadí používaj <code>glassDark</code> pre karty</li>
          <li>✓ Zachovaj maximálne 2 úrovne vnorenia</li>
          <li>✗ Nedávaj tmavý Box na tmavú Section</li>
          <li>✗ Nepoužívaj <code>subtle</code> Box na <code>sand</code> Section</li>
        </ul>
      </Box>
    </div>
  ),
};
