import React, { useEffect } from "react";
import { ChevronLeft, ChevronRight, Building2, Globe, Handshake, Award } from "lucide-react";

const partners = [
  {
    name: "World Bank Group",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2c/World_Bank_Group_logo.svg",
    category: "Multilateral Finance"
  },
  {
    name: "African Development Bank",
    logo: "https://www.afdb.org/sites/default/files/afdb_logo.png",
    category: "Regional Development"
  },
  {
    name: "USAID",
    logo: "https://www.usaid.gov/sites/default/files/2023-01/usaid-logo.png",
    category: "U.S. Government"
  },
  {
    name: "Government of Rwanda",
    logo: "https://www.gov.rw/fileadmin/templates/logo.png",
    category: "Public Sector Client"
  },
  {
    name: "UNOPS",
    logo: "https://www.unops.org/SiteCollectionImages/UNOPS-logo-blue.png",
    category: "UN Procurement"
  },
  {
    name: "GIZ – German Cooperation",
    logo: "https://www.giz.de/static/en/images/logo_giz.png",
    category: "Bilateral Partner"
  },
  {
    name: "Kigali International Airport Authority",
    logo: "https://via.placeholder.com/220x90/003366/FFFFFF?text=Bugesera+Airport",
    category: "Infrastructure"
  },
  {
    name: "U.S. Embassy Construction Division",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Seal_of_the_United_States_Department_of_State.svg",
    category: "Federal Contracts – USA"
  }
];

export default function E4HPartners() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
    setIsAutoPlaying(false);
  };

  const getVisiblePartners = () => {
    const visible = [];
    for (let i = 0; i < 5; i++) {
      visible.push(partners[(currentIndex + i) % partners.length]);
    }
    return visible;
  };

  return (
    <section className="py-24 md:py-36 px-4 md:px-8 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-500 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 bg-primary-600/20 backdrop-blur-md px-8 py-4 rounded-full border border-primary-500/30 mb-10 shadow-2xl">
            <Handshake className="w-7 h-7 text-primary-400" />
            <span className="text-primary-300 font-bold text-sm tracking-wider uppercase">
              Trusted By Industry Leaders
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Partners in Progress
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">Across Continents</span>
              <svg className="absolute -bottom-4 left-0 w-full" height="32" viewBox="0 0 520 32">
                <path d="M10 24 Q 260 6, 510 24" stroke="#FBBF24" strokeWidth="10" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Governments, multilateral banks, UN agencies, and U.S. federal contractors choose Engineers4Humanity 
            for world-class geotechnical, WASH, and infrastructure engineering — delivered by a refugee-led team 
            that turns lived experience into technical excellence.
          </p>
        </div>

        {/* Partners Carousel */}
        <div className="relative mb-20">
          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white/10 backdrop-blur-md hover:bg-primary-500 rounded-full flex items-center justify-center transition-all shadow-2xl hover:scale-110 group border border-white/20">
            <ChevronLeft className="w-8 h-8 text-white group-hover:text-gray-900" />
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white/10 backdrop-blur-md hover:bg-primary-500 rounded-full flex items-center justify-center transition-all shadow-2xl hover:scale-110 group border border-white/20">
            <ChevronRight className="w-8 h-8 text-white group-hover:text-gray-900" />
          </button>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 px-20">
            {getVisiblePartners().map((partner, i) => (
              <div key={`${partner.name}-${i}`} className="group">
                <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-primary-400/50 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:bg-white/10 h-48 flex flex-col items-center justify-center">
                  <div className="mb-5">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-20 w-auto object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-500"
                    />
                  </div>
                  <span className="text-xs font-bold text-primary-400 bg-primary-500/10 px-4 py-2 rounded-full border border-primary-500/30">
                    {partner.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-4 mt-14">
            {partners.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrentIndex(i); setIsAutoPlaying(false); }}
                className={`transition-all rounded-full ${i === currentIndex ? 'w-14 h-4 bg-primary-500 shadow-lg' : 'w-4 h-4 bg-white/30 hover:bg-white/60'}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-28">
          {[
            { icon: Building2, value: "50+", label: "Contracts Awarded" },
            { icon: Globe, value: "12+", label: "Countries Active" },
            { icon: Award, value: "100%", label: "On-Time Delivery" },
            { icon: Handshake, value: "15+", label: "Repeat Clients" }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500/10 rounded-2xl mb-5 group-hover:bg-primary-500/20 transition-all">
                  <Icon className="w-10 h-10 text-primary-400" />
                </div>
                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <a href="/contact" className="inline-block px-12 py-6 bg-primary-500 hover:bg-amber-400 text-gray-900 rounded-full font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-primary-500/50 hover:scale-105 uppercase tracking-wide">
            Become Our Next Partner
          </a>
        </div>
      </div>
    </section>
  );
}