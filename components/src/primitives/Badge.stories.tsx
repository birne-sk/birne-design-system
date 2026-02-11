import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import { ImageCard, ImageText } from "./ImageCard";
import { Button } from "./Button";
import { Calendar, MapPin, Clock, Tag, CheckCircle, ArrowRight } from "lucide-react";
import { MOOD_PHOTOS } from "../lib/supabase";

const meta: Meta<typeof Badge> = {
  title: "Primitives/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default", "purple", "lemon", "dark",
        "onDark", "onPurple", "onGray",
        "glass", "glassDark", "glassPurple", "glassLemon",
        "success", "warning", "destructive", "info"
      ],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// ============================================
// Basic Variants
// ============================================

export const Default: Story = {
  args: {
    children: "Badge",
  },
};

export const WithIcon: Story = {
  args: {
    children: "19.2.2026",
    icon: <Calendar size={12} />,
  },
};

export const SolidVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="purple">Purple</Badge>
      <Badge variant="lemon">Lemon</Badge>
      <Badge variant="dark">Dark</Badge>
    </div>
  ),
};

export const OnColoredBackgrounds: Story = {
  name: "Na farebných pozadiach",
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-2 p-4 bg-birne-purple rounded-lg">
        <Badge variant="onPurple" icon={<Calendar size={12} />}>19.2.2026</Badge>
        <Badge variant="onPurple" icon={<MapPin size={12} />}>Bratislava</Badge>
      </div>
      <div className="flex gap-2 p-4 bg-birne-black rounded-lg">
        <Badge variant="onDark" icon={<Calendar size={12} />}>19.2.2026</Badge>
        <Badge variant="onDark" icon={<MapPin size={12} />}>Bratislava</Badge>
      </div>
      <div className="flex gap-2 p-4 bg-birne-black-5 rounded-lg">
        <Badge variant="onGray" icon={<Calendar size={12} />}>19.2.2026</Badge>
        <Badge variant="onGray" icon={<MapPin size={12} />}>Bratislava</Badge>
      </div>
    </div>
  ),
};

export const StatusVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success" icon={<CheckCircle size={12} />}>Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="destructive">Error</Badge>
      <Badge variant="info">Info</Badge>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

// ============================================
// Glass Variants (for different backgrounds)
// ============================================

export const GlassOnPhoto: Story = {
  name: "Glass - Na fotke",
  render: () => (
    <ImageCard
      src={MOOD_PHOTOS.dec2025_003}
      aspectRatio="video"
      overlay="none"
      contentPosition="top-left"
      className="max-w-lg"
    >
      <div className="flex gap-2">
        <Badge variant="glass" icon={<Calendar size={12} />}>19.2.2026</Badge>
        <Badge variant="glass" icon={<MapPin size={12} />}>Bratislava</Badge>
      </div>
    </ImageCard>
  ),
};

export const OnGrayBackground: Story = {
  name: "Na sivom pozadí",
  render: () => (
    <div className="bg-birne-black-5 p-8 rounded-xl max-w-lg">
      <div className="flex gap-2 mb-4">
        <Badge variant="onGray" icon={<Calendar size={12} />}>19.2.2026</Badge>
        <Badge variant="onGray" icon={<MapPin size={12} />}>Bratislava</Badge>
      </div>
      <h3 className="font-display text-2xl text-birne-black mb-2">
        4 hodiny, ktoré vám ušetria ďalšie desiatky hodín mesačne
      </h3>
      <Button variant="primary" className="mt-4">
        V ponuke na birne.sk <ArrowRight size={16} />
      </Button>
    </div>
  ),
};

export const OnDarkBackground: Story = {
  name: "Na tmavom pozadí",
  render: () => (
    <div className="bg-birne-black p-8 rounded-xl max-w-lg">
      <div className="flex gap-2 mb-4">
        <Badge variant="onDark" icon={<Calendar size={12} />}>19.2.2026</Badge>
        <Badge variant="onDark" icon={<MapPin size={12} />}>Bratislava</Badge>
      </div>
      <h3 className="font-display text-2xl text-white mb-2">
        4 hodiny, ktoré vám ušetria ďalšie desiatky hodín mesačne
      </h3>
      <Button variant="primary" className="mt-4">
        V ponuke na birne.sk <ArrowRight size={16} />
      </Button>
    </div>
  ),
};

export const OnPurpleBackground: Story = {
  name: "Na fialovom pozadí",
  render: () => (
    <div className="bg-birne-purple p-8 rounded-xl max-w-lg">
      <div className="flex gap-2 mb-4">
        <Badge variant="onPurple" icon={<Calendar size={12} />}>19.2.2026</Badge>
        <Badge variant="onPurple" icon={<MapPin size={12} />}>Bratislava</Badge>
      </div>
      <h3 className="font-display text-2xl text-birne-black mb-2">
        4 hodiny, ktoré vám ušetria ďalšie desiatky hodín mesačne
      </h3>
      <Button variant="primary" className="mt-4">
        V ponuke na birne.sk <ArrowRight size={16} />
      </Button>
    </div>
  ),
};


