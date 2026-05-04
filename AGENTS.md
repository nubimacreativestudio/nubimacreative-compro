# AGENTS.md — Nubima Creative Company Profile
> **Persistent operational memory for AI agents.** Last scanned: 2026-05-04. Read this before touching any file.

---

## 1. Project Overview

**Nubima Creative** is an Indonesian creative studio targeting **UMKM** (Usaha Mikro Kecil Menengah — small-medium businesses). This repository is its **company profile website** — a fully static, single-page marketing site with no backend, no database, and no authentication.

| Field | Value |
|---|---|
| Brand tagline | "Build Trust, Grow Fast" |
| Target market | Indonesian UMKM, local/growing businesses |
| Business focus | Branding, graphic design, website development |
| Primary CTA channel | **WhatsApp** (`+62 851-3687-7650`) — all conversion funnels terminate here |
| Contact email | `nubimacreativestudio@gmail.com` |
| Instagram | `@nubimacreativestudio` |
| TikTok / Facebook | `@nubimacreativestudio` / "Nubima Creative" |
| Language | Mixed: **Indonesian** (body copy) + **English** (UI labels, section headings) |
| Established | Est. 2021 (shown in About section badge) |
| Project count (claimed) | 150+ projects |
| Years experience (claimed) | 3+ years |

---

## 2. Tech Stack

| Layer | Technology | Version / Notes |
|---|---|---|
| Framework | **Next.js** | `16.2.4` — App Router |
| Runtime | **React** | `19.2.4` |
| Language | **TypeScript** | `^5`, strict mode enabled |
| Styling | **CSS Modules** + Global CSS | Vanilla CSS only, no Tailwind |
| Animation | **Framer Motion** | `^12.38.0` |
| Icons | **Lucide React** | `^1.14.0` |
| Analytics | `@vercel/analytics` | `^2.0.1` — passive, no config needed |
| Performance | `@vercel/speed-insights` | `^2.0.0` — passive, no config needed |
| Linting | ESLint | `^9`, config in `eslint.config.mjs` |
| Deployment | **Vercel** (inferred from analytics packages) |

> ⚠️ **This is Next.js 16 — NOT the Next.js you know from training data.** APIs, conventions, and file structure may differ. Always read `node_modules/next/dist/docs/` before writing new Next.js-specific code.

---

## 3. Folder Structure Breakdown

```
nubimacreative-compro/
├── app/                          # Next.js App Router root
│   ├── layout.tsx                # Root layout — fonts, metadata, Analytics, SpeedInsights
│   ├── page.tsx                  # Only page — assembles all sections in order
│   ├── globals.css               # Design system: tokens, reset, utility classes
│   ├── page.module.css           # Unused module (legacy remnant from Next.js scaffold)
│   └── icon.svg                  # Browser tab favicon (same SVG as logo)
│
├── components/
│   ├── layout/                   # Persistent shell components
│   │   ├── Navbar.tsx            # Sticky top nav with scroll detection + mobile menu
│   │   ├── Navbar.module.css
│   │   ├── Footer.tsx            # 4-column footer with CTA band + scroll-to-top
│   │   ├── Footer.module.css
│   │   ├── WhatsAppCTA.tsx       # Fixed floating WhatsApp button (bottom-right)
│   │   └── WhatsAppCTA.module.css
│   │
│   └── sections/                 # Page section components (rendered in page.tsx)
│       ├── Hero.tsx              # Full-screen hero with parallax + word-by-word animation
│       ├── About.tsx             # Studio description + 4 value cards (2-column layout)
│       ├── WhyUs.tsx             # 8-card grid of competitive differentiators
│       ├── Services.tsx          # 10-service grid with 3D flip hover effect
│       ├── Portfolio.tsx         # Filterable project gallery (6 projects, 4 categories)
│       ├── Benefits.tsx          # Split layout: headline left + 8 benefit items right
│       ├── Process.tsx           # 5-step horizontal workflow with connectors
│       ├── Testimonials.tsx      # Auto-rotating carousel (5 testimonials, 5s interval)
│       ├── Pricing.tsx           # Tabbed pricing (3 categories × 3 tiers) + bundles
│       ├── FAQ.tsx               # Accordion (8 items, split layout)
│       ├── Contact.tsx           # Contact info panel + WhatsApp-submit form
│       └── [Section].module.css  # Each section has a co-located CSS module
│
├── public/
│   ├── logo.svg                  # Brand logo — used in Navbar, Footer, About
│   ├── images/
│   │   ├── portfolio-branding.png
│   │   ├── portfolio-website.png
│   │   ├── portfolio-socmed.png
│   │   ├── portfolio-packaging.png
│   │   ├── portfolio-landingpage.png
│   │   └── portfolio-uiux.png
│   └── [misc Next.js default SVGs]
│
├── next.config.ts                # Minimal — no custom config currently set
├── tsconfig.json                 # Strict TS, path alias @/* → ./*
├── eslint.config.mjs
├── package.json
└── AGENTS.md                     # This file
```

