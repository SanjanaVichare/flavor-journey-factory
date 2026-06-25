import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot } from "lucide-react";

type Message = {
    id: string;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
};

const FAQ_RESPONSES: Record<string, string> = {
    "what is makhana": "Makhana (fox nuts) are edible seeds from the Euryale ferox plant. They're a traditional Indian superfood, packed with protein, fiber, and essential minerals. They're naturally gluten-free and low in calories!",

    "health benefits": "Makhana offers amazing health benefits: • High in protein (9-10g per serving) • Rich in antioxidants • Good for heart health • Helps with weight management • Supports bone health with calcium • Low glycemic index - great for diabetics",

    "flavors": "We offer 6 delicious makhana flavors: 1. Peri Peri - Bold & Spicy 2. Cheese - Creamy & Comforting 3. Pudina - Fresh & Minty 4. Cream & Onion - Smooth & Savoury 5. Salt & Pepper - Classic & Sharp 6. Chat Pata - Street-style Chaata",

    "cookies": "Yes! We have 2 cookie varieties: • Classic Makhana Cookies - Baked with real butter • Sugar-Free Cookies - Sweetened with stevia & dates Both are made with makhana flour for extra nutrition!",

    "roasted vs fried": "All our makhana are ROASTED, never fried! Roasting preserves nutrients, reduces oil content, and gives them that perfect crunch. They're much healthier than fried snacks.",

    "ingredients": "We use only 100% natural ingredients: • Premium fox nuts • Pure sunflower oil • Real spices and seasonings • No artificial preservatives • No MSG • No artificial colors",

    "shipping": "We ship across India with: • Free shipping on orders above ₹499 • Fast delivery in 3-5 business days • Secure packaging to keep your makhana fresh and crunchy!",

    "return policy": "We stand behind our products! If you're not satisfied, contact us within 7 days of delivery. We'll offer a full refund or replacement. Just send us a message!",

    "price": "Our makhana prices: • 100g - ₹189-199 • 250g - ₹329-349 • 500g - ₹569-599 Cookies start at ₹249. Bulk orders get special discounts!",

    "best seller": "Our best sellers are: • Chat Pata - Street style chaat flavor (4.9⭐) • Peri Peri - Bold and spicy (4.8⭐) • Cheese - Creamy comfort (4.7⭐)",

    "organic": "Yes! Our Pudina and Salt & Pepper varieties are certified organic. We source our makhana from organic farms that use sustainable practices.",

    "gluten free": "Yes! All our makhana products are naturally gluten-free. They're perfect for people with gluten sensitivity or celiac disease.",

    "veg": "All our products are 100% vegetarian. We don't use any animal-derived ingredients in our makhana or cookies.",

    "sugar free": "Yes! We have Sugar-Free Cookies made with stevia and dates. They're perfect for diabetics or anyone watching their sugar intake.",
};

const GREETINGS = [
    "Hi there! 👋 I'm Samarth's assistant. Ask me anything about our makhana!",
    "Welcome! 🍿 I can tell you all about our flavors, health benefits, and more!",
    "Hey! 👋 Got questions about makhana? I've got answers!"
];

const FALLBACK_RESPONSES = [
    "That's a great question! Let me share what I know... 🤔",
    "I'm not sure about that, but I can tell you about our flavors! 🌶️",
    "Interesting! While I don't have that specific info, I can help with product questions! 💚",
    "Let me think... Here's what I do know about our makhana! 🪷"
];

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            const greeting = GREETINGS[Math.floor(Math.random() * GREETINGS.length)];
            setMessages([
                {
                    id: "welcome",
                    text: greeting,
                    sender: "bot",
                    timestamp: new Date(),
                },
            ]);
        }
    }, [isOpen, messages.length]);

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const findBestResponse = (question: string): string => {
        const lower = question.toLowerCase().trim();

        // Check for exact matches
        for (const [key, response] of Object.entries(FAQ_RESPONSES)) {
            if (lower.includes(key)) {
                return response;
            }
        }

        // Check for keywords
        const keywords = {
            "flavor": ["flavors", "taste", "flavour", "variety", "options"],
            "health": ["healthy", "nutrition", "protein", "calories", "diet", "good for"],
            "order": ["buy", "purchase", "order", "shop"],
            "contact": ["phone", "email", "reach", "call", "support"],
        };

        for (const [category, words] of Object.entries(keywords)) {
            if (words.some(word => lower.includes(word))) {
                switch (category) {
                    case "flavor":
                        return FAQ_RESPONSES["flavors"];
                    case "health":
                        return FAQ_RESPONSES["health benefits"];
                    case "order":
                        return "You can order directly from our website! 🛒 Just browse our collection and add items to your cart. We offer secure payment and fast shipping!";
                    case "contact":
                        return "You can reach us at: 📧 support@samarthmakhana.com 📞 +91-XXXXX-XXXXX We're here to help! 💚";
                    default:
                        return FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
                }
            }
        }

        return FALLBACK_RESPONSES[Math.floor(Math.random() * FALLBACK_RESPONSES.length)];
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            text: input.trim(),
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        // Simulate bot thinking
        setTimeout(() => {
            const response = findBestResponse(userMessage.text);
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: response,
                sender: "bot",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMessage]);
            setIsTyping(false);
        }, 800 + Math.random() * 600);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Chat Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-24 right-6 z-50 h-14 w-14 rounded-full bg-brand-green text-cream shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
                aria-label="Open chat"
            >
                <MessageCircle className="h-6 w-6" />
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-28 right-6 z-50 w-[400px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[70vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-ink/10"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-brand-green text-cream">
                            <div className="flex items-center gap-2">
                                <Bot className="h-5 w-5" />
                                <span className="font-semibold text-sm">Samarth Assistant</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                                aria-label="Close chat"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-cream/30">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${message.sender === "user"
                                                ? "bg-brand-green text-cream rounded-br-none"
                                                : "bg-white border border-ink/10 text-ink rounded-bl-none"
                                            }`}
                                    >
                                        {message.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-white border border-ink/10 text-ink px-4 py-2.5 rounded-2xl rounded-bl-none text-sm">
                                        <span className="flex gap-1">
                                            <span className="w-2 h-2 bg-brand-green/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                            <span className="w-2 h-2 bg-brand-green/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                            <span className="w-2 h-2 bg-brand-green/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                        </span>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-3 border-t border-ink/10 bg-white">
                            <div className="flex gap-2">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ask about makhana..."
                                    className="flex-1 px-4 py-2.5 rounded-full border border-ink/20 focus:outline-none focus:border-brand-green text-sm bg-cream/30"
                                />
                                <button
                                    onClick={handleSend}
                                    disabled={!input.trim()}
                                    className="px-4 py-2.5 rounded-full bg-brand-green text-cream hover:bg-brand-green/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                >
                                    <Send className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}