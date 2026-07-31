"use client";

import { motion } from "framer-motion";
import { Target, Users, Cpu } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const PILLARS = [
  { icon: Target, title: "Outcome-driven", desc: "We start from the result you need, then engineer backwards." },
  { icon: Cpu, title: "AI-native", desc: "Intelligence is baked into every layer, not bolted on at the end." },
  { icon: Users, title: "Partnership", desc: "We embed with your team and ship like we own the outcome." },
];

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-tight">
        <SectionHeading
          eyebrow="About"
          title="We turn ambitious ideas into shipped intelligence"
          subtitle="SAM DEV is a product studio for the AI era — part research lab, part engineering team, fully focused on results."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group rounded-2xl p-7 transition-transform hover:-translate-y-1"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-purple to-brand-blue text-white shadow-glow">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-white/60">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
