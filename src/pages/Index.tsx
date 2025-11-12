import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Products from "@/pages/Products";
import Projects from "@/pages/Projects";
import Testimonials from "@/pages/Testimonials";
import Contact from "@/pages/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Home Section */}
        <section id="home">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about">
          <About />
        </section>

        {/* Services Section */}
        <section id="services">
          <Services />
        </section>

        {/* Products Section */}
        <section id="products">
          <Products />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
