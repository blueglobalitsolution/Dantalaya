# Design System for Dantalaya Dental Clinic

> Based on Dantalaya Official Brand Logo Color Palette

## 1. Visual Theme & Atmosphere

Warm, premium clinical aesthetic with soft organic tones and generous whitespace.

**Key Characteristics:**
- Geist as the heading font
- Inter as the body font
- Espresso Brown (`#5e4036`) as the primary brand tone
- Warm Gold (`#d7b56d`) and Amber (`#c79730`) for accents and highlights
- Soft Peach (`#f2ad94`) for delicate badges and heart emblems
- Crisp white & warm linen surfaces

## 2. Color Palette & Roles

### Brand Colors (Extracted from Logo)

- **Primary Brand / Espresso** (`#5e4036`) · `--color-primary`: Main buttons, header text, primary navigation highlights.
- **Warm Honey Gold** (`#d7b56d`) · `--color-secondary`: Banner badges, secondary buttons, active underlines.
- **Golden Amber** (`#c79730`) · `--color-accent`: Icons, rating stars, tooth emblems.
- **Soft Peach** (`#f2ad94`) · `--color-accent-soft`: Heart icons, delicate highlights.
- **Canvas White** (`#ffffff`) · `--color-bg`: Main page background.
- **Warm Ivory / Linen** (`#faf8f5`) · `--color-bg-secondary`: Cards, alternating section surfaces.

## 3. Typography Rules

- **Heading Font:** `Geist` (web font)
- **Body Font:** `sans-serif`, sans-serif

### Type Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing |
| --- | --- | --- | --- | --- | --- |
| H1 | Geist | 88px | 400 | 91.52px | -4px |
| H2 | Geist | 48px | 500 | 55.2px | -2.5px |
| H3 | Geist | 36px | 600 | 50.4px | -1px |
| H4 | Geist | 28px | 500 | 39.2px | -1px |
| Body | Inter | 14px | 400 | 23.8px | normal |

### Type Scale

| Token | Size | Suggested Usage |
| --- | --- | --- |
| Display | `88px` | headings |
| H1 | `48px` | headings |
| H2 | `36px` | headings |
| H3 | `28px` | headings |
| H4 | `24px` | headings |
| Body L | `16px` | body / supporting text |
| Body | `14px` | body / supporting text |
| Small | `12px` | body / supporting text |

## 4. Component Stylings

No prominent button or card components detected. Use the color palette and typography rules above to create components consistent with the brand.

## 5. Layout Principles

- **Base spacing unit:** `12px` — use multiples (24px, 36px, 48px, etc.)

### Spacing Scale (extracted from real elements)

| Token | Value | Role |
| --- | --- | --- |
| spacing-1 | `12px` | element |
| spacing-2 | `10px` | element |
| spacing-3 | `120px` | section |
| spacing-4 | `5px` | element |
| spacing-5 | `2px` | element |
| spacing-6 | `40px` | card |
| spacing-7 | `8px` | element |
| spacing-8 | `14px` | element |

### Border Radius Scale

| Token | Value | Element |
| --- | --- | --- |
| radius-button | `12px` | button |
| radius-button | `10px` | button |
| radius-button | `6px` | button |
| radius-card | `58px` | card |
| radius-pill | `100px` | pill |
| radius-subtle | `4.67px` | subtle |

## 6. Depth & Elevation

| Level | Shadow | Usage |
| --- | --- | --- |
| Mid | `rgba(0, 0, 0, 0.04) 0px 4px 12px 0px` | Dropdowns, popovers |
| Low | `rgb(0, 0, 0) 0px 0px 0px 1px inset` | Cards, subtle elevation |
| Deep | `rgba(0, 0, 0, 0.17) 0px 0.602187px 1.56569px -1.5px, rgba(0, 0, 0, 0.14) 0px 2.2...` | Hero sections, deep layers |

## 7. Do's and Don'ts

### Do

- Use `#ffffff` as the primary background color
- Use `Geist` for all headings and `sans-serif` for body text
- Use `#4040ff` as the single dominant accent/CTA color
- Maintain `12px` as the base spacing unit — all gaps should be multiples
- Use rounded corners (`12px`+) consistently for all interactive elements
- Make headlines large and bold — typography is the hero element
- Apply the shadow system for elevation — use the extracted shadow values
- Use weight 400 for headings to match the brand's typographic voice

### Don't

- Don't use colors outside the extracted palette without justification
- Don't substitute Geist/sans-serif with generic alternatives
- Don't use irregular spacing — stick to 12px grid
- Don't use dark/black backgrounds — this is a light-themed design
- Don't use sharp corners — they feel hostile in this rounded design language
- Don't use pure black (#000000) for text — use `#000000` instead
- Don't add decorative elements not present in the original design — no badges, ribbons, banners, or ornaments unless the source site uses them
- Don't invent UI patterns the source site doesn't have — if the original has no NEW badge, don't add one just because a red is in the palette

## 8. Responsive Behavior

| Breakpoint | Width | Notes |
| --- | --- | --- |
| Mobile | < 640px | Single column, stack sections, reduce font sizes ~80% |
| Tablet | 640–1024px | 2-column where appropriate, maintain spacing ratios |
| Desktop | 1024–1440px | Full layout as designed |
| Wide | > 1440px | Max-width container, center content |

- Touch targets: minimum 44×44px on mobile
- Maintain 12px base unit across breakpoints — only scale multipliers

## 9. Agent Prompt Guide

### Quick Color Reference

```
Background:  #ffffff
Text:        #000000
Accent:      #4040ff
Secondary:   #d97f50
Border:      #f8f8f8
```

### Example Prompts

1. "Build a hero section with a `#ffffff` background, `Geist` heading in `#000000`, and a `#4040ff` CTA button."
2. "Create a pricing card using background `#f8f8f8`, border `#f8f8f8`, `sans-serif` for text, and 36px padding."
3. "Design a navigation bar — `#ffffff` background, `#000000` links, `#4040ff` for active state."
4. "Build a feature grid with 3 columns, 36px gap, each card using the card component style."
5. "Create a footer with `#000000` background, `#ffffff` text, and 24px padding."

### Iteration Guide

1. Start with layout structure (sections, grid, spacing)
2. Apply colors from the palette — background first, then text, then accents
3. Set typography — font families, sizes from the type scale, weights
4. Add components — buttons, cards, inputs using the specs above
5. Apply border-radius consistently across all elements
6. Add shadows for depth — use the extracted shadow values, not defaults
7. Check responsive behavior — test mobile and tablet layouts
8. Final pass — verify all colors match, spacing is consistent, fonts are correct
