import type { Meta, StoryObj } from "@storybook/react";
import { ImageCard, ImageText, HeroImage } from "./ImageCard";
import { MOOD_PHOTOS } from "../lib/supabase";

/**
 * # Fotky a Text Guidelines
 *
 * Pravidlá pre používanie textu na fotkách v Birne Design System.
 *
 * ## Základné pravidlá
 *
 * 1. **Vždy používaj overlay** - text bez overlay je ťažko čitateľný
 * 2. **Gradient overlay je preferovaný** - vytvára prirodzený prechod
 * 3. **Drop shadow na texte** - zvyšuje čitateľnosť
 * 4. **Obmedzená paleta farieb** - biela, svetlá, tlmená
 *
 * ## Hierarchia textu na fotkách
 *
 * | Variant | Použitie | Font |
 * |---------|----------|------|
 * | `eyebrow` | Kategória, metadata | JetBrains Mono |
 * | `title` | Hlavný nadpis | Conforto |
 * | `subtitle` | Podnadpis | Conforto |
 * | `body` | Popisný text | General Sans |
 * | `caption` | Drobný text | General Sans |
 *
 * ## Farby textu
 *
 * | Farba | Opacity | Použitie |
 * |-------|---------|----------|
 * | `white` | 100% | Hlavné nadpisy |
 * | `light` | 90% | Sekundárny text |
 * | `muted` | 70% | Eyebrow, caption |
 * | `dark` | 100% | Na svetlom overlay |
 *
 * ## Overlay typy
 *
 * | Typ | Použitie |
 * |-----|----------|
 * | `gradient` | Default - text dole |
 * | `gradientTop` | Text hore |
 * | `dark` | Vela textu, tmavé pozadie |
 * | `medium` | Stredná čitateľnosť |
 * | `light` | Svetlý text (tmavý obsah) |
 * | `purple` | Brand highlight |
 */
const meta: Meta = {
  title: "Guidelines/Fotky a Text",
};

export default meta;

export const OverlayComparison: StoryObj = {
  name: "1. Overlay porovnanie",
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-display text-xl mb-4">Bez overlay vs. s overlay</h3>
        <div className="grid grid-cols-2 gap-4">
          <ImageCard
            src={MOOD_PHOTOS.dec2025_003}
            aspectRatio="video"
            overlay="none"
            contentPosition="bottom-left"
          >
            <ImageText variant="subtitle">Bez overlay</ImageText>
            <ImageText variant="body">Text je ťažko čitateľný</ImageText>
          </ImageCard>
          <ImageCard
            src={MOOD_PHOTOS.dec2025_003}
            aspectRatio="video"
            overlay="gradient"
            contentPosition="bottom-left"
          >
            <ImageText variant="subtitle">S gradient overlay</ImageText>
            <ImageText variant="body" color="light">Text je čitateľný</ImageText>
          </ImageCard>
        </div>
      </div>
    </div>
  ),
};

export const TextHierarchy: StoryObj = {
  name: "2. Hierarchia textu",
  render: () => (
    <div className="space-y-8">
      <ImageCard
        src={MOOD_PHOTOS.dec2025_006}
        height={500}
        overlay="gradient"
        contentPosition="bottom-left"
      >
        <div className="space-y-3">
          <ImageText variant="eyebrow" color="muted">
            1. EYEBROW — kategória, metadata (mono, uppercase)
          </ImageText>
          <ImageText variant="title" as="h1">
            2. Title — hlavný nadpis (Conforto, veľký)
          </ImageText>
          <ImageText variant="subtitle" as="h2">
            3. Subtitle — podnadpis (Conforto, stredný)
          </ImageText>
          <ImageText variant="body" color="light">
            4. Body — popisný text (General Sans, normálny)
          </ImageText>
          <ImageText variant="caption" color="muted">
            5. Caption — drobný text, dátumy (General Sans, malý)
          </ImageText>
        </div>
      </ImageCard>
    </div>
  ),
};

export const ColorUsage: StoryObj = {
  name: "3. Použitie farieb",
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-4">
        <h4 className="font-text text-sm font-medium">Tmavý overlay (dark/gradient)</h4>
        <ImageCard
          src={MOOD_PHOTOS.dec2025_014}
          aspectRatio="square"
          overlay="dark"
          contentPosition="center"
        >
          <ImageText variant="subtitle" color="white">White (100%)</ImageText>
          <ImageText variant="body" color="light">Light (90%)</ImageText>
          <ImageText variant="caption" color="muted">Muted (70%)</ImageText>
        </ImageCard>
      </div>
      <div className="space-y-4">
        <h4 className="font-text text-sm font-medium">Svetlý overlay</h4>
        <ImageCard
          src={MOOD_PHOTOS.dec2025_014}
          aspectRatio="square"
          overlay="light"
          contentPosition="center"
        >
          <ImageText variant="subtitle" color="dark">Dark (100%)</ImageText>
          <ImageText variant="body" color="darkMuted">Dark muted (70%)</ImageText>
        </ImageCard>
      </div>
    </div>
  ),
};

