import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function SportsMedicinePage() {
  const challenges = [
    'Physical therapy and rehab coding',
    'Joint injection billing',
    'Imaging and diagnostic coding',
    'Workers compensation claims',
    'Multiple procedure rules',
    'DME (Durable Medical Equipment) billing'
  ];

  const solutions = [
    'Sports medicine coding experts',
    'PT and rehab billing optimization',
    'Accurate injection coding',
    'Workers comp management',
    'DME billing compliance',
    'Imaging reimbursement strategies'
  ];

  return (
    <>
      <Helmet>
        <title>Sports Medicine Billing Services - TransMedex</title>
        <meta name="description" content="Specialized medical billing for sports medicine practices. Expert coding for sports injuries and rehab with TransMedex." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="relative py-20 bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ letterSpacing: '-0.02em' }}>
                  Sports medicine billing
                </h1>
                <p className="text-xl text-white/90 leading-relaxed mb-8">
                  Specialized billing for sports medicine practices. Our team handles the complexities of sports injury coding, physical therapy billing, and workers compensation claims.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 transition-all duration-200 active:scale-[0.98] bg-transparent">
                    <a href="tel:+16097930400">Call (609) 793-0400</a>
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
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Sports medicine billing challenges</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Sports medicine billing requires specialized knowledge of diverse procedures and therapies:
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
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Our sports medicine solutions</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    TransMedex provides billing services designed for sports medicine practices:
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

          <section className="py-20 bg-gradient-to-br from-primary to-[hsl(210,100%,50%)] text-primary-foreground">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Optimize your sports medicine revenue</h2>
                <p className="text-xl mb-8 opacity-95 leading-relaxed">
                  Partner with billing specialists who understand sports medicine coding and rehab billing.
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

export default SportsMedicinePage;
