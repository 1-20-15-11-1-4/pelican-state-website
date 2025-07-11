import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, FileText, Users, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: "Bookkeeping & Reconciliation",
      description: "Monthly transaction categorization, bank reconciliations, and QuickBooks maintenance to keep your books accurate and up-to-date."
    },
    {
      icon: FileText,
      title: "Financial Reporting",
      description: "Clear profit & loss statements, balance sheets, and cash flow reports delivered monthly to help you understand your business performance."
    },
    {
      icon: Users,
      title: "Payroll Coordination",
      description: "Seamless payroll setup and coordination with your existing payroll provider to ensure accurate employee compensation tracking."
    },
    {
      icon: Clock,
      title: "Catch-Up Bookkeeping",
      description: "Get back on track with comprehensive cleanup services for businesses that have fallen behind on their bookkeeping."
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive bookkeeping solutions designed for small businesses, contractors, and entrepreneurs across Louisiana and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border shadow-[var(--shadow-card)] hover:shadow-lg transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;