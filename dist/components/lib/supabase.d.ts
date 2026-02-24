/**
 * Birne Design System - Supabase Assets
 *
 * URLs for assets hosted on Supabase Storage
 * Bucket: Birne Assets
 */
export declare const ASSETS_BASE_URL = "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets";
export declare const supabase: import("@supabase/supabase-js").SupabaseClient<any, "public", "public", any, any>;
export declare const STORAGE_FOLDERS: {
    readonly fonty: "Fonty";
    readonly fotky: "Fotky";
    readonly logo: "Logo";
    readonly customIkony: "Custom%20ikony";
    readonly mockupy: "Mockupy";
};
export declare const FONT_URLS: {
    readonly conforto: {
        readonly regular: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fonty/Conforto-Regular.otf";
        readonly medium: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fonty/Conforto-Medium.otf";
    };
    readonly generalSans: {
        readonly regular: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fonty/GeneralSans-Regular.otf";
        readonly medium: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fonty/GeneralSans-Medium.otf";
    };
    readonly jetBrainsMono: {
        readonly variable: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fonty/JetBrainsMono-VariableFont_wght.ttf";
    };
};
export declare const LOGO_URLS: {
    readonly symbol: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Logo/birne_symbol.svg";
};
export declare const TEAM_PHOTOS: {
    readonly jakub: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fotky/Team/Jakub.jpg";
    readonly marek: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fotky/Team/Marek.jpg";
};
export declare const MOOD_PHOTOS: {
    readonly dec2025_002: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fotky/Mood/birne_dec2025_002.jpg";
    readonly dec2025_003: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fotky/Mood/birne_dec2025_003.jpg";
    readonly dec2025_006: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fotky/Mood/birne_dec2025_006.jpg";
    readonly dec2025_014: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fotky/Mood/birne_dec2025_014.jpg";
    readonly dec2025_027: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fotky/Mood/birne_dec2025_027.jpg";
    readonly dec2025_030: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fotky/Mood/birne_dec2025_030.jpg";
    readonly dec2025_033: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fotky/Mood/birne_dec2025_033.jpg";
    readonly dec2025_037: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fotky/Mood/birne_dec2025_037.jpg";
};
export declare const SERVICE_ICON_URLS: {
    readonly diagnostika: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Custom%20ikony/Diagnostika.svg";
    readonly exekucia: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Custom%20ikony/Exekucia.svg";
    readonly strategia: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Custom%20ikony/Strategia.svg";
    readonly vzdelavanie: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Custom%20ikony/Vzdelavanie.svg";
};
export declare const MOCKUP_URLS: {
    readonly birne: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Mockupy/Birne.png";
    readonly iowa: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Mockupy/IOWA.png";
    readonly kira: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Mockupy/KIRA.png";
    readonly sfg: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Mockupy/SFG.png";
};
/**
 * Get any asset URL by path
 * @param path - e.g., "Fotky/Team/Jakub.jpg"
 */
export declare function getAssetUrl(path: string): string;
/**
 * Get photo URL
 * @param subfolder - "Mood" or "Team"
 * @param filename - e.g., "Jakub.jpg"
 */
export declare function getPhotoUrl(subfolder: "Mood" | "Team", filename: string): string;
export declare const ALL_ASSETS: {
    readonly fonts: {
        readonly conforto: {
            readonly regular: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fonty/Conforto-Regular.otf";
            readonly medium: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fonty/Conforto-Medium.otf";
        };
        readonly generalSans: {
            readonly regular: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fonty/GeneralSans-Regular.otf";
            readonly medium: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fonty/GeneralSans-Medium.otf";
        };
        readonly jetBrainsMono: {
            readonly variable: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fonty/JetBrainsMono-VariableFont_wght.ttf";
        };
    };
    readonly logos: {
        readonly symbol: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Logo/birne_symbol.svg";
    };
    readonly teamPhotos: {
        readonly jakub: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fotky/Team/Jakub.jpg";
        readonly marek: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fotky/Team/Marek.jpg";
    };
    readonly moodPhotos: {
        readonly dec2025_002: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fotky/Mood/birne_dec2025_002.jpg";
        readonly dec2025_003: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fotky/Mood/birne_dec2025_003.jpg";
        readonly dec2025_006: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fotky/Mood/birne_dec2025_006.jpg";
        readonly dec2025_014: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fotky/Mood/birne_dec2025_014.jpg";
        readonly dec2025_027: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fotky/Mood/birne_dec2025_027.jpg";
        readonly dec2025_030: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fotky/Mood/birne_dec2025_030.jpg";
        readonly dec2025_033: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fotky/Mood/birne_dec2025_033.jpg";
        readonly dec2025_037: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fotky/Mood/birne_dec2025_037.jpg";
    };
    readonly serviceIcons: {
        readonly diagnostika: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Custom%20ikony/Diagnostika.svg";
        readonly exekucia: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Custom%20ikony/Exekucia.svg";
        readonly strategia: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Custom%20ikony/Strategia.svg";
        readonly vzdelavanie: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Custom%20ikony/Vzdelavanie.svg";
    };
    readonly mockups: {
        readonly birne: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Mockupy/Birne.png";
        readonly iowa: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Mockupy/IOWA.png";
        readonly kira: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Mockupy/KIRA.png";
        readonly sfg: "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Mockupy/SFG.png";
    };
};
//# sourceMappingURL=supabase.d.ts.map