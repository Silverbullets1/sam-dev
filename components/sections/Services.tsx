"use client";

import { motion } from "framer-motion";
import { Sparkles, Bot, Globe, Code2, Database, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { SERVICES } from "@/lib/constants";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles, Bot, Globe, Code2, Database, ShieldCheck,
};

export function Services() {
  return (
    <section id="services" className="section-pad relative">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to build with AI"
          subtitle="From first concept to production scale, we cover the full stack of intelligent product development."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon] ?? Sparkles;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="glass relative overflow-hidden rounded-2xl p-7 transition-all hover:shadow-glow"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-purple/20 blur-2xl" />
                <Icon className="h-9 w-9 text-brand-cyan" />
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-white/60">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
