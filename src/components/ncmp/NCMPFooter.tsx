import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export const NCMPFooter = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-ncmp py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://www.ncmp.com.eg/images/logo2.gif" 
              alt="NCMP"
              className="h-16 mb-4 bg-white p-2 rounded"
            />
            <p className="text-sm text-secondary-foreground/80">
              National Company for Maize Products - Egypt's leading corn processing company since 1981.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><a href="#pharma" className="hover:text-white">Pharma Grade</a></li>
              <li><a href="#food" className="hover:text-white">Food Grade</a></li>
              <li><a href="https://www.ncmp.com.eg/sorbitol.html" className="hover:text-white flex items-center gap-1">Sorbitol <ExternalLink className="w-3 h-3" /></a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><a href="https://www.ncmp.com.eg/about.html" className="hover:text-white">About Us</a></li>
              <li><a href="https://www.ncmp.com.eg/quality.html" className="hover:text-white">Quality</a></li>
              <li><a href="https://www.ncmp.com.eg/certificate.html" className="hover:text-white">Certifications</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-secondary-foreground/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>10th of Ramadan City, Egypt</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+20235396605" className="hover:text-white">+20 2 3539 6605</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@ncmp.com.eg" className="hover:text-white">info@ncmp.com.eg</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/20 py-4">
        <div className="container-ncmp text-center text-xs text-secondary-foreground/60">
          © {new Date().getFullYear()} National Company for Maize Products. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default NCMPFooter;
