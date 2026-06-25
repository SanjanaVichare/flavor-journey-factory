import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1505253468034-514d2507d914?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80",
];

export function InstagramGallery() {
  return (
    <section className="bg-cream-deep py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-brand-green mb-3">@samarthmakhana</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink text-balance">
              Live from our <em className="text-brand-green font-light italic">snack drawer</em>
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-ink hover:text-brand-green transition-colors"
          >
            <Instagram className="h-4 w-4" aria-hidden /> Follow us
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {images.map((src, i) => (
            <motion.a
              key={src}
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-cream"
            >
              <img
                src={src}
                alt="Samarth on Instagram"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors grid place-items-center">
                <Instagram className="h-6 w-6 text-cream opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}