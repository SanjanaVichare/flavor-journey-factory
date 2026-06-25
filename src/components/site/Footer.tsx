import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, Twitter, Mail } from "lucide-react";
import { useState } from "react";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About Us" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

const categories = [
  { to: "/shop?category=Makhana", label: "Roasted Makhana" },
  { to: "/shop?category=Cookies", label: "Cookies" },
  { to: "/shop", label: "Best Sellers" },
  { to: "/shop", label: "Gift Boxes" },
] as const;

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4 space-y-5">
          <Link to="/" className="font-display text-3xl font-bold">
            Samarth<span className="text-gold">.</span>
          </Link>
          <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
            Premium roasted makhana and handcrafted cookies. Crafted in India with taste, nutrition and tradition.
          </p>
          <div className="flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Youtube, label: "YouTube" },
              { Icon: Twitter, label: "Twitter" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid place-items-center h-10 w-10 rounded-full border border-cream/15 hover:bg-gold hover:text-ink hover:border-gold transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Explore</h3>
          <ul className="space-y-3 text-sm text-cream/70">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xs uppercase tracking-[0.3em] text-gold mb-5">Shop</h3>
          <ul className="space-y-3 text-sm text-cream/70">
            {categories.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4 space-y-5">
          <h3 className="text-xs uppercase tracking-[0.3em] text-gold">Stay In Touch</h3>
          <p className="text-sm text-cream/70">
            Subscribe for new flavor drops, recipes and stories from our wetlands.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email.includes("@")) setDone(true);
            }}
            className="flex items-center gap-2 border border-cream/15 rounded-full p-1.5 bg-cream/5 backdrop-blur"
          >
            <Mail className="h-4 w-4 ml-3 text-cream/60 shrink-0" aria-hidden />
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="flex-1 bg-transparent text-sm placeholder:text-cream/40 focus:outline-none min-w-0"
            />
            <button
              type="submit"
              className="text-xs uppercase tracking-[0.2em] bg-gold text-ink font-semibold rounded-full px-4 py-2 hover:bg-cream transition-colors"
            >
              Join
            </button>
          </form>
          {done && <p className="text-xs text-gold">Welcome to the family ✦</p>}
          <div className="text-sm text-cream/60 space-y-1 pt-3">
            <p>hello@samarthmakhana.in</p>
            <p>+91 98000 12345</p>
            <p>Darbhanga, Bihar · India</p>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-xs uppercase tracking-[0.2em] text-cream/40">
          <p>© {new Date().getFullYear()} Samarth Makhana</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms & Conditions</a>
            <a href="#" className="hover:text-gold">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
}