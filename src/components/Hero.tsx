import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-wind-turbines.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Layer 1: Background Image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.div>
      
      {/* Layer 2: Large "King power systems" Text (Background Layer) */}
      <div className="absolute inset-0 z-5 flex items-center justify-center pointer-events-none">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] xl:text-[14rem] font-bold text-white/30 leading-none select-none"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            letterSpacing: '-0.05em'
          }}
        >
          Powering a Brighter Future
        </motion.h1>
      </div>
      
      {/* Layer 3: Foreground Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block mb-4 px-4 py-1 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30"
          >
            <Link to="/about" className="text-primary-foreground text-sm font-medium">why choose us</Link>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white font-bold mb-4 leading-tight"
          >
            Empowering homes and industries<br />with sustainable solar energy
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl"
          >
            Join thousands of satisfied customers who have made the switch to clean, renewable energy
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/projects">
              <Button 
                size="lg" 
                className="relative overflow-hidden text-lg px-8 py-6 rounded-full bg-white/5 backdrop-blur-2xl border-2 border-white/20 text-white shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] hover:shadow-[0_8px_48px_0_rgba(255,255,255,0.25)] transition-all duration-700 hover:scale-110 hover:border-white/40 hover:bg-white/10 group"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))',
                }}
              >
                <span className="relative z-10 font-semibold">View Our Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 via-transparent to-white/3"></div>
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="relative overflow-hidden text-lg px-8 py-6 rounded-full bg-white/3 backdrop-blur-2xl border-2 border-white/15 text-white shadow-[0_8px_32px_0_rgba(255,255,255,0.08)] hover:shadow-[0_8px_48px_0_rgba(255,255,255,0.2)] transition-all duration-700 hover:scale-110 hover:border-white/35 hover:bg-white/8 group"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
                }}
              >
                <span className="relative z-10 font-semibold">Get Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 via-transparent to-white/3"></div>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Floating scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};