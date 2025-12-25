import { useState } from "react";
import { Menu, X, ChevronDown, Home, FlaskConical, Shield, Phone, Building2 } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "https://www.ncmp.com.eg/", icon: <Home className="w-4 h-4" /> },
  { label: "About Us", href: "https://www.ncmp.com.eg/about.html", icon: <Building2 className="w-4 h-4" /> },
  {
    label: "Products",
    href: "#products",
    icon: <FlaskConical className="w-4 h-4" />,
    children: [
      { label: "Pharmaceutical Sorbitol", href: "#sorbitol" },
      { label: "Citric Acid (Pharma)", href: "#citric-acid" },
      { label: "Maltitol", href: "#maltitol" },
      { label: "Corn Starch (Medical)", href: "#corn-starch" },
    ],
  },
  { label: "Quality & Compliance", href: "#quality", icon: <Shield className="w-4 h-4" /> },
  { label: "Contact", href: "https://www.ncmp.com.eg/contact.html", icon: <Phone className="w-4 h-4" /> },
];

export const PharmaNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-pharma">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="https://www.ncmp.com.eg/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-primary-foreground font-display font-bold text-lg">N</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-display font-bold text-lg text-foreground leading-tight">NCMP</p>
              <p className="text-xs text-muted-foreground font-body">Pharma Grade</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-body font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-primary/5"
                >
                  {item.icon}
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                </a>

                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-card rounded-xl shadow-elevated border border-border overflow-hidden animate-fade-in">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-3 text-sm font-body text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden lg:inline-flex btn-pharma text-sm"
          >
            Request Sample
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors"
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
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            {navItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-base font-body font-medium text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => !item.children && setIsMobileMenuOpen(false)}
                >
                  {item.icon}
                  {item.label}
                </a>
                {item.children && (
                  <div className="pl-11 pb-2">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-sm font-body text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 pt-4">
              <a href="#contact" className="btn-pharma w-full text-center text-sm">
                Request Sample
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default PharmaNavigation;
