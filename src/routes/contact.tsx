import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";
import { useLenis } from "@/lib/use-lenis";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact · Samarth Makhana" }] }),
  component: ContactPage,
});

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

const faqs = [
  { q: "How is the makhana made?", a: "Hand-harvested, slow-roasted in small batches and seasoned with whole spices. Never fried." },
  { q: "Is it gluten free?", a: "Yes, fox nuts are naturally gluten free. Our cookies contain wheat flour." },
  { q: "What is the shelf life?", a: "6 months from manufacture in our nitrogen-flushed pouches." },
  { q: "Do you ship pan-India?", a: "Yes — we ship to every PIN code in India with free shipping over ₹499." },
];

function ContactPage() {
  useLenis();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(): Errors {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Please share your full name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (form.subject.trim().length < 3) e.subject = "Add a short subject.";
    if (form.message.trim().length < 10) e.message = "Tell us a little more (10+ chars).";
    return e;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    }
  }

  return (
    <main className="bg-cream text-ink min-h-screen">
      <Nav />
      <PageHero
        eyebrow="Say Hello"
        title={<>We'd love to <em className="text-brand-green font-light italic">hear from you</em></>}
        description="Questions, partnerships, bulk orders, or just a kind word — drop us a line."
      />

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-10">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            noValidate
            onSubmit={onSubmit}
            className="rounded-[2rem] bg-card border border-ink/5 p-8 md:p-10 shadow-[0_40px_70px_-50px_rgba(0,0,0,0.3)]"
          >
            <h2 className="font-display text-3xl md:text-4xl">Send us a message</h2>
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <Field id="name" label="Your name" error={errors.name}>
                <input id="name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} className="field" />
              </Field>
              <Field id="email" label="Email" error={errors.email}>
                <input id="email" type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} className="field" />
              </Field>
              <div className="sm:col-span-2">
                <Field id="subject" label="Subject" error={errors.subject}>
                  <input id="subject" value={form.subject} onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))} className="field" />
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field id="message" label="Message" error={errors.message}>
                  <textarea id="message" rows={5} value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))} className="field resize-none" />
                </Field>
              </div>
            </div>
            <button
              type="submit"
              className="mt-7 inline-flex items-center gap-2 bg-brand-green text-cream rounded-full px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-ink transition-colors"
            >
              Send Message
            </button>
            {sent && <p className="mt-4 text-sm text-brand-green">Thank you — we'll be in touch within 24 hours.</p>}

            <style>{`
              .field { width: 100%; background: color-mix(in oklab, var(--cream-deep) 50%, transparent); border-radius: 1rem; padding: 0.875rem 1.125rem; font-size: 0.875rem; color: var(--ink); border: 1px solid transparent; transition: all .2s; }
              .field:focus { outline: none; border-color: var(--brand-green); background: var(--card); }
            `}</style>
          </motion.form>

          <div className="space-y-6">
            <InfoCard Icon={Mail} title="Email" lines={["hello@samarthmakhana.in", "press@samarthmakhana.in"]} />
            <InfoCard Icon={Phone} title="Phone" lines={["+91 98000 12345", "Mon – Sat"]} />
            <InfoCard Icon={MapPin} title="Visit" lines={["Samarth Studio", "Darbhanga, Bihar 846004 · India"]} />
            <InfoCard Icon={Clock} title="Hours" lines={["Mon–Fri · 9:00 – 18:00 IST", "Sat · 10:00 – 14:00 IST"]} />

            <div className="rounded-3xl border border-ink/5 bg-card p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-brand-green font-semibold mb-4">Follow</p>
              <div className="flex gap-3">
                {[Instagram, Facebook, Youtube, Twitter].map((Icon, i) => (
                  <a key={i} href="#" aria-label="Social" className="grid place-items-center h-10 w-10 rounded-full border border-ink/10 hover:bg-brand-green hover:text-cream hover:border-brand-green transition-colors">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[2rem] overflow-hidden border border-ink/5 aspect-[16/7] bg-cream-deep relative">
            <iframe
              title="Samarth Makhana location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=85.85%2C26.10%2C85.95%2C26.20&layer=mapnik"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-green text-center mb-3">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl text-center mb-10">Quick answers</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-card border border-ink/5 p-6 open:shadow-[0_20px_40px_-30px_rgba(0,0,0,0.3)]">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="font-display text-lg">{f.q}</span>
                  <span className="text-brand-green text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-sm text-ink/65 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="text-[10px] uppercase tracking-[0.25em] text-ink/60 font-semibold">{label}</label>
      <div className="mt-1.5">{children}</div>
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function InfoCard({ Icon, title, lines }: { Icon: typeof Mail; title: string; lines: string[] }) {
  return (
    <div className="rounded-3xl border border-ink/5 bg-card p-6 flex items-start gap-4">
      <div className="grid place-items-center h-11 w-11 rounded-2xl bg-brand-green/10 text-brand-green shrink-0">
        <Icon className="h-4 w-4" aria-hidden />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-ink/50 font-semibold">{title}</p>
        {lines.map((l) => (
          <p key={l} className="text-sm text-ink mt-1">{l}</p>
        ))}
      </div>
    </div>
  );
}