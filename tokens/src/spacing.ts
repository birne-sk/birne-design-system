/**
 * Birne Design System - Spacing Tokens
 * Source of truth for all spacing values across Birne projects
 */

// ============================================
// Base Spacing Scale
// ============================================

export const spacing = {
  /** 0px */
  0: '0',
  /** 2px */
  px: '1px',
  /** 2px */
  0.5: '2px',
  /** 4px */
  1: '4px',
  /** 6px */
  1.5: '6px',
  /** 8px */
  2: '8px',
  /** 10px */
  2.5: '10px',
  /** 12px */
  3: '12px',
  /** 14px */
  3.5: '14px',
  /** 16px */
  4: '16px',
  /** 20px */
  5: '20px',
  /** 24px */
  6: '24px',
  /** 28px */
  7: '28px',
  /** 32px */
  8: '32px',
  /** 36px */
  9: '36px',
  /** 40px */
  10: '40px',
  /** 44px */
  11: '44px',
  /** 48px */
  12: '48px',
  /** 56px */
  14: '56px',
  /** 64px */
  16: '64px',
  /** 80px */
  20: '80px',
  /** 96px */
  24: '96px',
  /** 112px */
  28: '112px',
  /** 128px */
  32: '128px',
  /** 144px */
  36: '144px',
  /** 160px */
  40: '160px',
  /** 176px */
  44: '176px',
  /** 192px */
  48: '192px',
  /** 224px */
  56: '224px',
  /** 256px */
  64: '256px',
} as const;

// ============================================
// Named Spacing (Semantic)
// ============================================

export const spacingNamed = {
  /** 4px - Extra small */
  xs: '4px',
  /** 8px - Small */
  sm: '8px',
  /** 12px - Medium */
  md: '12px',
  /** 16px - Large */
  lg: '16px',
  /** 24px - Extra large */
  xl: '24px',
  /** 32px - 2X large */
  '2xl': '32px',
  /** 48px - 3X large */
  '3xl': '48px',
  /** 64px - 4X large */
  '4xl': '64px',
  /** 96px - 5X large */
  '5xl': '96px',
} as const;

// ============================================
// Component-specific Spacing
// ============================================

export const componentSpacing = {
  /** Button padding */
  button: {
    sm: { x: '12px', y: '6px' },
    md: { x: '16px', y: '8px' },
    lg: { x: '24px', y: '12px' },
  },
  /** Card padding */
  card: {
    sm: '16px',
    md: '24px',
    lg: '32px',
  },
  /** Input padding */
  input: {
    sm: { x: '8px', y: '6px' },
    md: { x: '12px', y: '8px' },
    lg: { x: '16px', y: '12px' },
  },
  /** Section padding */
  section: {
    sm: '48px',
    md: '80px',
    lg: '120px',
  },
  /** Container max-width */
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1400px',
  },
} as const;

// ============================================
// Gap Scale (for flex/grid)
// ============================================

export const gap = {
  0: '0',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
} as const;

// ============================================
// Default Export
// ============================================

export const spacingTokens = {
  spacing,
  spacingNamed,
  componentSpacing,
  gap,
} as const;

export default spacingTokens;
