import { useState } from "react";
import { Helmet } from "react-helmet-async";
import NCMPNavigation from "@/components/ncmp/NCMPNavigation";
import NCMPHero from "@/components/ncmp/NCMPHero";
import PharmaProducts from "@/components/ncmp/PharmaProducts";
import FoodProducts from "@/components/ncmp/FoodProducts";
import SustainabilitySection from "@/components/ncmp/SustainabilitySection";
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
    if (activeIndustry === "sustainability") {
      return {
        title: "Sustainability | NCMP Egypt - Building a Sustainable Future",
        description: "NCMP commitment to sustainability: Climate action, land & water conservation, and people-first initiatives. Part of Cairo 3A holding company leading sustainable agri-commodity practices.",
      };
    }
    return {
      title: "Food & Nutrition Products | NCMP Egypt",
      description: "NCMP food grade ingredients: Glucose Syrup, Fructose, Maltodextrin, Corn Starch. ISO certified Egyptian manufacturer since 1982.",
    };
  };

  const meta = getPageMeta();

  const renderContent = () => {
    switch (activeIndustry) {
      case "pharma":
        return <PharmaProducts />;
      case "sustainability":
        return <SustainabilitySection />;
      case "food":
      default:
        return <FoodProducts />;
    }
  };

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
          {renderContent()}
        </main>

        <NCMPFooter />
      </div>
    </>
  );
};

export default Index;
