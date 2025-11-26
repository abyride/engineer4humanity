import { ArrowUpRight, Play, Cpu, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-block mb-6">
              <span className="px-6 py-2 border-2 border-gray-300 rounded-full text-sm font-medium text-gray-700 uppercase tracking-wide">
                About Our Company
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Innovative Solutions for Complex Projects
            </h1>

            {/* Video Thumbnail */}
            <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" 
                alt="Construction site"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Feature 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Cpu className="w-12 h-12 text-gray-900" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Modern Technology
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Cutting-edge tools and software streamline processes, enabling teams to deliver
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-900" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Experience Engineers
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Knowledge and practical skills enable them to tackle challenges from start to finish
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 hover:shadow-lg">
                <span className="text-lg uppercase tracking-wide">Discover More</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Right Image */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80" 
                alt="Engineers on site"
                className="w-full h-40 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;