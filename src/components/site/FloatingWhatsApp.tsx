import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
export default function FloatingWhatsApp() {
    const phoneNumber = "+918928606661"; // Replace with your WhatsApp number (country code included)
    const message = encodeURIComponent(
        "Hi! I'm interested in your Samarth Makhana products."
    );

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
        fixed
        bottom-6
        right-6
        z-50
        h-16
        w-16
        rounded-full
        bg-[#25D366]
        text-white
        shadow-xl
        flex
        items-center
        justify-center
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-2xl
        active:scale-95
      "
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp size={36} />
        </a>
    );
}