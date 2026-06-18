import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import peri from "@/assets/packet-peri-peri.png";
import cheese from "@/assets/packet-cheese.png";
import pudina from "@/assets/packet-pudina.png";
import creamOnion from "@/assets/packet-cream-onion.png";
import saltPepper from "@/assets/packet-salt-pepper.png";
import chatPata from "@/assets/packet-chat-pata.png";

const flavors = [
  { id: "peri", name: "Peri Peri", color: "var(--flavor-peri)", packet: peri, ing: ["African Bird's Eye Chili", "Lemon", "Garlic", "Sea Salt"] },
  { id: "cheese", name: "Cheese", color: "var(--flavor-cheese)", packet: cheese, ing: ["Aged Cheddar", "Whey", "Cream", "Sea Salt"] },
  { id: "pudina", name: "Pudina", color: "var(--flavor-pudina)", packet: pudina, ing: ["Fresh Mint", "Coriander", "Black Salt", "Lime"] },
  { id: "creamonion", name: "Cream & Onion", color: "var(--flavor-creamonion)", packet: creamOnion, ing: ["Sweet Onion", "Cream", "Herbs", "Black Pepper"] },
  { id: "saltpepper", name: "Salt & Pepper", color: "var(--flavor-saltpepper)", packet: saltPepper, ing: ["Himalayan Salt", "Black Pepper", "White Pepper", "Olive Oil"] },
  { id: "chatpata", name: "Chat Pata", color: "var(--flavor-chatpata)", packet: chatPata, ing: ["Chaat Masala", "Amchur", "Roasted Cumin", "Red Chili"] },
];

export function FlavorWheel() {
  const [active, setActive] = useState(0);
  const [rotation, setRotation] = useState(0);
  const f = flavors[active];

  const select = (i: number) => {
    setActive(i);
    setRotation(-(360 / flavors.length) * i);
  };

  return (
    <section id="wheel" className="relative bg-ink text-cream py-32 md:py-44 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-gold mb-4">Interactive</p>
          <h2 className="font-display text-5xl md:text-7xl font-semibold text-balance">
            Spin the <em className="text-gold font-light italic">flavor wheel</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* wheel */}
          <div className="relative aspect-square max-w-[500px] mx-auto w-full">
            <motion.div
              animate={{ rotate: rotation }}
              transition={{ type: "spring", stiffness: 60, damping: 14 }}
              className="absolute inset-0 rounded-full border border-cream/10"
            >
              {flavors.map((fl, i) => {
                const angle = (360 / flavors.length) * i;
                return (
                  <button
                    key={fl.id}
                    onClick={() => select(i)}
                    className="absolute left-1/2 top-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2"
                    style={{ transform: `translate(-50%,-50%) rotate(${angle}deg) translateY(-200px) rotate(-${angle}deg) rotate(-${rotation}deg)` }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="w-full h-full rounded-full flex items-center justify-center text-xs font-semibold uppercase tracking-wider text-cream cursor-pointer"
                      style={{
                        backgroundColor: fl.color,
                        boxShadow: i === active ? `0 0 0 4px var(--gold), 0 20px 40px ${fl.color}` : `0 10px 20px color-mix(in oklab, ${fl.color} 40%, transparent)`,
                      }}
                    >
                      {fl.name.split(" ")[0]}
                    </motion.div>
                  </button>
                );
              })}
            </motion.div>

            {/* center packet */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.img
                  key={f.id}
                  src={f.packet}
                  alt={f.name}
                  className="w-44 drop-packet"
                  initial={{ scale: 0.6, opacity: 0, rotate: -20 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0.6, opacity: 0, rotate: 20 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* details */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={f.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="font-display text-5xl md:text-6xl font-semibold" style={{ color: f.color }}>{f.name}</h3>
                <p className="text-cream/60 uppercase tracking-[0.3em] text-xs mt-4 mb-6">Crafted with</p>
                <ul className="space-y-3">
                  {f.ing.map((ing) => (
                    <li key={ing} className="flex items-center gap-3 text-lg border-b border-cream/10 pb-3">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: f.color }} />
                      {ing}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}