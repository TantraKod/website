# TantraKod — Official Website

> **Building Modern Digital Solutions** — IT Solutions & Software Development company based in India, serving clients across India & Asia.

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.x-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-pink?style=flat-square)](https://www.framer.com/motion/)

---

## 🌏 About

Official public website for **TantraKod** — an emerging IT Solutions and Software Development company based in **India**, serving clients across India and Asia.

**Contact:** tantrakod.official@gmail.com  
**GitHub:** [github.com/TantraKod](https://github.com/TantraKod)  
**LinkedIn:** [linkedin.com/company/tantrakod](https://linkedin.com/company/tantrakod)

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + Vite 6 |
| Styling | TailwindCSS v4 (utility-first) |
| Animations | Framer Motion 12 |
| Icons | Lucide React |
| Fonts | Plus Jakarta Sans + Manrope (Google Fonts) |
| Deployment | Cloudflare Pages |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/TantraKod/website.git
cd website

# 2. Install dependencies
npm install

# 3. Copy environment variables template
cp .env.example .env
# Edit .env and fill in your values (GA4 ID, etc.)

# 4. Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
# Output → dist/
```

### Preview Build Locally

```bash
npm run preview
```

---

## 📁 Project Structure

```
website/
├── public/                  # Static assets (served as-is)
│   ├── logo.png             # Official TantraKod logo
│   ├── banner.png           # Official TantraKod banner
│   ├── favicon.ico/.svg     # Favicons
│   ├── site.webmanifest     # PWA manifest
│   ├── robots.txt           # SEO crawler rules
│   ├── sitemap.xml          # SEO sitemap
│   ├── _redirects           # Cloudflare Pages SPA routing
│   └── 404.html             # SPA fallback page
│
├── src/
│   ├── components/          # All page sections as React components
│   │   ├── Navbar.jsx       # Sticky navigation
│   │   ├── Hero.jsx         # Hero section
│   │   ├── TrustedBy.jsx    # Industry marquee
│   │   ├── About.jsx        # About section
│   │   ├── WhyChoose.jsx    # Why TantraKod
│   │   ├── Services.jsx     # Core services grid
│   │   ├── Products.jsx     # In-house products
│   │   ├── Industries.jsx   # Industries served
│   │   ├── Process.jsx      # Development process
│   │   ├── TechStack.jsx    # Technology stack
│   │   ├── Portfolio.jsx    # Project portfolio
│   │   ├── CaseStudies.jsx  # Detailed case studies
│   │   ├── OurFocus.jsx     # Core strengths (dark section)
│   │   ├── FAQ.jsx          # Frequently asked questions
│   │   ├── ContactCTA.jsx   # Contact section with form
│   │   ├── Footer.jsx       # Site footer
│   │   ├── LogoContainer.jsx # Reusable logo component
│   │   └── BackToTop.jsx    # Back-to-top button
│   │
│   ├── constants/
│   │   └── brand.js         # Official brand data (email, social links, etc.)
│   │
│   ├── App.jsx              # Root component / page layout
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles + design tokens
│
├── index.html               # Entry HTML with SEO meta tags
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies
├── .gitignore               # Git ignore rules
├── .env.example             # Environment variables template
└── README.md                # This file
```

---

## 🌐 Deployment — Cloudflare Pages

| Setting | Value |
|---------|-------|
| **Framework preset** | Vite |
| **Build command** | `npm run build` |
| **Output directory** | `dist` |
| **Node.js version** | 18 |
| **Environment variables** | See `.env.example` |

SPA routing is handled by `public/_redirects`:
```
/*    /index.html   200
```

---

## 🔍 SEO Configuration

Before going live, update the following in `index.html`:
1. Replace `https://www.tantrakod.com` with your real domain in all meta tags
2. Uncomment and configure the **Google Analytics 4** snippet (add your `G-XXXXXXXXXX` ID)
3. Uncomment and add your **Google Search Console** verification meta tag
4. Update `public/sitemap.xml` with the correct `<lastmod>` date

---

## 🔒 Security Notes

- No API keys, secrets, or credentials in this repository
- All environment variables use the `VITE_` prefix and must be set via `.env` (not committed)
- Contact form uses `mailto:` — no backend server or API keys required
- Form input is sanitized client-side before constructing the mailto URL

---

## 📜 License

Copyright © 2026 TantraKod. All rights reserved.

---

*Built with ❤️ in India*
