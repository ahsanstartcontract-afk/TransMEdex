import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function CardiologyPage() {
  const challenges = [
    'Complex cardiovascular procedure coding',
    'Multiple procedure discounting',
    'Technical vs. professional component billing',
    'Cardiac catheterization coding',
    'Pacemaker and ICD coding',
    'Stress test and imaging reimbursement'
  ];

  const solutions = [
    'Cardiology-certified coders',
    'Expertise in CPT codes 92920-93799',
    'Accurate component billing',
    'Catheterization lab billing',
    'Device implant coding',
    'Diagnostic testing optimization'
  ];

  return (
    <>
      <Helmet>
        <title>Cardiology Medical Billing Services - TransMedex</title>
        <meta name="description" content="Specialized medical billing for cardiology practices. Expert coding for cardiovascular procedures with TransMedex." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="relative py-20 bg-[url('https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ letterSpacing: '-0.02em' }}>
                  Cardiology billing services
                </h1>
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  Specialized billing for cardiology practices and cardiovascular centers. Our certified coders understand the intricacies of cardiac procedures, from diagnostic testing to complex interventional procedures.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 transition-all duration-200 active:scale-[0.98] bg-transparent">
                    <a href="tel:+16097930400">Call +1 (609) 793-0400</a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Cardiology billing challenges</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Cardiology billing requires specialized knowledge due to complex procedures and strict coding requirements:
                  </p>
                  <div className="space-y-4">
                    {challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-destructive" />
                        </div>
                        <span className="text-foreground">{challenge}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Our cardiology solutions</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    TransMedex provides expert billing services tailored for cardiology practices:
                  </p>
                  <div className="space-y-4">
                    {solutions.map((solution, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{solution}</span>
                      </motion.div>
                    ))}
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
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Procedures we specialize in</h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
                  Expert billing for all cardiovascular procedures and services.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {[
                  'Cardiac catheterization',
                  'Angioplasty and stenting',
                  'Pacemaker implantation',
                  'ICD placement',
                  'Echocardiography',
                  'Stress testing',
                  'Nuclear cardiology',
                  'Electrophysiology studies',
                  'Ablation procedures'
                ].map((procedure, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-background rounded-lg p-4 border border-border"
                  >
                    <p className="text-foreground font-medium">{procedure}</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Optimize your cardiology practice revenue</h2>
                <p className="text-xl mb-8 opacity-95 leading-relaxed">
                  Partner with billing specialists who understand cardiovascular coding and reimbursement.
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
        </main>

        <Footer />
      </div>
    </>
  );
}

export default CardiologyPage;
