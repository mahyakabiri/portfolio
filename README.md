# Portfolio (Next.js + TypeScript)

- All content lives in `data/profile.ts`. Edit it to change name, projects, experience and contacts.
- `npm install && npm run dev` to run locally, `npm run build` for a static export in `out/` (deploy to Vercel, Netlify or GitHub Pages).
- `preview.html` is a single-file preview of the built page.
- Zero images, server-rendered HTML, ~1 kB page JS on top of the framework; fonts via `next/font` (self-hosted, no layout shift).

## Deploy

Pushing to `main` builds the static export and publishes it to GitHub Pages (`.github/workflows/deploy.yml`).
One-time setup: repo Settings → Pages → Source: **GitHub Actions**.
