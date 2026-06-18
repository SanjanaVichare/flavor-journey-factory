# Samarth Makhana — Premium Homepage Build

A cinematic, scroll-driven single-page experience inspired by Paper Boat × Epigamia × luxury snack storytelling. The flavor transitions are the centerpiece — packet stays hero, world morphs around it.

## Design System (src/styles.css)

Brand tokens in oklch:
- `--cream` #FAF6E9 (base background)
- `--brand-green` deep olive (primary)
- `--brand-green-deep` #4D622C (final CTA)
- `--gold` warm accent
- Flavor tokens: `--peri` orange-red, `--cheese` golden-yellow, `--chat-pata` chili-brown, `--cream-onion` purple, `--pudina` fresh-green, `--salt-pepper` navy, `--cookie` chocolate-brown, `--sugar-free` blue
- Shadows: `--shadow-packet` dramatic drop, `--shadow-soft` cream-tinted
- Gradients per flavor for backgrounds

Typography:
- Display: **Fraunces** (serif, heritage-modern feel) for headlines
- Body: **Inter Tight** for clean readability
- Devanagari accent: **Tiro Devanagari Hindi** for occasional ornamental marks
Loaded via `<link>` in `__root.tsx` head.

## Sections (single index route, scroll-stacked)

1. **Hero** — cream bg, massive serif headline "India's Favorite Superfood Snack", floating packet (generated image), floating makhana + spice particles, mouse-parallax, scroll-scale packet toward camera
2. **Flavor Explosion** — sticky section, background morphs through 6 flavors (Peri Peri → Cheese → Pudina → Cream & Onion → Salt & Pepper → Chat Pata), packet swaps with crossfade+rotate, themed particles per flavor, bold flavor name in oversized type
3. **Product Journey** — sticky 4-step storytelling (wetlands → roasting → seasoning → finished pack) with horizontal-scrolling visuals
4. **Cookie Showcase** — huge cookie enters, scroll-breaks-apart with chips & makhana crumbs, Classic vs Sugar Free reveal
5. **Nutrition Counters** — big animated numbers (5g+ Protein, 100% Taste, 0% Guilt) with intersection-triggered count-up
6. **Why Samarth** — 6 benefit cards, staggered reveal, animated line-icons
7. **Interactive Flavor Wheel** — circular SVG wheel, drag/hover to rotate, selected flavor shows packet + ingredient list
8. **Final CTA** — olive-green #4D622C bg, floating packets, "Snack Smarter. Live Better." + Shop Now / Contact buttons

## Tech & Animation

- **GSAP + ScrollTrigger** + **Lenis** smooth scroll
- **Framer Motion** for component-level micro-interactions
- Split-text character reveals on headlines
- `prefers-reduced-motion` fallback (static stacked layout)
- All packet/ingredient/cookie images generated via imagegen (premium tier for product packs with text legibility)

## Image Assets (generated)

- Hero packet (Peri Peri front-facing premium render)
- 6 flavor packets (Cheese, Pudina, Cream & Onion, Salt & Pepper, Chat Pata, Cookies, Sugar Free) — consistent angle/lighting
- Raw fox nuts, roasting pan, spice splash, cookie hero, broken cookie pieces
- Floating ingredient sprites (chili, mint leaf, onion slice, pepper, cheese cube, salt crystal) — transparent PNGs

## File Layout

- `src/styles.css` — tokens, gradients, fonts, flavor palette
- `src/routes/__root.tsx` — add Google Fonts link, update meta
- `src/routes/index.tsx` — composes section components, sets up Lenis + GSAP context
- `src/components/site/` — `Hero.tsx`, `FlavorExplosion.tsx`, `Journey.tsx`, `Cookies.tsx`, `Nutrition.tsx`, `WhySamarth.tsx`, `FlavorWheel.tsx`, `FinalCTA.tsx`, `FloatingParticles.tsx`
- `src/lib/lenis.ts` — smooth scroll setup
- `src/assets/` — all generated images

## SEO

Update root `__root.tsx` + index `head()` with brand title ("Samarth Makhana — Roasted Makhana & Handcrafted Cookies"), <160-char description, OG/Twitter tags, hero image as og:image. Add `sitemap.xml` route + `robots.txt`.

## Out of Scope (this pass)

- Real e-commerce (Shop Now is anchor/placeholder)
- Contact form backend
- CMS / admin

Approve and I'll build it end-to-end.
