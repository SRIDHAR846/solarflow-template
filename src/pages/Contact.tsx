

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";
import heroImage from "@/assets/solar-panels.jpg";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+91 XXXXX XXXXX"
  },
  {
    icon: Mail,
    title: "Email",
    details: "iragu1269@gmail.com"
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const offset = window.pageYOffset - contactSection.offsetTop;
        setScrollY(offset);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Communication Theme */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        {/* Animated Background Image */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background"></div>
          
          {/* Animated wave overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 30% 50%, rgba(34, 197, 94, 0.2) 0%, transparent 50%)',
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Connecting Lines Network - Communication Theme */}
        <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Animated connection lines */}
            {[...Array(6)].map((_, i) => (
              <motion.line
                key={i}
                x1={`${10 + i * 15}%`}
                y1="0%"
                x2={`${30 + i * 10}%`}
                y2="100%"
                stroke="rgba(250, 204, 21, 0.3)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </svg>
        </div>

        {/* Floating Message Icons */}
        <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${15 + i * 18}%`,
                top: `${20 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            >
              {i % 2 === 0 ? (
                <Mail className="h-8 w-8 text-yellow-400/40" />
              ) : (
                <MessageCircle className="h-8 w-8 text-green-400/40" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Pulsing Signal Waves */}
        <div className="absolute inset-0 z-1 pointer-events-none flex items-center justify-center">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 border-2 border-yellow-400/20 rounded-full"
              animate={{
                scale: [1, 3, 3],
                opacity: [0.6, 0.2, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.7,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Data Particles Flowing */}
        <div className="absolute inset-0 z-1 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                background: i % 2 === 0 ? 'rgba(250, 204, 21, 0.6)' : 'rgba(34, 197, 94, 0.6)',
                boxShadow: '0 0 10px currentColor',
              }}
              animate={{
                y: ['0vh', '100vh'],
                x: [0, (Math.random() - 0.5) * 100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear",
              }}
            />
          ))}
        </div>
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
              className="inline-block px-4 py-1 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 text-white text-sm font-medium mb-4"
            >
              get in touch
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Let's Create a Sustainable Future Together
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-white/90"
            >
              Have a question or want to go solar? Our team is here to help you every step of the way
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24 relative" ref={ref}>
        {/* Animated connection grid background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(250, 204, 21, 0.8) 2px, transparent 2px)`,
              backgroundSize: '60px 60px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '60px 60px'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                    whileHover={{ scale: 1.03, x: 10 }}
                  >
                    <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.2)] group relative overflow-hidden">
                      {/* Animated background on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 to-green-400/0 group-hover:from-yellow-400/10 group-hover:to-green-400/10"
                        transition={{ duration: 0.4 }}
                      />
                      
                      {/* Slide-in line indicator */}
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-green-500"
                        initial={{ scaleY: 0 }}
                        whileHover={{ scaleY: 1 }}
                        transition={{ duration: 0.3 }}
                      />

                      <CardContent className="p-6 relative z-10">
                        <div className="flex items-center gap-4">
                          <motion.div 
                            className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 relative"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <info.icon className="h-6 w-6 text-primary" />
                            {/* Icon pulse */}
                            <motion.div
                              className="absolute inset-0 rounded-lg bg-yellow-400/20 blur-md"
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.5, 0.8, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.3,
                              }}
                            />
                          </motion.div>
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
              <Card className="border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(250, 204, 21, 0.5), transparent)',
                  }}
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <CardContent className="p-8 relative z-10 bg-background">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                  <form action="https://formspree.io/f/iragu1269@gmail.com" method="POST" className="space-y-6">
                    {/* Hidden field for email destination */}
                    <input type="hidden" name="_to" value="iragu1269@gmail.com" />
                    <input type="hidden" name="_subject" value="New Contact Form Submission - King Power Systems" />
                    <input type="hidden" name="_cc" value="iragu1269@gmail.com" />
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
                      ✅ When someone submits, mail goes directly to iragu1269@gmail.com
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

      
    </div>
  );
};

export default Contact;
