import { motion } from "framer-motion";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  return (
    <section className="relative bg-cream py-24 md:py-32 grain overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.4em] text-brand-green mb-5"
        >
          ✦ The Samarth Letter ✦
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-5xl md:text-7xl font-semibold text-ink text-balance leading-[0.95]"
        >
          Stories, recipes & <em className="text-brand-green font-light italic">first-bite drops</em>
        </motion.h2>
        <p className="mt-6 text-ink/60 max-w-xl mx-auto">
          One thoughtful email a month. New flavors, kitchen ideas and the occasional letter from our farms.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email.includes("@")) setDone(true);
          }}
          className="mt-10 max-w-md mx-auto flex items-center gap-2 bg-card border border-ink/10 rounded-full p-1.5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.3)]"
        >
          <label htmlFor="hero-email" className="sr-only">Email</label>
          <input
            id="hero-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your best email"
            className="flex-1 px-5 py-3 bg-transparent text-sm text-ink placeholder:text-ink/40 focus:outline-none min-w-0"
          />
          <button
            type="submit"
            className="bg-brand-green text-cream rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-ink transition-colors"
          >
            Subscribe
          </button>
        </form>
        {done && <p className="mt-4 text-sm text-brand-green">You're in. Welcome ✦</p>}
      </div>
    </section>
  );
}