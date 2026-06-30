import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Mail, Phone, Calendar, MapPin, Building, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

function PricingPage() {
  const plans = [
    { name: 'TransMedex Enterprise', fee: '@2.25%/month', collections: '$500,000+', isPopular: false },
    { name: 'TransMedex Ultimate', fee: '@2.49%/month', collections: '$100,000 - $5,000,000', isPopular: false },
    { name: 'TransMedex Pro', fee: '@2.99%/month', collections: '$50,000 - $100,000', isPopular: true },
    { name: 'TransMedex Classic', fee: '@3.99%/month', collections: 'Upto $50,000', isPopular: false },
  ];

  const addOnFeatures = [
    {
      title: 'Paper Statements',
      subtitle: '(We Mail It To You)',
      description: 'Have you forgotten your printer? Nothing to worry about. Our team handles all aspects of patient billing, printing, packaging, mailing and the timely completion of all tasks.'
    },
    {
      title: 'Provider Credentialing',
      subtitle: '(We Provide Payer Access)',
      description: 'From NPI to CAQH to full-blown payer enrollment, our team keeps your credentials up-to-date.'
    },
    {
      title: 'Paper Claim Submission',
      subtitle: '(Same-Day Dispatch)',
      description: 'TransMedex provides end-to-end revenue cycle management with eligibility checks, claim submission, remittance and reporting.'
    },
    {
      title: 'Data Migration',
      subtitle: '(All In One Week)',
      description: 'Would you like to switch to TransMedex? Your charts, ledgers, and claim history will be moved securely and quickly.'
    },
    {
      title: 'Certified Medical Coding',
      subtitle: '(ICD & CPT)',
      description: 'Our expert coders transform your documentation into clean, compliant codes based on your specialty.'
    },
    {
      title: 'Electronic Prescribing',
      subtitle: '(Instant eRx Integration)',
      description: 'Right from your workflow, E-Prescribe. No manual hassles with fast-track medications.'
    },
    {
      title: 'Prior Authorization & VOB',
      subtitle: '(Coverage Already Checked)',
      description: 'In order to avoid surprises on service day, we verify insurance and handle prior authorizations beforehand.'
    },
    {
      title: 'RX Manager',
      subtitle: '(Your Meds. One View.)',
      description: 'Stay in control. On one smart dashboard, you can manage prescriptions, refills and review your medical history.'
    }
  ];

  const sections = [
    {
      title: 'Core Services',
      features: [
        { name: 'Medical Billing', values: ['Yes', 'Yes', 'Yes', 'Yes'] },
        { name: 'Claim Resolution', values: ['Yes', 'Yes', 'Yes', 'Yes'] },
        { name: 'Revenue Cycle Management', values: ['Yes', 'Yes', 'Yes', 'Yes'] },
        { name: 'Medical Billing Software', values: ['Yes', 'Yes', 'Yes', 'Yes'] },
      ]
    },
    {
      title: 'Medical Billing',
      features: [
        { name: 'Full-Service Medical Billing', values: [true, true, true, true] },
        { name: 'UVN Fee Waiver', values: [true, true, true, true] },
        { name: 'Technical Support', values: [true, true, true, true] },
      ]
    },
    {
      title: 'Claim Resolution',
      features: [
        { name: 'Electronic Claim Submission', values: [true, true, true, true] },
        { name: 'Claim Follow-up', values: [true, true, true, true] },
        { name: 'Denial Management', values: [true, true, true, true] },
        { name: 'Rejection Handling', values: [true, true, true, true] },
        { name: 'Appeals Management', values: [true, true, true, true] },
      ]
    },
    {
      title: 'Revenue Cycle Management',
      features: [
        { name: 'Dedicated Account Manager', values: [true, true, true, true] },
        { name: 'Weekly RCM Meetings', values: [true, true, true, true] },
        { name: 'Performance Reports', values: [true, true, true, true] },
        { name: 'Real-Time Analytics', values: [true, true, true, true] },
      ]
    },
    {
      title: 'Software Tools',
      features: [
        { name: 'EMR Software', values: [true, true, true, true] },
        { name: 'Practice Management Software', values: [true, true, true, true] },
        { name: 'Clearinghouse Software', values: [true, true, true, true] },
      ]
    },
    {
      title: 'Automation Built-In',
      features: [
        { name: 'Real-Time Eligibility Checks', values: [true, true, true, true] },
        { name: 'Automated Insurance Calls', values: [true, true, true, true] },
        { name: 'Document Management', values: [true, true, true, true] },
        { name: 'Lab and Pharmacy Integrations', values: [true, true, true, true] },
      ]
    },
    {
      title: 'Patient Engagement Suite',
      features: [
        { name: 'Patient Help Desk', values: [true, true, true, true] },
        { name: 'Patient Portal', values: [true, true, true, true] },
        { name: 'Tele-Health', values: [true, true, true, true] },
        { name: 'Electronic Statements', values: [true, true, true, true] },
        { name: 'AI Re-Scheduler', values: [true, true, true, true] },
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing | TransMedex</title>
        <meta name="description" content="View our flexible medical billing pricing plans tailored to your practice's monthly collections." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-slate-50 text-foreground font-sans">
        <Header />

        <main className="flex-grow pt-32 pb-20 px-4">
          
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Transparent Pricing That <span className="text-gradient-premium">Scales With You</span>
            </h1>
            <p className="text-lg text-slate-600">
              TransMedex helps practices boost revenue by up to 30%. Take advantage of efficient billing backed by industry pros without any hidden fees.
            </p>
          </div>

          <div className="mx-auto max-w-[1200px] w-full">
            
            {/* â•â• MOBILE VIEW: Stacked Cards â•â• */}
            <div className="block lg:hidden space-y-8">
              {plans.map((plan, pIdx) => (
                <div key={pIdx} className={`bg-white rounded-[2rem] border p-6 sm:p-8 relative ${plan.isPopular ? 'border-[#0da1df] ring-1 ring-[#0da1df] shadow-xl shadow-primary/10' : 'border-slate-200 shadow-sm'}`}>
                  {plan.isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0da1df] text-white text-[10px] sm:text-[11px] font-bold tracking-widest px-4 py-1 rounded-full uppercase shadow-md">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center border-b border-slate-100 pb-6 mb-6">
                    <h3 className={`text-lg sm:text-xl font-bold ${plan.isPopular ? 'text-[#0da1df]' : 'text-slate-900'}`}>{plan.name}</h3>
                    <p className="text-2xl sm:text-3xl font-extrabold text-gradient-premium mt-3">{plan.fee}</p>
                    <p className="text-xs font-semibold text-slate-400 mt-3 uppercase tracking-wider">Collections Volume</p>
                    <p className="text-sm font-bold text-slate-700 mt-1">{plan.collections}</p>
                  </div>
                  
                  <div className="space-y-6">
                    {sections.map((section, sIdx) => {
                      // Filter features to only show those that are included for this plan
                      // to save space on mobile, or just show them all with X/- marks.
                      return (
                        <div key={sIdx}>
                          <h4 className="font-bold text-slate-900 mb-3 bg-slate-50 px-3 py-1.5 rounded-lg text-sm">{section.title}</h4>
                          <ul className="space-y-3 px-1">
                            {section.features.map((feature, fIdx) => {
                              const val = feature.values[pIdx];
                              return (
                                <li key={fIdx} className="flex items-start gap-3 text-[13px] text-slate-600">
                                  {val === true || val === 'Yes' ? (
                                    <Check className="w-4 h-4 text-[#0da1df] shrink-0 mt-0.5" strokeWidth={3} />
                                  ) : (
                                    <span className="w-4 h-4 flex items-center justify-center text-slate-300 shrink-0 font-bold mt-0.5">-</span>
                                  )}
                                  <span className={val === true || val === 'Yes' ? 'font-medium text-slate-700' : 'text-slate-400'}>{feature.name}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* â•â• DESKTOP VIEW: Table â•â• */}
            <div className="hidden lg:block premium-card p-0 overflow-hidden relative z-0 border border-[#0da1df]/10">
              <div className="w-full p-12">
                
                {/* Table Header Grid */}
                <div className="grid grid-cols-5 gap-4 relative pb-6 border-b border-slate-100">
                  
                  {/* Top Left Header Box */}
                  <div className="col-span-1 pr-4 flex items-center">
                    <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 shadow-sm w-full">
                      <p className="text-[13px] text-slate-600 font-medium leading-relaxed">
                        Compare plans based on your monthly collections volume.
                      </p>
                    </div>
                  </div>

                  {/* Headers */}
                  {plans.map((plan, idx) => (
                    <div key={idx} className={`col-span-1 text-center flex flex-col items-center justify-end p-4 rounded-2xl relative transition-all duration-300 ${plan.isPopular ? 'bg-white shadow-xl shadow-primary/5 border border-primary/20 scale-105 z-10' : 'bg-white border border-transparent'}`}>
                      {plan.isPopular && (
                        <div className="absolute -top-3 bg-[#0da1df] text-white text-[11px] font-bold tracking-widest px-4 py-1 rounded-full uppercase shadow-md shadow-primary/20">
                          Most Popular
                        </div>
                      )}
                      <h3 className={`text-[15px] font-bold ${plan.isPopular ? 'text-[#0da1df]' : 'text-slate-900'}`}>{plan.name}</h3>
                      <p className={`text-xl font-extrabold mt-2 ${plan.isPopular ? 'text-gradient-premium' : 'text-slate-700'}`}>{plan.fee}</p>
                      <div className="mt-4 pt-4 border-t border-slate-100 w-full">
                        <p className="text-[12px] text-slate-400 font-medium uppercase tracking-wider">Collections Volume</p>
                        <p className="text-[13px] font-semibold text-slate-700 mt-1">{plan.collections}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Table Body */}
                <div className="mt-8 relative">
                  {/* Background column for highlighted plan */}
                  <div className="absolute top-0 bottom-0 left-[60%] w-[20%] bg-white/50 rounded-b-2xl border-x border-b border-primary/10 pointer-events-none -z-10 shadow-[0_15px_30px_-15px_rgba(131,45,112,0.05)]" />

                  {sections.map((section, sIdx) => (
                    <div key={sIdx} className="mb-10">
                      <h4 className="text-[14px] font-bold text-slate-900 mb-5 px-4 bg-slate-50 py-2 rounded-lg">{section.title}</h4>
                      <div className="space-y-4">
                        {section.features.map((feature, fIdx) => (
                          <div key={fIdx} className="grid grid-cols-5 items-center px-4 py-2 hover:bg-slate-50/50 rounded-lg transition-colors">
                            <div className="col-span-1 text-[13px] font-medium text-slate-600">{feature.name}</div>
                            {feature.values.map((val, vIdx) => (
                              <div key={vIdx} className="col-span-1 text-center flex justify-center">
                                {typeof val === 'string' ? (
                                  <span className="text-[13px] font-semibold text-slate-700">{val}</span>
                                ) : val ? (
                                  <Check className={`w-5 h-5 ${vIdx === 2 ? 'text-[#0da1df]' : 'text-slate-400'}`} strokeWidth={2.5} />
                                ) : (
                                  <span className="text-slate-300 font-bold">-</span>
                                )}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </main>

        {/* Smart Add-On Features */}
        <section className="bg-slate-900 py-24 px-4 relative overflow-hidden">
          {/* Subtle gradient orb for background */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0da1df]/20 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="mx-auto max-w-[1200px] relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Customize your Experience<br/>with Smart Add-On Features</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                Just add what makes sense. Get rid of what doesn't work. Plug these TransMedex features right into any plan to power up your revenue cycle.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOnFeatures.map((feature, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                  <h3 className="text-white font-bold text-lg mb-1">{feature.title}</h3>
                  <p className="text-primary-foreground/70 text-sm font-medium mb-4 uppercase tracking-wider">{feature.subtitle}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Appointment Booking */}
        <section className="py-24 px-4 bg-slate-50">
          <div className="mx-auto max-w-[1000px]">
            <div className="premium-card p-4 sm:p-8 md:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">Easily book your appointment.</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500"><Mail className="w-4 h-4 text-[#0da1df]"/> Email Address</label>
                  <input type="email" id="email" name="email" placeholder="Enter Your Email Address" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#0da1df] focus:ring-1 focus:ring-[#0da1df] text-sm transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500"><Phone className="w-4 h-4 text-[#0da1df]"/> Contact Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="Enter Your Contact Number" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#0da1df] focus:ring-1 focus:ring-[#0da1df] text-sm transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="date" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500"><Calendar className="w-4 h-4 text-[#0da1df]"/> Date of Appointment</label>
                  <input type="date" id="date" name="date" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#0da1df] focus:ring-1 focus:ring-[#0da1df] text-sm transition-all text-slate-600" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="city" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500"><Building className="w-4 h-4 text-[#0da1df]"/> City</label>
                  <select id="city" name="city" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#0da1df] focus:ring-1 focus:ring-[#0da1df] text-sm transition-all text-slate-600 appearance-none">
                    <option>Select Your City</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="zip" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500"><MapPin className="w-4 h-4 text-[#0da1df]"/> Zip Code</label>
                  <input type="text" id="zip" name="zip" placeholder="Enter Your Zip Code" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#0da1df] focus:ring-1 focus:ring-[#0da1df] text-sm transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="state" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500"><Globe className="w-4 h-4 text-[#0da1df]"/> State</label>
                  <select id="state" name="state" className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#0da1df] focus:ring-1 focus:ring-[#0da1df] text-sm transition-all text-slate-600 appearance-none">
                    <option>Select your State</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-10 flex justify-end">
                <Button className="premium-button-primary w-full md:w-auto h-12 text-[15px] px-8">
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-24 px-4 bg-white border-y border-slate-100">
          <div className="mx-auto max-w-[1000px] grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                Why Healthcare Providers Love Us
              </h2>
            </div>
            <div className="md:col-span-7 bg-slate-50 p-5 sm:p-8 rounded-[2rem] border border-slate-100 relative">
              <div className="absolute -top-4 -left-4 text-6xl text-[#0da1df]/20 font-serif leading-none">"</div>
              <p className="text-slate-600 text-lg leading-relaxed mb-8 relative z-10 font-medium italic">
                TransMedex truly saved my practice. Their expert billing support significantly reduced claim denials, improved cash flow, and allowed me to focus on what matters mostâ€”patient care. I genuinely feel more confident and in control.
              </p>
              <div className="border-t border-slate-200 pt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Dr. Sarah Mitchell</h4>
                  <p className="text-sm text-slate-500 mt-1">Family Physician</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-[#0da1df]"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-24 px-4 bg-slate-50 text-center">
          <div className="mx-auto max-w-3xl flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Custom Plans Have You Covered</h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Automate your billing process, increase practice earnings, and create better patient experiences with our powerful medical billing tools.
            </p>
            <Button className="premium-button-primary h-14 px-10 text-base">
              Submit Your Details <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default PricingPage;


