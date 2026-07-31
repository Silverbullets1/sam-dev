"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { HeroCanvas } from "@/components/three/HeroCanvas";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <HeroCanvas />

      {/* aurora + grid overlays */}
      <div className="pointer-events-none absolute inset-0 bg-aurora opacity-60" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.5]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="container-tight relative z-10">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-brand-cyan"
          >
            <span className="h-2 w-2 animate-pulse-glow rounded-full bg-brand-cyan" />
            AI Studio · Automation · Digital Experiences
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white text-glow sm:text-6xl md:text-7xl"
          >
            Building the <span className="text-gradient">Future</span> with AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-base text-white/65 md:text-lg"
          >
            {SITE.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button asChild size="lg">
              <a href="#projects">
                Explore <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">
                <MessageCircle className="h-4 w-4" /> Contact
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/40"
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1">
          <div className="h-2 w-1 animate-float rounded-full bg-white/60" />
        </div>
      </motion.div>
    </section>
  );
}
