import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Droplets, 
  GraduationCap, 
  Users, 
  Home, 
  CheckCircle, 
  Shield, 
  Award, 
  Calendar, 
  DollarSign,
  Send
} from 'lucide-react';

export default function E4HSupportPage() {
  const [supportType, setSupportType] = useState('education');
  const [amount, setAmount] = useState('custom');
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', message: ''
  });
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const supportOptions = [
    { id: 'education', icon: GraduationCap, title: "Sponsor a Student", desc: "Give a refugee child full education & hope" },
    { id: 'water', icon: Droplets, title: "Fund Clean Water", desc: "Bring safe water to hundreds of families" },
    { id: 'training', icon: Users, title: "Vocational Training", desc: "Skills that create jobs & independence" },
    { id: 'community', icon: Home, title: "Community Projects", desc: "Build classrooms, latrines, safe spaces" }
  ];

  const presetAmounts = [
    { label: '$35', value: '35', desc: "1 month education for 1 child" },
    { label: '$120', value: '120', desc: "1 term education + meals" },
    { label: '$420', value: '420', desc: "Full year scholarship" },
    { label: '$2,500', value: '2500', desc: "Water point for 300+ people" },
    { label: '$5,000', value: '5000', desc: "Water system for 1,000+ people" }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!agreed || !formData.firstName || !formData.email || !supportType) return;
    setSubmitted(true);
  };

  // SUCCESS SCREEN
  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50 flex items-center justify-center px-6 py-16">
        <div className="max-w-3xl text-center">
          <div className="w-28 h-28 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse shadow-2xl">
            <HeartHandshake className="w-16 h-16 text-gray-900" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Thank You<br />
            <span className="text-yellow-600">You Just Changed Lives</span>
          </h1>
          <p className="text-xl text-gray-700 mb-10 leading-relaxed">
            Your generosity will directly support refugees in Rwanda.<br />
            A personalized impact report will be sent to you soon.
          </p>
          <div className="bg-white rounded-3xl shadow-2xl p-10 mb-10 border border-yellow-100">
            <p className="text-2xl font-bold text-yellow-700 mb-4">
              {supportOptions.find(s => s.id === supportType)?.title}
            </p>
            <p className="text-gray-600 text-lg">
              Confirmation sent to <span className="font-bold text-yellow-600">{formData.email}</span>
            </p>
          </div>
          <p className="text-gray-700 italic text-lg">
            “Because of you, a child will go to school tomorrow.” — Eric Kamanzi, E4H Founder
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* HERO */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1800&q=80')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative container mx-auto max-w-5xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Change Lives Today<br />
            <span className="text-yellow-500">With One Gift</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            Every dollar you give is transformed into education, clean water, skills, and hope for refugees and underserved communities in Rwanda.
          </p>
          <div className="flex flex-wrap justify-center gap-10 text-gray-300 text-lg">
            <div><span className="text-4xl font-bold text-yellow-500">2,800+</span><br />Lives Transformed</div>
            <div><span className="text-4xl font-bold text-yellow-500">100%</span><br />Goes to Projects</div>
            <div><span className="text-4xl font-bold text-yellow-500">17 Years</span><br />Of Impact</div>
          </div>
        </div>
      </div>

      {/* MAIN FORM */}
      <div className=" mx-auto px-6 md:px-16 py-16 -mt-10">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* FORM */}
          <div className="lg:col-span-2 text-black">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
              {/* Support Type */}
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">I Want to Support</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {supportOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.id}
                        onClick={() => setSupportType(option.id)}
                        className={`p-6 rounded-2xl border-2 transition-all text-left flex items-start gap-4 ${
                          supportType === option.id
                            ? 'bg-yellow-50 border-yellow-500 shadow-lg ring-4 ring-yellow-100'
                            : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <Icon className={`w-10 h-10 flex-shrink-0 ${supportType === option.id ? 'text-yellow-600' : 'text-gray-600'}`} />
                        <div>
                          <h3 className="font-bold text-lg text-gray-900">{option.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{option.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Donation Amount */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Choose Your Gift</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt.value}
                      onClick={() => { setAmount(amt.value); setCustomAmount(''); }}
                      className={`py-5 px-6 rounded-2xl font-bold text-lg transition-all ${
                        amount === amt.value
                          ? 'bg-yellow-500 text-gray-900 shadow-xl ring-4 ring-yellow-200'
                          : 'bg-gray-50 hover:bg-gray-100 border-2 border-gray-200 text-gray-700'
                      }`}
                    >
                      {amt.label}
                      <span className="block text-xs font-normal mt-1 opacity-80">{amt.desc}</span>
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    placeholder="Other amount (USD)"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setAmount('custom'); }}
                    className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-300 focus:border-yellow-500 focus:outline-none text-lg font-medium"
                  />
                  <span className="text-2xl font-bold text-gray-800">USD</span>
                </div>
              </div>

              {/* Personal Info */}
              <div className="space-y-6 mb-8 text-black">
                <div className="grid md:grid-cols-2 gap-6">
                  <input placeholder="First Name *" name="firstName" onChange={handleInputChange} className="px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-yellow-500 focus:outline-none" />
                  <input placeholder="Last Name *" name="lastName" onChange={handleInputChange} className="px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-yellow-500 focus:outline-none" />
                </div>
                <input placeholder="Email Address *" name="email" type="email" onChange={handleInputChange} className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-yellow-500 focus:outline-none" />
                <input placeholder="Phone / WhatsApp (optional)" name="phone" onChange={handleInputChange} className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-yellow-500 focus:outline-none" />
                <textarea placeholder="Your message or dedication (optional)" name="message" onChange={handleInputChange} rows={4} className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-yellow-500 focus:outline-none resize-none" />
              </div>

              {/* Agreement + Submit */}
              <label className="flex items-start gap-4 mb-8 cursor-pointer">
                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="w-6 h-6 text-yellow-600 rounded mt-1" />
                <span className="text-sm text-gray-600 leading-relaxed">
                  I understand this is a donation to Engineers4Humanity (E4H), a registered 501(c)(3) nonprofit. 
                  All contributions are tax-deductible in the USA.
                </span>
              </label>

              <button
                onClick={handleSubmit}
                disabled={!supportType || !agreed || (!amount && !customAmount)}
                className="w-full bg-yellow-500 hover:bg-yellow-500 text-gray-900 py-6 rounded-2xl font-bold text-2xl shadow-2xl transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-4"
              >
                <HeartHandshake className="w-10 h-10" />
                Complete My Gift
              </button>

              <p className="text-center text-gray-500 text-sm mt-6 flex items-center justify-center gap-2">
                <Shield className="w-5 h-5 text-yellow-600" />
                100% Secure • Tax-Deductible • Full Transparency
              </p>
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-10 shadow-2xl">
              <h3 className="text-3xl font-bold mb-8">Your Impact</h3>
              <div className="space-y-6">
                <div className="bg-white/10 rounded-2xl p-5"><strong>$35</strong> → 1 month school for a refugee child</div>
                <div className="bg-white/10 rounded-2xl p-5"><strong>$420</strong> → Full year scholarship + meals</div>
                <div className="bg-white/10 rounded-2xl p-5"><strong>$2,500</strong> → Clean water for 300+ people</div>
                <div className="bg-yellow-500/20 backdrop-blur rounded-2xl p-5 border border-yellow-500">
                  <strong className="text-yellow-300">Any amount</strong> → Hope, dignity, and a future
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-yellow-600" />
                <p className="font-bold text-yellow-800 text-lg">Real Story</p>
              </div>
              <p className="text-gray-800 italic">
                “Thanks to a donor like you, I finished school and now teach others. You didn’t just help me — you helped my whole community.”
                <span className="block mt-3 font-bold not-italic">— Grace, Former Refugee Student</span>
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-4">Why Trust E4H?</h4>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-yellow-600" />501(c)(3) Registered (USA)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-yellow-600" />Licensed in Rwanda</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-yellow-600" />100% of donation goes to field</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-yellow-600" />Personal impact updates</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-yellow-600" />Refugee-led & community-owned</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}