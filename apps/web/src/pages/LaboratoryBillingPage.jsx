import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function LaboratoryBillingPage() {
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
          <section className="relative py-20 bg-[url('https://images.unsplash.com/photo-1576091160597-112458c1e65a?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-5xl mx-auto">
                <div className="backdrop-blur-sm bg-black/40 rounded-2xl p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    <div>
                      <h1 className="text-4xl md:text-5xl font-bold mb-4">Laboratory Billing Services</h1>
                      <p className="text-lg opacity-90 mb-6">Specialized billing for reference laboratories, hospital labs, and pathology services. We master complex CPT/HCPCS coding, LCD compliance, and medical necessity documentation for maximum reimbursement.</p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button asChild size="lg" className="bg-primary text-primary-foreground">
                          <Link to="/contact">Contact Us</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
                          <a href="tel:+16097930400">Call +1 (609) 793-0400</a>
                        </Button>
                      </div>
                    </div>

                    <div className="bg-white/10 rounded-2xl p-6 border border-white/20 backdrop-blur-md h-full flex flex-col justify-center">
                      <h3 className="text-2xl font-semibold mb-4 text-white">Laboratory Billing Expertise</h3>
                      <ul className="space-y-4 text-white/80 text-lg">
                        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Accurate CPT coding for lab tests</li>
                        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Fast turnaround for high-volume claims</li>
                        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Managing complex prior authorizations</li>
                        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Seamless LIS integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="col-span-2">
                  <h2 className="text-3xl font-bold mb-4">Complex Laboratory Coding Expertise</h2>
                  <p className="text-muted-foreground mb-6">Laboratory billing requires in-depth knowledge of CPT and HCPCS codes, Medicare Local Coverage Determinations, medical necessity requirements, and panel/profile billing rules. We ensure every test is coded accurately and complies with payer policies.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Specialty CPT/HCPCS Coding</h3>
                      <p className="text-sm text-muted-foreground">Complex esoteric tests, rare genetic panels, and methodology-specific codes with accuracy tracking.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Medicare LCD Compliance</h3>
                      <p className="text-sm text-muted-foreground">Real-time monitoring of Local Coverage Determination updates and medical necessity requirements.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Medical Necessity Verification</h3>
                      <p className="text-sm text-muted-foreground">Ensure documentation supports billing and prevents pre-service denial notification (ABN) issues.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Panel & Profile Billing Optimization</h3>
                      <p className="text-sm text-muted-foreground">Strategic bundling and unbundling per payer guidelines to maximize legitimate reimbursement.</p>
                    </div>
                  </div>
                </div>

                <aside className="bg-card rounded-2xl p-6 shadow border border-border">
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-primary">94%</div>
                    <p className="text-sm text-muted-foreground">Lab billing accuracy rate</p>
                  </div>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-primary">31%</div>
                    <p className="text-sm text-muted-foreground">Avg reimbursement increase</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">68%</div>
                    <p className="text-sm text-muted-foreground">LCD-related denial reduction</p>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section className="py-12 bg-secondary text-secondary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Laboratory Services We Support</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { service: 'Reference Labs', focus: 'Specialized esoteric testing & rare disease diagnostics' },
                  { service: 'Hospital Labs', focus: 'Inpatient and outpatient laboratory services' },
                  { service: 'Pathology Services', focus: 'Anatomic, clinical pathology, and surgical pathology' },
                  { service: 'Genetic Testing', focus: 'Complex genetic panels and molecular diagnostics' },
                ].map((s, i) => (
                  <div key={i} className="bg-white text-slate-900 p-6 rounded-xl shadow-md border border-slate-100">
                    <h4 className="font-semibold text-lg mb-2">{s.service}</h4>
                    <p className="text-sm text-slate-600">{s.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-xl font-semibold mb-6 text-center">CAP/CLIA Compliance & Certifications</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                {['CAP Certification', 'CLIA Compliant', 'Medicare Approved', 'State Licensed'].map((name) => (
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
                  <h3 className="text-xl font-semibold mb-3">Laboratory Compliance Standards</h3>
                  <p className="text-sm text-muted-foreground">Full CAP/CLIA compliance with HIPAA audit trails, quality assurance, and accurate medical necessity documentation.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="p-4 border rounded-lg">CAP-accredited billing practices</div>
                  <div className="p-4 border rounded-lg">CLIA-compliant coding protocols</div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="p-4 border rounded-lg">Medicare LCD monitoring service</div>
                  <div className="p-4 border rounded-lg">Quarterly compliance reporting</div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Laboratory Billing FAQs</h3>
              <div className="space-y-3">
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold">What is a Local Coverage Determination (LCD) and why does it matter?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">An LCD is a Medicare policy that defines coverage, medical necessity, and coding requirements for specific tests in your region. Billing outside LCD guidelines results in automatic denials.</p>
                </details>
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold">When do I need to send an Advance Beneficiary Notice (ABN)?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">An ABN must be provided when a test lacks medical necessity per LCD guidelines or is likely to be denied. Proper ABN documentation allows patient liability if denial occurs.</p>
                </details>
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold">How do panel codes differ from billing individual tests?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">Panel codes bundle multiple related tests at a bundled rate. Strategic panel coding vs. component billing optimizes reimbursement while maintaining compliance.</p>
                </details>
              </div>
            </div>
          </section>

          <section className="py-12 bg-gradient-to-br from-primary to-[hsl(260,70%,50%)] text-primary-foreground">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Maximize Laboratory Revenue & Ensure Compliance</h2>
              <p className="mb-6 text-secondary-foreground text-white">Partner with experts who understand esoteric testing, LCD compliance, and medical necessity requirements for optimal reimbursement.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg"><Link to="/contact">Schedule lab billing audit</Link></Button>
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

export default LaboratoryBillingPage;
