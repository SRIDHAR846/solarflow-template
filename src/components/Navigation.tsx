import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <div className="w-6 h-6 rounded-full border-2 border-primary-foreground"></div>
            </div>
            <span className="text-xl lg:text-2xl font-bold text-foreground">ECOFLUX</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#solutions" className="text-foreground hover:text-primary transition-colors">Solutions</a>
            <a href="#plan" className="text-foreground hover:text-primary transition-colors">Plan</a>
            <Button size="lg" className="bg-primary hover:bg-accent text-primary-foreground">
              Get started
            </Button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
              <a href="#solutions" className="text-foreground hover:text-primary transition-colors">Solutions</a>
              <a href="#plan" className="text-foreground hover:text-primary transition-colors">Plan</a>
              <Button size="lg" className="w-full bg-primary hover:bg-accent text-primary-foreground">
                Get started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
