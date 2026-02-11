#!/usr/bin/env node

/**
 * Birne Design System - Token Build Script
 * Generates all output formats from TypeScript token definitions
 */

const fs = require('fs');
const path = require('path');

// ============================================
// Token Definitions (inline to avoid TS compilation)
// ============================================

const SUPABASE_FONT_BASE = 'https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fonts';

const colors = {
  birneBlack: {
    100: '#221924',
    80: '#4A4349',
    60: '#76707A',
    40: '#A09BA3',
    20: '#CCC9CD',
    10: '#E1DFE2',
    5: '#F0EFF0',
    2: '#F8F7F8',
  },
  birnePurple: {
    100: '#DCB1E6',
    80: '#E4C4EC',
    60: '#ECD7F2',
    40: '#F2E5F6',
    20: '#F8F2FA',
  },
  birneDarkPurple: {
    100: '#B982C6',
    80: '#CAA1D4',
    60: '#DBC0E2',
  },
  birneLemon: {
    100: '#FAFD70',
    80: '#FBFE8D',
    60: '#FCFEA9',
    40: '#FDFEC6',
    20: '#FEFEE3',
  },
  birneSand: {
    140: '#D6D4C6',
    120: '#DDDBC9',
    100: '#E4E2D7',
    80: '#EBE9E0',
    60: '#EFEEE6',
    40: '#F4F3ED',
    20: '#F9F9F6',
  },
  birneGrapefruit: {
    100: '#FF5C1F',
    80: '#FF7D4C',
    60: '#FF9E79',
    40: '#FFBFA6',
    20: '#FFE0D3',
  },
};

const hsl = {
  birneBlack: {
    100: '310 18% 12%',
    80: '310 10% 28%',
    60: '310 6% 45%',
    40: '310 4% 62%',
    20: '310 4% 80%',
    10: '310 3% 88%',
    5: '310 2% 94%',
    2: '310 1% 97%',
  },
  birnePurple: {
    100: '289 54% 80%',
    80: '289 54% 85%',
    60: '289 54% 90%',
    40: '289 54% 93%',
    20: '289 54% 96%',
  },
  birneLemon: {
    100: '61 97% 72%',
    80: '61 97% 77%',
    60: '61 97% 82%',
    40: '61 97% 87%',
    20: '61 97% 92%',
  },
  birneSand: {
    140: '60 18% 78%',
    120: '60 18% 81%',
    100: '60 18% 84%',
    80: '60 18% 87%',
    60: '60 18% 92%',
    40: '60 18% 95%',
    20: '60 18% 97%',
  },
};

const typography = {
  fontFamily: {
    display: "'Conforto', serif",
    text: "'General Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  fontSize: {
    xs: '11px',
    sm: '13px',
    base: '15px',
    md: '17px',
    lg: '19px',
    xl: '21px',
    '2xl': '28px',
    '3xl': '34px',
    '4xl': '48px',
    '5xl': '60px',
  },
  lineHeight: {
    xs: '16px',
    sm: '18px',
    base: '22px',
    md: '24px',
    lg: '26px',
    xl: '28px',
    '2xl': '34px',
    '3xl': '40px',
    '4xl': '56px',
    '5xl': '68px',
  },
};

const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  '2xl': '32px',
  '3xl': '48px',
  '4xl': '64px',
  '5xl': '96px',
};

const borderRadius = {
  '2xs': '4px',
  xs: '6px',
  sm: '8px',
  md: '10px',
  lg: '12px',
  xl: '16px',
  '2xl': '20px',
  '3xl': '24px',
  full: '9999px',
};

const shadows = {
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
};

// ============================================
// Utility Functions
// ============================================

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// ============================================
// Generate CSS Variables
// ============================================

