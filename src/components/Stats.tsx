import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "Happy customers" },
  { value: 98, suffix: "%", label: "Customer satisfaction" },
  { value: 25, suffix: " Years", label: "Warranty coverage" },
  { value: 2, suffix: "M+", label: "Savings generated", prefix: "$" }
];

const Counter = ({ value, suffix = "", prefix = "", isVisible }: { value: number; suffix?: string; prefix?: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [value, isVisible]);

  return (
    <span>{prefix}{count.toLocaleString()}{suffix}</span>
  );
};

export const Stats = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent opacity-90" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Counter 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  prefix={stat.prefix} 
                  isVisible={isVisible} 
                />
              </motion.div>
              <div className="text-lg sm:text-xl text-primary-foreground/90 group-hover:text-primary-foreground transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
