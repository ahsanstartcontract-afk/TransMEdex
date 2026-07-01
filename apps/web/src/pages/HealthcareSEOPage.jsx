import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function HealthcareSEOPage() {
  const benefits = [
    'Increase online visibility',
    'Attract more patients',
    'HIPAA-compliant strategies',
    'Local SEO optimization',
    'Content marketing',
    'Reputation management'
  ];

  const services = [
    {
      title: 'Website optimization',
      description: 'Technical SEO improvements to ensure your website ranks well in search results.'
    },
    {
      title: 'Local SEO',
      description: 'Optimize your Google Business Profile and local listings to attract nearby patients.'
    },
    {
      title: 'Content creation',
      description: 'Educational blog posts and articles that establish your expertise and improve rankings.'
    },
    {
      title: 'Keyword research',
      description: 'Identify the search terms potential patients use to find healthcare services.'
    },
    {
      title: 'Link building',
      description: 'Develop high-quality backlinks from reputable healthcare and medical websites.'
    },
    {
      title: 'Analytics & reporting',
      description: 'Track your SEO performance with detailed monthly reports and insights.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Healthcare SEO Services - TransMedex</title>
        <meta name="description" content="Digital marketing strategies to grow your practice online. Increase visibility and attract more patients with TransMedex healthcare SEO services." />
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
                  Healthcare SEO services
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Grow your practice with strategic digital marketing. Our healthcare SEO experts help you rank higher in search results, attract more patients, and build a strong online presence while maintaining HIPAA compliance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-2 transition-all duration-200 active:scale-[0.98]">
                    <a href="tel:+16097930400">Call +1 (609) 793-0400</a>
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
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Grow your practice online</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    In today's digital age, patients search online for healthcare providers. Our SEO strategies ensure your practice appears at the top of search results when potential patients are looking for the services you offer. We combine technical expertise with healthcare industry knowledge to deliver results.
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
                  <h3 className="text-2xl font-semibold mb-6 text-card-foreground">SEO results</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="text-5xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>187%</div>
                      <p className="text-muted-foreground">Average increase in organic traffic</p>
                    </div>
                    <div>
                      <div className="text-5xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>3.4x</div>
                      <p className="text-muted-foreground">More patient inquiries</p>
                    </div>
                    <div>
                      <div className="text-5xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>90 days</div>
                      <p className="text-muted-foreground">To see measurable results</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our SEO services</h2>
                <p className="text-lg opacity-90 max-w-2xl mx-auto leading-relaxed">
                  Comprehensive digital marketing solutions for healthcare practices.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((item, index) => (
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Start growing your practice online</h2>
                <p className="text-xl mb-8 opacity-95 leading-relaxed">
                  Let our healthcare SEO experts help you attract more patients and build a stronger online presence.
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

export default HealthcareSEOPage;
