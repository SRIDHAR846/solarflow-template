import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Factory, ArrowRight } from "lucide-react";
import solarPanelsImage from "@/assets/solar-panels.jpg";

const solutions = [
  {
    icon: Home,
    title: "Residential",
    description: "Power your home with clean, renewable energy and enjoy significant savings on your electricity bills"
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Reduce operational costs and demonstrate your commitment to sustainability with our commercial solutions"
  },
  {
    icon: Factory,
    title: "Industrial",
    description: "Large-scale renewable energy solutions designed to meet the demands of industrial operations"
  }
];

export const Solutions = () => {
  return (
    <section id="solutions" className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 rounded-full border border-primary/20 text-primary text-sm font-medium mb-4">
            our solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Renewable energy solutions for everyone
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're a homeowner, business owner, or industrial operator, we have the perfect renewable energy solution for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          <div className="relative rounded-2xl overflow-hidden h-[400px]">
            <img 
              src={solarPanelsImage} 
              alt="Solar panel installation"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid gap-6">
            {solutions.map((solution, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <solution.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {solution.description}
                      </p>
                      <Button variant="link" className="p-0 h-auto text-primary hover:text-accent">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
