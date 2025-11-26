import { ArrowRight, Droplets, GraduationCap, HeartHandshake, Users, School, Wrench } from "lucide-react";

const impactStories = [
  {
    id: 1,
    category: "Education & Hope",
    title: "Hope School – From 1 Classroom to Serving 600+ Refugee Students",
    description: "What began in 2009 as a single-room school in Gihembe Refugee Camp is now a full secondary school with science labs, computer rooms, and vocational workshops — entirely built and sustained by refugee-led vision.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
    icon: GraduationCap,
    reverse: false
  },
  {
    id: 2,
    category: "Clean Water & Dignity",
    title: "Solar-Powered Water System for 5,000+ Refugees in Mahama Camp",
    description: "Designed and constructed boreholes, elevated tanks, and a distribution network bringing safe drinking water within 200 meters of every household — dramatically reducing disease and freeing women and girls from hours of water collection.",
    image: "https://images.unsplash.com/photo-1581093577422-9e9c74ced2bd?w=1200&q=80",
    icon: Droplets,
    reverse: true
  },
  {
    id: 3,
    category: "Vocational Training & Jobs",
    title: "Refugee Youth Training Center – Tailoring, Plumbing, Electrical & Construction",
    description: "Built and equipped a community training hub where 300+ young refugees have gained certified skills, started businesses, and now employ others — proving that opportunity creates opportunity.",
    image: "https://images.unsplash.com/photo-1581092580497-e0e23cbdf1dc?w=1200&q=80",
    icon: Wrench,
    reverse: false
  },
  {
    id: 4,
    category: "Community Healing & Leadership",
    title: "Youth Peace & Leadership Hub in Gihembe Camp",
    description: "A safe space we constructed for mentorship circles, mental wellness programs, women’s empowerment workshops, and peacebuilding dialogues — fostering healing, confidence, and the next generation of refugee leaders.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1200&q=80",
    icon: HeartHandshake,
    reverse: true
  }
];

export default function ImpactStoriesSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-20 text-center md:text-left">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 border-2 border-gray-300 rounded-full text-sm font-medium text-gray-700 uppercase tracking-wide">
              Real Impact Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Projects That<br />
            <span className="relative inline-block">
              <span className="relative z-10">Change Lives</span>
              <svg
                className="absolute -bottom-2 left-0 w-full stroke-yellow-400"
                viewBox="0 0 380 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 15 Q 190 5, 375 15"
                  strokeWidth="7"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl leading-relaxed">
            Every water point, classroom, and training center we build is designed, constructed, and owned by the community — because sustainable change starts with those who live it.
          </p>
        </div>

        {/* Impact Cards – Alternating Layout */}
        <div className="space-y-16 md:space-y-24">
          {impactStories.map((story) => (
            <div
              key={story.id}
              className={`flex flex-col ${story.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-16 lg:gap-20 items-center`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-80 md:h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl">
                      <story.icon className="w-9 h-9 text-gray-900" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2">
                <div className="space-y-5 max-w-xl">
                  {/* Category Badge */}
                  <span className="inline-block px-5 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-bold uppercase tracking-wider">
                    {story.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                    {story.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {story.description}
                  </p>

                  {/* CTA */}
                  <div className="pt-4">
                    <button className="group inline-flex items-center gap-3 text-gray-800 font-bold text-lg hover:text-yellow-600 transition-all duration-300">
                      <span className="relative">
                        Read the Full Story
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-24 text-center">
          <a
            href="/get-involved"
            className="inline-flex items-center gap-4 px-10 py-5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 uppercase tracking-wide"
          >
            Support a Project Today
            <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}