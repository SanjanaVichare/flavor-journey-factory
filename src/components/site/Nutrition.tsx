import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toString());
  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 2, ease: [0.16, 1, 0.3, 1] });
      return () => controls.stop();
    }
  }, [inView, mv, to]);
  return <span ref={ref}><motion.span>{rounded}</motion.span>{suffix}</span>;
}

const stats = [
  { value: 5, suffix: "g+", label: "Protein", note: "per serving" },
  { value: 100, suffix: "%", label: "Taste", note: "no compromise" },
  { value: 0, suffix: "%", label: "Guilt", note: "roasted, never fried" },
];

export function Nutrition() {
  return (
    <section className="relative bg-cream py-32 md:py-48 grain">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-brand-green mb-4">The Numbers</p>
        <h2 className="font-display text-5xl md:text-7xl font-semibold text-ink text-balance max-w-3xl mx-auto">
          Light · Crunchy · <em className="text-brand-green font-light italic">Nutritious</em>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="border-t border-brand-green/20 pt-8"
            >
              <div className="font-dm-serif text-[18vw] md:text-[10vw] leading-none font-semibold text-brand-green tabular-nums">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="font-display text-3xl mt-2 text-ink">{s.label}</p>
              <p className="text-sm uppercase tracking-widest text-ink/50 mt-2">{s.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}