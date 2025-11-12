import { motion } from "framer-motion";
import { Sun, Battery, Settings, TrendingUp, DollarSign, IndianRupee, Zap, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroImage from "@/assets/solar-panels.jpg";

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

const pmSuryaGharData = [
  { capacity: "1 KWP", unit: "UP TO 300", saving: "Rs.30,000", subsidy: "Rs.30,000", payBill: "Rs.110" },
  { capacity: "2 KWP", unit: "UP TO 600", saving: "Rs.60,000", subsidy: "Rs.60,000", payBill: "Rs.220" },
  { capacity: "3 KWP", unit: "UP TO 900", saving: "Rs.78,000", subsidy: "Rs.78,000", payBill: "Rs.330" },
  { capacity: "4 KWP", unit: "UP TO 1200", saving: "Rs.78,000", subsidy: "Rs.78,000", payBill: "Rs.440" },
  { capacity: "5 KWP", unit: "UP TO 1500", saving: "Rs.78,000", subsidy: "Rs.78,000", payBill: "Rs.550" },
  { capacity: "6 KWP", unit: "UP TO 1800", saving: "Rs.78,000", subsidy: "Rs.78,000", payBill: "Rs.660" },
  { capacity: "7 KWP", unit: "UP TO 2100", saving: "Rs.78,000", subsidy: "Rs.78,000", payBill: "Rs.770" },
  { capacity: "8 KWP", unit: "UP TO 2400", saving: "Rs.78,000", subsidy: "Rs.78,000", payBill: "Rs.880" },
  { capacity: "9 KWP", unit: "UP TO 2700", saving: "Rs.78,000", subsidy: "Rs.78,000", payBill: "Rs.990" },
  { capacity: "10 KWP", unit: "UP TO 3000", saving: "Rs.78,000", subsidy: "Rs.78,000", payBill: "Rs.1100" },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect();
        const offset = window.pageYOffset - servicesSection.offsetTop;
        setScrollY(offset);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax Background */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        {/* Layer 1: Animated Background Image */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            transform: `translateY(${scrollY * 0.3}px)`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background"></div>
          {/* Animated overlay gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Floating Solar Icons */}
        <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 360],
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            >
              <Sun className="h-8 w-8 text-yellow-400/40" />
            </motion.div>
          ))}
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 z-1 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, -200],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Layer 2: Large Background Text */}
        <div className="absolute inset-0 z-5 flex items-center justify-center pointer-events-none">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-bold text-white/20 leading-none select-none text-center px-4"
            style={{
              transform: `translateY(${scrollY * 0.15}px)`,
              letterSpacing: '-0.05em'
            }}
          >
            Solar Solutions
          </motion.h1>
        </div>

        {/* Layer 3: Foreground Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block px-4 py-1 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 text-white text-sm font-medium mb-4"
            >
              our services
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Our Comprehensive Solar Solutions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl text-white/90"
            >
              From installation to maintenance, we provide end-to-end solar energy solutions tailored to your needs
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 relative" ref={ref}>
        {/* Animated background waves */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-full h-64 bg-gradient-to-r from-yellow-400/5 via-yellow-500/10 to-yellow-400/5 blur-3xl"
            animate={{
              x: ['-100%', '100%'],
              y: [0, 50, 0],
            }}
            transition={{
              x: { duration: 20, repeat: Infinity, ease: "linear" },
              y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{ top: '20%' }}
          />
          <motion.div
            className="absolute w-full h-64 bg-gradient-to-r from-green-400/5 via-green-500/10 to-green-400/5 blur-3xl"
            animate={{
              x: ['100%', '-100%'],
              y: [0, -50, 0],
            }}
            transition={{
              x: { duration: 25, repeat: Infinity, ease: "linear" },
              y: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{ top: '60%' }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:-translate-y-2 group relative overflow-hidden">
                  {/* Animated background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-500/0 to-yellow-600/0 group-hover:from-yellow-400/10 group-hover:via-yellow-500/5 group-hover:to-yellow-600/10 transition-all duration-500 pointer-events-none"></div>
                  
                  {/* Animated light beam */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 pointer-events-none"
                  />

                  <CardContent className="p-8 relative z-10">
                    <motion.div 
                      className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-yellow-500 group-hover:bg-primary/20 transition-colors duration-300 relative"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <service.icon className="h-8 w-8" />
                      {/* Icon glow effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-yellow-400/20 blur-xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
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

      {/* PM Surya Ghar Subsidy Table */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-yellow-50/30 to-background"></div>
        
        {/* Floating rupee symbols */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            >
              <IndianRupee className="h-12 w-12 text-yellow-400/20" />
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              className="inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="px-6 py-2 bg-gradient-to-r from-orange-500 to-green-600 text-white rounded-full font-bold text-sm shadow-lg">
                🇮🇳 PM SURYA GHAR SCHEME
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Government Subsidy Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take advantage of the PM Surya Ghar scheme and save significantly on your solar installation
            </p>
          </motion.div>

          {/* Subsidy Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-hidden rounded-2xl shadow-2xl border-2 border-yellow-400/30 bg-white/50 backdrop-blur-sm"
          >
            {/* Table Header */}
            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-green-500 p-1">
              <div className="bg-white">
                <div className="grid grid-cols-5 gap-4 p-4 font-bold text-sm md:text-base">
                  <div className="flex items-center justify-center gap-2 text-center">
                    <Zap className="h-5 w-5 text-yellow-600" />
                    <span>Solar Capacity</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-center">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <span>Unit</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-center">
                    <TrendingDown className="h-5 w-5 text-blue-600" />
                    <span>Saving</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-center">
                    <IndianRupee className="h-5 w-5 text-orange-600" />
                    <span>Subsidy</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-center">
                    <DollarSign className="h-5 w-5 text-purple-600" />
                    <span>Pay Bill</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200">
              {pmSuryaGharData.map((row, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ 
                    backgroundColor: "rgba(250, 204, 21, 0.1)",
                    scale: 1.01,
                  }}
                  className="grid grid-cols-5 gap-4 p-4 hover:shadow-md transition-all duration-300 cursor-pointer group"
                >
                  <div className="text-center font-bold text-yellow-600 group-hover:scale-110 transition-transform">
                    {row.capacity}
                  </div>
                  <div className="text-center text-gray-700">{row.unit}</div>
                  <div className="text-center text-green-600 font-semibold">{row.saving}</div>
                  <div className="text-center text-orange-600 font-bold">
                    {row.subsidy}
                  </div>
                  <div className="text-center text-purple-600 font-semibold">
                    {row.payBill}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Card className="inline-block border-2 border-yellow-400/50 bg-gradient-to-r from-yellow-50 to-green-50 shadow-xl">
              <CardContent className="p-6">
                <p className="text-lg font-semibold text-foreground mb-4">
                  💰 Save up to <span className="text-3xl text-orange-600 font-bold">Rs.78,000</span> on your solar installation!
                </p>
                <p className="text-muted-foreground mb-4">
                  Our experts will help you navigate the PM Surya Ghar scheme and maximize your benefits
                </p>
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 text-white font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Apply for Subsidy →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
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
    </div>
  );
};

export default Services;
