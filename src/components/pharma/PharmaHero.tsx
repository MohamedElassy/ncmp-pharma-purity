import { ChevronDown, Award, Shield, Microscope } from "lucide-react";
import pharmaHeroBg from "@/assets/pharma-hero-bg.jpg";

export const PharmaHero = () => {
  return (
    <header className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={pharmaHeroBg}
          alt="Pharmaceutical grade corn-derived ingredients in laboratory setting"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 hero-overlay" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-subtle" />
      <div className="absolute bottom-1/4 left-[5%] w-48 h-48 bg-primary-foreground/5 rounded-full blur-2xl animate-float" />

      <div className="container-pharma relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-up">
            <Award className="w-4 h-4 text-accent" />
            <span className="text-sm font-body font-medium text-primary-foreground/90">
              ISO 9001 · GMP Certified · HACCP Compliant
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="heading-hero text-primary-foreground mb-6 animate-fade-up stagger-1">
            Pharmaceutical Grade{" "}
            <span className="text-gradient-gold">Corn-Derived</span>{" "}
            Ingredients
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl font-body font-light text-primary-foreground/85 max-w-2xl mb-8 animate-fade-up stagger-2 leading-relaxed">
            Precision-engineered excipients and active ingredients meeting the 
            highest pharmacopeial standards for Egypt's pharmaceutical industry.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 mb-10 animate-fade-up stagger-3">
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Shield className="w-5 h-5 text-accent" />
              <span className="font-body text-sm">USP/NF Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Microscope className="w-5 h-5 text-accent" />
              <span className="font-body text-sm">Batch Traceable</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Award className="w-5 h-5 text-accent" />
              <span className="font-body text-sm">40+ Years Excellence</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-up stagger-4">
            <a
              href="#products"
              className="btn-gold group"
            >
              Explore Products
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#quality"
              className="inline-flex items-center gap-2 px-6 py-3 font-body font-semibold text-primary-foreground border-2 border-primary-foreground/30 rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Quality Assurance
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1s" }}>
        <span className="text-primary-foreground/60 text-xs font-body uppercase tracking-widest">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full scroll-indicator" />
        </div>
      </div>
    </header>
  );
};

export default PharmaHero;
