/**
 * Birne Design System - Color Tokens
 * Source of truth for all color values across Birne projects
 */

// ============================================
// Brand Colors
// ============================================

/**
 * Birne Black - Primary dark color
 * 8-level scale from darkest (100) to lightest (2)
 */
export const birneBlack = {
  100: '#221924',  // Level 1 - Darkest (Primary)
  80: '#4A4349',   // Level 2 - Dark Gray
  60: '#76707A',   // Level 3 - Medium Gray
  40: '#A09BA3',   // Level 4 - Light Gray
  20: '#CCC9CD',   // Level 5
  10: '#E1DFE2',   // Level 6
  5: '#F0EFF0',    // Level 7
  2: '#F8F7F8',    // Level 8 - Lightest
} as const;

/**
 * Birne Purple - Primary accent color
 * 5-level scale
 */
export const birnePurple = {
  100: '#DCB1E6',  // Primary purple
  80: '#E4C4EC',
  60: '#ECd7F2',
  40: '#F2E5F6',
  20: '#F8F2FA',
} as const;

/**
 * Birne Dark Purple - Secondary purple
 */
export const birneDarkPurple = {
  100: '#B982C6',  // Primary dark purple
  80: '#CAA1D4',
  60: '#DBC0E2',
} as const;

/**
 * Birne Lemon - Accent yellow
 * 5-level scale
 */
export const birneLemon = {
  100: '#FAFD70',  // Primary lemon
  80: '#FBFE8D',
  60: '#FCFEA9',
  40: '#FDFEC6',
  20: '#FEFEE3',
} as const;

/**
 * Birne Sand - Background/surface color
 * 7-level scale with dark variants
 */
export const birneSand = {
  140: '#D6D4C6',  // Level 0 - Darkest
  120: '#DDDBC9',  // Level 0.5 - Darker
  100: '#E4E2D7',  // Level 1 - Dark
  80: '#EBE9E0',   // Level 2
  60: '#EFEEE6',   // Level 3 - Default
  40: '#F4F3ED',   // Level 4
  20: '#F9F9F6',   // Level 5 - Lightest
} as const;

/**
 * Birne Grapefruit - Warm accent
 */
export const birneGrapefruit = {
  100: '#FF5C1F',
  80: '#FF7D4C',
  60: '#FF9E79',
  40: '#FFBFA6',
  20: '#FFE0D3',
} as const;

// ============================================
// Shape Colors (for decorative elements)
// ============================================

export const shapeYellow = {
  100: '#FFD24D',
  80: '#FFDB70',
  60: '#FFE493',
  40: '#FFEDB6',
  20: '#FFF6D9',
} as const;

export const shapeBlue = {
  100: '#8ED3F9',
  80: '#A5DCFB',
  60: '#BCE5FC',
  40: '#D3EEFD',
  20: '#EAF7FE',
} as const;

export const shapePink = {
  100: '#FF4282',
  80: '#FF6899',
  60: '#FF8EB1',
  40: '#FFB4C9',
  20: '#FFDAE6',
} as const;

export const shapeGreen = {
  100: '#4CAF50',
  80: '#70BF73',
  60: '#94CF97',
  40: '#B8DFBA',
  20: '#DCEFDD',
} as const;

export const shapeNavy = {
  100: '#3A68A0',
  80: '#6186B3',
  60: '#88A4C6',
  40: '#AFC2D9',
  20: '#D6E0EC',
} as const;

export const shapeGolden = {
  100: '#F5A623',
  80: '#F7B84F',
  60: '#F9CA7B',
  40: '#FBDCA7',
  20: '#FDEED3',
} as const;

// ============================================
// Semantic Colors
// ============================================

export const semantic = {
  success: {
    DEFAULT: '#29A88E',
    light: '#E5F5F1',
  },
  warning: {
    DEFAULT: '#E5A435',
    light: '#FCF4E5',
  },
  danger: {
    DEFAULT: '#DC3545',
    light: '#FDE8EA',
  },
} as const;

// ============================================
// Text Colors
// ============================================

export const text = {
  heading: '#221924',   // birneBlack.100
  body: '#514A53',      // Custom body color
  caption: '#A09BA3',   // birneBlack.40
  muted: '#C2BFC3',     // Light gray
} as const;

// ============================================
// UI Colors
// ============================================

export const ui = {
  background: '#FFFFFF',
  surface: '#FFFFFF',
  border: '#D1D1D6',
  hover: '#F5F5F7',
} as const;

// ============================================
// Gray Scale (System)
// ============================================

export const gray = {
  1: '#F5F5F7',
  2: '#E5E5EA',
  3: '#D1D1D6',
  4: '#8E8E93',
  5: '#636366',
  6: '#48484A',
} as const;

// ============================================
// HSL Values (for CSS custom properties)
// ============================================

export const hsl = {
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
  textHeading: '311 17% 13%',
  textBody: '300 7% 31%',
  textCaption: '300 5% 76%',
} as const;

// ============================================
// Default Export
// ============================================

export const colors = {
  birneBlack,
  birnePurple,
  birneDarkPurple,
  birneLemon,
  birneSand,
  birneGrapefruit,
  shapeYellow,
  shapeBlue,
  shapePink,
  shapeGreen,
  shapeNavy,
  shapeGolden,
  semantic,
  text,
  ui,
  gray,
  hsl,
} as const;

export default colors;
