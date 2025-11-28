import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, Building2 } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Eng. Sarah Nakabugo",
    role: "Project Director, Ministry of Water & Environment – Uganda",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&q=80",
    text: "E4H delivered our $4.8M rural water scheme on time and under budget. Their geotechnical reports and construction supervision were world-class — and the fact that 40% of their site team were trained refugees made this partnership even more meaningful.",
    rating: 5,
    logo: <Building2 className="w-7 h-7" />
  },
  {
    id: 2,
    name: "James Ochieng",
    role: "Former Refugee, Now Licensed Geotechnical Engineer – Nairobi, Kenya",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    text: "I fled war with nothing. Engineers4Humanity trained me, certified me, and gave me my first job doing soil testing on major roads. Today I lead a team of 12 technicians — many of them refugees like I once was. This company changed my life forever.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Reynolds, P.E.",
    role: "Senior Project Manager, U.S. Construction Firm – Midwest",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    text: "We hired E4H for special inspections and CMT on a federal project. Their reports were impeccable, their inspectors professional, and their pricing competitive. We were proud to learn that many of their staff started as refugees — excellence with purpose.",
    rating: 5
  },
  {
    id: 4,
    name: "Dr. Aisha Mohammed",
    role: "Country Director, International Development Agency – East Africa",
    image: "https://images.unsplash.com/photo-1580489940927-7b8c3e9febb7?w=150&q=80",
    text: "We’ve awarded E4H three consecutive contracts for WASH engineering and ESIA studies. Their technical delivery matches any international firm, but their refugee employment model aligns perfectly with our inclusion goals. A true win-win partnership.",
    rating: 5
  },
  {
    id: 5,
    name: "Jean-Paul Kubwimana",
    role: "Refugee Trainee → Full-Time Site Supervisor, Kigali, Rwanda",
    image: "https://images.unsplash.com/photo-1500647500683-1b0ed5e8f9d8?w=150&q=80",
    text: "I arrived in Rwanda with no papers and no skills. E4H trained me in concrete testing and construction supervision. Two years later, I supervise multimillion-dollar projects and support my family back home. They didn’t just give me a job — they gave me dignity.",
    rating: 5
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const timeoutRef = useRef(null);

  // Responsive
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
    timeoutRef.current = setTimeout(() => handleNext(), 8000);
    return () => clearTimeout(timeoutRef.current);
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
    <div className="py-24 md:py-32 px-4 md:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="mx-auto ">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-primary-500/10 px-8 py-4 rounded-full border border-primary-500/30 mb-8 shadow-xl">
            <Quote className="w-6 h-6 text-primary-600" />
            <span className="text-primary-700 font-bold text-sm tracking-wider uppercase">
              Trusted Voices
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Don’t Just Take Our Word
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">Hear From Our Clients & Team</span>
              <svg className="absolute -bottom-3 left-0 w-full" height="28" viewBox="0 0 580 28">
                <path d="M10 20 Q 290 5, 570 20" stroke="#FBBF24" strokeWidth="10" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Government officials, international agencies, U.S. contractors, and our own refugee engineers share why they trust Engineers4Humanity Consultancy Ltd.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <button onClick={handlePrev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20 w-16 h-16 bg-white rounded-full shadow-2xl hover:bg-primary-500 group transition-all">
            <ChevronLeft className="w-7 h-7 text-gray-800 group-hover:text-white mx-auto" />
          </button>
          <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20 w-16 h-16 bg-white rounded-full shadow-2xl hover:bg-primary-500 group transition-all">
            <ChevronRight className="w-7 h-7 text-gray-800 group-hover:text-white mx-auto" />
          </button>

          <div className="overflow-hidden">
            <div
              className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
              style={{ transform: `translateX(${translateX}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedTestimonials.map((t, index) => (
                <div key={`${t.id}-${index}`} className="flex-shrink-0 px-5" style={{ width: `${100 / slidesToShow}%` }}>
                  <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all h-full border border-gray-100 flex flex-col">
                    <Quote className="w-12 h-12 text-primary-100 mb-6" />
                    <p className="text-gray-700 text-lg leading-relaxed italic flex-grow">"{t.text}"</p>
                    <div className="flex gap-1 my-6">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-primary-500 text-primary-500" />
                      ))}
                    </div>
                    <div className="flex items-center gap-5 pt-6 border-t border-gray-200">
                      <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-4 border-primary-500/20" />
                      <div>
                        <h4 className="font-bold text-xl text-gray-900">{t.name}</h4>
                        <p className="text-gray-600">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-4 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all rounded-full ${i === (currentIndex % testimonials.length) ? 'w-14 h-4 bg-primary-600' : 'w-4 h-4 bg-gray-300 hover:bg-gray-500'}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-24 text-center">
          {[
            { value: "50+", label: "Contracts Won" },
            { value: "850+", label: "Refugee Youth Employed" },
            { value: "12+", label: "Countries Served" },
            { value: "100%", label: "Client Satisfaction" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-2">{stat.value}</div>
              <div className="text-gray-700 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;