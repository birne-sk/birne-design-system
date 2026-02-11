import type { Meta, StoryObj } from "@storybook/react";
import { ImageCard, ImageText, HeroImage } from "./ImageCard";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { MOOD_PHOTOS, TEAM_PHOTOS } from "../lib/supabase";

const meta: Meta<typeof ImageCard> = {
  title: "Primitives/ImageCard",
  component: ImageCard,
  tags: ["autodocs"],
  argTypes: {
    aspectRatio: {
      control: "select",
      options: ["square", "video", "portrait", "landscape", "wide", "auto"],
    },
    overlay: {
      control: "select",
      options: ["none", "light", "medium", "dark", "gradient", "gradientTop", "purple"],
    },
    contentPosition: {
      control: "select",
      options: ["top-left", "top-center", "top-right", "center", "bottom-left", "bottom-center", "bottom-right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImageCard>;

// ============================================
// Basic Examples
// ============================================

export const Default: Story = {
  args: {
    src: MOOD_PHOTOS.dec2025_003,
    alt: "Birne mood photo",
    aspectRatio: "video",
    overlay: "gradient",
    contentPosition: "bottom-left",
    children: (
      <>
        <ImageText variant="eyebrow" color="muted">Case Study</ImageText>
        <ImageText variant="title" as="h2">Strategic Marketing</ImageText>
        <ImageText variant="body" color="light" className="mt-2 max-w-md">
          How we helped a startup achieve 300% growth in 6 months.
        </ImageText>
      </>
    ),
  },
};

export const OverlayVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {(["none", "light", "medium", "dark", "gradient", "purple"] as const).map((overlay) => (
        <ImageCard
          key={overlay}
          src={MOOD_PHOTOS.dec2025_006}
          overlay={overlay}
          aspectRatio="square"
          contentPosition="bottom-left"
        >
          <ImageText variant="caption" color={overlay === "light" ? "dark" : "white"}>
            overlay="{overlay}"
          </ImageText>
        </ImageCard>
      ))}
    </div>
  ),
};

export const AspectRatios: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {(["square", "portrait", "landscape", "wide"] as const).map((ratio) => (
        <ImageCard
          key={ratio}
          src={MOOD_PHOTOS.dec2025_014}
          aspectRatio={ratio}
          overlay="medium"
          contentPosition="center"
        >
          <ImageText variant="caption">{ratio}</ImageText>
        </ImageCard>
      ))}
    </div>
  ),
};

export const ContentPositions: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      {(["top-left", "top-center", "top-right", "center", "bottom-left", "bottom-center", "bottom-right"] as const).map((pos) => (
        <ImageCard
          key={pos}
          src={MOOD_PHOTOS.dec2025_027}
          aspectRatio="square"
          overlay="medium"
          contentPosition={pos}
        >
          <ImageText variant="caption">{pos}</ImageText>
        </ImageCard>
      ))}
    </div>
  ),
};

// ============================================
// Real-World Examples
// ============================================

export const CaseStudyCard: Story = {
  render: () => (
    <div className="max-w-md">
      <ImageCard
        src={MOOD_PHOTOS.dec2025_030}
        aspectRatio="landscape"
        overlay="gradient"
        contentPosition="bottom-left"
        className="cursor-pointer hover:scale-[1.02] transition-transform"
      >
        <Badge variant="purple" className="mb-3">Prípadová štúdia</Badge>
        <ImageText variant="subtitle" as="h3">Rebranding pre SaaS startup</ImageText>
        <ImageText variant="body" color="light" className="mt-1">
          Kompletná vizuálna identita a web
        </ImageText>
      </ImageCard>
    </div>
  ),
};

export const TeamMemberCard: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-lg">
      <ImageCard
        src={TEAM_PHOTOS.jakub}
        aspectRatio="portrait"
        overlay="gradient"
        contentPosition="bottom-left"
      >
        <ImageText variant="subtitle" as="h3">Jakub</ImageText>
        <ImageText variant="caption" color="muted">Founder & Strategist</ImageText>
      </ImageCard>
      <ImageCard
        src={TEAM_PHOTOS.marek}
        aspectRatio="portrait"
        overlay="gradient"
        contentPosition="bottom-left"
      >
        <ImageText variant="subtitle" as="h3">Marek</ImageText>
        <ImageText variant="caption" color="muted">Creative Director</ImageText>
      </ImageCard>
    </div>
  ),
};

