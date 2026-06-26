import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import packet from "@/assets/test.1.jpg";
import makhana from "@/assets/makhana-piece.png";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.6]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const title = "India's Favorite Superfood Snack";

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-cream grain">
      {/* Floating makhana pieces */}
      {[...Array(12)].map((_, i) => (
        <motion.img
          key={i}
          src={makhana}
          alt=""
          aria-hidden
          className="absolute pointer-events-none opacity-70"
          style={{
            width: 30 + (i % 4) * 16,
            top: `${(i * 53) % 90}%`,
            left: `${(i * 37) % 95}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-32 pb-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-xs md:text-sm font-medium uppercase tracking-[0.4em] text-brand-green mb-6"
        >
          ✦ Roasted · Nutritious · Heritage ✦
        </motion.p>

        <h1 className="font-display text-[14vw] md:text-[8.5vw] leading-[0.9] font-semibold text-ink max-w-7xl text-balance">
          {title.split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em]"
            >
              {word === "Superfood" ? <em className="text-brand-green italic font-light">{word}</em> : word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-8 max-w-xl text-base md:text-lg text-ink/70"
        >
          Roasted makhana & handcrafted cookies made with taste, nutrition and tradition — from the wetlands of India to your everyday craving.
        </motion.p>

        <motion.div
          style={{ scale, y, opacity }}
          className="mt-10 relative"
        >
          <motion.img
            src={packet}
            alt="Samarth Makhana Peri Peri packet"
            className="w-[60vw] md:w-[28vw] max-w-md drop-packet"
            animate={{ rotate: [-2, 2, -2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}