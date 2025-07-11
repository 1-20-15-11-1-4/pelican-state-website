import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with Pelican State took the stress out of my business books. I can finally focus on what I do best instead of worrying about categorizing transactions.",
      author: "Mike R.",
      business: "Local Contractor"
    },
    {
      quote: "Now I actually understand my cash flow and can make informed decisions about my business. The monthly reports are exactly what I needed. Highly recommend!",
      author: "Sarah L.",
      business: "Small Business Owner"
    },
    {
      quote: "The catch-up service was a lifesaver. They got two years of messy books cleaned up in just a few weeks. Professional and thorough work.",
      author: "David M.",
      business: "Real Estate Investor"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from Louisiana business owners we've helped succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border shadow-[var(--shadow-card)]">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-accent mb-4" />
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;