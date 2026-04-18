# Shrinivas R J — Portfolio

A modern, futuristic Full Stack Developer portfolio built with **React.js** and **Tailwind CSS**.

## ✨ Features

- 🌙 Dark / Light mode toggle (persisted in localStorage)
- 🎨 Gradient animated hero with particle effects
- 📱 Fully responsive — mobile-first design
- ✨ Scroll-triggered fade-in animations (IntersectionObserver)
- 📊 Animated skill progress bars
- 🗂 Project cards with hover glow effects
- 🕐 Timeline-style experience section
- 📬 Contact form (ready to wire up to EmailJS / Formspree)
- ⬇️ Resume download button

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| UI | React 18 |
| Styling | Tailwind CSS v3 |
| Fonts | Syne (display) + DM Sans (body) |
| Animations | CSS keyframes + IntersectionObserver |
| Build | Create React App |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm installed

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm start
```
App opens at **http://localhost:3000**

### 3. Build for production
```bash
npm run build
```
Output goes to the `/build` folder — ready to deploy on Vercel, Netlify, or any static host.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Sticky responsive nav with dark mode toggle
│   ├── Hero.jsx          # Animated hero with particles & orbs
│   ├── About.jsx         # About section with profile card
│   ├── Skills.jsx        # Animated skill bars + tool badges
│   ├── Projects.jsx      # Project cards with hover effects
│   ├── Experience.jsx    # Timeline-style work experience
│   ├── Education.jsx     # Education cards
│   ├── Contact.jsx       # Contact form + social links
│   ├── Footer.jsx        # Footer with social icons
│   └── ui.jsx            # Shared UI: SectionHeading, Section, icons
├── hooks/
│   ├── useDarkMode.js    # Dark mode state + localStorage persistence
│   └── useIntersection.js # IntersectionObserver hook for scroll animations
├── data/
│   └── portfolioData.js  # All content data (skills, projects, experience, etc.)
├── App.jsx               # Root component
├── index.js              # ReactDOM entry point
└── index.css             # Tailwind directives + global styles
```

---

## 🎨 Customisation Guide

### 1. Update your content
Edit **`src/data/portfolioData.js`** to change:
- Skills and proficiency levels
- Projects (title, description, tech stack, links)
- Work experience
- Education

### 2. Update personal info
- **Hero.jsx** — name, tagline, social links
- **About.jsx** — bio paragraphs, stats
- **Contact.jsx** — email, LinkedIn, GitHub URLs

### 3. Add your profile photo
In `About.jsx`, replace the emoji div with:
```jsx
<img
  src="/profile.jpg"
  alt="Shrinivas R J"
  className="w-full h-full object-cover"
/>
```
Place `profile.jpg` in the `public/` folder.

### 4. Link your resume
In `Hero.jsx`, update the resume href:
```jsx
<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" ...>
```
Place your `resume.pdf` in the `public/` folder.

### 5. Wire up the contact form
In `Contact.jsx`, replace the `setTimeout` in `handleSubmit` with a real service:

**Option A — EmailJS (free):**
```bash
npm install @emailjs/browser
```
```js
import emailjs from '@emailjs/browser';
emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY');
```

**Option B — Formspree:**
```js
await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

---

## 🌐 Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag the /build folder to netlify.com/drop
```

### GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d build"
npm run deploy
``````

---

## 📄 Licence
MIT — free to use and adapt for your own portfolio.
