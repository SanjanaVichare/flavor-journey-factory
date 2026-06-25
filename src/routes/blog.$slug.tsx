import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Facebook, Link as LinkIcon, Twitter, User } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { posts } from "@/lib/blog-posts";
import { useLenis } from "@/lib/use-lenis";

export const Route = createFileRoute("/blog/$slug")({
  head: () => ({ meta: [{ title: "Article · Samarth" }] }),
  component: BlogDetail,
});

function BlogDetail() {
  useLenis();
  const { slug } = Route.useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="bg-cream text-ink min-h-screen">
        <Nav />
        <div className="pt-44 pb-24 text-center px-6">
          <h1 className="font-display text-5xl">Article not found</h1>
          <Link to="/blog" className="inline-block mt-8 bg-brand-green text-cream rounded-full px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em]">Back to Journal</Link>
        </div>
        <Footer />
      </main>
    );
  }

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="bg-cream text-ink min-h-screen">
      <Nav />

      <article>
        <header className="pt-36 pb-12 max-w-3xl mx-auto px-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ink/60 hover:text-brand-green">
            <ArrowLeft className="h-3 w-3" /> Back to Journal
          </Link>
          <p className="mt-8 text-xs uppercase tracking-[0.3em] text-gold">{post.category}</p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-3 font-display text-5xl md:text-6xl leading-[1.05] text-balance"
          >
            {post.title}
          </motion.h1>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.2em] text-ink/50">
            <span className="inline-flex items-center gap-1.5"><User className="h-3 w-3" />{post.author}</span>
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-3 w-3" />{post.date}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-3 w-3" />{post.readingTime}</span>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-6">
          <img src={post.image} alt={post.title} className="rounded-[2rem] aspect-[16/9] w-full object-cover" />
        </div>

        <div className="max-w-3xl mx-auto px-6 py-16 space-y-6 text-lg leading-relaxed text-ink/80 font-display">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          <div className="not-prose pt-8 border-t border-ink/10 flex items-center gap-3">
            <span className="text-xs uppercase tracking-[0.2em] text-ink/60">Share</span>
            {[Twitter, Facebook, LinkIcon].map((Icon, i) => (
              <button
                key={i}
                type="button"
                onClick={() => navigator.clipboard?.writeText(window.location.href)}
                aria-label="Share"
                className="grid place-items-center h-9 w-9 rounded-full border border-ink/10 hover:border-brand-green hover:text-brand-green transition-colors"
              >
                <Icon className="h-3.5 w-3.5" />
              </button>
            ))}
          </div>
        </div>
      </article>

      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="font-display text-4xl md:text-5xl text-ink mb-10">Keep reading</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group rounded-3xl bg-card border border-ink/5 overflow-hidden hover:-translate-y-1 transition-transform"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">{p.category}</p>
                <h3 className="font-display text-xl mt-2 leading-tight group-hover:text-brand-green transition-colors">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}