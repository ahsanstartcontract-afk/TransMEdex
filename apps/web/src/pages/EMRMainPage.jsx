import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { 
  ShieldCheck, FileSearch, Cpu, Users, Award, 
  MonitorCheck, DollarSign, ClipboardList, Key, 
  Settings, Rocket, TrendingUp, PlayCircle 
} from 'lucide-react';

const emrPlatforms = [
  { name: 'ICANotes', path: '/emr/icanotes' },
  { name: 'AdvancedMD', path: '/emr/advancedmd' },
  { name: 'NextGen', path: '/emr/nextgen' },
  { name: 'prognoCIS', path: '/emr/prognocis' },
  { name: 'CareCloud', path: '/emr/carecloud' },
  { name: 'Epic', path: '/emr/epic' },
  { name: 'Allscripts', path: '/emr/allscripts' },
  { name: 'Kareo', path: '/emr/kareo' },
  { name: 'athenahealth', path: '/emr/athenahealth' },
  { name: 'Cerner', path: '/emr/cerner' },
  { name: 'mecisoft Clinical', path: '/emr/mecisoft' },
  { name: 'Office Ally', path: '/emr/office-ally' },
  { name: 'eClinicalWorks', path: '/emr/eclinicalworks' },
  { name: 'amazingcharts', path: '/emr/amazingcharts' },
  { name: 'practicefusion', path: '/emr/practicefusion' },
  { name: 'Altera', path: '/emr/altera' },
  { name: 'CollaborateMD', path: '/emr/collaboratemd' },
  { name: 'eMDs', path: '/emr/emds' },
  { name: 'Evident', path: '/emr/evident' },
  { name: 'FreeMED', path: '/emr/freemed' },
  { name: 'GE Healthcare', path: '/emr/ge-healthcare' },
  { name: 'Greenway Health', path: '/emr/greenway' },
  { name: 'MEDITECH', path: '/emr/meditech' },
  { name: 'medgen', path: '/emr/medgen' },
  { name: 'MEDHOST', path: '/emr/medhost' },
  { name: 'Mitochon', path: '/emr/mitochon' },
  { name: 'NEXTGEN HEALTHCARE', path: '/emr/nextgen-healthcare' },
  { name: 'NueMD', path: '/emr/nuemd' },
  { name: 'OpenEMR', path: '/emr/openemr' },
  { name: 'OpenMRS', path: '/emr/openmrs' },
  { name: 'ORACLE Cerner', path: '/emr/oracle-cerner' },
  { name: 'webchart', path: '/emr/webchart' },
  { name: 'ZipChart EMR', path: '/emr/zipchart' },
];

export default function EMRMainPage() {
  return (
    <div className="min-h-screen bg-[#f6f7ff] text-slate-950">
      <Helmet>
        <title>EMR Platforms We Support | TransMedex</title>
        <meta
          name="description"
          content="TransMedex supports dozens of top EMR and EHR platforms. Discover our medical billing solutions tailored to your software."
        />
      </Helmet>

      <Header />

      <main className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {/* EMR Platforms Grid Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] bg-white p-4 sm:p-10 shadow-xl text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-950 mb-4">
              What are the EMR Platforms We Support with Medical Billing Services?
            </h1>
            <p className="max-w-4xl mx-auto text-lg text-slate-600 mb-10">
              Our medical billing specialists support all of the following EHRs with their services. We help you submit clean claims no matter which EHR you use.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {emrPlatforms.map((platform, index) => (
                <Link
                  key={index}
                  to={platform.path}
                  className="flex items-center justify-center h-20 px-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <span className="font-semibold text-slate-700 text-center">
                    {platform.name}
                  </span>
                </Link>
              ))}
            </div>
          </motion.section>

          {/* Comparison Table Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[2rem] bg-[#0f172a] p-4 sm:p-10 text-white shadow-xl text-center"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Should Your Practice Keep Billing In-House or Outsource to EMR Billing Experts?
            </h2>
            <p className="max-w-4xl mx-auto text-[15px] leading-relaxed mb-10 text-white/90">
              Practices should outsource EMR billing services to cut operational costs by up to 30%, per MGMA benchmarks. In-house teams cost more and delay more. The comparison is not close.
            </p>

            <div className="overflow-x-auto max-w-5xl mx-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-white/30 p-4 font-semibold w-1/3">Factor</th>
                    <th className="border border-white/30 p-4 font-semibold w-1/3">In-House Billing</th>
                    <th className="border border-white/30 p-4 font-semibold w-1/3 text-slate-900 bg-[#0da1df]">Outsourced EMR Billing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-white/30 p-4 font-medium">Annual Cost Per Biller</td>
                    <td className="border border-white/30 p-4 text-white/90">$42,000 to $58,000 salary + benefits</td>
                    <td className="border border-white/30 p-4 text-slate-900 bg-[#0da1df] font-medium">Less than 5% of collections, no overhead</td>
                  </tr>
                  <tr>
                    <td className="border border-white/30 p-4 font-medium">Clean Claim Rate</td>
                    <td className="border border-white/30 p-4 text-white/90">75-85% industry average (MGMA)</td>
                    <td className="border border-white/30 p-4 text-slate-900 bg-[#0da1df] font-medium">99% first-pass acceptance rate</td>
                  </tr>
                  <tr>
                    <td className="border border-white/30 p-4 font-medium">AR Days</td>
                    <td className="border border-white/30 p-4 text-white/90">45 to 60+ days average</td>
                    <td className="border border-white/30 p-4 text-slate-900 bg-[#0da1df] font-medium">Under 25 days with dedicated AR follow-up</td>
                  </tr>
                  <tr>
                    <td className="border border-white/30 p-4 font-medium">Technology</td>
                    <td className="border border-white/30 p-4 text-white/90">Limited to EMR's native billing tools</td>
                    <td className="border border-white/30 p-4 text-slate-900 bg-[#0da1df] font-medium">AI agents that handle coding, payment posting, eligibility, and claim scrubbing</td>
                  </tr>
                  <tr>
                    <td className="border border-white/30 p-4 font-medium">Specialty Coding Depth</td>
                    <td className="border border-white/30 p-4 text-white/90">Generalist billers across all codes</td>
                    <td className="border border-white/30 p-4 text-slate-900 bg-[#0da1df] font-medium">AAPC-certified coders assigned by specialty</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-12">
              <Button asChild className="rounded-full px-8 py-4 bg-white text-[#0da1df] hover:bg-white/90 shadow-lg font-bold text-lg">
                <Link to="/contact">Get Free EMR Billing Quote</Link>
              </Button>
            </div>
          </motion.section>

          {/* What is Included Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] bg-[#0f172a] p-4 sm:p-10 text-white shadow-xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              What is Included in TransMedex's EMR Billing Support?
            </h2>
            <p className="max-w-4xl mx-auto text-[15px] leading-relaxed mb-10 text-white/90">
              TransMedex's EMR medical billing services cover every RCM stage from patient scheduling to final payment posting. Twelve core services run inside your existing EHR system.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, title: "Patient Eligibility Verification", text: "PEVA verifies insurance coverage, copays, and deductibles before every appointment. This AI agent for medical billing prevents denials to drop your rejection rate." },
                { icon: FileSearch, title: "Prior Authorization Management", text: "PAMA tracks authorization requirements by payer and CPT code. Aetna, UnitedHealth, and state Medicaid plans each get payer-specific protocols." },
                { icon: Cpu, title: "AI-Powered Medical Coding", text: "AAPC-certified coders assign specialty-specific codes inside your EHR. CODN cross-references CCI edits and LCD rules before submission." }
              ].map((item, i) => (
                <div key={i} className="bg-white text-slate-900 rounded-2xl p-5 sm:p-8 shadow-lg flex flex-col items-center">
                  <div className="h-16 w-16 bg-[#0da1df]/10 rounded-full flex items-center justify-center mb-6 text-[#0da1df]">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.text}</p>
                </div>
              ))}
            </div>
            
          </motion.section>

          {/* Why Do Practices Choose Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] bg-[#fdfafb] border border-slate-100 p-4 sm:p-10 shadow-xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-950 mb-4">
              Why Do Practices Choose TransMedex for EMR Billing Services?
            </h2>
            <p className="max-w-4xl mx-auto text-[15px] leading-relaxed mb-10 text-slate-600">
              Practices choose TransMedex for EMR medical billing services because we combine 1,500+ certified billers with AI agents inside over 40 EHR platforms. These reasons separate TransMedex from every competitor.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                { icon: Users, title: "Dedicated Account Team", text: "Your practice gets a named account manager, assigned billers, and specialty coders. Other medical billing companies rotate staff across accounts. TransMedex does not. Your team knows your payer mix, your modifier preferences, and your providers by name." },
                { icon: Award, title: "AAPC-Certified Billers and Coders", text: "TransMedex assigns billers by specialty, not randomly. Your cardiology claims go to cardiology-certified coders. Your psychiatry claims go to behavioral health specialists. This is why CODN produces a 99% coding accuracy rate." },
                { icon: MonitorCheck, title: "Support 40+ EHR Platforms", text: "Your practice keeps its current EHR. TransMedex's billers are trained on eClinicalWorks, AdvancedMD, NextGen, athenahealth, Kareo, Epic, Cerner, and 33 other platforms. No system migration. No learning curve on your end." },
                { icon: DollarSign, title: "Transparent Pricing Under 5% of Collections", text: "No onboarding fees. No long-term contracts. No hidden charges for credentialing or AR recovery. athenahealth charges 4 to 8% of revenue for its own RCM. TransMedex delivers deeper service coverage at a lower collection percentage." }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-slate-100">
                  <div className="h-12 w-12 bg-[#0da1df]/10 rounded-xl flex items-center justify-center mb-6 text-[#0da1df]">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Testimonials Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] bg-[#f9f9fc] p-4 sm:p-10 shadow-xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-950 mb-4">
              What Providers Say About TransMedex's EHR Billing Services?
            </h2>
            <p className="max-w-4xl mx-auto text-[15px] leading-relaxed mb-16 text-slate-600">
              Practices across every region and specialty have trusted TransMedex to recover revenue and bring order to their revenue cycle. Here is what some of them have to say.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  name: "Jackie Judd", 
                  title: "Practice Manager\nWilson Creek Internal Medicine", 
                  text: "As a practice manager, I was looking to streamline the medical billing process. I tried other companies, but they were all complicated and took too much of my time. Fortunately, I found TransMedex. They excel in tailoring solutions to fit my requirements.",
                  img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
                },
                { 
                  name: "Amber Vaughan", 
                  title: "Office Manager\nIdaho Kidney & Hypertension Institute", 
                  text: "We are a large practice with 14 providers. TransMedex has been working with us for the last 6 years. This billing company has been a great asset to us. I work with TransMedex and they provide everything I ask for. The team is friendly and very pleasant to work with.",
                  img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
                },
                { 
                  name: "Ashlee Rose", 
                  title: "Practice Manager\nHarding Memorial Healthcare", 
                  text: "We've been working with TransMedex for 8 years now and I just wanted to say how happy we are with their services. They always get back to us quickly and are very easy to work with. They got my AR paid in record time and help us to generate millions in revenue.",
                  img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80"
                }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-3xl p-5 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 flex flex-col items-center relative mt-10">
                  <img src={item.img} alt={item.name} className="h-24 w-24 rounded-full object-cover absolute -top-12 border-4 border-white shadow-md" />
                  <div className="mt-12 text-center">
                    <h3 className="text-xl font-bold text-[#0da1df]">{item.name}</h3>
                    <p className="text-sm font-medium text-slate-500 whitespace-pre-line mt-1">{item.title}</p>
                    <div className="text-[#0da1df] text-4xl leading-none mt-4 font-serif">"</div>
                    <p className="text-slate-600 leading-relaxed text-sm mt-2 mb-8">{item.text}</p>
                  </div>
                  <div className="mt-auto w-full">
                    <Button className="w-full rounded-full bg-[#0da1df] hover:bg-[#0369a1] text-white flex items-center justify-center gap-2 px-6">
                      <PlayCircle className="h-5 w-5" /> Watch Video
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* How Do Services Work Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] bg-[#fdfafb] border border-slate-100 p-4 sm:p-10 shadow-xl text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-950 mb-4">
              How Do TransMedex's EHR/EMR Billing Services Work?
            </h2>
            <p className="max-w-4xl mx-auto text-[15px] leading-relaxed mb-12 text-slate-600">
              TransMedex's five-step process puts certified billers inside your EHR within 14 days. No data migration. Your system stays exactly where it is with our EHR billing services.
            </p>

            <div className="max-w-5xl mx-auto space-y-6 text-left">
              {[
                { step: "Step 1.", title: "Onboarding & Discovery", icon: ClipboardList, text: "Your dedicated account manager conducts a full billing audit during the first Contact Us. We review your specialty mix, payer contracts, denial patterns, and current AR aging. This audit identifies revenue leaks before a single claim is touched." },
                { step: "Step 2.", title: "System Access & Credentialing", icon: Key, text: "TransMedex billers receive HIPAA-compliant access directly inside your EHR through encrypted login credentials. We operate within eClinicalWorks, AdvancedMD, NextGen, athenahealth, or any of 40+ supported platforms. No third-party software sits between your staff and our team." },
                { step: "Step 3.", title: "Workflow Customization", icon: Settings, text: "We build custom SOPs mapped to your EHR's specific modules. eClinicalWorks practices get OpenConnect-aligned workflows. AdvancedMD practices get ClaimInspector rule configurations. Every workflow matches your payer mix and specialty requirements." },
                { step: "Step 4.", title: "Go-Live", icon: Rocket, text: "Claims processing begins with real-time QA checks on every submission. Your first batch runs through TransMedex's internal scrubbing layer before hitting your EHR's native clearinghouse. Charge posting, eligibility verification, and claim transmission start on day one of go-live." },
                { step: "Step 5.", title: "Ongoing Optimization", icon: TrendingUp, text: "Monthly KPI reviews track clean claim rates, denial trends, and AR days against MGMA benchmarks. Your billing team adjusts payer-specific rules, modifier logic, and coding patterns based on live performance data. This is not a set-and-forget service." }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col sm:flex-row">
                  <div className="bg-[#0f172a] text-white p-4 md:w-32 flex-shrink-0 flex items-center justify-center md:justify-start font-bold text-lg rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl">
                    {item.step}
                  </div>
                  <div className="p-6 flex items-start gap-4 flex-grow">
                    <div className="h-10 w-10 bg-[#0da1df]/10 rounded-full flex items-center justify-center flex-shrink-0 text-[#0da1df] mt-1">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}


