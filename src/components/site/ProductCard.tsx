import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Eye, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { QuickViewDialog } from "./QuickViewDialog";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { add } = useCart();
  const [quick, setQuick] = useState(false);
  const [selectedSize, setSelectedSize] = useState<"100g" | "250g" | "500g">("100g");

  const sizeToImageKey = {
    "100g": "small",
    "250g": "medium",
    "500g": "large"
  } as const;

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.04 }}
        className="group relative rounded-3xl bg-card border border-ink/5 overflow-hidden flex flex-col hover:shadow-[0_40px_70px_-40px_rgba(0,0,0,0.35)] hover:-translate-y-1 transition-all duration-500"
      >
        {product.badges.length > 0 && (
          <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5">
            {product.badges.map((b) => (
              <span
                key={b}
                className="text-[10px] font-bold uppercase tracking-[0.2em] bg-brand-green text-cream px-3 py-1 rounded-full"
              >
                {b}
              </span>
            ))}
          </div>
        )}

        <Link
          to="/product/$id"
          params={{ id: product.id }}
          className="relative block aspect-[4/5] bg-gradient-to-br from-cream-deep to-cream overflow-hidden"
          aria-label={`View ${product.name}`}
        >
          <img
            src={product.images[sizeToImageKey[selectedSize]]}
            loading="lazy"
            className="absolute inset-0 m-auto w-3/4 h-3/4 object-contain drop-packet transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
          />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setQuick(true);
            }}
            className="absolute bottom-4 right-4 grid place-items-center h-10 w-10 rounded-full bg-cream/90 backdrop-blur text-ink opacity-0 group-hover:opacity-100 transition-opacity hover:bg-brand-green hover:text-cream"
            aria-label={`Quick view ${product.name}`}
          >
            <Eye className="h-4 w-4" />
          </button>
        </Link>

        <div className="flex flex-col flex-1 p-5">
          <div className="flex items-center gap-1 text-gold mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${i < Math.round(product.rating) ? "fill-current" : "opacity-30"}`}
                aria-hidden
              />
            ))}
            <span className="ml-1.5 text-[11px] text-ink/50 tabular-nums">{product.rating.toFixed(1)}</span>
          </div>
          <h3 className="font-display text-xl text-ink leading-tight">
            <Link to="/product/$id" params={{ id: product.id }} className="hover:text-brand-green transition-colors">
              {product.name}
            </Link>
          </h3>
          <p className="mt-2 text-sm text-ink/60 line-clamp-2">{product.short}</p>

          <div className="mt-4">
            {/* Size Buttons - Only for Makhana */}
            {product.category === "Makhana" && (
              <div className="flex gap-2 mb-4">
                {(["100g", "250g", "500g"] as const).map((size) => (
                  <button
                    key={size}
                    type="button"
                    onMouseEnter={() => setSelectedSize(size)}
                    className={`rounded-full border px-3 py-1 text-xs font-semibold transition
                      ${selectedSize === size
                        ? "bg-brand-green text-white border-brand-green"
                        : "border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between">
              <p className="font-display text-2xl text-ink">
                ₹{product.prices[selectedSize]}
              </p>

              <button
                type="button"
                onClick={() =>
                  add({
                    id: product.id,
                    name: product.name,
                    price: product.prices[selectedSize],
                    image: product.images[sizeToImageKey[selectedSize]],
                  })
                }
                className="inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-cream transition-colors hover:bg-ink"
              >
                <ShoppingCart className="h-3.5 w-3.5" />
                Add
              </button>
            </div>
          </div>
        </div>
      </motion.article>

      <QuickViewDialog product={product} open={quick} onOpenChange={setQuick} />
    </>
  );
}