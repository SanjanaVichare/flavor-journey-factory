import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import cookie from "@/assets/cookie-hero.png";

export function Cookies() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1.1, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section id="cookies" ref={ref} className="relative bg-flavor-cookie text-cream py-32 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-gold mb-4">Handcrafted Cookies</p>
          <h2 className="font-display text-6xl md:text-8xl font-semibold leading-[0.9] text-balance">
            Cookies that <em className="text-gold font-light italic">crumble right</em>.
          </h2>
          <p className="mt-6 text-lg text-cream/70 max-w-md">
            Baked with makhana, real butter and no shortcuts. Two recipes — full sugar, or sugar-free for the everyday.
          </p>

          <div className="mt-10 flex gap-4">
            {[
              { name: "Classic", swatch: "bg-flavor-cookie border-gold" },
              { name: "Sugar Free", swatch: "bg-flavor-sugarfree" },
            ].map((v) => (
              <div key={v.name} className="border border-cream/20 rounded-2xl p-5 flex-1">
                <div className={`w-6 h-6 rounded-full ${v.swatch} border-2 mb-3`} />
                <p className="font-display text-2xl">{v.name}</p>
                <p className="text-xs uppercase tracking-widest text-cream/50 mt-1">Cookies</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div style={{ scale, rotate }} className="flex justify-center">
          <img src={cookie} alt="Stack of handcrafted cookies" className="w-full max-w-md drop-packet" />
        </motion.div>
      </div>
    </section>
  );
}