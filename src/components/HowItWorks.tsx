import { Card, CardContent } from "@/components/ui/card";
import { Phone, ClipboardCheck, Hammer } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Get in touch",
    description: "Reach out and tell us about your energy needs. We'll schedule a free consultation to discuss your goals and answer any questions"
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Custom assessment",
    description: "Our experts evaluate your property and usage to design the perfect renewable energy solution tailored to your needs"
  },
  {
    number: "03",
    icon: Hammer,
    title: "Seamless installation",
    description: "Sit back while our certified team handles everything—from permits to installation. We'll have you up and running in no time"
  }
];

export const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 lg:py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 bg-primary/10 rounded-full border border-primary/20 text-primary text-sm font-medium mb-4">
            how it works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            A simple, seamless, and stress-free switch to clean energy
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            >
              <Card className="border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl group h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8 relative z-10">
                  <motion.div 
                    className="mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-500">
                      {step.number}
                    </span>
                  </motion.div>
                  
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6"
                    whileHover={{ y: -5 }}
                  >
                    <step.icon className="h-7 w-7 text-primary" />
                  </motion.div>

                  <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