---

## 4. Core Features & Business Logic

### Page Rendering Order (`app/page.tsx`)
All sections render sequentially as a single long page — no routing, no page transitions:
```
Navbar → Hero → About → WhyUs → Services → Portfolio →
Benefits → Process → Testimonials → Pricing → FAQ → Contact → Footer
[+ WhatsAppCTA floating button]
```

### Section IDs (used for smooth-scroll navigation)
| Section | HTML `id` |
|---|---|
| Hero | `#hero` |
| About | `#about` |
| Why Us | `#why-us` |
| Services | `#services` |
| Portfolio | `#portfolio` |
| Benefits | `#benefits` |
| Process | `#process` |
| Testimonials | `#testimonials` |
| Pricing | `#pricing` |
| FAQ | `#faq` |
| Contact | `#contact` |

> **Note:** Navbar links only expose: Home, About, Services, Portfolio, Pricing, Contact. The other sections (WhyUs, Benefits, Process, Testimonials, FAQ) are accessible by scrolling only.

### WhatsApp Integration (Critical Business Logic)
Every CTA across the entire site opens WhatsApp with a **pre-filled message** encoding context about the user's intent. The number is always `6285136877650`. Patterns:
- General inquiry: `?text=Halo%20Nubima%20Creative%2C%20saya%20ingin%20berkonsultasi`
- Service-specific (Services section): URL-encodes the service name
- Pricing-specific (Pricing section): URL-encodes the package name and category
- Contact form submit: Encodes form fields (name, business, service, message) into a single WA message

### Contact Form Behavior
The form in `Contact.tsx` does **NOT** send data to any backend. On submit:
1. Builds a WhatsApp URL with all form fields URL-encoded
2. Opens it in a new tab via `window.open()`
3. Shows a "Terkirim! ✓" success state for 3 seconds (then resets)

### Pricing System
Defined entirely in `Pricing.tsx` as static data arrays:
- **3 categories:** Branding, Website Development, Design Services
- **3 tiers per category:** Starter → Growth → Premium
- **3 bundle packages:** Branding+Website, Website+Design, Full Business Launch
- Prices are displayed as Indonesian Rupiah estimates (Rp 300K → Rp 15Jt)
- All CTAs redirect to WhatsApp with package context

---

## 5. UI/UX Design System

### Fonts (`app/layout.tsx` + `globals.css`)
| Variable | Font | Usage |
|---|---|---|
| `--font-heading` | **Plus Jakarta Sans** | All `h1`–`h6`, buttons, badges |
| `--font-body` | **Inter** | Body text, paragraphs |
Both loaded via `next/font/google` with `display: swap` and CSS variables.

### Brand Color Palette (defined in `:root`, `globals.css`)
| Token | Hex | Name |
|---|---|---|
| `--navy` | `#03045e` | Deep navy — headings, dark backgrounds |
| `--ocean` | `#0077b6` | Mid-blue — primary accents, buttons |
| `--sky` | `#00b4d8` | Cyan-blue — secondary accents, highlights |
| `--ice` | `#90e0ef` | Light cyan — decorative |
| `--mist` | `#caf0f8` | Near-white cyan — subtle backgrounds |
| `--gray-50 → --gray-900` | Slate scale | Neutral text and UI |

