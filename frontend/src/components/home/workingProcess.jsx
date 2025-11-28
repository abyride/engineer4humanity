import { useState } from 'react';
import {
  Ear,
  
  UsersRound,
  Wrench,
  Handshake,
  ChevronDown,
  Sparkles,
  Globe,
  Award,
  ShieldCheck,
  Target,
  Printer
} from 'lucide-react';

export default function E4HProcess() {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    {
      icon: Ear,
      title: 'Client Needs Assessment',
      description: 'We start every project with in-depth consultations — understanding technical requirements, site conditions, regulatory frameworks, and your strategic objectives across Africa or the United States.',
      number: '01',
      gradient: 'from-primary-600 to-amber-600',
      bgColor: 'bg-primary-50',
      iconBg: 'bg-primary-100',
      iconColor: 'text-primary-600'
    },
    {
      icon: Printer,
      title: 'Technical Design & Feasibility',
      description: 'Our refugee-led team of licensed engineers delivers detailed geotechnical reports, structural designs, ESIA studies, and costed BOQs — fully compliant with local and international standards (IBC, Eurocode, BS, AfDB, World Bank).',
      number: '02',
      gradient: 'from-blue-600 to-cyan-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: UsersRound,
      title: 'Skills Transfer & Team Assembly',
      description: 'We intentionally recruit and train refugee and underserved youth as site technicians, lab assistants, junior engineers, and inspectors — building local capacity while reducing project costs.',
      number: '03',
      gradient: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600'
    },
    {
      icon: Wrench,
      title: 'Execution & Quality Supervision',
      description: 'From soil testing and special inspections to full construction supervision, our teams ensure every phase meets the highest technical and ethical standards — on time and within budget.',
      number: '04',
      gradient: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: Handshake,
      title: 'Handover & Long-Term Partnership',
      description: 'We deliver comprehensive as-built documentation, training for local maintenance teams, and a 12–24 month defects liability partnership — because real success is measured years after completion.',
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
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>

      <div className="relative mx-auto ">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-primary-500/20 mb-8 shadow-lg">
            <Sparkles className="w-5 h-5 text-primary-600" />
            <span className="text-primary-700 font-bold text-sm tracking-wider uppercase">
              Our Proven 5-Step Delivery Process
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Professional Excellence.
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">Social Impact Built In.</span>
              <svg className="absolute -bottom-3 left-0 w-full" height="24" viewBox="0 0 420 24" fill="none">
                <path d="M10 18C70 6, 160 10, 210 12C260 14, 340 8, 410 14" stroke="#FCD34D" strokeWidth="7" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A refugee-founded consultancy combining rigorous engineering standards with deliberate job creation for displaced and underserved youth — delivering projects that last and lives that rise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Interactive Accordion */}
          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeIndex === index;
              return (
                <div key={index} className={`relative rounded-2xl overflow-hidden transition-all duration-500 ${isActive ? 'shadow-2xl' : 'shadow-md hover:shadow-xl'}`}>
                  {isActive && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} p-[2px] rounded-2xl`}>
                      <div className="w-full h-full bg-white rounded-2xl"></div>
                    </div>
                  )}
                  <div className="relative bg-white rounded-2xl">
                    <button onClick={() => toggleAccordion(index)} className="w-full flex items-center gap-5 p-6 text-left hover:bg-gray-50 transition-all">
                      <div className={`relative flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center shadow-lg transition-all ${isActive ? `bg-gradient-to-br ${step.gradient} scale-110` : step.iconBg}`}>
                        <span className={`font-bold text-2xl ${isActive ? 'text-white' : step.iconColor}`}>{step.number}</span>
                      </div>
                      <div classNama="flex-1">
                        <h3 className={`text-2xl font-bold ${isActive ? 'text-gray-900' : 'text-gray-800'}`}>{step.title}</h3>
                      </div>
                      <ChevronDown className={`w-6 h-6 transition-transform ${isActive ? 'rotate-180 text-primary-600' : 'text-gray-500'}`} />
                    </button>

                    <div className={`transition-all duration-500 overflow-hidden ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-6 pb-8">
                        <div className={`h-1 bg-gradient-to-r ${step.gradient} mb-5 rounded-full`}></div>
                        <div className={`p-6 rounded-2xl ${step.bgColor} border border-gray-200`}>
                          <div className="flex gap-4">
                            <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${step.iconBg}`}>
                              <Icon className={`w-7 h-7 ${step.iconColor}`} />
                            </div>
                            <p className="text-gray-700 leading-relaxed text-lg">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Professional CTA Card */}
          <div className="relative lg:sticky lg:top-24">
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-10 md:p-14 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-primary-600/5"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500 rounded-2xl mb-8 shadow-xl">
                  <Target className="w-11 h-11 text-gray-900" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready for World-Class<br />Engineering with Purpose?
                </h3>
                <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                  Partner with a refugee-led firm that delivers technical excellence while transforming displaced youth into licensed, employable engineering professionals.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-bold text-white">10+</div>
                    <div className="text-gray-400">Years in Africa</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <div className="text-4xl font-bold text-white">850+</div>
                    <div className="text-gray-400">Youth Trained & Employed</div>
                  </div>
                </div>

                <div className="space-y-5">
                  <a href="/contact" className="block w-full px-8 py-5 bg-primary-500 hover:bg-amber-400 text-gray-900 font-bold rounded-full text-center transition-all shadow-lg hover:shadow-2xl transform hover:scale-105">
                    Request a Consultation
                  </a>
                  <a href="/services" className="block w-full px-8 py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full text-center border border-white/30 backdrop-blur-sm transition-all">
                    Download Company480 Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Award, label: 'Refugee-Founded' },
                { icon: ShieldCheck, label: 'Licensed Engineers' },
                { icon: Globe, label: 'Africa + USA' }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-white rounded-2xl p-5 shadow-lg text-center hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 mx-auto mb-2 bg-primary-50 rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary-600" />
                    </div>
                    <p className="text-xs font-bold text-gray-800">{item.label}</p>
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