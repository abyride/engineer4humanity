import { Users, HeartHandshake, Globe, Target, Lightbulb, Shield, Award, Clock } from "lucide-react";
import Header from "../../components/header";
import leftImage from "../../assets/us.jpg";

import image1 from '../../assets/e4h/river.jpg'
import image2 from '../../assets/e4h/training.png'
import image3 from '../../assets/e4h/women.png'
import image4 from '../../assets/river.jpg'
const AboutPage = () => {
  const stats = [
    {
      icon: <Globe className="w-9 h-9" />,
      number: "48+",
      label: "Projects Delivered",
      subtitle: "Schools, clinics, water systems"
    },
    {
      icon: <Users className="w-9 h-9" />,
      number: "2,800+",
      label: "Lives Transformed",
      subtitle: "Refugees & host communities"
    },
    {
      icon: <HeartHandshake className="w-9 h-9" />,
      number: "100%",
      label: "Refugee-Led Team",
      subtitle: "Lived experience drives impact"
    },
    {
      icon: <Award className="w-9 h-9" />,
      number: "15+",
      label: "Countries Represented",
      subtitle: "Diversity is our strength"
    }
  ];

  const values = [
    { title: "Humanity", description: "We serve with compassion and dignity" },
    { title: "Resilience", description: "We turn adversity into opportunity" },
    { title: "Innovation", description: "Creative, sustainable solutions" },
    { title: "Inclusion", description: "Everyone belongs and contributes" },
    { title: "Excellence", description: "Professional standards in all we do" }
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <Header title="About Us" path="About Us" />

      {/* Hero Section */}
      <div className="relative py-20 md:py-32 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>

        <div className=" mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={leftImage}
                  alt="E4H refugee engineers and community members building together"
                  className="w-full min-h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-xl font-bold opacity-100">Refugee-Founded • Refugee-Led</p>
                  <p className="text-sm opacity-90">Turning lived experience into lasting change</p>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Building Hope,<br />
                <span className="relative inline-block">
                  <span className="relative z-10">Engineering Futures</span>
                  <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 520 30" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 20 Q 260 5, 515 20"
                      stroke="#FCD34D"
                      strokeWidth="9"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                Engineers4Humanity (E4H) is a refugee-founded 501(c)(3) nonprofit that combines professional engineering expertise with deep humanitarian compassion to empower refugees, immigrants, and underserved communities in the U.S. and East Africa.
              </p>

              {/* Vision & Mission */}
              <div className="space-y-6">
                <div className="flex gap-5 bg-yellow-50 p-6 rounded-2xl border border-yellow-100 hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-yellow-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                    <p className="text-gray-700">
                      A world where every refugee and underserved community leads an empowered, self-reliant, and dignified life.
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 bg-orange-50 p-6 rounded-2xl border border-orange-100 hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0 w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-orange-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-700">
                      To deliver education, clean water, youth empowerment, and sustainable engineering solutions — led by those who’ve walked the path.
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Values */}
              <div className="mt-8 flex flex-wrap gap-3">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-white border-2 border-gray-200 rounded-full hover:border-yellow-500 hover:bg-yellow-50 transition-all duration-300 cursor-default group"
                  >
                    <span className="font-semibold text-gray-700 group-hover:text-yellow-600">
                      {value.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 px-4 md:px-8 bg-gray-50">
        <div className=" mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 text-center border border-gray-100"
              >
                <div className="mb-5 text-yellow-600 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-700">{stat.label}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-20 md:py-32 px-4 md:px-8">
        <div className=" mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-5 py-2 bg-yellow-100 rounded-full mb-6">
                <span className="text-yellow-700 font-bold text-sm uppercase tracking-wider">
                  Our Story
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900  mb-8 leading-tight">
                From Refuge to<br />
                Rebuilding Lives
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                E4H was founded by refugee engineers who rebuilt their own lives through education and opportunity. Having walked the path of displacement, they understood one truth: real change comes from within the community.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Today, our refugee-led team designs and delivers sustainable schools, water systems, and training programs — proving that those who’ve overcome the impossible are best equipped to make the impossible possible for others.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-5 p-6 bg-yellow-50 rounded-2xl hover:bg-yellow-100 transition-colors group">
                  <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <HeartHandshake className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Lived Experience</h4>
                    <p className="text-gray-700 text-sm">Our team knows the challenges — because we’ve lived them</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 p-6 bg-orange-50 rounded-2xl hover:bg-orange-100 transition-colors group">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Professional Excellence</h4>
                    <p className="text-gray-700 text-sm">Licensed engineers delivering world-class, sustainable solutions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-xl h-64">
                  <img src={image4} alt="E4H water project" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl h-80">
                  <img src={image2} alt="Youth in STEM class" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
              <div className="space-y-4 pt-16">
                <div className="rounded-3xl overflow-hidden shadow-xl h-80">
                  <img src={image3} alt="Community building together" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-xl h-64">
                  <img src={image1} alt="Refugee engineer at work" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Partner With E4H */}
      <div className="py-20 px-4 md:px-8 bg-gray-900">
        <div className=" mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Partner With E4H?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We don’t just deliver projects — we deliver dignity, ownership, and sustainable change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <HeartHandshake className="w-10 h-10" />, title: "Refugee-Led", desc: "Authentic understanding of community needs" },
              { icon: <Shield className="w-10 h-10" />, title: "Professional Standards", desc: "Licensed engineers, rigorous quality control" },
              { icon: <Clock className="w-10 h-10" />, title: "Lasting Impact", desc: "Community-owned, maintainable solutions" },
              { icon: <Users className="w-10 h-10" />, title: "Inclusive Approach", desc: "Local training, jobs, and leadership" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-700 transition-all duration-300 group cursor-default">
                <div className="text-yellow-500 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 px-4 md:px-8 bg-gradient-to-br from-yellow-500 via-orange-400 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Ready to Change Lives<br />
            <span className="text-white">Together?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 mb-10 max-w-3xl mx-auto">
            Partner with us. Donate. Volunteer. Fund a scholarship or water project — every action builds a better future.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/donate"
              className="px-10 py-5 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-full text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Donate Now
            </a>
            <a
              href="/get-involved"
              className="px-10 py-5 bg-transparent border-3 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold rounded-full text-lg transition-all duration-300"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;