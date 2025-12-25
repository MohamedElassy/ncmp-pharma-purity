import { Shield, Microscope, FileCheck, Award, Building2, Globe, CheckCircle2 } from "lucide-react";

const qualityFeatures = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "GMP Certified Manufacturing",
    description: "All pharmaceutical ingredients produced in facilities meeting Good Manufacturing Practice standards with validated processes and controlled environments.",
  },
  {
    icon: <Microscope className="w-6 h-6" />,
    title: "Advanced Quality Control",
    description: "State-of-the-art analytical laboratories equipped with HPLC, GC, ICP-MS, and spectroscopic instruments for comprehensive quality testing.",
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Full Documentation",
    description: "Complete batch documentation including Certificates of Analysis (CoA), stability data, and Drug Master File (DMF) support for regulatory submissions.",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Dedicated Pharma Lines",
    description: "Separate production lines for pharmaceutical-grade products with controlled cross-contamination prevention and allergen management protocols.",
  },
];

const certifications = [
  { name: "ISO 9001:2015", type: "Quality Management" },
  { name: "ISO 22000:2018", type: "Food Safety" },
  { name: "HACCP", type: "Hazard Analysis" },
  { name: "ISO 14001", type: "Environmental" },
  { name: "OHSAS 18001", type: "Health & Safety" },
  { name: "Halal Certified", type: "Religious Compliance" },
  { name: "Kosher Certified", type: "Religious Compliance" },
  { name: "GMP", type: "Manufacturing" },
];

const complianceStandards = [
  "United States Pharmacopeia (USP/NF)",
  "European Pharmacopoeia (EP/Ph. Eur.)",
  "British Pharmacopoeia (BP)",
  "Japanese Pharmacopoeia (JP)",
  "Egyptian Pharmacopoeia",
  "ICH Guidelines Compliance",
];

export const QualityCompliance = () => {
  return (
    <section id="quality" className="section-pharma bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="container-pharma relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-pharma mb-4">Quality Assurance</span>
          <h2 className="heading-section text-foreground mb-4">
            Pharmaceutical <span className="text-gradient-gold">Excellence</span>
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-body text-muted-foreground">
            NCMP maintains the highest quality standards throughout the manufacturing process, 
            from raw material selection to final product release, ensuring consistent quality 
            for pharmaceutical applications.
          </p>
        </div>

        {/* Quality Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {qualityFeatures.map((feature, index) => (
            <div
              key={index}
              className="card-pharma bg-card group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center text-foreground flex-shrink-0 transition-transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="heading-card text-foreground mb-2">{feature.title}</h3>
                  <p className="text-body text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Compliance */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Certifications */}
          <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-accent" />
              <h3 className="font-display text-2xl font-bold">Certifications</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-primary-foreground/10 rounded-xl p-4 backdrop-blur-sm border border-primary-foreground/10 transition-all hover:bg-primary-foreground/15"
                >
                  <p className="font-body font-semibold text-primary-foreground mb-1">{cert.name}</p>
                  <p className="text-sm font-body text-primary-foreground/70">{cert.type}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pharmacopeial Compliance */}
          <div className="bg-secondary rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-primary" />
              <h3 className="font-display text-2xl font-bold text-foreground">Pharmacopeial Compliance</h3>
            </div>
            <p className="text-body text-muted-foreground mb-6">
              Our pharmaceutical-grade ingredients are manufactured and tested to meet major 
              international pharmacopeial standards:
            </p>
            <div className="space-y-3">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-body text-foreground">{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityCompliance;
