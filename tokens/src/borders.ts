/**
 * Birne Design System - Border Tokens
 * Source of truth for all border values across Birne projects
 */

// ============================================
// Border Radius
// ============================================

export const borderRadius = {
  /** 0px - No rounding */
  none: '0',
  /** 4px - Extra extra small */
  '2xs': '4px',
  /** 6px - Extra small */
  xs: '6px',
  /** 8px - Small */
  sm: '8px',
  /** 10px - Medium (default for cards) */
  md: '10px',
  /** 12px - Large */
  lg: '12px',
  /** 16px - Extra large */
  xl: '16px',
  /** 20px - 2X large */
  '2xl': '20px',
  /** 24px - 3X large */
  '3xl': '24px',
  /** 9999px - Full (pill shape) */
  full: '9999px',
} as const;

// ============================================
// Border Width
// ============================================

export const borderWidth = {
  /** 0px */
  0: '0',
  /** 1px - Default border */
  DEFAULT: '1px',
  /** 2px */
  2: '2px',
  /** 4px */
  4: '4px',
  /** 8px */
  8: '8px',
} as const;

// ============================================
// Border Styles (with colors)
// ============================================

export const borderStyles = {
  /** Default subtle border */
  default: '1px solid #D1D1D6',
  /** Light border */
  light: '1px solid #E5E5EA',
  /** Dark border */
  dark: '1px solid #48484A',
  /** Purple accent border */
  accent: '1px solid #DCB1E6',
  /** Focus ring style */
  focus: '2px solid #DCB1E6',
} as const;

// ============================================
// Component-specific Border Radius
// ============================================

export const componentRadius = {
  /** Button border radius by size */
  button: {
    sm: '6px',
    md: '8px',
    lg: '10px',
  },
  /** Input border radius */
  input: {
    sm: '6px',
    md: '8px',
    lg: '10px',
  },
  /** Card border radius */
  card: {
    sm: '10px',
    md: '12px',
    lg: '16px',
  },
  /** Badge border radius */
  badge: {
    sm: '4px',
    md: '6px',
    full: '9999px',
  },
  /** Avatar border radius */
  avatar: {
    sm: '8px',
    md: '12px',
    full: '9999px',
  },
  /** Modal/Dialog border radius */
  modal: '16px',
  /** Tooltip border radius */
  tooltip: '8px',
} as const;

// ============================================
// Default Export
// ============================================

export const borders = {
  borderRadius,
  borderWidth,
  borderStyles,
  componentRadius,
} as const;

export default borders;
