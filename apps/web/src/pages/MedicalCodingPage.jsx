import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function MedicalCodingPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Contact Us request:', form);
    alert('Thanks — we received your request.');
  }

  return (
    <>
      
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="relative py-20 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-5xl mx-auto">
                <div className="backdrop-blur-sm bg-black/40 rounded-2xl p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    <div>
                      <h1 className="text-4xl md:text-5xl font-bold mb-4">Medical Coding & Clinical Documentation</h1>
                      <p className="text-lg opacity-90 mb-6">AAPC-certified coders who specialize in accurate ICD-10, CPT, and HCPCS coding to reduce denials and accelerate reimbursement.</p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button asChild size="lg" className="bg-primary text-primary-foreground">
                          <Link to="/contact">Contact Us</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
                          <a href="tel:+16097930400">Call +1 (609) 793-0400</a>
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
                        <Button type="submit" size="lg">Get free audit</Button>
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
                  <h2 className="text-3xl font-bold mb-4">Certified Coding That Drives Revenue</h2>
                  <p className="text-muted-foreground mb-6">Our AAPC-credentialed coders combine clinical knowledge with strict adherence to coding guidelines to ensure accurate, compliant coding that maximizes legitimate reimbursement.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Diagnostic Coding (ICD-10-CM)</h3>
                      <p className="text-sm text-muted-foreground">Precise diagnosis coding with full code specificity to reflect patient acuity and support medical necessity.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Procedural Coding (CPT/HCPCS)</h3>
                      <p className="text-sm text-muted-foreground">Accurate procedure and service coding with proper modifier application to prevent underbilling.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Documentation Review</h3>
                      <p className="text-sm text-muted-foreground">Detailed clinical documentation analysis to ensure codes are fully supported and compliant with payer policies.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Ongoing Audits & Updates</h3>
                      <p className="text-sm text-muted-foreground">Regular coding audits and annual training to maintain compliance with guideline changes.</p>
                    </div>
                  </div>
                </div>

                <aside className="bg-card rounded-2xl p-6 shadow border border-border">
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-primary">99%+</div>
                    <p className="text-sm text-muted-foreground">Coding accuracy & compliance</p>
                  </div>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-primary">72%</div>
                    <p className="text-sm text-muted-foreground">Avg. coding-related denial reduction</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">18 hrs</div>
                    <p className="text-sm text-muted-foreground">Avg. coding turnaround time</p>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section className="py-12 bg-secondary text-secondary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Coding Specialties</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { specialty: 'Orthopedics', focus: 'Complex surgical procedures & modifiers' },
                  { specialty: 'Cardiology', focus: 'Interventional & diagnostic coding' },
                  { specialty: 'Behavioral Health', focus: 'Psychiatry & psychotherapy modifiers' },
                  { specialty: 'Urology', focus: 'Endoscopic procedures & global packages' },
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
              <h3 className="text-xl font-semibold mb-6 text-center">EHR & Billing System Integration</h3>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
                {['eClinicalWorks', 'Athenahealth', 'NextGen', 'Epic', 'Cerner', 'Allscripts'].map((name) => (
                  <div key={name} className="flex items-center justify-center p-4 border rounded-md bg-background text-sm text-muted-foreground">
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </section>


          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-3">Compliance & Quality Standards</h3>
                  <p className="text-sm text-muted-foreground">AAPC credentials, annual audits, and continuous education ensure our team meets the highest standards.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="p-4 border rounded-lg">AAPC & AHIMA certified coders</div>
                  <div className="p-4 border rounded-lg">Annual guideline & regulation updates</div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="p-4 border rounded-lg">Quarterly coding audits & QA</div>
                  <div className="p-4 border rounded-lg">HIPAA-compliant secure workflows</div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Common Coding Challenges</h3>
              <div className="space-y-3">
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold">How do modifier applications impact reimbursement?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">Modifiers clarify services and can prevent denials or underpayment. We apply modifiers according to payer guidelines and CPT instructions.</p>
                </details>
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold">What is medical necessity coding?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">Diagnosis codes must support medical necessity for the services rendered. We ensure all diagnoses reflect the clinical documentation.</p>
                </details>
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold">How often do coding guidelines change?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">CPT codes update annually; ICD-10-CM updates semi-annually. Our team receives continuous training to maintain compliance.</p>
                </details>
              </div>
            </div>
          </section>

          <section className="py-12 bg-gradient-to-br from-primary to-[hsl(260,70%,50%)] text-primary-foreground">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Maximize Reimbursement with Expert Coding</h2>
              <p className="mb-6 text-muted-foreground">Claim your free coding audit or schedule a specialist Contact Us to review your coding workflow.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg"><Link to="/contact">Request free audit</Link></Button>
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

export default MedicalCodingPage;
