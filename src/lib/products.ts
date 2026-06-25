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
    ingredients: [
      "Makhana",
      "Olive oil",
      "Sunflower oil",
      "Sugar",
      "Spices & condiments (red chilli, dried mango, dried onion, coriander seeds, cumin, dried garlic flakes, nutmeg, mace)",
      "Salt",
      "Tomato powder",
      "Hydrolysed peanut protein",
      "Colour (INS 160C)",
      "Natural & nature-identical peri peri flavouring",
      "Flavour enhancers (INS 627, INS 631)",
      "Allergen: contains peanut",
    ],
    nutrition: [
      { label: "Energy", value: "455.40 kcal" },
      { label: "Protein", value: "9.95 g" },
      { label: "Carbohydrate", value: "62.50 g" },
      { label: "Total Sugar", value: "0.80 g" },
      { label: "Added Sugar", value: "0.20 g" },
      { label: "Total Fat", value: "18.40 g" },
      { label: "Saturated Fat", value: "4.20 g" },
      { label: "Trans Fat", value: "0 g" },
      { label: "Dietary Fibre", value: "6.26 g" },
      { label: "Sodium", value: "532 mg" },
      { label: "Cholesterol", value: "0 mg" },
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
    ingredients: [
      "Makhana",
      "Olive oil",
      "Sunflower oil",
      "Sugar",
      "Salt",
      "Hydrolysed peanut protein",
      "Dehydrated whey blend (from milk)",
      "Stabilizer / emulsifier (INS 339)",
      "Cheese concentrate",
      "Colour (INS 160c)",
      "Added flavours (milk, natural, nature-identical & artificial)",
      "Allergen: contains peanut, milk & wheat components",
    ],
    nutrition: [
      { label: "Energy", value: "461.84 kcal" },
      { label: "Protein", value: "12.41 g" },
      { label: "Carbohydrate", value: "58.50 g" },
      { label: "Total Sugar", value: "6.40 g" },
      { label: "Added Sugar", value: "3.20 g" },
      { label: "Total Fat", value: "19.80 g" },
      { label: "Saturated Fat", value: "3.90 g" },
      { label: "Trans Fat", value: "0 g" },
      { label: "Dietary Fibre", value: "7.90 g" },
      { label: "Sodium", value: "567.70 mg" },
      { label: "Cholesterol", value: "0 mg" },
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
    ingredients: [
      "Makhana",
      "Olive oil",
      "Sunflower oil",
      "Spices & condiments (red chilli, coriander seeds, dried mango, cumin, turmeric, dried ginger, long pepper, fenugreek, mace, nutmeg)",
      "Edible salt",
      "Black salt",
      "Sugar",
      "Mint leaves (7%)",
      "Fenugreek leaves",
      "Hydrolysed vegetable protein (peanut)",
      "Natural mint flavour",
      "Flavour enhancers (INS 627, INS 631)",
      "Anticaking agent (INS 551)",
      "Allergen: may contain peanut",
    ],
    nutrition: [
      { label: "Energy", value: "422.18 kcal" },
      { label: "Protein", value: "11.89 g" },
      { label: "Carbohydrate", value: "66.07 g" },
      { label: "Total Sugar", value: "4.00 g" },
      { label: "Added Sugar", value: "0 g" },
      { label: "Total Fat", value: "12.26 g" },
      { label: "Saturated Fat", value: "4.20 g" },
      { label: "Trans Fat", value: "0 g" },
      { label: "Dietary Fibre", value: "6.92 g" },
      { label: "Sodium", value: "649.10 mg" },
      { label: "Cholesterol", value: "0 mg" },
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
    ingredients: [
      "Makhana",
      "Olive oil",
      "Sunflower oil",
      "Spices & makhana condiments (yellow chilli, onion, parsley)",
      "Salt",
      "Sugar",
      "Milk solids",
      "Hydrolysed vegetable protein (peanut)",
      "Flavour enhancer (INS 635)",
      "Added cream & onion flavours (natural & nature-identical)",
    ],
    nutrition: [
      { label: "Energy", value: "418.73 kcal" },
      { label: "Protein", value: "11.25 g" },
      { label: "Carbohydrate", value: "56.97 g" },
      { label: "Total Sugar", value: "6.20 g" },
      { label: "Added Sugar", value: "2.20 g" },
      { label: "Total Fat", value: "22.40 g" },
      { label: "Saturated Fat", value: "3.12 g" },
      { label: "Trans Fat", value: "0 g" },
      { label: "Dietary Fibre", value: "7.15 g" },
      { label: "Sodium", value: "541.30 mg" },
      { label: "Cholesterol", value: "0 mg" },
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
    ingredients: [
      "Makhana",
      "Olive oil",
      "Sunflower oil",
      "Black pepper",
      "Pink salt",
      "Hydrolysed vegetable protein (peanut)",
      "Flavour enhancer (INS 635)",
      "Added ghee flavour (natural & nature-identical)",
      "Allergen: contains peanut and milk solids",
    ],
    nutrition: [
      { label: "Energy", value: "442.82 kcal" },
      { label: "Protein", value: "10.40 g" },
      { label: "Carbohydrate", value: "66.87 g" },
      { label: "Total Sugar", value: "3.26 g" },
      { label: "Added Sugar", value: "1.12 g" },
      { label: "Total Fat", value: "14.86 g" },
      { label: "Saturated Fat", value: "2.20 g" },
      { label: "Trans Fat", value: "0 g" },
      { label: "Dietary Fibre", value: "6.15 g" },
      { label: "Sodium", value: "555.30 mg" },
      { label: "Cholesterol", value: "0 mg" },
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
    ingredients: [
      "Makhana",
      "Olive oil",
      "Sunflower oil",
      "Sugar",
      "Spices & condiments (red chilli, dried mango, dried onion, coriander seeds, cumin, nutmeg, mace)",
      "Salt",
      "Jaggery",
      "Tomato powder",
      "Hydrolysed peanut protein",
      "Colour (INS 160c)",
      "Flavour enhancer (INS 635)",
      "Added tomato flavours (natural, nature-identical & artificial)",
      "Allergen: contains peanut",
    ],
    nutrition: [
      { label: "Energy", value: "484.84 kcal" },
      { label: "Protein", value: "11.37 g" },
      { label: "Carbohydrate", value: "45.94 g" },
      { label: "Total Sugar", value: "8.40 g" },
      { label: "Added Sugar", value: "3.26 g" },
      { label: "Total Fat", value: "28.40 g" },
      { label: "Saturated Fat", value: "6.13 g" },
      { label: "Trans Fat", value: "0 g" },
      { label: "Dietary Fibre", value: "8.17 g" },
      { label: "Sodium", value: "574.10 mg" },
      { label: "Cholesterol", value: "0 mg" },
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