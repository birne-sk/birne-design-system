"""
Birne Design System - Dash Component Wrappers
"""

from typing import Optional, List, Union
from .colors import (
    BIRNE_BLACK, BIRNE_PURPLE, BIRNE_DARK_PURPLE, BIRNE_SAND,
    TEXT_HEADING, TEXT_BODY, FONT_URLS
)


def get_external_stylesheets() -> List[str]:
    """
    Get list of external stylesheets for Dash app.
    Include Bootstrap 5 and Birne custom styles.

    Usage:
        app = dash.Dash(
            __name__,
            external_stylesheets=get_external_stylesheets()
        )
    """
    return [
        "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
    ]


def get_font_css() -> str:
    """
    Get CSS string for Birne fonts.
    Inject this into your app's index_string or as a style tag.
    """
    return f"""
    @font-face {{
        font-family: 'Conforto';
        src: url('{FONT_URLS["conforto_regular"]}') format('opentype');
        font-weight: 400;
        font-display: swap;
    }}
    @font-face {{
        font-family: 'Conforto';
        src: url('{FONT_URLS["conforto_medium"]}') format('opentype');
        font-weight: 500;
        font-display: swap;
    }}
    @font-face {{
        font-family: 'General Sans';
        src: url('{FONT_URLS["general_sans_regular"]}') format('opentype');
        font-weight: 400;
        font-display: swap;
    }}
    @font-face {{
        font-family: 'General Sans';
        src: url('{FONT_URLS["general_sans_medium"]}') format('opentype');
        font-weight: 500;
        font-display: swap;
    }}
    @font-face {{
        font-family: 'JetBrains Mono';
        src: url('{FONT_URLS["jetbrains_mono"]}') format('truetype');
        font-weight: 100 800;
        font-display: swap;
    }}
    """


def BirneButton(
    children: Union[str, List],
    variant: str = "primary",
    size: str = "md",
    className: str = "",
    **kwargs
) -> dict:
    """
    Get style dict for a Birne-styled button.

    Args:
        children: Button text/content
        variant: "primary", "secondary", "outline", "ghost"
        size: "sm", "md", "lg"
        className: Additional CSS classes
        **kwargs: Additional style properties

    Returns:
        Style dict to apply to a dbc.Button or html.Button
    """
    base_style = {
        "fontFamily": "'General Sans', sans-serif",
        "fontWeight": 500,
        "borderRadius": "8px",
        "border": "none",
        "cursor": "pointer",
        "transition": "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
    }

    # Size variants
    sizes = {
        "sm": {"padding": "6px 12px", "fontSize": "13px"},
        "md": {"padding": "8px 16px", "fontSize": "15px"},
        "lg": {"padding": "12px 24px", "fontSize": "17px"},
    }

    # Color variants
    variants = {
        "primary": {
            "backgroundColor": BIRNE_PURPLE[100],
            "color": BIRNE_BLACK[100],
        },
        "secondary": {
            "backgroundColor": BIRNE_BLACK[100],
            "color": "#FFFFFF",
        },
        "outline": {
            "backgroundColor": "transparent",
            "color": BIRNE_BLACK[100],
            "border": f"1px solid {BIRNE_BLACK[40]}",
        },
        "ghost": {
            "backgroundColor": "transparent",
            "color": BIRNE_BLACK[100],
        },
    }

    style = {
        **base_style,
        **sizes.get(size, sizes["md"]),
        **variants.get(variant, variants["primary"]),
        **kwargs,
    }

    return style


def BirneCard(
    elevated: bool = False,
    padding: str = "24px",
    **kwargs
) -> dict:
    """
    Get style dict for a Birne-styled card.

    Args:
        elevated: Whether to use elevated shadow
        padding: Card padding
        **kwargs: Additional style properties

    Returns:
        Style dict to apply to a dbc.Card or html.Div
    """
    shadow = (
        "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)"
        if elevated
        else "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
    )

    style = {
        "backgroundColor": "#FFFFFF",
        "borderRadius": "12px" if elevated else "10px",
        "padding": padding,
        "boxShadow": shadow,
        "border": "none",
        **kwargs,
    }

    return style


def BirneBadge(
    variant: str = "default",
    **kwargs
) -> dict:
    """
    Get style dict for a Birne-styled badge.

    Args:
        variant: "default", "purple", "lemon", "dark"
        **kwargs: Additional style properties

    Returns:
        Style dict to apply to a dbc.Badge or html.Span
    """
    base_style = {
        "fontFamily": "'JetBrains Mono', monospace",
        "fontSize": "11px",
        "padding": "4px 8px",
        "borderRadius": "4px",
        "textTransform": "uppercase",
        "letterSpacing": "0.05em",
        "fontWeight": 400,
    }

    variants = {
        "default": {
            "backgroundColor": BIRNE_SAND[60],
            "color": TEXT_BODY,
        },
        "purple": {
            "backgroundColor": BIRNE_PURPLE[100],
            "color": BIRNE_BLACK[100],
        },
        "lemon": {
            "backgroundColor": "#FAFD70",
            "color": BIRNE_BLACK[100],
        },
        "dark": {
            "backgroundColor": BIRNE_BLACK[100],
            "color": "#FFFFFF",
        },
    }

    style = {
        **base_style,
        **variants.get(variant, variants["default"]),
        **kwargs,
    }

    return style


# Bootstrap CSS Override Variables
BOOTSTRAP_CSS_VARS = f"""
:root {{
    /* Primary colors */
    --bs-primary: {BIRNE_PURPLE[100]};
    --bs-primary-rgb: 220, 177, 230;

    /* Secondary colors */
    --bs-secondary: {BIRNE_BLACK[100]};
    --bs-secondary-rgb: 34, 25, 36;

    /* Body */
    --bs-body-font-family: 'General Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    --bs-body-color: {TEXT_BODY};
    --bs-body-bg: #FFFFFF;

    /* Links */
    --bs-link-color: {BIRNE_DARK_PURPLE[100]};
    --bs-link-hover-color: {BIRNE_PURPLE[100]};

    /* Border radius */
    --bs-border-radius: 8px;
    --bs-border-radius-sm: 6px;
    --bs-border-radius-lg: 12px;
}}

h1, h2, h3, h4, h5, h6 {{
    font-family: 'Conforto', serif;
    color: {TEXT_HEADING};
}}

.btn-primary {{
    background-color: {BIRNE_PURPLE[100]};
    border-color: {BIRNE_PURPLE[100]};
    color: {BIRNE_BLACK[100]};
}}

.btn-primary:hover {{
    background-color: {BIRNE_DARK_PURPLE[100]};
    border-color: {BIRNE_DARK_PURPLE[100]};
}}

.btn-secondary {{
    background-color: {BIRNE_BLACK[100]};
    border-color: {BIRNE_BLACK[100]};
}}

.card {{
    border: none;
    border-radius: 12px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}}
"""
