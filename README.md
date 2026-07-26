# UT3DN — Spirit of Dnipro

Static website for the Ukrainian music radio station **UT3DN**.

## Deploy on Vercel

1. Push this folder to a GitHub repository (or import the folder directly).
2. In the [Vercel dashboard](https://vercel.com), create a new project and import the repo.
3. Framework Preset: **Other** (or leave blank).
4. Build Command: leave empty.
5. Output Directory: leave empty (or `.`).
6. Deploy.

Vercel will serve `index.html` automatically as a static site. No build step required.

### Alternative: CLI

```bash
npx vercel
```

## Local preview

Open `index.html` in a browser, or use any static server:

```bash
npx serve .
```

## Contents

- `index.html` — main page
- `styles.css` — styles
- `script.js` — mobile nav + scroll highlight

No dependencies. Pure HTML/CSS/JS.
