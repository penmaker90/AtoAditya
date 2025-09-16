import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Package, FileText, Umbrella, Printer, Palette, Lightbulb, Settings, Target } from "lucide-react";
import { Link } from "react-router-dom";
import VideoBackground from "@/components/WaterRippleEffect";
import ImageSlider from "@/components/ImageSlider";

const Index = () => {
  // Image slider data - you can replace these with your actual images
  const sliderImages = [
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2300F5FF;stop-opacity:0.8'/%3E%3Cstop offset='100%25' style='stop-color:%23FF2E92;stop-opacity:0.8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad1)'/%3E%3Ctext x='50%25' y='40%25' text-anchor='middle' fill='white' font-size='24' font-weight='bold'%3EA2Z Solutions%3C/text%3E%3Ctext x='50%25' y='60%25' text-anchor='middle' fill='white' font-size='18'%3EMerchandise & Branding%3C/text%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23A020F0;stop-opacity:0.8'/%3E%3Cstop offset='100%25' style='stop-color:%2300F5FF;stop-opacity:0.8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad2)'/%3E%3Ctext x='50%25' y='40%25' text-anchor='middle' fill='white' font-size='24' font-weight='bold'%3ECustom Printing%3C/text%3E%3Ctext x='50%25' y='60%25' text-anchor='middle' fill='white' font-size='18'%3EHigh-Quality Materials%3C/text%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23FF2E92;stop-opacity:0.8'/%3E%3Cstop offset='100%25' style='stop-color:%23A020F0;stop-opacity:0.8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad3)'/%3E%3Ctext x='50%25' y='40%25' text-anchor='middle' fill='white' font-size='24' font-weight='bold'%3ECreative Design%3C/text%3E%3Ctext x='50%25' y='60%25' text-anchor='middle' fill='white' font-size='18'%3EInnovative Solutions%3C/text%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Cdefs%3E%3ClinearGradient id='grad4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2300F5FF;stop-opacity:0.8'/%3E%3Cstop offset='100%25' style='stop-color:%23A020F0;stop-opacity:0.8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grad4)'/%3E%3Ctext x='50%25' y='40%25' text-anchor='middle' fill='white' font-size='24' font-weight='bold'%3ECorporate Gifts%3C/text%3E%3Ctext x='50%25' y='60%25' text-anchor='middle' fill='white' font-size='18'%3EPremium Quality%3C/text%3E%3C/svg%3E"
  ];
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
      <section className="py-32 relative overflow-hidden">
        <VideoBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-pink/10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            All Kind of <span className="text-gradient">Solutions</span> Partner
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Your ultimate customized marketing solution partner
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/services" className="btn-neon text-background font-semibold text-lg px-8 py-4 inline-flex items-center">
              Explore Services
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <Link to="/contact" className="px-8 py-4 rounded-lg font-semibold text-lg border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background transition-all duration-300 inline-flex items-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image Slider */}
            <div className="h-96 w-full">
              <ImageSlider 
                images={sliderImages} 
                autoSlideInterval={4000}
              />
            </div>
            
            {/* Right side - Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-stone-100 mb-8">
                Welcome to A2Z Solutions
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We deliver innovative promotional materials, POSMs, merchandise, printing, and corporate gifting that set your brand apart. Our dedicated team designs, sources, and develops unique products tailored to your brand's guidelines.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                From concept to completion, we ensure every project reflects your brand's excellence and drives meaningful engagement with your target audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-stone-100 mb-4">
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
            <h2 className="text-4xl md:text-5xl font-black text-stone-100 mb-4">
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
          <h2 className="text-4xl md:text-5xl font-black text-stone-100 mb-6">
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