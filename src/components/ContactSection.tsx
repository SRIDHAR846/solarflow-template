import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
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
    title: "Office",
    details: "123 Green Street, Eco City, EC 12345"
  }
];

export const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="plan" className="py-16 lg:py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-primary/10 rounded-full border border-primary/20 text-primary text-sm font-medium mb-4">
              contact us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to make the switch?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get in touch with our team today and start your journey to clean, renewable energy
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <motion.div 
                          className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <info.icon className="h-6 w-6 text-primary" />
                        </motion.div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1">
                            {info.title}
                          </div>
                          <div className="text-lg font-semibold text-foreground">
                            {info.details}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-border/50">
              <CardContent className="p-8">
                <form action="https://formspree.io/f/xrgkywkd" method="POST" className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Your Name
                    </label>
                    <Input type="text" name="name" placeholder="Your Name" required />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Your Email
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
                      Your Message
                    </label>
                    <Textarea 
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-accent text-primary-foreground transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    Send Message 📩
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    ✅ When someone submits, mail goes directly to ceo@cleanpowersystem.com.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
