/**
 * Birne Design System - Token Index
 * Central export for all design tokens
 */

// Re-export all token modules
export * from './colors';
export * from './typography';
export * from './spacing';
export * from './borders';
export * from './shadows';

// Import defaults for combined export
import { colors } from './colors';
import { typography } from './typography';
import { spacingTokens } from './spacing';
import { borders } from './borders';
import { shadows } from './shadows';

// ============================================
// Animation / Transition Tokens
// ============================================

export const transitions = {
  duration: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  timing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    /** Apple-style easing */
    apple: 'cubic-bezier(0.4, 0, 0.2, 1)',
    /** Spring-like easing */
    spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const;

// ============================================
// Z-Index Scale
// ============================================

export const zIndex = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  backdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080,
} as const;

// ============================================
// Breakpoints
// ============================================

export const breakpoints = {
  xs: '320px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1400px',
} as const;

// ============================================
// Asset URLs
// ============================================

const SUPABASE_BASE = 'https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets';

export const assets = {
  fonts: {
    confortoRegular: `${SUPABASE_BASE}/Fonts/Conforto-Regular.otf`,
    confortoMedium: `${SUPABASE_BASE}/Fonts/Conforto-Medium.otf`,
    generalSansLight: `${SUPABASE_BASE}/Fonts/GeneralSans-Light.otf`,
    generalSansRegular: `${SUPABASE_BASE}/Fonts/GeneralSans-Regular.otf`,
    generalSansMedium: `${SUPABASE_BASE}/Fonts/GeneralSans-Medium.otf`,
    jetbrainsMono: `${SUPABASE_BASE}/Fonts/JetBrainsMono-VariableFont_wght.ttf`,
  },
  team: {
    jakub: `${SUPABASE_BASE}/Fotky/Team/Jakub.jpg`,
    marek: `${SUPABASE_BASE}/Fotky/Team/Marek.jpg`,
  },
} as const;

// ============================================
// Logo SVG
// ============================================

export const logo = {
  svg: `<svg width="50" height="33" viewBox="0 0 66 43" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.778 36.5728L16.5624 31.2327C18.6601 32.9239 20.2813 33.1249 21.6317 33.1249C25.4161 33.1249 29.8779 28.1911 31.3681 26.0935L32.0455 25.1452C34.3441 21.9682 35.2225 19.3986 34.4097 18.4547C33.2603 17.1699 21.3607 17.3709 8.65267 35.0827L8.5172 35.2837L7.09694 37.3114L5.34019 39.9465L0 36.5685L24.7431 0L30.0833 3.37804L20.1459 18.0483C25.2151 13.9929 38.1941 9.32566 41.5765 13.5864C44.0762 16.6979 41.3056 23.1874 37.5211 28.3222L36.7782 29.3361C33.6012 33.6624 27.4482 40.4884 21.6361 40.4884C17.3753 40.4884 14.8756 38.2597 12.7824 36.5685L12.778 36.5728Z" fill="currentColor"/>
  <path d="M65.1704 5.94273L47.9306 31.2933L42.5904 27.9153L59.8302 2.5647L65.1704 5.94273ZM45.6319 34.6757L42.0485 39.9504L36.7083 36.5723L40.2917 31.2977L45.6319 34.6757Z" fill="currentColor"/>
</svg>`,
  /** Logo dimensions */
  dimensions: {
    default: { width: 50, height: 33 },
    full: { width: 66, height: 43 },
  },
} as const;

// ============================================
// Combined Token Export
// ============================================

export const tokens = {
  colors,
  typography,
  spacing: spacingTokens,
  borders,
  shadows,
  transitions,
  zIndex,
  breakpoints,
  assets,
  logo,
} as const;

export default tokens;
