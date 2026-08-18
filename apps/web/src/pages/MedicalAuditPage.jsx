import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function MedicalAuditPage() {
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
          <section className="relative py-20 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-5xl mx-auto">
                <div className="backdrop-blur-sm bg-black/40 rounded-2xl p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    <div>
                      <h1 className="text-4xl md:text-5xl font-bold mb-4">Medical Billing Audits</h1>
                      <p className="text-lg opacity-90 mb-6">Comprehensive audits across coding, documentation, billing, and compliance to identify revenue leaks, prevent claim denials, and reduce regulatory risk before external audits occur.</p>
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
                      <h3 className="text-2xl font-semibold mb-4 text-white">Comprehensive Auditing</h3>
                      <ul className="space-y-4 text-white/80 text-lg">
                        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Identify undercoding and overcoding risks</li>
                        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Ensure OIG and Medicare compliance</li>
                        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Detailed revenue leakage analysis</li>
                        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Actionable feedback for providers</li>
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
                  <h2 className="text-3xl font-bold mb-4">Proactive Billing Audits Prevent Costly Issues</h2>
                  <p className="text-muted-foreground mb-6">We conduct comprehensive audits of your coding accuracy, documentation completeness, billing processes, and compliance protocols. Each audit identifies specific revenue leaks, denial patterns, and regulatory risks—with actionable recommendations to address findings before external auditors or payers conduct investigations.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Coding Accuracy Audits</h3>
                      <p className="text-sm text-muted-foreground">Comprehensive review of ICD-10, CPT, and modifier coding against clinical documentation and payer guidelines.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Documentation Completeness</h3>
                      <p className="text-sm text-muted-foreground">Assessment of clinical documentation to verify it adequately supports all codes assigned and billed.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Denial Root-Cause Analysis</h3>
                      <p className="text-sm text-muted-foreground">Detailed analysis of claim denials to identify patterns and underlying billing/coding issues.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Revenue Cycle Assessment</h3>
                      <p className="text-sm text-muted-foreground">End-to-end review from charge capture through collections to uncover process inefficiencies.</p>
                    </div>
                  </div>
                </div>

                <aside className="bg-card rounded-2xl p-6 shadow border border-border">
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-primary">$127K</div>
                    <p className="text-sm text-muted-foreground">Avg revenue recovered per audit</p>
                  </div>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-primary">83%</div>
                    <p className="text-sm text-muted-foreground">Compliance risk reduction</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">2-3</div>
                    <p className="text-sm text-muted-foreground">Weeks for comprehensive audit</p>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section className="py-12 bg-secondary text-secondary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Types of Medical Audits We Perform</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Coding Audits', desc: 'Diagnosis and procedure code accuracy per guidelines' },
                  { title: 'Documentation Audits', desc: 'Assessment of clinical documentation completeness' },
                  { title: 'Billing Process Audits', desc: 'Analysis of billing practices and error patterns' },
                  { title: 'Compliance Audits', desc: 'Evaluation of regulatory and payer policy adherence' },
                  { title: 'Revenue Cycle Audits', desc: 'Comprehensive RCM review from charge to collections' },
                  { title: 'Payer Audit Preparation', desc: 'Support for external audits by insurance companies' },
                ].map((s, i) => (
                  <div key={i} className="bg-white text-slate-900 p-6 rounded-xl shadow-md border border-slate-100">
                    <h4 className="font-semibold text-lg mb-2">{s.title}</h4>
                    <p className="text-sm text-slate-600">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-xl font-semibold mb-6 text-center">Specialty-Specific Audit Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
                {['Orthopedics', 'Cardiology', 'Behavioral Health', 'Primary Care', 'Urgent Care', 'Surgery'].map((name) => (
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
                  <h3 className="text-xl font-semibold mb-3">Audit Compliance & Reporting</h3>
                  <p className="text-sm text-muted-foreground">Detailed audit reports with findings, recommendations, and implementation roadmaps. Executive summaries for leadership and compliance documentation.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="p-4 border rounded-lg">Detailed audit reports with findings</div>
                  <div className="p-4 border rounded-lg">Actionable improvement recommendations</div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="p-4 border rounded-lg">Executive summary for leadership</div>
                  <div className="p-4 border rounded-lg">Implementation timeline & support</div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Medical Audit FAQs</h3>
              <div className="space-y-3">
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold">How often should we conduct billing audits?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">We recommend annual comprehensive audits for most practices, with quarterly spot-checks on high-volume areas. Practices with compliance issues may benefit from more frequent audits.</p>
                </details>
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold">What sample size is needed for a valid audit?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">Statistical validity typically requires 100-300 claims for small practices, 300-500 for larger practices. Larger samples provide more reliable findings across multiple specialties.</p>
                </details>
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold">What happens after the audit is completed?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">We provide a detailed report, executive summary, and recommendations. We recommend staff training on findings and tracking implementation of corrective actions.</p>
                </details>
              </div>
            </div>
          </section>

          <section className="py-12 bg-gradient-to-br from-primary to-[hsl(260,70%,50%)] text-primary-foreground">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Identify Revenue Recovery & Compliance Issues Today</h2>
              <p className="mb-6 text-secondary-foreground text-white">A comprehensive audit uncovers billing leaks and provides a roadmap for improvement. Schedule your audit now to maximize revenue and reduce regulatory risk.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg"><Link to="/contact">Schedule your audit</Link></Button>
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

export default MedicalAuditPage;
