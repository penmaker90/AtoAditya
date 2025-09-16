import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Package, FileText, Umbrella, Printer, Palette, Lightbulb, Settings, Target } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  const services = [
    {
      icon: Package,
      title: "Merchandise",
      description: "Branded apparel, corporate gifts, and promotional items that make your brand memorable."
    },
    {
      icon: FileText,
      title: "Office Supplies",
      description: "Branded essentials for everyday office use including lanyards, badges, and stationery."
    },
    {
      icon: Umbrella,
      title: "Outdoor Essentials",
      description: "Durable promotional items for outdoor events and brand visibility."
    },
    {
      icon: Printer,
      title: "Printing",
      description: "High-quality printing services for banners, brochures, and marketing materials."
    },
    {
      icon: Palette,
      title: "Designing",
      description: "Creative design services to bring your brand vision to life."
    }
  ];

  const whyChooseUs = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We create fresh, trend-driven concepts that set your brand apart in the market."
    },
    {
      icon: Settings,
      title: "Customization", 
      description: "Every solution is tailored to your brand guidelines and specific requirements."
    },
    {
      icon: Target,
      title: "Market Impact",
      description: "Helping your brand stand out in a competitive market with impactful solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-animated">
      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden bg-black text-center text-white">
      {/* Ripple background */}
      <div className="absolute inset-0 animate-ripple bg-[radial-gradient(circle_at_30%_30%,rgba(0,245,255,0.1),transparent_20%),radial-gradient(circle_at_70%_70%,rgba(255,46,146,0.1),transparent_20%)] blur-2xl pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#00F5FF] via-[#FF2E92] to-[#A020F0] bg-clip-text text-transparent">
          All Kind of Solutions Partner
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Your ultimate customized marketing solution partner
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="rounded-full px-6 py-3 bg-gradient-to-r from-[#00F5FF] to-[#FF2E92] text-black font-semibold shadow-lg hover:shadow-[#00F5FF]/50 transition">
            Explore Services
          </button>
          <button className="rounded-full px-6 py-3 border border-gray-500 text-white hover:border-[#A020F0] transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-gradient mb-8">
              Welcome to A2Z Solutions
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We deliver innovative promotional materials, POSMs, merchandise, printing, and corporate gifting that set your brand apart. Our dedicated team designs, sources, and develops unique products tailored to your brand's guidelines.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gradient mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for all your marketing and branding needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-neon text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-neon-blue/20 to-neon-pink/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-neon-blue" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gradient mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three key reasons why businesses trust A2Z Solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="card-neon text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-neon-blue/20 to-neon-pink/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="h-10 w-10 text-neon-purple" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 to-neon-blue/5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-black text-gradient mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create something amazing together with our customized solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="btn-neon text-background font-semibold text-lg px-8 py-4">
              Get Started Today
            </Link>
            <Link to="/services" className="px-8 py-4 rounded-lg font-semibold text-lg border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background transition-all duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;