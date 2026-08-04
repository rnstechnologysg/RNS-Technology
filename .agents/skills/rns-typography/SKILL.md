---
name: rns-typography
description: >
  Global typography design system for the RNS Landing project using SF Pro Display (body/UI)
  and SF Pro Rounded (display headings/hero). Use this skill whenever creating new components,
  sections, or pages in the rns-landing project to ensure consistent, modern minimal typography.
---

# RNS Landing — Typography Design System

## Available Fonts

All fonts live in `public/fonts/`. They are loaded in `src/app/layout.tsx` and exposed as CSS variables.

| Font Family       | File(s)                                      | CSS Variable       | Tailwind Class    |
|-------------------|----------------------------------------------|--------------------|-------------------|
| SF Pro Display    | SFPRODISPLAYREGULAR / MEDIUM / BOLD .otf     | `--font-sans`      | `font-sans`       |
| SF Pro Rounded    | SF-Pro-Rounded-Regular / Medium / Semibold   | `--font-rounded`   | `font-rounded`    |
| Geist Mono        | Google (loaded via next/font)                | `--font-geist-mono`| `font-mono`       |

---

## Design Philosophy

> **Modern Minimal** — high contrast, generous whitespace, restrained type scale.  
> Two typefaces only. Never mix more than two at the same level.

- **SF Pro Rounded** → large-scale display, emotional impact, hero headlines, section titles (`h1`, `h2`)
- **SF Pro Display** → all functional text: body, UI labels, navigation, buttons, captions (`h3`-`h6`, `p`, `button`, `nav a`)
- **Geist Mono** → code snippets, technical values, data display only

---

## Type Scale & Usage Rules

### `h1` — Hero / Page Title
```
Font:    SF Pro Rounded Semibold (600)
Size:    clamp(2.5rem, 5vw, 4rem)  ->  40px - 64px
Leading: 1.1
Tracking: -0.03em
```
**Use for:** Hero section headline, primary marketing message.  
**Tailwind:** `font-rounded font-semibold text-5xl lg:text-7xl tracking-tighter leading-none`

---

### `h2` — Section Title
```
Font:    SF Pro Rounded Semibold (600)
Size:    clamp(1.75rem, 3.5vw, 2.75rem)  ->  28px - 44px
Leading: 1.15
Tracking: -0.025em
```
**Use for:** Section headers ("Our Services", "About Us").  
**Tailwind:** `font-rounded font-semibold text-3xl lg:text-[44px] tracking-tight`

---

### `h3` — Component / Card Title
```
Font:    SF Pro Display Bold (700)
Size:    clamp(1.25rem, 2.5vw, 1.75rem)  ->  20px - 28px
Leading: 1.25
Tracking: -0.02em
```
**Use for:** Card headlines, feature names, sidebar section titles.  
**Tailwind:** `font-sans font-bold text-xl lg:text-[28px] tracking-tight`

---

### `h4` — Sub-heading
```
Font:    SF Pro Display Bold (700)
Size:    1.125rem  (18px)
Leading: 1.3
Tracking: -0.015em
```
**Use for:** Accordion titles, modal headings, table column labels.  
**Tailwind:** `font-sans font-bold text-lg`

---

### `h5` — Label Header
```
Font:    SF Pro Display Medium (500)
Size:    1rem  (16px)
Leading: 1.4
Tracking: -0.01em
```
**Use for:** Form section labels, grouped metadata headers.  
**Tailwind:** `font-sans font-medium text-base`

---

### `h6` — Overline / Eyebrow
```
Font:    SF Pro Display Medium (500)
Size:    0.875rem  (14px)
Case:    UPPERCASE
Tracking: 0.08em
Color:   muted-foreground
```
**Use for:** Section eyebrows above h1/h2, tag labels, status indicators.  
**Global CSS class:** `.text-overline`  
**Tailwind:** `font-sans font-medium text-xs uppercase tracking-widest text-muted-foreground`

---

### `p` — Body
```
Font:    SF Pro Display Regular (400)
Size:    1rem  (16px)
Leading: 1.65
Tracking: -0.005em
```
**Use for:** Article body, descriptions, form helper text.  
**Tailwind:** `font-sans text-base leading-relaxed`

---

### `.text-body-lg` — Large Body
```
Font:    SF Pro Display Regular (400)
Size:    1.125rem  (18px)
Leading: 1.6
Tracking: -0.01em
```
**Use for:** Hero subtitles, section lead-in paragraphs.  
**Tailwind:** `font-sans text-lg leading-relaxed`

---

### `.text-body-sm` — Small Body
```
Font:    SF Pro Display Regular (400)
Size:    0.875rem  (14px)
Leading: 1.55
```
**Use for:** Helper text, footnotes, secondary card descriptions.  
**Tailwind:** `font-sans text-sm`

---

### `nav a` / `.nav-link` — Navigation
```
Font:    SF Pro Display Bold (700)
Size:    0.875rem  (14px)
Tracking: -0.01em
```
**Use for:** Top navigation links, footer links.  
**Tailwind:** `font-sans font-bold text-sm`

---

### `button` / `.btn` — Buttons & CTAs
```
Font:    SF Pro Display Bold (700)
Tracking: -0.01em
```
**Use for:** All interactive buttons.  
**Tailwind:** `font-sans font-bold`

---

### `.text-caption` — Caption / Micro Copy
```
Font:    SF Pro Display Regular (400)
Size:    0.75rem  (12px)
Leading: 1.5
Color:   muted-foreground
```
**Use for:** Image captions, timestamps, metadata.  
**Tailwind:** `font-sans text-xs text-muted-foreground`

---

## Quick Reference — Tailwind Cheatsheet

```jsx
// Hero headline
<h1 className="font-rounded font-semibold tracking-tighter leading-none">...</h1>

// Section title
<h2 className="font-rounded font-semibold tracking-tight">...</h2>

// Card title
<h3 className="font-sans font-bold tracking-tight">...</h3>

// Eyebrow above section
<span className="text-overline">Our Services</span>

// Hero subtitle / lead text
<p className="text-body-lg text-muted-foreground">...</p>

// Navigation link
<Link className="font-sans font-bold text-sm">Home</Link>

// Button
<button className="font-sans font-bold">Get Started</button>

// Caption
<span className="text-caption">Last updated Jan 2025</span>
```

---

## Anti-Patterns — NEVER DO

- Do NOT use SF Pro Rounded for body text or UI labels
- Do NOT use SF Pro Display for hero headlines (use Rounded)
- Do NOT mix tracking values randomly — always refer to this table
- Do NOT use `font-extrabold` (900) — the heaviest weight available is Bold (700)
- Do NOT override font-family inline in components — rely on semantic HTML or the utility classes defined here
- Do NOT use italic variants for UI — italics are decorative only

---

## File Locations

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Registers font faces via `next/font/local`, injects CSS variables |
| `src/app/globals.css` | Defines all base element styles and utility classes |
| `public/fonts/` | Raw `.otf` font files |
| `.agents/skills/rns-typography/SKILL.md` | This file |
