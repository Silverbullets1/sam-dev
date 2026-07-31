"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 1500;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(100, ((now - start) / duration) * 100);
      setProgress(p);
      if (p < 100) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#06060f]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="loader-grid absolute inset-0 opacity-30" />
          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="text-3xl font-display font-bold tracking-tight text-gradient">
              SAM<span className="text-white">DEV</span>
            </div>
            <div className="h-[3px] w-56 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-blue transition-[width] duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="font-mono text-xs text-white/50">
              {Math.round(progress)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
