import React, { useState } from 'react';
import { Briefcase, Mail, Phone, FileText, Send, CheckCircle } from 'lucide-react';
import Header from '../components/header';

export default function E4HJobApplication() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    position: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.fullName && formData.email && formData.phone && formData.position && formData.experience && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 text-gray-900">
      {/* Header */}
     <Header path=' Apply 'title={'Apply Now'}/>

      {/* Main Content */}
      <main className=" mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-yellow-700">Join Our Construction Team</h2>
          <p className="text-xl text-gray-700">
            We're looking for passionate construction professionals to help us build sustainable infrastructure and make a positive impact in communities worldwide.
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-12  mx-auto">



        <div className="">
          

        {/* Why Join Us Section */}
        <div className="bg-gray-700 rounded-lg p-8 mb-12 border-2 border-yellow-600 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-yellow-500">Why Join E4H?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-2 text-yellow-500">Meaningful Work</h4>
              <p className="text-gray-100">Work on projects that directly improve lives and communities</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-yellow-500">Professional Growth</h4>
              <p className="text-gray-100">Access to training, certifications, and career development</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-yellow-500">Competitive Benefits</h4>
              <p className="text-gray-100">Health insurance, retirement plans, and paid time off</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-yellow-500">Global Impact</h4>
              <p className="text-gray-100">Contribute to humanitarian construction projects worldwide</p>
            </div>
          </div>
        </div>

        {/* Positions Available */}
        <div className="bg-white rounded-lg p-8 mb-12 border border-gray-300 shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-yellow-700">Open Positions</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">•</span>
              <span><strong>Construction Site Supervisor</strong> - Oversee daily operations and safety protocols</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">•</span>
              <span><strong>Civil Engineer</strong> - Design and plan infrastructure projects</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">•</span>
              <span><strong>Heavy Equipment Operator</strong> - Operate machinery on construction sites</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">•</span>
              <span><strong>Construction Laborers</strong> - Hands-on building and site work</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-yellow-600 mt-1">•</span>
              <span><strong>Project Manager</strong> - Lead construction projects from start to finish</span>
            </li>
          </ul>
        </div>
        </div>


       

        {/* Application Form */}
        <div className="bg-white rounded-lg p-8 border-2 border-yellow-600 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-yellow-700">Application Form</h3>
          
          {submitted && (
            <div className="mb-6 bg-green-100 border-2 border-green-500 rounded-lg p-4 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <p className="text-green-800">Application submitted successfully! We'll contact you soon.</p>
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 text-gray-900"
                placeholder="John Doe"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Email *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 text-gray-900"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Phone *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 text-gray-900"
                    placeholder="+250 123 456 789"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Position Applying For *</label>
              <select
                name="position"
                value={formData.position}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 text-gray-900"
              >
                <option value="">Select a position</option>
                <option value="supervisor">Construction Site Supervisor</option>
                <option value="engineer">Civil Engineer</option>
                <option value="operator">Heavy Equipment Operator</option>
                <option value="laborer">Construction Laborer</option>
                <option value="manager">Project Manager</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Years of Experience *</label>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 text-gray-900"
                placeholder="e.g., 5 years"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">
                Why do you want to join E4H? *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 text-gray-900"
                placeholder="Tell us about your experience, skills, and why you're interested in working with Engineers4Humanity..."
              />
            </div>

            <div className="bg-gray-600 rounded-lg p-4 border-2 border-gray-500">
              <div className="flex items-start gap-2">
                <FileText className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-100">
                  <p className="font-medium mb-1">Required Documents:</p>
                  <p>After submitting this form, please email your resume, certifications, and references to: <span className="text-yellow-500 font-semibold">careers@engineers4humanity.org</span></p>
                </div>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <Send className="w-5 h-5" />
              Submit Application
            </button>
          </div>
        </div>

              </div>
        {/* Contact Information */}
        <div className="mt-12 text-center text-gray-600">
          <p className="mb-2">Questions about the application process?</p>
          <p>Contact us at <span className="text-yellow-700 font-semibold">careers@engineers4humanity.org</span></p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-300 mt-20 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2025 Engineers4Humanity. Building communities, changing lives.</p>
        </div>
      </footer>
    </div>
  );
}