import { Linkedin, Instagram, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-2 border-primary-foreground"></div>
              </div>
              <span className="text-xl font-bold">King Power Systems</span>
            </div>
            <p className="text-background/70 mb-4">
              Leading the way in renewable energy solutions for a sustainable future
            </p>
            <div className="space-y-2 text-sm text-background/70">
              <p><strong>Address:</strong> 123 Green Street, Eco City, EC 12345</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Email:</strong> ceo@cleanpowersystem.com</p>
              <p><strong>Working Hours:</strong> Mon-Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-background transition-colors">News</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Solar Energy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Wind Power</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Consultation</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-center md:text-left">
              © 2025 King Power Systems Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-background transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
