import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/ProductCard";
import { getFeaturedProducts } from "@/data/products";
import { ArrowRight, Star, Shield, Truck, Headphones } from "lucide-react";
import heroImage from "@/assets/hero-gaming-setup.jpg";
import { Zap } from "lucide-react";

const Index = () => {
  const featuredProducts = getFeaturedProducts(3);

  const features = [
    {
      icon: Star,
      title: "Premium Quality",
      description: "Only the finest gaming products from top brands"
    },
    {
      icon: Shield,
      title: "Warranty Protection",
      description: "Comprehensive warranty on all gaming gear"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and secure delivery to your location"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Expert gaming support whenever you need it"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section>
       <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden" id='home'>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Gaming setup with RGB accessories"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10" >
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-6">
            <Zap className="h-6 w-6 text-gaming-glow" />
            <span className="text-gaming-glow font-semibold">Level Up Your Game</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Elite Gaming
            <span className="block text-transparent bg-gradient-gaming bg-clip-text">
              Accessories
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Discover premium gaming gear that gives you the competitive edge. 
            From mechanical keyboards to precision mice, elevate your gaming experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button  size="lg" className="text-lg px-8 py-6">
              <a href="#product">Shop Now</a>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button  size="lg" className="text-lg px-8 py-6">
              Browse Categories
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center space-x-8 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-gaming-glow">10K+</div>
              <div className="text-sm text-muted-foreground">Happy Gamers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gaming-glow">500+</div>
              <div className="text-sm text-muted-foreground">Premium Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gaming-glow">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-gaming-glow rounded-full animate-pulse" />
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-gaming-purple rounded-full animate-pulse delay-300" />
      <div className="absolute top-60 right-1/3 w-1.5 h-1.5 bg-gaming-glow rounded-full animate-pulse delay-700" />
    </section>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow-secondary">
              Why Choose GameZone Elite?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience gaming like never before with our premium products and exceptional service
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="card-gaming p-6 text-center group animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-primary-gradient flex items-center justify-center mb-4 group-hover:animate-glow-pulse">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-glow">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
              Featured Gaming Gear
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of premium gaming products
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id}
                className="animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild className="btn-gaming-secondary text-lg px-8 py-6">
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gaming-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-glow">
            Ready to Upgrade Your Gaming Setup?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get instant support and personalized recommendations from our gaming experts
          </p>
          <Button 
            asChild 
            className="btn-gaming text-lg px-8 py-6 animate-glow-pulse"
          >
            <a href="https://wa.me/2349151722634" target="_blank" rel="noopener noreferrer">
              Chat with Admin on WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
