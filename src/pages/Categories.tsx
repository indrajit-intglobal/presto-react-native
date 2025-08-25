import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Categories = () => {
  const categories = Array.from(new Set(products.map(p => p.category))).map(category => {
    const categoryProducts = products.filter(p => p.category === category);
    const minPrice = Math.min(...categoryProducts.map(p => p.price));
    const maxPrice = Math.max(...categoryProducts.map(p => p.price));
    
    return {
      name: category,
      count: categoryProducts.length,
      priceRange: `$${minPrice} - $${maxPrice}`,
      image: categoryProducts[0].image,
      description: getCategoryDescription(category)
    };
  });

  function getCategoryDescription(category: string): string {
    const descriptions: Record<string, string> = {
      'Cardio': 'Boost your cardiovascular health with our premium cardio equipment. From treadmills to exercise bikes.',
      'Strength': 'Build muscle and increase strength with our comprehensive strength training equipment and weights.',
      'Accessories': 'Complete your workout with our essential fitness accessories and support equipment.'
    };
    return descriptions[category] || 'Quality fitness equipment for your training needs.';
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Equipment Categories
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of fitness equipment organized by category
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.name} className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 group hover:shadow-card">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.count} products</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-primary">
                      {category.priceRange}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {category.count} items
                    </span>
                  </div>
                  
                  <Link to={`/shop?category=${category.name.toLowerCase()}`}>
                    <Button className="w-full bg-gradient-primary hover:shadow-button">
                      Shop {category.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Can't find what you're looking for?</h2>
          <p className="text-muted-foreground mb-8">
            Browse our complete collection or contact us for custom equipment solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button size="lg" className="bg-gradient-primary hover:shadow-button">
                View All Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;