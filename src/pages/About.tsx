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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gradient mb-8">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-left">
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
          <div className="card-neon text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-12 w-12 text-neon-blue" />
            </div>
            <h3 className="text-2xl font-semibold text-gradient mb-4">
              Our Expert Team
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Our diverse team of designers, project managers, and marketing experts work collaboratively to ensure every project exceeds expectations. With years of combined experience in the industry, we bring creativity, professionalism, and attention to detail to every partnership.
            </p>
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