import { ArrowUpRight } from "lucide-react";

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
                Refugee-Founded • 501(c)(3) Nonprofit
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Empowering Lives Through Engineering & Education
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Engineers4Humanity (E4H) is a refugee-led nonprofit delivering sustainable engineering solutions, 
              STEM education, and leadership training to refugees, immigrants, and underserved communities 
              in the United States and East Africa. We don’t just build infrastructure — we build hope, 
              opportunity, and self-reliance.
            </p>

            {/* CTA Button */}
            <button className="group bg-primary-500 hover:bg-primary-500 text-gray-900 font-semibold px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:shadow-lg">
              <span className="text-base uppercase tracking-wide">Our Programs</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Right Image - Humanitarian/Community Focus */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1000&q=80"
              alt="E4H team and community members working together on a sustainable project"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Stats Section - Impact Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
          {/* Stat 1 */}
          <div className="text-center md:text-left">
            <div className="text-5xl md:text-6xl font-bold mb-3">
              48<span className="text-primary-500">+</span>
            </div>
            <div className="text-gray-400 text-lg">
              Sustainable Projects Completed
            </div>
          </div>

          {/* Stat 2 */}
          <div className="text-center md:text-left">
            <div className="text-5xl md:text-6xl font-bold mb-3">
              2,800<span className="text-primary-500">+</span>
            </div>
            <div className="text-gray-400 text-lg">
              Lives Directly Impacted
            </div>
          </div>

          {/* Stat 3 */}
          <div className="text-center md:text-left">
            <div className="text-5xl md:text-6xl font-bold mb-3">
              12<span className="text-primary-500">+</span>
            </div>
            <div className="text-gray-400 text-lg">
              Countries of Origin Represented
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroStatsSection;