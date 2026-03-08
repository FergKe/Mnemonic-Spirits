# Mnemonic Spirits

A beautifully crafted, immersive frontend portfolio project for a fictional distillery that bridges the gap between memory and flavor. Built with modern web technologies, this project showcases advanced UI/UX concepts, including micro-animations, scroll effects, and a premium "dark luxury" aesthetic.

![Mnemonic Spirits Hero Section](public/Hero_Image.png) *(Note: Ensure the hero image path matches your local setup)*

## 🌟 Key Features

- **Premium Dark Mode Aesthetic**: Designed with a curated, harmonious color palette featuring deep slate (`#2D2D30`), parchment (`#E5E1DA`), and luxurious gold (`#D4AF37`) accents.
- **Immersive Micro-Animations**: Built with Framer Motion to provide buttery-smooth page transitions, scroll-reveal effects, and interactive hover states that make the interface feel alive.
- **Modern Typography**: Carefully paired Serif and Sans-serif fonts to exude elegance and readability.
- **Custom CSS Magic**: Features a custom SVG noise/grain overlay, smooth gradients, and glassmorphism elements to add texture and depth to the UI.
- **Fully Responsive**: Implemented with a mobile-first approach ensuring a flawless experience across all devices.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Design System (Tailwind v4)

This project utilizes the new Tailwind CSS v4 `@theme` directive directly within `app/globals.css`. It features custom design tokens for a consistent brand identity:

- **Primary Background**: `#0A0A0B` (Deep Black)
- **Gold Accents**: `#D4AF37`
- **Parchment Text**: `#E5E1DA`
- **Slate Elements**: `#2D2D30`

## 📁 Project Structure

- `app/` - Next.js App Router pages and layouts (`page.tsx`, `layout.tsx`, `globals.css`)
- `components/` - Reusable UI components (`Header.tsx`, `Footer.tsx`, `AgeGate.tsx`)
- `hooks/` - Custom React hooks (`use-mobile.ts`)
- `public/` - Static assets and images

## 👨‍💻 About This Project

This project was built as a frontend portfolio piece to demonstrate proficiency in React, Next.js, and modern CSS techniques. It focuses heavily on design aesthetics to create a "wow" factor, proving that web applications can be both performant and deeply immersive.

---

*Enjoy exploring the archives of the soul.* 🥃
