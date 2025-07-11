import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const packages = [
    {
      name: "Starter",
      price: "$250",
      transactions: "0–100 transactions",
      description: "Perfect for new businesses and solopreneurs",
      features: [
        "Monthly bookkeeping",
        "Bank reconciliation",
        "Basic financial reports",
        "QuickBooks setup & maintenance",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Standard",
      price: "$400",
      transactions: "101–250 transactions",
      description: "Ideal for growing small businesses",
      features: [
        "Everything in Starter",
        "Monthly P&L and Balance Sheet",
        "Cash flow reporting",
        "Vendor & customer management",
        "Priority email support"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "$600",
      transactions: "251–500 transactions",
      description: "Great for established businesses",
      features: [
        "Everything in Standard",
        "Payroll coordination",
        "Monthly financial review call",
        "Custom reporting",
        "Phone & email support"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "$900+",
      transactions: "501–1,000 transactions",
      description: "For larger operations",
      features: [
        "Everything in Premium",
        "Advanced reporting",
        "Dedicated bookkeeper",
        "Monthly strategy calls",
        "Same-day support"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the package that fits your monthly transaction volume. All plans include QuickBooks Online and monthly reports.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative bg-card border transition-all hover:shadow-lg ${
                pkg.popular 
                  ? 'border-accent shadow-[var(--shadow-card)] ring-2 ring-accent/20' 
                  : 'border-border'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-primary">{pkg.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-accent font-medium">{pkg.transactions}</p>
                <CardDescription className="text-muted-foreground">
                  {pkg.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full mt-6 ${
                    pkg.popular 
                      ? 'bg-accent hover:bg-accent/90 text-accent-foreground' 
                      : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                  }`}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Need catch-up bookkeeping or have more than 1,000 transactions? 
            <a href="#contact" className="text-accent hover:underline ml-1">Contact us for custom pricing.</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;