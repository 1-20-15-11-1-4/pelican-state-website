import pelicanLogo from "@/assets/pelican-logo.png";
import { Linkedin, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src={pelicanLogo} 
                alt="Pelican State Bookkeeping Logo" 
                className="w-8 h-8 brightness-0 invert"
              />
              <div>
                <h3 className="font-bold">Pelican State</h3>
                <p className="text-sm opacity-90">Bookkeeping</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Louisiana-based virtual bookkeeping for small businesses, contractors, and entrepreneurs across the U.S.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Monthly Bookkeeping</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Financial Reporting</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Payroll Coordination</a></li>
              <li><a href="#services" className="hover:opacity-100 transition-opacity">Catch-Up Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li><a href="#pricing" className="hover:opacity-100 transition-opacity">Pricing</a></li>
              <li><a href="#about" className="hover:opacity-100 transition-opacity">About</a></li>
              <li><a href="#contact" className="hover:opacity-100 transition-opacity">Contact</a></li>
              <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-sm opacity-90">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@pelicanstate.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(225) 555-0123</span>
              </div>
            </div>
            
            <div className="flex space-x-3 mt-4">
              <a 
                href="#" 
                className="w-8 h-8 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80 mb-2">
            <strong>Disclaimer:</strong> Pelican State Bookkeeping is not a CPA firm or tax advisor. 
            Information provided is for bookkeeping purposes only and should not be considered tax or financial advice.
          </p>
          <p className="text-sm opacity-60">
            © 2024 Pelican State Bookkeeping, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;