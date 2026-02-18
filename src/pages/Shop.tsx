import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import ServiceQuickView from "@/components/ServiceQuickView";
import { services, categories, Service } from "@/data/services";
import { Button } from "@/components/ui/button";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [quickViewService, setQuickViewService] = useState<Service | null>(null);

  const filtered = activeCategory === "all" ? services : services.filter((s) => s.category === activeCategory);

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-6xl">
              Our <span className="text-primary italic">Services</span>
            </h1>
            <p className="text-muted-foreground mt-3">Tap any service to book via WhatsApp — quick and easy.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat.id)}
                className={activeCategory === cat.id ? "neon-glow gradient-gold border-0 text-primary-foreground" : "border-border text-muted-foreground hover:text-primary hover:border-primary/50"}
              >
                {cat.label}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} onQuickView={setQuickViewService} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-20">No services in this category yet. Check back soon!</p>
          )}
        </div>
      </section>

      <ServiceQuickView service={quickViewService} open={!!quickViewService} onOpenChange={(open) => !open && setQuickViewService(null)} />
    </Layout>
  );
};

export default Shop;
