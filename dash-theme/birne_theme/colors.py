"""
Birne Design System - Color Tokens for Python
"""

from typing import Dict

# ===========================================
# Brand Colors - Birne Black
# ===========================================

BIRNE_BLACK = {
    100: "#221924",  # Darkest - Primary
    80: "#4A4349",   # Dark Gray
    60: "#76707A",   # Medium Gray
    40: "#A09BA3",   # Light Gray
    20: "#CCC9CD",
    10: "#E1DFE2",
    5: "#F0EFF0",
    2: "#F8F7F8",    # Lightest
}

# ===========================================
# Brand Colors - Birne Purple
# ===========================================

BIRNE_PURPLE = {
    100: "#DCB1E6",  # Primary
    80: "#E4C4EC",
    60: "#ECD7F2",
    40: "#F2E5F6",
    20: "#F8F2FA",
}

# ===========================================
# Brand Colors - Birne Dark Purple
# ===========================================

BIRNE_DARK_PURPLE = {
    100: "#B982C6",
    80: "#CAA1D4",
    60: "#DBC0E2",
}

# ===========================================
# Brand Colors - Birne Lemon
# ===========================================

BIRNE_LEMON = {
    100: "#FAFD70",  # Primary
    80: "#FBFE8D",
    60: "#FCFEA9",
    40: "#FDFEC6",
    20: "#FEFEE3",
}

# ===========================================
# Brand Colors - Birne Sand
# ===========================================

BIRNE_SAND = {
    140: "#D6D4C6",  # Darkest
    120: "#DDDBC9",
    100: "#E4E2D7",
    80: "#EBE9E0",
    60: "#EFEEE6",   # Default
    40: "#F4F3ED",
    20: "#F9F9F6",   # Lightest
}

# ===========================================
# Brand Colors - Birne Grapefruit
# ===========================================

BIRNE_GRAPEFRUIT = {
    100: "#FF5C1F",
    80: "#FF7D4C",
    60: "#FF9E79",
    40: "#FFBFA6",
    20: "#FFE0D3",
}

# ===========================================
# Text Colors
# ===========================================

TEXT_HEADING = "#221924"
TEXT_BODY = "#514A53"
TEXT_CAPTION = "#A09BA3"
TEXT_MUTED = "#C2BFC3"

# ===========================================
# UI Colors
# ===========================================

BACKGROUND = "#FFFFFF"
SURFACE = "#FFFFFF"
BORDER = "#D1D1D6"
HOVER = "#F5F5F7"

# ===========================================
# Semantic Colors
# ===========================================

SUCCESS = "#29A88E"
SUCCESS_LIGHT = "#E5F5F1"
WARNING = "#E5A435"
WARNING_LIGHT = "#FCF4E5"
DANGER = "#DC3545"
DANGER_LIGHT = "#FDE8EA"

# ===========================================
# Typography
# ===========================================

FONT_DISPLAY = "'Conforto', serif"
FONT_TEXT = "'General Sans', -apple-system, BlinkMacSystemFont, sans-serif"
FONT_MONO = "'JetBrains Mono', monospace"

# ===========================================
# Font URLs (Supabase CDN)
# ===========================================

SUPABASE_FONT_BASE = "https://qemayuejayunopgxdlrz.supabase.co/storage/v1/object/public/Birne%20Assets/Fonts"

FONT_URLS = {
    "conforto_regular": f"{SUPABASE_FONT_BASE}/Conforto-Regular.otf",
    "conforto_medium": f"{SUPABASE_FONT_BASE}/Conforto-Medium.otf",
    "general_sans_light": f"{SUPABASE_FONT_BASE}/GeneralSans-Light.otf",
    "general_sans_regular": f"{SUPABASE_FONT_BASE}/GeneralSans-Regular.otf",
    "general_sans_medium": f"{SUPABASE_FONT_BASE}/GeneralSans-Medium.otf",
    "jetbrains_mono": f"{SUPABASE_FONT_BASE}/JetBrainsMono-VariableFont_wght.ttf",
}

# ===========================================
# Combined Color Dict
# ===========================================

colors: Dict[str, Dict[int, str]] = {
    "birne_black": BIRNE_BLACK,
    "birne_purple": BIRNE_PURPLE,
    "birne_dark_purple": BIRNE_DARK_PURPLE,
    "birne_lemon": BIRNE_LEMON,
    "birne_sand": BIRNE_SAND,
    "birne_grapefruit": BIRNE_GRAPEFRUIT,
}

typography = {
    "font_display": FONT_DISPLAY,
    "font_text": FONT_TEXT,
    "font_mono": FONT_MONO,
    "font_urls": FONT_URLS,
}
