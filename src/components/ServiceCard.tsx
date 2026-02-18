import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Service, getWhatsAppLink } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  index?: number;
  onQuickView?: (service: Service) => void;
}

const ServiceCard = ({ service, index = 0, onQuickView }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
    >
      <div
        className="relative aspect-[4/5] overflow-hidden cursor-pointer"
        onClick={() => onQuickView?.(service)}
      >
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-foreground font-medium text-sm uppercase tracking-wider">View Details</span>
        </div>
      </div>

      <div className="p-4">
        <span className="text-xs text-primary uppercase tracking-widest font-medium">
          {service.category === "hairdressing" ? "Hair" : "Beauty"}
        </span>
        <h3 className="font-display text-lg mt-1 text-foreground">{service.name}</h3>
        <p className="text-muted-foreground text-xs mt-1 line-clamp-2">{service.description}</p>
        {service.price && (
          <p className="text-primary text-sm font-medium mt-2">{service.price}</p>
        )}
        <a href={getWhatsAppLink(service.name)} target="_blank" rel="noopener noreferrer" className="mt-3 block">
          <Button className="w-full gap-2 gradient-gold border-0 text-primary-foreground" size="sm">
            <MessageCircle className="w-4 h-4" /> Book on WhatsApp
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
