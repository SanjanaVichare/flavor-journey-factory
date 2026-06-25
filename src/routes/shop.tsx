import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { ProductCard } from "@/components/site/ProductCard";
import { useLenis } from "@/lib/use-lenis";
import { categories, products, type Category } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [{ title: "Shop · Samarth Makhana" }],
  }),
  component: ShopPage,
});

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
] as const;

function ShopPage() {
  useLenis();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<Category>("All");
  const [max, setMax] = useState(300);
  const [sort, setSort] = useState<(typeof sortOptions)[number]["value"]>("featured");

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (cat !== "All" && p.category !== cat) return false;
      if (p.price > max) return false;
      if (q && !p.name.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [q, cat, max, sort]);

  return (
    <main className="bg-cream text-ink min-h-screen">
      <Nav />
      <PageHero
        eyebrow="The Shop"
        title={<>Every flavor, <em className="text-brand-green font-light italic">one shelf</em></>}
        description="Browse our entire range of roasted makhana and handcrafted cookies. Free delivery on orders over ₹499."
      />

      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-card border border-ink/5 p-5 md:p-6 mb-10 shadow-[0_30px_60px_-50px_rgba(0,0,0,0.3)] grid gap-4 lg:grid-cols-[1fr_auto_auto_auto] items-end">
            <label className="relative block">
              <span className="sr-only">Search products</span>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-ink/40" aria-hidden />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search flavors, cookies…"
                className="w-full bg-cream-deep/40 rounded-full pl-11 pr-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/30"
              />
            </label>
            <div className="flex gap-1.5 flex-wrap">
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
            <label className="flex flex-col gap-1.5 min-w-[180px]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-ink/60 flex items-center gap-1.5">
                <SlidersHorizontal className="h-3 w-3" /> Max ₹{max}
              </span>
              <input
                type="range"
                min={100}
                max={300}
                step={10}
                value={max}
                onChange={(e) => setMax(Number(e.target.value))}
                className="accent-brand-green"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-[10px] uppercase tracking-[0.2em] text-ink/60">Sort</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as typeof sort)}
                className="rounded-full bg-cream-deep/40 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] focus:outline-none focus:ring-2 focus:ring-brand-green/30"
              >
                {sortOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </label>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-display text-3xl text-ink">No matches</p>
              <p className="mt-2 text-ink/60 text-sm">Try clearing filters or searching something else.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}