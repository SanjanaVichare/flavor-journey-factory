import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Search, User } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { posts } from "@/lib/blog-posts";
import { useLenis } from "@/lib/use-lenis";

export const Route = createFileRoute("/blog/")({
  head: () => ({ meta: [{ title: "Journal · Samarth Makhana" }] }),
  component: BlogIndex,
});

function BlogIndex() {
  useLenis();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    [],
  );

  const featured = posts[0];
  const rest = useMemo(() => {
    return posts.slice(1).filter((p) => {
      if (cat !== "All" && p.category !== cat) return false;
      if (q && !p.title.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [q, cat]);

  return (
    <main className="bg-cream text-ink min-h-screen">
      <Nav />
      <PageHero
        eyebrow="The Journal"
        title={<>Stories from the <em className="text-brand-green font-light italic">snack drawer</em></>}
        description="Recipes, nutrition deep-dives, farm letters and the lifestyle around eating better."
      />

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="group block rounded-[2rem] overflow-hidden bg-card border border-ink/5 mb-16"
          >
            <div className="grid md:grid-cols-2">
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                <img src={featured.image} alt={featured.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Featured · {featured.category}</p>
                <h2 className="font-display text-3xl md:text-5xl leading-tight text-ink group-hover:text-brand-green transition-colors">{featured.title}</h2>
                <p className="mt-4 text-ink/65 leading-relaxed">{featured.excerpt}</p>
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.2em] text-ink/50">
                  <span className="inline-flex items-center gap-1.5"><User className="h-3 w-3" />{featured.author}</span>
                  <span className="inline-flex items-center gap-1.5"><Calendar className="h-3 w-3" />{featured.date}</span>
                  <span className="inline-flex items-center gap-1.5"><Clock className="h-3 w-3" />{featured.readingTime}</span>
                </div>
                <span className="mt-8 inline-flex w-fit items-center text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">Read article →</span>
              </div>
            </div>
          </Link>

          <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-10">
            <div className="flex flex-wrap gap-1.5">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCat(c)}
                  className={[
                    "px-4 py-2 rounded-full text-xs uppercase tracking-[0.15em] font-semibold transition-colors",
                    cat === c ? "bg-brand-green text-cream" : "bg-cream-deep/40 text-ink/70 hover:bg-cream-deep",
                  ].join(" ")}
                >
                  {c}
                </button>
              ))}
            </div>
            <label className="relative md:w-72 block">
              <span className="sr-only">Search articles</span>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/40" aria-hidden />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search articles…"
                className="w-full bg-cream-deep/40 rounded-full pl-11 pr-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30"
              />
            </label>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-3xl bg-card border border-ink/5 overflow-hidden hover:-translate-y-1 hover:shadow-[0_30px_60px_-40px_rgba(0,0,0,0.3)] transition-all"
              >
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="block aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </Link>
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{p.category}</p>
                  <h3 className="font-display text-2xl mt-3 leading-tight">
                    <Link to="/blog/$slug" params={{ slug: p.slug }} className="hover:text-brand-green transition-colors">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm text-ink/60 line-clamp-2">{p.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-ink/50">
                    <span>{p.author}</span>
                    <span className="inline-flex items-center gap-1.5"><Clock className="h-3 w-3" />{p.readingTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}