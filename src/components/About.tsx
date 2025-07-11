import { Badge } from "@/components/ui/badge";
import { Award, MapPin, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">About Pelican State Bookkeeping</h2>
            <p className="text-lg text-muted-foreground">
              Bringing clarity, consistency, and confidence to your business financials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                I'm a Louisiana-based bookkeeper with a background in accounting and a passion for helping small businesses succeed. I created Pelican State Bookkeeping to bring clarity, consistency, and confidence to your financials.
              </p>
              
              <p className="text-foreground leading-relaxed">
                After working with dozens of small business owners, I understand the unique challenges you face. That's why our services are designed specifically for busy entrepreneurs who need accurate books without the headache of managing them personally.
              </p>

              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  <Award className="w-4 h-4 mr-2" />
                  QuickBooks ProAdvisor Certified
                </Badge>
                <Badge variant="secondary" className="bg-pelican/10 text-pelican border-pelican/20">
                  <MapPin className="w-4 h-4 mr-2" />
                  Louisiana-Based
                </Badge>
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                  <Users className="w-4 h-4 mr-2" />
                  Small Business Focused
                </Badge>
              </div>
            </div>

            <div className="bg-secondary/30 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-primary mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <span className="text-foreground">Local Louisiana expertise with national reach</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <span className="text-foreground">Specialized in QuickBooks Online Accountant</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <span className="text-foreground">Focused on businesses with up to 1,000 transactions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <span className="text-foreground">Friendly, accessible, and always responsive</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;