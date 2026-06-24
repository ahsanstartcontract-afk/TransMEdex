import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function MedicalBillingPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // replace with real submission logic later
    console.log('Contact Us request:', form);
    alert('Thanks â€” we received your request.');
  }

  const benefits = [
    'Increase collections by up to 40%',
    'Reduce claim denials to under 5%',
    'Faster reimbursement cycles',
    'Dedicated billing specialists',
    'Real-time reporting and analytics',
    'HIPAA-compliant processes'
  ];

  const process = [
    {
      step: '1',
      title: 'Patient registration',
      description: 'We verify insurance eligibility and collect accurate patient information upfront.'
    },
    {
      step: '2',
      title: 'Charge capture',
      description: 'Our team ensures all services are properly documented and coded for billing.'
    },
    {
      step: '3',
      title: 'Claim submission',
      description: 'Claims are scrubbed for errors and submitted electronically within 24 hours.'
    },
    {
      step: '4',
      title: 'Payment posting',
      description: 'We post payments, identify underpayments, and manage patient statements.'
    },
    {
      step: '5',
      title: 'Denial management',
      description: 'Denied claims are analyzed, corrected, and resubmitted promptly.'
    },
    {
      step: '6',
      title: 'Reporting',
      description: 'Receive detailed monthly reports on your practice\'s financial performance.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Medical Billing Services - TransMedex</title>
        <meta name="description" content="Professional medical billing services that maximize reimbursements and reduce claim denials. Increase collections by up to 40% with TransMedex." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="relative py-20 bg-[url('https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-5xl mx-auto">
                <div className="backdrop-blur-sm bg-black/40 rounded-2xl p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    <div>
                      <h1 className="text-4xl md:text-5xl font-bold mb-4">Medical Billing and Coding Services</h1>
                      <p className="text-lg opacity-90 mb-6">End-to-end billing, denial prevention, and transparent reporting so you can focus on patient care while we optimize your revenue.</p>
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
                        <Button type="submit" size="lg">Contact Us</Button>
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
                    <h2 className="text-3xl font-bold mb-4">End-to-End Medical Billing & Coding</h2>
                    <p className="text-muted-foreground mb-6">Our offering covers everything from patient intake and eligibility verification to claim submission, denials management, and reconciliations.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold mb-2">Patient Intake & Eligibility</h3>
                        <p className="text-sm text-muted-foreground">Verify coverage, collect patient demographics, and streamline front-desk workflows.</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold mb-2">Charge Capture & Coding</h3>
                        <p className="text-sm text-muted-foreground">Accurate CPT/ICD coding with double-review to reduce rejections.</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold mb-2">Claims Scrubbing & Submission</h3>
                        <p className="text-sm text-muted-foreground">Automated and manual edits before submitting claims to payers.</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h3 className="font-semibold mb-2">Denial Management</h3>
                        <p className="text-sm text-muted-foreground">Root-cause denial analysis and rapid appeals workflow.</p>
                      </div>
                    </div>
                  </div>

                  <aside className="bg-card rounded-2xl p-6 shadow border border-border">
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-primary">98%</div>
                      <p className="text-sm text-muted-foreground">First-pass acceptance</p>
                    </div>
                    <div className="mb-4">
                      <div className="text-4xl font-bold text-primary">24 hrs</div>
                      <p className="text-sm text-muted-foreground">Avg. claim submission time</p>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-primary">35%</div>
                      <p className="text-sm text-muted-foreground">Average increase in collections</p>
                    </div>
                  </aside>
                </div>
              </div>
            </section>

            <section className="py-12 bg-secondary text-secondary-foreground">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Our 5-Step Billing & Coding Workflow</h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                  {[
                    { title: 'Intake', desc: 'Eligibility & registration' },
                    { title: 'Capture', desc: 'Complete documentation' },
                    { title: 'Code', desc: 'Accurate CPT/ICD coding' },
                    { title: 'Submit', desc: 'Clean claims to payers' },
                    { title: 'Resolve', desc: 'Denials & AR recovery' },
                  ].map((s, i) => (
                    <div key={i} className="bg-white text-slate-900 p-6 rounded-xl shadow-md border border-slate-100 text-center hover:shadow-lg transition-shadow">
                      <div className="w-14 h-14 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center font-bold mb-4">{i + 1}</div>
                      <h4 className="font-semibold text-lg mb-2">{s.title}</h4>
                      <p className="text-sm text-slate-600">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-12 bg-white">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Free Medical Billing Audit</h2>
                <p className="mb-6 text-muted-foreground">Request a complimentary audit â€” weâ€™ll review 30 claims and identify missed revenue opportunities and coding issues.</p>
                <Button asChild size="lg"><Link to="/contact">Claim your free audit</Link></Button>
              </div>
            </section>

          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Why choose our billing services?</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Our medical billing experts use proven strategies and advanced technology to ensure your practice receives maximum reimbursement for every service provided. We handle the complexity so you don't have to.
                  </p>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-card rounded-2xl p-8 shadow-xl border border-border"
                >
                  <div className="space-y-6">
                    <div>
                      <div className="text-5xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>98.7%</div>
                      <p className="text-muted-foreground">First-pass claim acceptance rate</p>
                    </div>
                    <div>
                      <div className="text-5xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>34%</div>
                      <p className="text-muted-foreground">Average increase in collections</p>
                    </div>
                    <div>
                      <div className="text-5xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>24hrs</div>
                      <p className="text-muted-foreground">Average claim submission time</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-secondary text-secondary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our billing process</h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
                  A streamlined workflow designed to maximize efficiency and revenue.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {process.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-background rounded-xl p-6 border border-border"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-[hsl(210,100%,50%)] flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-primary-foreground">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-gradient-to-br from-primary to-[hsl(210,100%,50%)] text-primary-foreground">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to improve your revenue cycle?</h2>
                <p className="text-xl mb-8 opacity-95 leading-relaxed">
                  Let our billing experts handle the complexity while you focus on providing excellent patient care.
                </p>
                <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90 transition-all duration-200 active:scale-[0.98]">
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </section>

          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-xl font-semibold mb-6 text-center">We integrate with leading EHRs</h3>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
                {['eClinicalWorks','Athenahealth','NextGen','CareCloud','Epic','Cerner'].map((name)=> (
                  <div key={name} className="flex items-center justify-center p-4 border rounded-md bg-background text-sm text-muted-foreground">
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-[#eef0ff]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-3xl font-bold mb-10 text-center text-slate-950">Trusted by healthcare providers</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[{
                  name: 'Jackie Judd', role: 'Practice Manager', quote: 'Their team delivered measurable improvement to our AR and reduced denials through targeted remediation.' , initials: 'JJ'
                },{
                  name: 'Amber Vaughan', role: 'Clinic Director', quote: 'Clear operational ownership, timely reporting, and a collaborative transition process.', initials: 'AV'
                },{
                  name: 'Ashlee Roca', role: 'Billing Lead', quote: 'The structured denial playbook and appeals support materially improved our cashflow.', initials: 'AR'
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
                    <div className="mt-6">
                      <Button asChild variant="outline"><Link to="/contact">Schedule a call</Link></Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold mb-3">Compliance & Security</h3>
                  <p className="text-sm text-muted-foreground">We maintain strict controls and third-party audits to protect patient data and ensure regulatory compliance.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="p-4 border rounded-lg">HIPAA-aligned policies & procedures</div>
                  <div className="p-4 border rounded-lg">Encrypted data storage & TLS in transit</div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="p-4 border rounded-lg">ISO 27001 controls</div>
                  <div className="p-4 border rounded-lg">Role-based access & audit logs</div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
              <div className="space-y-3">
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold">Are you HIPAA compliant?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">Yes â€” we follow HIPAA best practices and use secure, encrypted systems for PHI.</p>
                </details>
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold">How long does onboarding take?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">Typical onboarding is 2â€“6 weeks depending on practice size and EHR integration needs.</p>
                </details>
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold">Do you support specialty practices?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">Yes â€” we work across many specialties including cardiology, orthopedics, urology, and behavioral health.</p>
                </details>
              </div>
            </div>
          </section>

          <section className="py-12 bg-gradient-to-br from-primary to-[hsl(260,70%,50%)] text-primary-foreground">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to transform your billing process?</h2>
              <p className="mb-6 text-muted-foreground">Claim your free audit or schedule a discovery call to see a custom roadmap for your practice.</p>
              <div className="flex items-center justify-center gap-4">
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

export default MedicalBillingPage;
