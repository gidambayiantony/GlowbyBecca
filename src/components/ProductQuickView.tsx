import { MessageCircle } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Product, getWhatsAppLink } from "@/data/products";

interface ProductQuickViewProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProductQuickView = ({ product, open, onOpenChange }: ProductQuickViewProps) => {
  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl tracking-wide">{product.name}</DialogTitle>
          <DialogDescription className="text-primary uppercase tracking-widest text-xs">
            {product.category.replace("-", " ")}
          </DialogDescription>
        </DialogHeader>

        <div className="aspect-square rounded-lg overflow-hidden">
          <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <p className="text-muted-foreground text-sm">{product.description}</p>

        <a href={getWhatsAppLink(product.name)} target="_blank" rel="noopener noreferrer">
          <Button className="w-full gap-2" size="lg">
            <MessageCircle className="w-5 h-5" /> Order on WhatsApp
          </Button>
        </a>
      </DialogContent>
    </Dialog>
  );
};

export default ProductQuickView;