### Gradient Patterns
- **Hero bg:** `linear-gradient(135deg, #03045e → #020347 → #011a4d)`
- **Primary gradient:** `linear-gradient(135deg, ocean → sky)` — used on primary buttons
- **Text gradient:** `linear-gradient(135deg, ocean → sky)` — `.text-gradient` utility class
- **Shadows:** `--shadow-ocean`, `--shadow-sky`, `--shadow-glow` for colored glows

### Global Utility Classes (`globals.css`)
These are reusable across all component modules (not CSS Modules — they go in global scope):
- **Buttons:** `.btn`, `.btn-primary`, `.btn-outline`, `.btn-ghost`, `.btn-lg`, `.btn-sm`
- **Cards:** `.card`, `.card:hover`, `.card-ocean`
- **Layout:** `.container` (max-width 1200px, centered), `.section` (padding 6rem 0), `.section-sm`
- **Grids:** `.grid-2`, `.grid-3`, `.grid-4`, `.grid-5`
- **Flex helpers:** `.flex`, `.flex-col`, `.items-center`, `.justify-center`, `.justify-between`, `.gap-4/6/8`
- **Backgrounds:** `.bg-navy`, `.bg-ocean`, `.bg-gradient-hero`, `.bg-gradient-ocean`, `.bg-gradient-sky`, `.bg-mist`, `.bg-gray-50`
- **Glass effects:** `.glass`, `.glass-light`, `.glass-ocean`
- **Typography:** `.text-gradient`, `.text-gradient-navy`, `.text-gradient-light`
- **Components:** `.badge`, `.badge-ocean`, `.badge-sky`, `.badge-white`, `.divider`, `.divider-center`

### Keyframe Animations (defined in `globals.css`)
| Name | Effect |
|---|---|
| `float` | Vertical bobbing (0 → -20px → 0) |
| `pulse-glow` | Glowing box-shadow pulse |
| `spin-slow` | 360° rotation |
| `shimmer` | Horizontal background position sweep |
| `ping` | Scale-up + fade (like a radar ping) |
| `gradient-shift` | Background-position animation |

### Responsive Breakpoints
| Breakpoint | Behavior |
|---|---|
| `≤1024px` | `grid-4` → 2 cols, `grid-5` → 3 cols |
| `≤768px` | `.section` padding reduced; `grid-2/3/4` → 1 col; large font sizes reduced |
| `≤480px` | `grid-5` → 1 col; `.btn-lg` size reduced |

---

## 6. State Management & Data Flow

**No global state management** (no Redux, Zustand, Context). All state is local to components:

| Component | State | Type |
|---|---|---|
| `Navbar` | `scrolled` (bool), `menuOpen` (bool), `activeLink` (string) | Local `useState` |
| `Portfolio` | `activeCategory` (string filter) | Local `useState` |
| `Testimonials` | `current` (index), `direction` (±1) | Local `useState` + `useEffect` auto-rotate |
| `Pricing` | `activeTab` (category id string) | Local `useState` |
| `FAQ` | `openIndex` (number \| null) | Local `useState` |
| `Contact` | `form` (object), `sent` (bool) | Local `useState` |

**Animation triggers:** Every section uses `useInView` from Framer Motion with `once: true` — animations fire once when the section enters the viewport. The `ref` is attached to the section wrapper element.

**Scroll parallax (Hero only):** Uses Framer Motion's `useScroll` + `useTransform` for parallax background and opacity fade on scroll.

---

## 7. API Integrations / Backend Services

| Service | Purpose | Integration Method |
|---|---|---|
| **WhatsApp** | Primary conversion/CTA | `window.open()` with `wa.me` URLs |
| **Vercel Analytics** | Page view tracking | `<Analytics />` component in `layout.tsx` |
| **Vercel Speed Insights** | Performance monitoring | `<SpeedInsights />` component in `layout.tsx` |
| **Google Fonts** | Typography | `next/font/google` (Plus Jakarta Sans, Inter) + CSS `@import` fallback |

**No backend, no API routes, no database, no CMS, no payment gateway, no authentication.**

---

## 8. Configuration & Deployment

