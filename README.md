# divineobeten.xyz

> Personal portfolio of Divine Obeten — Frontend Engineer obsessed with how interfaces feel, not just what they do.

[![Live](https://img.shields.io/badge/Live-divineobeten.xyz-black?style=flat-square)](https://divineobeten.xyz)
[![Lighthouse Mobile](https://img.shields.io/badge/Lighthouse%20Mobile-90%2F100-orange?style=flat-square)](#performance)
[![Lighthouse Desktop](https://img.shields.io/badge/Lighthouse%20Desktop-99%2F100-brightgreen?style=flat-square)](#performance)

---

[![Portfolio Hero](https://raw.githubusercontent.com/Deevyn9/divineobeten/main/public/images/hero-screenshot.png)](https://divineobeten.xyz)

---

## Overview

A portfolio built to showcase 3+ years of frontend work across fintech, edtech, ecommerce, and web3. Every interaction is intentional — from the preloader mouse trail to the scroll-aware navigation to the morphing footer animation. Built with performance and craft in equal measure.

---

## Features

- **GSAP preloader** — mouse trail with tech stack icons, percentage counter, scroll locked until exit
- **Scroll-aware navbar** — hides on scroll down, reveals on scroll up, arrow hover effect on links
- **Featured projects** — staggered card layout with case study deep dives per project
- **Explorations** — motion experiments and UI components with skew-on-scroll GSAP effect
- **About section** — bio, grouped skill tags, and experience timeline
- **Footer** — social hover color transitions, SVG morph animation on scroll, full-name watermark
- **Astro content collections** — markdown-driven project pages with dynamic slug routing
- **Lenis smooth scroll** — integrated with GSAP and paused during preloader
- **Client-side navigation** — Astro ClientRouter with slide transition between pages

---

## Stack

| Tool | Why |
|------|-----|
| [Astro](https://astro.build) | Zero JS by default, content collections, fast builds |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first, CSS variable system, no config overhead |
| [GSAP](https://gsap.com) | Industry standard for complex animation and scroll effects |
| [Lenis](https://lenis.darkroom.engineering) | Smooth scroll that plays well with GSAP |
| [TypeScript](https://www.typescriptlang.org) | Type safety across components and content schemas |

**Fonts:** Bricolage Grotesque · Inter · Space Mono

---

## Screenshots

[![Featured Projects](https://raw.githubusercontent.com/Deevyn9/divineobeten/main/public/images/projects-screenshot.png)](https://divineobeten.xyz/projects)

---

## Performance

Optimized from an initial score of ~66 on mobile to:

- **90 / 100** — Mobile
- **99 / 100** — Desktop

Fixes that moved the needle:

- Non-blocking font loading via `media="print"` swap technique
- Converted all project images to WebP
- `astro-compress` for build-time HTML, CSS, JS, and image compression
- `preconnect` hints for Google Fonts
- Fixed `www` redirect from 307 → 301 permanent

---

## Local Setup

```bash
# clone
git clone https://github.com/Deevyn9/divineobeten.git
cd divineobeten

# install
npm install

# dev
npm run dev

# build
npm run build
```

---

## Structure

```
src/
  components/       # Navbar, Footer, Preloader, ProjectCard, FeaturedProjects, FeaturedExplorations
  content/
    projects/       # Markdown files per project — drives all project pages
  layouts/          # Layout.astro — global head, meta, Lenis, ClientRouter
  pages/
    projects/
      index.astro   # All projects
      [slug].astro  # Dynamic case study per project
    explorations.astro
    index.astro
  styles/
    global.css
```

Built by [Divine Obeten](https://divineobeten.xyz) · [Twitter](https://twitter.com/wyddivine) · [LinkedIn](https://linkedin.com/in/iamdivineobeten)
