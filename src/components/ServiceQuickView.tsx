import { MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Service, getWhatsAppLink } from "@/data/services";

interface ServiceQuickViewProps {
  service: Service | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ServiceQuickView = ({ service, open, onOpenChange }: ServiceQuickViewProps) => {
  if (!service) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{service.name}</DialogTitle>
          <DialogDescription className="text-primary uppercase tracking-widest text-xs">
            {service.category === "hairdressing" ? "Hairdressing" : "Beauty & Nails"}
          </DialogDescription>
        </DialogHeader>

        <div className="aspect-square rounded-lg overflow-hidden">
          <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
        </div>

        <p className="text-muted-foreground text-sm">{service.description}</p>

        <a href={getWhatsAppLink(service.name)} target="_blank" rel="noopener noreferrer">
          <Button className="w-full gap-2 gradient-gold border-0 text-primary-foreground" size="lg">
            <MessageCircle className="w-5 h-5" /> Book on WhatsApp
          </Button>
        </a>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceQuickView;
