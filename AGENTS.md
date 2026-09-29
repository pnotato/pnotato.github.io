# AGENTS.md

Personal portfolio site for Nicholas Chan, published to GitHub Pages at **nickchan.ca** (deploy writes `dist/CNAME` = `nickchan.ca`). Origin: `github.com/pnotato/pnotato.github.io`.

## Current repo state — read first

- Root is an **Astro 7** static site (Tailwind v4 via `@tailwindcss/vite`). It is a fresh, mostly blank scaffold; content is being rebuilt from scratch.
- `old-files/` — the complete previous Vite + React + TypeScript site (what `main` / HEAD `c74538a` contains). Gitignored, reference only; not live.
- `agent-components/` — self-contained SVG/HTML/CSS graphic sandbox to port into the redesign. Reference only.
- Do not refactor or delete `old-files/` or `agent-components/` as part of unrelated work.
- `.agents/research/` is a gitignored agent cache. Never commit it or quote it to the user.

## Working in the root Astro project

```
npm install
npm run dev        # astro dev server at http://localhost:4321
npm run build      # astro build -> dist/
npm run preview    # serve the last dist/
npm run check      # astro check (Astro + TypeScript diagnostics)
npm run deploy     # astro build && write dist/CNAME && gh-pages -d dist
```

- Source lives in `src/`: `pages/` (file-based routes), `layouts/`, `components/`, `styles/global.css` (Tailwind entry), `assets/` (imported/bundled assets), `consts.ts` (site metadata).
- `layouts/BaseLayout.astro` is the shared page template: it renders the document shell, `StarField`, `Navbar`, `SiteFrame`, and a `<main>` slot. Every page wraps its content in `<BaseLayout>` (no page-level `<main>`).
- The navbar's current-page label is derived from `Astro.url.pathname` via `pageName()` in `src/consts.ts`, so new routes update automatically.
- Import alias `@/*` maps to `src/*` (configured in `tsconfig.json`).
- Tailwind v4 is CSS-first: no `tailwind.config.js`. Add design tokens with `@theme` in `src/styles/global.css`.
- `public/` is served root-absolute (`/favicon.png`, matching `base: "/"`).

## Branch layout

- `main` (`c74538a`) = active line; its tree is the Vite site now living in `old-files/`.
- Remote branches are historical experiments: `v1` static HTML, `v2` Vite, `v3` Quartz blog, `v4` Astro (blog disabled). Do not copy from them without checking.
- Publish branch is `gh-pages` (built output), pushed by `gh-pages -d dist`.

## `agent-components/` (run from inside that folder; Node builtins only, no install)

- `node build-original-planets.mjs` and `node build-bar-planets.mjs` write colorways into `html/`.
- `node build-preview.mjs` regenerates `preview.html` from `svg/*.svg` + `html/`. Rerun it after editing any scene.
- `preview.html` is generated — never hand-edit.
- Preview locally: `python3 -m http.server` in `agent-components/`.
- Scenes are dependency-free: animation is pure CSS/SVG, no JavaScript.

## Running the old site from `old-files/`

```
cd old-files
npm install
npm run dev        # vite dev server
npm run build      # tsc && vite build; tsc is strict, unused locals fail the build
npm run preview    # serve the last dist/
npm run build && npm run deploy   # deploy does NOT build; always build first
```

- No lint/test/format scripts. Typecheck alone: `npx tsc --noEmit`.
- Global CSS lives in `styles/` (outside `src/`) and is imported once from `src/main.tsx` via `/styles/...`.
- Project data is JSON in `src/data/`, imported at build time and cast to a type; static assets under `public/assets/` are referenced root-absolute (`/assets/...`, matching `base: "/"`).
