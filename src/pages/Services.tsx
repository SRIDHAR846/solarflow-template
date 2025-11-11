import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Sun, Battery, Settings, TrendingUp, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Sun,
    title: "Solar Panel Installation",
    description: "Professional installation of high-efficiency solar panels for residential, commercial, and industrial properties.",
    features: ["Custom system design", "Premium quality panels", "Expert installation"],
  },
  {
    icon: Battery,
    title: "Battery Storage Solutions",
    description: "Advanced energy storage systems to maximize your solar investment and ensure power availability 24/7.",
    features: ["Backup power", "Energy independence", "Grid optimization"],
  },
  {
    icon: Settings,
    title: "Maintenance & Monitoring",
    description: "Comprehensive maintenance services and real-time monitoring to keep your system running at peak performance.",
    features: ["24/7 monitoring", "Regular maintenance", "Performance optimization"],
  },
  {
    icon: TrendingUp,
    title: "Energy Consultation",
    description: "Expert analysis of your energy needs and customized solar solutions to maximize savings and efficiency.",
    features: ["Energy audits", "ROI analysis", "System optimization"],
  },
  {
    icon: DollarSign,
    title: "Government Subsidy Assistance",
    description: "Navigate government incentives and subsidies with our help to reduce your solar installation costs significantly.",
    features: ["Subsidy application", "Tax credit guidance", "Financing options"],
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navigation />
      
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
              our services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Comprehensive Solar Solutions
            </h1>
            <p className="text-xl text-muted-foreground">
              From installation to maintenance, we provide end-to-end solar energy solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24" ref={ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:-translate-y-2 group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-yellow-500 group-hover:bg-primary/20 transition-colors duration-300">
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Brands Slider */}
      <section className="py-16 lg:py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Trusted Brands We Work With
            </h2>
            <p className="text-xl text-muted-foreground">
              Premium solar equipment from world-leading manufacturers
            </p>
          </motion.div>

          {/* Infinite Scroll Animation */}
          <div className="relative">
            <div className="flex gap-16 animate-scroll">
              {/* First set of logos */}
              <div className="flex gap-16 items-center min-w-max">
                <div className="flex items-center justify-center h-24 w-40 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4">
                  <img src="https://www.novagreentech.com/assets/images/logo.png" alt="Nova Solar" className="h-full w-full object-contain" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2316a34a" font-size="24" font-weight="bold">NOVA</text></svg>'; }} />
                </div>
                <div className="flex items-center justify-center h-24 w-40 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4">
                  <img src="https://premierenergies.com/images/logo.png" alt="Premier Energies" className="h-full w-full object-contain" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%232563eb" font-size="20" font-weight="bold">Premier</text></svg>'; }} />
                </div>
                <div className="flex items-center justify-center h-24 w-40 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4">
                  <img src="https://www.loomsolar.com/cdn/shop/files/loom-solar-logo.png" alt="Loom Solar" className="h-full w-full object-contain" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2315803d" font-size="18" font-weight="bold">LOOM SOLAR</text></svg>'; }} />
                </div>
                <div className="flex items-center justify-center h-24 w-40 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4">
                  <img src="https://www.microtekdirect.com/skin/frontend/microtek/default/images/logo.png" alt="Microtek" className="h-full w-full object-contain" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23dc2626" font-size="20" font-weight="bold">MICROTEK</text></svg>'; }} />
                </div>
                <div className="flex items-center justify-center h-24 w-40 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4">
                  <img src="https://www.exideindustries.com/images/exide-logo.png" alt="Exide" className="h-full w-full object-contain" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%231d4ed8" font-size="24" font-weight="bold">EXIDE</text></svg>'; }} />
                </div>
                <div className="flex items-center justify-center h-24 w-40 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23e03c31' font-size='28' font-weight='bold'%3EDeye%3C/text%3E%3C/svg%3E" alt="Deye" className="h-full w-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-24 w-40 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%230088cc' font-size='32' font-weight='bold'%3EEWO%3C/text%3E%3C/svg%3E" alt="EWO" className="h-full w-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-24 w-40 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23003d7a' font-size='28' font-weight='bold'%3EVSOL%3C/text%3E%3Ctext x='50%25' y='80%25' dominant-baseline='middle' text-anchor='middle' fill='%23666' font-size='10'%3ETechnology Beyond Imagination%3C/text%3E%3C/svg%3E" alt="V-SOL" className="h-full w-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-24 w-40 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' fill='%23d32f2f' font-size='24' font-weight='bold'%3EPOLYCAB%3C/text%3E%3Ctext x='50%25' y='70%25' dominant-baseline='middle' text-anchor='middle' fill='%23d32f2f' font-size='18'%3ESOLAR%3C/text%3E%3C/svg%3E" alt="Polycab Solar" className="h-full w-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-24 w-40 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Crect width='200' height='40' y='10' fill='%23b8cc00' rx='5'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23000' font-size='24' font-weight='bold'%3EAMARON%3C/text%3E%3Ctext x='50%25' y='95%25' dominant-baseline='middle' text-anchor='middle' fill='%23666' font-size='8'%3ELASTS LONG, REALLY LONG.%3C/text%3E%3C/svg%3E" alt="Amaron" className="h-full w-full object-contain" />
                </div>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-16 items-center min-w-max">
                <div className="flex items-center justify-center h-24 w-40 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4">
                  <img src="https://www.novagreentech.com/assets/images/logo.png" alt="Nova Solar" className="h-full w-full object-contain" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2316a34a" font-size="24" font-weight="bold">NOVA</text></svg>'; }} />
                </div>
                <div className="flex items-center justify-center h-24 w-40 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4">
                  <img src="https://premierenergies.com/images/logo.png" alt="Premier Energies" className="h-full w-full object-contain" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%232563eb" font-size="20" font-weight="bold">Premier</text></svg>'; }} />
                </div>
                <div className="flex items-center justify-center h-24 w-40 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4">
                  <img src="https://www.loomsolar.com/cdn/shop/files/loom-solar-logo.png" alt="Loom Solar" className="h-full w-full object-contain" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%2315803d" font-size="18" font-weight="bold">LOOM SOLAR</text></svg>'; }} />
                </div>
                <div className="flex items-center justify-center h-24 w-40 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4">
                  <img src="https://www.microtekdirect.com/skin/frontend/microtek/default/images/logo.png" alt="Microtek" className="h-full w-full object-contain" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23dc2626" font-size="20" font-weight="bold">MICROTEK</text></svg>'; }} />
                </div>
                <div className="flex items-center justify-center h-24 w-40 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4">
                  <img src="https://www.exideindustries.com/images/exide-logo.png" alt="Exide" className="h-full w-full object-contain" onError={(e) => { e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%231d4ed8" font-size="24" font-weight="bold">EXIDE</text></svg>'; }} />
                </div>
                <div className="flex items-center justify-center h-24 w-40 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23e03c31' font-size='28' font-weight='bold'%3EDeye%3C/text%3E%3C/svg%3E" alt="Deye" className="h-full w-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-24 w-40 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%230088cc' font-size='32' font-weight='bold'%3EEWO%3C/text%3E%3C/svg%3E" alt="EWO" className="h-full w-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-24 w-40 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23003d7a' font-size='28' font-weight='bold'%3EVSOL%3C/text%3E%3Ctext x='50%25' y='80%25' dominant-baseline='middle' text-anchor='middle' fill='%23666' font-size='10'%3ETechnology Beyond Imagination%3C/text%3E%3C/svg%3E" alt="V-SOL" className="h-full w-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-24 w-40 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' fill='%23d32f2f' font-size='24' font-weight='bold'%3EPOLYCAB%3C/text%3E%3Ctext x='50%25' y='70%25' dominant-baseline='middle' text-anchor='middle' fill='%23d32f2f' font-size='18'%3ESOLAR%3C/text%3E%3C/svg%3E" alt="Polycab Solar" className="h-full w-full object-contain" />
                </div>
                <div className="flex items-center justify-center h-24 w-40 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 60'%3E%3Crect width='200' height='40' y='10' fill='%23b8cc00' rx='5'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23000' font-size='24' font-weight='bold'%3EAMARON%3C/text%3E%3Ctext x='50%25' y='95%25' dominant-baseline='middle' text-anchor='middle' fill='%23666' font-size='8'%3ELASTS LONG, REALLY LONG.%3C/text%3E%3C/svg%3E" alt="Amaron" className="h-full w-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Go Solar?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start your journey to clean, renewable energy today. Our team is ready to help you make the switch.
            </p>
            <Link to="/contact">
              <Button 
                size="lg" 
                className="relative overflow-hidden text-lg px-8 py-6 rounded-full bg-white/10 backdrop-blur-2xl border-2 border-white/25 text-foreground hover:text-white shadow-[0_8px_32px_0_rgba(255,255,255,0.15)] hover:shadow-[0_8px_48px_0_rgba(255,255,255,0.3)] transition-all duration-700 hover:scale-110 hover:border-white/45 group"
              >
                <span className="relative z-10 font-semibold">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
