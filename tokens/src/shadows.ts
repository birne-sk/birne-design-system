/**
 * Birne Design System - Shadow Tokens
 * Source of truth for all shadow values across Birne projects
 */

// ============================================
// Box Shadows
// ============================================

export const boxShadow = {
  /** No shadow */
  none: 'none',
  /** Extra small - subtle elevation */
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  /** Small - cards at rest */
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
  /** Medium - cards on hover, dropdowns */
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
  /** Large - modals, popovers */
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
  /** Extra large - notifications, important overlays */
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
  /** 2X large - full-screen overlays */
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  /** Inner shadow */
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
} as const;

// ============================================
// Dark Mode Shadows
// ============================================

export const boxShadowDark = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.15)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px -1px rgba(0, 0, 0, 0.4)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.4)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -4px rgba(0, 0, 0, 0.4)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.15)',
} as const;

// ============================================
// Component-specific Shadows
// ============================================

export const componentShadow = {
  /** Button shadows */
  button: {
    default: boxShadow.sm,
    hover: boxShadow.md,
    active: boxShadow.xs,
  },
  /** Card shadows */
  card: {
    default: boxShadow.sm,
    hover: boxShadow.md,
    elevated: boxShadow.lg,
  },
  /** Input shadows */
  input: {
    default: boxShadow.none,
    focus: `0 0 0 3px rgba(220, 177, 230, 0.3)`, // birnePurple with opacity
  },
  /** Dropdown/Popover shadows */
  dropdown: boxShadow.lg,
  /** Modal shadows */
  modal: boxShadow.xl,
  /** Toast/Notification shadows */
  toast: boxShadow.lg,
  /** Tooltip shadows */
  tooltip: boxShadow.md,
} as const;

// ============================================
// Text Shadows
// ============================================

export const textShadow = {
  none: 'none',
  sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
  md: '0 2px 4px rgba(0, 0, 0, 0.1)',
  lg: '0 4px 8px rgba(0, 0, 0, 0.15)',
} as const;

// ============================================
// Default Export
// ============================================

export const shadows = {
  boxShadow,
  boxShadowDark,
  componentShadow,
  textShadow,
} as const;

export default shadows;