export const DropShadow: StoryObj = {
  name: "4. Drop shadow",
  render: () => (
    <div className="space-y-4">
      <h4 className="font-text text-sm font-medium">Shadow zvyšuje čitateľnosť na nízkom kontraste</h4>
      <ImageCard
        src={MOOD_PHOTOS.dec2025_027}
        aspectRatio="wide"
        overlay="medium"
        contentPosition="center"
      >
        <div className="flex gap-8">
          <div className="text-center">
            <ImageText variant="subtitle" shadow="none">Bez shadow</ImageText>
            <ImageText variant="caption" shadow="none" color="muted">shadow="none"</ImageText>
          </div>
          <div className="text-center">
            <ImageText variant="subtitle" shadow="sm">Small shadow</ImageText>
            <ImageText variant="caption" shadow="sm" color="muted">shadow="sm"</ImageText>
          </div>
          <div className="text-center">
            <ImageText variant="subtitle" shadow="md">Medium shadow</ImageText>
            <ImageText variant="caption" shadow="md" color="muted">shadow="md" (default)</ImageText>
          </div>
          <div className="text-center">
            <ImageText variant="subtitle" shadow="lg">Large shadow</ImageText>
            <ImageText variant="caption" shadow="lg" color="muted">shadow="lg"</ImageText>
          </div>
        </div>
      </ImageCard>
    </div>
  ),
};

export const CorrectUsage: StoryObj = {
  name: "5. Správne použitie",
  render: () => (
    <div className="space-y-8">
      <h3 className="font-display text-xl">Odporúčané vzory</h3>

      <div className="grid grid-cols-2 gap-6">
        {/* Case Study Card */}
        <div className="space-y-2">
          <span className="font-text text-sm text-text-caption">Case Study karta</span>
          <ImageCard
            src={MOOD_PHOTOS.dec2025_030}
            aspectRatio="video"
            overlay="gradient"
            contentPosition="bottom-left"
          >
            <ImageText variant="eyebrow" color="muted">Prípadová štúdia</ImageText>
            <ImageText variant="subtitle" as="h3">Názov projektu</ImageText>
            <ImageText variant="caption" color="light">Krátky popis</ImageText>
          </ImageCard>
        </div>

        {/* Blog Card */}
        <div className="space-y-2">
          <span className="font-text text-sm text-text-caption">Blog karta</span>
          <ImageCard
            src={MOOD_PHOTOS.dec2025_033}
            aspectRatio="video"
            overlay="gradient"
            contentPosition="bottom-left"
          >
            <ImageText variant="eyebrow" color="muted">Blog • 5 min</ImageText>
            <ImageText variant="subtitle" as="h3">Názov článku</ImageText>
          </ImageCard>
        </div>

        {/* Team Card */}
        <div className="space-y-2">
          <span className="font-text text-sm text-text-caption">Team karta</span>
          <ImageCard
            src={MOOD_PHOTOS.dec2025_037}
            aspectRatio="portrait"
            overlay="gradient"
            contentPosition="bottom-left"
          >
            <ImageText variant="subtitle" as="h3">Meno</ImageText>
            <ImageText variant="caption" color="muted">Pozícia</ImageText>
          </ImageCard>
        </div>

        {/* Feature Card */}
        <div className="space-y-2">
          <span className="font-text text-sm text-text-caption">Feature karta (centered)</span>
          <ImageCard
            src={MOOD_PHOTOS.dec2025_002}
            aspectRatio="portrait"
            overlay="dark"
            contentPosition="center"
          >
            <ImageText variant="eyebrow" color="muted">Nové</ImageText>
            <ImageText variant="title" as="h2">Feature</ImageText>
            <ImageText variant="body" color="light" className="mt-2">
              Popisný text
            </ImageText>
          </ImageCard>
        </div>
      </div>
    </div>
  ),
};

export const DosDonts: StoryObj = {
  name: "6. Do's and Don'ts",
  render: () => (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <span className="font-text text-sm text-green-600 font-medium">✓ Správne</span>
          <ImageCard
            src={MOOD_PHOTOS.dec2025_006}
            aspectRatio="video"
            overlay="gradient"
            contentPosition="bottom-left"
          >
            <ImageText variant="eyebrow" color="muted">Kategória</ImageText>
            <ImageText variant="subtitle">Jasná hierarchia</ImageText>
            <ImageText variant="body" color="light">Gradient overlay, správne farby</ImageText>
          </ImageCard>
        </div>
        <div className="space-y-2">
          <span className="font-text text-sm text-red-600 font-medium">✗ Nesprávne</span>
          <ImageCard
            src={MOOD_PHOTOS.dec2025_006}
            aspectRatio="video"
            overlay="none"
            contentPosition="bottom-left"
          >
            <span className="font-display text-2xl text-yellow-400" style={{textShadow: 'none'}}>Zlá farba</span>
            <span className="font-text text-white text-xs">Bez overlay, zlý kontrast, nekonzistentné</span>
          </ImageCard>
        </div>
      </div>

      <div className="bg-birne-sand-40 p-6 rounded-lg">
        <h4 className="font-display text-lg mb-4">Pravidlá</h4>
        <ul className="space-y-2 font-text text-sm">
          <li>✓ Vždy používaj overlay pre čitateľnosť</li>
          <li>✓ Použi ImageText komponent pre konzistentné štýly</li>
          <li>✓ Dodržuj hierarchiu: eyebrow → title → body</li>
          <li>✓ Používaj len white/light/muted farby na tmavom overlay</li>
          <li>✗ Nepoužívaj náhodné farby textu</li>
          <li>✗ Nedávaj príliš veľa textu na fotku</li>
          <li>✗ Nevypínaj drop shadow pokiaľ nie je dostatočný kontrast</li>
        </ul>
      </div>
    </div>
  ),
};
