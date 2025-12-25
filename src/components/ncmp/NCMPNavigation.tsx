import { useState } from "react";
import { Menu, X, ChevronDown, Home, FlaskConical, Utensils, Building2, Phone, Award } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "https://www.ncmp.com.eg/", external: true },
  { label: "About Us", href: "https://www.ncmp.com.eg/about.html", external: true },
  {
    label: "Products",
    href: "#products",
    children: [
      { label: "Pharma Grade Products", href: "#pharma" },
      { label: "Food Grade Products", href: "#food" },
    ],
  },
  { label: "Quality", href: "https://www.ncmp.com.eg/quality.html", external: true },
  { label: "Careers", href: "https://www.ncmp.com.eg/careers.html", external: true },
  { label: "Contact Us", href: "https://www.ncmp.com.eg/contact.html", external: true },
];

export const NCMPNavigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      <nav className="ncmp-nav fixed top-0 left-0 right-0 z-50 bg-card/98 backdrop-blur-sm shadow-sm">
        <div className="container-ncmp">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="https://www.ncmp.com.eg/" className="flex items-center gap-2">
              <img 
                src="https://www.ncmp.com.eg/images/logo2.gif" 
                alt="NCMP - National Company for Maize Products"
                className="h-14 lg:h-16"
              />
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
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="ncmp-nav-link flex items-center gap-1"
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                  </a>

                  {item.children && openDropdown === item.label && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-card rounded shadow-lg border border-border overflow-hidden animate-fade-up">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
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
                <div key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    className="block px-4 py-3 text-base font-medium text-foreground hover:text-primary"
                    onClick={() => !item.children && setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <div className="pl-8 pb-2">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block py-2 text-sm text-muted-foreground hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* NCMP Green Stripe Bar */}
      <div className="fixed top-16 lg:top-20 left-0 right-0 z-40 ncmp-stripe" />
    </>
  );
};

export default NCMPNavigation;
