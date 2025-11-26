import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
  MessageCircle,
  Users,
  HeartHandshake,
  Building2,
  Globe
} from "lucide-react";
import Header from "../components/header";

const E4HContactPage = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", interest: "", message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState("support");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
    }, 4000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call or WhatsApp",
      details: ["+250 788 307 186 (Rwanda)", "+250 788 695 365 (Rwanda)", "+1 469 967 0444 (USA)"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["contact@e4hinitiative.org", "engineersforhumanity20@gmail.com"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Building2,
      title: "USA Mailing Address",
      details: ["908 Audelia Rd, Suite 200", "Box 139, Richardson, TX 75081", "United States"],
      color: "from-primary-600 to-primary-600",
      bgColor: "bg-primary-50",
      iconBg: "bg-primary-100",
      iconColor: "text-primary-700"
    },
    {
      icon: Globe,
      title: "Rwanda Headquarters",
      details: ["Diamond House, 2nd Floor", "Kicukiro Center, Kigali", "ENGINEERS4HUMANITY CONSULTANCY Ltd"],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Header title="Contact Us" path="Contact" />

      {/* Contact Cards */}
      <div className=" mx-auto px-6 md:px-12 -mt-32 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <div
                key={i}
                className="group bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 border border-gray-100 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${info.iconBg} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${info.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{info.title}</h3>
                  {info.details.map((d, idx) => (
                    <p key={idx} className="text-gray-700 text-sm font-medium mb-1">{d}</p>
                  ))}
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${info.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            );
          })}
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50">
            <div className="flex flex-wrap">
              {[
                { id: "support", label: "Support a Project", icon: HeartHandshake },
                { id: "volunteer", label: "Volunteer", icon: Users },
                { id: "partner", label: "Partner With Us", icon: Building2 },
                { id: "general", label: "General Inquiry", icon: MessageCircle }
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-6 py-5 font-semibold flex items-center justify-center gap-3 transition-all ${
                      activeTab === tab.id
                        ? 'bg-white text-primary-600 border-b-4 border-primary-500'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="hidden md:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-8 md:p-12">
            {isSubmitted ? (
              <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-primary-500 rounded-full mb-6">
                  <CheckCircle className="w-14 h-14 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Thank You! We’ve Received Your Message
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Eric or a team member will personally reply within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Form */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {activeTab === "support" && "Sponsor Hope & Change"}
                    {activeTab === "volunteer" && "Join Our Mission"}
                    {activeTab === "partner" && "Let’s Build Together"}
                    {activeTab === "general" && "We’re Here to Help"}
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Every message reaches Eric and our team directly. We reply personally.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Your Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors" placeholder="Your full name" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors" placeholder="you@example.org" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Phone / WhatsApp</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors" placeholder="+250 ..." />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">I’m Interested In *</label>
                      <select name="interest" value={formData.interest} onChange={handleChange} required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors">
                        <option value="">Select an option</option>
                        <option value="donate">Donating or Sponsoring a Student</option>
                        <option value="water">Funding Clean Water Projects</option>
                        <option value="volunteer">Volunteering (Remote or In-Person)</option>
                        <option value="partner">Corporate / NGO Partnership</option>
                        <option value="visit">Visiting Projects in Rwanda</option>
                        <option value="consultancy">Engineering Consultancy Services</option>
                        <option value="other">Other / General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Your Message</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none" placeholder="How can we help you change lives today?" />
                    </div>

                    <button type="submit" className="w-full px-8 py-4 bg-primary-500 hover:bg-primary-600 text-gray-900 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-3 group">
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>

                {/* Right Side – Impact */}
                <div className="lg:pl-8">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white h-full">
                    <h4 className="text-2xl font-bold mb-6">Your Message Matters</h4>
                    <div className="space-y-6">
                      {[
                        { title: "Educate a Refugee Child", desc: "$35/month changes everything" },
                        { title: "Bring Clean Water", desc: "$5,000 serves 500+ people" },
                        { title: "Train Future Engineers", desc: "Vocational skills = real jobs" },
                        { title: "Partner for Impact", desc: "NGOs, companies, universities welcome" }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <HeartHandshake className="w-6 h-6 text-gray-900" />
                          </div>
                          <div>
                            <div className="font-bold text-lg mb-1">{item.title}</div>
                            <div className="text-gray-300">{item.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 pt-8 border-t border-white/10">
                      <p className="text-gray-400 text-sm mb-3">Officially Registered As</p>
                      <div className="text-xl font-bold">ENGINEERS4HUMANITY CONSULTANCY Ltd</div>
                      <div className="text-primary-500 text-sm mt-1">TIN: 111054632 • Rwanda</div>
                      <div className="text-primary-500 text-sm">501(c)(3) Partner • USA</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Map – Kigali Office */}
      <div className=" mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Visit Our Rwanda Headquarters
          </h3>
          <p className="text-xl text-gray-600">
            Diamond House, Kicukiro Center — We’d love to host you
          </p>
        </div>
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl h-[500px] relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.478782013222!2d30.059496!3d-1.9440727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xe938b58c0f4b8a3d!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="E4H Rwanda Office"
          />
          <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-6 shadow-xl max-w-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-gray-900" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1 text-lg">E4H Rwanda Office</h4>
                <p className="text-gray-600 text-sm">
                  Diamond House, 2nd Floor<br />
                  Kicukiro Center, Kigali<br />
                  <strong>TIN: 111054632</strong>
                </p>
                <a href="https://maps.google.com/?q=Diamond+House+Kicukiro+Kigali" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm hover:text-primary-700 mt-2">
                  <span>Get Directions</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Speak Directly With Eric
          </h3>
          <p className="text-xl text-gray-800 mb-8">
            Founder & CEO — he personally answers every call and message
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://wa.me/1250788307186"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 text-white rounded-full font-bold text-xl hover:bg-gray-800 transition-all hover:scale-105"
            >
              <Phone className="w-6 h-6" />
              <span>+250 788 307 186 (WhatsApp)</span>
            </a>
            <a
              href="tel:+14699670444"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 rounded-full font-bold text-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              <Phone className="w-6 h-6" />
              <span>+1 469 967 0444 (USA)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default E4HContactPage;