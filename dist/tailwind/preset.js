/**
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
      fontSize: {
              "xs": "11px",
              "sm": "13px",
              "base": "15px",
              "md": "17px",
              "lg": "19px",
              "xl": "21px",
              "2xl": "28px",
              "3xl": "34px",
              "4xl": "48px",
              "5xl": "60px"
      },
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
        "ai": {
          DEFAULT: "#A78BFA",
          indigo: "#4338CA",
          violet: "#A78BFA",
          cyan: "#22D3EE",
          surface: "#EEF2FF",
          border: "#A78BFA",
        },
      },
      backgroundImage: {
        "ai-gradient": "var(--ai-gradient)",
        "ai-gradient-horizontal": "var(--ai-gradient-horizontal)",
        "ai-gradient-animated": "var(--ai-gradient-animated)",
      },
      spacing: {
              "xs": "4px",
              "sm": "8px",
              "md": "12px",
              "lg": "16px",
              "xl": "24px",
              "2xl": "32px",
              "3xl": "48px",
              "4xl": "64px",
              "5xl": "96px"
      },
      borderRadius: {
              "2xs": "4px",
              "xs": "6px",
              "sm": "8px",
              "md": "10px",
              "lg": "12px",
              "xl": "16px",
              "2xl": "20px",
              "3xl": "24px",
              "full": "9999px"
      },
      boxShadow: {
        ...{
              "xs": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
              "sm": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
              "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
              "lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
              "xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
      },
        "ai-sm": "0 0 8px rgba(167, 139, 250, 0.3)",
        "ai-md": "0 0 16px rgba(167, 139, 250, 0.4)",
        "ai-lg": "0 0 24px rgba(167, 139, 250, 0.5)",
      },
      animation: {
        "ai-gradient": "ai-gradient-shift 3s ease-in-out infinite",
        "ai-glow-pulse": "ai-glow-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        "ai-gradient-shift": {
          "0%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
          "100%": { "background-position": "0% 50%" },
        },
        "ai-glow-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
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