// ============================================
// Real-World Examples
// ============================================

export const EventCard: Story = {
  name: "Príklad: Event karta",
  render: () => (
    <ImageCard
      src={MOOD_PHOTOS.dec2025_006}
      height={500}
      overlay="gradient"
      contentPosition="top-left"
      className="max-w-2xl"
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex gap-2">
          <Badge variant="glass" size="lg" icon={<Calendar size={14} />}>
            19.2.2026
          </Badge>
          <Badge variant="glass" size="lg" icon={<MapPin size={14} />}>
            Bratislava
          </Badge>
        </div>

        <div>
          <h2 className="font-display text-3xl text-white mb-4">
            4 hodiny, ktoré vám ušetria ďalšie desiatky hodín mesačne
          </h2>
          <Button variant="primary" size="lg">
            V ponuke na birne.sk <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </ImageCard>
  ),
};

export const CourseProgram: Story = {
  name: "Príklad: Program kurzu",
  render: () => (
    <div className="bg-[#1a1520] p-8 rounded-xl max-w-2xl">
      <h2 className="font-display text-3xl text-white mb-8">Program kurzu</h2>
      <div className="grid grid-cols-2 gap-4">
        {[
          { title: "Produktivita s Claude", desc: "Workflow, vďaka ktorému ušetríte desiatky hodín mesačne." },
          { title: "Weby na Lovable", desc: "Postavte web bez kódu, ktorý spĺňa trhové štandardy." },
          { title: "Generatívna kreatíva", desc: "Node-based nástroje na vizuály, ktoré vyzerajú konzistentne." },
          { title: "Marketingová analýza", desc: "Automatizovaný zber dát zo sociálnych sietí a prehľad o trhu." },
        ].map((item, i) => (
          <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
            <Badge variant="onDark" size="md" icon={<Clock size={12} />} className="mb-3">
              60 minút
            </Badge>
            <h3 className="font-display text-lg text-white mb-2">{item.title}</h3>
            <p className="font-text text-sm text-white/60">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  ),
};


// ============================================
// Guidelines
// ============================================

export const Guidelines: Story = {
  name: "Pravidlá použitia",
  render: () => (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h3 className="font-display text-xl mb-4">Kedy použiť ktorý variant</h3>
        <div className="overflow-x-auto">
          <table className="w-full font-text text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4">Pozadie</th>
                <th className="text-left py-2 pr-4">Variant</th>
                <th className="text-left py-2">Príklad</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 pr-4">Biele/svetlé</td>
                <td className="py-3 pr-4"><code>default</code>, <code>purple</code>, <code>lemon</code></td>
                <td className="py-3"><Badge variant="default">Badge</Badge></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4">Fotka</td>
                <td className="py-3 pr-4"><code>glass</code></td>
                <td className="py-3"><Badge variant="glass" icon={<Calendar size={12} />}>19.2.2026</Badge></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4">Tmavé</td>
                <td className="py-3 pr-4"><code>onDark</code></td>
                <td className="py-3 bg-birne-black px-2 rounded"><Badge variant="onDark">Badge</Badge></td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4">Fialové</td>
                <td className="py-3 pr-4"><code>onPurple</code></td>
                <td className="py-3 bg-birne-purple px-2 rounded"><Badge variant="onPurple">Badge</Badge></td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Sivé</td>
                <td className="py-3 pr-4"><code>onGray</code></td>
                <td className="py-3 bg-birne-black-5 px-2 rounded"><Badge variant="onGray">Badge</Badge></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="font-display text-xl mb-4">Ikony</h3>
        <div className="flex flex-wrap gap-3">
          <Badge icon={<Calendar size={12} />}>Dátum</Badge>
          <Badge icon={<MapPin size={12} />}>Lokácia</Badge>
          <Badge icon={<Clock size={12} />}>Trvanie</Badge>
          <Badge icon={<Tag size={12} />}>Kategória</Badge>
          <Badge variant="success" icon={<CheckCircle size={12} />}>Status</Badge>
        </div>
      </div>

      <div className="bg-birne-sand-40 p-6 rounded-lg">
        <h4 className="font-display text-lg mb-3">Best Practices</h4>
        <ul className="space-y-2 font-text text-sm">
          <li>✓ Používaj <code>glass</code> variant na fotkách pre lepšiu čitateľnosť</li>
          <li>✓ Pridaj ikonu pre lepšiu identifikáciu typu informácie</li>
          <li>✓ Kombinuj maximálne 2-3 badges vedľa seba</li>
          <li>✓ Používaj konzistentné veľkosti v rámci jedného kontextu</li>
          <li>✗ Nepoužívaj <code>default</code> variant na tmavom pozadí</li>
          <li>✗ Nedávaj príliš dlhý text do badge</li>
        </ul>
      </div>
    </div>
  ),
};
