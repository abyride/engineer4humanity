import React from 'react';
import {
  GraduationCap,
  HeartHandshake,
  Droplets,
  Wrench,
  UsersRound,
  Lightbulb
} from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: GraduationCap,
      title: 'Education & Skills Development',
      description: 'Scholarships, STEM training, vocational programs in plumbing, electrical, construction, and digital skills — empowering refugee and underserved youth with employable skills and bright futures.',
    },
    {
      icon: HeartHandshake,
      title: 'Youth Empowerment & Leadership',
      description: 'Mentorship, leadership workshops, mental wellness support, peacebuilding, and women/girls empowerment programs that build confidence, resilience, and community leaders.',
    },
    {
      icon: Droplets,
      title: 'Public-Health Engineering (WASH)',
      description: 'Clean water systems, sanitation facilities, hygiene promotion, and disease-prevention initiatives that protect health and dignity in refugee camps and vulnerable communities.',
    },
    {
      icon: Wrench,
      title: 'Engineering & Design',
      description: 'Professional structural design, architectural planning, water systems engineering, and sustainable infrastructure solutions tailored for humanitarian and community impact.',
    },
    {
      icon: Lightbulb,
      title: 'Construction & Supervision',
      description: 'Expert construction management, quality control, geotechnical investigations, and community-led building projects — from schools and clinics to water points and housing.',
    },
    {
      icon: UsersRound,
      title: 'Consultancy & Project Management',
      description: 'Technical advisory, feasibility studies, monitoring & evaluation, and full project oversight for NGOs, governments, and partners seeking ethical, high-standard engineering services.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-6 md:px-16">
      <div className="mx-auto ">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 border-2 border-gray-300 rounded-full text-sm font-medium text-gray-700 uppercase tracking-wide">
              Our Programs & Services
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4">
            Transforming Lives Through<br />
            <span className="relative inline-block">
              <span className="relative z-10">Humanity & Engineering</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="24"
                viewBox="0 0 320 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="160"
                  cy="12"
                  rx="155"
                  ry="10"
                  stroke="#FBBF24"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
            We combine refugee-led compassion with professional engineering excellence to deliver education, 
            clean water, youth empowerment, and sustainable infrastructure — creating dignity and opportunity that lasts.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-50 transition-colors">
                  <Icon className="w-8 h-8 text-gray-700 group-hover:text-primary-600 transition-colors" strokeWidth={1.8} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/get-involved"
            className="inline-block bg-primary-500 text-gray-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-primary-500 transition-all shadow-lg hover:shadow-xl uppercase tracking-wide"
          >
            Get Involved Today
          </a>
        </div>
      </div>
    </div>
  );
}