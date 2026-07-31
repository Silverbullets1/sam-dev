"use client";

import { Sparkles, Github, Twitter, Linkedin } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/10 px-6 py-12">
      <div className="container-tight">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2 font-display text-lg font-bold text-white">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-purple to-brand-blue text-white shadow-glow">
              <Sparkles className="h-4 w-4" />
            </span>
            {SITE.name}
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/60">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={SITE.social.github} aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-lg glass text-white/70 transition-colors hover:text-white">
              <Github className="h-4 w-4" />
            </a>
            <a href={SITE.social.twitter} aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-lg glass text-white/70 transition-colors hover:text-white">
              <Twitter className="h-4 w-4" />
            </a>
            <a href={SITE.social.linkedin} aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-lg glass text-white/70 transition-colors hover:text-white">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/40 sm:flex-row">
          <span>© {year} {SITE.name}. All rights reserved.</span>
          <span>Built with Next.js · Three.js · Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}
