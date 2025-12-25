import { Leaf, Droplets, Users, Globe, Recycle, Factory, TreeDeciduous, Heart } from "lucide-react";

const priorities = [
  {
    id: "climate",
    icon: Factory,
    title: "Climate Action",
    titleAr: "العمل المناخي",
    description: "Committed to reducing greenhouse gas emissions across our operations and supply chain through energy efficiency and sustainable production practices.",
    stats: "330,000 tons annual production with continuous improvement",
    color: "from-ncmp-green to-ncmp-green-light"
  },
  {
    id: "land-water",
    icon: Droplets,
    title: "Land & Water",
    titleAr: "الأرض والمياه",
    description: "Protecting and conserving water resources while ensuring sustainable land use practices in our corn sourcing and manufacturing operations.",
    stats: "Efficient water management systems in place",
    color: "from-pharma-blue to-pharma-blue-light"
  },
  {
    id: "people",
    icon: Users,
    title: "People",
    titleAr: "الناس",
    description: "Upholding the highest ethical standards and human rights principles, ensuring safe working conditions and community development.",
    stats: "40+ years of community engagement",
    color: "from-corn-gold to-corn-gold-light"
  }
];

const initiatives = [
  {
    icon: Recycle,
    title: "Sustainable Manufacturing",
    description: "Our production processes are designed to minimize waste and maximize resource efficiency."
  },
  {
    icon: TreeDeciduous,
    title: "Responsible Sourcing",
    description: "We source the best corn globally while ensuring sustainable agricultural practices."
  },
  {
    icon: Globe,
    title: "Cairo 3A Partnership",
    description: "As part of Cairo 3A holding company, we benefit from their leadership in sustainable agri-commodity trading."
  },
  {
    icon: Heart,
    title: "Community Impact",
    description: "Building lasting relationships with local communities through ethical business practices."
  }
];

const goals = [
  { label: "Energy Efficiency Target", value: "20%", description: "reduction in energy consumption by 2030" },
  { label: "Water Conservation", value: "15%", description: "reduction in water usage per ton produced" },
  { label: "Waste Reduction", value: "Zero", description: "waste to landfill goal" },
  { label: "Community Programs", value: "10+", description: "local development initiatives" }
];

const SustainabilitySection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <div className="container-ncmp">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ncmp-green/10 text-ncmp-green mb-6">
            <Leaf className="w-5 h-5" />
            <span className="text-sm font-medium">Our Commitment to Sustainability</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Building a <span className="text-ncmp-green">Sustainable Future</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The National Company for Maize Products (NCMP) transforms Mother Nature's precious materials into essential daily products. 
            In 2017, NCMP was acquired by Cairo 3A, a leading holding company in sustainable agri-commodity trading and manufacturing for modern life.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Sustainable corn farming"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-ncmp-green text-white p-6 rounded-xl shadow-lg">
              <p className="text-3xl font-bold">330K</p>
              <p className="text-sm opacity-90">Tons/Year Production</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Sustainability Vision</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With a current production of 330,000 tons per year, NCMP continues its commitment to constant sustainable improvement. 
              We consistently source the best corn from across the globe while maintaining quality attributes.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We want to leave our planet better than we found it and have people feel good about using our products. 
              For this reason, we build sustainability in every step we take using the highest ethical standards.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-ncmp-green/10 text-ncmp-green rounded-full text-sm font-medium">Carbon Reduction</span>
              <span className="px-4 py-2 bg-pharma-blue/10 text-pharma-blue rounded-full text-sm font-medium">Water Conservation</span>
              <span className="px-4 py-2 bg-corn-gold/20 text-corn-gold-dark rounded-full text-sm font-medium">Ethical Sourcing</span>
            </div>
          </div>
        </div>

        {/* Our Priorities - Cargill Style */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Priorities</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've set priorities that account for the diverse environmental, social and economic impacts of our business.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {priorities.map((priority) => (
              <div 
                key={priority.id}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`h-2 bg-gradient-to-r ${priority.color}`} />
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${priority.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <priority.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">{priority.title}</h4>
                  <p className="text-sm text-muted-foreground/80 mb-4">{priority.titleAr}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{priority.description}</p>
                  <p className="text-sm font-medium text-ncmp-green">{priority.stats}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Goals */}
        <div className="bg-gradient-to-r from-ncmp-green to-ncmp-green-light rounded-3xl p-10 mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-10">Our Sustainability Goals</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((goal, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <p className="text-4xl font-bold text-white mb-2">{goal.value}</p>
                <p className="text-white/90 font-medium mb-1">{goal.label}</p>
                <p className="text-white/70 text-sm">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cairo 3A Initiatives */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Cairo 3A Sustainability Initiatives</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              As part of Cairo 3A holding company, we leverage their leadership in sustainable agri-commodity practices.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((initiative, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-ncmp-green/10 flex items-center justify-center mb-4">
                  <initiative.icon className="w-6 h-6 text-ncmp-green" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{initiative.title}</h4>
                <p className="text-sm text-muted-foreground">{initiative.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-muted/50 rounded-2xl p-10">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Committed to a Healthier Planet
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            At NCMP, our primary goal is to deliver essential daily products while operating in an environmentally sustainable way.
          </p>
          <a 
            href="https://www.ncmp.com.eg/contact.html"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ncmp-green text-white rounded-xl font-semibold hover:bg-ncmp-green-dark transition-colors"
          >
            <Leaf className="w-5 h-5" />
            Learn More About Our Initiatives
          </a>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
