import type { Meta, StoryObj } from "@storybook/react";
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
declare const meta: Meta;
export default meta;
export declare const OverlayComparison: StoryObj;
export declare const TextHierarchy: StoryObj;
export declare const ColorUsage: StoryObj;
export declare const DropShadow: StoryObj;
export declare const CorrectUsage: StoryObj;
export declare const DosDonts: StoryObj;
//# sourceMappingURL=PhotoGuidelines.stories.d.ts.map