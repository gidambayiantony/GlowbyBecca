import { Link } from "react-router-dom";
import { Instagram, Phone, MessageCircle } from "lucide-react";
import { INSTAGRAM_URL, WHATSAPP_NUMBER, getWhatsAppLink } from "@/data/products";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-2xl tracking-wider mb-4">
              FITNESS FANATICS <span className="text-primary">254</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium fitness wear for those who show up every day. Gear up. Show up. Level up.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-wider mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">Shop</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg tracking-wider mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" /> @fitness_fanatics254
              </a>
              <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> +254 706 777 368
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Fitness Fanatics 254. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
