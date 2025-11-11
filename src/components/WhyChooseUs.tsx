import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Leaf, Zap, TrendingUp } from "lucide-react";
import renewableEnergyImage from "@/assets/renewable-energy.jpg";

const benefits = [
  {
    icon: DollarSign,
    title: "Lower bills, higher savings",
    description: "Save more each month by reducing your electricity costs—without changing your lifestyle. It's a smart way to free up your budget long term"
  },
  {
    icon: Leaf,
    title: "Eco-friendly living",
    description: "Cut your carbon footprint and support a cleaner planet with every kilowatt. Go green without giving up comfort or convenience"
  },
  {
    icon: Zap,
    title: "Reliable energy",
    description: "Enjoy steady, dependable power even during outages. Renewable energy keeps your lights on and your home running smoothly"
  },
  {
    icon: TrendingUp,
    title: "Smart investment",
    description: "Boost your home's value and enjoy long-term savings. With tax incentives and rebates, going green pays off faster than you think"
  }
];

export const WhyChooseUs = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 rounded-full border border-primary/20 text-primary text-sm font-medium mb-4">
            why choose us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why more and more people are choosing to switch to renewable energy
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <benefit.icon className="h-6 w-6 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={renewableEnergyImage} 
                alt="Renewable energy installation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
