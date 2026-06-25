export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  image: string;
  body: string[];
};

const cover = (seed: string) =>
  `https://images.unsplash.com/photo-${seed}?auto=format&fit=crop&w=1600&q=80`;

export const posts: BlogPost[] = [
  {
    slug: "why-makhana-is-the-perfect-snack",
    title: "Why Makhana Is The Perfect Modern Snack",
    excerpt:
      "Roasted, ancient and quietly powerful — here's why fox nuts deserve a permanent shelf in your kitchen.",
    category: "Nutrition",
    author: "Priya Sharma",
    date: "June 12, 2026",
    readingTime: "6 min read",
    image: cover("1490818387583-1baba5e638af"),
    body: [
      "Makhana — also called fox nuts or lotus seeds — has been a staple in Indian wellness traditions for centuries. Today, it is having a quiet revolution as the world rediscovers what our grandmothers always knew.",
      "High in protein, low in fat and naturally gluten-free, makhana is the rare snack that feels indulgent and still slots neatly into a healthy day.",
      "Roasted in small batches, never fried, every Samarth packet locks in that signature airy crunch with carefully built flavour layers.",
    ],
  },
  {
    slug: "snacks-for-weight-loss",
    title: "5 Snacks That Actually Help With Weight Loss",
    excerpt: "Forget the diet myths — these are the snacks that satisfy without sabotaging.",
    category: "Lifestyle",
    author: "Dr. Aanya Mehta",
    date: "June 4, 2026",
    readingTime: "5 min read",
    image: cover("1505253468034-514d2507d914"),
    body: [
      "Healthy snacking is less about restriction and more about smart swaps. The right between-meal bite keeps cravings in check and energy steady.",
      "Roasted makhana tops the list: low-calorie, high-fibre and endlessly variable in flavour.",
    ],
  },
  {
    slug: "makhana-nutrition-deep-dive",
    title: "Makhana Nutrition: A Deep Dive",
    excerpt: "We break down what's really inside the world's most underrated superfood.",
    category: "Nutrition",
    author: "Priya Sharma",
    date: "May 28, 2026",
    readingTime: "8 min read",
    image: cover("1504674900247-0877df9cc836"),
    body: [
      "Per 100g, makhana delivers around 9-10g of plant protein, plenty of magnesium and a surprising amount of antioxidants.",
      "It is naturally low-glycemic, which makes it a thoughtful choice for anyone managing blood sugar.",
    ],
  },
  {
    slug: "5-recipes-with-makhana",
    title: "5 Five-Minute Recipes Starring Makhana",
    excerpt: "From trail mix to chaat — easy weekday recipes you'll bookmark.",
    category: "Recipes",
    author: "Chef Karan",
    date: "May 14, 2026",
    readingTime: "4 min read",
    image: cover("1543353071-873f17a7a088"),
    body: [
      "Toss roasted makhana with curry leaves and ghee for the world's quickest namkeen.",
      "Or build a chaat in under five minutes with our Chat Pata flavour and a squeeze of lime.",
    ],
  },
  {
    slug: "from-our-wetlands",
    title: "From Our Wetlands: A Farm Story",
    excerpt: "Meet the farming families in Bihar who hand-harvest every fox nut we use.",
    category: "Farm Stories",
    author: "Samarth Team",
    date: "April 30, 2026",
    readingTime: "7 min read",
    image: cover("1500382017468-9049fed747ef"),
    body: [
      "Makhana is a labour of love. The seeds are dived for by hand, dried under the sun and roasted in cast-iron pans.",
      "We partner directly with farming co-operatives in Darbhanga to guarantee a fair price and a better future.",
    ],
  },
  {
    slug: "lifestyle-tips-for-mindful-snacking",
    title: "Mindful Snacking: Small Shifts, Big Wins",
    excerpt: "Tiny tweaks that turn snacking from guilt to fuel.",
    category: "Lifestyle",
    author: "Dr. Aanya Mehta",
    date: "April 18, 2026",
    readingTime: "5 min read",
    image: cover("1498837167922-ddd27525d352"),
    body: [
      "Pre-portion your snacks. Sit down to eat them. Notice the crunch. These tiny rituals dramatically reduce mindless overeating.",
      "Pair a savoury snack like Salt & Pepper Makhana with a warm cup of green tea for a properly grown-up afternoon ritual.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}