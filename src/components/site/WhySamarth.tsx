import { motion } from "framer-motion";
import { Wheat, Leaf, Flame, Sparkles, HeartPulse, Award } from "lucide-react";

const benefits = [
  { icon: Wheat, title: "High Fiber", body: "Naturally rich in fiber for everyday digestion." },
  { icon: Leaf, title: "Gluten Friendly", body: "Made without wheat — kind to sensitive tummies." },
  { icon: Flame, title: "Roasted, Not Fried", body: "All the crunch, none of the oil." },
  { icon: Sparkles, title: "Rich In Nutrients", body: "Plant protein, antioxidants and minerals in every bite." },
  { icon: HeartPulse, title: "Healthy Snacking", body: "Designed to be the better default." },
  { icon: Award, title: "Premium Ingredients", body: "Hand-picked sourcing, no compromise." },
];

export function WhySamarth() {
  return (
    <section className="relative bg-cream-deep py-32 md:py-44">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <h2 className="font-display text-5xl md:text-7xl font-semibold text-ink max-w-2xl text-balance">
            Why <em className="text-brand-green font-bold italic">Samarth</em>
          </h2>
          <p className="text-ink/60 max-w-md">Snacking should feel good — before, during and after. Here's what makes our makhana different.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-brand-green/15">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="bg-cream-deep p-10 hover:bg-cream transition-colors duration-500 group"
            >
              <b.icon className="w-9 h-9 text-brand-green group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h3 className="font-display text-2xl font-semibold mt-6 text-ink">{b.title}</h3>
              <p className="mt-3 text-ink/60 leading-relaxed">{b.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}