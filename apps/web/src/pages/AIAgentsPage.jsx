import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot, Cpu, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function AIAgentsPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('AI Agents inquiry:', form);
    alert('Thanks — we received your request. A specialist will contact you shortly.');
  }

  return (
    <>
      <Helmet>
        <title>AI Agents for Healthcare Revenue Cycle - TransMedex</title>
        <meta
          name="description"
          content="Automate key RCM workflows with AI agents that identify claim gaps, prioritize denials, and speed revenue recovery for healthcare practices."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />

        <main className="flex-grow">
          <section className="relative py-20 bg-[url('https://images.unsplash.com/photo-1494173853739-c21f58b16055?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center text-white">
            <div className="absolute inset-0 bg-slate-950/70" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl"
              >
                <p className="text-sm uppercase tracking-[0.32em] text-primary/80">AI Agents</p>
                <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">Intelligent automation for healthcare revenue cycle management</h1>
                <p className="mt-6 text-lg leading-8 text-slate-200">
                  Deploy AI agents that learn your claims patterns, prioritize outstanding denials, and automate the repetitive workflows that slow your billing operations.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button asChild className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                    <Link to="/contact">Book an AI demo</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full px-6 py-3 text-sm font-semibold bg-transparent text-white border-white hover:bg-white hover:text-slate-900">
                    <Link to="/services/rcm">Explore RCM services</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-16 bg-background">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-10 xl:grid-cols-[0.7fr_0.3fr]">
                <div className="space-y-8">
                  <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-lg">
                    <div className="grid gap-6 sm:grid-cols-2">
                      {[
                        {
                          title: 'Automated claim review',
                          description: 'AI checks claims for missing modifiers, CPT/ICD mismatches, and payer-specific rules before submission.'
                        },
                        {
                          title: 'Denial prioritization',
                          description: 'Intelligent triage routes the highest-value appeals first to recover revenue faster.'
                        },
                        {
                          title: 'Predictive payment insights',
                          description: 'Forecast likely denials, underpayments, and payer behavior using machine learning.'
                        },
                        {
                          title: 'Workflow orchestration',
                          description: 'Automate follow-up tasks, work queues, and provider reminders with minimal manual overhead.'
                        }
                      ].map((item) => (
                        <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                          <h3 className="font-semibold text-slate-950">{item.title}</h3>
                          <p className="mt-3 text-sm text-slate-600">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-10 text-white shadow-lg">
                    <div className="grid gap-6 sm:grid-cols-2">
                      {[
                        { label: 'Faster claims turnaround', value: '40%+' },
                        { label: 'Denial reduction', value: '30%+' },
                        { label: 'Revenue visibility', value: 'Real-time' },
                        { label: 'Staff efficiency', value: 'High-impact' }
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
                        <Bot className="h-6 w-6" />
                        <p className="font-semibold">AI + Revenue Cycle Intelligence</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-lg font-semibold text-slate-950">Transform repetitive workflows with generative and rules-based AI.</p>
                      <p className="text-slate-600 leading-7">
                        Our AI agents act like skilled billing assistants, recommending edits, flagging problem claims, and helping your team move faster while staying compliant.
                      </p>
                    </div>
                    <div className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                      <div className="flex items-start gap-3">
                        <Cpu className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-semibold text-slate-950">Data-driven claims reviews</p>
                          <p className="text-sm text-slate-600">Continuous learning from your payer responses and performance signals.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Sparkles className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-semibold text-slate-950">Automated exception handling</p>
                          <p className="text-sm text-slate-600">Route high-risk claims and apply the right review workflow automatically.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <ShieldCheck className="h-6 w-6 text-primary" />
                        <div>
                          <p className="font-semibold text-slate-950">Compliance-first automation</p>
                          <p className="text-sm text-slate-600">AI supports payor-specific requirements and industry standards.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-10 xl:grid-cols-[0.6fr_0.4fr] items-start">
                <div className="space-y-8">
                  <div>
                    <p className="text-sm uppercase tracking-[0.32em] text-primary/80">How it works</p>
                    <h2 className="mt-4 text-3xl font-bold text-slate-950">Deploy AI that supports your team and scales with your revenue cycle.</h2>
                    <p className="mt-4 text-slate-600 leading-8">
                      TransMedex AI agents integrate into the workflows you already use and make intelligent recommendations across claims, denials, patient balances, and payer follow-up.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      { step: '1', title: 'Connect your workflows', detail: 'Link claims, denials, and payment data to the AI platform.' },
                      { step: '2', title: 'Train on your rules', detail: 'Customize review rules to match your specialty and payer mix.' },
                      { step: '3', title: 'Automate decisions', detail: 'Let agents surface the highest-value claims and tasks.' },
                      { step: '4', title: 'Review results', detail: 'Human oversight ensures safety and consistent improvement.' }
                    ].map((item) => (
                      <div key={item.step} className="rounded-3xl border border-slate-200 p-6">
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

                <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-10 text-white shadow-lg">
                  <p className="text-sm uppercase tracking-[0.32em] text-primary/80">Request a demo</p>
                  <h3 className="mt-4 text-3xl font-bold">Start with a tailored AI assessment</h3>
                  <p className="mt-4 text-slate-300 leading-7">
                    Tell us about your billing challenges and we’ll create an AI agent plan that fits your practice size, specialties, and payer mix.
                  </p>
                  <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First name" className="rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500" />
                      <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last name" className="rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500" />
                    </div>
                    <div className="grid gap-3">
                      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500" />
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="rounded-3xl border border-slate-700 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500" />
                    </div>
                    <Button type="submit" size="lg" className="w-full rounded-full bg-primary text-primary-foreground">Request AI assessment</Button>
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

export default AIAgentsPage;
