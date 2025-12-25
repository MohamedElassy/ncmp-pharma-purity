import { Phone, Mail, MapPin, Clock, FileText, ArrowRight } from "lucide-react";

export const PharmaCTA = () => {
  return (
    <section id="contact" className="section-pharma bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 grid-pattern opacity-10" />
      </div>

      <div className="container-pharma relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
              <FileText className="w-4 h-4 text-accent" />
              <span className="text-sm font-body font-medium text-primary-foreground/90">
                Technical Support Available
              </span>
            </span>

            <h2 className="heading-section text-primary-foreground mb-6">
              Partner with Egypt's Leading{" "}
              <span className="text-gradient-gold">Pharma Ingredient</span>{" "}
              Supplier
            </h2>

            <p className="text-xl font-body font-light text-primary-foreground/85 mb-8 leading-relaxed">
              Request product samples, technical data sheets, or regulatory documentation. 
              Our pharmaceutical team is ready to support your formulation needs.
            </p>

            {/* Quick Links */}
            <div className="space-y-4">
              <a
                href="https://www.ncmp.com.eg/contact.html"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                <ArrowRight className="w-5 h-5 text-accent transition-transform group-hover:translate-x-1" />
                <span className="font-body">Request Product Samples</span>
              </a>
              <a
                href="#products"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                <ArrowRight className="w-5 h-5 text-accent transition-transform group-hover:translate-x-1" />
                <span className="font-body">Download Technical Data Sheets</span>
              </a>
              <a
                href="https://www.ncmp.com.eg/certificate.html"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors group"
              >
                <ArrowRight className="w-5 h-5 text-accent transition-transform group-hover:translate-x-1" />
                <span className="font-body">View Certifications</span>
              </a>
            </div>
          </div>

          {/* Right - Contact Card */}
          <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-elevated">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Contact Our Pharma Team
            </h3>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground mb-1">Phone</p>
                  <a href="tel:+20235396605" className="font-body text-muted-foreground hover:text-primary transition-colors">
                    +20 2 3539 6605
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground mb-1">Email</p>
                  <a href="mailto:pharma@ncmp.com.eg" className="font-body text-muted-foreground hover:text-primary transition-colors">
                    pharma@ncmp.com.eg
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground mb-1">Address</p>
                  <p className="font-body text-muted-foreground">
                    10th of Ramadan City, Industrial Zone<br />
                    A5, Egypt
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground mb-1">Business Hours</p>
                  <p className="font-body text-muted-foreground">
                    Sunday - Thursday: 8:00 AM - 5:00 PM (EET)
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://www.ncmp.com.eg/contact.html"
              className="btn-pharma w-full mt-8"
            >
              Send Inquiry
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PharmaCTA;
