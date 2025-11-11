import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Homeowner",
    company: "Green Meadows Complex",
    rating: 5,
    text: "King Power Systems transformed our residential complex with their exceptional solar installation. Our electricity bills have dropped by 70%, and the entire process was smooth and professional. Highly recommended!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Facility Manager",
    company: "TechPark Bangalore",
    rating: 5,
    text: "The commercial solar solution provided by King Power Systems exceeded our expectations. Their team handled everything from planning to installation flawlessly. We're now generating clean energy and saving costs significantly.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Operations Director",
    company: "Chennai Manufacturing",
    rating: 5,
    text: "Our industrial facility's transition to solar power was seamless thanks to King Power Systems. Their expertise in large-scale installations and ongoing support has been invaluable. We've achieved energy independence!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Property Developer",
    company: "Sunrise Villas Pune",
    rating: 5,
    text: "Working with King Power Systems on our villa community was a pleasure. They designed a perfect solar system integrated with battery storage. Our residents love the sustainable energy solution and cost savings.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-background via-yellow-50/20 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1 bg-primary/10 rounded-full border border-primary/20 text-primary text-sm font-medium mb-4">
              testimonials
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl text-muted-foreground">
              Hear from satisfied customers who have made the switch to clean, renewable solar energy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-yellow-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto relative">
            <div className="relative h-[500px] md:h-[400px] flex items-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute w-full"
                >
                  <Card className="border-border/50 shadow-2xl">
                    <CardContent className="p-8 md:p-12">
                      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                        />
                        <div className="flex-1 text-center md:text-left">
                          <div className="flex gap-1 mb-4 justify-center md:justify-start">
                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                            ))}
                          </div>
                          <p className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                            "{testimonials[currentIndex].text}"
                          </p>
                          <div>
                            <div className="font-bold text-xl text-foreground">
                              {testimonials[currentIndex].name}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="rounded-full w-12 h-12 border-2"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="rounded-full w-12 h-12 border-2"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-primary w-8" 
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
