import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function PatientBenefitsEligibilityPage() {
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
        <title>Patient Benefits & Eligibility Verification - TransMedex</title>
        <meta name="description" content="Real-time patient eligibility verification and benefits checking. Reduce denials with accurate insurance verification before service delivery." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="relative py-20 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-5xl mx-auto">
                <div className="backdrop-blur-sm bg-black/40 rounded-2xl p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 items-start">
                    <div>
                      <h1 className="text-4xl md:text-5xl font-bold mb-4">Patient Benefits & Eligibility Verification</h1>
                      <p className="text-lg opacity-90 mb-6">Real-time eligibility verification and benefits checking to confirm coverage, deductibles, copays, and coinsurance before patient visitsâ€”preventing claim denials and billing disputes.</p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button asChild size="lg" className="bg-primary text-primary-foreground">
                          <Link to="/contact">Contact Us</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900">
                          <a href="tel:+16097930400">Call +1 (609) 793-0400</a>
                        </Button>
                      </div>
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
                  <h2 className="text-3xl font-bold mb-4">Comprehensive Patient Eligibility Management</h2>
                  <p className="text-muted-foreground mb-6">We verify eligibility and benefits in real-time at point-of-service, capturing insurance details, patient responsibility estimates, and pre-authorization requirements to ensure accurate billing and informed patient communication.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Real-Time Eligibility Verification</h3>
                      <p className="text-sm text-muted-foreground">Instant access to current patient coverage, active dates, and plan changes before service delivery.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Benefits Detail Capture</h3>
                      <p className="text-sm text-muted-foreground">Deductible status, copay amounts, coinsurance percentages, and out-of-pocket maximums.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Pre-Authorization Management</h3>
                      <p className="text-sm text-muted-foreground">Identify authorization requirements and submit requests proactively before service.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Patient Responsibility Estimation</h3>
                      <p className="text-sm text-muted-foreground">Calculate patient liability based on plan design and communicate expectations clearly.</p>
                    </div>
                  </div>
                </div>

                <aside className="bg-card rounded-2xl p-6 shadow border border-border">
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-primary">87%</div>
                    <p className="text-sm text-muted-foreground">Reduction in eligibility-related denials</p>
                  </div>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-primary">92%</div>
                    <p className="text-sm text-muted-foreground">Upfront patient cost collection</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">24/7</div>
                    <p className="text-sm text-muted-foreground">Available real-time verification</p>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section className="py-12 bg-secondary text-secondary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Payer Network Coverage</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { coverage: 'Commercial Plans', focus: 'Major insurers & regional health plans' },
                  { coverage: 'Medicare', focus: 'Original & Medicare Advantage plans' },
                  { coverage: 'Medicaid', focus: 'State-specific managed care & fee-for-service' },
                  { coverage: 'Other Programs', focus: 'TRICARE, VA, Workers Comp & more' },
                ].map((s, i) => (
                  <div key={i} className="bg-white text-slate-900 p-6 rounded-xl shadow-md border border-slate-100">
                    <h4 className="font-semibold text-lg mb-2">{s.coverage}</h4>
                    <p className="text-sm text-slate-600">{s.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-xl font-semibold mb-6 text-center">EHR & Practice Management Integration</h3>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
                {['eClinicalWorks','Athenahealth','Epic','NextGen','Cerner','Medispan'].map((name)=> (
                  <div key={name} className="flex items-center justify-center p-4 border rounded-md bg-background text-sm text-muted-foreground">
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-[#eef0ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-3xl font-bold mb-10 text-center text-slate-950">Patient Eligibility Success Stories</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[{
                  name: 'Maria Santos', role: 'Hospital Billing Manager', quote: 'Reduced eligibility-related claim denials by 80%. Same-day patient responsibility collection improved collection rates.' , initials: 'MS'
                },{
                  name: 'David Park', role: 'Clinic Operations Director', quote: 'Real-time benefits verification streamlined our front desk workflow. Better patient communication and satisfaction.',initials: 'DP'
                },{
                  name: 'Susan Miller', role: 'Revenue Cycle Director', quote: 'Fewer claim rejections and better upfront collections. Measurable impact on cash flow and DSO.' , initials: 'SM'
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
                  <h3 className="text-xl font-semibold mb-3">Data Security & Compliance</h3>
                  <p className="text-sm text-muted-foreground">HIPAA compliance, SOC 2 certification, and encrypted data transmission for all patient eligibility information.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="p-4 border rounded-lg">HIPAA-compliant eligibility queries</div>
                  <div className="p-4 border rounded-lg">SOC 2 Type II certified platform</div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="p-4 border rounded-lg">Encrypted data transmission</div>
                  <div className="p-4 border rounded-lg">PCI-DSS compliant payment handling</div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Patient Eligibility FAQs</h3>
              <div className="space-y-3">
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold">What data do you capture in eligibility verification?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">We retrieve coverage status, effective dates, deductible status, copay/coinsurance, out-of-pocket limits, pre-auth requirements, and plan exclusions.</p>
                </details>
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold">How quickly is eligibility verified?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">Most verifications are real-time (seconds). Some plans may require batch processing (typically within 24 hours).</p>
                </details>
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold">Does verification prevent all denials?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">Eligibility verification prevents 80â€“87% of denial reasons. Combined with accurate coding and billing, it eliminates most preventable denials.</p>
                </details>
              </div>
            </div>
          </section>

          <section className="py-12 bg-gradient-to-br from-primary to-[hsl(260,70%,50%)] text-primary-foreground">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Reduce Denials & Improve Collections with Eligibility Verification</h2>
              <p className="mb-6 text-muted-foreground">Request a demo of our real-time eligibility platform or Contact Us to see how we can reduce your denial rate.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg"><Link to="/contact">Request platform demo</Link></Button>
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

export default PatientBenefitsEligibilityPage;
