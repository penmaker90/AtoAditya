import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Package, FileText, Umbrella, Printer, Palette, Lightbulb, Settings, Target } from "lucide-react";
import { Link } from "react-router-dom";
import ImageSlider from "@/components/ImageSlider";
import VideoBackground from "@/components/WaterRippleEffect";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  const services = [
    {
      icon: Package,
      title: "Merchandise",
      description: "Branded apparel, corporate gifts, and promotional items that make your brand memorable.",
      anchor: "merchandise"
    },
    {
      icon: FileText,
      title: "Office Supplies",
      description: "Branded essentials for everyday office use including lanyards, badges, and stationery.",
      anchor: "office-supplies"
    },
    {
      icon: Umbrella,
      title: "Outdoor Essentials",
      description: "Durable promotional items for outdoor events and brand visibility.",
      anchor: "outdoor-essentials"
    },
    {
      icon: Printer,
      title: "Printing",
      description: "High-quality printing services for banners, brochures, and marketing materials.",
      anchor: "printing"
    },
    {
      icon: Palette,
      title: "Designing",
      description: "Creative design services to bring your brand vision to life.",
      anchor: "designing"
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
      {/* Water Ripple Video Background */}
      <VideoBackground />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#00F5FF] via-[#FF2E92] to-[#A020F0] bg-clip-text text-transparent">
          All Kind of Solutions Partner
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Your ultimate customized marketing solution partner
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <Link to="/services" className="rounded-full px-6 py-3 bg-gradient-to-r from-[#00F5FF] to-[#FF2E92] text-black font-semibold shadow-lg hover:shadow-[#00F5FF]/50 transition">
            Explore Services
          </Link>
          <Link to="/contact" className="rounded-full px-6 py-3 border border-gray-500 text-white hover:border-[#A020F0] transition">
            Contact Us
          </Link>
        </div>
      </div>
    </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image Slider */}
            <div className="h-96 w-full">
              <ImageSlider 
                images={[
                  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop&crop=center", // Modern office workspace
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center", // Business team collaboration
                  "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&crop=center", // Printing and design materials
                  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=center", // Corporate merchandise display
                  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop&crop=center"  // Marketing strategy and planning
                ]}
                autoSlideInterval={4000}
              />
            </div>
            
            {/* Right Column - Content */}
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-black text-gradient mb-8">
                Welcome to A2Z Solutions
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We deliver innovative promotional materials, POSMs, merchandise, printing, and corporate gifting that set your brand apart. Our dedicated team designs, sources, and develops unique products tailored to your brand's guidelines.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From creative concepts to final delivery, we ensure every project reflects your brand's unique identity and meets the highest quality standards.
              </p>
            </div>
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
              <Link
                key={index}
                to={`/services#${service.anchor}`}
                className="service-card-link block transition-transform duration-300"
              >
                <div className="card-neon text-center group cursor-pointer">
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
              </Link>
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

      {/* Portfolio Showcase */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gradient mb-4">
              Our Work in Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we've helped businesses transform their brand presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Item 1 */}
            <div className="card-neon overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=300&fit=crop&crop=center" 
                  alt="Corporate Branding Project" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gradient mb-2">
                  Corporate Branding
                </h3>
                <p className="text-muted-foreground text-sm">
                  Complete brand identity and promotional materials for enterprise clients.
                </p>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="card-neon overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=300&fit=crop&crop=center" 
                  alt="Event Marketing Materials" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gradient mb-2">
                  Event Marketing
                </h3>
                <p className="text-muted-foreground text-sm">
                  Custom banners, displays, and promotional items for corporate events.
                </p>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="card-neon overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=400&h=300&fit=crop&crop=center" 
                  alt="Custom Merchandise" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gradient mb-2">
                  Custom Merchandise
                </h3>
                <p className="text-muted-foreground text-sm">
                  Unique branded products that strengthen customer relationships.
                </p>
              </div>
            </div>
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