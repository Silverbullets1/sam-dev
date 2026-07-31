"use client";

import dynamic from "next/dynamic";

/**
 * 3D hero scene loaded client-side only to avoid SSR/window issues with Three.js.
 * Shows a lightweight gradient fallback while the WebGL scene mounts.
 */
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(168,85,247,0.25),transparent_60%)]" />
  ),
});

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 -z-0">
      <HeroScene />
    </div>
  );
}
