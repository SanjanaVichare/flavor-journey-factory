import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { useCart } from "@/lib/cart-context";
import { useLenis } from "@/lib/use-lenis";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Cart · Samarth Makhana" }] }),
  component: CartPage,
});

function CartPage() {
  useLenis();
  const { items, setQty, remove, total, clear } = useCart();
  const shipping = total >= 499 || total === 0 ? 0 : 49;
  const grand = total + shipping;

  return (
    <main className="bg-cream text-ink min-h-screen">
      <Nav />
      <section className="pt-36 pb-24 max-w-6xl mx-auto px-6">
        <Link to="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink/60 hover:text-brand-green">
          <ArrowLeft className="h-3 w-3" /> Continue shopping
        </Link>
        <h1 className="mt-6 font-display text-5xl md:text-6xl">Your Cart</h1>

        {items.length === 0 ? (
          <div className="mt-20 rounded-[2rem] border border-ink/5 bg-card p-16 text-center">
            <ShoppingBag className="h-10 w-10 text-brand-green mx-auto" aria-hidden />
            <p className="mt-6 font-display text-3xl">Your cart is empty.</p>
            <p className="mt-2 text-ink/60">Looks like you haven't added anything yet — let's fix that.</p>
            <Link to="/shop" className="mt-8 inline-block bg-brand-green text-cream rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-ink transition-colors">
              Explore the Shop
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
            <div className="rounded-[2rem] bg-card border border-ink/5 divide-y divide-ink/5 overflow-hidden">
              <AnimatePresence initial={false}>
                {items.map((it) => (
                  <motion.div
                    key={it.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-5 md:p-6 flex items-center gap-5"
                  >
                    <div className="h-24 w-24 rounded-2xl bg-cream-deep grid place-items-center shrink-0">
                      <img src={it.image} alt={it.name} className="h-20 w-20 object-contain drop-packet" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-xl truncate">{it.name}</h3>
                      <p className="text-sm text-ink/60">₹{it.price} each</p>
                    </div>
                    <div className="inline-flex items-center border border-ink/15 rounded-full overflow-hidden">
                      <button type="button" onClick={() => setQty(it.id, it.qty - 1)} aria-label="Decrease" className="h-9 w-9 grid place-items-center hover:bg-cream-deep">
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-8 text-center font-semibold tabular-nums text-sm">{it.qty}</span>
                      <button type="button" onClick={() => setQty(it.id, it.qty + 1)} aria-label="Increase" className="h-9 w-9 grid place-items-center hover:bg-cream-deep">
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <p className="font-display text-xl w-20 text-right tabular-nums">₹{it.qty * it.price}</p>
                    <button
                      type="button"
                      onClick={() => remove(it.id)}
                      aria-label={`Remove ${it.name}`}
                      className="grid place-items-center h-9 w-9 rounded-full text-ink/40 hover:text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div className="p-5 flex justify-end">
                <button type="button" onClick={clear} className="text-xs uppercase tracking-[0.2em] text-ink/50 hover:text-red-600">
                  Clear cart
                </button>
              </div>
            </div>

            <aside className="rounded-[2rem] bg-card border border-ink/5 p-7 sticky top-24 shadow-[0_30px_60px_-50px_rgba(0,0,0,0.3)]">
              <h2 className="font-display text-2xl">Order Summary</h2>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between text-ink/70">
                  <dt>Subtotal</dt>
                  <dd className="tabular-nums">₹{total}</dd>
                </div>
                <div className="flex justify-between text-ink/70">
                  <dt>Shipping</dt>
                  <dd className="tabular-nums">{shipping === 0 ? "Free" : `₹${shipping}`}</dd>
                </div>
                <div className="border-t border-ink/10 pt-3 flex justify-between font-display text-2xl text-ink">
                  <dt>Total</dt>
                  <dd className="tabular-nums">₹{grand}</dd>
                </div>
              </dl>
              <button
                type="button"
                onClick={() => alert("Checkout coming soon — your cart is saved.")}
                className="mt-7 w-full bg-brand-green text-cream rounded-full py-3.5 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-ink transition-colors"
              >
                Checkout
              </button>
              <Link to="/shop" className="mt-3 block text-center text-xs uppercase tracking-[0.2em] text-ink/60 hover:text-brand-green">
                Continue shopping →
              </Link>
            </aside>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}