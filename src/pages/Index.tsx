import { useState } from "react";
import { Helmet } from "react-helmet-async";
import NCMPNavigation from "@/components/ncmp/NCMPNavigation";
import NCMPHero from "@/components/ncmp/NCMPHero";
import PharmaProducts from "@/components/ncmp/PharmaProducts";
import FoodProducts from "@/components/ncmp/FoodProducts";
import NCMPFooter from "@/components/ncmp/NCMPFooter";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"pharma" | "food">("pharma");

  return (
    <>
      <Helmet>
        <title>Products | NCMP - National Company for Maize Products Egypt</title>
        <meta name="description" content="NCMP offers pharma and food grade corn-derived ingredients: Sorbitol, Glucose Syrup, Fructose, Maltodextrin, Corn Starch. ISO & GMP certified Egyptian manufacturer." />
        <link rel="canonical" href="https://www.ncmp.com.eg/products" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <NCMPNavigation />
        
        <main>
          <NCMPHero onTabChange={setActiveTab} activeTab={activeTab} />
          
          {activeTab === "pharma" ? <PharmaProducts /> : <FoodProducts />}
        </main>

        <NCMPFooter />
      </div>
    </>
  );
};

export default Index;
