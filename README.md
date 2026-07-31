# SAM DEV — Premium Animated 3D Landing Page

A production-ready, dark-futuristic AI company landing page built with:

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** (glassmorphism / cyberpunk theme)
- **Framer Motion** + **GSAP** (animations)
- **Three.js** + **React Three Fiber** + **Drei** + **Postprocessing** (3D hero with bloom)
- **Lenis** smooth scroll
- **shadcn-style UI** primitives + **Lucide React** icons

## Sections
Sticky nav · Hero (3D) · About · Services · Featured Projects · Features ·
Animated Counters · Testimonials · FAQ · Contact · Footer.

Extras: loading screen, custom cursor, scroll progress, back-to-top, parallax,
scroll-triggered reveals, responsive + accessible (reduced-motion aware).

## Local development
```bash
npm install
npm run dev      # http://localhost:3000
```

## Production build
```bash
npm run build
npm run start
```

## Deploy to Vercel
Push the repo to GitHub, then **Import** it in Vercel. No extra config needed —
`next.config.mjs` and `package.json` are already set for zero-config deployment.

## Notes
- The contact form is a front-end demo (shows a success state). Wire it to an
  API route or a service (e.g. Resend / Formspree) for real delivery.
- All branding, copy and visuals are original (reference site used for inspiration only).