function generateCSSVariables() {
  let css = `/**
 * Birne Design System - CSS Custom Properties
 * Auto-generated - DO NOT EDIT
 */

:root {
  /* === Brand Colors - Birne Black === */
`;

  // Birne Black
  Object.entries(hsl.birneBlack).forEach(([key, value]) => {
    css += `  --birne-black-${key}: ${value};\n`;
  });
  css += `  --birne-black: hsl(var(--birne-black-100));\n\n`;

  // Birne Purple
  css += `  /* === Brand Colors - Birne Purple === */\n`;
  Object.entries(hsl.birnePurple).forEach(([key, value]) => {
    css += `  --birne-purple-${key}: ${value};\n`;
  });
  css += `  --birne-purple: hsl(var(--birne-purple-100));\n\n`;

  // Birne Lemon
  css += `  /* === Brand Colors - Birne Lemon === */\n`;
  Object.entries(hsl.birneLemon).forEach(([key, value]) => {
    css += `  --birne-lemon-${key}: ${value};\n`;
  });
  css += `  --birne-lemon: hsl(var(--birne-lemon-100));\n\n`;

  // Birne Sand
  css += `  /* === Brand Colors - Birne Sand === */\n`;
  Object.entries(hsl.birneSand).forEach(([key, value]) => {
    css += `  --birne-sand-${key}: ${value};\n`;
  });
  css += `  --birne-sand: hsl(var(--birne-sand-60));\n\n`;

  // Text Colors
  css += `  /* === Text Colors === */
  --text-heading: ${colors.birneBlack[100]};
  --text-body: #514A53;
  --text-caption: ${colors.birneBlack[40]};
  --text-muted: #C2BFC3;\n\n`;

  // UI Colors
  css += `  /* === UI Colors === */
  --background: #FFFFFF;
  --surface: #FFFFFF;
  --border: #D1D1D6;
  --hover: #F5F5F7;\n\n`;

  // Typography
  css += `  /* === Typography === */
  --font-display: ${typography.fontFamily.display};
  --font-text: ${typography.fontFamily.text};
  --font-mono: ${typography.fontFamily.mono};\n\n`;

  // Font Sizes
  css += `  /* === Font Sizes === */\n`;
  Object.entries(typography.fontSize).forEach(([key, value]) => {
    css += `  --text-${key}: ${value};\n`;
  });
  css += '\n';

  // Line Heights
  css += `  /* === Line Heights === */\n`;
  Object.entries(typography.lineHeight).forEach(([key, value]) => {
    css += `  --leading-${key}: ${value};\n`;
  });
  css += '\n';

  // Spacing
  css += `  /* === Spacing === */\n`;
  Object.entries(spacing).forEach(([key, value]) => {
    css += `  --spacing-${key}: ${value};\n`;
  });
  css += '\n';

  // Border Radius
  css += `  /* === Border Radius === */\n`;
  Object.entries(borderRadius).forEach(([key, value]) => {
    css += `  --radius-${key}: ${value};\n`;
  });
  css += '\n';

  // Shadows
  css += `  /* === Shadows === */\n`;
  Object.entries(shadows).forEach(([key, value]) => {
    css += `  --shadow-${key}: ${value};\n`;
  });
  css += '\n';

  // Transitions
  css += `  /* === Transitions === */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
`;

  return css;
}

// ============================================
// Generate Font CSS
// ============================================

function generateFontCSS() {
  return `/**
 * Birne Design System - Font Declarations
 * Auto-generated - DO NOT EDIT
 */

/* Conforto - Display Font */
@font-face {
  font-family: 'Conforto';
  src: url('${SUPABASE_FONT_BASE}/Conforto-Regular.otf') format('opentype');
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'Conforto';
  src: url('${SUPABASE_FONT_BASE}/Conforto-Medium.otf') format('opentype');
  font-weight: 500;
  font-display: swap;
}

/* General Sans - Text Font */
@font-face {
  font-family: 'General Sans';
  src: url('${SUPABASE_FONT_BASE}/GeneralSans-Light.otf') format('opentype');
  font-weight: 300;
  font-display: swap;
}

@font-face {
  font-family: 'General Sans';
  src: url('${SUPABASE_FONT_BASE}/GeneralSans-Regular.otf') format('opentype');
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'General Sans';
  src: url('${SUPABASE_FONT_BASE}/GeneralSans-Medium.otf') format('opentype');
  font-weight: 500;
  font-display: swap;
}

/* JetBrains Mono - Monospace Font */
@font-face {
  font-family: 'JetBrains Mono';
  src: url('${SUPABASE_FONT_BASE}/JetBrainsMono-VariableFont_wght.ttf') format('truetype');
  font-weight: 100 800;
  font-display: swap;
}
`;
}

