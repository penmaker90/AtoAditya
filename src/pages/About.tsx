import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-animated">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 via-transparent to-neon-blue/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-gradient mb-8">
            About A2Z Solutions
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            At <span className="text-gradient font-semibold">A2Z Solutions</span>, we pride ourselves on being your all-in-one marketing and branding partner. From creative designs to sourcing premium merchandise, we provide complete solutions that elevate your brand.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mission */}
            <div className="card-neon">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-neon-blue/20 to-neon-pink/20 rounded-full flex items-center justify-center mr-4">
                  <Target className="h-7 w-7 text-neon-blue" />
                </div>
                <h2 className="text-2xl font-bold text-gradient">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To deliver innovative, customized marketing solutions that build strong brand identities and lasting connections between businesses and their audiences.
              </p>
            </div>

            {/* Vision */}
            <div className="card-neon">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 rounded-full flex items-center justify-center mr-4">
                  <Eye className="h-7 w-7 text-neon-purple" />
                </div>
                <h2 className="text-2xl font-bold text-gradient">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To become the most trusted partner for businesses seeking impactful promotional solutions worldwide, setting new standards in creative excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Story Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gradient mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded with a vision to transform how businesses approach marketing and branding, A2Z Solutions has grown into a comprehensive partner for companies of all sizes. We understand that in today's competitive landscape, standing out requires more than just good products – it requires exceptional brand presentation.
                </p>
                <p>
                  Our journey began with a simple belief: every business deserves access to high-quality, customized marketing materials that reflect their unique identity. From humble beginnings, we've expanded our services to cover everything from merchandise and printing to creative design and corporate gifting.
                </p>
                <p>
                  Today, we work with businesses across industries, helping them create memorable brand experiences through innovative promotional solutions. Our commitment to quality, creativity, and customer satisfaction continues to drive everything we do.
                </p>
              </div>
            </div>
            
            {/* Story Image */}
            <div className="relative">
              <div className="card-neon overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop&crop=center" 
                  alt="Team collaboration and business growth" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background/50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gradient mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to bringing your brand vision to life
            </p>
          </div>
          
          {/* Team Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="card-neon text-center">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=center" 
                  alt="Creative Director" 
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-neon-blue/30"
                />
              </div>
              <h3 className="text-xl font-semibold text-gradient mb-2">
                Creative Team
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                Design & Branding Specialists
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Our creative minds bring your brand vision to life with innovative designs and strategic thinking.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="card-neon text-center">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=center" 
                  alt="Project Manager" 
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-neon-pink/30"
                />
              </div>
              <h3 className="text-xl font-semibold text-gradient mb-2">
                Project Management
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                Operations & Quality Control
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Ensuring every project is delivered on time with the highest quality standards and attention to detail.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="card-neon text-center">
              <div className="relative mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=center" 
                  alt="Business Development" 
                  className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-neon-purple/30"
                />
              </div>
              <h3 className="text-xl font-semibold text-gradient mb-2">
                Business Development
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                Client Relations & Strategy
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Building lasting partnerships and understanding your business needs to deliver customized solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gradient mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                description: "We never compromise on quality, ensuring every product meets the highest standards."
              },
              {
                title: "Customer Focus",
                description: "Your success is our priority. We listen, understand, and deliver exactly what you need."
              },
              {
                title: "Innovation",
                description: "We stay ahead of trends and technology to offer cutting-edge solutions."
              }
            ].map((value, index) => (
              <div key={index} className="card-neon text-center">
                <h3 className="text-xl font-semibold text-gradient mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;