# Birne Dash Theme

Python package with Birne Design System tokens and components for Dash applications.

## Installation

```bash
pip install ./dash-theme
# or with dash dependencies
pip install "./dash-theme[dash]"
```

## Usage

### Colors

```python
from birne_theme import BIRNE_PURPLE, BIRNE_BLACK, TEXT_HEADING

# Use color values directly
style = {"backgroundColor": BIRNE_PURPLE[100], "color": TEXT_HEADING}
```

### Components

```python
from birne_theme import BirneButton, BirneCard, BirneBadge

# Get style dict for a button
button_style = BirneButton(variant="primary", size="md")

# Apply to Dash component
html.Button("Click me", style=button_style)

# Card style
card_style = BirneCard(elevated=True)
html.Div(children, style=card_style)
```

### External Stylesheets

```python
from birne_theme import get_external_stylesheets

app = dash.Dash(
    __name__,
    external_stylesheets=get_external_stylesheets()
)
```

### Bootstrap Override CSS

```python
from birne_theme.components import BOOTSTRAP_CSS_VARS, get_font_css

# Include in your app's index string
app.index_string = f'''
<!DOCTYPE html>
<html>
<head>
    <style>{get_font_css()}</style>
    <style>{BOOTSTRAP_CSS_VARS}</style>
</head>
<body>
    {{%app_entry%}}
    ...
</body>
</html>
'''
```

## Available Colors

- `BIRNE_BLACK` - 8-level scale (100, 80, 60, 40, 20, 10, 5, 2)
- `BIRNE_PURPLE` - 5-level scale (100, 80, 60, 40, 20)
- `BIRNE_DARK_PURPLE` - 3-level scale (100, 80, 60)
- `BIRNE_LEMON` - 5-level scale (100, 80, 60, 40, 20)
- `BIRNE_SAND` - 7-level scale (140, 120, 100, 80, 60, 40, 20)
- `BIRNE_GRAPEFRUIT` - 5-level scale (100, 80, 60, 40, 20)
- `TEXT_HEADING`, `TEXT_BODY`, `TEXT_CAPTION`
- `SUCCESS`, `WARNING`, `DANGER` (and their light variants)

## Typography

- `FONT_DISPLAY` - Conforto (serif) for headings
- `FONT_TEXT` - General Sans for body text
- `FONT_MONO` - JetBrains Mono for code/eyebrow
