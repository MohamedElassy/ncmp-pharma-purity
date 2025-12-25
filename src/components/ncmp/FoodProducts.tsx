import { useState } from "react";
import { ChevronDown, ChevronUp, Utensils } from "lucide-react";

interface FoodProductData {
  id: string;
  name: string;
  description: string;
  packaging: string;
  applications: string[];
}

const foodProducts: FoodProductData[] = [
  {
    id: "glucose-syrup",
    name: "Glucose Syrup",
    description: "High-quality glucose syrup for confectionery, beverages, and food manufacturing. Available in various DE (Dextrose Equivalent) grades.",
    packaging: "Bulk tankers or drums",
    applications: ["Confectionery", "Beverages", "Bakery", "Ice cream"],
  },
  {
    id: "fructose-55",
    name: "Fructose 55",
    description: "High fructose corn syrup (HFCS 55) with 55% fructose content. Ideal for beverage sweetening with excellent solubility.",
    packaging: "Bulk tankers",
    applications: ["Soft drinks", "Juices", "Dairy products"],
  },
  {
    id: "fructose-42",
    name: "Fructose 42",
    description: "High fructose corn syrup (HFCS 42) with 42% fructose content. Perfect for food manufacturing and baked goods.",
    packaging: "Bulk tankers or drums",
    applications: ["Bakery", "Canned foods", "Condiments", "Cereals"],
  },
  {
    id: "maltodextrin-food",
    name: "Maltodextrin",
    description: "Food-grade maltodextrin as a versatile carbohydrate source. Used as thickener, filler, and carrier in food products.",
    packaging: "25kg bags or bulk",
    applications: ["Sports nutrition", "Instant foods", "Seasonings", "Sauces"],
  },
  {
    id: "sorbitol-food",
    name: "Sorbitol (Food Grade)",
    description: "Food-grade sorbitol for confectionery and sugar-free food applications. Provides sweetness with reduced calories.",
    packaging: "291kg drums or bulk",
    applications: ["Sugar-free candy", "Diet foods", "Chewing gum", "Baked goods"],
  },
  {
    id: "corn-starch-food",
    name: "Corn Starch",
    description: "Premium food-grade corn starch for thickening, binding, and texturizing in food manufacturing.",
    packaging: "25kg bags or bulk",
    applications: ["Sauces", "Soups", "Bakery", "Meat processing"],
  },
];

export const FoodProducts = () => {
  return (
    <section id="food" className="section-ncmp bg-food-light">
      <div className="container-ncmp">
        <div className="mb-8">
          <h2 className="section-title text-food-orange flex items-center gap-2">
            <Utensils className="w-7 h-7" />
            Food Grade Products
          </h2>
          <p className="section-subtitle">
            High-quality food-grade ingredients for the food and beverage industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodProducts.map((product) => (
            <article key={product.id} className="ncmp-card bg-card p-6">
              <span className="badge-food mb-3 inline-block">Food Grade</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {product.description}
              </p>
              <div className="text-xs text-muted-foreground mb-3">
                <strong>Packaging:</strong> {product.packaging}
              </div>
              <div className="flex flex-wrap gap-1">
                {product.applications.map((app, index) => (
                  <span key={index} className="text-xs px-2 py-1 bg-muted rounded">
                    {app}
                  </span>
                ))}
              </div>
              <a 
                href="https://www.ncmp.com.eg/contact.html" 
                className="btn-food text-sm mt-4 w-full text-center"
              >
                Learn More
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodProducts;
