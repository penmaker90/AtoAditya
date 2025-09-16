import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Package, 
  Coffee, 
  FileText, 
  Umbrella, 
  Printer, 
  Palette,
  Gift,
  Shirt,
  Briefcase,
  Badge,
  Tent,
  PenTool
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceCategories = [
    {
      icon: Package,
      title: "Merchandise",
      description: "From branded apparel to customized corporate gifts, we provide a wide range of merchandise that makes your brand memorable.",
      items: [
        "Gifting", "T-shirts", "Duffle Bags", "Jackets", "Caps", "Pens", 
        "Key Chains", "Bottles", "Flasks", "Copper Bottles", "Insulated Mugs", 
        "Diaries", "Umbrellas", "Promotional Umbrellas", "Paper Carry Bags"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Coffee,
      title: "Crockery & Copper",
      description: "Premium crockery and copper items that combine elegance with practicality.",
      items: [
        "Crockery", "Mugs", "Serving Trays", "Cups & Saucers", "Coasters"
      ],
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: FileText,
      title: "Office Supplies",
      description: "Branded essentials for everyday office use.",
      items: [
        "Lanyards", "Name Badges", "Pens", "Diaries"
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Umbrella,
      title: "Outdoor Essentials",
      description: "Durable and eye-catching outdoor promotional items.",
      items: [
        "Outdoor Umbrellas", "Canopies & Gazebos"
      ],
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Printer,
      title: "Printing",
      description: "High-quality printing services that communicate your message with impact.",
      items: [
        "Promotional Banners", "Hoardings", "Brochure Books", "Danglers", 
        "Carry Bags", "Tent Cards", "WiFi Indicators"
      ],
      color: "from-red-500 to-pink-600"
    },
    {
      icon: Palette,
      title: "Designing",
      description: "Creative and technical design services to bring your brand vision to life.",
      items: [
        "Creative Designing", "Manual Designing", "Tutorial Video Making", 
        "PDF Corrections", "Print-Ready Files", "Board Designs"
      ],
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const iconMap: { [key: string]: any } = {
    "Gifting": Gift,
    "T-shirts": Shirt,
    "Duffle Bags": Briefcase,
    "Lanyards": Badge,
    "Canopies & Gazebos": Tent,
    "Creative Designing": PenTool
  };

  return (
    <div className="min-h-screen bg-animated">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-gradient mb-8">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive solutions for all your marketing, branding, and promotional needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {serviceCategories.map((category, index) => (
              <div key={index} className="group">
                <div className="card-neon overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Category Header */}
                    <div className="bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 backdrop-blur-xl p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-neon-blue/30 to-neon-pink/30 rounded-full flex items-center justify-center mr-4">
                          <category.icon className="h-8 w-8 text-neon-blue" />
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gradient">
                          {category.title}
                        </h2>
                      </div>
                      <p className="text-lg leading-relaxed text-muted-foreground">
                        {category.description}
                      </p>
                    </div>

                    {/* Items Grid */}
                    <div className="lg:col-span-2 p-8 lg:p-12">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.items.map((item, itemIndex) => {
                          const IconComponent = iconMap[item] || Package;
                          return (
                            <div 
                              key={itemIndex} 
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-all duration-300 hover:glow-neon"
                            >
                              <div className="w-8 h-8 bg-gradient-to-br from-neon-blue/20 to-neon-pink/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <IconComponent className="h-4 w-4 text-neon-blue" />
                              </div>
                              <span className="text-foreground font-medium">
                                {item}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/5 to-neon-purple/5"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gradient mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How we bring your vision to life in four simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We understand your brand, requirements, and objectives."
              },
              {
                step: "02", 
                title: "Design & Planning",
                description: "Our team creates custom designs and project plans."
              },
              {
                step: "03",
                title: "Production",
                description: "Quality manufacturing and printing with attention to detail."
              },
              {
                step: "04",
                title: "Delivery",
                description: "Timely delivery of your finished promotional materials."
              }
            ].map((process, index) => (
              <div key={index} className="card-neon text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-purple text-background rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold glow-neon">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gradient mb-3">
                  {process.title}
                </h3>
                <p className="text-muted-foreground">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background/50 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-gradient mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project and create customized solutions for your brand
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="btn-neon text-background font-semibold text-lg px-8 py-4">
              Get Quote
            </Link>
            <Link to="/about" className="px-8 py-4 rounded-lg font-semibold text-lg border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background transition-all duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;