# Zynx Portfolio — Kian Emmanuel P. Lorica

A modern, dark-themed developer portfolio built with **Vite + React**.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx / Navbar.css
│   │   ├── Footer.jsx / Footer.css
│   │   └── GlowBlobs.jsx
│   ├── pages/
│   │   ├── Home.jsx   / Home.css
│   │   ├── Projects.jsx / Projects.css
│   │   ├── Skills.jsx  / Skills.css
│   │   ├── Contact.jsx / Contact.css
│   │   └── Fun.jsx    / Fun.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Run Locally

### Prerequisites
- Node.js v18+ installed → https://nodejs.org

### Steps

```bash
# 1. Navigate into the project folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open **http://localhost:5173** in your browser.

---

## 🏗️ Build for Production

```bash
npm run build
```

This generates a `dist/` folder with the optimized static site.

To preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Deploy to GitHub Pages

### Step 1 — Create a GitHub repo
Go to https://github.com/new and create a new repo (e.g. `portfolio`).

### Step 2 — Push your code
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 3 — Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 4 — Add deploy script to package.json
Add this inside `"scripts"`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

### Step 5 — Deploy
```bash
npm run deploy
```

### Step 6 — Enable GitHub Pages
- Go to your repo → **Settings → Pages**
- Under **Source**, choose the `gh-pages` branch
- Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

> **Note:** The `vite.config.js` uses `base: './'` which ensures relative paths work on GitHub Pages.

---

## ▲ Deploy to Vercel (Easiest Option)

### Option A — Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

### Option B — Vercel Dashboard (No CLI needed)

1. Push your code to GitHub (see steps above)
2. Go to https://vercel.com → **New Project**
3. Import your GitHub repository
4. Vercel auto-detects Vite — click **Deploy**
5. Your site is live in ~30 seconds! 🚀

No extra config needed for Vercel — it handles everything automatically.

---

## ✏️ Customizing Your Portfolio

| What to change | Where |
|---|---|
| Your name / title | `src/pages/Home.jsx` |
| Project cards | `src/pages/Projects.jsx` → `PROJECTS` array |
| Skills & levels | `src/pages/Skills.jsx` → `SKILLS` array |
| Contact social links | `src/pages/Contact.jsx` → `SOCIALS` array |
| GitHub / LinkedIn URLs | `src/components/Footer.jsx` + Contact.jsx |
| Color theme | `src/index.css` → `:root` CSS variables |

---

## 🛠️ Tech Stack

- **Vite** — Lightning-fast build tool
- **React 18** — UI library
- **React Router v6** — Client-side routing (HashRouter for static hosting)
- **Font Awesome 6** — Icons (CDN)
- **Google Fonts** — Syne + DM Sans + DM Mono

---

## 📄 License

MIT — feel free to use and modify!
