# Rafeeq AI | رفيق AI

Premium Arabic-first landing page and product vision experience for **Rafeeq AI**, an AI-powered Digital Twin platform for Hajj and Umrah pilgrims.

## Product Story

Rafeeq AI begins before the pilgrimage. The platform trains pilgrims with interactive scenarios, creates a personalized digital twin, monitors predictive risk signals, and connects field teams with the right information when intervention is needed.

The site includes:

- Arabic RTL landing page
- Pilgrim mobile app mockups
- Pilgrim Readiness Score™ experience
- Smartwatch UI concepts
- Emergency response architecture
- Paramedic app concept
- Security and command-center dashboard
- Future vision and Vision 2030 alignment
- SEO metadata and static export configuration

## Run Locally

Install Node.js 20+ and npm, then run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run build
```

The app uses `output: "export"` in `next.config.mjs`. The static production site is generated in `out/`.

## GitHub Pages

1. Push the repository to GitHub.
2. In **Settings → Pages**, set the source to **GitHub Actions**.
3. Push to `main`.
4. The included workflow builds and publishes the static export automatically.

The included configuration automatically applies the correct `basePath` during GitHub Actions builds for project repositories such as `username.github.io/rafeeq-ai`. It leaves root domains and `username.github.io` repositories unchanged.

## Brand

The supplied Rafeeq AI identity artwork is stored at `public/rafeeq-brand.png`.

Founder: **Mariam Alharbi**
