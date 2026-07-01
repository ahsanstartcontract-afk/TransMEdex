import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function RCMPage() {
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
        <title>Revenue Cycle Management (RCM) Services - TransMedex</title>
        <meta name="description" content="End-to-end RCM services optimizing every touchpoint in your revenue cycle. Reduce A/R days and improve cash flow with TransMedex." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="relative py-20 bg-[url('https://images.unsplash.com/photo-1460925895917-adf4198c838f?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-5xl mx-auto">
                <div className="backdrop-blur-sm bg-black/40 rounded-2xl p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    <div>
                      <h1 className="text-4xl md:text-5xl font-bold mb-4">Complete Revenue Cycle Management</h1>
                      <p className="text-lg opacity-90 mb-6">Full-service RCM solutions covering every step from patient intake to final collections, designed to reduce A/R days and accelerate cash flow.</p>
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
    <h3 className="text-2xl font-semibold mb-4 text-white">End-to-End RCM Solutions</h3>
    <ul className="space-y-4 text-white/80 text-lg">
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Patient registration and eligibility</li>
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Charge capture and coding</li>
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Claims submission and tracking</li>
        <li className="flex items-start gap-3"><span className="text-primary font-bold">✓</span> Payment posting and A/R management</li>
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
                  <h2 className="text-3xl font-bold mb-4">Integrated RCM From Start to Finish</h2>
                  <p className="text-muted-foreground mb-6">We manage the entire revenue cycle lifecycle: from pre-visit eligibility verification and real-time authorizations through final collections and patient account management. Our integrated platform ensures no revenue leaks.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Patient Access & Eligibility</h3>
                      <p className="text-sm text-muted-foreground">Real-time verification, pre-authorization requests, and patient responsibility estimation.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Charge Capture & Coding</h3>
                      <p className="text-sm text-muted-foreground">Complete charge documentation with accurate diagnosis and procedure codes.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Claims Management & Submission</h3>
                      <p className="text-sm text-muted-foreground">Automated scrubbing, claims tracking, payer follow-up, and status monitoring.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Denial Management & Appeals</h3>
                      <p className="text-sm text-muted-foreground">Systematic denial analysis, root-cause identification, and rapid appeals workflow.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Payment Processing & Reconciliation</h3>
                      <p className="text-sm text-muted-foreground">Payment posting, underpayment identification, and patient account reconciliation.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Patient Collections</h3>
                      <p className="text-sm text-muted-foreground">Professional patient billing, payment plans, and collection strategies.</p>
                    </div>
                  </div>
                </div>

                <aside className="bg-card rounded-2xl p-6 shadow border border-border">
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-primary">96%+</div>
                    <p className="text-sm text-muted-foreground">Clean claim rate</p>
                  </div>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-primary">38 days</div>
                    <p className="text-sm text-muted-foreground">Avg. DSO reduction</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">31%</div>
                    <p className="text-sm text-muted-foreground">Avg. collections increase</p>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section className="py-12 bg-secondary text-secondary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-6 text-center">RCM Expertise by Specialty</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { specialty: 'Multi-Specialty', focus: 'Coordinated billing across departments' },
                  { specialty: 'Hospital-Based', focus: 'Complex professional component billing' },
                  { specialty: 'Ambulatory Surgical', focus: 'Facility & provider fee schedules' },
                  { specialty: 'Behavioral Health', focus: 'Managed care & session-based billing' },
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
              <h3 className="text-xl font-semibold mb-6 text-center">EHR & Billing Platform Integration</h3>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
                {['eClinicalWorks','Athenahealth','Epic','NextGen','Cerner','Medidata'].map((name)=> (
                  <div key={name} className="flex items-center justify-center p-4 border rounded-md bg-background text-sm text-muted-foreground">
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-[#eef0ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-3xl font-bold mb-10 text-center text-slate-950">Trusted by Healthcare Organizations</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[{
                  name: 'David Foster', role: 'Practice CFO', quote: 'DSO dropped from 58 to 28 days in 6 months. The financial impact was immediate and measurable.' , initials: 'DF'
                },{
                  name: 'Maria Garcia', role: 'Operations Director', quote: 'Comprehensive reporting gave us visibility into cash flow bottlenecks. Game-changer for our practice.', initials: 'MG'
                },{
                  name: 'James Wilson', role: 'Finance Manager', quote: 'Exceptional support team and continuous optimization of our RCM workflows. Highly satisfied.', initials: 'JW'
                }].map((t, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">{t.initials}</div>
                      <div>
                        <div className="font-semibold text-slate-900">{t.name}</div>
                        <div className="text-sm text-slate-500">{t.role}</div>
                      </div>
                    </div>
                    <p className="text-slate-600 italic leading-relaxed">"{t.quote}"</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-3">Compliance & Data Security</h3>
                  <p className="text-sm text-muted-foreground">HIPAA compliance, SOC 2 Type II certification, and secure data handling across all RCM operations.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="p-4 border rounded-lg">HIPAA-aligned RCM workflows</div>
                  <div className="p-4 border rounded-lg">Encrypted claims transmission</div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="p-4 border rounded-lg">SOC 2 Type II certified</div>
                  <div className="p-4 border rounded-lg">Role-based access controls & audit trails</div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Common RCM Questions</h3>
              <div className="space-y-3">
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold">How long does RCM optimization take?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">Typically 60â€“90 days for full integration and optimization. Quick wins (claim scrubbing, appeals) show results within 30 days.</p>
                </details>
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold">What is Days Sales Outstanding (DSO)?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">DSO measures the average time between service delivery and payment receipt. Lower DSO = faster cash flow. We aim to reduce DSO by 30â€“40%.</p>
                </details>
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold">Can you manage multiple practices simultaneously?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">Yes â€” we manage multi-location practices and health networks, with centralized reporting and customized workflows per location.</p>
                </details>
              </div>
            </div>
          </section>

          <section className="py-12 bg-gradient-to-br from-primary to-[hsl(260,70%,50%)] text-primary-foreground">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Optimize Your Revenue Cycle Today</h2>
              <p className="mb-6 text-muted-foreground">Claim your free RCM analysis or Contact Us to see how we can reduce your DSO and improve cash flow.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg"><Link to="/contact">Request free RCM analysis</Link></Button>
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

export default RCMPage;
