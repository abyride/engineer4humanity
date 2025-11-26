import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function E4HHero() {
  return (
    <div className="relative h-[50vh] md:h-[65vh] lg:h-[75vh] flex justify-center items-center w-full overflow-hidden">
      {/* Background Image – Humanitarian engineering / community project */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1600&q=80')`,
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center px-4 py-20">
        <div className="max-w-5xl text-center">
          {/* Badge */}
          <div className="inline-block mb-8">
            <span className="px-6 py-2 border-2 border-white/40 rounded-full text-sm font-medium text-white uppercase tracking-wide backdrop-blur-sm">
              Refugee-Founded • 501(c)(3) Nonprofit
            </span>
          </div>

          {/* Main Heading with signature underline */}
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl leading-tight">
            Building Hope,{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Engineering</span>
              <svg
                className="absolute -bottom-3 left-0 w-full"
                height="20"
                viewBox="0 0 240 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 15C35 5, 80 8, 120 10C160 12, 200 8, 235 12"
                  stroke="#FBBF24"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            Futures
          </h1>

          {/* Description */}
          <p className="mb-12 text-lg md:text-xl text-gray-100 mx-auto max-w-3xl leading-relaxed font-light">
            Engineers4Humanity (E4H) empowers refugees, immigrants, and underserved communities 
            in the U.S. and East Africa through sustainable engineering, education, and compassionate leadership — 
            turning lived experience into lasting change.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="group px-10 py-4 bg-primary-500 text-gray-900 rounded-full font-semibold text-lg hover:bg-primary-500 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center gap-3">
              <span>Donate Now</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <button className="px-10 py-4 bg-transparent text-white border-2 border-white rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm">
              See Our Impact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}