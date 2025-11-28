import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function E4HHero() {
  return (
    <div className="relative h-[60vh] md:h-[70vh] lg:h-[85vh] flex justify-center items-center w-full overflow-hidden">
      {/* Background Image – Professional engineers at work + community impact */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1600&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        {/* Badge */}
        <div className="inline-block mb-10">
          <span className="px-8 py-3 border-2 border-white/50 rounded-full text-sm font-semibold text-white uppercase tracking-wider backdrop-blur-md bg-white/5">
            Refugee-Founded • East Africa &bull; Expanding to USA
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-8 text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
          Engineering
          <span className="relative inline-block mx-4">
            <span className="relative z-10">Excellence</span>
            <svg
              className="absolute -bottom-4 left-0 w-full"
              height="28"
              viewBox="0 0 380 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 20C60 8, 140 12, 190 14C240 16, 310 10, 370 16"
                stroke="#FBBF24"
                strokeWidth="10"
                strokeLinecap="round"
              />
            </svg>
          </span>
          Meets Humanity
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-100 font-light max-w-5xl mx-auto leading-relaxed mb-12">
          A refugee-led East African engineering consultancy delivering world-class geotechnical, 
          civil, and public health infrastructure solutions — while training and employing displaced 
          youth as the next generation of skilled engineers in Africa and America.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="/services"
            className="group px-12 py-5 bg-primary-500 text-gray-900 rounded-full font-bold text-lg hover:bg-primary-400 transition-all duration-300 shadow-2xl hover:shadow-primary-500/50 flex items-center gap-3 transform hover:scale-105"
          >
            Explore Our Services
            <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <a
            href="/about"
            className="px-12 py-5 bg-transparent text-white border-2 border-white/80 rounded-full font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm"
          >
            Our Refugee-Led Story
          </a>
        </div>
      </div>
    </div>
  );
}