export const FeatureCard: Story = {
  render: () => (
    <div className="max-w-sm">
      <ImageCard
        src={MOOD_PHOTOS.dec2025_033}
        aspectRatio="video"
        overlay="dark"
        contentPosition="center"
      >
        <ImageText variant="eyebrow" color="muted" className="mb-2">Nová služba</ImageText>
        <ImageText variant="title" as="h2">Marketing Diagnostika</ImageText>
        <ImageText variant="body" color="light" className="mt-3 max-w-xs">
          Komplexná analýza vašej marketingovej stratégie
        </ImageText>
        <Button variant="primary" size="md" className="mt-6">
          Zistiť viac
        </Button>
      </ImageCard>
    </div>
  ),
};

export const BlogPostCard: Story = {
  render: () => (
    <div className="max-w-md">
      <ImageCard
        src={MOOD_PHOTOS.dec2025_037}
        aspectRatio="video"
        overlay="gradient"
        contentPosition="bottom-left"
      >
        <ImageText variant="eyebrow" color="muted">Blog • 5 min čítanie</ImageText>
        <ImageText variant="subtitle" as="h3" className="mt-1">
          Ako vybudovať značku, ktorá vydrží
        </ImageText>
      </ImageCard>
    </div>
  ),
};

// ============================================
// Hero Section Examples
// ============================================

export const HeroBasic: Story = {
  render: () => (
    <HeroImage
      src={MOOD_PHOTOS.dec2025_002}
      height="lg"
      overlay="gradient"
      align="left"
      verticalAlign="bottom"
    >
      <ImageText variant="eyebrow" color="muted" className="mb-2">
        Birne Studio
      </ImageText>
      <ImageText variant="title" as="h1" className="text-4xl md:text-5xl">
        Strategic marketing for brands that mean business
      </ImageText>
      <ImageText variant="body" color="light" className="mt-4 max-w-xl">
        We help ambitious brands grow through strategy, creativity, and execution.
      </ImageText>
      <div className="flex gap-4 mt-8">
        <Button variant="primary" size="lg">Kontaktujte nás</Button>
        <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
          Naše práce
        </Button>
      </div>
    </HeroImage>
  ),
};

export const HeroCentered: Story = {
  render: () => (
    <HeroImage
      src={MOOD_PHOTOS.dec2025_014}
      height="md"
      overlay="dark"
      align="center"
      verticalAlign="center"
    >
      <ImageText variant="eyebrow" color="muted" className="mb-4">
        Pripravení na zmenu?
      </ImageText>
      <ImageText variant="title" as="h1" className="text-4xl md:text-5xl">
        Posuňme váš marketing<br />na novú úroveň
      </ImageText>
      <Button variant="primary" size="lg" className="mt-8">
        Začať spoluprácu
      </Button>
    </HeroImage>
  ),
};

// ============================================
// Image Text Showcase
// ============================================

export const TextVariants: Story = {
  render: () => (
    <ImageCard
      src={MOOD_PHOTOS.dec2025_006}
      height={400}
      overlay="dark"
      contentPosition="bottom-left"
    >
      <div className="space-y-2">
        <ImageText variant="eyebrow" color="muted">Eyebrow text</ImageText>
        <ImageText variant="title" as="h1">Title variant</ImageText>
        <ImageText variant="subtitle" as="h2">Subtitle variant</ImageText>
        <ImageText variant="body">Body text variant</ImageText>
        <ImageText variant="caption" color="muted">Caption variant</ImageText>
      </div>
    </ImageCard>
  ),
};

export const TextColors: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <ImageCard
        src={MOOD_PHOTOS.dec2025_027}
        aspectRatio="video"
        overlay="dark"
        contentPosition="center"
      >
        <ImageText variant="subtitle" color="white">White text</ImageText>
        <ImageText variant="body" color="light">Light text (90%)</ImageText>
        <ImageText variant="caption" color="muted">Muted text (70%)</ImageText>
      </ImageCard>
      <ImageCard
        src={MOOD_PHOTOS.dec2025_030}
        aspectRatio="video"
        overlay="light"
        contentPosition="center"
      >
        <ImageText variant="subtitle" color="dark">Dark text</ImageText>
        <ImageText variant="body" color="darkMuted">Dark muted text</ImageText>
      </ImageCard>
    </div>
  ),
};
