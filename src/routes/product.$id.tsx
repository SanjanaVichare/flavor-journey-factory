import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Minus, Plus, ShoppingCart, Star, Zap } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ProductCard } from "@/components/site/ProductCard";
import { getProduct, products } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { useLenis } from "@/lib/use-lenis";

export const Route = createFileRoute("/product/$id")({
  head: () => ({ meta: [{ title: "Product · Samarth" }] }),
  component: ProductPage,
});

function ProductPage() {
  useLenis();
  const { id } = Route.useParams();
  const product = getProduct(id);
  const { add } = useCart();
  const navigate = Route.useNavigate();
  const [qty, setQty] = useState(1);
  const [active, setActive] = useState(0);

  const gallery = useMemo(
    () => (product ? [product.image, product.image, product.image, product.image] : []),
    [product],
  );
  const related = useMemo(
    () => (product ? products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4) : []),
    [product],
  );

  if (!product) {
    return (
      <main className="bg-cream text-ink min-h-screen">
        <Nav />
        <div className="pt-44 pb-24 text-center px-6">
          <h1 className="font-display text-5xl">Product not found</h1>
          <Link to="/shop" className="inline-block mt-8 bg-brand-green text-cream rounded-full px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em]">Back to Shop</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-cream text-ink min-h-screen">
      <Nav />
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
        <nav className="text-xs uppercase tracking-[0.2em] text-ink/50 mb-10">
          <Link to="/" className="hover:text-brand-green">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-brand-green">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="aspect-square rounded-[2rem] bg-gradient-to-br from-cream-deep to-cream grid place-items-center"
            >
              <img src={gallery[active]} alt={product.name} className="w-3/4 h-3/4 object-contain drop-packet" />
            </motion.div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {gallery.map((g, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={[
                    "aspect-square rounded-2xl bg-cream-deep/60 grid place-items-center transition-all",
                    active === i ? "ring-2 ring-brand-green" : "hover:bg-cream-deep",
                  ].join(" ")}
                  aria-label={`Image ${i + 1}`}
                >
                  <img src={g} alt="" className="w-3/4 h-3/4 object-contain" />
                </button>
              ))}
            </div>
          </div>

          <div>
            {product.badges.length > 0 && (
              <div className="flex gap-2 mb-5">
                {product.badges.map((b) => (
                  <span key={b} className="text-[10px] font-bold uppercase tracking-[0.2em] bg-brand-green/10 text-brand-green px-3 py-1 rounded-full">
                    {b}
                  </span>
                ))}
              </div>
            )}
            <h1 className="font-display text-5xl md:text-6xl leading-[1] text-ink">{product.name}</h1>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex gap-0.5 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-current" : "opacity-30"}`} aria-hidden />
                ))}
              </div>
              <span className="text-sm text-ink/60">{product.rating.toFixed(1)} · 124 reviews</span>
            </div>

            <p className="mt-6 text-ink/70 leading-relaxed">{product.description}</p>

            <p className="mt-8 font-display text-5xl text-ink">₹{product.price}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-ink/50 mt-1">Free shipping over ₹499</p>

            <div className="mt-8 flex items-center gap-4 flex-wrap">
              <div className="inline-flex items-center border border-ink/15 rounded-full overflow-hidden">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="h-12 w-12 grid place-items-center hover:bg-cream-deep transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="w-10 text-center font-semibold tabular-nums">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  className="h-12 w-12 grid place-items-center hover:bg-cream-deep transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => add({ id: product.id, name: product.name, price: product.price, image: product.image }, qty)}
                className="inline-flex items-center gap-2 bg-brand-green text-cream rounded-full px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-ink transition-colors"
              >
                <ShoppingCart className="h-4 w-4" /> Add to Cart
              </button>
              <button
                type="button"
                onClick={() => {
                  add({ id: product.id, name: product.name, price: product.price, image: product.image }, qty);
                  navigate({ to: "/cart" });
                }}
                className="inline-flex items-center gap-2 bg-gold text-ink rounded-full px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-ink hover:text-cream transition-colors"
              >
                <Zap className="h-4 w-4" /> Buy Now
              </button>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-card border border-ink/5 p-5">
                <h3 className="text-xs uppercase tracking-[0.2em] text-brand-green font-semibold">Nutrition (per 100g)</h3>
                <dl className="mt-4 space-y-2 text-sm">
                  {product.nutrition.map((n) => (
                    <div key={n.label} className="flex justify-between border-b border-ink/5 pb-2">
                      <dt className="text-ink/60">{n.label}</dt>
                      <dd className="font-semibold text-ink">{n.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="rounded-2xl bg-card border border-ink/5 p-5">
                <h3 className="text-xs uppercase tracking-[0.2em] text-brand-green font-semibold">Ingredients</h3>
                <ul className="mt-4 space-y-2 text-sm text-ink/70">
                  {product.ingredients.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-32">
            <h2 className="font-display text-4xl md:text-5xl text-ink mb-10">You may also love</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </main>
  );
}