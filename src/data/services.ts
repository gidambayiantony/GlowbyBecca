import braiding from "@/assets/services/braiding.jpg";
import twists from "@/assets/services/twists.jpg";
import crochet from "@/assets/services/crochet.jpg";
import wigs from "@/assets/services/wigs.jpg";
import manicure from "@/assets/services/manicure.jpg";
import facial from "@/assets/services/facial.jpg";
import eyebrows from "@/assets/services/eyebrows.jpg";
import henna from "@/assets/services/henna.jpg";

export type Service = {
  id: string;
  name: string;
  category: "hairdressing" | "beauty";
  description: string;
  image: string;
  featured: boolean;
  price?: string;
};

export const WHATSAPP_NUMBER = "254706777368";
export const EMAIL = "lundurebeccah@gmail.com";

export const getWhatsAppLink = (serviceName?: string) => {
  const message = serviceName
    ? `Hi Becca! I'd like to book ${serviceName} at Glow by Becca ✨`
    : "Hi Becca! I'd like to book an appointment at Glow by Becca ✨";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const services: Service[] = [
  {
    id: "1",
    name: "Knotless Braids",
    category: "hairdressing",
    description: "Flawless knotless braids in long, short, or medium lengths. Lightweight, natural-looking, and gentle on your edges.",
    image: braiding,
    featured: true,
    price: "From KES 600",
  },
  {
    id: "2",
    name: "Twist Styles",
    category: "hairdressing",
    description: "Beautiful twist styles including passion twists, Senegalese twists, and flat twists. Versatile and stunning.",
    image: twists,
    featured: true,
  },
  {
    id: "3",
    name: "Crochet Styles",
    category: "hairdressing",
    description: "All crochet styles including crochet locs, curls, and braids. Quick installation with a gorgeous finish.",
    image: crochet,
    featured: true,
    price: "From KES 500",
  },
  {
    id: "4",
    name: "Wig Installation",
    category: "hairdressing",
    description: "Professional wig styling and installation. Lace fronts, closures, and custom wig units for a flawless look.",
    image: wigs,
    featured: true,
  },
  {
    id: "5",
    name: "Natural Hair Styling",
    category: "hairdressing",
    description: "Lines, gel application, extensions, waves, and curls. Embrace your natural texture with expert styling.",
    image: twists,
    featured: false,
  },
  {
    id: "6",
    name: "Chemical & Dye",
    category: "hairdressing",
    description: "Professional hair colouring, highlights, and chemical treatments. Transform your look with vibrant, lasting colour.",
    image: braiding,
    featured: false,
  },
  {
    id: "7",
    name: "Manicure",
    category: "beauty",
    description: "Pamper your hands with our professional manicure service. Clean, shape, and polish for nails that slay.",
    image: manicure,
    featured: true,
  },
  {
    id: "8",
    name: "Pedicure",
    category: "beauty",
    description: "Treat your feet to a luxurious pedicure. Soak, scrub, and polish for perfectly pampered toes.",
    image: manicure,
    featured: false,
  },
  {
    id: "9",
    name: "Tips & Gel Nails",
    category: "beauty",
    description: "Stunning gel extensions and nail tips. Long-lasting, chip-free nails with designs that wow.",
    image: manicure,
    featured: true,
  },
  {
    id: "10",
    name: "Facial Treatment",
    category: "beauty",
    description: "Deep cleansing facial treatments for radiant, glowing skin. Customized to your skin type for the best results.",
    image: facial,
    featured: true,
  },
  {
    id: "11",
    name: "Henna Art",
    category: "beauty",
    description: "Beautiful, intricate henna designs for any occasion. From bridal mehndi to casual art — we've got you.",
    image: henna,
    featured: false,
  },
  {
    id: "12",
    name: "Nail Polish",
    category: "beauty",
    description: "Wide range of premium nail polish colours and finishes. From classic reds to trendy shades — pick your vibe.",
    image: manicure,
    featured: false,
  },
  {
    id: "13",
    name: "Eyebrow Shaping",
    category: "beauty",
    description: "Perfectly sculpted brows that frame your face beautifully. Threading, waxing, or shaping — your choice.",
    image: eyebrows,
    featured: true,
  },
];

export const categories = [
  { id: "all", label: "All Services" },
  { id: "hairdressing", label: "Hairdressing" },
  { id: "beauty", label: "Beauty & Nails" },
];
