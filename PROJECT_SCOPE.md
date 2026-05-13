# PROJECT_SCOPE.md — Purpose Construction

## Overview

Purpose Construction is a licensed general contractor based in Lufkin, Texas serving Angelina County and East Texas. This static website is built with **Astro + Tailwind CSS** and is optimized for local SEO, AI platform retrieval, and fast loading. It is a sister site to [Purpose Roofing](https://www.purpose-roofing.com), sharing the same ownership and brand family. The site covers 35 pages across four service categories, with structured data, sitemap, and breadcrumb navigation throughout.

---

## Design Direction

- **Aesthetic:** Warm industrial — confident, professional, East Texas-rooted. Inspired by Purpose Roofing's red brand identity and Brito Construction's clean, photography-forward layout.
- **Colors:** Brand Red `#C41C35` (primary), Deep Charcoal `#1A1714` (headings/dark elements), Warm White `#FAFAF8` (background), Warm Gray `#F4F0EB` (alt sections)
- **Typography:** Barlow Condensed 700/800 (display headings) + DM Sans 400/500 (body text) via Google Fonts
- **Principles:** No dark mode, no emojis, no default Tailwind blues. Layered shadows, hover transforms, inline SVG icons.

---

## Pages Table

| Route | Status | Description |
|-------|--------|-------------|
| `/` | Built | Homepage — hero, stats, categories, core services, sister company, testimonials, service areas, CTA |
| `/services` | Built | Services hub — all categories and services listed with links |
| `/about` | Built | About page — story, values, sister company callout |
| `/contact` | Built | Contact page — form, direct info, hours, map placeholder |
| `/404` | Built | Custom 404 — noindexed, links to key pages |
| `/remodeling-contractor-lufkin-tx` | Built | Remodeling category page |
| `/new-construction-lufkin-tx` | Built | New construction category page |
| `/outdoor-living-lufkin-tx` | Built | Outdoor living category page |
| `/exterior-services-lufkin-tx` | Built | Exterior services category page |
| `/kitchen-remodeling-lufkin-tx` | Built | Core service — Kitchen Remodeling (with FAQs) |
| `/bathroom-remodeling-lufkin-tx` | Built | Core service — Bathroom Remodeling (with FAQs) |
| `/home-additions-lufkin-tx` | Built | Core service — Home Additions (with FAQs) |
| `/barndominium-construction-lufkin-tx` | Built | Core service — Barndominium Construction (with FAQs) |
| `/interior-painting-lufkin-tx` | Built | Interior Painting |
| `/flooring-installation-lufkin-tx` | Built | Flooring Installation |
| `/drywall-installation-lufkin-tx` | Built | Drywall Installation |
| `/drywall-repair-lufkin-tx` | Built | Drywall Repair |
| `/residential-construction-lufkin-tx` | Built | Residential Construction |
| `/commercial-construction-lufkin-tx` | Built | Commercial Construction |
| `/pole-barn-construction-lufkin-tx` | Built | Pole Barn Construction |
| `/tiny-home-construction-lufkin-tx` | Built | Tiny Home Construction |
| `/patio-construction-lufkin-tx` | Built | Patio Construction |
| `/deck-construction-lufkin-tx` | Built | Deck Construction |
| `/pergola-construction-lufkin-tx` | Built | Pergola Construction |
| `/pavilion-construction-lufkin-tx` | Built | Pavilion Construction |
| `/fence-installation-lufkin-tx` | Built | Fence Installation |
| `/driveway-installation-lufkin-tx` | Built | Driveway Installation |
| `/walkway-installation-lufkin-tx` | Built | Walkway Installation |
| `/siding-installation-lufkin-tx` | Built | Siding Installation |
| `/window-installation-lufkin-tx` | Built | Window Installation |
| `/door-installation-lufkin-tx` | Built | Door Installation |
| `/exterior-painting-lufkin-tx` | Built | Exterior Painting |
| `/gutter-installation-lufkin-tx` | Built | Gutter Installation |
| `/insulation-installation-lufkin-tx` | Built | Insulation Installation |
| `/project-planning-consulting-lufkin-tx` | Built | Project Planning & Consulting |
| `/site-preparation-lufkin-tx` | Built | Site Preparation |

---

## Components Table

| Component | File | Purpose |
|-----------|------|---------|
| BaseLayout | `src/layouts/BaseLayout.astro` | HTML shell — all SEO head tags, fonts, structured data |
| Header | `src/components/Header.astro` | Sticky nav with logo, desktop dropdown, mobile hamburger |
| Footer | `src/components/Footer.astro` | Multi-column footer — NAP, hours, service areas, sister company |
| Hero | `src/components/Hero.astro` | Full-height homepage hero with photo overlay, trust badges |
| PageHero | `src/components/PageHero.astro` | Compact interior page banner |
| Breadcrumb | `src/components/Breadcrumb.astro` | Breadcrumb nav + BreadcrumbList JSON-LD schema |
| SectionHeading | `src/components/SectionHeading.astro` | Reusable tag + h2 + subtitle block |
| Card | `src/components/Card.astro` | Feature card with icon, title, body, optional link |
| InfoCard | `src/components/InfoCard.astro` | Centered stat/highlight card |

---

## Layout Table

| Layout | File | Purpose |
|--------|------|---------|
| BaseLayout | `src/layouts/BaseLayout.astro` | Shared page shell for all 35 pages |

---

## SEO Checklist

- [x] Unique `<title>` and `<meta description>` on every page
- [x] Canonical URLs on every page
- [x] Open Graph tags (title, description, image, site_name, locale, type, url)
- [x] Twitter/X Card tags (card, title, description, image)
- [x] `apple-touch-icon` and `theme-color` meta
- [x] XML sitemap generated via `@astrojs/sitemap` (filtered: no 404, no /thank-you)
- [x] `robots.txt` with sitemap reference
- [x] Trailing slash consistency enforced (`trailingSlash: 'never'`)
- [x] LocalBusiness / GeneralContractor JSON-LD on homepage (name, url, telephone, email, address, geo, hours, image, sameAs, areaServed, hasMap)
- [x] WebSite JSON-LD on homepage
- [x] BreadcrumbList JSON-LD on all interior pages (via Breadcrumb component)
- [x] FAQPage JSON-LD on Kitchen, Bathroom, Home Additions, Barndominium pages
- [x] Service JSON-LD on all category and service pages
- [x] Semantic HTML landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<address>`)
- [x] Proper heading hierarchy (single `<h1>`, sequential levels)
- [x] Skip-to-content link (first focusable element in `<body>`)
- [x] ARIA attributes (`aria-label` on navs, `aria-current="page"`, `aria-expanded` on mobile toggle)
- [x] NAP consistency (footer, contact page, schema all match)
- [x] Image `alt` attributes, `loading`/`fetchpriority`, explicit `width`/`height`
- [x] Custom 404 page (noindexed with `robots="noindex, nofollow"`)
- [x] All form inputs have `<label>` elements
- [x] Breadcrumb navigation on all interior pages
- [x] Internal linking — homepage → categories → core services → child services → contact
- [x] Sister company (Purpose Roofing) cross-links in footer, homepage, about, exterior services
- [ ] Real photography (replace all `placehold.co` images)
- [ ] Real street address in structured data and footer
- [ ] Google Maps embed on contact page
- [ ] sameAs social profile URLs in LocalBusiness schema
- [ ] OG image created (1200×630 PNG at `/og-default.jpg`)
- [ ] Apple touch icon PNG (180×180 at `/apple-touch-icon.png`)

---

## Content Needs

All copy is production-quality placeholder content. The following items need real content from stakeholders:

- **Street address** — needed for footer NAP, contact page, and LocalBusiness schema
- **Exact coordinates** — `geo.latitude` and `geo.longitude` in homepage schema (currently approximate)
- **Years in business** — currently "10+" throughout; confirm actual founding year
- **Projects completed count** — currently "500+"; confirm or adjust
- **Business hours** — currently Mon–Fri 7am–6pm, Sat 8am–2pm; confirm with owner
- **Team/owner bio** — About page has a placeholder story; needs real company history
- **Testimonials** — three placeholder testimonials; replace with real Google Reviews
- **Social media profiles** — sameAs array in schema needs Facebook, Instagram, Google, Yelp URLs
- **Google Maps URL** — `hasMap` in schema and contact page directions link

---

## Photo Assets Needed

Replace all `https://placehold.co/` images with real photography:

| Image | Dimensions | Usage |
|-------|-----------|-------|
| Hero background | 1600×900 | Homepage hero (full-screen overlay) |
| OG default | 1200×630 | Open Graph / social sharing |
| Apple touch icon | 180×180 PNG | Mobile home screen icon |
| Team / job site | 640×480 | About page |
| Remodeling project | 640×480 | Remodeling category page |
| New construction | 640×480 | New construction category page |
| Outdoor living | 640×480 | Outdoor living category page |
| Kitchen remodel | 640×480 | Kitchen Remodeling page |
| Bathroom remodel | 640×480 | Bathroom Remodeling page |
| Home addition | 640×480 | Home Additions page |
| Barndominium | 640×480 | Barndominium page + homepage feature card |
| Per-service | 640×480 (×15) | One per child service page |

Use descriptive filenames when uploading (e.g., `kitchen-remodel-lufkin-tx.webp`, not `IMG_4532.jpg`). Prefer WebP format.

---

## Integrations to Configure

| Integration | Status | Notes |
|-------------|--------|-------|
| Contact form backend | Pending | Replace `action="#"` in contact.astro with Formspree, Netlify Forms, or custom endpoint |
| Google Maps embed | Pending | Replace map placeholder div on `/contact` with actual Google Maps iframe |
| Google Analytics / GA4 | Not started | Add `<script>` to BaseLayout.astro `<head>` |
| Google Search Console | Not started | Verify domain ownership after first deploy |
| sameAs social profiles | Pending | Add Facebook, Instagram, Google Business, Yelp URLs to LocalBusiness schema |
| Real domain | Pending | Update `site:` in `astro.config.mjs` from `purposeconstructionco.com` to actual domain |

---

## Future: Deployment (Netlify)

1. Push this project to a GitHub repository
2. Log in to [netlify.com](https://netlify.com) and click **Add new site → Import from Git**
3. Connect your GitHub account and select the repository
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**
6. Connect your custom domain under **Domain settings**
7. Netlify auto-deploys on every push to `main`

---

## Future: CMS for Non-Technical Editors (Decap CMS)

To allow Purpose Construction staff to update content without touching code:

1. Move editable content (service descriptions, team bios, testimonials) to Markdown/MDX collections in `src/content/`
2. Add Decap CMS:
   - `public/admin/index.html` — CMS app entry point
   - `public/admin/config.yml` — defines editable collections
3. Enable **Netlify Identity** in the Netlify dashboard (under Site settings → Identity)
4. Staff log in at `https://yoursite.com/admin` → edit → save → auto-publishes

---

## File Structure

```
purpose-construction/
├── public/
│   ├── favicon.svg
│   ├── apple-touch-icon.png    ← placeholder, needs real 180x180 PNG
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Breadcrumb.astro
│   │   ├── Card.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── InfoCard.astro
│   │   ├── PageHero.astro
│   │   └── SectionHeading.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── services.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── 404.astro
│   │   ├── remodeling-contractor-lufkin-tx.astro
│   │   ├── new-construction-lufkin-tx.astro
│   │   ├── outdoor-living-lufkin-tx.astro
│   │   ├── exterior-services-lufkin-tx.astro
│   │   ├── kitchen-remodeling-lufkin-tx.astro
│   │   ├── bathroom-remodeling-lufkin-tx.astro
│   │   ├── home-additions-lufkin-tx.astro
│   │   ├── barndominium-construction-lufkin-tx.astro
│   │   ├── interior-painting-lufkin-tx.astro
│   │   ├── flooring-installation-lufkin-tx.astro
│   │   ├── drywall-installation-lufkin-tx.astro
│   │   ├── drywall-repair-lufkin-tx.astro
│   │   ├── residential-construction-lufkin-tx.astro
│   │   ├── commercial-construction-lufkin-tx.astro
│   │   ├── pole-barn-construction-lufkin-tx.astro
│   │   ├── tiny-home-construction-lufkin-tx.astro
│   │   ├── patio-construction-lufkin-tx.astro
│   │   ├── deck-construction-lufkin-tx.astro
│   │   ├── pergola-construction-lufkin-tx.astro
│   │   ├── pavilion-construction-lufkin-tx.astro
│   │   ├── fence-installation-lufkin-tx.astro
│   │   ├── driveway-installation-lufkin-tx.astro
│   │   ├── walkway-installation-lufkin-tx.astro
│   │   ├── siding-installation-lufkin-tx.astro
│   │   ├── window-installation-lufkin-tx.astro
│   │   ├── door-installation-lufkin-tx.astro
│   │   ├── exterior-painting-lufkin-tx.astro
│   │   ├── gutter-installation-lufkin-tx.astro
│   │   ├── insulation-installation-lufkin-tx.astro
│   │   ├── project-planning-consulting-lufkin-tx.astro
│   │   └── site-preparation-lufkin-tx.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── .gitignore
└── PROJECT_SCOPE.md
```

---

## Page Count Summary

| Type | Count |
|------|-------|
| Homepage | 1 |
| Main pages (Services, About, Contact, 404) | 4 |
| Secondary category pages | 4 |
| Core service pages | 4 |
| Child service pages | 21 |
| General service pages | 2 |
| **TOTAL** | **36** |
