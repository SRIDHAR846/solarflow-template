import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HowItWorks } from "@/components/HowItWorks";
import { Stats } from "@/components/Stats";
import { Solutions } from "@/components/Solutions";
import { ContactSection } from "@/components/ContactSection";
import { MapSection } from "@/components/MapSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <WhyChooseUs />
        <HowItWorks />
        <Stats />
        <Solutions />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
