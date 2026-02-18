import { Link } from "react-router-dom";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { WHATSAPP_NUMBER, EMAIL, getWhatsAppLink } from "@/data/services";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-2xl mb-4">
              Glow <span className="text-primary italic">by Becca</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium hairdressing & beauty services. Where your glow begins. ✨
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4">Get in Touch</h4>
            <div className="flex flex-col gap-3">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> +254 706 777 368
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> {EMAIL}
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" /> Kianjai & Nakuru Town, Kenya
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Glow by Becca. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
