import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import peri from "@/assets/packet-peri-peri.png";
import cheese from "@/assets/packet-cheese.png";
import pudina from "@/assets/packet-pudina.png";
import creamOnion from "@/assets/packet-cream-onion.png";
import saltPepper from "@/assets/packet-salt-pepper.png";
import chatPata from "@/assets/packet-chat-pata.png";

import chili from "@/assets/chili.png";
import mint from "@/assets/mint-leaf.png";
import makhana from "@/assets/makhana-piece.png";

type Flavor = {
  id: string;
  name: string;
  tagline: string;
  packet: string;
  bg: string;
  fg: string;
  particle: string;
};

const flavors: Flavor[] = [
  {
    id: "peri",
    name: "Peri Peri",
    tagline: "Bold & Fiery",
    packet: peri,
    bg: "var(--flavor-peri)",
    fg: "#fff",
    particle: chili,
  },
  {
    id: "cheese",
    name: "Cheese",
    tagline: "Golden & Creamy",
    packet: cheese,
    bg: "var(--flavor-cheese)",
    fg: "#3a2a00",
    particle: makhana,
  },
  {
    id: "pudina",
    name: "Pudina",
    tagline: "Cool & Fresh",
    packet: pudina,
    bg: "var(--flavor-pudina)",
    fg: "#0e2a14",
    particle: mint,
  },
  {
    id: "creamonion",
    name: "Cream & Onion",
    tagline: "Smooth & Savoury",
    packet: creamOnion,
    bg: "var(--flavor-creamonion)",
    fg: "#fff",
    particle: makhana,
  },
  {
    id: "saltpepper",
    name: "Salt & Pepper",
    tagline: "Classic & Sharp",
    packet: saltPepper,
    bg: "var(--flavor-saltpepper)",
    fg: "#fff",
    particle: makhana,
  },
  {
    id: "chatpata",
    name: "Chat Pata",
    tagline: "Street-style Tangy",
    packet: chatPata,
    bg: "var(--flavor-chatpata)",
    fg: "#fff",
    particle: chili,
  },
];

export function FlavorExplosion() {
  const [active, setActive] = useState(0);

  // Auto Carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % flavors.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const flavor = flavors[active];

  return (
    <section id="flavors" className="relative h-screen">
      <div
        className="h-screen w-full overflow-hidden transition-colors duration-700"
        style={{
          backgroundColor: flavor.bg,
          color: flavor.fg,
        }}
      >
        {/* Floating particles */}
        {[...Array(14)].map((_, i) => (
          <motion.img
            key={`${flavor.id}-${i}`}
            src={flavor.particle}
            alt=""
            aria-hidden
            className="absolute pointer-events-none opacity-80"
            style={{
              width: 24 + (i % 5) * 18,
              top: `${(i * 41) % 95}%`,
              left: `${(i * 67) % 95}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 360],
              opacity: [0.4, 0.9, 0.4],
            }}
            transition={{
              duration: 6 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
          />
        ))}

        <div className="relative z-10 h-full grid md:grid-cols-2 items-center gap-8 px-6 md:px-16 max-w-7xl mx-auto">
          {/* Text */}
          <div>
            <p className="text-sm uppercase tracking-[0.4em] opacity-70 mb-4">
              Flavor {String(active + 1).padStart(2, "0")} /
              {" "}
              {String(flavors.length).padStart(2, "0")}
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={flavor.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-[14vw] md:text-[8vw] leading-[0.9] font-semibold">
                  {flavor.name}
                </h2>

                <p className="mt-4 text-xl md:text-2xl opacity-80 font-display italic">
                  {flavor.tagline}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Packet */}
          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={flavor.id}
                src={flavor.packet}
                alt={flavor.name}
                className="w-[55vw] md:w-[28vw] max-w-sm drop-packet"
                initial={{
                  opacity: 0,
                  y: 80,
                  rotate: -10,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -80,
                  rotate: 10,
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() =>
            setActive(
              (active - 1 + flavors.length) % flavors.length
            )
          }
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-4xl"
        >
          ←
        </button>

        <button
          onClick={() =>
            setActive((active + 1) % flavors.length)
          }
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-4xl"
        >
          →
        </button>

        {/* Progress Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {flavors.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setActive(i)}
              className="h-1.5 rounded-full transition-all duration-500"
              style={{
                width: i === active ? 32 : 10,
                backgroundColor:
                  i === active
                    ? flavor.fg
                    : `color-mix(in oklab, ${flavor.fg} 30%, transparent)`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}