"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { PROJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Work we are proud of"
          subtitle="A snapshot of intelligent products we have designed, built and shipped."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.title}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-white/10 p-7 transition-all hover:-translate-y-1",
                "bg-gradient-to-br", p.glow
              )}
            >
              <div className="absolute inset-0 bg-black/55 transition-colors group-hover:bg-black/40" />
              <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                    {p.tag}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-white/70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <h3 className="mt-auto pt-12 font-display text-2xl font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/75">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
