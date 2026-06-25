import peri from "@/assets/packet-peri-peri.png";
import cheese from "@/assets/packet-cheese.png";
import pudina from "@/assets/packet-pudina.png";
import creamOnion from "@/assets/packet-cream-onion.png";
import saltPepper from "@/assets/packet-salt-pepper.png";
import chatPata from "@/assets/packet-chat-pata.png";
import cookie from "@/assets/cookie-hero.png";

export type Product = {
  id: string;
  name: string;
  category: "Makhana" | "Cookies";
  price: number;
  rating: number;
  image: string;
  short: string;
  images: {
    small: string;
    medium: string;
    large: string;
  };
  prices: {
    "100g": number;
    "250g": number;
    "500g": number;
  };
  description: string;
  ingredients: string[];
  nutrition: { label: string; value: string }[];
  badges: string[];
};

export const products: Product[] = [
  {
    id: "peri-peri",
    name: "Peri Peri Makhana",
    category: "Makhana",
    rating: 4.8,
    images: {
      small: peri,
      medium: peri,
      large: peri,
    },
    prices: {
      "100g": 199,
      "250g": 349,
      "500g": 599,
    },
    image: peri,
    price: 199,
    short: "Bold, fiery and unapologetically spicy.",
    description:
      "Hand-tossed in our signature peri peri blend with smoked paprika and African bird's eye chili. Roasted, never fried.",
    ingredients: ["Fox nuts", "Sunflower oil", "Peri peri masala", "Sea salt", "Smoked paprika"],
    nutrition: [
      { label: "Energy", value: "380 kcal" },
      { label: "Protein", value: "9.6 g" },
      { label: "Carbs", value: "72 g" },
      { label: "Fat", value: "3.2 g" },
    ],
    badges: ["Best Seller", "Roasted"],
  },
  {
    id: "cheese",
    name: "Cheese Makhana",
    category: "Makhana",
    rating: 4.7,
    images: {
      small: cheese,
      medium: cheese,
      large: cheese,
    },
    prices: {
      "100g": 199,
      "250g": 349,
      "500g": 599,
    },
    image: cheese,
    price: 199,
    short: "Golden, creamy and comfort-food good.",
    description:
      "Real cheese powder hugs every puff for the kind of indulgence your snack drawer has been missing.",
    ingredients: ["Fox nuts", "Cheese powder", "Sunflower oil", "Sea salt"],
    nutrition: [
      { label: "Energy", value: "390 kcal" },
      { label: "Protein", value: "10 g" },
      { label: "Carbs", value: "70 g" },
      { label: "Fat", value: "3.6 g" },
    ],
    badges: ["New"],
  },
  {
    id: "pudina",
    name: "Pudina Makhana",
    category: "Makhana",
    rating: 4.6,
    images: {
      small: pudina,
      medium: pudina,
      large: pudina,
    },
    prices: {
      "100g": 199,
      "250g": 349,
      "500g": 599,
    },
    image: pudina,
    price: 199,
    short: "Cool, fresh and garden-bright.",
    description: "Slow-dried mint, chaat masala and a whisper of citrus. The cleanest snack in the room.",
    ingredients: ["Fox nuts", "Mint", "Chaat masala", "Sunflower oil", "Sea salt"],
    nutrition: [
      { label: "Energy", value: "375 kcal" },
      { label: "Protein", value: "9.4 g" },
      { label: "Carbs", value: "71 g" },
      { label: "Fat", value: "3.1 g" },
    ],
    badges: ["Organic"],
  },
  {
    id: "cream-onion",
    name: "Cream & Onion Makhana",
    category: "Makhana",
    rating: 4.5,
    images: {
      small: creamOnion,
      medium: creamOnion,
      large: creamOnion,
    },
    prices: {
      "100g": 199,
      "250g": 349,
      "500g": 599,
    },
    image: creamOnion,
    price: 199,
    short: "Smooth, savoury and pleasantly addictive.",
    description: "Sweet caramelised onion meets dairy cream for the comfort flavour we all secretly love.",
    ingredients: ["Fox nuts", "Onion powder", "Milk solids", "Sunflower oil", "Sea salt"],
    nutrition: [
      { label: "Energy", value: "385 kcal" },
      { label: "Protein", value: "9.8 g" },
      { label: "Carbs", value: "71 g" },
      { label: "Fat", value: "3.3 g" },
    ],
    badges: [],
  },
  {
    id: "salt-pepper",
    name: "Salt & Pepper Makhana",
    category: "Makhana",
    rating: 4.4,
    images: {
      small: saltPepper,
      medium: saltPepper,
      large: saltPepper,
    },
    prices: {
      "100g": 189,
      "250g": 329,
      "500g": 569,
    },
    image: saltPepper,
    price: 189,
    short: "Classic. Sharp. Endlessly snackable.",
    description: "Crushed Tellicherry pepper and Himalayan pink salt — minimal ingredients, maximal flavour.",
    ingredients: ["Fox nuts", "Black pepper", "Pink salt", "Sunflower oil"],
    nutrition: [
      { label: "Energy", value: "370 kcal" },
      { label: "Protein", value: "9.5 g" },
      { label: "Carbs", value: "70 g" },
      { label: "Fat", value: "3 g" },
    ],
    badges: ["Organic"],
  },
  {
    id: "chat-pata",
    name: "Chat Pata Makhana",
    category: "Makhana",
    rating: 4.9,
    images: {
      small: chatPata,
      medium: chatPata,
      large: chatPata,
    },
    prices: {
      "100g": 199,
      "250g": 349,
      "500g": 599,
    },
    image: chatPata,
    price: 199,
    short: "Street-style chaat in every handful.",
    description: "Tamarind, kala namak and roasted cumin — the unmistakable taste of Indian street corners.",
    ingredients: ["Fox nuts", "Tamarind", "Kala namak", "Roasted cumin", "Sunflower oil"],
    nutrition: [
      { label: "Energy", value: "382 kcal" },
      { label: "Protein", value: "9.7 g" },
      { label: "Carbs", value: "72 g" },
      { label: "Fat", value: "3.2 g" },
    ],
    badges: ["Best Seller"],
  },
  {
    id: "classic-cookies",
    name: "Classic Makhana Cookies",
    category: "Cookies",
    rating: 4.7,
    images: {
      small: cookie,
      medium: cookie,
      large: cookie,
    },
    prices: {
      "100g": 249,
      "250g": 449,
      "500g": 749,
    },
    image: cookie,
    price: 249,
    short: "Baked with makhana, real butter and zero shortcuts.",
    description: "Crisp on the edge, soft in the middle. A teacup essential.",
    ingredients: ["Whole wheat flour", "Makhana flour", "Butter", "Cane sugar", "Vanilla"],
    nutrition: [
      { label: "Energy", value: "440 kcal" },
      { label: "Protein", value: "7 g" },
      { label: "Carbs", value: "62 g" },
      { label: "Fat", value: "18 g" },
    ],
    badges: ["New"],
  },
  {
    id: "sugar-free-cookies",
    name: "Sugar Free Cookies",
    category: "Cookies",
    rating: 4.6,
    images: {
      small: cookie,
      medium: cookie,
      large: cookie,
    },
    prices: {
      "100g": 269,
      "250g": 469,
      "500g": 769,
    },
    image: cookie,
    price: 269,
    short: "All the comfort, none of the sugar.",
    description: "Sweetened with stevia and dates — perfect for the everyday tea ritual.",
    ingredients: ["Whole wheat flour", "Makhana flour", "Butter", "Dates", "Stevia"],
    nutrition: [
      { label: "Energy", value: "390 kcal" },
      { label: "Protein", value: "7.4 g" },
      { label: "Carbs", value: "52 g" },
      { label: "Fat", value: "17 g" },
    ],
    badges: ["Organic"],
  },
];

export const categories = ["All", "Makhana", "Cookies"] as const;
export type Category = (typeof categories)[number];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}