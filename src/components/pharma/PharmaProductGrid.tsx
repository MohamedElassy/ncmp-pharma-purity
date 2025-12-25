import { useState } from "react";
import { ChevronRight, FlaskConical, Pill, Droplets, Leaf, ChevronDown, ChevronUp, Check } from "lucide-react";
import pharmaSorbitol from "@/assets/pharma-sorbitol.jpg";
import pharmaCitricAcid from "@/assets/pharma-citric-acid.jpg";
import pharmaMaltitol from "@/assets/pharma-maltitol.jpg";
import pharmaCornStarch from "@/assets/pharma-corn-starch.jpg";

interface ProductSpec {
  label: string;
  value: string;
}

interface ProductApplication {
  name: string;
  description: string;
}

interface PharmaProduct {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  grade: string;
  casNumber: string;
  specifications: ProductSpec[];
  applications: ProductApplication[];
  features: string[];
}

const pharmaProducts: PharmaProduct[] = [
  {
    id: "sorbitol",
    name: "Pharmaceutical Sorbitol",
    subtitle: "D-Glucitol, USP/NF Grade",
    description: "High-purity crystalline sorbitol manufactured from premium Egyptian corn starch. Ideal as a humectant, sweetening agent, and tablet excipient in pharmaceutical formulations.",
    image: pharmaSorbitol,
    icon: <Droplets className="w-6 h-6" />,
    grade: "USP/NF/EP",
    casNumber: "50-70-4",
    specifications: [
      { label: "Purity", value: "≥99.5%" },
      { label: "Moisture", value: "≤0.5%" },
      { label: "pH (10% solution)", value: "5.0-7.0" },
      { label: "Heavy Metals", value: "≤10 ppm" },
      { label: "Reducing Sugars", value: "≤0.2%" },
    ],
    applications: [
      { name: "Tablet Formulation", description: "Binder, filler, and coating agent" },
      { name: "Oral Liquids", description: "Vehicle and sweetening agent" },
      { name: "Parenteral Solutions", description: "Tonicity agent" },
    ],
    features: [
      "Non-cariogenic sweetener",
      "Excellent chemical stability",
      "Compatible with most APIs",
      "Kosher & Halal certified",
    ],
  },
  {
    id: "citric-acid",
    name: "Citric Acid Anhydrous",
    subtitle: "Pharmaceutical Grade, BP/USP",
    description: "Ultra-pure anhydrous citric acid produced through advanced fermentation technology. Essential for pH adjustment, buffering, and as a chelating agent in pharmaceutical preparations.",
    image: pharmaCitricAcid,
    icon: <FlaskConical className="w-6 h-6" />,
    grade: "BP/USP/EP",
    casNumber: "77-92-9",
    specifications: [
      { label: "Assay", value: "99.5-100.5%" },
      { label: "Sulfate", value: "≤150 ppm" },
      { label: "Oxalic Acid", value: "≤350 ppm" },
      { label: "Heavy Metals", value: "≤10 ppm" },
      { label: "Residue on Ignition", value: "≤0.05%" },
    ],
    applications: [
      { name: "Buffer Systems", description: "pH stabilization in formulations" },
      { name: "Effervescent Tablets", description: "Acid component with carbonates" },
      { name: "Ophthalmic Solutions", description: "Chelating and buffering agent" },
    ],
    features: [
      "GRAS status for safety",
      "Excellent water solubility",
      "Natural origin (fermentation)",
      "Multi-compendial compliance",
    ],
  },
  {
    id: "maltitol",
    name: "Maltitol Powder",
    subtitle: "Crystalline, Pharma Grade",
    description: "High-quality maltitol derived from maltose, offering excellent taste profile and functional properties for sugar-free pharmaceutical preparations and nutraceuticals.",
    image: pharmaMaltitol,
    icon: <Pill className="w-6 h-6" />,
    grade: "EP/USP-NF",
    casNumber: "585-88-6",
    specifications: [
      { label: "Maltitol Content", value: "≥98%" },
      { label: "Sorbitol", value: "≤4%" },
      { label: "Reducing Sugars", value: "≤0.1%" },
      { label: "Conductivity", value: "≤20 µS/cm" },
      { label: "Sulfated Ash", value: "≤0.1%" },
    ],
    applications: [
      { name: "Chewable Tablets", description: "Sweetener and bulking agent" },
      { name: "Syrups", description: "Sugar-free formulations" },
      { name: "Lozenges", description: "Sweet taste without glycemic impact" },
    ],
    features: [
      "Low glycemic index",
      "Tooth-friendly (non-cariogenic)",
      "Sugar-like sweetness (90%)",
      "Heat stable for processing",
    ],
  },
  {
    id: "corn-starch",
    name: "Corn Starch",
    subtitle: "Medical/Pharmaceutical Grade",
    description: "Premium pharmaceutical-grade corn starch from select Egyptian maize. Serves as a critical excipient for tablet disintegration, binding, and as a dusting powder in medical applications.",
    image: pharmaCornStarch,
    icon: <Leaf className="w-6 h-6" />,
    grade: "USP/NF/BP",
    casNumber: "9005-25-8",
    specifications: [
      { label: "Loss on Drying", value: "≤14%" },
      { label: "Protein", value: "≤0.5%" },
      { label: "pH", value: "4.5-7.0" },
      { label: "Microbial Limits", value: "USP <61>" },
      { label: "Iron", value: "≤10 ppm" },
    ],
    applications: [
      { name: "Tablet Disintegrant", description: "Rapid tablet breakdown" },
      { name: "Surgical Glove Powder", description: "Medical-grade lubricant" },
      { name: "Capsule Filler", description: "Diluent and flow agent" },
    ],
    features: [
      "Controlled particle size",
      "Low endotoxin levels",
      "Excellent compressibility",
      "Non-GMO available",
    ],
  },
];

