import { motion } from "framer-motion";
import peri from "@/assets/packet-peri-peri.png";
import pudina from "@/assets/packet-pudina.png";
import cheese from "@/assets/packet-cheese.png";

const floats = [
  { src: peri, top: "10%", left: "8%", size: 180, dur: 7 },
  { src: pudina, top: "60%", left: "82%", size: 220, dur: 9 },
  { src: cheese, top: "70%", left: "10%", size: 160, dur: 8 },
];

export function FinalCTA() {
  return (
    <section id="shop" className="relative bg-brand-green-deep text-cream py-40 md:py-56 overflow-hidden">
      {floats.map((f, i) => (
        <motion.img
          key={i}
          src={f.src}
          alt=""
          aria-hidden
          className="absolute drop-packet opacity-30 md:opacity-60 pointer-events-none"
          style={{ top: f.top, left: f.left, width: f.size }}
          animate={{ y: [0, -25, 0], rotate: [-5, 5, -5] }}
          transition={{ duration: f.dur, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.4em] text-gold mb-6"
        >
          ✦ Snack Smarter ✦
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-6xl md:text-9xl font-semibold leading-[0.95] text-balance"
        >
          Snack Smarter.<br /><em className="text-gold font-light italic">Live Better.</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-lg md:text-xl text-cream/70 max-w-xl mx-auto"
        >
          Premium roasted makhana & handcrafted cookies, crafted for every craving.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <a href="#" className="bg-gold text-ink font-semibold px-10 py-5 rounded-full uppercase tracking-widest text-sm hover:scale-105 transition-transform">
            Shop Now
          </a>
          <a href="#" className="border border-cream/30 text-cream font-semibold px-10 py-5 rounded-full uppercase tracking-widest text-sm hover:bg-cream hover:text-ink transition-colors">
            Contact Us
          </a>
        </motion.div>

        <p className="mt-24 text-xs uppercase tracking-[0.3em] text-cream/40">
          © {new Date().getFullYear()} Samarth Makhana — Made in India, with care.
        </p>
      </div>
    </section>
  );
}