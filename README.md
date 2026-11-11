# Portfolio

My personal portfolio: Software Engineering, AI & Data, and automation projects.
It's plain HTML/CSS/JS with no build step, hosted on GitHub Pages.

**Live:** https://matheussacardoso.github.io/Portfolio/

## Editing content

All content lives in **`js/data.js`**: profile, about text, projects, education, experience, skills, and the EN/PT-BR UI strings.
Search the file for `TODO` to find the placeholders.

- **Projects**: set `status: "ongoing" | "completed"` and `category: "ai" | "software"`. Add `demo` to show a "Live demo" link.
- **Photo**: put `assets/profile.jpg` in place and update `profile.photo`.
- **CV**: put `assets/cv.pdf` in place.
- **Skill icons**: use class names from https://devicon.dev. Leave `icon` empty to show a text badge instead.

## Run locally

```bash
python -m http.server 8000
# open http://localhost:8000
```

## Deploy (GitHub Pages)

1. Push to `main`.
2. In the repo, go to **Settings → Pages → Build and deployment → Deploy from a branch**, then pick `main` and `/ (root)`.
3. The site is published at `https://matheussacardoso.github.io/Portfolio/`.

Tip: rename the repo to `matheussacardoso.github.io` to serve the site from the root URL.

## Structure

```
index.html        page markup (sections: home, about, portfolio, resume, skills, contact)
css/style.css     design tokens, dark/light themes, layout
js/data.js        all editable content + translations
js/main.js        rendering, i18n toggle, theme, typed text, scroll-spy, filters
assets/           photo, favicon, CV
```
