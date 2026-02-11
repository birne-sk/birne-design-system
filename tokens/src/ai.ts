/**
 * Birne Design System - AI Tokens
 * Visual language for AI-powered features across Birne products & marketing
 *
 * Gradient: Indigo → Violet → Cyan
 * #4338CA → #A78BFA → #22D3EE
 */

// ============================================
// AI Gradient
// ============================================

export const aiGradient = {
  /** Gradient color stops: Indigo → Violet → Cyan */
  stops: ['#4338CA', '#A78BFA', '#22D3EE'] as const,
  /** CSS linear-gradient (static) */
  linear: 'linear-gradient(135deg, #4338CA 0%, #A78BFA 50%, #22D3EE 100%)',
  /** Horizontal linear-gradient */
  linearHorizontal: 'linear-gradient(90deg, #4338CA 0%, #A78BFA 50%, #22D3EE 100%)',
  /** Animated linear-gradient — use with background-size: 300% 300% and animation */
  animated: 'linear-gradient(135deg, #4338CA 0%, #A78BFA 25%, #22D3EE 50%, #A78BFA 75%, #4338CA 100%)',
} as const;

// ============================================
// AI Colors
// ============================================

export const aiColors = {
  /** Deep anchor (Indigo) */
  indigo: '#4338CA',
  /** Middle bridge (Violet) */
  violet: '#A78BFA',
  /** Bright end (Cyan) */
  cyan: '#22D3EE',
  /** Subtle background tint */
  surface: '#EEF2FF',
  /** Border color (non-gradient fallback) */
  border: '#A78BFA',
} as const;

// ============================================
// AI Glow (box-shadow)
// ============================================

export const aiGlow = {
  sm: '0 0 8px rgba(167, 139, 250, 0.3)',
  md: '0 0 16px rgba(167, 139, 250, 0.4)',
  lg: '0 0 24px rgba(167, 139, 250, 0.5)',
} as const;

// ============================================
// AI Animation
// ============================================

export const aiAnimation = {
  /** Gradient shift duration */
  duration: '3s',
  /** Gradient shift timing */
  timing: 'ease-in-out',
  /** Glow pulse duration */
  pulseDuration: '2s',
  /** Glow pulse timing */
  pulseTiming: 'ease-in-out',
} as const;

// ============================================
// Combined AI Export
// ============================================

export const ai = {
  gradient: aiGradient,
  colors: aiColors,
  glow: aiGlow,
  animation: aiAnimation,
} as const;

export default ai;
