import { useState } from 'react';
import {
  HeartHandshake,
  Lightbulb,
  UsersRound,
  Wrench,
  GraduationCap,
  ChevronDown,
  Sparkles,
  Globe,
  Award,
  Shield
} from 'lucide-react';

export default function E4HProcess() {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    {
      icon: HeartHandshake,
      title: 'Listen & Understand',
      description: 'We begin by listening deeply to the community — refugees, local leaders, and partners — to truly understand their greatest needs, dreams, and long-term vision for self-reliance.',
      number: '01',
      gradient: 'from-primary-500 to-amber-600',
      bgColor: 'bg-primary-50',
      iconBg: 'bg-primary-100',
      iconColor: 'text-primary-600'
    },
    {
      icon: Lightbulb,
      title: 'Co-Design Solutions',
      description: 'Together with community members and refugee engineers, we design sustainable, culturally appropriate projects using local materials and skills whenever possible.',
      number: '02',
      gradient: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: UsersRound,
      title: 'Train & Build Capacity',
      description: 'We train local youth and refugees in engineering, construction, and leadership — ensuring every project builds skills, creates jobs, and leaves lasting knowledge behind.',
      number: '03',
      gradient: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
    },
    {
      icon: Wrench,
      title: 'Construct Together',
      description: 'Community members work side-by-side with our refugee-led teams to build solar systems, clean water points, schools, and clinics — creating ownership from day one.',
      number: '04',
      gradient: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: GraduationCap,
      title: 'Hand Over & Sustain',
      description: 'We officially hand over the completed project along with full training, tools, and maintenance plans — ensuring communities thrive independently long after we leave.',
      number: '05',
      gradient: 'from-purple-600 to-pink-600',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 md:py-32 px-4 md:px-8 overflow-hidden">
      {/* Background Blobs — unchanged */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>

      <div className="relative mx-auto ">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary-500/20 mb-8 shadow-lg">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-primary-600 font-semibold text-sm tracking-wider uppercase">
              Our Community-Centered Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            How We Create{' '}
            <span className="relative inline-block">
              <span className="relative z-10">Lasting Change</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="20"
                viewBox="0 0 320 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 15C45 5, 100 8, 160 10C220 12, 275 8, 315 12"
                  stroke="#FCD34D"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our refugee-led, participatory 5-step process ensures every project is owned, sustained, and multiplied by the community itself.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Accordion — same stunning animation */}
          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                    isActive ? 'shadow-2xl' : 'shadow-md hover:shadow-lg'
                  }`}
                >
                  {isActive && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} p-[2px] rounded-2xl`}>
                      <div className="w-full h-full bg-white rounded-2xl"></div>
                    </div>
                  )}
                  <div className="relative bg-white rounded-2xl">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center gap-4 p-6 text-left transition-all duration-300 hover:bg-gray-50"
                    >
                      <div
                        className={`relative flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                          isActive
                            ? `bg-gradient-to-br ${step.gradient} scale-110`
                            : `${step.iconBg} scale-100`
                        }`}
                      >
                        <span className={`font-bold text-xl ${isActive ? 'text-white' : step.iconColor}`}>
                          {step.number}
                        </span>
                        {isActive && (
                          <div className="absolute inset-0 rounded-xl bg-white/30 animate-ping"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                          isActive ? 'text-gray-900' : 'text-gray-700'
                        }`}>
                          {step.title}
                        </h3>
                      </div>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive ? `bg-gradient-to-br ${step.gradient}` : 'bg-gray-100'
                      }`}>
                        <ChevronDown
                          className={`w-5 h-5 transition-all duration-300 ${
                            isActive ? 'rotate-180 text-white' : 'rotate-0 text-gray-500'
                          }`}
                        />
                      </div>
                    </button>

                    <div
                      className={`transition-all duration-500 overflow-hidden ${
                        isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6">
                        <div
                          className={`h-[2px] bg-gradient-to-r ${step.gradient} mb-4 rounded-full transform origin-left transition-all duration-700 ${
                            isActive ? 'scale-x-100' : 'scale-x-0'
                          }`}
                        ></div>
                        <div className={`relative p-5 rounded-xl ${step.bgColor}`}>
                          <div className="flex items-start gap-3">
                            <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${step.iconBg}`}>
                              <Icon className={`w-5 h-5 ${step.iconColor}`} />
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Sticky CTA Card — now E4H mission-focused */}
          <div className="relative lg:sticky lg:top-24">
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-6 shadow-lg">
                  <Globe className="w-9 h-9 text-gray-900" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Change Lives Together?
                </h3>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Join us in building a world where every refugee and underserved community has access to clean water, education, and opportunity — through engineering and compassion.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-1">48+</div>
                    <div className="text-gray-400 text-sm">Projects Delivered</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-3xl font-bold text-white mb-1">2,800+</div>
                    <div className="text-gray-400 text-sm">Lives Transformed</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href="#"
                    className="w-full block px-8 py-4 bg-primary-500 hover:bg-primary-500 text-gray-900 font-bold rounded-full text-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Donate Now
                  </a>
                  <a
                    href="#"
                    className="w-full block px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full text-center border border-white/20 backdrop-blur-sm transition-all"
                  >
                    Volunteer With Us
                  </a>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { icon: Award, label: 'Refugee-Led' },
                { icon: Shield, label: '501(c)(3)' },
                { icon: HeartHandshake, label: 'Community First' }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-primary-100 rounded-lg mb-2">
                      <Icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <p className="text-xs font-medium text-gray-700">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}