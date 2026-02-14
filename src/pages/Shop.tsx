import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import ProductQuickView from "@/components/ProductQuickView";
import { products, categories, Product } from "@/data/products";
import { Button } from "@/components/ui/button";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const filtered = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-6xl tracking-wider">
              OUR <span className="text-primary">COLLECTION</span>
            </h1>
            <p className="text-muted-foreground mt-3">Tap any product to inquire via WhatsApp — no middleman.</p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat.id)}
                className={activeCategory === cat.id ? "neon-glow" : "border-border text-muted-foreground hover:text-primary hover:border-primary/50"}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} onQuickView={setQuickViewProduct} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20">No products in this category yet. Check back soon!</p>
          )}
        </div>
      </section>

      <ProductQuickView product={quickViewProduct} open={!!quickViewProduct} onOpenChange={(open) => !open && setQuickViewProduct(null)} />
    </Layout>
  );
};

export default Shop;
