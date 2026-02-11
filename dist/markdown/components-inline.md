# Birne Komponenty — Inline CSS

> Auto-generated z birne-design-system. NEEDITUJ MANUALNE.
> Zdroj: `birne-design-system/scripts/build-tokens.js`
>
> Tieto snippety su prevedene z Tailwind tried na inline CSS.
> Pouzivaj ich priamo v HTML generatoroch (ponuky, pitch decky).

## Badge

Zaklad (spolocny pre vsetky varianty a velkosti):
```
display: inline-flex; align-items: center; gap: 6px; font-family: 'General Sans', sans-serif; font-weight: 500; border-radius: 9999px;
```

### Varianty

| Variant | Kedy pouzit | Inline CSS |
|---------|-------------|------------|
| default | Na bielom pozadi | `background: #F0EFF0; color: #221924;` |
| purple | Fialovy akcent | `background: #F2E5F6; color: #221924;` |
| lemon | Zlty akcent | `background: #FAFD70; color: #221924;` |
| dark | Tmavy | `background: #221924; color: #FFFFFF;` |
| onDark | Na tmavom pozadi | `background: rgba(255,255,255,0.15); color: #FFFFFF;` |
| onGray | Na sivom pozadi | `background: #FFFFFF; color: #221924;` |
| glass | Na fotkach/gradientoch | `background: rgba(255,255,255,0.80); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.20); color: #221924;` |
| glassDark | Na fotkach (tmavy) | `background: rgba(0,0,0,0.20); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.10); color: #FFFFFF;` |
| success | Stav uspech | `background: #dcfce7; color: #166534;` |
| warning | Stav varovanie | `background: #fef3c7; color: #92400e;` |
| destructive | Stav chyba | `background: #fee2e2; color: #991b1b;` |

### Velkosti

| Size | Font size | Padding | Inline CSS |
|------|-----------|---------|------------|
| sm | 10px | 2px 8px | `font-size: 10px; padding: 2px 8px;` |
| md | 11px | 4px 12px | `font-size: 11px; padding: 4px 12px;` |
| lg | 13px | 6px 16px | `font-size: 13px; padding: 6px 16px;` |

### Priklad: Glass badge, lg

```html
<span style="display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.80); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.20); border-radius: 9999px; padding: 6px 16px; font-family: 'General Sans', sans-serif; font-size: 13px; font-weight: 500; color: #221924;">Text</span>
```

---

## Button

Zaklad (spolocny):
```
display: inline-flex; align-items: center; justify-content: center; gap: 8px; font-family: 'Conforto', serif; font-weight: 400; border-radius: 9999px; text-decoration: none;
```

### Varianty

| Variant | Inline CSS |
|---------|------------|
| primary | `background: #FAFD70; color: #221924; border: 1px solid #221924;` |
| secondary | `background: #221924; color: #DCB1E6; border: 1px solid #221924;` |
| soft | `background: #F8F7F8; color: #221924; border: 1px solid #221924;` |
| ghost | `background: transparent; color: #221924; border: none;` |

### Velkosti

| Size | Height | Padding | Font size | Inline CSS |
|------|--------|---------|-----------|------------|
| sm | 32px | 0 16px | 13px | `height: 32px; padding: 0 16px; font-size: 13px;` |
| md | 40px | 0 24px | 15px | `height: 40px; padding: 0 24px; font-size: 15px;` |
| lg | 48px | 0 32px | 17px | `height: 48px; padding: 0 32px; font-size: 17px;` |

### Priklad: Primary button, lg

```html
<a href="#" style="display: inline-flex; align-items: center; justify-content: center; height: 48px; background: #FAFD70; color: #221924; border: 1px solid #221924; border-radius: 9999px; padding: 0 32px; font-family: 'Conforto', serif; font-size: 17px; font-weight: 400; text-decoration: none;">Text</a>
```

---

## IconCircle

Zaklad (spolocny):
```
display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; flex-shrink: 0;
```

### Varianty

| Variant | Kedy pouzit | Inline CSS |
|---------|-------------|------------|
| default | Na bielom pozadi | `background: #F0EFF0; color: #221924;` |
| muted | Vyraznejsi na bielom | `background: #E1DFE2; color: #221924;` |
| dark | Tmavy kruzok | `background: #221924; color: #FFFFFF;` |
| lemon | Zlty kruzok | `background: #FAFD70; color: #221924;` |
| purple | Fialovy kruzok | `background: #E4C4EC; color: #221924;` |
| success | Zeleny stav | `background: #dcfce7; color: #16a34a;` |
| ghost | Na tmavom pozadi | `background: rgba(255,255,255,0.10); color: #FFFFFF;` |

### Velkosti

| Size | Rozmer | Inline CSS |
|------|--------|------------|
| sm | 32px | `width: 32px; height: 32px; min-width: 32px;` |
| md | 40px | `width: 40px; height: 40px; min-width: 40px;` |
| lg | 48px | `width: 48px; height: 48px; min-width: 48px;` |
| xl | 64px | `width: 64px; height: 64px; min-width: 64px;` |

### Priklad: Default IconCircle, md

```html
<div style="width: 40px; height: 40px; min-width: 40px; border-radius: 50%; background: #F0EFF0; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
  <!-- SVG ikona sem -->
</div>
```

---

## Eyebrow Text

```html
<p style="font-family: 'JetBrains Mono', monospace; font-size: 14px; line-height: 20px; font-weight: 400; letter-spacing: 0.05em; text-transform: uppercase; color: #A09BA3;">TEXT</p>
```

Na tmavom pozadi: `color: rgba(255,255,255,0.4);`

---

## Text Styles

| Styl | Inline CSS |
|------|------------|
| Heading (h1) | `font-family: 'Conforto', serif; font-size: 48px; line-height: 56px; font-weight: 400; color: #221924;` |
| Heading (h2) | `font-family: 'Conforto', serif; font-size: 34px; line-height: 40px; font-weight: 400; color: #221924;` |
| Heading (h3) | `font-family: 'Conforto', serif; font-size: 28px; line-height: 34px; font-weight: 400; color: #221924;` |
| Heading (h4) | `font-family: 'Conforto', serif; font-size: 21px; line-height: 28px; font-weight: 500; color: #221924;` |
| Body (md) | `font-family: 'General Sans', sans-serif; font-size: 17px; line-height: 25px; color: #514A53;` |
| Body (base) | `font-family: 'General Sans', sans-serif; font-size: 15px; line-height: 22px; color: #514A53;` |
| Body (sm) | `font-family: 'General Sans', sans-serif; font-size: 13px; line-height: 18px; color: #514A53;` |
| Label | `font-family: 'General Sans', sans-serif; font-size: 13px; line-height: 18px; font-weight: 500;` |
| Caption | `font-family: 'General Sans', sans-serif; font-size: 11px; line-height: 16px; color: #A09BA3;` |
