import { motion } from "framer-motion";
import { Target, Globe, Heart, TrendingUp, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const missionValues = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To make renewable energy accessible and affordable for everyone, creating a sustainable future for generations to come.",
    color: "text-yellow-500"
  },
  {
    icon: Globe,
    title: "Our Vision",
    description: "To be the leading provider of clean energy solutions, powering homes and industries worldwide with innovative solar technology.",
    color: "text-green-500"
  },
  {
    icon: Heart,
    title: "Our Values",
    description: "Sustainability, innovation, integrity, and customer satisfaction drive everything we do in our mission to create a greener planet.",
    color: "text-blue-500"
  }
];

const statistics = [
  { icon: TrendingUp, value: "500+", label: "Installed Panels" },
  { icon: Users, value: "100+", label: "Clients Served" },
  { icon: Award, value: "15+", label: "Years Experience" }
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
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
              about us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Powering a Sustainable Future
            </h1>
            <p className="text-xl text-muted-foreground">
              At King Power Systems, we are driven by a mission to make renewable energy accessible and affordable for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Founded with a vision to revolutionize the energy landscape, King Power Systems has been at the forefront of the solar revolution for over 15 years. We believe that clean, renewable energy is not just the future—it's the present.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of dedicated professionals works tirelessly to deliver cutting-edge solar solutions that reduce carbon footprints, lower energy costs, and contribute to a healthier planet. From residential rooftops to large-scale industrial installations, we're committed to excellence in every project we undertake.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 lg:py-24 bg-muted/30" ref={ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {missionValues.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 ${item.color}`}>
                      <item.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="border-border/50 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <div className="text-5xl font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-lg text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
