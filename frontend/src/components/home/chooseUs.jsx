import React from 'react';
import {
  Building2,
  TestTube2,
  HardHat,
  Globe,
  UsersRound,
  Lightbulb,
  FileSearch,
  Wrench,
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Building2,
      title: 'Geotechnical & Civil Engineering',
      description: 'Site investigations, soil testing, foundation design, slope stability analysis, and full geotechnical reporting for infrastructure, mining, and urban development projects across Africa and the U.S.',
    },
    {
      icon: TestTube2,
      title: 'Construction Material Testing & Special Inspection',
      description: 'Certified laboratory and field testing of concrete, asphalt, soil, and steel. Independent special inspections compliant with IBC, ASTM, and local building codes.',
    },
    {
      icon: HardHat,
      title: 'Public Health & WASH Engineering',
      description: 'Design and supervision of water supply systems, sanitation facilities, wastewater management, and hygiene infrastructure — combining technical excellence with community-led sustainability.',
    },
    {
      icon: Wrench,
      title: 'Project Management & Supervision',
      description: 'End-to-end project oversight, cost control, scheduling, quality assurance, and FIDIC-compliant contract administration for government, NGO, and private-sector clients.',
    },
    {
      icon: FileSearch,
      title: 'Environmental & Social Impact Studies',
      description: 'ESIA, environmental audits, resettlement action plans, stakeholder engagement, and social safeguarding services aligned with IFC Performance Standards and African Development Bank requirements.',
    },
    {
      icon: Lightbulb,
      title: 'Renewable Energy & Sustainable Design',
      description: 'Solar PV systems, mini-grids, energy-efficient buildings, and climate-resilient infrastructure design that reduce costs and environmental impact while creating local green jobs.',
    },
    {
      icon: UsersRound,
      title: 'Skills Transfer & Workforce Development',
      description: 'We intentionally train and employ refugee and underserved youth as certified technicians, inspectors, and junior engineers — building Africa’s and America’s next generation of engineering talent.',
    },
    {
      icon: Globe,
      title: 'Real Estate & Land Development Advisory',
      description: 'Feasibility studies, property valuation, master planning, and investment advisory services that unlock value while ensuring inclusive, sustainable urban and rural development.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-16">
      <div className="mx-auto ">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 border-2 border-gray-300 rounded-full text-sm font-medium text-gray-700 uppercase tracking-wide">
              Professional Services • Social Impact
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            World-Class Engineering
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">Delivered with Purpose</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="24"
                viewBox="0 0 380 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse cx="190" cy="12" rx="185" ry="10" stroke="#FBBF24" strokeWidth="5" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mt-8 leading-relaxed">
            A refugee-founded East African consultancy bringing proven technical expertise to construction, 
            infrastructure, and renewable energy projects — while deliberately creating dignified, skilled 
            careers for displaced and underserved youth in Africa and the United States.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100 hover:border-primary-200"
              >
                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                  <Icon className="w-9 h-9 text-primary-600" strokeWidth={1.8} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="text-center space-x-6">
          <a
            href="/services"
            className="inline-block bg-primary-500 text-gray-900 px-10 py-5 rounded-full font-semibold text-lg hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl uppercase tracking-wide"
          >
            Explore All Services
          </a>
          <a
            href="/contact"
            className="inline-block border-2 border-gray-800 text-gray-800 px-10 py-5 rounded-full font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all uppercase tracking-wide"
          >
            Request a Proposal
          </a>
        </div>
      </div>
    </div>
  );
}