// ============================================
// Generate Tailwind Preset
// ============================================

function generateTailwindPreset() {
  return `/**
 * Birne Design System - Tailwind Preset
 * Auto-generated - DO NOT EDIT
 *
 * Usage:
 * // tailwind.config.js
 * module.exports = {
 *   presets: [require('@birne/design-system/tailwind')]
 * }
 */

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ["'Conforto'", "serif"],
        text: ["'General Sans'", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      fontSize: ${JSON.stringify(typography.fontSize, null, 8).replace(/\n/g, '\n      ')},
      colors: {
        "birne-black": {
          DEFAULT: "hsl(var(--birne-black-100) / <alpha-value>)",
          100: "hsl(var(--birne-black-100) / <alpha-value>)",
          80: "hsl(var(--birne-black-80) / <alpha-value>)",
          60: "hsl(var(--birne-black-60) / <alpha-value>)",
          40: "hsl(var(--birne-black-40) / <alpha-value>)",
          20: "hsl(var(--birne-black-20) / <alpha-value>)",
          10: "hsl(var(--birne-black-10) / <alpha-value>)",
          5: "hsl(var(--birne-black-5) / <alpha-value>)",
          2: "hsl(var(--birne-black-2) / <alpha-value>)",
        },
        "birne-purple": {
          DEFAULT: "hsl(var(--birne-purple-100))",
          100: "hsl(var(--birne-purple-100))",
          80: "hsl(var(--birne-purple-80))",
          60: "hsl(var(--birne-purple-60))",
          40: "hsl(var(--birne-purple-40))",
          20: "hsl(var(--birne-purple-20))",
        },
        "birne-lemon": {
          DEFAULT: "hsl(var(--birne-lemon-100))",
          100: "hsl(var(--birne-lemon-100))",
          80: "hsl(var(--birne-lemon-80))",
          60: "hsl(var(--birne-lemon-60))",
          40: "hsl(var(--birne-lemon-40))",
          20: "hsl(var(--birne-lemon-20))",
        },
        "birne-sand": {
          DEFAULT: "hsl(var(--birne-sand-60))",
          140: "hsl(var(--birne-sand-140))",
          120: "hsl(var(--birne-sand-120))",
          100: "hsl(var(--birne-sand-100))",
          80: "hsl(var(--birne-sand-80))",
          60: "hsl(var(--birne-sand-60))",
          40: "hsl(var(--birne-sand-40))",
          20: "hsl(var(--birne-sand-20))",
        },
        "text-heading": "var(--text-heading)",
        "text-body": "var(--text-body)",
        "text-caption": "var(--text-caption)",
        background: "var(--background)",
        surface: "var(--surface)",
        border: "var(--border)",
        hover: "var(--hover)",
      },
      spacing: ${JSON.stringify(spacing, null, 8).replace(/\n/g, '\n      ')},
      borderRadius: ${JSON.stringify(borderRadius, null, 8).replace(/\n/g, '\n      ')},
      boxShadow: ${JSON.stringify(shadows, null, 8).replace(/\n/g, '\n      ')},
      transitionDuration: {
        fast: "150ms",
        base: "200ms",
        slow: "300ms",
      },
      transitionTimingFunction: {
        apple: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
};
`;
}

// ============================================
// Generate JS Tokens
// ============================================

