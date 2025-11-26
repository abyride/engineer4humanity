import React from 'react';
import { Heart, Briefcase, Users, GraduationCap, Handshake, ArrowRight, CheckCircle, Mail, Phone } from 'lucide-react';

export default function GetInvolvedPage() {
  const programs = [
    {
      id: 'donate',
      icon: Heart,
      title: 'Donate',
      description: 'Your financial contributions are vital to the success of our programs. Donations go directly towards funding our public health engineering projects, vocational training programs, and Refugee Youth Education.',
      buttonText: 'Donate Now',
      buttonLink: '/donate',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80'
    },
        {
      id: 'volunteer',
      icon: Users,
      title: 'Volunteer',
      description: 'We are always looking for passionate volunteers who want to make a difference. Whether you\'re an engineer, content writer, social media specialist, event planner, mentor/life coach, or field volunteer, your skills and expertise can help us further our mission.',
      additionalInfo: 'Join as Board member or staff or mentor to give back to community and achieve God\'s purpose on this earth.',
      buttonText: 'Join Our Volunteer Team',
      buttonLink: '/apply-job',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80'
    },
    {
      id: 'career',
      icon: Briefcase,
      title: 'Career Path Program',
      description: 'Are you a refugee or an immigrant eager to explore new career opportunities or facing challenges with integration in the USA, East Africa, or the global job market? The Engineers4Humanity Career Path Program is here to support you on your journey.',
      additionalInfo: 'This comprehensive training course, organized by the International Youth Academy and our valued partner organizations, is designed to help you tap into your full potential and work towards achieving your dream career.',
      details: [
        'Individuals with engineering or technical backgrounds',
        'Those holding a bachelor\'s degree in any field who may face difficulties securing employment',
        'High school graduates interested in pursuing a fulfilling career in construction'
      ],
      note: 'We focus on providing valuable hands-on skills that will empower you to thrive in the global market.',
      buttonText: 'Apply for Career Path Program',
      buttonLink: '#',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80'
    },

    {
      id: 'scholarship',
      icon: GraduationCap,
      title: 'Scholarship Program',
      description: 'Are you a refugee, immigrant, or member of an underserved community looking to advance your education? We are committed to helping you achieve your goals!',
      additionalInfo: 'Through our education program and collaboration with our sponsors, we provide valuable resources and support to guide you on your journey. Please take a moment to fill out the application form using the link below, and our dedicated team will connect with you soon. Together, we can work towards a brighter future!',
      buttonText: 'Apply for Scholarship',
      buttonLink: '#',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80'
    },
    {
      id: 'partner',
      icon: Handshake,
      title: 'Partner With Us',
      description: 'Are you an organization or company looking to make an impact? Are you looking for qualified and competent personnel from refugee/immigrant or underserved community? We are here to link with such person so that your company can contribute in social inclusion and self-reliance program and never leave anyone behind program.',
      additionalInfo: 'We welcome partnerships with businesses, research centers, peace-building institutions, youth centers, academic institutions/universities/high schools, government institutions, and humanitarian organizations. Together, we can create lasting change.',
      buttonText: 'Partnership Application',
      buttonLink: '#',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 px-6">
        <div className="relative container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Get Involved
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover meaningful ways to support our mission and create lasting impact in communities worldwide.
          </p>
        </div>
      </div>

      {/* Programs Section */}
      <div className=" mx-auto container px-6 py-20">
        <div className="space-y-8">
          {programs.map((program) => {
            const Icon = program.icon;
            
            return (
              <div
                key={program.id}
                className="bg-white rounded-2xl border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Image Section */}
                  <div className="md:col-span-2 relative h-64 md:h-auto">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center justify-center md:justify-start p-8">
                      <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-lg">
                        <Icon className="w-10 h-10 text-gray-900" strokeWidth={2} />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-3 p-8 md:p-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{program.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      {program.description}
                    </p>
                    
                    {program.additionalInfo && (
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        {program.additionalInfo}
                      </p>
                    )}

                    {program.details && (
                      <div className="mb-6">
                        <p className="font-bold text-gray-900 mb-3 text-lg">We invite:</p>
                        <ul className="space-y-3">
                          {program.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle className="w-6 h-6 text-gray-900 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-lg">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {program.note && (
                      <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                        {program.note}
                      </p>
                    )}

                    <a
                      href={program.buttonLink}
                      className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold text-lg transition-all duration-300 group"
                    >
                      <span>{program.buttonText}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Have Questions?
          </h3>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Our team is here to help you find the perfect way to get involved and answer any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:info@engineers4humanity.org"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-semibold text-lg transition-all"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white rounded-lg font-semibold text-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-900 text-white py-16 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h4 className="text-2xl font-bold mb-4">
            Ready to Make a Difference?
          </h4>
          <p className="text-gray-300 text-lg">
            Every action, big or small, contributes to creating positive change in our communities.
          </p>
        </div>
      </div>
    </div>
  );
}