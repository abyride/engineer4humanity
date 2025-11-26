import {
  Building2,
  Home,
  Wrench,
  PaintBucket,
  Hammer,
  HardHat,
  ArrowRight,
  CheckCircle,
  Sparkles
} from "lucide-react";
import Header from "../../components/header";

const ServicesPage = () => {
  const services = [
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "From office buildings to retail spaces, we deliver commercial projects that meet your business needs and exceed expectations.",
      features: [
        "Office buildings & complexes",
        "Retail & shopping centers",
        "Hotels & hospitality",
        "Industrial facilities"
      ],
      color: "from-yellow-600 to-orange-600",
      bgColor: "bg-yellow-50",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600"
    },
    {
      icon: Home,
      title: "Residential Construction",
      description: "Build your dream home with our expert team. We handle everything from custom homes to multi-family developments.",
      features: [
        "Custom luxury homes",
        "Multi-family housing",
        "Home additions & extensions",
        "Kitchen & bath remodels"
      ],
      color: "from-blue-600 to-indigo-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Wrench,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with our comprehensive renovation services. We breathe new life into old structures.",
      features: [
        "Complete property renovations",
        "Interior remodeling",
        "Structural upgrades",
        "Historic restoration"
      ],
      color: "from-orange-600 to-red-600",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: PaintBucket,
      title: "Design & Planning",
      description: "Our architects and designers work with you to create detailed plans that bring your vision to life.",
      features: [
        "Architectural design",
        "3D visualization & BIM",
        "Interior design services",
        "Permit & compliance handling"
      ],
      color: "from-purple-600 to-violet-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Hammer,
      title: "Infrastructure Projects",
      description: "Large-scale infrastructure development including roads, bridges, and utilities with proven engineering excellence.",
      features: [
        "Road & highway construction",
        "Bridge engineering",
        "Utility installation",
        "Site development"
      ],
      color: "from-amber-600 to-yellow-600",
      bgColor: "bg-amber-50",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600"
    },
    {
      icon: HardHat,
      title: "Project Management",
      description: "Comprehensive project management services ensuring your project is completed on time, on budget, and to specification.",
      features: [
        "Full project oversight",
        "Budget management",
        "Quality control & safety",
        "Timeline coordination"
      ],
      color: "from-teal-600 to-cyan-600",
      bgColor: "bg-teal-50",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      description: "We meet to understand your vision and requirements"
    },
    {
      number: "02",
      title: "Design",
      description: "Create detailed plans and obtain necessary permits"
    },
    {
      number: "03",
      title: "Build",
      description: "Execute construction with precision and quality"
    },
    {
      number: "04",
      title: "Deliver",
      description: "Complete final inspections and handover your project"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <Header path="Service" title="Service" />

      {/* Services Grid Section */}
      <div className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive Construction<br />
              <span className="relative inline-block">
                <span className="relative z-10">Solutions</span>
                <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 300 30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 20 Q 150 5, 295 20" stroke="#FCD34D" strokeWidth="8" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need for your construction project, delivered by industry experts with 25+ years of experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${service.iconBg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-9 h-9 ${service.iconColor}`} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${service.iconColor}`} />
                          <span className="text-gray-700 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <button className="group/btn flex items-center gap-2 text-gray-900 font-bold hover:gap-4 transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 md:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-yellow-100 rounded-full mb-6">
              <span className="text-yellow-700 font-bold text-sm uppercase tracking-wider">
                Our Approach
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Client-Focused, Every Step of the Way
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-14 left-full w-full h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-200 -translate-x-1/2 z-0" />
                )}

                <div className="relative bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl text-white font-bold text-2xl mb-5 shadow-xl">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero CTA */}
      <div className="relative py-28 md:py-36 px-4 md:px-8 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1800&q=80&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-800/90 to-black/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Ready to Start Building?<br />
            <span className="text-yellow-400">Let's Make It Happen.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Partner with BuildGo for exceptional construction services backed by 25+ years of experience and 500+ successful projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-full text-lg transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105">
              Get Free Consultation
            </button>
            <button className="px-10 py-5 bg-transparent border-3 border-white text-white hover:bg-white hover:text-gray-900 font-bold rounded-full text-lg transition-all">
              View Our Projects
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "25+", label: "Years of Excellence" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "150+", label: "Expert Team" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-gray-900 mb-3">
                  {stat.value}
                </div>
                <div className="text-lg text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;