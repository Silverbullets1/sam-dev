// Shared TypeScript types for SAM DEV.

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  desc: string;
}

export interface ProjectItem {
  title: string;
  tag: string;
  desc: string;
  glow: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

export interface FaqItem {
  q: string;
  a: string;
}
