import { Linkedin, Facebook, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const footerLinks = {
  pharmaProducts: [
    { label: "Pharmaceutical Sorbitol", href: "#sorbitol" },
    { label: "Citric Acid (Pharma)", href: "#citric-acid" },
    { label: "Maltitol", href: "#maltitol" },
    { label: "Corn Starch (Medical)", href: "#corn-starch" },
  ],
  company: [
    { label: "About NCMP", href: "https://www.ncmp.com.eg/about.html" },
    { label: "Quality Control", href: "https://www.ncmp.com.eg/quality.html" },
    { label: "Certifications", href: "https://www.ncmp.com.eg/certificate.html" },
    { label: "Sustainability", href: "https://www.ncmp.com.eg/sustainability.html" },
    { label: "Careers", href: "https://www.ncmp.com.eg/careers.html" },
  ],
  resources: [
    { label: "Technical Data Sheets", href: "#products" },
    { label: "Product Catalog", href: "https://www.ncmp.com.eg/product.html" },
    { label: "Quality & Compliance", href: "#quality" },
    { label: "Contact Us", href: "https://www.ncmp.com.eg/contact.html" },
  ],
};

export const PharmaFooter = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-pharma py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">N</span>
              </div>
              <div>
                <p className="font-display font-bold text-lg text-primary-foreground leading-tight">NCMP</p>
                <p className="text-xs text-primary-foreground/60 font-body">Pharma Grade</p>
              </div>
            </div>
            <p className="font-body text-primary-foreground/70 text-sm mb-6 leading-relaxed">
              National Company for Maize Products - Egypt's premier manufacturer of 
              pharmaceutical-grade corn-derived ingredients since 1981.
            </p>
            <p className="font-body text-primary-foreground/50 text-xs mb-4">
              A Cairo 3A Group Company
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="mailto:pharma@ncmp.com.eg"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Pharma Products */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Pharma Products</h4>
            <ul className="space-y-3">
              {footerLinks.pharmaProducts.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    {link.label}
                    {link.href.startsWith("http") && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <p className="font-body text-sm text-primary-foreground/70">
                  10th of Ramadan City<br />
                  Industrial Zone A5<br />
                  Egypt
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="tel:+20235396605" className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  +20 2 3539 6605
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a href="mailto:pharma@ncmp.com.eg" className="font-body text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  pharma@ncmp.com.eg
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-pharma py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} National Company for Maize Products. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-body text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                Terms of Use
              </a>
              <a href="https://www.ncmp.com.eg/" className="font-body text-xs text-primary-foreground/50 hover:text-primary-foreground transition-colors inline-flex items-center gap-1">
                Main Website <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PharmaFooter;
