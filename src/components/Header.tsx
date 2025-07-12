
import { Button } from "@/components/ui/button";
import pelicanLogo from "@/assets/pelican-logo.png";

const Header = () => {
  return (
    <header className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={pelicanLogo} 
              alt="Pelican State Bookkeeping Logo" 
              className="w-10 h-10"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">Pelican State</h1>
              <p className="text-sm text-muted-foreground -mt-1">Bookkeeping</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
            <a 
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3IZ2Q3u1ZYN7rvLRHXgYzKDqmaQFTrJbqzNLLvFaKqvaacrG3ro0t-CqLCVx5gsyd7w70Hz38x" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Book a Free Consultation
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
