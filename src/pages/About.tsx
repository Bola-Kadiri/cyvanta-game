import { Users, Target, Award, Gamepad2 } from "lucide-react";

const About = () => {
  const stats = [
    { number: "10K+", label: "Happy Gamers" },
    { number: "500+", label: "Premium Products" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support" }
  ];

  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      description: "Professional esports player turned entrepreneur with 10+ years in competitive gaming."
    },
    {
      name: "Sarah Johnson",
      role: "Product Specialist",
      description: "Hardware expert specializing in gaming peripherals and high-performance setups."
    },
    {
      name: "Mike Rodriguez",
      role: "Customer Success",
      description: "Dedicated to ensuring every gamer gets the perfect setup for their needs."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-glow"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            About GameZone Elite
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're passionate gamers on a mission to provide the ultimate gaming experience 
            through premium hardware and unmatched customer service.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="card-gaming p-6 text-center animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary text-glow mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="animate-slide-in">
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-primary-gradient mr-4">
                <Gamepad2 className="h-8 w-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-glow-secondary">Our Story</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Founded in 2019 by a group of passionate gamers and esports professionals, 
              GameZone Elite emerged from a simple observation: the gaming community deserved 
              access to truly premium hardware without compromise.
            </p>
            <p className="text-muted-foreground">
              What started as a small operation has grown into a trusted destination for 
              serious gamers worldwide. We understand that gaming isn't just a hobby—it's 
              a passion, a profession, and a way of life.
            </p>
          </div>

          <div className="space-y-8">
            <div className="card-gaming p-6 animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-4">
                <Target className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-xl font-semibold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground">
                To empower gamers with cutting-edge technology and exceptional service, 
                helping them achieve their full potential in gaming.
              </p>
            </div>

            <div className="card-gaming p-6 animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-secondary mr-3" />
                <h3 className="text-xl font-semibold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground">
                To be the global leader in premium gaming hardware, setting new standards 
                for quality, performance, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Users className="h-8 w-8 text-primary mr-4" />
            <h2 className="text-3xl font-bold text-glow">Meet Our Team</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Gaming experts dedicated to helping you achieve peak performance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div 
              key={member.name}
              className="card-gaming p-6 text-center animate-slide-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-20 h-20 rounded-full bg-primary-gradient mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary mb-4">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;