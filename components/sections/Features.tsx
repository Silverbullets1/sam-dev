"use client";

import { motion } from "framer-motion";
import { Zap, Layers, MousePointerClick, Gauge, Accessibility, Rocket } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { FEATURES } from "@/lib/constants";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap, Layers, MousePointerClick, Gauge, Accessibility, Rocket,
};

export function Features() {
  return (
    <section id="features" className="section-pad relative">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Features"
          title="Engineered for performance & delight"
          subtitle="Every detail is tuned so your product feels fast, alive and trustworthy."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = ICONS[f.icon] ?? Zap;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className="glass flex gap-4 rounded-2xl p-6 transition-transform hover:scale-[1.02]"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 text-brand-cyan">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">{f.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{f.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
