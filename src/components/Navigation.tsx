import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Products", path: "#products" },
    { name: "Projects", path: "#projects" },
    { name: "Testimonials", path: "#testimonials" },
    { name: "Contact", path: "#contact" },
  ];

  const scrollToSection = (path: string) => {
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-2xl border-b-2 border-white/20 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/10 animate-pulse pointer-events-none"></div>
        
        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="flex justify-between items-center h-16 lg:h-20 relative z-10">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="flex items-center gap-2 group">
            <img 
              src="/assets/king-logo.png" 
              alt="King Power Systems" 
              className="h-14 w-14 object-contain"
              onError={(e) => {
                // Fallback to text if image fails to load
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const fallback = document.createElement('div');
                  fallback.className = 'h-14 w-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-white font-bold text-xl';
                  fallback.textContent = 'K';
                  parent.insertBefore(fallback, e.currentTarget);
                }
              }}
            />
            <span className="text-xl lg:text-2xl font-bold text-foreground">King Power Systems</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.path); }}
                className="relative text-foreground hover:text-yellow-400 transition-all duration-300 font-medium cursor-pointer group px-4 py-2 rounded-lg overflow-hidden"
              >
                <span className="relative z-10">{item.name}</span>
                {/* Liquid glass hover effect */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-yellow-300/30 to-yellow-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 border-2 border-white/30 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </a>
            ))}
          </div>

          <button 
            className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 relative z-10">
            <div className="flex flex-col gap-4 bg-white/10 backdrop-blur-xl rounded-2xl p-4 mt-4 border-2 border-white/20 shadow-[0_8px_32px_0_rgba(255,255,255,0.15)]">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.path); }}
                  className="relative text-foreground hover:text-yellow-400 transition-all duration-300 font-medium cursor-pointer px-4 py-3 rounded-lg overflow-hidden group"
                >
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-300/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>
        )}
        </div>
      </nav>
    </>
  );
};
