import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Amina Hassan",
    role: "Refugee Mother & E4H Scholarship Recipient, Kenya",
    image: "https://images.unsplash.com/photo-1581578735475-2fd0d013f1c9?w=150&q=80",
    text: "Thanks to E4H, my daughter is the first in our family to attend university studying civil engineering. They didn’t just give a scholarship — they gave us hope and a future we never thought possible.",
    rating: 5
  },
  {
    id: 2,
    name: "David Mukasa",
    role: "Community Leader, Kakuma Refugee Camp",
    image: "https://images.unsplash.com/photo-1554151228-14d9def65654?w=150&q=80",
    text: "E4H built a solar-powered water system that now serves over 3,000 people daily. For the first time, our children drink clean water and study under lights at night. This is dignity restored.",
    rating: 5
  },
  {
    id: 3,
    name: "Fatima Al-Bakri",
    role: "Former Refugee, Now E4H Engineer in Minnesota, USA",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&q=80",
    text: "I arrived in America with nothing but trauma and dreams. E4H believed in me, trained me, and hired me. Today I design projects that help others like me. This is what paying it forward truly means.",
    rating: 5
  },
  {
    id: 4,
    name: "Pastor John Omondi",
    role: "Partner Organization Director, Uganda",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    text: "We’ve partnered with E4H on five school buildings. Every structure is built with local labor and maintained by the community. This isn’t aid — it’s empowerment that lasts generations.",
    rating: 5
  },
  {
    id: 5,
    name: "Samuel Njoroge",
    role: "Youth Participant, Nairobi STEM Program",
    image: "https://images.unsplash.com/photo-1500647500683-1b0ed5e8f9d8?w=150&q=80",
    text: "I grew up thinking engineering was only for rich kids. E4H showed me I belong in this field. Now I’m building robots and dreaming of designing bridges one day. They changed my whole life.",
    rating: 5
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const timeoutRef = useRef(null);

  // Responsive logic
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play
  useEffect(() => {
    timeoutRef.current = setTimeout(() => handleNext(), 7000);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [currentIndex]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(prev => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= testimonials.length) setCurrentIndex(0);
    if (currentIndex < 0) setCurrentIndex(testimonials.length - 1);
  };

  const getExtendedTestimonials = () => [
    ...testimonials.slice(-slidesToShow),
    ...testimonials,
    ...testimonials.slice(0, slidesToShow)
  ];

  const extendedTestimonials = getExtendedTestimonials();
  const translateX = -((currentIndex + slidesToShow) * (100 / slidesToShow));

  return (
    <div className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="mx-auto ">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary-500/20 mb-8 shadow-lg">
            <Quote className="w-4 h-4 text-primary-600" />
            <span className="text-primary-600 font-semibold text-sm tracking-wider uppercase">
              Voices of Impact
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Real Stories from Real{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Lives Changed</span>
              <span className="absolute inset-x-0 bottom-2 h-4 bg-primary-500 -z-10 opacity-30"></span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from refugees, students, community leaders, and partners whose lives have been transformed through E4H’s work in engineering, education, and empowerment.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-14 h-14 bg-white hover:bg-primary-500 rounded-full flex items-center justify-center transition-all shadow-xl hover:shadow-2xl disabled:opacity-50 group"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:text-gray-900 transition-colors" />
          </button>
          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-14 h-14 bg-white hover:bg-primary-500 rounded-full flex items-center justify-center transition-all shadow-xl hover:shadow-2xl disabled:opacity-50 group"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-gray-800 group-hover:text-gray-900 transition-colors" />
          </button>

          <div className="overflow-hidden">
            <div
              className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-out' : ''}`}
              style={{ transform: `translateX(${translateX}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedTestimonials.map((t, index) => (
                <div
                  key={`${t.id}-${index}`}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / slidesToShow}%` }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                        <Quote className="w-7 h-7 text-primary-600" />
                      </div>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow italic">
                      "{t.text}"
                    </p>
                    <div className="flex gap-1 mb-6">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary-500 text-primary-500" />
                      ))}
                    </div>
                    <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-14 h-14 rounded-full object-cover border-4 border-primary-500/20"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
                        <p className="text-gray-500 text-sm">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => !isTransitioning && setCurrentIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === (currentIndex % testimonials.length) ||
                  (currentIndex < 0 && i === testimonials.length - 1) ||
                  (currentIndex >= testimonials.length && i === 0)
                    ? 'w-12 h-3 bg-primary-500 shadow-lg'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { value: "48+", label: "Projects Built" },
            { value: "2,800+", label: "Lives Transformed" },
            { value: "15+", label: "Nationalities Served" },
            { value: "100%", label: "Refugee-Led Team" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;