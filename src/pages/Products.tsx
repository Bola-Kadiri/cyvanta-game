import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";
import { Filter, Grid, List } from "lucide-react";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = [
    "all",
    ...Array.from(new Set(products.map(product => product.category)))
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-glow"
            style={{ fontFamily: 'Orbitron, monospace' }}
          >
            Gaming Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our complete collection of premium gaming gear designed to elevate your performance
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium">Filter by category:</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  className={selectedCategory === category ? "btn-gaming" : "btn-gaming-outline"}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === "all" ? "All Products" : category}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">View:</span>
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="sm"
              className={viewMode === "grid" ? "btn-gaming" : "btn-gaming-outline"}
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="sm"
              className={viewMode === "list" ? "btn-gaming" : "btn-gaming-outline"}
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Products Count */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            {selectedCategory !== "all" && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-8 mb-12 ${
          viewMode === "grid" 
            ? "md:grid-cols-2 lg:grid-cols-3" 
            : "grid-cols-1 max-w-4xl mx-auto"
        }`}>
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Load More Button (placeholder for future pagination) */}
        {filteredProducts.length >= 6 && (
          <div className="text-center">
            <Button className="btn-gaming-secondary px-8 py-4">
              Load More Products
            </Button>
          </div>
        )}

        {/* No Products Found */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-6 flex items-center justify-center">
              <Filter className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">No products found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your filter criteria or browse all products
            </p>
            <Button 
              className="btn-gaming"
              onClick={() => setSelectedCategory("all")}
            >
              View All Products
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;