import { Linkedin, Mail, Phone, Award, Briefcase, HeartHandshake, GraduationCap, Droplets, Users } from "lucide-react";
import Header from "../components/header";
import image1 from '../assets/team/eric.jpg'
import image2 from '../assets/team/fabrice.png'
import image3 from '../assets/team/emmy.png'
import image4 from '../assets/team/bahati.png'
import image5 from '../assets/team/theoneste.png'
import image6 from '../assets/team/fred.png'
import image7 from '../assets/team/christian.png'
import image8 from '../assets/team/noel.png'
import image9 from '../assets/team/jack.png'
import image10 from '../assets/team/bosco.png'
import image11 from '../assets/team/enock.png'
import image12 from '../assets/team/vin.png'
import image13 from '../assets/team/straton.jpg'
const TeamPage = () => {
  const teamMembers = [
    {
      name: "Eric KAMANZI, PMP, Engr",
      role: "Founder & Chief Executive Officer",
      image:image1,
      linkedin: "https://www.linkedin.com/in/erickamanzi",
      email: "eric@e4hinitiative.org",
      phone: "+1 234 567 8901",
      specialties: ["Humanitarian Engineering", "Project Management", "Global Sustainability"]
    },
    {
      name: "Vin Hoev",
      role: "Board Chairperson",
      image:image12,
      linkedin: "#",
      email: "fabrice@e4hinitiative.org",
      phone: "+250 123 456 789",
      specialties: ["Country Operations", "Engineering Leadership", "Program Coordination"]
    },
    {
      name: "Malisaba Straton",
      role: "Board Member",
      image:image13,
      linkedin: "#",
      email: "fabrice@e4hinitiative.org",
      phone: "+250 123 456 789",
      specialties: ["Country Operations", "Engineering Leadership", "Program Coordination"]
    },
    {
      name: "Fabrice Kayisire, Engr",
      role: "Country Director -Rwanda",
      image:image2,
      linkedin: "#",
      email: "fabrice@e4hinitiative.org",
      phone: "+250 123 456 789",
      specialties: ["Country Operations", "Engineering Leadership", "Program Coordination"]
    },
    {
      name: "Emmanuel Sebagisha",
      role: "Education Program Manager",
      image: image3,
      linkedin: "#",
      email: "emmanuel@e4hinitiative.org",
      phone: "+250 987 654 321",
      specialties: ["Education Management", "Youth Development", "Program Implementation"]
    },
    {
      name: "Bahati Musuhuke",
      role: "Planning Manager",
      image: image4,
      linkedin: "#",
      email: "bahati@e4hinitiative.org",
      phone: "+250 456 789 012",
      specialties: ["Strategic Planning", "Project Coordination", "Operations Management"]
    },
    {
      name: "Theoneste Habimana",
      role: "Vocational Training Manager Africa Program",
       image: image5,
      linkedin: "#",
      email: "theoneste@e4hinitiative.org",
      phone: "+250 345 678 901",
      specialties: ["Vocational Training", "Africa Programs", "Skills Development"]
    },
    {
      name: "Er. Fred Shyaka",
      role: "Public Health Engineering Program",
     image: image6,
      linkedin: "#",
      email: "fred@e4hinitiative.org",
      phone: "+250 234 567 890",
      specialties: ["Public Health Engineering", "WASH Programs", "Sustainable Infrastructure"]
    },
    {
      name: "Christian Ntwari",
      role: "Environmental & Social Safeguarding Program",
       image: image7,
      linkedin: "#",
      email: "christian@e4hinitiative.org",
      phone: "+250 123 456 789",
      specialties: ["Environmental Safeguarding", "Social Impact", "Risk Management"]
    },
    {
      name: "Noel Rusine",
      role: "Storytelling & Media- USA",
      image: image8,
      linkedin: "#",
      email: "noel@e4hinitiative.org",
      phone: "+1 567 890 123",
      specialties: ["Storytelling", "Media Production", "Communications"]
    },
    {
      name: "Jackson Mutega",
      role: "Youth Club",
       image: image9,
      linkedin: "#",
      email: "jackson@e4hinitiative.org",
      phone: "+250 567 890 123",
      specialties: ["Youth Engagement", "Club Management", "Community Building"]
    },
    {
      name: "Bosco Izabayo",
      role: "Youth Mentorship Program",
      image: image10,
      linkedin: "#",
      email: "bosco@e4hinitiative.org",
      phone: "+250 678 901 234",
      specialties: ["Youth Mentorship", "Leadership Development", "Mentoring Programs"]
    },
    {
      name: "Enock Nkurunziza",
      role: "Education PM-Africa",
      image: image11,
      linkedin: "#",
      email: "enock@e4hinitiative.org",
      phone: "+250 789 012 345",
      specialties: ["Education Project Management", "Africa Education", "Program Delivery"]
    }
  ];
  const stats = [
    { number: "30+", label: "Trained Engineers & Technicians", icon: <Briefcase className="w-6 h-6" /> },
    { number: "17+", label: "Years of Humanitarian Impact", icon: <Award className="w-6 h-6" /> },
    { number: "100%", label: "Refugee-Led Leadership", icon: <HeartHandshake className="w-6 h-6" /> },
  ];
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <Header title="Our Member" path="Member" />
      {/* Member Grid Section */}
      <div className="py-20 px-4 md:px-8 bg-gray-50">


        
        <div className=" mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Global Executive Member
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the founders, alumni, and volunteers — many former refugees themselves — who turn lived experience into lasting impact through compassion, engineering, and education.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 
                  {/* Social Links Overlay */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors shadow-lg"
                    >
                      <Linkedin size={18} className="text-gray-900" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors shadow-lg"
                    >
                      <Mail size={18} className="text-gray-900" />
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors shadow-lg"
                    >
                      <Phone size={18} className="text-gray-900" />
                    </a>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-yellow-600 font-semibold mb-3">{member.role}</p>
                 
                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Join Our Member Section */}
      <div className="py-20 px-4 md:px-8 bg-white">
        <div className=" mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80"
                alt="Join E4H Member – Diverse group collaborating on community project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Join Our Mission-Driven Member</h3>
                <p className="text-lg opacity-90">Empower communities with your skills and heart</p>
              </div>
            </div>
            <div>
              <div className="inline-block px-5 py-2 bg-yellow-100 rounded-full mb-6">
                <span className="text-yellow-700 font-bold text-sm uppercase tracking-wider">
                  Get Involved
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Become Part of the Change
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                E4H seeks passionate engineers, educators, mentors, and volunteers from refugee and immigrant backgrounds. Join us to build sustainable futures through hands-on programs in education, WASH, and engineering.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Meaningful impact in refugee communities",
                  "Professional development in humanitarian engineering",
                  "Collaborative, inclusive environment",
                  "Global partnerships and real-world projects",
                  "Mentorship and leadership opportunities"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Volunteer Opportunities
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold rounded-full transition-all duration-300">
                  Partner With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <div className="py-20 px-4 md:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Build Hope<br />
            <span className="text-yellow-500">With Us?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Connect with our team to sponsor a student, fund a project, or collaborate on sustainable solutions for refugees and underserved communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-5 bg-yellow-500 hover:bg-yellow-500 text-gray-900 font-bold rounded-full text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              Donate Today
            </button>
            <button className="px-10 py-5 bg-transparent border-3 border-white text-white hover:bg-white hover:text-gray-900 font-bold rounded-full text-lg transition-all duration-300">
              Contact Member
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamPage;