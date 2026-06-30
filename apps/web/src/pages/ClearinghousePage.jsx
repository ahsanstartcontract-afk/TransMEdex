import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function ClearinghousePage() {
  const benefits = [
    'Electronic claim submission',
    'Real-time claim status tracking',
    'Automated error detection',
    'Direct payer connections',
    'ERA and EFT processing',
    'HIPAA-compliant transmission'
  ];

  const features = [
    {
      title: 'Claim scrubbing',
      description: 'Advanced algorithms detect and correct errors before claims are submitted to payers.'
    },
    {
      title: 'Multi-payer support',
      description: 'Submit claims to hundreds of insurance payers through a single platform.'
    },
    {
      title: 'Status tracking',
      description: 'Monitor claim status in real-time from submission to payment.'
    },
    {
      title: 'ERA processing',
      description: 'Automated posting of electronic remittance advice for faster reconciliation.'
    },
    {
      title: 'Rejection management',
      description: 'Immediate notification of rejections with detailed error descriptions.'
    },
    {
      title: 'Reporting',
      description: 'Comprehensive reports on claim submission, acceptance, and payment trends.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Clearinghouse Services - TransMedex</title>
        <meta name="description" content="Secure electronic claims submission and real-time status tracking. Connect with hundreds of payers through TransMedex clearinghouse services." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" style={{ letterSpacing: '-0.02em' }}>
                  Clearinghouse services
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Streamline your claim submission process with our advanced clearinghouse platform. Submit claims electronically to hundreds of payers, track status in real-time, and receive payments faster with automated ERA processing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 transition-all duration-200 active:scale-[0.98]">
                    <a href="tel:8009660515">Call (800) 966-0515</a>
                  </Button>
                </div>
              </motion.div>
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
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Fast, secure claim transmission</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Our clearinghouse platform connects your practice to hundreds of insurance payers through secure, HIPAA-compliant electronic data interchange. Claims are scrubbed for errors before submission, reducing rejections and accelerating payment cycles.
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
                  <h3 className="text-2xl font-semibold mb-6 text-card-foreground">Clearinghouse performance</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="text-5xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>97.8%</div>
                      <p className="text-muted-foreground">Clean claim submission rate</p>
                    </div>
                    <div>
                      <div className="text-5xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>24hrs</div>
                      <p className="text-muted-foreground">Average claim acknowledgment time</p>
                    </div>
                    <div>
                      <div className="text-5xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>500+</div>
                      <p className="text-muted-foreground">Connected insurance payers</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Clearinghouse features</h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
                  Everything you need for efficient electronic claim processing.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-background rounded-xl p-6 border border-border"
                  >
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Streamline your claim submission</h2>
                <p className="text-xl mb-8 opacity-95 leading-relaxed">
                  Connect to hundreds of payers and accelerate your payment cycles with our clearinghouse platform.
                </p>
                <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90 transition-all duration-200 active:scale-[0.98]">
                  <Link to="/contact">
                    Get started
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

export default ClearinghousePage;
