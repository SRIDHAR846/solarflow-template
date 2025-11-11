import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Calendar, Zap } from "lucide-react";

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
              our work
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Showcase Projects
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our portfolio of successful solar installations across residential, commercial, and industrial sectors
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filterButtons.map((btn) => (
              <Button
                key={btn.value}
                onClick={() => setFilter(btn.value)}
                variant={filter === btn.value ? "default" : "outline"}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === btn.value 
                    ? "bg-primary text-primary-foreground shadow-lg" 
                    : "hover:bg-primary/10"
                }`}
              >
                {btn.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24" ref={ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer"
              >
                <Card className="h-full overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {project.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {project.year}
                          </div>
                          <div className="flex items-center gap-2">
                            <Zap className="h-4 w-4" />
                            {project.capacity}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.location} • {project.year}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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

      <Footer />
    </div>
  );
};

export default Projects;
