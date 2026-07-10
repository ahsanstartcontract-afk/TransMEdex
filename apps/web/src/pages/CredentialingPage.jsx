import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function CredentialingPage() {
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
      <Helmet>
        <title>Provider Credentialing Services - TransMedex</title>
        <meta name="description" content="Fast, accurate provider credentialing with 150+ insurance networks. Get in-network status quickly to start billing and receiving reimbursements." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="relative py-20 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-5xl mx-auto">
                <div className="backdrop-blur-sm bg-black/40 rounded-2xl p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                    <div>
                      <h1 className="text-4xl md:text-5xl font-bold mb-4">Provider Credentialing & Enrollment</h1>
                      <p className="text-lg opacity-90 mb-6">Expedited credentialing with 150+ payer networks. Our specialists manage the entire process so you can start billing quickly without administrative delays.</p>
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
                        <Button type="submit" size="lg">Start credentialing</Button>
                        <Button asChild size="lg" variant="outline"><Link to="/contact">More info</Link></Button>
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
                  <h2 className="text-3xl font-bold mb-4">Fast-Track Your Provider Enrollment</h2>
                  <p className="text-muted-foreground mb-6">We handle all aspects of credentialing: documentation preparation, CAQH profile management, application submissions, payer follow-up, and re-credentialing cycles to keep your enrollment current.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Initial Credentialing & Enrollment</h3>
                      <p className="text-sm text-muted-foreground">Complete documentation, CAQH maintenance, and payer application management.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Multi-Specialty Coordination</h3>
                      <p className="text-sm text-muted-foreground">Enroll providers across multiple specialties with network-specific requirements.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Credentialing Maintenance & Re-credentialing</h3>
                      <p className="text-sm text-muted-foreground">Renewal tracking and timely re-credentialing to prevent enrollment lapses.</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2">Problem Resolution & Appeals</h3>
                      <p className="text-sm text-muted-foreground">Address denials, credential disputes, and complex enrollment challenges.</p>
                    </div>
                  </div>
                </div>

                <aside className="bg-card rounded-2xl p-6 shadow border border-border">
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-primary">150+</div>
                    <p className="text-sm text-muted-foreground">Payer networks we work with</p>
                  </div>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-primary">60-90</div>
                    <p className="text-sm text-muted-foreground">Days typical turnaround</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">97%</div>
                    <p className="text-sm text-muted-foreground">First-time approval rate</p>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section className="py-12 bg-secondary text-secondary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Credentialing Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                {[
                  { title: 'Prep', desc: 'Documentation & profile review' },
                  { title: 'Submit', desc: 'Application to payers' },
                  { title: 'Track', desc: 'Status monitoring & follow-up' },
                  { title: 'Approve', desc: 'Network enrollment confirmation' },
                  { title: 'Maintain', desc: 'Renewal & re-credentialing' },
                ].map((s, i) => (
                  <div key={i} className="bg-background p-4 rounded-lg text-center">
                    <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground mx-auto flex items-center justify-center font-bold mb-3">{i + 1}</div>
                    <h4 className="font-semibold">{s.title}</h4>
                    <p className="text-sm opacity-90">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-xl font-semibold mb-6 text-center">Major Insurance Networks We Service</h3>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
                {['United Healthcare', 'Anthem BCBS', 'Aetna', 'Cigna', 'Humana', 'Medicare'].map((name) => (
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
                  <p className="text-sm text-muted-foreground">NCQA and payer-specific credentialing standards with ongoing training and quality monitoring.</p>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="p-4 border rounded-lg">CAQH profile expertise</div>
                  <div className="p-4 border rounded-lg">Network-specific requirements</div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="p-4 border rounded-lg">NCQA & URAC standards</div>
                  <div className="p-4 border rounded-lg">Ongoing compliance monitoring</div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Credentialing FAQs</h3>
              <div className="space-y-3">
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold">How long does credentialing usually take?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">Typical timeframe is 60–90 days from submission to final approval, depending on payer volume and completeness of documentation.</p>
                </details>
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold">What if a payer denies credentialing?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">We investigate the denial reason, address issues (credential gaps, malpractice history, etc.), and resubmit with a corrective action plan.</p>
                </details>
                <details className="p-4 border rounded-lg">
                  <summary className="font-semibold">When do I need to re-credential?</summary>
                  <p className="mt-2 text-sm text-muted-foreground">Most payers require re-credentialing every 3 years. We track all expiration dates and initiate renewal 6 months prior.</p>
                </details>
              </div>
            </div>
          </section>

          <section className="py-12 bg-gradient-to-br from-primary to-[hsl(260,70%,50%)] text-primary-foreground">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Start Your Credentialing Journey Today</h2>
              <p className="mb-6 text-muted-foreground">Let our experts handle the paperwork while you focus on building your practice.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg"><Link to="/contact">Begin credentialing</Link></Button>
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

export default CredentialingPage;
