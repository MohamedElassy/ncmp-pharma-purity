import { FlaskConical, Utensils, ChevronDown, Award } from "lucide-react";
import pharmaHeroBg from "@/assets/pharma-hero-bg.jpg";

interface HeroProps {
  onTabChange: (tab: "pharma" | "food") => void;
  activeTab: "pharma" | "food";
}

export const NCMPHero = ({ onTabChange, activeTab }: HeroProps) => {
  return (
    <header className="relative pt-[88px] lg:pt-[104px]">
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] max-h-[500px] overflow-hidden">
        <img
          src={pharmaHeroBg}
          alt="NCMP Corn-Derived Ingredients"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="container-ncmp">
            <div className="max-w-2xl text-white">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-corn-gold" />
                <span className="text-sm font-medium text-corn-gold">ISO 9001 • GMP Certified • HACCP</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                NCMP Products
              </h1>
              <p className="text-lg text-white/90 mb-6">
                National Company for Maize Products offers high-quality corn-derived ingredients 
                for pharmaceutical and food industries, meeting international quality standards.
              </p>
              <a href="#products" className="btn-ncmp inline-flex">
                Explore Products
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div id="products" className="bg-card border-b border-border sticky top-[88px] lg:top-[104px] z-30">
        <div className="container-ncmp">
          <div className="flex">
            <button
              onClick={() => onTabChange("pharma")}
              className={`category-tab category-tab-pharma flex items-center gap-2 ${activeTab === "pharma" ? "active" : ""}`}
            >
              <FlaskConical className="w-4 h-4" />
              Pharma Grade
            </button>
            <button
              onClick={() => onTabChange("food")}
              className={`category-tab category-tab-food flex items-center gap-2 ${activeTab === "food" ? "active" : ""}`}
            >
              <Utensils className="w-4 h-4" />
              Food Grade
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NCMPHero;
