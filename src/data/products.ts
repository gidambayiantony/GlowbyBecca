export type Product = {
  id: string;
  name: string;
  category: "gym-wear" | "athleisure" | "accessories";
  description: string;
  images: string[];
  featured: boolean;
};

export const WHATSAPP_NUMBER = "254706777368";
export const INSTAGRAM_URL = "https://www.instagram.com/fitness_fanatics254";

export const getWhatsAppLink = (productName?: string) => {
  const message = productName
    ? `Hi, I'm interested in ${productName} from Fitness Fanatics 254!`
    : "Hi, I'd like to inquire about your products at Fitness Fanatics 254!";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Performance Tank Top",
    category: "gym-wear",
    description: "Breathable, moisture-wicking tank top designed for intense workouts. Lightweight and stylish.",
    images: ["/placeholder.svg"],
    featured: true,
  },
  {
    id: "2",
    name: "Flex Fit Leggings",
    category: "gym-wear",
    description: "High-waist compression leggings with squat-proof fabric. Maximum flexibility and comfort.",
    images: ["/placeholder.svg"],
    featured: true,
  },
  {
    id: "3",
    name: "Urban Sports Hoodie",
    category: "athleisure",
    description: "Premium cotton-blend hoodie perfect for pre and post workout. Street-ready style.",
    images: ["/placeholder.svg"],
    featured: true,
  },
  {
    id: "4",
    name: "Power Shorts",
    category: "gym-wear",
    description: "Quick-dry training shorts with built-in liner. Designed for maximum range of motion.",
    images: ["/placeholder.svg"],
    featured: true,
  },
  {
    id: "5",
    name: "Street Joggers",
    category: "athleisure",
    description: "Tapered joggers with zip pockets. From gym to street in style.",
    images: ["/placeholder.svg"],
    featured: false,
  },
  {
    id: "6",
    name: "Compression Sports Bra",
    category: "gym-wear",
    description: "High-support sports bra with breathable mesh panels. Built for high-impact training.",
    images: ["/placeholder.svg"],
    featured: true,
  },
  {
    id: "7",
    name: "Gym Duffel Bag",
    category: "accessories",
    description: "Spacious duffel with shoe compartment and wet pocket. Your perfect gym companion.",
    images: ["/placeholder.svg"],
    featured: false,
  },
  {
    id: "8",
    name: "Resistance Band Set",
    category: "accessories",
    description: "5-piece resistance band set with varying levels. Train anywhere, anytime.",
    images: ["/placeholder.svg"],
    featured: true,
  },
  {
    id: "9",
    name: "Oversized Muscle Tee",
    category: "athleisure",
    description: "Relaxed fit muscle tee in premium cotton. Bold graphics, effortless style.",
    images: ["/placeholder.svg"],
    featured: false,
  },
  {
    id: "10",
    name: "Training Gloves",
    category: "accessories",
    description: "Padded training gloves with wrist support. Grip harder, lift heavier.",
    images: ["/placeholder.svg"],
    featured: false,
  },
  {
    id: "11",
    name: "Seamless Long Sleeve",
    category: "gym-wear",
    description: "Body-contour seamless top with thumb holes. Engineered for performance.",
    images: ["/placeholder.svg"],
    featured: false,
  },
  {
    id: "12",
    name: "Shaker Bottle Pro",
    category: "accessories",
    description: "Leak-proof shaker with mixing ball and storage compartment. Fuel your gains.",
    images: ["/placeholder.svg"],
    featured: false,
  },
];

export const categories = [
  { id: "all", label: "All Products" },
  { id: "gym-wear", label: "Gym Wear" },
  { id: "athleisure", label: "Athleisure" },
  { id: "accessories", label: "Accessories" },
];