### `next.config.ts`
Currently empty (no custom config). If adding `Image` domains, redirects, or headers — add them here.

### `tsconfig.json`
- Path alias: `@/*` → `./` (root of project). Use `@/components/...`, `@/app/...`.
- Strict mode enabled. Do not disable.
- Target: `ES2017`.

### `package.json` Scripts
```bash
npm run dev      # Development server (next dev)
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint
```

### Environment Variables
**None required.** No `.env` files, no secrets, no API keys. Everything is static.

### Deployment
- Inferred: **Vercel** (due to `@vercel/analytics` and `@vercel/speed-insights`)
- No custom build configuration needed beyond `npm run build`

---

## 9. Developer Conventions

### Component Patterns
1. **All section components** follow this structure:
   - `"use client"` directive at the top (all are client components)
   - Static data arrays defined at module level (before the component function)
   - `useRef` + `useInView` for scroll-triggered animations
   - Framer Motion `motion.*` elements with `initial`, `animate`, `transition` props
   - CSS Module import: `import styles from './ComponentName.module.css'`

2. **Data co-location:** All content (testimonials, services, pricing, FAQ) is hardcoded as constant arrays inside the component file. No external data fetching.

3. **Icon usage:** Always from `lucide-react`. Custom SVG icons (Facebook, TikTok) are defined inline as functional components in `Contact.tsx`.

4. **WhatsApp URLs:** Always use `window.open(url, '_blank')`. Never use `<a href>` for WA CTAs (except in `WhatsAppCTA.tsx` and `Footer.tsx` where links are fine).

5. **Scroll navigation:** Always use `document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })` pattern.

6. **Image optimization:** Portfolio images use Next.js `<Image>` component with `fill` prop and `sizes` attribute. Logo and About icon use standard `<img>` tags (small, decorative).

### CSS Module Conventions
- Each component has a co-located `.module.css` file
- Global utility classes from `globals.css` can be used in JSX (e.g., `className="container section"`)
- Module classes and global classes can be mixed: `className={`${styles.hero} section`}`
- Colors always reference CSS custom properties (e.g., `var(--navy)`, `var(--ocean)`)
- Never hardcode hex colors — use tokens

### TypeScript Conventions
- Explicit type definitions for data shapes (see `Pricing.tsx` for `Package` and `Category` types)
- `React.ElementType` used for icon prop types (Lucide components)
- Strict mode — no implicit `any` allowed

### Naming Conventions
| Type | Convention | Example |
|---|---|---|
| Component files | PascalCase | `Hero.tsx`, `WhatsAppCTA.tsx` |
| CSS Module files | PascalCase matching component | `Hero.module.css` |
| CSS Module classes | camelCase | `styles.heroTitle`, `styles.bgOrb1` |
| Global CSS classes | kebab-case | `.btn-primary`, `.text-gradient` |
| IDs (for browser/testing) | kebab-case | `id="hero-view-portfolio"`, `id="contact-submit"` |

---

## 10. Known Issues / Improvement Opportunities

### Issues
- **Contact email inconsistency:** Footer shows `hello@nubima.id`, Contact section shows `nubimacreativestudio@gmail.com`. These should be unified.
- **Phone number inconsistency:** Footer shows `+62 812-0000-0000` (placeholder) while all WhatsApp links use `+62 851-3687-7650`. Footer phone display needs updating.
- **Instagram handle inconsistency:** Footer links to `instagram.com/nubimacreative`, Contact section links to `instagram.com/nubimacreativestudio`.
- **`page.module.css`** exists but appears unused (Next.js scaffold remnant). Can be deleted or repurposed.
- **`activeLink` state in Navbar** is tracked (`useState`) but never actually used to apply an active style to nav links. The IntersectionObserver-based active link highlighting is missing.
- **Portfolio "View Project" button** has no action — clicking it does nothing (no link, no modal, no WA redirect). It's a dead CTA.
- **`app/icon.svg`** and **`public/logo.svg`** are identical files — one copy could be removed.

