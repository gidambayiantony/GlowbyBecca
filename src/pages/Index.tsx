import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Truck, Shield, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import ProductQuickView from "@/components/ProductQuickView";
import { products, Product, INSTAGRAM_URL, getWhatsAppLink } from "@/data/products";

const featuredProducts = products.filter((p) => p.featured).slice(0, 6);
const galleryImages = products.slice(0, 8);

const Index = () => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-secondary" />
        <div className="absolute inset-0 gradient-overlay-full" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider leading-none">
              GEAR UP.<br />
              <span className="text-primary text-glow">SHOW UP.</span><br />
              LEVEL UP.
            </h1>
            <p className="mt-6 text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
              Premium fitness wear for those who never skip a day. Made for the grind.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/shop">
                <Button size="lg" className="gap-2 text-base px-8 neon-glow">
                  Shop Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="gap-2 text-base px-8 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                  <MessageCircle className="w-4 h-4" /> Order via WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl tracking-wider">
              FEATURED <span className="text-primary">DROPS</span>
            </h2>
            <p className="text-muted-foreground mt-3">Our hottest picks — don't sleep on these.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} onQuickView={setQuickViewProduct} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/shop">
              <Button variant="outline" size="lg" className="gap-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                View All Products <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery / Lookbook */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl tracking-wider">
              THE <span className="text-primary">LOOKBOOK</span>
            </h2>
            <p className="text-muted-foreground mt-3">Fitness fits in action.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryImages.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`relative overflow-hidden rounded-lg ${i === 0 || i === 5 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}
              >
                <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl tracking-wider">
              WHY <span className="text-primary">US</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: "Premium Quality", desc: "Every piece is crafted with top-tier fabrics built to last through your toughest sessions." },
              { icon: Truck, title: "Fast Delivery", desc: "Quick and reliable delivery across Kenya. We get your gear to you fast." },
              { icon: Sparkles, title: "Unmatched Style", desc: "Stand out in the gym and on the street. Our designs are bold, clean, and unforgettable." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl tracking-wider mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Instagram className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="font-display text-4xl md:text-5xl tracking-wider mb-4">
              FOLLOW THE <span className="text-primary">MOVEMENT</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Join our community on Instagram for daily fitness inspo, new drops, and exclusive content.
            </p>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 px-8">
                <Instagram className="w-4 h-4" /> @fitness_fanatics254
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <ProductQuickView product={quickViewProduct} open={!!quickViewProduct} onOpenChange={(open) => !open && setQuickViewProduct(null)} />
    </Layout>
  );
};

export default Index;