interface ProductCardProps {
  product: PharmaProduct;
  isExpanded: boolean;
  onToggle: () => void;
}

const ProductCard = ({ product, isExpanded, onToggle }: ProductCardProps) => {
  return (
    <article
      id={product.id}
      className="card-product bg-card scroll-mt-24"
    >
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Image Section */}
        <div className="relative aspect-square lg:aspect-auto overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={`${product.name} - NCMP Pharmaceutical Grade Ingredient`}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          {/* Grade Badge */}
          <div className="absolute top-4 left-4 badge-gold">
            {product.grade}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 lg:p-10 flex flex-col">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              {product.icon}
            </div>
            <div>
              <h3 className="heading-card text-foreground mb-1">{product.name}</h3>
              <p className="text-sm font-body text-muted-foreground">{product.subtitle}</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-body text-muted-foreground mb-6">
            {product.description}
          </p>

          {/* CAS Number */}
          <div className="flex items-center gap-2 mb-6 text-sm font-body">
            <span className="text-muted-foreground">CAS Number:</span>
            <span className="font-medium text-foreground">{product.casNumber}</span>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm font-body text-foreground/80">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Expand/Collapse Button */}
          <button
            onClick={onToggle}
            className="flex items-center gap-2 text-primary font-body font-semibold text-sm hover:text-primary/80 transition-colors mt-auto"
            aria-expanded={isExpanded}
          >
            {isExpanded ? "Hide Details" : "View Specifications"}
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {/* Expanded Content */}
          {isExpanded && (
            <div className="mt-6 pt-6 border-t border-border animate-fade-up">
              {/* Specifications */}
              <div className="mb-6">
                <h4 className="text-sm font-body font-semibold text-foreground mb-3 uppercase tracking-wide">
                  Technical Specifications
                </h4>
                <div className="space-y-2">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="text-sm font-body text-muted-foreground">{spec.label}</span>
                      <span className="text-sm font-body font-medium text-foreground">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h4 className="text-sm font-body font-semibold text-foreground mb-3 uppercase tracking-wide">
                  Pharmaceutical Applications
                </h4>
                <div className="space-y-3">
                  {product.applications.map((app, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-body font-medium text-foreground text-sm">{app.name}: </span>
                        <span className="font-body text-muted-foreground text-sm">{app.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Request TDS Button */}
              <a
                href="#contact"
                className="btn-pharma-outline w-full mt-6 text-sm"
              >
                Request Technical Data Sheet
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export const PharmaProductGrid = () => {
  const [expandedProduct, setExpandedProduct] = useState<string | null>(null);

  const handleToggle = (productId: string) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  return (
    <section id="products" className="section-pharma bg-gradient-pharma">
      <div className="container-pharma">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-pharma mb-4">Our Portfolio</span>
          <h2 className="heading-section text-foreground mb-4">
            Pharma Grade <span className="text-gradient-gold">Ingredients</span>
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-body text-muted-foreground">
            Corn-derived pharmaceutical ingredients manufactured to the highest quality standards, 
            meeting USP, BP, and EP specifications for Egyptian and global markets.
          </p>
        </div>

        {/* Food vs Pharma Grade Notice */}
        <div className="bg-primary/5 rounded-2xl p-6 lg:p-8 mb-12 border border-primary/10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              <FlaskConical className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                Pharma Grade vs. Food Grade: What's the Difference?
              </h3>
              <p className="font-body text-muted-foreground">
                Our pharmaceutical-grade ingredients undergo additional purification, stringent testing for 
                impurities, endotoxins, and microbial limits, and are manufactured in GMP-compliant facilities 
                to meet pharmacopeial monograph requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="space-y-8">
          {pharmaProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isExpanded={expandedProduct === product.id}
              onToggle={() => handleToggle(product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PharmaProductGrid;