### Improvement Opportunities
- **SEO:** Open Graph image (`og:image`) is not set. Adding a proper social preview image would improve link sharing.
- **Portfolio:** Project items could link to real case study pages or WhatsApp with the project name pre-filled.
- **Animation performance:** `useInView` with `amount: 0.05`–`0.2` — lower amounts on mobile could trigger premature animations. Could use `amount` conditionally based on screen size.
- **Contact form:** Could integrate with a form backend (Formspree, Resend, etc.) as an alternative to WA-only submission.
- **Pricing data:** Currently hardcoded. Could be extracted to a separate `data/pricing.ts` file for easier content management.
- **Missing favicon sizes:** Only one `icon.svg` — consider adding PWA manifest and various icon sizes.

---

## 11. Quick Start for Future Agents

### To run the project:
```bash
cd c:\projects\nubimacreative-compro
npm install        # if node_modules missing
npm run dev        # starts on http://localhost:3000
```

### To add a new section:
1. Create `components/sections/MySectionName.tsx` with `"use client"` directive
2. Create `components/sections/MySectionName.module.css`
3. Add `id="my-section"` to the `<section>` element
4. Import and add the component to `app/page.tsx` in the correct position
5. Optionally add the section to `navLinks` in `Navbar.tsx` and/or `Footer.tsx`

### To update pricing:
- Edit the `categories` array and `bundles` array in `components/sections/Pricing.tsx`
- No backend changes needed

### To update portfolio:
- Edit the `projects` array in `components/sections/Portfolio.tsx`
- Add new images to `public/images/`
- Use Next.js `<Image>` with `fill` prop for new entries

### To update testimonials:
- Edit the `testimonials` array in `components/sections/Testimonials.tsx`
- Each entry needs: `id`, `name`, `role`, `business`, `rating`, `text`, `initials`, `color`

### To change the WhatsApp number:
- Search and replace `6285136877650` across all `.tsx` files (appears in: Navbar, Footer, WhatsAppCTA, Hero, Services, Benefits, WhyUs, Pricing, FAQ, Contact)

### To add a new global utility style:
- Add to `app/globals.css` under the appropriate section comment
- Reference `var(--token-name)` for all colors and spacing

---

## 12. Critical Files Reference List

| File | Purpose | Change Impact |
|---|---|---|
| [`app/layout.tsx`](app/layout.tsx) | Root HTML, fonts, SEO metadata, Analytics | High — affects entire site |
| [`app/globals.css`](app/globals.css) | Design tokens, global utilities, resets | High — affects entire site |
| [`app/page.tsx`](app/page.tsx) | Section assembly order | Medium — section ordering |
| [`components/layout/Navbar.tsx`](components/layout/Navbar.tsx) | Navigation links, WA CTA, mobile menu | Medium |
| [`components/layout/Footer.tsx`](components/layout/Footer.tsx) | Footer content, social links, contact info | Medium |
| [`components/layout/WhatsAppCTA.tsx`](components/layout/WhatsAppCTA.tsx) | Floating WA button | Low |
| [`components/sections/Hero.tsx`](components/sections/Hero.tsx) | First impression, primary CTAs | High — conversion critical |
| [`components/sections/Pricing.tsx`](components/sections/Pricing.tsx) | All pricing data + bundle packages | High — business critical |
| [`components/sections/Services.tsx`](components/sections/Services.tsx) | Service catalog (10 services) | Medium |
| [`components/sections/Portfolio.tsx`](components/sections/Portfolio.tsx) | Portfolio gallery + filter logic | Medium |
| [`components/sections/Contact.tsx`](components/sections/Contact.tsx) | Contact form, social links, WA direct | Medium |
| [`components/sections/Testimonials.tsx`](components/sections/Testimonials.tsx) | Client testimonials carousel | Medium |
| [`components/sections/FAQ.tsx`](components/sections/FAQ.tsx) | FAQ accordion content | Low |
| [`public/logo.svg`](public/logo.svg) | Brand logo — used everywhere | High — visual identity |
| [`public/images/`](public/images/) | Portfolio images (6 PNGs) | Low per file |
| [`next.config.ts`](next.config.ts) | Next.js configuration | High if changed |
| [`tsconfig.json`](tsconfig.json) | TypeScript + path aliases | High if changed |
