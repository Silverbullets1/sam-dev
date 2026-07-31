// Centralized site constants for SAM DEV.

export const SITE = {
  name: "SAM DEV",
  shortName: "SAM",
  tagline: "Building the Future with AI",
  description:
    "We create intelligent AI products, automation systems, websites, APIs, and next-generation digital experiences.",
  url: "https://sam-dev.vercel.app",
  email: "hello@samdev.ai",
  social: {
    github: "https://github.com/sam-dev",
    twitter: "https://twitter.com/samdev",
    linkedin: "https://linkedin.com/company/samdev",
  },
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
  {
    icon: "Sparkles",
    title: "AI Product Design",
    desc: "End-to-end intelligent products — from model selection to polished UX that users love.",
  },
  {
    icon: "Bot",
    title: "Automation Systems",
    desc: "Workflows, agents and pipelines that remove the busywork and scale your operations.",
  },
  {
    icon: "Globe",
    title: "Web Experiences",
    desc: "Fast, animated, conversion-focused websites engineered for performance and delight.",
  },
  {
    icon: "Code2",
    title: "APIs & Platforms",
    desc: "Robust, well-documented APIs and platforms built to handle real production load.",
  },
  {
    icon: "Database",
    title: "Data & Insights",
    desc: "Pipelines and dashboards that turn raw data into decisions you can act on.",
  },
  {
    icon: "ShieldCheck",
    title: "Security & Trust",
    desc: "Secure-by-default architecture with audits, monitoring and compliance baked in.",
  },
] as const;

export const PROJECTS = [
  {
    title: "Nova Vision",
    tag: "Computer Vision",
    desc: "Real-time visual intelligence for retail and logistics with sub-100ms inference.",
    glow: "from-brand-purple/40 to-brand-cyan/30",
  },
  {
    title: "Atlas API",
    tag: "Platform",
    desc: "A unified inference gateway serving 40M requests/day with auto-scaling.",
    glow: "from-brand-blue/40 to-brand-purple/30",
  },
  {
    title: "Echo Voice",
    tag: "Conversational AI",
    desc: "Low-latency voice agents with natural turn-taking across 30 languages.",
    glow: "from-brand-cyan/40 to-brand-blue/30",
  },
] as const;

export const FEATURES = [
  { icon: "Zap", title: "Lightning Fast", desc: "Edge-rendered, optimized bundles and Lighthouse 95+ by design." },
  { icon: "Layers", title: "Composable", desc: "Modular components and hooks you can remix for any product." },
  { icon: "MousePointerClick", title: "Micro-interactions", desc: "Delightful animations that respond to every gesture." },
  { icon: "Gauge", title: "Performance", desc: "Lazy loading, dynamic imports and zero layout shift." },
  { icon: "Accessibility", title: "Accessible", desc: "WCAG-minded markup, focus states and reduced-motion support." },
  { icon: "Rocket", title: "Deploy Anywhere", desc: "One command to Vercel, GitHub Pages or your own infra." },
] as const;

export const STATS = [
  { value: 120, suffix: "+", label: "Products Shipped" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 40, suffix: "M", label: "Daily Requests" },
  { value: 24, suffix: "/7", label: "Global Support" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Aria Chen",
    role: "CTO, Lumen",
    quote:
      "SAM DEV turned our vague AI ambition into a shipped product in six weeks. The quality is unreal.",
  },
  {
    name: "Marcus Reyes",
    role: "Founder, Drift",
    quote:
      "Best engineering partner we have worked with. Pixel-perfect, fast, and genuinely strategic.",
  },
  {
    name: "Priya Nair",
    role: "VP Product, Vela",
    quote:
      "They sweat the details others miss. Our conversion rate jumped 38% after the rebuild.",
  },
] as const;

export const FAQS = [
  {
    q: "What kind of AI products do you build?",
    a: "Anything from chat agents and recommendation engines to computer-vision and voice systems — full product lifecycle, not just a demo.",
  },
  {
    q: "How fast can you ship?",
    a: "Most landing products go live in 1–2 weeks. Larger platforms follow a phased roadmap we agree on upfront.",
  },
  {
    q: "Do you handle deployment and DevOps?",
    a: "Yes. We ship to Vercel, AWS or your infra, with CI/CD, monitoring and rollback from day one.",
  },
  {
    q: "Can you work with our existing stack?",
    a: "Always. We plug into your repos, frameworks and conventions rather than rewriting everything.",
  },
  {
    q: "What does pricing look like?",
    a: "Fixed-scope quotes for defined work, or monthly retainers for ongoing product velocity. No surprises.",
  },
] as const;
