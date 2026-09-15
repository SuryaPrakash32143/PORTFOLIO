# Surya Prakash — AI/ML Engineer Portfolio

A personal portfolio website built with **React** and **Vite**, showcasing projects, skills, and experience in AI/ML and Data Science.

🔗 **Live site:** [https://suryaprakash32143.github.io/PORTFOLIO/](https://suryaprakash32143.github.io/PORTFOLIO/)

---

## ✨ Features

- **Hero** — animated typing effect with role rotation (AI/ML Engineer, Data Scientist, etc.)
- **About** — background, education, and focus areas
- **Projects** — featured work showcase
- **Contact** — email, phone, LinkedIn, and GitHub links
- **Responsive design** — works on desktop & mobile

## 🛠️ Tech Stack

- [React](https://react.dev) 19
- [Vite](https://vitejs.dev) 8
- [oxlint](https://oxc.rs) for linting
- [EmailJS](https://www.emailjs.com) for contact form

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## 🔨 Deployment

This project auto-deploys to **GitHub Pages** via a [GitHub Actions workflow](.github/workflows/deploy.yml) on every push to `main`.

## 📌 Structure

```
portfolio/
├── .github/workflows/   # CI/CD deployment
├── public/              # Static assets (favicon)
├── src/
│   ├── components/      # React components + styles
│   ├── App.jsx          # Root component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML entry
├── vite.config.js       # Vite config (base: /PORTFOLIO/)
└── package.json
```

---

Made by [Surya Prakash](https://github.com/SuryaPrakash32143).