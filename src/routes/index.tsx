import { createFileRoute } from "@tanstack/react-router";
import { useLenis } from "@/lib/use-lenis";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { FlavorExplosion } from "@/components/site/FlavorExplosion";
import { Journey } from "@/components/site/Journey";
import { Cookies } from "@/components/site/Cookies";
import { Nutrition } from "@/components/site/Nutrition";
import { WhySamarth } from "@/components/site/WhySamarth";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Testimonials } from "@/components/site/Testimonials";
import { InstagramGallery } from "@/components/site/InstagramGallery";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";
import { Chatbot } from "@/components/site/Chatbot";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samarth Makhana — India's Favorite Superfood Snack" },
      { name: "description", content: "Premium roasted makhana and handcrafted cookies — six flavors, real ingredients, roasted not fried." },
      { property: "og:title", content: "Samarth Makhana — India's Favorite Superfood Snack" },
      { property: "og:description", content: "Premium roasted makhana and handcrafted cookies, crafted for every craving." },
    ],
  }),
  component: Index,
});

function Index() {
  useLenis();
  return (
    <main className="bg-cream text-ink">
      <Nav />
      <Hero />
      <FlavorExplosion />
      <Journey />
      <Cookies />
      <Nutrition />
      <WhySamarth />
      <Testimonials />
      <InstagramGallery />
      <Newsletter />
      <FinalCTA />
      <Chatbot />
      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}
