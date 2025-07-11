
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-pelican-bayou.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-[1px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Clean Books. Clear Decisions.
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Louisiana-based bookkeeping made simple for small businesses.
        </p>
        <Button 
          size="lg" 
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg"
          asChild
        >
          <a 
            href="https://calendar.google.com/calendar/appointments/YOUR_BOOKING_ID" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Schedule Your Free Call
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
