

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Calendar, Zap } from "lucide-react";
import heroImage from "@/assets/hero-wind-turbines.jpg";

type FilterType = "all" | "residential" | "commercial" | "industrial";

interface Project {
  id: number;
  title: string;
  location: string;
  year: string;
  capacity: string;
  category: FilterType;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Green Meadows Residential Complex",
    location: "Hyderabad, Telangana",
    year: "2024",
    capacity: "50 kW Rooftop Installation",
    category: "residential",
    description: "Complete solar installation for 25-home residential complex, providing clean energy and reducing electricity costs by 70%.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    title: "TechPark Commercial Building",
    location: "Bangalore, Karnataka",
    year: "2023",
    capacity: "200 kW Commercial Installation",
    category: "commercial",
    description: "Large-scale solar array for tech park, powering office spaces and reducing carbon footprint significantly.",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Manufacturing Facility Solar Farm",
    location: "Chennai, Tamil Nadu",
    year: "2023",
    capacity: "500 kW Industrial Installation",
    category: "industrial",
    description: "Massive solar installation powering manufacturing operations, achieving energy independence.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    title: "Sunrise Villa Community",
    location: "Pune, Maharashtra",
    year: "2024",
    capacity: "35 kW Residential System",
    category: "residential",
    description: "Modern villa community with integrated solar panels and battery storage systems.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
  },
  {
    id: 5,
    title: "Shopping Mall Solar Project",
    location: "Mumbai, Maharashtra",
    year: "2022",
    capacity: "300 kW Commercial System",
    category: "commercial",
    description: "Comprehensive solar solution for large shopping complex with real-time monitoring.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop"
  },
  {
    id: 6,
    title: "Textile Factory Solar Array",
    location: "Surat, Gujarat",
    year: "2022",
    capacity: "750 kW Industrial System",
    category: "industrial",
    description: "Large-scale industrial solar installation reducing operational costs by 60%.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState<FilterType>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref, isVisible } = useScrollAnimation();
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const offset = window.pageYOffset - projectsSection.offsetTop;
        setScrollY(offset);
      }
    };
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const filterButtons: { label: string; value: FilterType }[] = [
    { label: "All", value: "all" },
    { label: "Residential", value: "residential" },
    { label: "Commercial", value: "commercial" },
    { label: "Industrial", value: "industrial" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with 3D Perspective Effect */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        {/* Layer 1: Animated Background Image with Zoom */}
        <motion.div 
          className="absolute inset-0 z-0"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${heroImage})`,
              transform: `translateY(${scrollY * 0.4}px) scale(1.1)`,
            }}
          >
            {/* Animated color overlay */}
            <motion.div 
              className="absolute inset-0"
              animate={{
                background: [
                  'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)',
                  'linear-gradient(135deg, rgba(250,204,21,0.3) 0%, rgba(0,0,0,0.6) 100%)',
                  'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)',
                ],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Moving light streaks */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(${45 + i * 45}deg, transparent 40%, rgba(250,204,21,0.1) 50%, transparent 60%)`,
                }}
                animate={{
                  x: ['-100%', '200%'],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Layer 2: Animated Dot Grid Pattern */}
        <div className="absolute inset-0 z-1 opacity-30">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(250, 204, 21, 0.4) 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '30px 30px'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Layer 3: Diagonal Lines Moving */}
        <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"
              style={{
                top: `${i * 10}%`,
                transformOrigin: 'left center',
              }}
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${(i * 15 + 10)}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [0, -50, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            >
              <div 
                className="w-16 h-16 border-2 border-yellow-400/30 backdrop-blur-sm"
                style={{
                  transform: `rotate(${i * 45}deg)`,
                  borderRadius: i % 2 === 0 ? '0%' : '50%',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Spotlight effect following mouse */}
        <motion.div
          className="absolute w-96 h-96 rounded-full pointer-events-none z-1"
          style={{
            background: 'radial-gradient(circle, rgba(250, 204, 21, 0.15) 0%, transparent 70%)',
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
              className="inline-block px-4 py-1 bg-primary/10 rounded-full border border-primary/20 text-primary text-sm font-medium mb-4"
            >
              our work
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            >
              Our Showcase Projects
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-muted-foreground"
            >
              Explore our portfolio of successful solar installations across residential, commercial, and industrial sectors
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs with Magnetic Effect */}
      <section className="py-8 bg-muted/30 relative overflow-hidden">
        {/* Animated background lines */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"
              style={{ top: `${i * 25}%`, width: '200%' }}
              animate={{
                x: ['-50%', '0%'],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap justify-center gap-4">
            {filterButtons.map((btn, index) => (
              <motion.div
                key={btn.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => setFilter(btn.value)}
                  variant={filter === btn.value ? "default" : "outline"}
                  className={`px-6 py-2 rounded-full transition-all duration-300 relative overflow-hidden group ${
                    filter === btn.value 
                      ? "bg-primary text-primary-foreground shadow-lg" 
                      : "hover:bg-primary/10"
                  }`}
                >
                  <span className="relative z-10">{btn.label}</span>
                  {filter === btn.value && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600"
                      layoutId="activeFilter"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  <motion.div
                    className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid with 3D Cards */}
      <section className="py-16 lg:py-24 relative" ref={ref}>
        {/* Radial gradient background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const cardX = useMotionValue(0);
              const cardY = useMotionValue(0);
              const rotateX = useTransform(cardY, [-100, 100], [10, -10]);
              const rotateY = useTransform(cardX, [-100, 100], [-10, 10]);

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50, rotateX: -15 }}
                  animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    cardX.set(x);
                    cardY.set(y);
                  }}
                  onMouseLeave={() => {
                    cardX.set(0);
                    cardY.set(0);
                  }}
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer"
                  whileHover={{ scale: 1.05, z: 50 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="h-full overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(250,204,21,0.3)] group relative">
                    {/* 3D shine effect */}
                    <motion.div
                      className="absolute inset-0 z-10 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2) 0%, transparent 50%)`,
                      }}
                    />

                    {/* Image with reveal animation */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.15, rotate: 2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      
                      {/* Animated corner accent */}
                      <motion.div
                        className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/50 to-transparent"
                        initial={{ scale: 0, rotate: -45 }}
                        whileHover={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.4 }}
                      />

                      {/* Sliding overlay with details */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"
                        initial={{ y: '100%' }}
                        whileHover={{ y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <motion.h3 
                            className="text-xl font-bold mb-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileHover={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            {project.title}
                          </motion.h3>
                          <motion.div 
                            className="space-y-1 text-sm"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              {project.location}
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {project.year}
                            </div>
                            <div className="flex items-center gap-2">
                              <Zap className="h-4 w-4 text-yellow-400" />
                              {project.capacity}
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>

                      {/* Energy pulse effect */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 0.3,
                        }}
                      />
                    </div>

                    <CardContent className="p-6 relative">
                      <motion.h3 
                        className="text-xl font-bold text-foreground mb-2"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        className="text-sm text-muted-foreground"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2, delay: 0.05 }}
                      >
                        {project.location} • {project.year}
                      </motion.p>

                      {/* Animated border on hover */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
            <DialogDescription>
              <div className="mt-4 space-y-4">
                <img 
                  src={selectedProject?.image} 
                  alt={selectedProject?.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-semibold text-foreground">Location</div>
                    <div className="text-muted-foreground">{selectedProject?.location}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Year</div>
                    <div className="text-muted-foreground">{selectedProject?.year}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Capacity</div>
                    <div className="text-muted-foreground">{selectedProject?.capacity}</div>
                  </div>
                </div>
                <p className="text-muted-foreground">{selectedProject?.description}</p>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      
    </div>
  );
};

export default Projects;
