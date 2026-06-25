import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Leaf, Sparkles, Sprout, Users } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { useLenis } from "@/lib/use-lenis";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About · Samarth Makhana" }] }),
  component: AboutPage,
});

const timeline = [
  { year: "2019", title: "A kitchen experiment", body: "It started as a family recipe roasted on a stovetop in Darbhanga." },
  { year: "2021", title: "First farm partnership", body: "We partnered directly with 12 wetland families across Bihar." },
  { year: "2023", title: "Six signature flavors", body: "From Peri Peri to Chat Pata — a full flavor library was born." },
  { year: "2026", title: "Across India", body: "Reaching homes in every metro and quietly, the world." },
];

const values = [
  { Icon: Leaf, title: "Honest", body: "Real ingredients, transparent sourcing." },
  { Icon: Sprout, title: "Sustainable", body: "Wetland farming that gives back." },
  { Icon: Users, title: "Community", body: "Fair pricing, year-round work." },
  { Icon: Sparkles, title: "Crafted", body: "Slow-roasted, small batch, always." },
];

const team = [
  { name: "Samarth Jha", role: "Founder", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80" },
  { name: "Priya Sharma", role: "Head of Nutrition", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80" },
  { name: "Chef Karan", role: "Recipe Lead", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
  { name: "Meera Iyer", role: "Brand", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80" },
];

function AboutPage() {
  useLenis();
  return (
    <main className="bg-cream text-ink min-h-screen">
      <Nav />
      <PageHero
        eyebrow="Our Story"
        title={<>Rooted in soil, <em className="text-brand-green font-light italic">made with intent</em></>}
        description="A premium makhana house from Bihar — quietly building India's most thoughtful snack drawer, one packet at a time."
      />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
            alt="Wetland fields in Bihar"
            className="rounded-[2rem] aspect-[4/5] object-cover"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-green mb-4">Why we started</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">A snack drawer worth opening.</h2>
            <p className="mt-6 text-ink/70 leading-relaxed">
              We grew up eating makhana hand-roasted over open flame, dusted with ghee and salt. As cities got busier and snack drawers got sadder, we wanted to bring that memory — modernised, but never compromised — to every Indian kitchen.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-brand-green">Mission</p>
                <p className="mt-2 text-ink/80">Make better snacking effortless.</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-brand-green">Vision</p>
                <p className="mt-2 text-ink/80">India's favourite premium snack brand by 2030.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-cream-deep/50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-green text-center mb-3">Farm to Table</p>
          <h2 className="font-display text-4xl md:text-5xl text-center text-balance">A four-step craft</h2>
          <div className="mt-14 grid md:grid-cols-4 gap-5">
            {[
              { n: "01", t: "Harvest", b: "Hand-picked from Bihar's wetlands." },
              { n: "02", t: "Roast", b: "Slow-roasted in open pans, never fried." },
              { n: "03", t: "Season", b: "Layered with whole, real spices." },
              { n: "04", t: "Seal", b: "Packed fresh in nitrogen-flushed pouches." },
            ].map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-3xl bg-card border border-ink/5 p-7"
              >
                <p className="font-display text-5xl text-gold">{s.n}</p>
                <h3 className="font-display text-2xl mt-3">{s.t}</h3>
                <p className="mt-2 text-sm text-ink/60">{s.b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-green text-center mb-3">Our Journey</p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-16">From a kitchen to your shelf</h2>
          <ol className="relative border-l-2 border-brand-green/20 ml-3 space-y-12">
            {timeline.map((t, i) => (
              <motion.li
                key={t.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="pl-8 relative"
              >
                <span className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-brand-green ring-4 ring-cream" />
                <p className="text-xs uppercase tracking-[0.3em] text-gold">{t.year}</p>
                <h3 className="font-display text-2xl mt-1">{t.title}</h3>
                <p className="mt-2 text-ink/65 max-w-xl">{t.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-24 bg-cream-deep/50">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-green text-center mb-3">Our Values</p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-14">What we promise</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-3xl bg-card border border-ink/5 p-7 text-center"
              >
                <div className="mx-auto grid place-items-center h-12 w-12 rounded-2xl bg-brand-green/10 text-brand-green mb-4">
                  <v.Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-display text-xl">{v.title}</h3>
                <p className="mt-2 text-sm text-ink/60">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-green text-center mb-3">The Team</p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-14">Humans behind the crunch</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-cream-deep">
                  <img src={m.img} alt={m.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="font-display text-2xl mt-4">{m.name}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-ink/50 mt-1">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-cream-deep/50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Award className="h-8 w-8 text-gold mx-auto" aria-hidden />
          <h2 className="font-display text-4xl md:text-5xl mt-5">Certified, audited, trusted.</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {["FSSAI", "ISO 22000", "Gluten Free", "Vegetarian", "Made in India"].map((c) => (
              <span key={c} className="px-5 py-2.5 rounded-full bg-card border border-ink/10 text-sm font-semibold uppercase tracking-[0.15em]">
                {c}
              </span>
            ))}
          </div>
          <div className="mt-12 flex justify-center gap-3 flex-wrap">
            <Link to="/shop" className="bg-brand-green text-cream rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-ink transition-colors">Explore Collection</Link>
            <Link to="/contact" className="border border-ink/15 rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-ink hover:text-cream transition-colors">Get in touch</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}