function generateJSTokens() {
  const tokens = {
    colors,
    hsl,
    typography,
    spacing,
    borderRadius,
    shadows,
    fontUrls: {
      conforto: {
        regular: `${SUPABASE_FONT_BASE}/Conforto-Regular.otf`,
        medium: `${SUPABASE_FONT_BASE}/Conforto-Medium.otf`,
      },
      generalSans: {
        light: `${SUPABASE_FONT_BASE}/GeneralSans-Light.otf`,
        regular: `${SUPABASE_FONT_BASE}/GeneralSans-Regular.otf`,
        medium: `${SUPABASE_FONT_BASE}/GeneralSans-Medium.otf`,
      },
      jetbrainsMono: {
        variable: `${SUPABASE_FONT_BASE}/JetBrainsMono-VariableFont_wght.ttf`,
      },
    },
  };

  const cjs = `/**
 * Birne Design System - JavaScript Tokens
 * Auto-generated - DO NOT EDIT
 */

const tokens = ${JSON.stringify(tokens, null, 2)};

module.exports = tokens;
module.exports.default = tokens;
module.exports.colors = tokens.colors;
module.exports.typography = tokens.typography;
module.exports.spacing = tokens.spacing;
module.exports.borderRadius = tokens.borderRadius;
module.exports.shadows = tokens.shadows;
`;

  const esm = `/**
 * Birne Design System - JavaScript Tokens (ESM)
 * Auto-generated - DO NOT EDIT
 */

const tokens = ${JSON.stringify(tokens, null, 2)};

export default tokens;
export const colors = tokens.colors;
export const hsl = tokens.hsl;
export const typography = tokens.typography;
export const spacing = tokens.spacing;
export const borderRadius = tokens.borderRadius;
export const shadows = tokens.shadows;
export const fontUrls = tokens.fontUrls;
`;

  return { cjs, esm };
}

// ============================================
// Generate TypeScript Declarations
// ============================================

function generateTypeDeclarations() {
  return `/**
 * Birne Design System - TypeScript Declarations
 * Auto-generated - DO NOT EDIT
 */

export interface BirneColorScale {
  100: string;
  80: string;
  60: string;
  40: string;
  20: string;
  10?: string;
  5?: string;
  2?: string;
}

export interface BirneSandScale {
  140: string;
  120: string;
  100: string;
  80: string;
  60: string;
  40: string;
  20: string;
}

export interface Colors {
  birneBlack: BirneColorScale;
  birnePurple: BirneColorScale;
  birneDarkPurple: Pick<BirneColorScale, 100 | 80 | 60>;
  birneLemon: BirneColorScale;
  birneSand: BirneSandScale;
  birneGrapefruit: BirneColorScale;
}

export interface Typography {
  fontFamily: {
    display: string;
    text: string;
    mono: string;
  };
  fontSize: Record<string, string>;
  lineHeight: Record<string, string>;
}

export interface Tokens {
  colors: Colors;
  hsl: Record<string, Record<string, string>>;
  typography: Typography;
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
  shadows: Record<string, string>;
  fontUrls: {
    conforto: { regular: string; medium: string };
    generalSans: { light: string; regular: string; medium: string };
    jetbrainsMono: { variable: string };
  };
}

declare const tokens: Tokens;
export default tokens;
export declare const colors: Colors;
export declare const hsl: Record<string, Record<string, string>>;
export declare const typography: Typography;
export declare const spacing: Record<string, string>;
export declare const borderRadius: Record<string, string>;
export declare const shadows: Record<string, string>;
export declare const fontUrls: Tokens['fontUrls'];
`;
}

// ============================================
// Generate Inline Styles (for PDF generation)
// ============================================

