import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { WHATSAPP_NUMBER, EMAIL, getWhatsAppLink } from "@/data/services";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl">
              Get in <span className="text-primary italic">Touch</span>
            </h1>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto">
              Ready to book? Hit us up on WhatsApp for the fastest response.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="block mb-8">
                <Button size="lg" className="w-full gap-3 text-lg py-6 neon-glow gradient-gold border-0 text-primary-foreground">
                  <MessageCircle className="w-6 h-6" /> Book on WhatsApp
                </Button>
              </a>

              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Phone", value: "+254 706 777 368", href: `tel:+${WHATSAPP_NUMBER}` },
                  { icon: MessageCircle, label: "WhatsApp", value: "+254 706 777 368", href: getWhatsAppLink() },
                  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
                  { icon: MapPin, label: "Location", value: "Kianjai & Nakuru Town, Kenya", href: undefined },
                  { icon: Clock, label: "Hours", value: "Open daily — Appointment only", href: undefined },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors font-medium">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
              <div className="bg-card border border-border rounded-lg p-6 md:p-8">
                <h2 className="font-display text-2xl mb-6">
                  Send a <span className="text-primary italic">Message</span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="bg-secondary border-border" />
                  <Input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="bg-secondary border-border" />
                  <Textarea placeholder="Your Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={5} className="bg-secondary border-border" />
                  <Button type="submit" className="w-full gap-2 gradient-gold border-0 text-primary-foreground">
                    <Send className="w-4 h-4" /> Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <h2 className="font-display text-3xl text-center mb-6">
              Find <span className="text-primary italic">Us</span>
            </h2>
            <div className="rounded-xl overflow-hidden border border-border aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.04!2d37.85!3d0.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17881d0c5e5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sKianjai%2C%20Kenya!5e0!3m2!1sen!4v1!5m2!1sen!4v1&q=5P6R+MXH,+Kianjai,+Kenya"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Glow by Becca - Kianjai Location"
              />
            </div>
            <p className="text-center text-muted-foreground text-sm mt-3">
              📍 5P6R+MXH, Kianjai, Kenya
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
