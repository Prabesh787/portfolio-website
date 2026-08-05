# Prabesh Bhattarai — Portfolio

Personal portfolio site of Prabesh Bhattarai, a backend developer working with Java, Spring Boot, and Node.js. A React single-page app with animated sections for projects, skills, experience, and a personal photo gallery.

**Live:** _add your deployed URL here_ · **Repo:** https://github.com/Prabesh787/portfolio-website

## Highlights

- **Six routes** — Home, About, Projects, Skills, Contact, Gallery (`react-router-dom`)
- **Dark / light mode** — class-based Tailwind theming, persisted to `localStorage` and applied before first paint (no flash)
- **Motion throughout** — Framer Motion page transitions, staggered reveals, and a typewriter hero
- **Filterable projects** — category filter (web / mobile / backend) driven by a plain data file
- **Photo gallery** — events grouped into albums with a lightbox modal
- **Content as data** — projects, skills, socials, and gallery live in `src/data/`; updating them needs no component edits

## Tech Stack

React 18 · Vite 5 · Tailwind CSS 3 · Framer Motion · React Router 6 · Lucide Icons

## Getting Started

Requires Node.js 18+.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Project Structure

```
src/
├── app/          # entry point, App shell, route definitions
├── assets/       # images, gallery photos, resume PDF
├── components/   # common/ (Navbar, Footer, Button), layout/, ui/ (Card, Modal, Badge)
├── data/         # projects.js, skills.js, socials.js, newGallery.js
├── hooks/        # useTheme, useScrollToTop
├── pages/        # Home, About, Projects, Skills, Contact, GalleryPage
├── styles/       # shared Framer Motion variants
└── utils/        # constants and helpers
```

## Making It Yours

| What | Where |
| --- | --- |
| Name, bio, role | `src/pages/Home/Hero.jsx`, `src/pages/About/About.jsx` |
| Work / education timeline | `src/pages/About/Timeline.jsx` |
| Projects | `src/data/projects.js` |
| Skills | `src/data/skills.js` |
| Social links | `src/data/socials.js` |
| Site title and nav | `src/utils/constants.js`, `index.html` |
| Gallery albums | `src/data/newGallery.js` |
| Resume | replace `src/assets/resume/cv.pdf` |
| Theme colors | `tailwind.config.js` (`primary` scale) |

See [SETUP.md](SETUP.md) for a step-by-step customization checklist.

> **Note:** the contact form is UI-only — it shows a confirmation alert on submit. Wire it to a backend or a service like Formspree before going live.

## License

MIT
