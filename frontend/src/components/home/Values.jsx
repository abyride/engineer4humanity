import { ArrowUpRight } from "lucide-react";
import partner from '../../assets/e4h/court.png'

const HeroStatsSection = () => {
  return (
    <div className="w-full bg-neutral-900 text-white">
      <div className="mx-auto px-6 md:px-12 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-block mb-8">
              <span className="px-6 py-2 border-2 border-white/30 rounded-full text-sm font-medium text-white uppercase tracking-wide">
                Refugee-Led Social Enterprise • East Africa & USA
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Professional Engineering.
              <br />
              <span className="text-primary-400">Profound Human Impact.</span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Engineers4Humanity Consultancy Ltd is a refugee-founded East African firm delivering 
              world-class geotechnical, civil, public health, and renewable energy engineering services 
              across Africa — while transforming refugees, immigrants, and underserved youth into 
              certified, employable engineering professionals in both Africa and the United States.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group bg-primary-500 hover:bg-primary-600 text-gray-900 font-semibold px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:shadow-xl">
                <span className="text-base uppercase tracking-wide">View Our Services</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

              <button className="group border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300">
                <span className="text-base uppercase tracking-wide">Partner With Us</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Image - Professional + Human Touch */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={partner}
              alt="E4H engineers conducting geotechnical fieldwork alongside trained refugee technicians"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Impact & Credibility Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
          {/* Stat 1 */}
          <div className="text-center md:text-left">
            <div className="text-5xl md:text-6xl font-bold mb-3">
              10<span className="text-primary-500">+</span>
            </div>
            <div className="text-gray-400 text-lg">
              Years of Engineering Excellence in Africa
            </div>
          </div>

          {/* Stat 2 */}
          <div className="text-center md:text-left">
            <div className="text-5xl md:text-6xl font-bold mb-3">
              850<span className="text-primary-500">+</span>
            </div>
            <div className="text-gray-400 text-lg">
              Youth Trained & Placed in Skilled Jobs
            </div>
          </div>

          {/* Stat 3 */}
          <div className="text-center md:text-left">
            <div className="text-5xl md:text-6xl font-bold mb-3">
              6<span className="text-primary-500">+</span>
            </div>
            <div className="text-gray-400 text-lg">
              African Nations & Growing U.S. Presence
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroStatsSection;