# Piper Webinar Landing Page

## Purpose
Standalone, conversion-focused landing page for Vintory's Piper product launch webinar (April 22, 2026). The single goal is getting visitors to register via the HubSpot form. Deployed as a separate Vercel project (own subdomain).

## Tech Stack
- **Next.js 16** + React 19 + TypeScript
- **Tailwind CSS 4** (inline theme via `@theme inline` in globals.css — no tailwind.config file)
- **No CMS** — all content is static/hardcoded
- **No navbar** — conversion-focused, no navigation distractions
- **Minimal footer** — logo, copyright, privacy link only
- **HubSpot form** for registration (integrates with Zoom Webinars on HubSpot's side)

## HubSpot Form Config
- Portal ID: `5442952`
- Form ID: `361e3d97-cad6-4f0b-84da-b7f3bc756b59`
- Region: `na1`
- Redirects to `/thank-you` on submission

## Design System (from vintory.com)
This project mirrors the design aesthetics of the main Vintory website (vintory-com-rebuild repo).

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Primary | `#2DACDC` | CTAs, links, accents, icons |
| Primary Dark | `#1a9fc0` | Hover states |
| Primary Light | `#E8F7FB` | Light accent backgrounds |
| Dark | `#041E42` | Dark section backgrounds |
| Dark Mid | `#062B5E` | Dark cards, secondary dark |
| Dark Light | `#0D3870` | Tertiary dark |
| Gold | `#FCC749` | Secondary CTAs, eyebrows, stat values |
| Gold Dark | `#E5AF2A` | Gold hover states |
| Background | `#FAFAF8` | Page background (off-white) |
| Surface | `#FFFFFF` | Cards, form containers |
| Foreground | `#1A1A1A` | Body text |
| Muted | `#6B7280` | Secondary text |
| Border | `#E5E7EB` | Card/input borders |

### Typography
- **Body font**: Inter (weight 400) — CSS var `--font-inter`
- **Heading font**: Inter Tight (weights 600, 700, 800) — CSS var `--font-inter-tight`
- Headings automatically use Inter Tight via CSS rule in globals.css

### Component Patterns
- **Buttons**: `rounded-full px-8 py-4 font-bold transition-colors`
  - Primary: `bg-[#2DACDC] text-white hover:bg-[#1a9fc0]`
  - Gold: `bg-[#FCC749] text-[#041E42] hover:bg-[#E5AF2A]`
  - Outline: `border border-white/25 text-white hover:border-white/50 hover:bg-white/5`
- **Cards**: `rounded-xl` or `rounded-2xl`, `border border-[#E5E7EB]`, `bg-white`
- **Dark cards**: `bg-[#062B5E] border border-white/10 rounded-2xl`
- **Sections**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`, vertical padding `py-16 lg:py-24`
- **Eyebrows**: `text-xs font-bold uppercase tracking-widest` in cyan or gold
- **Noise texture**: `.noise` class on dark sections (position: relative required)
- **Responsive grids**: Mobile-first `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

### Utilities
- `cn()` from `lib/utils.ts` — combines clsx + tailwind-merge
- `lucide-react` for icons

## Pages
- `/` — Landing page (hero with form + below-the-fold feature sections)
- `/thank-you` — Post-registration confirmation (noindex)

## Environment Variables
```
NEXT_PUBLIC_SITE_URL=        # Base URL for metadata
NEXT_PUBLIC_GA4_MEASUREMENT_ID=  # Google Analytics 4
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=   # Facebook Pixel
```
