import headsetImage from "@/assets/product-headset.jpg";
import keyboardImage from "@/assets/product-keyboard.jpg";
import mouseImage from "@/assets/product-mouse.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  features: string[];
  specifications: Record<string, string>;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Elite Gaming Headset X1",
    price: 299.99,
    image: headsetImage,
    description: "Premium gaming headset with 7.1 surround sound, noise cancellation, and RGB lighting. Perfect for competitive gaming.",
    category: "Audio",
    features: [
      "7.1 Surround Sound",
      "Active Noise Cancellation",
      "RGB Lighting",
      "Memory Foam Cushions",
      "Detachable Microphone"
    ],
    specifications: {
      "Driver Size": "50mm",
      "Frequency Response": "20Hz - 20kHz",
      "Impedance": "32Ω",
      "Weight": "320g",
      "Cable Length": "2m"
    },
    inStock: true
  },
  {
    id: "2",
    name: "Mechanical Gaming Keyboard Pro",
    price: 189.99,
    image: keyboardImage,
    description: "Professional mechanical gaming keyboard with tactile switches, per-key RGB lighting, and programmable macros.",
    category: "Keyboards",
    features: [
      "Mechanical Switches",
      "Per-Key RGB",
      "Programmable Macros",
      "Media Controls",
      "USB Passthrough"
    ],
    specifications: {
      "Switch Type": "Tactile Blue",
      "Key Layout": "Full Size (104 Keys)",
      "Actuation Force": "50g",
      "Key Travel": "4mm",
      "Polling Rate": "1000Hz"
    },
    inStock: true
  },
  {
    id: "3",
    name: "Precision Gaming Mouse Z9",
    price: 129.99,
    image: mouseImage,
    description: "High-precision gaming mouse with 25,600 DPI sensor, customizable weights, and ergonomic design for extended gaming sessions.",
    category: "Mice",
    features: [
      "25,600 DPI Sensor",
      "Customizable Weights",
      "Ergonomic Design",
      "RGB Lighting",
      "8 Programmable Buttons"
    ],
    specifications: {
      "DPI Range": "100 - 25,600",
      "Tracking Speed": "650 IPS",
      "Acceleration": "50G",
      "Polling Rate": "1000Hz",
      "Weight": "95g (without weights)"
    },
    inStock: true
  },
  {
    id: "4",
    name: "Gaming Monitor UltraWide",
    price: 799.99,
    image: headsetImage, // placeholder
    description: "34-inch curved gaming monitor with 144Hz refresh rate, 1ms response time, and HDR support for immersive gaming.",
    category: "Monitors",
    features: [
      "34-inch Curved Display",
      "144Hz Refresh Rate",
      "1ms Response Time",
      "HDR10 Support",
      "G-Sync Compatible"
    ],
    specifications: {
      "Screen Size": "34 inches",
      "Resolution": "3440 x 1440",
      "Refresh Rate": "144Hz",
      "Response Time": "1ms",
      "Panel Type": "VA"
    },
    inStock: true
  },
  {
    id: "5",
    name: "Gaming Chair Elite",
    price: 449.99,
    image: keyboardImage, // placeholder
    description: "Ergonomic gaming chair with premium materials, adjustable lumbar support, and RGB accent lighting.",
    category: "Furniture",
    features: [
      "Ergonomic Design",
      "Premium PU Leather",
      "Adjustable Lumbar Support",
      "RGB Accent Lighting",
      "360° Swivel"
    ],
    specifications: {
      "Weight Capacity": "150kg",
      "Seat Height": "42-52cm",
      "Backrest Angle": "90-160°",
      "Material": "PU Leather",
      "Base": "Aluminum Alloy"
    },
    inStock: false
  },
  {
    id: "6",
    name: "Gaming Webcam 4K",
    price: 199.99,
    image: mouseImage, // placeholder
    description: "4K streaming webcam with auto-focus, low-light correction, and built-in stereo microphones for content creators.",
    category: "Streaming",
    features: [
      "4K Recording",
      "Auto-Focus",
      "Low-Light Correction",
      "Built-in Stereo Mics",
      "USB 3.0"
    ],
    specifications: {
      "Resolution": "4K at 30fps",
      "Field of View": "90°",
      "Focus": "Auto-focus",
      "Microphones": "Dual Stereo",
      "Connection": "USB 3.0"
    },
    inStock: true
  }
];

export const getProduct = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (count: number = 3): Product[] => {
  return products.slice(0, count);
};