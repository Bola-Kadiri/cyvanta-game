import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProduct } from "@/data/products";
import { ArrowLeft, ShoppingCart, Heart, Share2, CheckCircle, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  if (!id) {
    return <Navigate to="/products" replace />;
  }

  const product = getProduct(id);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied",
        description: "Product link has been copied to your clipboard.",
      });
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/products" className="hover:text-primary transition-colors">
            Products
          </Link>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-8"
          asChild
        >
          <Link to="/products">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="animate-slide-in">
            <div className="card-gaming overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                {product.category}
              </Badge>
              <div className="flex items-center space-x-1">
                {product.inStock ? (
                  <>
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm text-accent">In Stock</span>
                  </>
                ) : (
                  <>
                    <XCircle className="h-4 w-4 text-destructive" />
                    <span className="text-sm text-destructive">Out of Stock</span>
                  </>
                )}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
              {product.name}
            </h1>

            <div className="text-3xl font-bold text-primary text-glow mb-6">
              ${product.price.toFixed(2)}
            </div>

            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                className="btn-gaming flex-1"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
              <Button variant="outline" className="btn-gaming-outline">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" className="btn-gaming-outline" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            {/* Contact Admin */}
            <div className="card-gaming p-6">
              <h3 className="text-lg font-semibold mb-3">Need Help?</h3>
              <p className="text-muted-foreground mb-4">
                Get instant support and personalized recommendations from our gaming experts.
              </p>
              <Button 
                asChild 
                className="btn-gaming-secondary w-full"
              >
                <a href="https://wa.me/2349151722634" target="_blank" rel="noopener noreferrer">
                  Chat with Admin on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-glow-secondary">Specifications</h2>
          <div className="card-gaming p-6">
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-border/50 last:border-b-0">
                  <span className="font-medium">{key}</span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;