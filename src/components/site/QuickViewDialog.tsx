import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Link } from "@tanstack/react-router";
import { ShoppingCart, Star } from "lucide-react";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

export function QuickViewDialog({
  product,
  open,
  onOpenChange,
}: {
  product: Product;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const { add } = useCart();
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-cream border-ink/10 rounded-3xl">
        <DialogHeader>
          <DialogTitle className="sr-only">{product.name}</DialogTitle>
          <DialogDescription className="sr-only">{product.short}</DialogDescription>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-cream-deep to-cream grid place-items-center">
            <img src={product.image} alt={product.name} className="w-3/4 h-3/4 object-contain drop-packet" />
          </div>
          <div>
            <div className="flex items-center gap-1 text-gold mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-3.5 w-3.5 ${i < Math.round(product.rating) ? "fill-current" : "opacity-30"}`} aria-hidden />
              ))}
            </div>
            <h3 className="font-display text-3xl text-ink">{product.name}</h3>
            <p className="mt-3 text-ink/70 text-sm leading-relaxed">{product.description}</p>
            <p className="mt-5 font-display text-3xl text-ink">₹{product.price}</p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <button
                type="button"
                onClick={() => {
                  add({ id: product.id, name: product.name, price: product.price, image: product.image });
                  onOpenChange(false);
                }}
                className="inline-flex items-center gap-2 bg-brand-green text-cream rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-ink transition-colors"
              >
                <ShoppingCart className="h-4 w-4" /> Add to Cart
              </button>
              <Link
                to="/product/$id"
                params={{ id: product.id }}
                onClick={() => onOpenChange(false)}
                className="inline-flex items-center justify-center border border-ink/20 text-ink rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-ink hover:text-cream transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}