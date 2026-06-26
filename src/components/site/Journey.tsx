import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  { num: "01", title: "Born in the wetlands", body: "Hand-harvested fox nuts from Bihar's pristine wetlands — nature's original superfood.", emoji: "🌾" },
  { num: "02", title: "Roasted to perfection", body: "Slow-roasted in small batches, never fried. The crunch comes from craft, not oil.", emoji: "🔥" },
  { num: "03", title: "Seasoned with care", body: "Hand-tossed in spice blends sourced from across India — each flavor a tiny journey.", emoji: "✨" },
  { num: "04", title: "Sealed for snacking", body: "Locked in our heritage pouches so every bite tastes like the day it was made.", emoji: "📦" },
];

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="journey" ref={ref} className="relative bg-cream-deep py-32 md:py-36 grain">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-24">
          <p className="text-sm uppercase tracking-[0.4em] text-brand-green mb-4">The Journey</p>
          <h2 className="font-display text-5xl md:text-7xl font-semibold text-ink text-balance">
            From wetland to <em className="text-brand-green font-light">your craving</em>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-brand-green/20 -translate-x-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 top-0 w-px bg-brand-green -translate-x-1/2 origin-top"
          />

          <div className="space-y-32">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative grid md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`pl-20 md:pl-0 ${i % 2 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                  <span className="font-display text-7xl md:text-8xl text-brand-green/30 font-light">{s.num}</span>
                  <h3 className="font-display text-3xl md:text-4xl font-semibold text-ink mt-2">{s.title}</h3>
                  <p className="mt-4 text-ink/70 text-lg max-w-md md:inline-block">{s.body}</p>
                </div>
                <div className={`hidden md:flex items-center ${i % 2 ? "justify-end pr-16" : "justify-start pl-16"}`}>
                  <div className="w-48 h-48 rounded-full bg-cream flex items-center justify-center text-7xl shadow-soft">
                    {s.emoji}
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 top-8 w-4 h-4 rounded-full bg-brand-green border-4 border-cream-deep -translate-x-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}