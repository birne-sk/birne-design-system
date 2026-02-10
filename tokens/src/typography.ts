/**
 * Birne Design System - Typography Tokens
 * Source of truth for all typography values across Birne projects
 */

// ============================================
// Font Families
// ============================================

export const fontFamily = {
  /** Display font for headings - Conforto (serif) */
  display: "'Conforto', serif",
  /** Text font for body content - General Sans (sans-serif) */
  text: "'General Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  /** Monospace font for code and eyebrow text - JetBrains Mono */
  mono: "'JetBrains Mono', monospace",
  /** System font stack fallback */
  system: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif",
} as const;

// ============================================
// Font URLs (Supabase CDN)
// ============================================

const SUPABASE_FONT_BASE = 'https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fonts';

export const fontUrls = {
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
} as const;

// ============================================
// Font Sizes
// ============================================

export const fontSize = {
  /** 11px - Extra small */
  xs: '11px',
  /** 13px - Small */
  sm: '13px',
  /** 15px - Base */
  base: '15px',
  /** 17px - Medium */
  md: '17px',
  /** 19px - Large */
  lg: '19px',
  /** 21px - Extra large */
  xl: '21px',
  /** 28px - 2X large */
  '2xl': '28px',
  /** 34px - 3X large */
  '3xl': '34px',
  /** 48px - 4X large (display) */
  '4xl': '48px',
  /** 60px - 5X large (hero) */
  '5xl': '60px',
} as const;

// ============================================
// Line Heights
// ============================================

export const lineHeight = {
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
} as const;

// ============================================
// Font Weights
// ============================================

export const fontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

// ============================================
// Letter Spacing
// ============================================

export const letterSpacing = {
  tight: '-0.02em',
  normal: '0',
  wide: '0.02em',
  wider: '0.05em',  // For eyebrow text
  widest: '0.1em',
} as const;

// ============================================
// Text Styles (Composite)
// ============================================

export const textStyles = {
  // Display styles (Conforto)
  display: {
    hero: {
      fontFamily: fontFamily.display,
      fontSize: fontSize['5xl'],
      lineHeight: lineHeight['5xl'],
      fontWeight: fontWeight.regular,
      letterSpacing: letterSpacing.tight,
    },
    h1: {
      fontFamily: fontFamily.display,
      fontSize: fontSize['4xl'],
      lineHeight: lineHeight['4xl'],
      fontWeight: fontWeight.regular,
      letterSpacing: letterSpacing.tight,
    },
    h2: {
      fontFamily: fontFamily.display,
      fontSize: fontSize['3xl'],
      lineHeight: lineHeight['3xl'],
      fontWeight: fontWeight.regular,
      letterSpacing: letterSpacing.normal,
    },
    h3: {
      fontFamily: fontFamily.display,
      fontSize: fontSize['2xl'],
      lineHeight: lineHeight['2xl'],
      fontWeight: fontWeight.regular,
      letterSpacing: letterSpacing.normal,
    },
    h4: {
      fontFamily: fontFamily.display,
      fontSize: fontSize.xl,
      lineHeight: lineHeight.xl,
      fontWeight: fontWeight.medium,
      letterSpacing: letterSpacing.normal,
    },
  },

  // Body styles (General Sans)
  body: {
    xl: {
      fontFamily: fontFamily.text,
      fontSize: fontSize.xl,
      lineHeight: '32px',
      fontWeight: fontWeight.regular,
    },
    lg: {
      fontFamily: fontFamily.text,
      fontSize: fontSize.lg,
      lineHeight: '28px',
      fontWeight: fontWeight.regular,
    },
    md: {
      fontFamily: fontFamily.text,
      fontSize: fontSize.md,
      lineHeight: '25px',
      fontWeight: fontWeight.regular,
    },
    base: {
      fontFamily: fontFamily.text,
      fontSize: fontSize.base,
      lineHeight: lineHeight.base,
      fontWeight: fontWeight.regular,
    },
    sm: {
      fontFamily: fontFamily.text,
      fontSize: fontSize.sm,
      lineHeight: lineHeight.sm,
      fontWeight: fontWeight.regular,
    },
  },

  // UI styles (General Sans)
  ui: {
    label: {
      fontFamily: fontFamily.text,
      fontSize: fontSize.sm,
      lineHeight: lineHeight.sm,
      fontWeight: fontWeight.medium,
    },
    caption: {
      fontFamily: fontFamily.text,
      fontSize: fontSize.xs,
      lineHeight: lineHeight.xs,
      fontWeight: fontWeight.regular,
    },
    button: {
      fontFamily: fontFamily.text,
      fontSize: fontSize.base,
      lineHeight: lineHeight.base,
      fontWeight: fontWeight.medium,
    },
  },

  // Eyebrow style (JetBrains Mono)
  eyebrow: {
    fontFamily: fontFamily.mono,
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: fontWeight.regular,
    letterSpacing: letterSpacing.wider,
    textTransform: 'uppercase' as const,
  },

  // Code style (JetBrains Mono)
  code: {
    fontFamily: fontFamily.mono,
    fontSize: fontSize.sm,
    lineHeight: lineHeight.md,
    fontWeight: fontWeight.regular,
  },
} as const;

// ============================================
// Default Export
// ============================================

export const typography = {
  fontFamily,
  fontUrls,
  fontSize,
  lineHeight,
  fontWeight,
  letterSpacing,
  textStyles,
} as const;

export default typography;
