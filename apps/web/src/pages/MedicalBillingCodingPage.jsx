import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function MedicalBillingCodingPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Medical billing & coding request:', form);
    alert('Thanks â€” we received your request. Our coding team will reach out shortly.');
  }

  return (
    <>
      <Helmet>
        <title>Medical Billing & Coding Services - TransMedex</title>
        <meta
          name="description"
          content="Accurate medical billing and coding services that reduce denials, improve documentation, and speed reimbursement for your practice."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />

        <main className="flex-grow">
          <section className="relative py-20 bg-[url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center text-white">
            <div className="absolute inset-0 bg-slate-950/75" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <p className="text-sm uppercase tracking-[0.32em] text-primary/80">Medical Billing & Coding</p>
                <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">Accurate coding, clean claims, and faster reimbursements</h1>
                <p className="mt-6 text-lg leading-8 text-slate-200">
                  Our certified coders and billing specialists work together to ensure claims are coded correctly and submitted with the documentation payers demand.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button asChild className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full px-6 py-3 text-sm font-semibold bg-transparent text-white border-white hover:bg-white hover:text-slate-900">
                    <Link to="/services">Explore our services</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-10 xl:grid-cols-[0.7fr_0.3fr]">
                <div className="space-y-8">
                  <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-10 shadow-lg">
                    <h2 className="text-3xl font-bold text-slate-950">Complete medical billing and coding support</h2>
                    <p className="mt-4 text-slate-600 leading-8">
                      From CPT/ICD coding to claim submission, our team closes the gap between clinical documentation and payer requirements with precision and speed.
                    </p>
                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      {[
                        { title: 'CPT/ICD accuracy', description: 'Certified coders validate every procedure and diagnosis code before claim submission.' },
                        { title: 'Claim scrub & edit review', description: 'Automated and manual checks prevent rejections and payer denials.' },
                        { title: 'Clinical documentation support', description: 'Improve charting quality to support medical necessity and coding decisions.' },
                        { title: 'Payer rule compliance', description: 'Stay aligned with payer-specific coding guidelines and policy updates.' }
                      ].map((item) => (
                        <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6">
                          <h3 className="font-semibold text-slate-950">{item.title}</h3>
                          <p className="mt-3 text-sm text-slate-600">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-10 text-white shadow-lg">
                    <div className="grid gap-6 sm:grid-cols-2">
                      {[
                        { label: 'Coding accuracy', value: '99.2%' },
                        { label: 'Denial reduction', value: '28%' },
                        { label: 'Faster claim cycle', value: '2 days' },
                        { label: 'Provider support', value: '24/7' }
                      ].map((metric) => (
                        <div key={metric.label}>
                          <p className="text-5xl font-bold">{metric.value}</p>
                          <p className="mt-3 text-sm text-slate-300">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-lg">
                  <div className="space-y-6">
                    <div className="rounded-3xl bg-primary/10 p-5 text-primary">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6" />
                        <p className="font-semibold">Clinical coding excellence</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-lg font-semibold text-slate-950">Billing & coding workflows engineered for healthcare practices.</p>
                      <p className="text-slate-600 leading-7">
                        Our team supports physician practices, clinics, and specialty providers with the documentation guidance and payer-ready claims they need to get paid fast.
                      </p>
                    </div>
                    <div className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                      {[
                        { title: 'Documentation alignment', detail: 'Capture the right clinical details to support each code.' },
                        { title: 'CPT/ICD audits', detail: 'Regular audits to reduce risk and optimize coding accuracy.' },
                        { title: 'Claims compliance', detail: 'Adhere to payer requirements for each specialty and service line.' }
                      ].map((item) => (
                        <div key={item.title} className="space-y-2">
                          <h4 className="font-semibold text-slate-950">{item.title}</h4>
                          <p className="text-sm text-slate-600">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-secondary text-secondary-foreground">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-10 xl:grid-cols-[0.6fr_0.4fr] items-start">
                <div className="space-y-8">
                  <p className="text-sm uppercase tracking-[0.32em] text-primary/80">Process overview</p>
                  <h2 className="text-3xl font-bold text-slate-950">A coding and billing workflow that closes the loop</h2>
                  <p className="text-slate-700 leading-8">
                    We combine expert coding, payer-specific edits, and clean claim submission with practice-level documentation support, so your team can reduce denials and increase net collections.
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { step: '1', title: 'Review documentation', detail: 'Validate clinical notes before coding.' },
                      { step: '2', title: 'Assign codes', detail: 'Apply CPT, ICD, and HCPCS for each encounter.' },
                      { step: '3', title: 'Scrub claims', detail: 'Detect and correct issues before submission.' },
                      { step: '4', title: 'Submit & monitor', detail: 'Monitor claims and update providers as needed.' }
                    ].map((item) => (
                      <div key={item.step} className="rounded-3xl border border-slate-200 bg-white p-6">
                        <div className="flex items-center gap-3 text-primary">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 font-semibold">{item.step}</div>
                          <div>
                            <h3 className="font-semibold text-slate-950">{item.title}</h3>
                            <p className="text-sm text-slate-600">{item.detail}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-lg">
                  <p className="text-sm uppercase tracking-[0.32em] text-primary/80">Start your coding review</p>
                  <h3 className="mt-4 text-3xl font-bold text-slate-950">Fast coding audits for cleaner claims</h3>
                  <p className="mt-4 text-slate-600 leading-7">
                    Request a detailed review of your current coding accuracy and let our experts identify the highest-impact improvements to reduce denials and boost revenue.
                  </p>
                  <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First name" className="rounded-3xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm outline-none" />
                      <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last name" className="rounded-3xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm outline-none" />
                    </div>
                    <div className="grid gap-3">
                      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="rounded-3xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm outline-none" />
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="rounded-3xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm outline-none" />
                    </div>
                    <Button type="submit" size="lg" className="w-full rounded-full bg-primary text-primary-foreground">Request coding audit</Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default MedicalBillingCodingPage;

