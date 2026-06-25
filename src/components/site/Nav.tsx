import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About Us" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Nav() {
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-cream/85 backdrop-blur-xl border-b border-ink/5 shadow-[0_4px_20px_-12px_rgba(0,0,0,0.15)]"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <Link to="/" className="font-display text-2xl font-bold tracking-tight text-ink">
          Samarth<span className="text-gold">.</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.to || (l.to !== "/" && pathname.startsWith(l.to));
            return (
              <Link
                key={l.to}
                to={l.to}
                className="relative px-4 py-2 text-sm font-medium uppercase tracking-[0.15em] text-ink/80 hover:text-brand-green transition-colors"
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-brand-green rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <Link
            to="/cart"
            aria-label={`Cart, ${count} items`}
            className="relative grid place-items-center h-10 w-10 rounded-full border border-ink/10 hover:border-brand-green hover:bg-brand-green/5 transition-colors"
          >
            <ShoppingCart className="h-4 w-4 text-ink" aria-hidden />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 grid place-items-center rounded-full bg-brand-green text-cream text-[10px] font-bold tabular-nums">
                {count > 99 ? "99+" : count}
              </span>
            )}
          </Link>
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center justify-center text-xs font-semibold uppercase tracking-[0.2em] bg-brand-green text-cream rounded-full px-5 py-2.5 hover:bg-ink transition-colors"
          >
            Shop Now
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid place-items-center h-10 w-10 rounded-full border border-ink/10 text-ink"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-cream border-b border-ink/10"
          >
            <nav aria-label="Mobile" className="flex flex-col px-6 py-4 gap-1">
              {links.map((l) => {
                const active = pathname === l.to || (l.to !== "/" && pathname.startsWith(l.to));
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    className={[
                      "py-3 text-sm uppercase tracking-[0.2em] font-medium border-b border-ink/5",
                      active ? "text-brand-green" : "text-ink/80",
                    ].join(" ")}
                  >
                    {l.label}
                  </Link>
                );
              })}
              <Link
                to="/shop"
                className="mt-3 text-center text-xs font-semibold uppercase tracking-[0.2em] bg-brand-green text-cream rounded-full px-5 py-3"
              >
                Shop Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}