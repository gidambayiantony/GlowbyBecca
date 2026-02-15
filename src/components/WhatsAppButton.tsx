import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/data/products";

const WhatsAppButton = () => {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 gradient-coral text-primary-foreground p-4 rounded-full shadow-lg neon-glow animate-pulse-glow hover:scale-110 transition-transform"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
