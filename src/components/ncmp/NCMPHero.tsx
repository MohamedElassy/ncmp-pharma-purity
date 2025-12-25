import { ChevronRight, Award, Leaf, FlaskConical, ArrowRight } from "lucide-react";
import pharmaHeroBg from "@/assets/pharma-hero-bg.jpg";

interface HeroProps {
  activeIndustry: string;
}

export const NCMPHero = ({ activeIndustry }: HeroProps) => {
  const isPharma = activeIndustry === "pharma";

  return (
    <header className="relative pt-[148px] lg:pt-[156px]">
      {/* Hero Banner */}
      <div className="hero-banner relative h-[60vh] min-h-[450px] max-h-[600px] overflow-hidden">
        <img
          src={pharmaHeroBg}
          alt="NCMP Corn Processing Facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-banner-overlay" />
        
        <div className="absolute inset-0 flex items-center">
          <div className="container-ncmp">
            <div className="max-w-2xl text-white animate-slide-in-left">
              {isPharma ? (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="badge-new text-sm py-1 px-3">
                      <FlaskConical className="w-4 h-4" />
                      New Sector
                    </span>
                    <span className="text-sm font-medium text-corn-gold-light">ISO 9001 • GMP • HACCP</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                    Pharma & Nutraceuticals
                    <span className="block text-corn-gold-light mt-2">Grade Ingredients</span>
                  </h1>
                  <p className="text-lg text-white/90 mb-6 leading-relaxed">
                    NCMP enters the pharmaceutical sector with premium corn-derived excipients 
                    that meet the most stringent international pharmacopoeial standards (USP/NF, EP, BP).
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="#products" className="btn-pharma">
                      Explore Pharma Products
                      <ChevronRight className="w-4 h-4" />
                    </a>
                    <a href="#certifications" className="btn-ncmp-outline border-white text-white hover:bg-white hover:text-secondary">
                      Our Certifications
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <Leaf className="w-5 h-5 text-corn-gold-light" />
                    <span className="text-sm font-medium text-corn-gold-light">Trusted Since 1982</span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                    Food & Nutrition
                    <span className="block text-corn-gold-light mt-2">Grade Ingredients</span>
                  </h1>
                  <p className="text-lg text-white/90 mb-6 leading-relaxed">
                    Egypt's leading manufacturer of corn-based ingredients for the food and beverage 
                    industry. From glucose syrups to starches, we deliver quality and consistency.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="#products" className="btn-food">
                      Explore Food Products
                      <ChevronRight className="w-4 h-4" />
                    </a>
                    <a href="https://www.ncmp.com.eg/about.html" className="btn-ncmp-outline border-white text-white hover:bg-white hover:text-secondary">
                      About NCMP
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/95 to-transparent">
          <div className="container-ncmp py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-corn-gold-light">40+</div>
                <div className="text-xs lg:text-sm opacity-90">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-corn-gold-light">100%</div>
                <div className="text-xs lg:text-sm opacity-90">Egyptian Corn</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-corn-gold-light">ISO</div>
                <div className="text-xs lg:text-sm opacity-90">9001:2015 Certified</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-corn-gold-light">GMP</div>
                <div className="text-xs lg:text-sm opacity-90">Compliant Facility</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links - Roquette Style */}
      <div id="products" className="bg-card border-b border-border">
        <div className="container-ncmp py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <a href="https://www.ncmp.com.eg/" className="hover:text-primary">Home</a>
              <ChevronRight className="w-4 h-4" />
              <span className="font-medium text-foreground">
                {isPharma ? "Pharma & Nutraceuticals" : "Food & Nutrition"}
              </span>
            </div>
            {isPharma && (
              <div className="hidden md:flex items-center gap-2 text-sm">
                <Award className="w-4 h-4 text-pharma-blue" />
                <span className="text-pharma-blue font-medium">USP/NF • EP • BP Compliant</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NCMPHero;