function generateInlineStyles() {
  const styles = {
    typography: {
      eyebrow: `font-family: 'JetBrains Mono', monospace; font-size: 14px; line-height: 20px; text-transform: uppercase; letter-spacing: 0.05em;`,
      h1: `font-family: 'Conforto', serif; font-size: 48px; line-height: 56px; font-weight: 400; color: ${colors.birneBlack[100]};`,
      h2: `font-family: 'Conforto', serif; font-size: 34px; line-height: 40px; font-weight: 400; color: ${colors.birneBlack[100]};`,
      h3: `font-family: 'Conforto', serif; font-size: 28px; line-height: 34px; font-weight: 400; color: ${colors.birneBlack[100]};`,
      h4: `font-family: 'Conforto', serif; font-size: 21px; line-height: 28px; font-weight: 500; color: ${colors.birneBlack[100]};`,
      bodyLarge: `font-family: 'General Sans', sans-serif; font-size: 17px; line-height: 25px; color: #514A53;`,
      bodyMedium: `font-family: 'General Sans', sans-serif; font-size: 16px; line-height: 24px; color: #514A53;`,
      bodySmall: `font-family: 'General Sans', sans-serif; font-size: 14px; line-height: 21px; color: #514A53;`,
      label: `font-family: 'General Sans', sans-serif; font-size: 13px; line-height: 18px; font-weight: 500;`,
      caption: `font-family: 'General Sans', sans-serif; font-size: 11px; line-height: 16px; color: ${colors.birneBlack[40]};`,
    },
    colors: {
      background: colors.birneSand[60],
      surface: '#FFFFFF',
      cover: colors.birneBlack[100],
      textHeading: colors.birneBlack[100],
      textBody: '#514A53',
      textCaption: colors.birneBlack[40],
      accent: colors.birnePurple[100],
      accentDark: colors.birneDarkPurple[100],
      lemon: colors.birneLemon[100],
    },
    components: {
      card: `background: #FFFFFF; border-radius: 12px; padding: 24px; box-shadow: ${shadows.sm};`,
      cardElevated: `background: #FFFFFF; border-radius: 16px; padding: 32px; box-shadow: ${shadows.md};`,
      button: `font-family: 'General Sans', sans-serif; font-size: 15px; font-weight: 500; padding: 8px 16px; border-radius: 8px;`,
      buttonPrimary: `background: ${colors.birnePurple[100]}; color: ${colors.birneBlack[100]};`,
      buttonSecondary: `background: ${colors.birneBlack[100]}; color: #FFFFFF;`,
      badge: `font-family: 'JetBrains Mono', monospace; font-size: 11px; padding: 4px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 0.05em;`,
    },
    page: {
      a4: `width: 210mm; height: 297mm; padding: 20mm;`,
      a4Landscape: `width: 297mm; height: 210mm; padding: 20mm;`,
      slide16x9: `width: 1920px; height: 1080px; padding: 80px;`,
    },
    fontFaces: `
@font-face {
  font-family: 'Conforto';
  src: url('${SUPABASE_FONT_BASE}/Conforto-Regular.otf') format('opentype');
  font-weight: 400;
}
@font-face {
  font-family: 'Conforto';
  src: url('${SUPABASE_FONT_BASE}/Conforto-Medium.otf') format('opentype');
  font-weight: 500;
}
@font-face {
  font-family: 'General Sans';
  src: url('${SUPABASE_FONT_BASE}/GeneralSans-Regular.otf') format('opentype');
  font-weight: 400;
}
@font-face {
  font-family: 'General Sans';
  src: url('${SUPABASE_FONT_BASE}/GeneralSans-Medium.otf') format('opentype');
  font-weight: 500;
}
@font-face {
  font-family: 'JetBrains Mono';
  src: url('${SUPABASE_FONT_BASE}/JetBrainsMono-VariableFont_wght.ttf') format('truetype');
  font-weight: 100 800;
}
`,
  };

  return `/**
 * Birne Design System - Inline Styles for PDF Generation
 * Auto-generated - DO NOT EDIT
 *
 * Usage:
 * import { inlineStyles } from '@birne/design-system/inline';
 * <h1 style={inlineStyles.typography.h1}>Title</h1>
 */

const inlineStyles = ${JSON.stringify(styles, null, 2)};

module.exports = inlineStyles;
module.exports.default = inlineStyles;
module.exports.inlineStyles = inlineStyles;
`;
}

// ============================================
// Generate Markdown Tokens (for birne-generators)
// ============================================

