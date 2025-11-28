import { Building2, TestTube2, Droplets, Wrench, FileText, Lightbulb } from 'lucide-react';

import image1 from '../../assets/e4h/road.png'
import image2 from '../../assets/e4h/amahoro.png'
import image3 from '../../assets/e4h/rural.png'
import image4 from '../../assets/e4h/kampala.png'
import image5 from '../../assets/e4h/embessy.png'
import image6 from '../../assets/e4h/solar.png'


export default function ProjectsSection() {
  const projects = [
    {
      title: 'Kigali International Airport Geotech Investigation',
      description: 'Full geotechnical investigation, soil testing, and foundation recommendations for runway extension — delivered on time for a multinational contractor.',
      image:image2,
      icon: TestTube2,
      featured: true,
    },
    {
      title: 'USAID-Funded Rural Water Supply Network – Rwanda',
      description: 'Design and supervision of 42 km piped water scheme serving 28,000 people, including solar-powered pumping stations and community-managed kiosks.',
      image: image3,
      icon: Droplets,
    },
    {
      title: 'Nairobi–Mombasa Expressway Special Inspections',
      description: 'Independent special inspections and concrete/asphalt quality assurance for 480 km highway — performed by our refugee-trained technicians now working in Kenya.',
      image: image1,
      icon: Building2,
    },
    {
      title: 'World Bank Urban Drainage Master Plan – Kampala',
      description: 'ESIA, hydraulic modeling, and detailed design of climate-resilient stormwater systems for Uganda’s capital, incorporating green infrastructure.',
      image: image4,
      icon: FileText,
    },
    {
      title: 'Off-Grid Solar Mini-Grids for Refugee-Hosting Districts',
      description: 'Design-build of 6 hybrid solar mini-grids (total 1.2 MW) powering schools, health centers, and small industries — with 40+ refugee youth trained as solar technicians.',
      image: image6,
      icon: Lightbulb,
    },
    {
      title: 'Construction Supervision – New U.S. Embassy Compound (Phase I)',
      description: 'Materials testing, welding inspection, and quality control services for secure facility construction — creating first U.S. jobs for our certified refugee engineers.',
      image: image5,
      icon: Wrench,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto  px-6 md:px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-8 py-3 border-2 border-gray-300 rounded-full text-sm font-bold text-gray-700 uppercase tracking-wider">
              Selected Projects & Contracts
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Real Engineering.
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">Real Impact.</span>
              <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 460 28" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20 Q 230 5, 450 20" stroke="#FBBF24" strokeWidth="9" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From major infrastructure contracts with governments and multilateral agencies to community-changing renewable energy systems — every project is executed to international standards while deliberately employing and upskilling refugee and underserved youth.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Icon Badge */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white">
                    <Icon className="w-9 h-9 text-gray-900" />
                  </div>

                  {project.featured && (
                    <div className="absolute top-6 left-6 bg-amber-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Featured Contract
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-primary-600 font-bold text-lg hover:text-primary-700 transition-colors"
                  >
                    View Case Study
                    <svg className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Impact Bar */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 px-12 py-8 bg-primary-50 rounded-3xl shadow-xl">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600">50+</div>
              <div className="text-gray-700 font-semibold">Infrastructure Contracts Delivered</div>
            </div>
            <div className="hidden sm:block w-px h-16 bg-primary-300"></div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600">850+</div>
              <div className="text-gray-700 font-semibold">Refugee & Underserved Youth Now Employed as Skilled Technicians</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}