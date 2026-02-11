/**
 * Birne Design System - Supabase Assets
 *
 * URLs for assets hosted on Supabase Storage
 * Bucket: Birne Assets
 */

import { createClient } from "@supabase/supabase-js";

// Supabase config
const SUPABASE_URL = "https://qemayuejayunopgxdlrz.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_FJnTXfqSIP8bEvYM_w7EkA_oJm45_mg";
const STORAGE_BUCKET = "Birne%20Assets";

export const ASSETS_BASE_URL = `${SUPABASE_URL}/storage/v1/object/public/${STORAGE_BUCKET}`;

// Supabase client (public - for frontend use)
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============================================
// Storage Folders
// ============================================

export const STORAGE_FOLDERS = {
  fonty: "Fonty",
  fotky: "Fotky",
  logo: "Logo",
  customIkony: "Custom%20ikony",
  mockupy: "Mockupy",
} as const;

// ============================================
// Font URLs
// ============================================

export const FONT_URLS = {
  conforto: {
    regular: `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.fonty}/Conforto-Regular.otf`,
    medium: `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.fonty}/Conforto-Medium.otf`,
  },
  generalSans: {
    regular: `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.fonty}/GeneralSans-Regular.otf`,
    medium: `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.fonty}/GeneralSans-Medium.otf`,
  },
  jetBrainsMono: {
    variable: `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.fonty}/JetBrainsMono-VariableFont_wght.ttf`,
  },
} as const;

// ============================================
// Logo
// ============================================

export const LOGO_URLS = {
  symbol: `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.logo}/birne_symbol.svg`,
} as const;

// ============================================
// Team Photos
// ============================================

export const TEAM_PHOTOS = {
  jakub: `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.fotky}/Team/Jakub.jpg`,
  marek: `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.fotky}/Team/Marek.jpg`,
} as const;

// ============================================
// Mood Photos
// ============================================

export const MOOD_PHOTOS = {
  dec2025_002: `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.fotky}/Mood/birne_dec2025_002.jpg`,
  dec2025_003: `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.fotky}/Mood/birne_dec2025_003.jpg`,
  dec2025_006: `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.fotky}/Mood/birne_dec2025_006.jpg`,
  dec2025_014: `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.fotky}/Mood/birne_dec2025_014.jpg`,
  dec2025_027: `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.fotky}/Mood/birne_dec2025_027.jpg`,
  dec2025_030: `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.fotky}/Mood/birne_dec2025_030.jpg`,
  dec2025_033: `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.fotky}/Mood/birne_dec2025_033.jpg`,
  dec2025_037: `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.fotky}/Mood/birne_dec2025_037.jpg`,
} as const;

// ============================================
// Service Icons (Custom ikony)
// ============================================

export const SERVICE_ICON_URLS = {
  diagnostika: `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.customIkony}/Diagnostika.svg`,
  exekucia: `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.customIkony}/Exekucia.svg`,
  strategia: `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.customIkony}/Strategia.svg`,
  vzdelavanie: `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.customIkony}/Vzdelavanie.svg`,
} as const;

// ============================================
// Mockups
// ============================================

export const MOCKUP_URLS = {
  birne: `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.mockupy}/Birne.png`,
  iowa: `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.mockupy}/IOWA.png`,
  kira: `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.mockupy}/KIRA.png`,
  sfg: `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.mockupy}/SFG.png`,
} as const;

// ============================================
// Helper Functions
// ============================================

/**
 * Get any asset URL by path
 * @param path - e.g., "Fotky/Team/Jakub.jpg"
 */
export function getAssetUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${ASSETS_BASE_URL}/${encodeURIComponent(cleanPath).replace(/%2F/g, "/")}`;
}

/**
 * Get photo URL
 * @param subfolder - "Mood" or "Team"
 * @param filename - e.g., "Jakub.jpg"
 */
export function getPhotoUrl(subfolder: "Mood" | "Team", filename: string): string {
  return `${ASSETS_BASE_URL}/${STORAGE_FOLDERS.fotky}/${subfolder}/${filename}`;
}

// ============================================
// All Assets (for iteration)
// ============================================

export const ALL_ASSETS = {
  fonts: FONT_URLS,
  logos: LOGO_URLS,
  teamPhotos: TEAM_PHOTOS,
  moodPhotos: MOOD_PHOTOS,
  serviceIcons: SERVICE_ICON_URLS,
  mockups: MOCKUP_URLS,
} as const;
