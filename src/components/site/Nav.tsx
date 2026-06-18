import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 mix-blend-difference text-cream">
      <Link to="/" className="font-display text-2xl font-bold tracking-tight">
        Samarth<span className="text-gold">.</span>
      </Link>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
        <a href="#flavors" className="hover:text-gold transition">Flavors</a>
        <a href="#journey" className="hover:text-gold transition">Journey</a>
        <a href="#cookies" className="hover:text-gold transition">Cookies</a>
        <a href="#wheel" className="hover:text-gold transition">Explore</a>
      </nav>
      <a href="#shop" className="text-sm font-semibold uppercase tracking-widest border border-current rounded-full px-5 py-2 hover:bg-cream hover:text-ink transition">
        Shop
      </a>
    </header>
  );
}