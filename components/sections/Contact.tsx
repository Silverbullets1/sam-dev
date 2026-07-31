"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/constants";

export function Contact() {
  const [sent, setSent] = useState(false);

  // Client-side only demo submit (no backend wired). Swap for your API route.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="container-tight max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something extraordinary"
          subtitle="Tell us about your product. We usually reply within one business day."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2 space-y-5">
            <a href={`mailto:${SITE.email}`} className="glass flex items-center gap-3 rounded-2xl p-5 transition-colors hover:bg-white/10">
              <Mail className="h-5 w-5 text-brand-cyan" />
              <div>
                <div className="text-xs text-white/50">Email</div>
                <div className="text-sm text-white">{SITE.email}</div>
              </div>
            </a>
            <div className="glass flex items-center gap-3 rounded-2xl p-5">
              <MapPin className="h-5 w-5 text-brand-cyan" />
              <div>
                <div className="text-xs text-white/50">Studio</div>
                <div className="text-sm text-white">Remote · Worldwide</div>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass space-y-4 rounded-3xl p-7 md:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Input placeholder="Your name" required aria-label="Name" />
              <Input type="email" placeholder="Email" required aria-label="Email" />
            </div>
            <Input placeholder="Subject" aria-label="Subject" />
            <Textarea placeholder="Tell us about your project…" required aria-label="Message" />
            <Button type="submit" size="lg" className="w-full">
              {sent ? "Message sent ✓" : <>Send message <Send className="h-4 w-4" /></>}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
