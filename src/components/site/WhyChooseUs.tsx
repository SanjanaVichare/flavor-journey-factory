import { motion } from "framer-motion";
import { Leaf, Flame, Heart, ShieldCheck, Award, Wheat } from "lucide-react";

const reasons = [
  { Icon: Flame, title: "Roasted, never fried", body: "Crunch comes from craft, not deep oil baths." },
  { Icon: Leaf, title: "Honest ingredients", body: "Whole foods, real spices, zero shortcuts." },
  { Icon: Heart, title: "Made with care", body: "Small-batch recipes perfected over generations." },
  { Icon: ShieldCheck, title: "FSSAI certified", body: "Audited kitchens, transparent supply chain." },
  { Icon: Wheat, title: "Naturally gluten-free", body: "Makhana is plant-based, light and wholesome." },
  { Icon: Award, title: "Heritage roots", body: "Direct partnership with Bihar's wetland farms." },
];

export function WhyChooseUs() {
  return (
    <section className="bg-cream py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-brand-green mb-4">
            <span className="font-normal">Why </span>
            <span className="font-bold">Samarth</span>
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-semibold text-ink text-balance">
            Six reasons your snack drawer needs us
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-3xl bg-card border border-ink/5 p-8 hover:border-brand-green/40 hover:shadow-[0_30px_60px_-40px_rgba(0,0,0,0.3)] transition-all"
            >
              <div className="grid place-items-center h-12 w-12 rounded-2xl bg-brand-green/10 text-brand-green mb-5 group-hover:bg-brand-green group-hover:text-cream transition-colors">
                <r.Icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="font-display text-2xl text-ink">{r.title}</h3>
              <p className="mt-3 text-ink/60 text-sm leading-relaxed">{r.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}