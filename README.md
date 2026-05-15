# 🕯️ Horror Landing Page — Darkness & Light

An immersive, horror-themed landing page exploring the duality of darkness and light. Built with React 18 + Vite, featuring dynamic theme switching, scroll-triggered animations, glitch text effects, and a fully responsive design.

## ✨ Features

### Design & Visual
- Dark/Light theme toggle with complete visual transformation
- Glitch text effect on all hero titles (subtle chromatic aberration)
- Typewriter effect on page load
- Fog overlay with atmospheric drift animation
- Parallax scrolling on card and CTA sections
- Scroll-reveal animations (fade, slide, scale with stagger delays)
- Glassmorphism navbar with backdrop blur on scroll
- CTA buttons with animated sweep and glow effect
- Grayscale-to-color card hover transitions

### Accessibility
- WCAG 2.1 compliant with ARIA roles, labels, and landmarks
- Skip-to-content link for keyboard navigation
- Focus-visible outlines on all interactive elements
- prefers-reduced-motion support
- Semantic HTML5 with proper heading hierarchy
- Escape key closes mobile overlay

### Performance
- Vite for fast HMR and optimized production builds
- CSS-only animations (no heavy JS libraries)
- IntersectionObserver for efficient scroll-reveal

### Easter Eggs
- Hover over footer copyright text
- Hover over the Contact page hero title

## 📂 Project Structure

```
src/
├── assets/img/
├── components/
│   ├── Header/
│   ├── Footer/
│   └── Backtotop/
├── context/
│   └── ThemeContext.jsx
├── hooks/
│   ├── useScrollReveal.js
│   └── useTypewriter.js
├── pages/
│   ├── Home/
│   ├── About/
│   └── Contacts/
├── index.css
└── main.jsx
```

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI components |
| Vite | Build tool + dev server |
| React Router | Client-side routing |
| React Icons | Icon library |
| CSS3 | Animations, glassmorphism, glitch effects |
| Google Fonts | Jaro, Creepster, Roboto |

## 🚀 Getting Started

```bash
git clone https://github.com/joaosaraiva1999/HorrorLandingPage.git
cd HorrorLandingPage
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Color Palette

| Element | Dark Mode | Light Mode |
|---------|-----------|------------|
| Title text | `#D9D2D2` | `#2c2a2a` |
| Subtitle text | `#BFB7B7` | `#675f5f` |
| Section bg | `grey` | `#FFEDED` / `#f6f6f6` |
| Accent | `#8b2020` | `#c59d5f` |

## 📬 Contact

- Email: joaopedrolaurosaraiva@gmail.com
- GitHub: [joaosaraiva1999](https://github.com/joaosaraiva1999)
- LinkedIn: [João Saraiva](https://www.linkedin.com/in/jo%C3%A3o-saraiva-39a0b1296/)

## 📝 License

© 2026 João Saraiva — All Rights Reserved.
