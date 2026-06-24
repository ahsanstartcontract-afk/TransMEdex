import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, ShieldCheck, Users, FileText, CheckSquare, Activity, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function StatePageTemplate({ stateName, seoDescription, cities, challenges, heroImage, locationType = "Cities" }) {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Contact Us request:', form);
    alert('Thanks â€” we received your request.');
  }

  return (
    <>
      <Helmet>
        <title>Medical Billing Services in {stateName} - TransMedex</title>
        <meta name="description" content={seoDescription} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-20 bg-slate-900 text-white">
            <div 
              className="absolute inset-0 z-0 opacity-40 bg-cover bg-center" 
              style={{ backgroundImage: `url('${heroImage || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80"}')` }} 
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-8 xl:gap-12 items-start">
                <div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Expert Medical Billing Services In {stateName}</h1>
                  <p className="text-lg opacity-90 mb-6">
                    Transcure's medical billing services in {stateName} combine AAPC-certified coders with AI-driven workflows to optimize revenue cycle performance across all specialties. Our expert billing team delivers the following services to reduce denials and ensure full compliance with {stateName}-specific regulations:
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span>Follow {stateName} No Surprises Act and state balance-billing protections for out-of-network services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span>AI-Powered Billing, from eligibility verification to payment posting with 98.99% clean claim accuracy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span>Submit electronic and paper claims accurately to Medicare, Medicaid, and commercial payers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span>Support specialty-specific billing, including nephrology, pain management, and more</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span>Provider credentialing and payer contracting support to prevent reimbursement interruptions</span>
                    </li>
                  </ul>
                  
                  <div className="flex gap-6 items-center">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-8 h-8 text-slate-300" />
                      <span className="font-bold text-xl tracking-wider">ISO 27001</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-8 h-8 text-slate-300" />
                      <span className="font-bold text-xl tracking-wider">HIPAA Compliant</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white text-black rounded-xl p-4 sm:p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-center mb-6 text-primary">Let's Get Started!</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">First Name *</label>
                      <input required name="firstName" value={form.firstName} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Last Name *</label>
                      <input required name="lastName" value={form.lastName} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                      <input required type="email" name="email" value={form.email} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Phone *</label>
                      <input required type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Message *</label>
                      <textarea required name="message" value={form.message} onChange={handleChange} rows="3" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"></textarea>
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-[hsl(260,70%,50%)] hover:from-[hsl(260,70%,50%)] hover:to-primary text-white rounded-full mt-2 h-12 text-lg">
                      Contact Us
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Purple Ribbon */}
          <section className="bg-gradient-to-r from-[#5a1e64] to-[#7b2c86] text-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center mb-4 bg-white/10">
                    <Users className="w-8 h-8" />
                  </div>
                  <p className="font-semibold text-sm leading-tight">Trusted by<br/>500+ Physicians</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center mb-4 bg-white/10">
                    <Activity className="w-8 h-8" />
                  </div>
                  <p className="font-semibold text-sm leading-tight">Catering to<br/>40+ Specialties</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center mb-4 bg-white/10">
                    <CheckSquare className="w-8 h-8" />
                  </div>
                  <p className="font-semibold text-sm leading-tight">100+ Certified<br/>Medical Billers & Coders</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center mb-4 bg-white/10">
                    <FileText className="w-8 h-8" />
                  </div>
                  <p className="font-semibold text-sm leading-tight">End-to-End<br/>RCM Billing Solutions</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center mb-4 bg-white/10">
                    <TrendingUp className="w-8 h-8" />
                  </div>
                  <p className="font-semibold text-sm leading-tight">Up to 99% First Pass<br/>Clean Claim Rate</p>
                </div>
              </div>
            </div>
          </section>

          {/* Success in Numbers */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-12 text-slate-900">Our Success in Numbers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
                <div className="border-slate-200 border-r-0 sm:border-r last:border-0 md:[&:nth-child(4n)]:border-0">
                  <p className="text-4xl font-bold text-primary mb-2">$500M+</p>
                  <p className="text-sm font-medium text-slate-600">Value of claims processed</p>
                </div>
                <div className="border-slate-200 border-r-0 sm:border-r last:border-0 md:[&:nth-child(4n)]:border-0">
                  <p className="text-4xl font-bold text-primary mb-2">24</p>
                  <p className="text-sm font-medium text-slate-600">Accounts Receivable Days</p>
                </div>
                <div className="border-slate-200 border-r-0 sm:border-r last:border-0 md:[&:nth-child(4n)]:border-0">
                  <p className="text-4xl font-bold text-primary mb-2">48Hours</p>
                  <p className="text-sm font-medium text-slate-600">Turn Around Time (TAT)</p>
                </div>
                <div className="border-slate-200 border-r-0 sm:border-r last:border-0 md:[&:nth-child(4n)]:border-0">
                  <p className="text-4xl font-bold text-primary mb-2">99%</p>
                  <p className="text-sm font-medium text-slate-600">Customer Retention</p>
                </div>
                <div className="border-slate-200 border-r-0 sm:border-r last:border-0 md:[&:nth-child(4n)]:border-0">
                  <p className="text-4xl font-bold text-primary mb-2">2.7M</p>
                  <p className="text-sm font-medium text-slate-600">Number of Claims Processed</p>
                </div>
                <div className="border-slate-200 border-r-0 sm:border-r last:border-0 md:[&:nth-child(4n)]:border-0">
                  <p className="text-4xl font-bold text-primary mb-2">98%</p>
                  <p className="text-sm font-medium text-slate-600">First Pass Clean Claims Rate</p>
                </div>
                <div className="border-slate-200 border-r-0 sm:border-r last:border-0 md:[&:nth-child(4n)]:border-0">
                  <p className="text-4xl font-bold text-primary mb-2">5%-10%</p>
                  <p className="text-sm font-medium text-slate-600">Revenue Improvement</p>
                </div>
                <div className="border-slate-200 border-r-0 sm:border-r last:border-0 md:[&:nth-child(4n)]:border-0">
                  <p className="text-4xl font-bold text-primary mb-2">30%</p>
                  <p className="text-sm font-medium text-slate-600">Reduction in A/R</p>
                </div>
              </div>
            </div>
          </section>

          {/* Challenges Section */}
          <section className="py-16 bg-[#F5ECF4]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">What Medical Billing Challenges do {stateName} Practices Commonly Face?</h2>
                <p className="text-slate-600 max-w-4xl mx-auto">
                  Medical practices in {stateName} face multiple billing challenges, including a wide range of operational, regulatory, and payer-related complexities that can significantly impact revenue cycle efficiency.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {challenges.map((c, i) => (
                  <div key={i} className="bg-white p-5 sm:p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#fdf2f8] flex items-center justify-center mb-6 text-[#d946ef]">
                      {i % 4 === 0 && <AlertCircle className="w-6 h-6" />}
                      {i % 4 === 1 && <FileText className="w-6 h-6" />}
                      {i % 4 === 2 && <Shield className="w-6 h-6" />}
                      {i % 4 === 3 && <Activity className="w-6 h-6" />}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{c.title}</h3>
                    <p className="text-slate-600">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* How Transcure Helps */}
          <section className="py-16 bg-gradient-to-b from-[#5a1e64] to-[#46124e] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center mb-12">
                <h2 className="text-3xl font-bold leading-tight">
                  How Transcure Helps Practices With Their Medical Billing Services in {stateName}?
                </h2>
                <p className="text-slate-200">
                  Transcure provides <span className="text-[#e879f9] font-semibold">medical billing services</span> to help {stateName} practices overcome complex billing and compliance challenges. Our medical billing services in {stateName} assist with:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white text-slate-900 p-5 sm:p-8 rounded-xl shadow-lg text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#fdf2f8] flex items-center justify-center mb-6 text-[#d946ef]">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Prior Authorization Management</h3>
                  <p className="text-slate-600">Secures necessary approvals from insurers for procedures and treatments.</p>
                </div>
                <div className="bg-white text-slate-900 p-5 sm:p-8 rounded-xl shadow-lg text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#fdf2f8] flex items-center justify-center mb-6 text-[#d946ef]">
                    <FileText className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Accurate Medical Coding (ICD-10, CPT, HCPCS)</h3>
                  <p className="text-slate-600">Assigns correct codes to diagnoses and procedures for proper billing.</p>
                </div>
                <div className="bg-white text-slate-900 p-5 sm:p-8 rounded-xl shadow-lg text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#fdf2f8] flex items-center justify-center mb-6 text-[#d946ef]">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Charge Entry and Charge Validation</h3>
                  <p className="text-slate-600">Records and verifies charges to ensure accuracy before submission.</p>
                </div>
              </div>
              
              <div className="flex justify-center mt-8 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-white opacity-40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white opacity-40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white opacity-100"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white opacity-40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white opacity-40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white opacity-40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white opacity-40"></div>
              </div>
            </div>
          </section>

          {/* Locations Section */}
          <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Which {locationType} are Served by Transcure Medical Billing Services in {stateName}?</h2>
                <p className="text-slate-600 max-w-4xl mx-auto">
                  With coverage spanning all {locationType.toLowerCase()} in {stateName}, Transcure supports providers in both urban and rural areas with reliable medical billing solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {cities.map((city, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 transition-transform duration-300 hover:-translate-y-1">
                    <img src={city.image} alt={`${city.name}, ${stateName}`} className="w-full h-48 object-cover" />
                    <div className="p-4 text-center">
                      <h3 className="font-bold text-lg text-primary">{city.name}, {stateName}</h3>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Link to="/contact" className="font-semibold text-primary hover:underline">
                  View All {locationType}
                </Link>
              </div>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
}

export default StatePageTemplate;



