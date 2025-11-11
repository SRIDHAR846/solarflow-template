import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wind-turbines.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-32">
        <div className="max-w-4xl">
          <div className="inline-block mb-4 px-4 py-1 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30">
            <span className="text-primary-foreground text-sm font-medium">why choose us</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight">
            Green power
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-4 font-medium">
            real savings, zero hassle
          </p>
          
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl">
            Why more and more people are choosing to switch to renewable energy
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground text-lg px-8 py-6">
              Get started
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/80 text-white hover:bg-white/10 hover:text-white text-lg px-8 py-6 backdrop-blur-sm"
            >
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
