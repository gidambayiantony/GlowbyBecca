import tightsBraSet from "@/assets/products/tights-bra-set.jpg";
import orangeSportsBra from "@/assets/products/orange-sports-bra.jpg";
import blueSet from "@/assets/products/blue-set.jpg";
import pumaBra from "@/assets/products/puma-bra.jpg";
import colorfulTop from "@/assets/products/colorful-top.jpg";
import coralBra from "@/assets/products/coral-bra.jpg";
import blackLeggings from "@/assets/products/black-leggings.jpg";
import burgundyJoggers from "@/assets/products/burgundy-joggers.jpg";
import gymBag from "@/assets/products/gym-bag.jpg";
import resistanceBands from "@/assets/products/resistance-bands.jpg";
import whiteLongsleeve from "@/assets/products/white-longsleeve.jpg";
import trainingGloves from "@/assets/products/training-gloves.jpg";
import shakerBottle from "@/assets/products/shaker-bottle.jpg";
import berrySportsBra from "@/assets/products/berry-sports-bra.jpg";
import berryRacerback from "@/assets/products/berry-racerback.jpg";
import winePocketLeggings from "@/assets/products/wine-pocket-leggings.jpg";
import charcoalHeatherLeggings from "@/assets/products/charcoal-heather-leggings.jpg";
import pinkWaistSkirtedLeggings from "@/assets/products/pink-waist-skirted-leggings.jpg";
import classicBlackLeggingsV2 from "@/assets/products/classic-black-leggings-v2.jpg";
import magentaCrocLeggings from "@/assets/products/magenta-croc-leggings.jpg";

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
    name: "Cross-Back Sports Bra",
    category: "gym-wear",
    description: "Vibrant orange cross-back design with ribbed fabric. High support for intense workouts.",
    images: [orangeSportsBra],
    featured: true,
  },
  {
    id: "2",
    name: "V-Waist Leggings Set",
    category: "gym-wear",
    description: "High-waist sculpting leggings paired with matching sports bra. Ultimate comfort meets style.",
    images: [tightsBraSet],
    featured: true,
  },
  {
    id: "3",
    name: "Cutout Sports Bra & Tights",
    category: "gym-wear",
    description: "Bold blue cutout sports bra with matching compression tights. Turn heads at the gym.",
    images: [blueSet],
    featured: true,
  },
  {
    id: "4",
    name: "Classic Sports Bralette",
    category: "gym-wear",
    description: "Comfortable heather grey bralette with branded band. Perfect for light to medium support.",
    images: [pumaBra],
    featured: true,
  },
  {
    id: "5",
    name: "Abstract Print Crop Top",
    category: "athleisure",
    description: "Vibrant abstract racerback crop top. Bold prints that pop from gym to brunch.",
    images: [colorfulTop],
    featured: true,
  },
  {
    id: "6",
    name: "Strappy Back Bra",
    category: "gym-wear",
    description: "Beautiful coral strappy-back design with adjustable straps. Form meets function.",
    images: [coralBra],
    featured: true,
  },
  {
    id: "7",
    name: "Sculpt Compression Leggings",
    category: "gym-wear",
    description: "Sleek black compression leggings with contouring seams. Squat-proof and buttery soft.",
    images: [blackLeggings],
    featured: false,
  },
  {
    id: "8",
    name: "Tapered Joggers",
    category: "athleisure",
    description: "Burgundy wine tapered joggers with zip pockets. From gym to street in style.",
    images: [burgundyJoggers],
    featured: false,
  },
  {
    id: "9",
    name: "Seamless Long Sleeve Crop",
    category: "athleisure",
    description: "White seamless crop top with thumb holes. Engineered for layering and performance.",
    images: [whiteLongsleeve],
    featured: false,
  },
  {
    id: "10",
    name: "Gym Duffel Bag",
    category: "accessories",
    description: "Spacious pink duffel with shoe compartment and wet pocket. Your perfect gym companion.",
    images: [gymBag],
    featured: false,
  },
  {
    id: "11",
    name: "Resistance Band Set",
    category: "accessories",
    description: "5-piece resistance band set with varying levels. Train anywhere, anytime.",
    images: [resistanceBands],
    featured: false,
  },
  {
    id: "12",
    name: "Training Gloves",
    category: "accessories",
    description: "Padded training gloves with rose gold accents and wrist support. Lift in style.",
    images: [trainingGloves],
    featured: false,
  },
  {
    id: "13",
    name: "Rose Gold Shaker Bottle",
    category: "accessories",
    description: "Leak-proof shaker with mixing ball and storage compartment. Fuel your gains beautifully.",
    images: [shakerBottle],
    featured: false,
  },
  {
    id: "14",
    name: "Berry Racerback Sports Bra",
    category: "gym-wear",
    description: "Rich berry-toned racerback bra with ribbed band. High support meets bold color.",
    images: [berrySportsBra, berryRacerback],
    featured: true,
  },
  {
    id: "15",
    name: "Wine Pocket Leggings",
    category: "gym-wear",
    description: "Deep wine high-waist leggings with side pockets. Squat-proof with a sculpting fit.",
    images: [winePocketLeggings],
    featured: true,
  },
  {
    id: "16",
    name: "Charcoal Heather Leggings",
    category: "gym-wear",
    description: "Heathered charcoal compression leggings with contour seams. Sleek and versatile.",
    images: [charcoalHeatherLeggings],
    featured: false,
  },
  {
    id: "17",
    name: "Skirted Training Leggings",
    category: "athleisure",
    description: "Black leggings with pink waistband and built-in skirt overlay. Gym to street in style.",
    images: [pinkWaistSkirtedLeggings],
    featured: false,
  },
  {
    id: "18",
    name: "Midnight Black Leggings",
    category: "gym-wear",
    description: "Ultra-smooth solid black leggings with matte finish. The ultimate wardrobe essential.",
    images: [classicBlackLeggingsV2],
    featured: false,
  },
  {
    id: "19",
    name: "Magenta Croc-Print Leggings",
    category: "gym-wear",
    description: "Bold magenta leggings with subtle crocodile texture. Stand out with every rep.",
    images: [magentaCrocLeggings],
    featured: false,
  },
];

export const categories = [
  { id: "all", label: "All Products" },
  { id: "gym-wear", label: "Gym Wear" },
  { id: "athleisure", label: "Athleisure" },
  { id: "accessories", label: "Accessories" },
];
