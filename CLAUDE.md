# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio for Matheus Sá Cardoso. It is a static single page: plain HTML/CSS/JS with **no build step, no package manager, no tests and no linter**. GitHub Pages serves it from `main` / root at `https://matheussacardoso.github.io/Portfolio/`, and every push to `main` redeploys it.

## Key rules

- **Content edits go in `js/data.js`.** Everything is in there with `{en, pt}` translations. `index.html` should only change for layout.
- **No build step or frameworks.** Keep it plain HTML/CSS/JS so GitHub Pages serves it directly from `main`, and keep paths relative because the site lives under `/Portfolio/`. Keep `.nojekyll`.
- **Every new piece of text needs both an `en` and a `pt` version.** That includes adding the `i18n` keys for any new `data-i18n` attribute.
- **Theme colors and fonts are tokens at the top of `css/style.css`.** Dark mode is "deep ocean", light mode is "beach", and the fonts are Shrikhand and Poppins, chosen for the surf theme.
- **Don't commit reference images** like `assets/reference.png` (it is gitignored).
- **Preview locally** with `python -m http.server 8000`.
- **`assets/cv.pdf` is public.** It is linked by both "Download CV" buttons.

## Commands

```bash
python -m http.server 8000          # preview at http://localhost:8000 (file:// also works)
node --check js/data.js && node --check js/main.js   # syntax check (the only "lint" available)
```

## Architecture

The page is rendered from data. There are three pieces:

- **`js/data.js`** defines one global, `window.PORTFOLIO`, and is the single source of truth for content: `profile`, `socials`, `about`, `stats`, `projects[]`, `education[]`, `experience[]`, `certifications[]`, `languages[]`, `skills{languages,tools}`, and the `i18n.en`/`i18n.pt` UI strings. **Content changes go here, not in `index.html`.**
- **`index.html`** holds static markup only. Dynamic areas are empty containers with ids (`ongoingGrid`, `recentGrid`, `experienceList`, `skillsTools`, …) that `main.js` fills. Static labels carry `data-i18n="key"`, and the key must exist in **both** `i18n.en` and `i18n.pt`.
- **`js/main.js`** is an IIFE with no dependencies. It renders everything from `PORTFOLIO` and handles the language toggle, theme toggle, typed hero text, scroll-spy, reveal-on-scroll and project filters.

Bilingual (EN / PT-BR) conventions:
- Translatable data fields are `{ en, pt }` objects, read through `tr()`. Plain strings are also accepted.
- `experience[].bullets` is `{ en: [...], pt: [...] }`.
- When the language changes, `applyLang()` re-renders every translatable section. Anything new that is language-dependent must be re-rendered there, not only in the one-time init (`bindStatic`, `renderCerts`, `renderSkills`).

Project cards:
- `status: "ongoing" | "completed"` chooses the grid (Ongoing vs Recent).
- `category: "ai" | "software"` drives the filter chips.
- The optional `demo` field adds a "Live demo" link.

Skills: `icon` is a Devicon class name (devicon v2.16.0 is loaded from jsDelivr). If `icon` is empty, a text badge is shown instead.

Safety: `about` is injected with `innerHTML` (it is author-controlled HTML containing `<strong>`). Everything else is built with `textContent`, and new code should keep it that way.

## Styling

- `css/style.css` keeps all colors as tokens on `:root`. The ocean/surf theme has two modes:
  - **Dark "deep ocean"** is the default (navy with a sea-foam `--accent`).
  - **Light "beach"** uses sand with a lagoon-teal accent and a coral `--sun`.
- Light-mode tokens are defined twice, once under `prefers-color-scheme: light` (`:root:not([data-theme="dark"])`) and once under `:root[data-theme="light"]`. Keep the two blocks in sync.
- The theme choice is stored in `localStorage` (always inside try/catch), and an inline script in `<head>` applies it before first paint.
- Fonts come from Google Fonts: **Shrikhand** (display: hero name, section titles, stats, logo) is the deliberate surf-retro choice; **Poppins** is used for body/UI.
- Animations (hero waves, reveal, typed text) must respect `prefers-reduced-motion`.
- Spacing tokens are `--space-4` … `--space-120`, named by their px value. Component heights are `--control-sm` (40px: header buttons, chips, nav links), `--control` (48px: buttons, social buttons, list rows), `--control-lg` (56px: large CTA) and `--pill` (28px: badges and tags).

## UI/UX Design System
- Use an 8pt spacing scale.
- Allow 4px increments for fine-tuning.
- Do not introduce arbitrary values without justification.
- Use existing spacing tokens.
- Standardize the heights of equivalent components.
- Preserve visual hierarchy through proximity.
- Use smaller spacing within groups.
- Use larger spacing between groups.
- Maintain consistency across screens.
- Respect accessibility requirements.
- Do not alter the Design System unnecessarily.