import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "The Peri Peri makhana is my afternoon ritual. Crunchy, fiery, and somehow still feels like a treat my nutritionist approves of.",
    name: "Anika R.",
    role: "Mumbai · Verified Buyer",
  },
  {
    quote:
      "Finally a healthy snack that doesn't taste like cardboard. The cookies are unreal — my kids think it's dessert.",
    name: "Rohit K.",
    role: "Bangalore · Verified Buyer",
  },
  {
    quote:
      "Beautiful packaging, honest ingredients. Samarth is the kind of Indian brand we've been waiting for.",
    name: "Meera S.",
    role: "Delhi · Verified Buyer",
  },
];

export function Testimonials() {
  return (
    <section className="bg-cream py-28 md:py-36 grain">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-brand-green mb-4">Word of Mouth</p>
          <h2 className="font-display text-5xl md:text-6xl font-semibold text-ink text-balance">
            Snackers who came back <em className="text-brand-green font-light italic">for seconds</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative bg-card rounded-3xl p-8 border border-ink/5 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-transform"
            >
              <div className="flex gap-1 mb-5 text-gold">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <blockquote className="font-display text-xl leading-snug text-ink">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <p className="font-semibold text-ink">{r.name}</p>
                <p className="text-ink/50 text-xs uppercase tracking-widest mt-1">{r.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}