import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  TrendingUp,
  ClipboardCheck,
  Shield,
  Zap,
  BarChart3,
  RefreshCw,
  FileText,
  Users,
  Lock,
  Search,
  Settings,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const mainServices = [
  {
    id: 'medical-billing',
    title: 'Medical Billing Services',
    description: 'Expert patient billers offer the most complete medical billing services that entail handling check-in/out, claims, payments, and denials for health care providers.',
    icon: ClipboardCheck,
    link: '/services/medical-billing',
    features: ['Patient registration', 'Charge capture', 'Claim submission', 'Payment posting']
  },
  {
    id: 'medical-coding',
    title: 'Medical Coding',
    description: 'Clinical coding officers translate patient services into ICD-10 and CPT codes and generate a clean "super-bill" for the biller to submit to the insurance payer.',
    icon: ShieldCheck,
    link: '/services/medical-coding',
    features: ['ICD-10 coding', 'CPT coding', 'Super-bill generation', 'Compliance']
  },
  {
    id: 'rcm',
    title: 'Revenue Cycle Management (RCM)',
    description: 'Revenue cycle management services are specialty-specific, which means a physician\'s bespoke demands are met by a dedicated medical biller.',
    icon: TrendingUp,
    link: '/services/rcm',
    features: ['Full cycle management', 'Denial management', 'AR recovery', 'Reporting']
  },

  {
    id: 'clearinghouse',
    title: 'Clearinghouse Services',
    description: 'Secure electronic claim submission and validation services ensuring HIPAA compliance and faster processing.',
    icon: Zap,
    link: '/services/clearinghouse',
    features: ['Electronic submission', 'Claim validation', 'HIPAA compliance', '24/7 support']
  },
  {
    id: 'medical-audit',
    title: 'Medical Audit Services',
    description: 'Comprehensive billing and coding audits to identify compliance issues and revenue optimization opportunities.',
    icon: BarChart3,
    link: '/services/medical-audit',
    features: ['Chart audits', 'Compliance review', 'Risk assessment', 'Recommendations']
  },
  {
    id: 'denial-management',
    title: 'Denial Management',
    description: 'Expert analysis and resolution of claim denials with targeted appeals to maximize reimbursement.',
    icon: RefreshCw,
    link: '/services/medical-audit',
    features: ['Denial analysis', 'Appeals management', 'Resubmission', 'Recovery']
  },
  {
    id: 'healthcare-seo',
    title: 'Healthcare SEO Services',
    description: 'Digital marketing solutions to help healthcare providers reach more patients and grow their practice online.',
    icon: Search,
    link: '/services/healthcare-seo',
    features: ['SEO optimization', 'Content strategy', 'Digital presence', 'Analytics']
  },
];

const additionalServices = [
  {
    title: 'MIPS Consulting',
    description: 'Help your practice succeed in Merit-based Incentive Payment System (MIPS) performance tracking.',
    icon: Settings,
  },
  {
    title: 'Eligibility Verification',
    description: 'Real-time insurance eligibility checking to prevent billing errors and improve collections.',
    icon: Search,
  },
  {
    title: 'Patient Billing',
    description: 'Professional patient statement generation and payment processing for better collections.',
    icon: FileText,
  },
  {
    title: 'Compliance Support',
    description: 'Ongoing compliance monitoring and support to ensure your practice meets all regulations.',
    icon: Lock,
  },
];

const benefits = [
  { title: 'Increased Revenue', description: 'Up to 30% average revenue increase through optimized billing.' },
  { title: 'Reduced Denials', description: 'Clean claim rates above 99% with advanced validation.' },
  { title: 'Time Savings', description: 'Focus on patient care while we handle billing operations.' },
  { title: 'Compliance', description: 'HIPAA and AAPC certified for maximum security and expertise.' },
  { title: '24/7 Support', description: 'Round-the-clock support for your billing needs.' },
  { title: 'Specialty Expertise', description: 'Dedicated teams for 75+ medical specialties.' },
];

const processSteps = [
  {
    step: '1',
    title: 'Initial Contact Us',
    description: 'We understand your practice needs and current challenges.'
  },
  {
    step: '2',
    title: 'Customized Plan',
    description: 'We create a tailored solution for your specific situation.'
  },
  {
    step: '3',
    title: 'Implementation',
    description: 'Smooth transition with minimal disruption to your workflow.'
  },
  {
    step: '4',
    title: 'Monitoring & Support',
    description: 'Continuous optimization and 24/7 support.'
  },
];

function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen bg-[#f6f7ff] text-slate-950">
      
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-[#f6f7ff] py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <div className="inline-block">
                <div className="text-sm uppercase tracking-[0.35em] text-slate-500">Our Services</div>
              </div>
              <h1 className="text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
                Complete Healthcare <span className="text-primary">Solutions</span> for Your Practice
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-600">
                From medical billing and coding to credentialing and revenue cycle management, we provide comprehensive healthcare services to help your practice thrive and grow.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-950">Core Services</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Industry-leading solutions designed specifically for healthcare providers
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mainServices.map((service) => {
                const IconComponent = service.icon;
                return (
                  <Link key={service.id} to={service.link}>
                    <div className="h-full rounded-[1.75rem] border border-slate-200 bg-white p-8 hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col">
                      <div className="mb-4">
                        <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <IconComponent className="h-7 w-7 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-slate-950 mb-2">{service.title}</h3>
                      <p className="text-slate-600 text-sm mb-6 flex-grow">{service.description}</p>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 text-primary font-semibold text-sm group">
                        Learn More
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="flex justify-center mt-12">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full gradient-bg text-white font-semibold hover:shadow-lg transition-all">
                Get Started Today <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-950">Additional Services</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Specialized support services to enhance your operations
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {additionalServices.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <div key={idx} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 hover:shadow-lg transition-all">
                    <div className="mb-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-950 mb-2">{service.title}</h3>
                    <p className="text-slate-600 text-sm">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-950">Why Choose TransMedex</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Proven benefits that make a real difference to your practice
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-primary/5 to-white p-8">
                  <div className="flex items-start gap-4">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-950 mb-2">{benefit.title}</h3>
                      <p className="text-slate-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-slate-50 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-950">Our Process</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                How we partner with your practice to deliver results
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  {idx < processSteps.length - 1 && (
                    <div className="absolute top-12 -right-4 hidden lg:block">
                      <div className="h-0.5 w-8 bg-primary/30" />
                    </div>
                  )}
                  <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
                    <div className="mb-4">
                      <div className="h-12 w-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-950 mb-2">{step.title}</h3>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-primary/10 via-white to-primary/5 py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold tracking-[-0.03em] text-slate-950 mb-6">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-lg leading-8 text-slate-600 mb-8">
              Let our expert team help you optimize your revenue cycle and focus on patient care. Contact us today for a Contact Us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full gradient-bg text-white font-semibold hover:shadow-lg transition-all">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-primary/30 text-primary font-semibold hover:bg-primary/5 transition-all">
                Call +1 (609) 793-0400
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ServicesPage;

