import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product, getWhatsAppLink } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
  onQuickView?: (product: Product) => void;
}

const ProductCard = ({ product, index = 0, onQuickView }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
    >
      <div
        className="relative aspect-square overflow-hidden cursor-pointer"
        onClick={() => onQuickView?.(product)}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-300 flex items-center justify-center">
          <span className="text-foreground font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">
            Quick View
          </span>
        </div>
      </div>

      <div className="p-4">
        <span className="text-xs text-primary uppercase tracking-widest font-medium">
          {product.category.replace("-", " ")}
        </span>
        <h3 className="font-display text-lg mt-1 tracking-wide text-foreground">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-xs mt-1 line-clamp-2">
          {product.description}
        </p>
        <a href={getWhatsAppLink(product.name)} target="_blank" rel="noopener noreferrer" className="mt-3 block">
          <Button className="w-full gap-2" size="sm">
            <MessageCircle className="w-4 h-4" /> Inquire on WhatsApp
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
