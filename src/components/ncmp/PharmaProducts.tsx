import { useState } from "react";
import { ChevronDown, ChevronUp, FileText, Download, FlaskConical } from "lucide-react";
import pharmaSorbitol from "@/assets/pharma-sorbitol.jpg";
import pharmaCitricAcid from "@/assets/pharma-citric-acid.jpg";
import pharmaMaltitol from "@/assets/pharma-maltitol.jpg";
import pharmaCornStarch from "@/assets/pharma-corn-starch.jpg";

interface SpecCategory {
  title: string;
  headerClass: string;
  specs: { label: string; value: string }[];
}

interface PharmaProductData {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  grade: string;
  casNumber: string;
  packaging: string;
  categories: SpecCategory[];
  applications: string[];
}

const pharmaProducts: PharmaProductData[] = [
  {
    id: "sorbitol-pharma",
    name: "Sorbitol",
    subtitle: "Pharmaceutical Grade - D-Glucitol",
    description: "Sorbitol is a versatile product with wide pharmaceutical and medical applications. Used in cough syrups, laxatives, and pharmaceutical formulations. NCMP Sorbitol meets USP/NF and EP standards for pharmaceutical use.",
    image: pharmaSorbitol,
    grade: "USP/NF/EP",
    casNumber: "50-70-4",
    packaging: "291kg drums or 500kg-35000kg Bulk",
    categories: [
      {
        title: "Physical Characteristics",
        headerClass: "spec-header-physical",
        specs: [
          { label: "Definition", value: "Aqueous solution of polyols at 70% of total solids" },
          { label: "Description", value: "Clear colourless, Syrup liquid, Sweet taste" },
          { label: "Dry Substance (w/w%)", value: "70 ± 0.5%" },
          { label: "Brix (20°C)", value: "66.9 - 67.8" },
          { label: "Refractive Index (20°C)", value: "Min. 1.4976" },
          { label: "Water Content", value: "30 ± 0.5%" },
          { label: "Viscosity 30°C (mPa.s)", value: "200" },
        ],
      },
      {
        title: "Chemical Characteristics",
        headerClass: "spec-header-chemical",
        specs: [
          { label: "Ash Content", value: "Max. 0.1%" },
          { label: "SO₂", value: "Max. 50 ppm" },
          { label: "pH (50% D.S)", value: "5.0 - 7.0" },
          { label: "Reducing Sugars", value: "Max. 0.2%" },
          { label: "Chloride", value: "Max. 10 ppm" },
        ],
      },
      {
        title: "Heavy Metal Analysis",
        headerClass: "spec-header-heavy-metal",
        specs: [
          { label: "Heavy Metal (Total)", value: "Max. 5 ppm" },
          { label: "Iron (Fe)", value: "Max. 2 ppm" },
          { label: "Arsenic (As)", value: "Max. 3 ppm" },
          { label: "Nickel (Ni)", value: "Max. 1 ppm" },
          { label: "Lead (Pb)", value: "Max. 1 ppm" },
        ],
      },
      {
        title: "Sugar Spectrum",
        headerClass: "spec-header-sugar",
        specs: [
          { label: "Sorbitol Content", value: "Min. 92%" },
          { label: "Total Sugar", value: "Max. 8%" },
        ],
      },
      {
        title: "Microbiological Limits",
        headerClass: "spec-header-bacteriological",
        specs: [
          { label: "Yeast", value: "NMT 100/1 ml" },
          { label: "Mould", value: "NMT 100/1 ml" },
          { label: "Mesophilic Bacteria", value: "NMT 100/1 ml" },
        ],
      },
    ],
    applications: [
      "Cough syrups and oral liquids",
      "Tablet coating and excipient",
      "Laxative formulations",
      "Parenteral solutions",
      "Toothpaste and oral care",
    ],
  },
  {
    id: "citric-acid-pharma",
    name: "Citric Acid",
    subtitle: "Pharmaceutical Grade - Anhydrous",
    description: "Ultra-pure anhydrous citric acid for pharmaceutical applications. Essential for pH adjustment, buffering systems, and as a chelating agent in pharmaceutical preparations.",
    image: pharmaCitricAcid,
    grade: "BP/USP/EP",
    casNumber: "77-92-9",
    packaging: "25kg bags or bulk containers",
    categories: [
      {
        title: "Physical Characteristics",
        headerClass: "spec-header-physical",
        specs: [
          { label: "Appearance", value: "White crystalline powder" },
          { label: "Assay", value: "99.5 - 100.5%" },
          { label: "Melting Point", value: "153°C" },
          { label: "Solubility in Water", value: "Freely soluble" },
        ],
      },
      {
        title: "Chemical Characteristics",
        headerClass: "spec-header-chemical",
        specs: [
          { label: "Sulfate", value: "Max. 150 ppm" },
          { label: "Oxalic Acid", value: "Max. 350 ppm" },
          { label: "Residue on Ignition", value: "Max. 0.05%" },
          { label: "Water Content", value: "Max. 0.5%" },
        ],
      },
      {
        title: "Heavy Metal Analysis",
        headerClass: "spec-header-heavy-metal",
        specs: [
          { label: "Heavy Metal (Total)", value: "Max. 10 ppm" },
          { label: "Lead (Pb)", value: "Max. 0.5 ppm" },
          { label: "Arsenic (As)", value: "Max. 1 ppm" },
        ],
      },
    ],
    applications: [
      "Buffer systems in formulations",
      "Effervescent tablet formulations",
      "Ophthalmic solutions",
      "pH adjustment in injectables",
      "Chelating agent",
    ],
  },
  {
    id: "maltitol-pharma",
    name: "Maltitol",
    subtitle: "Pharmaceutical Grade - Crystalline",
    description: "High-quality maltitol powder for sugar-free pharmaceutical preparations and nutraceuticals. Excellent taste profile with low glycemic response.",
    image: pharmaMaltitol,
    grade: "EP/USP-NF",
    casNumber: "585-88-6",
    packaging: "25kg bags",
    categories: [
      {
        title: "Physical Characteristics",
        headerClass: "spec-header-physical",
        specs: [
          { label: "Appearance", value: "White crystalline powder" },
          { label: "Maltitol Content", value: "Min. 98%" },
          { label: "Melting Point", value: "145-152°C" },
        ],
      },
      {
        title: "Chemical Characteristics",
        headerClass: "spec-header-chemical",
        specs: [
          { label: "Sorbitol Content", value: "Max. 4%" },
          { label: "Reducing Sugars", value: "Max. 0.1%" },
          { label: "Conductivity", value: "Max. 20 µS/cm" },
          { label: "Sulfated Ash", value: "Max. 0.1%" },
        ],
      },
    ],
    applications: [
      "Chewable tablets",
      "Sugar-free syrups",
      "Lozenges",
      "Nutraceuticals",
    ],
  },
  {
    id: "corn-starch-pharma",
    name: "Corn Starch",
    subtitle: "Pharmaceutical/Medical Grade",
    description: "Premium pharmaceutical-grade corn starch from select Egyptian maize. Critical excipient for tablet disintegration, binding, and medical applications.",
    image: pharmaCornStarch,
    grade: "USP/NF/BP",
    casNumber: "9005-25-8",
    packaging: "25kg bags or bulk",
    categories: [
      {
        title: "Physical Characteristics",
        headerClass: "spec-header-physical",
        specs: [
          { label: "Appearance", value: "Fine white powder" },
          { label: "Loss on Drying", value: "Max. 14%" },
          { label: "pH", value: "4.5 - 7.0" },
          { label: "Particle Size", value: "Controlled distribution" },
        ],
      },
      {
        title: "Chemical Characteristics",
        headerClass: "spec-header-chemical",
        specs: [
          { label: "Protein", value: "Max. 0.5%" },
          { label: "Iron (Fe)", value: "Max. 10 ppm" },
          { label: "Sulfur Dioxide", value: "Max. 50 ppm" },
        ],
      },
      {
        title: "Microbiological Limits",
        headerClass: "spec-header-bacteriological",
        specs: [
          { label: "Total Aerobic Count", value: "USP <61>" },
          { label: "E. coli", value: "Absent" },
          { label: "Salmonella", value: "Absent" },
        ],
      },
    ],
    applications: [
      "Tablet disintegrant",
      "Capsule filler",
      "Surgical glove powder",
      "Binder in tablets",
    ],
  },
];

