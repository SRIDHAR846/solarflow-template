

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  description: string;
  brands: string[];
  features: string[];
  images: string[];
  warranty?: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "UPS / INVERTER",
    description: "High-quality UPS and Inverter systems for uninterrupted power supply",
    brands: ["Microtek", "EXIDE", "Amaron", "LUMINOUS"],
    features: [
      "Pure Sine Wave Output",
      "Smart Battery Management",
      "Overload Protection",
      "Fast Charging Technology",
      "LCD Display"
    ],
    images: [
      "/assets/products/microtek.jpg",
      "/assets/products/exide.jpg",
      "/assets/products/amaron.jpg",
      "/assets/products/luminous.jpg"
    ]
  },
  {
    id: 2,
    title: "SOLAR WATER PUMPS",
    description: "Efficient solar-powered water pumping solutions",
    brands: ["PLDC Motor/Pump"],
    features: [
      "PLDC MOTOR/PUMP (NON-DCR = 450-725Wp)",
      "BIFACIAL SOLAR PANEL",
      "N-TYPE SOLAR PANEL",
      "Internal & External Drives",
      "High Efficiency DC Motor",
      "Corrosion Resistant Body"
    ],
    images: [
      "/assets/products/solar-pump-1.jpg",
      "/assets/products/solar-pump-2.jpg",
      "/assets/products/solar-pump-3.jpg",
      "/assets/products/bifacial-panel.jpg"
    ]
  },
  {
    id: 3,
    title: "UPS & BATTERIES",
    description: "160Ah Battery - Domestic use with extended warranty",
    brands: ["Microtek", "EXIDE", "Amaron"],
    features: [
      "160Ah Capacity",
      "Domestic Use",
      "60 Months Warranty",
      "Deep Discharge Recovery",
      "Low Maintenance",
      "High Durability"
    ],
    warranty: "60 MONTHS WARRANTY",
    images: [
      "https://images.unsplash.com/photo-1626788790697-5a0c1b00c4a2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=600&fit=crop"
    ]
  }
];

const ProductCarousel = ({ product }: { product: Product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      {/* Image Carousel */}
      <div className="relative">
        <div className="relative h-96 rounded-2xl overflow-hidden bg-muted">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={product.images[currentImageIndex]}
              alt={`${product.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          {/* Navigation Arrows */}
          {product.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
              >
                <ChevronLeft className="h-6 w-6 text-foreground" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
              >
                <ChevronRight className="h-6 w-6 text-foreground" />
              </button>
            </>
          )}

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex ? "bg-white w-8" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Preview */}
        <div className="flex gap-2 mt-4 overflow-x-auto">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentImageIndex ? "border-primary" : "border-transparent"
              }`}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div>
        <h3 className="text-3xl font-bold text-foreground mb-4">{product.title}</h3>
        <p className="text-lg text-muted-foreground mb-6">{product.description}</p>

        {/* Brands */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-3">Available Brands:</h4>
          <div className="flex flex-wrap gap-2">
            {product.brands.map((brand, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Warranty Badge */}
        {product.warranty && (
          <div className="mb-6">
            <div className="inline-block px-6 py-3 bg-green-100 text-green-800 rounded-lg font-bold">
              ✓ {product.warranty}
            </div>
          </div>
        )}

        {/* Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Link to="/contact">
          <Button 
            size="lg" 
            className="w-full relative overflow-hidden text-lg px-8 py-6 rounded-full bg-white/10 backdrop-blur-2xl border-2 border-white/25 text-foreground hover:text-white shadow-[0_8px_32px_0_rgba(255,255,255,0.15)] hover:shadow-[0_8px_48px_0_rgba(255,255,255,0.3)] transition-all duration-700 hover:scale-105 group"
          >
            <span className="relative z-10 font-semibold">Get Quote</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Products = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1 bg-primary/10 rounded-full border border-primary/20 text-primary text-sm font-medium mb-4">
              our products
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Premium Solar & Power Solutions
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our comprehensive range of solar products, UPS systems, inverters, and batteries from trusted brands
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-24" ref={ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="border-border/50 overflow-hidden">
                  <CardContent className="p-8 lg:p-12">
                    <ProductCarousel product={product} />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Products;
