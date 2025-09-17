import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye, ShoppingCart } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="card-gaming group transition-all duration-300 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="sm" variant="outline" className="btn-gaming-outline">
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-glow transition-all duration-300">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-primary text-glow">
            ₦{product.price.toFixed(2)}
          </span>
          <div className="flex space-x-2">
            <Button asChild size="sm" className="btn-gaming">
              <Link to={`/products/${product.id}`}>
                <Eye className="h-4 w-4 mr-1" />
                View
              </Link>
            </Button>
            {/* <Button size="sm" variant="outline" className="btn-gaming-outline">
              <ShoppingCart className="h-4 w-4" />
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;