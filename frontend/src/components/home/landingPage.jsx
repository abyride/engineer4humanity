import React, { useState, useEffect } from 'react';
import { ArrowRight, Search, Grid3x3, ChevronLeft, ChevronRight, HeartHandshake, Users, Globe } from 'lucide-react';

const BuildGoHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      Icon: HeartHandshake,
      title: "Serving with",
      subtitle: "Compassion",
      badge: "REFUGEE-FOUNDED NONPROFIT",
      mainText: "Engineers4Humanity",
      boldText: "(E4H) Initiative",
      paragraph: "Founded by refugees who rebuilt their own lives through engineering and education, E4H is driven by lived experience and a deep commitment to pay it forward. We don’t just build structures — we rebuild hope, dignity, and futures.",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1920&q=80"
    },
    {
      Icon: Users,
      title: "Empowering",
      subtitle: "Communities",
      badge: "EDUCATION & ENGINEERING",
      mainText: "Born to Make a",
      boldText: "Positive Impact",
      paragraph: "From solar-powered classrooms in rural East Africa to STEM mentorship for immigrant youth in the U.S., we deliver hands-on education and sustainable engineering solutions that create lasting pathways out of poverty.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
    },
    {
      Icon: Globe,
      title: "Building",
      subtitle: "Sustainable Futures",
      badge: "U.S. & EAST AFRICA",
      mainText: "Opportunity, Dignity,",
      boldText: "Self-Reliance",
      paragraph: "Every water system, school, or training center we design is built to last and to be maintained by the community itself. True impact isn’t charity — it’s partnership that leads to independence and pride.",
      image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=1920&q=80"
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
            <div className="mb-6 px-5 py-2 border-2 border-white border-opacity-30 rounded-full text-white text-sm font-medium tracking-wide">
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
            <p className="text-lg text-white/90 max-w-4xl mb-10 leading-relaxed">
              {slide.paragraph}
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-3 px-8 py-4 bg-primary-500 text-gray-900 font-semibold rounded-full hover:bg-primary-700 transition text-lg">
                Donate Now <ArrowRight size={22} />
              </button>
              <button className="flex items-center gap-3 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition text-lg">
                Volunteer With Us <ArrowRight size={22} />
              </button>
              <button className="flex items-center gap-3 px-8 py-4 bg-transparent text-white font-semibold rounded-full border border-white/50 hover:bg-white/10 transition text-lg">
                Learn More
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