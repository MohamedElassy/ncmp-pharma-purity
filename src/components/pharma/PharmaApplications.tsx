import { Pill, Stethoscope, Baby, Eye, HeartPulse, Sparkles } from "lucide-react";

const applicationAreas = [
  {
    icon: <Pill className="w-6 h-6" />,
    title: "Oral Solid Dosage",
    description: "Tablets, capsules, and powders utilizing our excipients for binding, disintegration, and sweetening.",
    products: ["Sorbitol", "Corn Starch", "Maltitol"],
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Parenteral Solutions",
    description: "Injectable formulations requiring ultra-pure ingredients with low endotoxin levels.",
    products: ["Sorbitol", "Citric Acid"],
  },
  {
    icon: <Baby className="w-6 h-6" />,
    title: "Pediatric Formulations",
    description: "Child-friendly medicines with pleasant taste profiles and safe excipient profiles.",
    products: ["Maltitol", "Sorbitol"],
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Ophthalmic Products",
    description: "Eye drops and solutions requiring pharmaceutical-grade buffering and tonicity agents.",
    products: ["Citric Acid", "Sorbitol"],
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    title: "Cardiovascular Drugs",
    description: "Specialized formulations for heart medications with compatible excipients.",
    products: ["Corn Starch", "Citric Acid"],
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Nutraceuticals",
    description: "Dietary supplements and functional foods requiring high-purity ingredients.",
    products: ["Maltitol", "Sorbitol", "Citric Acid"],
  },
];

export const PharmaApplications = () => {
  return (
    <section className="section-pharma bg-gradient-pharma">
      <div className="container-pharma">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-pharma mb-4">Applications</span>
          <h2 className="heading-section text-foreground mb-4">
            Pharmaceutical <span className="text-gradient-gold">Applications</span>
          </h2>
          <div className="divider-gold mx-auto mb-6" />
          <p className="text-body text-muted-foreground">
            Our pharmaceutical-grade ingredients serve diverse therapeutic areas and dosage forms, 
            enabling formulators to create safe and effective medicines.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applicationAreas.map((app, index) => (
            <div
              key={index}
              className="card-pharma bg-card group cursor-default"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 transition-all group-hover:bg-gradient-gold group-hover:text-foreground">
                {app.icon}
              </div>

              {/* Content */}
              <h3 className="heading-card text-foreground mb-2">{app.title}</h3>
              <p className="text-body text-muted-foreground mb-4">{app.description}</p>

              {/* Product Tags */}
              <div className="flex flex-wrap gap-2">
                {app.products.map((product, pIndex) => (
                  <span
                    key={pIndex}
                    className="px-3 py-1 text-xs font-body font-medium bg-secondary text-secondary-foreground rounded-full"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PharmaApplications;
