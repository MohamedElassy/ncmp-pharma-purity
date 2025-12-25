import { useState } from "react";
import { Menu, X, ChevronDown, Search, Phone, Sparkles } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: { label: string; href: string; isNew?: boolean }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "https://www.ncmp.com.eg/", external: true },
  { label: "About Us", href: "https://www.ncmp.com.eg/about.html", external: true },
  { label: "Quality", href: "https://www.ncmp.com.eg/quality.html", external: true },
  { label: "Careers", href: "https://www.ncmp.com.eg/careers.html", external: true },
  { label: "Contact Us", href: "https://www.ncmp.com.eg/contact.html", external: true },
];

interface IndustryTab {
  id: string;
  label: string;
  labelAr?: string;
  isNew?: boolean;
  color: string;
}

const industryTabs: IndustryTab[] = [
  { id: "pharma", label: "Pharma & Nutraceuticals", labelAr: "الأدوية والمكملات", isNew: true, color: "pharma-tab" },
  { id: "food", label: "Food & Nutrition", labelAr: "الغذاء والتغذية", color: "food-tab" },
];

interface NCMPNavigationProps {
  activeIndustry: string;
  onIndustryChange: (industry: string) => void;
}

export const NCMPNavigation = ({ activeIndustry, onIndustryChange }: NCMPNavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground text-xs py-2">
        <div className="container-ncmp flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="tel:+20222023456" className="flex items-center gap-1 hover:text-corn-gold-light transition-colors">
              <Phone className="w-3 h-3" />
              <span>+20 2 2202 3456</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.ncmp.com.eg/contact.html" className="hover:text-corn-gold-light transition-colors">
              Contact Customer Care
            </a>
            <span className="text-secondary-foreground/50">|</span>
            <button className="flex items-center gap-1 hover:text-corn-gold-light transition-colors">
              <Search className="w-3 h-3" />
              Find a Product
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="ncmp-nav fixed top-[28px] left-0 right-0 z-50 bg-card/98 backdrop-blur-sm shadow-sm">
        <div className="container-ncmp">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="https://www.ncmp.com.eg/" className="flex items-center gap-2">
              <img 
                src="https://www.ncmp.com.eg/images/logo2.gif" 
                alt="NCMP - National Company for Maize Products"
                className="h-12 lg:h-14"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="ncmp-nav-link"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border animate-fade-up">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-border mt-4 pt-4">
                <p className="px-4 text-xs text-muted-foreground uppercase tracking-wider mb-2">Industries</p>
                {industryTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      onIndustryChange(tab.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-base font-medium flex items-center gap-2 ${
                      activeIndustry === tab.id ? 'text-primary bg-muted' : 'text-foreground'
                    }`}
                  >
                    {tab.label}
                    {tab.isNew && (
                      <span className="badge-new">New</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Industry Tabs Bar - Roquette Style */}
      <div className="fixed top-[100px] lg:top-[108px] left-0 right-0 z-40 bg-card border-b border-border shadow-sm">
        <div className="container-ncmp">
          <div className="industry-tabs overflow-x-auto">
            {industryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onIndustryChange(tab.id)}
                className={`industry-tab ${tab.color} flex items-center gap-2 whitespace-nowrap ${
                  activeIndustry === tab.id ? 'active' : ''
                }`}
              >
                {tab.label}
                {tab.isNew && (
                  <span className="badge-new flex items-center gap-0.5">
                    <Sparkles className="w-3 h-3" />
                    New
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Green Stripe */}
      <div className="fixed top-[28px] left-0 right-0 z-[55] ncmp-stripe opacity-0 pointer-events-none" />
    </>
  );
};

export default NCMPNavigation;
