import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567"
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@ecoflux.com"
  },
  {
    icon: MapPin,
    title: "Office",
    details: "123 Green Street, Eco City, EC 12345"
  }
];

export const ContactSection = () => {
  return (
    <section id="plan" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
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
                <Card key={index} className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
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
              ))}
            </div>
          </div>

          <div>
            <Card className="border-border/50">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Phone
                    </label>
                    <Input type="tel" placeholder="+1 (555) 000-0000" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your energy needs..."
                      rows={5}
                    />
                  </div>

                  <Button size="lg" className="w-full bg-primary hover:bg-accent text-primary-foreground">
                    Send message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
