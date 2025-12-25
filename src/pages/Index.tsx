import { Helmet } from "react-helmet-async";
import PharmaNavigation from "@/components/pharma/PharmaNavigation";
import PharmaHero from "@/components/pharma/PharmaHero";
import PharmaProductGrid from "@/components/pharma/PharmaProductGrid";
import QualityCompliance from "@/components/pharma/QualityCompliance";
import PharmaApplications from "@/components/pharma/PharmaApplications";
import PharmaCTA from "@/components/pharma/PharmaCTA";
import PharmaFooter from "@/components/pharma/PharmaFooter";

const Index = () => {
  // JSON-LD Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NCMP - National Company for Maize Products",
    "description": "Egypt's leading manufacturer of pharmaceutical-grade corn-derived ingredients including Sorbitol, Citric Acid, Maltitol, and Corn Starch for the pharmaceutical industry.",
    "url": "https://www.ncmp.com.eg/pharma",
    "logo": "https://www.ncmp.com.eg/images/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "10th of Ramadan City",
      "addressRegion": "Industrial Zone A5",
      "addressCountry": "Egypt"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+20-2-3539-6605",
      "contactType": "sales",
      "email": "pharma@ncmp.com.eg"
    },
    "sameAs": [
      "https://www.ncmp.com.eg/"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "NCMP Pharmaceutical Grade Products",
    "itemListElement": [
      {
        "@type": "Product",
        "position": 1,
        "name": "Pharmaceutical Sorbitol",
        "description": "USP/NF/EP grade crystalline sorbitol for pharmaceutical formulations",
        "brand": { "@type": "Brand", "name": "NCMP" },
        "category": "Pharmaceutical Excipients"
      },
      {
        "@type": "Product",
        "position": 2,
        "name": "Citric Acid Anhydrous",
        "description": "BP/USP/EP pharmaceutical grade citric acid for buffering and pH adjustment",
        "brand": { "@type": "Brand", "name": "NCMP" },
        "category": "Pharmaceutical Excipients"
      },
      {
        "@type": "Product",
        "position": 3,
        "name": "Maltitol Powder",
        "description": "EP/USP-NF grade maltitol for sugar-free pharmaceutical preparations",
        "brand": { "@type": "Brand", "name": "NCMP" },
        "category": "Pharmaceutical Excipients"
      },
      {
        "@type": "Product",
        "position": 4,
        "name": "Corn Starch",
        "description": "USP/NF/BP pharmaceutical grade corn starch for tablet formulations",
        "brand": { "@type": "Brand", "name": "NCMP" },
        "category": "Pharmaceutical Excipients"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Pharma Grade Ingredients | NCMP - National Company for Maize Products Egypt</title>
        <meta 
          name="description" 
          content="NCMP offers pharmaceutical-grade corn-derived ingredients: Sorbitol, Citric Acid, Maltitol & Corn Starch. USP/EP compliant, GMP certified. Egypt's trusted pharma excipient supplier."
        />
        <meta 
          name="keywords" 
          content="pharmaceutical sorbitol Egypt, pharma grade citric acid, maltitol USP, corn starch pharmaceutical, excipients Egypt, NCMP pharma, GMP certified ingredients, pharmaceutical excipients supplier"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="NCMP - National Company for Maize Products" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pharma Grade Corn-Derived Ingredients | NCMP Egypt" />
        <meta property="og:description" content="Egypt's leading manufacturer of pharmaceutical-grade Sorbitol, Citric Acid, Maltitol & Corn Starch. USP/EP/BP compliant, ISO & GMP certified." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ncmp.com.eg/pharma" />
        <meta property="og:site_name" content="NCMP" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pharma Grade Ingredients | NCMP Egypt" />
        <meta name="twitter:description" content="Pharmaceutical-grade corn-derived excipients from Egypt's trusted manufacturer. USP/EP compliant, GMP certified." />
        
        {/* Canonical */}
        <link rel="canonical" href="https://www.ncmp.com.eg/pharma" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <PharmaNavigation />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <PharmaHero />

          {/* Products Section */}
          <PharmaProductGrid />

          {/* Quality & Compliance Section */}
          <QualityCompliance />

          {/* Applications Section */}
          <PharmaApplications />

          {/* CTA Section */}
          <PharmaCTA />
        </main>

        {/* Footer */}
        <PharmaFooter />
      </div>
    </>
  );
};

export default Index;
