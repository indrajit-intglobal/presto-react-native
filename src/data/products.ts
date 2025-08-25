import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "PowerFlex Commercial Treadmill",
    price: 2899,
    originalPrice: 3299,
    description: "Professional-grade treadmill with advanced cushioning system and interactive training programs.",
    category: "Cardio",
    image: "/api/placeholder/400/300",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    features: ["15.6\" HD Touchscreen", "50 Built-in Programs", "0-15% Incline", "22\" Wide Belt"]
  },
  {
    id: "2",
    name: "MaxStrength Olympic Barbell Set",
    price: 459,
    description: "Complete Olympic barbell set with 300lbs of weight plates. Perfect for serious strength training.",
    category: "Strength",
    image: "/api/placeholder/400/300",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    features: ["45lb Olympic Barbell", "300lbs Weight Plates", "Spring Collars Included", "Cast Iron Construction"]
  },
  {
    id: "3",
    name: "FlexCore Adjustable Dumbbells",
    price: 329,
    originalPrice: 399,
    description: "Space-saving adjustable dumbbells that replace 15 sets of weights. Quick-change design.",
    category: "Strength",
    image: "/api/placeholder/400/300",
    rating: 4.7,
    reviews: 156,
    inStock: true,
    features: ["5-50lbs per Dumbbell", "Quick Dial Selection", "Compact Storage", "Ergonomic Grip"]
  },
  {
    id: "4",
    name: "HyperBike Elite Exercise Bike",
    price: 799,
    description: "Indoor cycling bike with magnetic resistance and live streaming classes.",
    category: "Cardio",
    image: "/api/placeholder/400/300",
    rating: 4.6,
    reviews: 67,
    inStock: true,
    features: ["Magnetic Resistance", "Live Streaming", "Adjustable Seat", "Heart Rate Monitor"]
  },
  {
    id: "5",
    name: "TitanGrip Pull-up Station",
    price: 189,
    description: "Multi-grip pull-up and dip station. Heavy-duty steel construction for maximum stability.",
    category: "Strength",
    image: "/api/placeholder/400/300",
    rating: 4.5,
    reviews: 43,
    inStock: true,
    features: ["6 Grip Positions", "Dip Station", "300lb Weight Capacity", "Non-slip Base"]
  },
  {
    id: "6",
    name: "ProBalance Yoga Mat Set",
    price: 89,
    originalPrice: 119,
    description: "Premium yoga mat with alignment lines, blocks, and carrying strap included.",
    category: "Accessories",
    image: "/api/placeholder/400/300",
    rating: 4.4,
    reviews: 201,
    inStock: true,
    features: ["6mm Thickness", "Alignment Lines", "Yoga Blocks Included", "Carrying Strap"]
  }
];