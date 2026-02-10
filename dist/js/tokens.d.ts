/**
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
