import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567"
  },
  {
    icon: Mail,
    title: "Email",
    details: "ceo@cleanpowersystem.com"
  },
  {
    icon: MapPin,
    title: "Address",
    details: "123 Green Street, Hyderabad, Telangana"
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon-Fri: 9:00 AM - 6:00 PM"
  }
];

const Contact = () => {
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
              get in touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Let's Create a Sustainable Future Together
            </h1>
            <p className="text-xl text-muted-foreground">
              Have a question or want to go solar? Our team is here to help you every step of the way
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24" ref={ref}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  >
                    <Card className="border-border/50 hover:border-primary/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <info.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">{info.title}</div>
                            <div className="text-lg font-semibold text-foreground">{info.details}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Card className="border-border/50 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                  <form action="https://formspree.io/f/xrgkywkd" method="POST" className="space-y-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Your Name *
                      </label>
                      <Input type="text" name="name" placeholder="Your Name" required />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Your Email *
                      </label>
                      <Input type="email" name="_replyto" placeholder="Your Email" required />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Your Phone
                      </label>
                      <Input type="text" name="phone" placeholder="Your Phone" />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Your Message *
                      </label>
                      <Textarea 
                        name="message"
                        placeholder="Tell us about your solar energy needs..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full relative overflow-hidden text-lg px-8 py-6 rounded-full bg-white/10 backdrop-blur-2xl border-2 border-white/25 text-foreground hover:text-white shadow-[0_8px_32px_0_rgba(255,255,255,0.15)] hover:shadow-[0_8px_48px_0_rgba(255,255,255,0.3)] transition-all duration-700 hover:scale-105 group"
                    >
                      <span className="relative z-10 font-semibold">Send Message 🌞</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                    </Button>
                    
                    <p className="text-sm text-muted-foreground text-center">
                      ✅ When someone submits, mail goes directly to ceo@cleanpowersystem.com
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Visit Our Office
            </h2>
            <p className="text-xl text-muted-foreground">
              Find us on the map or schedule a visit to discuss your solar project
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl border border-border/50"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1902.5904482573896!2d78.4867!3d17.4239!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI1JzI2LjAiTiA3OMKwMjknMTIuMSJF!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location Map"
            ></iframe>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
