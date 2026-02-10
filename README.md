# Birne Design System

Unified design system for all Birne projects (resonar, sos-dash, synthfolk, birne-generators) with support for web applications and PDF documents.

## Installation

```bash
npm install @birne/design-system
```

## Usage

### CSS Variables

Import the CSS variables in your main CSS file:

```css
@import '@birne/design-system/css';
@import '@birne/design-system/fonts';
```

Or in JavaScript:

```js
import '@birne/design-system/dist/css/variables.css';
import '@birne/design-system/dist/css/fonts.css';
```

### Tailwind CSS

Add the preset to your `tailwind.config.js`:

```js
module.exports = {
  presets: [require('@birne/design-system/tailwind')],
  // your config...
}
```

### React Components

```tsx
import { Button, Card, Heading, Text } from '@birne/design-system/components';

function App() {
  return (
    <Card variant="elevated">
      <Heading level="h2">Welcome to Birne</Heading>
      <Text>Strategic marketing for brands that mean business.</Text>
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}
```

### JavaScript Tokens

```js
import tokens from '@birne/design-system';

console.log(tokens.colors.birnePurple[100]); // "#DCB1E6"
console.log(tokens.typography.fontFamily.display); // "'Conforto', serif"
```

### Inline Styles (for PDF generation)

```js
const { inlineStyles } = require('@birne/design-system/inline');

const html = `
<h1 style="${inlineStyles.typography.h1}">Title</h1>
<p style="${inlineStyles.typography.bodyLarge}">Content</p>
`;
```

## Package Exports

| Export | Description |
|--------|-------------|
| `@birne/design-system` | JavaScript tokens (colors, typography, spacing) |
| `@birne/design-system/css` | CSS custom properties |
| `@birne/design-system/fonts` | @font-face declarations |
| `@birne/design-system/tailwind` | Tailwind CSS preset |
| `@birne/design-system/inline` | Pre-computed inline styles for PDF |
| `@birne/design-system/components` | React components |

## Design Tokens

### Colors

**Brand Colors:**
- `birne-black` - 8-level scale (#221924 → #F8F7F8)
- `birne-purple` - 5-level scale (#DCB1E6 → #F8F2FA)
- `birne-lemon` - 5-level scale (#FAFD70 → #FEFEE3)
- `birne-sand` - 7-level scale (#D6D4C6 → #F9F9F6)

**Text Colors:**
- `text-heading` - #221924
- `text-body` - #514A53
- `text-caption` - #A09BA3

### Typography

| Role | Font | Usage |
|------|------|-------|
| Display | Conforto (serif) | Headings (H1-H4) |
| Text | General Sans (sans-serif) | Body text, UI |
| Mono | JetBrains Mono | Code, eyebrow text |

**Font Sources:** All fonts are hosted on Supabase CDN and automatically loaded.

### Spacing

```
xs: 4px | sm: 8px | md: 12px | lg: 16px | xl: 24px | 2xl: 32px | 3xl: 48px
```

### Border Radius

```
2xs: 4px | xs: 6px | sm: 8px | md: 10px | lg: 12px | xl: 16px | 2xl: 20px
```

## React Components

### Primitives

- `Button` - Primary, secondary, outline, ghost, link variants
- `Card` - Default, elevated, outline variants with CardHeader, CardTitle, CardContent
- `Heading` - H1-H6 with display font
- `Text` - Body text with size and weight variants
- `Eyebrow` - Uppercase mono text for labels
- `Input` - Form input with size and variant options
- `Textarea` - Multi-line text input
- `Badge` - Status badges with color variants

### Patterns

- `Header` - Navigation header with logo, nav, and actions
- `Footer` - Page footer with columns and social links
- `PriceTable` - Pricing table for proposals
- `TeamCard` - Team member card with photo and contact

## Python Package (for Dash)

```bash
pip install ./dash-theme
```

```python
from birne_theme import BIRNE_PURPLE, BirneButton, get_external_stylesheets

app = dash.Dash(__name__, external_stylesheets=get_external_stylesheets())

button_style = BirneButton(variant="primary", size="md")
```

## Development

```bash
# Install dependencies
npm install

# Build tokens
npm run build:tokens

# Start Storybook
npm run storybook

# Type check
npm run typecheck
```

## Project Structure

```
birne-design-system/
├── tokens/src/           # TypeScript token definitions
├── dist/                 # Built outputs
│   ├── css/             # CSS variables & fonts
│   ├── tailwind/        # Tailwind preset
│   ├── js/              # JS/TS exports
│   └── inline/          # Inline styles for PDF
├── components/src/       # React components
│   ├── primitives/      # Base components
│   └── patterns/        # Composed patterns
├── dash-theme/          # Python package
├── html-snippets/       # HTML templates
└── assets/              # Fonts & logos
```

## License

Proprietary - Birne Studio s.r.o.
