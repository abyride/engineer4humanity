import React, { useState, useEffect } from 'react';
import { ArrowRight, Search, Grid3x3, ChevronLeft, ChevronRight, HeartHandshake, Users, Globe } from 'lucide-react';

const BuildGoHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

const slides = [
  {
    Icon: HeartHandshake,
    title: "Engineering",
    subtitle: "with Purpose",
    badge: "REFUGEE-LED SOCIAL ENTERPRISE",
    mainText: "Engineers4Humanity",
    boldText: "Consultancy Ltd",
    paragraph: "Founded by refugee engineers who turned adversity into expertise, we are a professional East African consultancy delivering world-class engineering solutions while creating dignified careers for displaced and underserved youth across Africa and now in the United States.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1920&q=80"
  },
  {
    Icon: Users,
    title: "Transforming Lives",
    subtitle: "Through Skills & Jobs",
    badge: "FROM SURVIVAL TO LEADERSHIP",
    mainText: "We Train. We Employ.",
    boldText: "We Build Futures.",
    paragraph: "Through our International Hope Institute and on-the-job training programs, we transform refugees, immigrants, and vulnerable youth into certified engineers, geotechnical specialists, project managers, and construction professionals — ready to lead major infrastructure projects in Africa and America.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80"
  },
  {
    Icon: Globe,
    title: "Africa to America",
    subtitle: "Global Impact Starts Local",
    badge: "SERVING TWO CONTINENTS",
    mainText: "Bridging Continents",
    boldText: "with Excellence",
    paragraph: "Registered in East Africa with a growing presence in the United States, we deliver high-standard geotechnical, civil, public health, and renewable energy engineering services while creating meaningful employment and transferring skills from global experts to local communities — advancing both Agenda 2063 and the SDGs.",
    image: "https://images.unsplash.com/photo-1519389951298-1ccd7148e0d5?w=1920&q=80"
  }
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${slide.image}')`
          }}
        />
      ))}

      {/* Navigation Bar */}
      <nav className="relative z-20 flex items-center justify-between px-8 lg:px-16 py-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <HeartHandshake className="text-white" size={28} />
          </div>
          <span className="text-white text-2xl font-bold">Engineers4Humanity</span>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-white">
          <a href="#" className="hover:text-primary-500 transition">About</a>
          <a href="#" className="hover:text-primary-500 transition">Programs</a>
          <a href="#" className="hover:text-primary-500 transition">Impact</a>
          <a href="#" className="hover:text-primary-500 transition">Stories</a>
          <a href="#" className="hover:text-primary-500 transition">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center text-white hover:bg-opacity-20 transition">
            <Search size={20} />
          </button>
          <button className="hidden lg:flex items-center gap-2 px-6 py-3 bg-primary-500 text-gray-900 font-semibold rounded-full hover:bg-primary-700 transition">
            Donate Now <ArrowRight size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-900 hover:bg-gray-100 transition">
            <Grid3x3 size={20} />
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 lg:px-16 pb-32">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-700 ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Badge */}
            <div className="mb-6 px-5 py-2 border-2 max-w-xs border-white border-opacity-30 rounded-full text-white text-sm font-medium tracking-wide">
              {slide.badge}
            </div>

            {/* Main Heading */}
            <h1 className="text-white mb-6 max-w-5xl">
              <div className="text-4xl lg:text-6xl xl:text-6xl font-light mb-2">
                {slide.mainText}
              </div>
              <div className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
                {slide.boldText}
              </div>
            </h1>

            {/* Unique Paragraph for Each Slide */}
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mb-10 leading-relaxed">
              {slide.paragraph}
            </p>


            {/* Call-to-Action Buttons */}
<div className="flex flex-wrap gap-4">
  <button className="flex items-center gap-3 px-8 py-4 bg-primary-500 text-gray-900 font-semibold rounded-full hover:bg-primary-700 transition text-lg">
    Partner With Us <ArrowRight size={22} />
  </button>
  <button className="flex items-center gap-3 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition text-lg">
    Hire Our Talent <ArrowRight size={22} />
  </button>
  <button className="flex items-center gap-3 px-8 py-4 bg-transparent text-white font-semibold rounded-full border border-white/50 hover:bg-white/10 transition text-lg">
    Explore Services
  </button>
</div>
          </div>
        ))}
      </div>

      {/* Bottom Carousel */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="flex items-stretch">
          <div className="flex flex-1 overflow-hidden">
            {slides.map((slide, index) => {
              const IconComponent = slide.Icon;
              return (
                <div
                  key={index}
                  className={`flex items-center gap-4 px-8 py-6 transition-all duration-500 cursor-pointer ${
                    index === currentSlide ? 'flex-1 bg-primary-500' : 'flex-1 bg-white'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center overflow-hidden ${
                    index === currentSlide ? 'bg-white' : 'bg-gray-100'
                  }`}>
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                      <IconComponent size={28} className="text-gray-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg ${index === currentSlide ? 'text-gray-900' : 'text-gray-800'}`}>
                      {slide.title}
                    </h3>
                    <p className={`text-base ${index === currentSlide ? 'text-gray-900' : 'text-gray-700'}`}>
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex bg-white">
            <button onClick={prevSlide} className="w-16 flex items-center justify-center border-r border-gray-200 hover:bg-gray-50 transition">
              <ChevronLeft size={24} className="text-gray-600" />
            </button>
            <button onClick={nextSlide} className="w-16 flex items-center justify-center hover:bg-gray-50 transition">
              <ChevronRight size={24} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildGoHero;