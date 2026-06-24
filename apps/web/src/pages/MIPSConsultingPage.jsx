import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function MIPSConsultingPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '' });

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
        <title>MIPS Consulting & Compliance Services - TransMedex</title>
        <meta name="description" content="MIPS consulting, performance reporting, and improvement activities. Avoid payment penalties while improving quality metrics with TransMedex." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="relative py-20 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-5xl mx-auto">
                <div className="backdrop-blur-sm bg-black/40 rounded-2xl p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    <div>
                      <h1 className="text-4xl md:text-5xl font-bold mb-4">MIPS Consulting & Compliance</h1>
                      <p className="text-lg opacity-90 mb-6">Strategic MIPS consulting to optimize performance scores, complete improvement activities, and avoid downward payment adjustments under the Quality Payment Program.</p>
                      <div className="flex gap-3">
                        <Button asChild size="lg" className="bg-primary text-primary-foreground">
                          <Link to="/contact">Contact Us</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
                          <a href="tel:+16097930400">Call (609) 793-0400</a>
                        </Button>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="bg-white text-black rounded-xl p-6 shadow-lg">
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First name" className="col-span-1 p-3 border rounded" />
                        <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last name" className="col-span-1 p-3 border rounded" />
                      </div>
                      <div className="grid grid-cols-1 gap-3 mb-3">
                        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="p-3 border rounded" />
                        <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="p-3 border rounded" />
                      </div>
                      <div className="flex gap-2">
                        <Button type="submit" size="lg">Get MIPS review</Button>
                        <Button asChild size="lg" variant="outline"><Link to="/contact">More options</Link></Button>
                      </div>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="col-span-2">
                  <h2 className="text-3xl font-bold mb-4">Comprehensive MIPS Strategy & Execution</h2>
                  <p className="text-muted-foreground mb-6">We provide end-to-end MIPS support: performance category selection, measure selection, improvement activity planning, EHR implementation guidance, and quarterly reporting to CMS to maximize your final score and avoid penalties.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Performance Category Assessment</h3>
                      <p className="text-sm text-muted-foreground">Evaluate Merit-based Incentive Payment System (MIPS) vs. Advanced APM eligibility based on practice size and revenue.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Measure Selection & Planning</h3>
                      <p className="text-sm text-muted-foreground">Strategic selection of quality and cost measures aligned with your specialty and operational capabilities.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Improvement Activity Completion</h3>
                      <p className="text-sm text-muted-foreground">Documentation and attestation of improvement activities to meet MIPS scoring requirements.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">CMS Reporting & Optimization</h3>
                      <p className="text-sm text-muted-foreground">Accurate quarterly and annual performance data submission to maximize final MIPS score.</p>
                    </div>
                  </div>
                </div>

                <aside className="bg-card rounded-2xl p-6 shadow border border-border">
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-primary">45%</div>
                    <p className="text-sm text-muted-foreground">Avg. MIPS score improvement</p>
                  </div>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-primary">0%</div>
                    <p className="text-sm text-muted-foreground">Payment penalties avoided</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">99%</div>
                    <p className="text-sm text-muted-foreground">CMS compliance rate</p>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section className="py-12 bg-secondary text-secondary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-6 text-center">MIPS Program Expertise by Specialty</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { specialty: 'Primary Care', focus: 'Preventive care & chronic disease management' },
                  { specialty: 'Orthopedics', focus: 'Surgical outcomes & patient safety measures' },
                  { specialty: 'Cardiology', focus: 'Heart disease management & quality metrics' },
                  { specialty: 'Behavioral Health', focus: 'Mental health outcomes & treatment compliance' },
                ].map((s, i) => (
                  <div key={i} className="bg-white text-slate-900 p-6 rounded-xl shadow-md border border-slate-100">
                    <h4 className="font-semibold text-lg mb-2">{s.specialty}</h4>
                    <p className="text-sm text-slate-600">{s.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-xl font-semibold mb-6 text-center">EHR & Data Platform Integration</h3>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
                {['eClinicalWorks','Epic','Cerner','Athenahealth','NextGen','Medidata'].map((name)=> (
                  <div key={name} className="flex items-center justify-center p-4 border rounded-md bg-background text-sm text-muted-foreground">
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-[#eef0ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-3xl font-bold mb-10 text-center text-slate-950">MIPS Success with TransMedex</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[{
                  name: 'Dr. Kevin Walsh', role: 'Primary Care Practice Owner', quote: 'MIPS score increased from 52 to 89. Avoided payment penalty and earned incentive bonus.' , initials: 'KW'
                },{
                  name: 'Jennifer Lopez', role: 'Practice Compliance Officer', quote: 'Clear roadmap for MIPS compliance. Expert guidance on measure selection and reporting.',initials: 'JL'
                },{
                  name: 'Marcus Thompson', role: 'Cardiology Practice CFO', quote: 'Transparent pricing, reliable reporting, and proactive CMS communication. Excellent partner.' , initials: 'MT'
                }].map((t, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">{t.initials}</div>
                      <div>
                        <div className="font-semibold text-slate-900">{t.name}</div>
                        <div className="text-sm text-slate-500">{t.role}</div>
                      </div>
                    </div>
                    <p className="text-slate-600 italic leading-relaxed">&quot;{t.quote}&quot;</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-3">Compliance & Documentation</h3>
                  <p className="text-sm text-muted-foreground">Full audit trail, HIPAA compliance, and CMS-aligned reporting documentation.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="p-4 border rounded-lg">CMS Quality Reporting System (QRS) expertise</div>
                  <div className="p-4 border rounded-lg">Annual MIPS performance audits</div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="p-4 border rounded-lg">HIPAA-compliant data handling</div>
                  <div className="p-4 border rounded-lg">Real-time performance tracking</div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-2xl font-bold mb-6 text-center">MIPS Program FAQs</h3>
              <div className="space-y-3">
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold">What is MIPS and who is eligible?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">MIPS (Merit-based Incentive Payment System) is part of CMS Quality Payment Program. Most clinicians with &gt;$90K Medicare revenue are subject to MIPS reporting requirements.</p>
                </details>
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold">What happens if I don't report MIPS?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">Non-reporting results in a downward payment adjustment (penalty) of up to 9%. Reporting, even with a lower score, helps avoid penalties.</p>
                </details>
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold">How is the MIPS score calculated?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">MIPS combines performance categories: Quality (30%), Cost (15%), Improvement Activities (15%), and Promoting Interoperability (25%). Total: 100 points.</p>
                </details>
              </div>
            </div>
          </section>

          <section className="py-12 bg-gradient-to-br from-primary to-[hsl(260,70%,50%)] text-primary-foreground">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Maximize Your MIPS Performance & Avoid Penalties</h2>
              <p className="mb-6 text-muted-foreground">Get expert guidance on measure selection, improvement activities, and CMS reporting to optimize your MIPS score.</p>
              <div className="flex items-center justify-center gap-4">
                <Button asChild size="lg"><Link to="/contact">Get MIPS strategy session</Link></Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900"><Link to="/contact">Schedule call</Link></Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default MIPSConsultingPage;