interface ProductCardProps {
  product: PharmaProductData;
  isExpanded: boolean;
  onToggle: () => void;
}

const ProductCard = ({ product, isExpanded, onToggle }: ProductCardProps) => {
  return (
    <article className="ncmp-card bg-card mb-6">
      <div className="grid lg:grid-cols-3 gap-0">
        {/* Image */}
        <div className="relative h-64 lg:h-auto overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={`${product.name} - NCMP Pharmaceutical Grade`}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 badge-grade">
            {product.grade}
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-2 p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <span className="badge-pharma mb-2 inline-block">Pharma Grade</span>
              <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{product.subtitle}</p>
            </div>
          </div>

          <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm mb-4">
            <div>
              <span className="text-muted-foreground">CAS Number:</span>
              <span className="ml-2 font-medium">{product.casNumber}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Packaging:</span>
              <span className="ml-2 font-medium">{product.packaging}</span>
            </div>
          </div>

          {/* Applications */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-foreground mb-2">Applications:</h4>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((app, index) => (
                <span key={index} className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                  {app}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={onToggle}
            className="flex items-center gap-2 text-pharma-blue font-semibold text-sm hover:underline"
          >
            <FileText className="w-4 h-4" />
            {isExpanded ? "Hide Specifications" : "View Technical Specifications"}
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Expanded Specifications */}
      {isExpanded && (
        <div className="border-t border-border p-6 animate-fade-up">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.categories.map((category, catIndex) => (
              <div key={catIndex} className="border border-border rounded overflow-hidden">
                <div className={`${category.headerClass} text-white px-4 py-2 text-sm font-semibold`}>
                  {category.title}
                </div>
                <table className="w-full">
                  <tbody>
                    {category.specs.map((spec, specIndex) => (
                      <tr key={specIndex} className="border-b border-border last:border-0">
                        <td className="px-3 py-2 text-xs text-muted-foreground">{spec.label}</td>
                        <td className="px-3 py-2 text-xs font-medium text-foreground text-right">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex gap-4">
            <a href="https://www.ncmp.com.eg/contact.html" className="btn-pharma text-sm">
              Request Sample
            </a>
            <a href="#contact" className="btn-ncmp-outline text-sm">
              <Download className="w-4 h-4" />
              Download TDS
            </a>
          </div>
        </div>
      )}
    </article>
  );
};

export const PharmaProducts = () => {
  const [expandedProduct, setExpandedProduct] = useState<string | null>("sorbitol-pharma");

  return (
    <section id="pharma" className="section-ncmp bg-pharma-light">
      <div className="container-ncmp">
        <div className="mb-8">
          <h2 className="section-title text-pharma-blue flex items-center gap-2">
            <FlaskConical className="w-7 h-7" />
            Pharma Grade Products
          </h2>
          <p className="section-subtitle">
            Pharmaceutical-grade ingredients meeting USP, BP, and EP standards for the pharmaceutical industry.
          </p>
        </div>

        <div>
          {pharmaProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isExpanded={expandedProduct === product.id}
              onToggle={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PharmaProducts;
