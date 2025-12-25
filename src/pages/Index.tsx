import { useState } from "react";
import { Helmet } from "react-helmet-async";
import NCMPNavigation from "@/components/ncmp/NCMPNavigation";
import NCMPHero from "@/components/ncmp/NCMPHero";
import PharmaProducts from "@/components/ncmp/PharmaProducts";
import FoodProducts from "@/components/ncmp/FoodProducts";
import NCMPFooter from "@/components/ncmp/NCMPFooter";

const Index = () => {
  const [activeIndustry, setActiveIndustry] = useState<string>("pharma");

  const getPageMeta = () => {
    if (activeIndustry === "pharma") {
      return {
        title: "Pharma & Nutraceuticals Products | NCMP Egypt",
        description: "NCMP pharmaceutical grade corn-derived excipients: Sorbitol, Citric Acid, Maltitol, Corn Starch. USP/NF, EP, BP compliant. ISO 9001 & GMP certified Egyptian manufacturer.",
      };
    }
    return {
      title: "Food & Nutrition Products | NCMP Egypt",
      description: "NCMP food grade ingredients: Glucose Syrup, Fructose, Maltodextrin, Corn Starch. ISO certified Egyptian manufacturer since 1982.",
    };
  };

  const meta = getPageMeta();

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href="https://www.ncmp.com.eg/products" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <NCMPNavigation 
          activeIndustry={activeIndustry} 
          onIndustryChange={setActiveIndustry} 
        />
        
        <main>
          <NCMPHero activeIndustry={activeIndustry} />
          
          {activeIndustry === "pharma" ? <PharmaProducts /> : <FoodProducts />}
        </main>

        <NCMPFooter />
      </div>
    </>
  );
};

export default Index;
