import { GraduationCap, Droplets, Users, HeartHandshake, School, Home } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Hope School Expansion',
      description: 'Built and expanded a secondary school in Gihembe Refugee Camp serving 600+ refugee students with classrooms, science labs, and vocational workshops.',
      image: 'https://images.unsplash.com/photo-1582213782179-c49b1136c88c?w=1000&h=800&fit=crop',
      icon: School,
    },
    {
      title: 'Clean Water for 5,000+ People',
      description: 'Designed and constructed solar-powered water systems, boreholes, and elevated tanks bringing safe drinking water to Mahama and Gihembe refugee camps.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1000&h=800&fit=crop',
      icon: Droplets,
      featured: true,
    },
    {
      title: 'Vocational Training Centers',
      description: 'Established community training hubs teaching plumbing, electrical work, tailoring, and construction — creating jobs and self-reliance for refugee youth.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&h=800&fit=crop',
      icon: GraduationCap,
    },
    {
      title: 'Youth Leadership & Community Hubs',
      description: 'Built safe spaces for mentorship, mental wellness, peacebuilding workshops, and women’s empowerment programs in refugee and host communities.',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1000&h=800&fit=crop',
      icon: HeartHandshake,
    },
    {
      title: 'Sanitation & Hygiene Facilities',
      description: 'Constructed eco-friendly latrines, handwashing stations, and waste management systems preventing disease and promoting dignity in high-density camps.',
      image: 'https://images.unsplash.com/photo-1581578735475-2fd0d013f1c9?w=1000&h=800&fit=crop',
      icon: Home,
    },
    {
      title: 'Refugee-Led Construction Teams',
      description: 'Trained and employed former refugees as skilled builders who now lead community projects — proving empowerment through engineering.',
      image: 'https://images.unsplash.com/photo-1581093588401-fbb62a4da0e2?w=1000&h=800&fit=crop',
      icon: Users,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto px-6 md:px-16 ">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 border-2 border-gray-300 rounded-full text-sm font-medium text-gray-700 uppercase tracking-wide">
              Our Impact Projects
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            Transforming Lives
            <br />
            <span className="relative inline-block mt-2">
              <span className="relative">
                One Project at a Time
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 380 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 15 Q 190 5, 375 15"
                    stroke="#FBBF24"
                    strokeWidth="7"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every structure we build — from schools to water points — is designed, constructed, and owned by the community, creating dignity and lasting change.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 `}
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${project.featured ? 'h-64' : 'h-64'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>

                  {/* Icon Badge */}
                  <div className="absolute top-6 right-6 w-14 h-14 bg-primary-400 rounded-full flex items-center justify-center shadow-xl border-4 border-white/30">
                    <Icon className="text-gray-900" size={28} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {project.title}
                    {project.featured && <span className="ml-3 text-primary-500 text-sm font-semibold">↗ Featured</span>}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <button className="group/btn inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors text-lg">
                    See the Impact
                    <svg
                      className="ml-2 w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <div className="ml-3 w-0 group-hover/btn:w-16 h-0.5 bg-primary-500 transition-all duration-300"></div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-primary-50 rounded-full shadow-lg">
            <HeartHandshake className="text-primary-600" size={28} />
            <p className="text-gray-700 text-lg">
              Impacting <span className="font-bold text-primary-600">2,800+ lives</span> and growing — with every project led by refugees, for refugees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}