import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MessageCircle, Heart, Clock, Star, Scissors, Hand } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import ServiceQuickView from "@/components/ServiceQuickView";
import { services, Service, getWhatsAppLink } from "@/data/services";
import heroBg from "@/assets/hero-bg.jpg";
import salonBanner from "@/assets/salon-banner.jpg";

const featuredServices = services.filter((s) => s.featured).slice(0, 6);
const galleryServices = services.slice(0, 8);

const Index = () => {
  const [quickViewService, setQuickViewService] = useState<Service | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 gradient-overlay-full" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-6"
            >
              <Sparkles className="w-4 h-4" /> Hairdressing & Beauty Services
            </motion.div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
              Where Your<br />
              <span className="text-primary text-glow italic">Beauty</span> Shines
            </h1>
            <p className="mt-6 text-muted-foreground text-lg md:text-xl max-w-xl mx-auto">
              Expert hairdressing, stunning nails, flawless facials & more. Book your appointment today. ✨
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2 text-base px-8 neon-glow gradient-gold border-0 text-primary-foreground">
                  <MessageCircle className="w-4 h-4" /> Book Appointment
                </Button>
              </a>
              <Link to="/services">
                <Button size="lg" variant="outline" className="gap-2 text-base px-8 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                  Our Services <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl">
              Our <span className="text-primary italic">Signature</span> Services
            </h2>
            <p className="text-muted-foreground mt-3">Crafted with care, styled with passion.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} onQuickView={setQuickViewService} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" size="lg" className="gap-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                View All Services <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Salon Banner */}
      <section className="relative py-0 overflow-hidden">
        <div className="relative h-[50vh] min-h-[350px]">
          <img src={salonBanner} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-lg">
                <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                  <div className="flex items-center gap-3 mb-4">
                    {[Scissors, Hand, Sparkles].map((Icon, i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                        className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center"
                      >
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </motion.div>
                    ))}
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
                    Beauty Is<br />
                    <span className="text-primary text-glow italic">Our Craft</span>
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    From braids to facials, nails to henna — we've got every detail covered. 💅
                  </p>
                  <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="gap-2 gradient-gold border-0 neon-glow text-primary-foreground">
                      Book Now <MessageCircle className="w-4 h-4" />
                    </Button>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl">
              The <span className="text-primary italic">Gallery</span>
            </h2>
            <p className="text-muted-foreground mt-3">A glimpse of our work.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {galleryServices.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`relative overflow-hidden rounded-xl ${i === 0 || i === 5 ? "row-span-2 aspect-[3/4]" : "aspect-square"}`}
              >
                <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-foreground text-sm font-medium">{item.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl">
              Why <span className="text-primary italic">Becky</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Star, title: "Expert Hands", desc: "Skilled in braiding, twists, crochet, wigs, nails, facials, and more. Your beauty is in the best hands." },
              { icon: Clock, title: "By Appointment", desc: "Open every day, by appointment only. Your time is valued — no long waits, just great service." },
              { icon: Heart, title: "Personal Touch", desc: "Every client gets individual attention. We listen, we care, and we make you shine." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full gradient-gold mb-4">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="font-display text-4xl md:text-5xl mb-4">
              Ready to <span className="text-primary italic">Shine</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Book your appointment on WhatsApp for the fastest response. We can't wait to pamper you!
            </p>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2 px-8 gradient-gold border-0 text-primary-foreground neon-glow">
                <MessageCircle className="w-4 h-4" /> Book Now on WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <ServiceQuickView service={quickViewService} open={!!quickViewService} onOpenChange={(open) => !open && setQuickViewService(null)} />
    </Layout>
  );
};

export default Index;