function generateMarkdownTokens() {
  function colorScaleTable(name, scale) {
    const keys = Object.keys(scale).sort((a, b) => Number(b) - Number(a));
    let rows = keys.map(k => `| ${name}.${k} | \`${scale[k]}\` |`).join('\n');
    return rows;
  }

  return `# Birne Brand Tokeny

> Auto-generated z birne-design-system. NEEDITUJ MANUALNE.
> Zdroj: \`birne-design-system/scripts/build-tokens.js\`

## Farby

### Birne Black (primarny tmavy)

| Token | Hex |
|-------|-----|
${colorScaleTable('birneBlack', colors.birneBlack)}

### Birne Purple (fialovy akcent)

| Token | Hex |
|-------|-----|
${colorScaleTable('birnePurple', colors.birnePurple)}

### Birne Dark Purple

| Token | Hex |
|-------|-----|
${colorScaleTable('birneDarkPurple', colors.birneDarkPurple)}

### Birne Lemon (zluty akcent)

| Token | Hex |
|-------|-----|
${colorScaleTable('birneLemon', colors.birneLemon)}

### Birne Sand (pozadia)

| Token | Hex |
|-------|-----|
${colorScaleTable('birneSand', colors.birneSand)}

### Birne Grapefruit (teply akcent)

| Token | Hex |
|-------|-----|
${colorScaleTable('birneGrapefruit', colors.birneGrapefruit)}

### Textove farby

| Token | Hex | Pouzitie |
|-------|-----|----------|
| textHeading | \`#221924\` | Nadpisy, hlavny text |
| textBody | \`#514A53\` | Body text |
| textCaption | \`#A09BA3\` | Caption, labels, sekundarny text |
| textMuted | \`#C2BFC3\` | Disabled, placeholder |

### Semanticke farby

| Token | Hex |
|-------|-----|
| success | \`#3DA385\` |
| successLight | \`#E8F5F0\` |
| warning | \`#E5A435\` |
| warningLight | \`#FCF4E5\` |
| danger | \`#DC3545\` |
| dangerLight | \`#FDE8EA\` |

### UI farby

| Token | Hex |
|-------|-----|
| background | \`#FFFFFF\` |
| surface | \`#FFFFFF\` |
| border | \`#D1D1D6\` |
| hover | \`#F5F5F7\` |

## Typografia

### Font families

| Token | Hodnota |
|-------|---------|
| display | \`'Conforto', serif\` |
| text | \`'General Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif\` |
| mono | \`'JetBrains Mono', monospace\` |

### Velkostna skala

| Token | Font size | Line height |
|-------|-----------|-------------|
${Object.entries(typography.fontSize).map(([key, size]) => `| ${key} | ${size} | ${typography.lineHeight[key]} |`).join('\n')}

### Font URLs (Supabase CDN)

| Font | Variant | URL |
|------|---------|-----|
| Conforto | Regular (400) | \`${SUPABASE_FONT_BASE}/Conforto-Regular.otf\` |
| Conforto | Medium (500) | \`${SUPABASE_FONT_BASE}/Conforto-Medium.otf\` |
| General Sans | Light (300) | \`${SUPABASE_FONT_BASE}/GeneralSans-Light.otf\` |
| General Sans | Regular (400) | \`${SUPABASE_FONT_BASE}/GeneralSans-Regular.otf\` |
| General Sans | Medium (500) | \`${SUPABASE_FONT_BASE}/GeneralSans-Medium.otf\` |
| JetBrains Mono | Variable (100-800) | \`${SUPABASE_FONT_BASE}/JetBrainsMono-VariableFont_wght.ttf\` |

### @font-face deklaracie

\`\`\`css
@font-face {
  font-family: 'Conforto';
  src: url('${SUPABASE_FONT_BASE}/Conforto-Regular.otf') format('opentype');
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'Conforto';
  src: url('${SUPABASE_FONT_BASE}/Conforto-Medium.otf') format('opentype');
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: 'General Sans';
  src: url('${SUPABASE_FONT_BASE}/GeneralSans-Light.otf') format('opentype');
  font-weight: 300;
  font-display: swap;
}
@font-face {
  font-family: 'General Sans';
  src: url('${SUPABASE_FONT_BASE}/GeneralSans-Regular.otf') format('opentype');
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: 'General Sans';
  src: url('${SUPABASE_FONT_BASE}/GeneralSans-Medium.otf') format('opentype');
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: 'JetBrains Mono';
  src: url('${SUPABASE_FONT_BASE}/JetBrainsMono-VariableFont_wght.ttf') format('truetype');
  font-weight: 100 800;
  font-display: swap;
}
\`\`\`

## Spacing

| Token | Hodnota |
|-------|---------|
${Object.entries(spacing).map(([key, val]) => `| ${key} | ${val} |`).join('\n')}

## Border Radius

| Token | Hodnota |
|-------|---------|
${Object.entries(borderRadius).map(([key, val]) => `| ${key} | ${val} |`).join('\n')}

## Shadows

| Token | Hodnota |
|-------|---------|
${Object.entries(shadows).map(([key, val]) => `| ${key} | \`${val}\` |`).join('\n')}
`;
}

// ============================================
// Main Build Function
// ============================================

function build() {
  console.log('🎨 Building Birne Design System tokens...\n');

  const distDir = path.join(__dirname, '..', 'dist');

  // Ensure directories exist
  ensureDir(path.join(distDir, 'css'));
  ensureDir(path.join(distDir, 'tailwind'));
  ensureDir(path.join(distDir, 'js'));
  ensureDir(path.join(distDir, 'inline'));
  ensureDir(path.join(distDir, 'markdown'));

  // Generate CSS Variables
  console.log('  📄 Generating CSS variables...');
  fs.writeFileSync(
    path.join(distDir, 'css', 'variables.css'),
    generateCSSVariables()
  );

  // Generate Font CSS
  console.log('  📄 Generating font declarations...');
  fs.writeFileSync(
    path.join(distDir, 'css', 'fonts.css'),
    generateFontCSS()
  );

  // Generate Tailwind Preset
  console.log('  📄 Generating Tailwind preset...');
  fs.writeFileSync(
    path.join(distDir, 'tailwind', 'preset.js'),
    generateTailwindPreset()
  );

  // Generate JS Tokens
  console.log('  📄 Generating JavaScript tokens...');
  const { cjs, esm } = generateJSTokens();
  fs.writeFileSync(path.join(distDir, 'js', 'tokens.js'), cjs);
  fs.writeFileSync(path.join(distDir, 'js', 'tokens.mjs'), esm);

  // Generate TypeScript Declarations
  console.log('  📄 Generating TypeScript declarations...');
  fs.writeFileSync(
    path.join(distDir, 'js', 'tokens.d.ts'),
    generateTypeDeclarations()
  );

  // Generate Inline Styles
  console.log('  📄 Generating inline styles for PDF...');
  fs.writeFileSync(
    path.join(distDir, 'inline', 'styles.js'),
    generateInlineStyles()
  );

  // Generate Markdown Tokens
  console.log('  📄 Generating markdown tokens...');
  const markdownPath = path.join(distDir, 'markdown', 'brand-tokens.md');
  fs.writeFileSync(markdownPath, generateMarkdownTokens());

  // Auto-copy to birne-generators if it exists
  const generatorsPath = path.join(__dirname, '..', '..', 'birne-generators', '.claude', 'capabilities', 'base');
  if (fs.existsSync(generatorsPath)) {
    fs.copyFileSync(markdownPath, path.join(generatorsPath, 'brand-tokens.md'));
    console.log('  📋 Copied brand-tokens.md to birne-generators');
  }

  console.log('\n✅ Build complete! Output files:');
  console.log('   dist/css/variables.css');
  console.log('   dist/css/fonts.css');
  console.log('   dist/tailwind/preset.js');
  console.log('   dist/js/tokens.js');
  console.log('   dist/js/tokens.mjs');
  console.log('   dist/js/tokens.d.ts');
  console.log('   dist/inline/styles.js');
  console.log('   dist/markdown/brand-tokens.md');
}

// Run build
build();
