import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, DollarSign, CheckCircle, 
  ChevronDown, ChevronUp, Users, 
  Activity, ShieldCheck, TrendingUp,
  Stethoscope, Heart, Brain, Bone, Eye, Pill, Scissors, Baby,
  BadgeCheck, Zap, Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

function WhoWeServeTemplate({ 
  pageTitle, 
  seoDescription,
  heroTitle,
  heroSubtitle,
  heroFeatures,
  mainContentTitle,
  mainContentSubtitle,
  mainContentHeading,
  mainContentText1,
  mainContentText2,
  mainContentBullets,
  ribbonTitle,
  ribbonSubtitle,
  ribbonItems,
  rcmTabs,
  pricingLeftHeading,
  pricingSubtitle,
  pricingText,
  pricingBullets,
  pricingCardTitle,
  pricingCardFee,
  pricingCardDescription,
  pricingCardFeatures,
  faqs
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const defaultStats = [
    { value: '$500M+', label: 'Value of claims processed' },
    { value: '24', label: 'Accounts Receivable Days' },
    { value: '48Hours', label: 'Turn Around Time (TAT)' },
    { value: '99%', label: 'Customer Retention' },
    { value: '2.7M', label: 'Number of Claims Processed' },
    { value: '98%', label: 'First Pass Clean Claims Rate' },
    { value: '5%-10%', label: 'Revenue Improvement' },
    { value: '30%', label: 'Reduction in A/R' }
  ];

  const specialties = [
    { name: 'OB/GYN', icon: <Baby className="w-6 h-6" /> },
    { name: 'Neurology', icon: <Brain className="w-6 h-6" /> },
    { name: 'Orthopedics', icon: <Bone className="w-6 h-6" /> },
    { name: 'Podiatry', icon: <Stethoscope className="w-6 h-6" /> },
    { name: 'Cardiology', icon: <Heart className="w-6 h-6" /> },
    { name: 'Nephrology', icon: <Activity className="w-6 h-6" /> },
    { name: 'Psychiatry', icon: <Brain className="w-6 h-6" /> },
    { name: 'Primary Care', icon: <Stethoscope className="w-6 h-6" /> },
    { name: 'Endocrinology', icon: <Activity className="w-6 h-6" /> },
    { name: 'Internal Medicine', icon: <Stethoscope className="w-6 h-6" /> },
    { name: 'Pain Management', icon: <Pill className="w-6 h-6" /> },
    { name: 'Infectious Disease', icon: <ShieldCheck className="w-6 h-6" /> },
  ];

  const ehrs = [
    { name: 'eClinicalWorks', color: 'text-blue-600' },
    { name: 'AdvancedMD', color: 'text-orange-500' },
    { name: 'NextGen', color: 'text-red-600' },
    { name: 'athenahealth', color: 'text-green-600' },
    { name: 'CareCloud', color: 'text-cyan-500' },
    { name: 'Epic', color: 'text-red-700' }
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle} | TransMedex</title>
        <meta name="description" content={seoDescription} />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background text-foreground overflow-hidden">
        <Header />

        <main className="flex-grow">
          {/* Hero Features Section */}
          <section className="py-20 bg-slate-50 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{heroTitle}</h1>
              <p className="text-base sm:text-lg text-slate-600 mb-16">{heroSubtitle}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
                {heroFeatures.map((feature, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Main Content & Form Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{mainContentTitle}</h2>
                <p className="text-lg text-primary font-medium">{mainContentSubtitle}</p>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 items-start">
                {/* Left Content */}
                <div className="xl:col-span-3 space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900">{mainContentHeading}</h3>
                  <p className="text-slate-600 leading-relaxed">{mainContentText1}</p>
                  <p className="text-slate-600 leading-relaxed">{mainContentText2}</p>
                  
                  <ul className="space-y-4 mt-8">
                    {mainContentBullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-700">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Form */}
                <div className="xl:col-span-2 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 sm:p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Schedule a Demo</h3>
                    <p className="text-slate-600">Get connected with our experts to learn more.</p>
                  </div>

                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
                      <Input id="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
                      <Input id="lastName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone <span className="text-red-500">*</span></Label>
                      <Input id="phone" type="tel" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="practice">Practice Name <span className="text-red-500">*</span></Label>
                      <Input id="practice" required />
                    </div>
                    <div className="space-y-2">
                      <Label>Number of Physicians <span className="text-red-500">*</span></Label>
                      <Select defaultValue="1">
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2-5">2-5</SelectItem>
                          <SelectItem value="6-10">6-10</SelectItem>
                          <SelectItem value="10+">10+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
                      <Textarea id="message" rows={3} required />
                    </div>
                    <Button type="button" className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-6 text-lg font-semibold mt-4">
                      Schedule Demo
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Specialties Section */}
          <section className="py-20 bg-slate-50 border-t border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Medical Billing Services for 40+ Specialties</h2>
              <p className="text-slate-600 mb-12 max-w-3xl mx-auto">From primary care to surgical centers, Transcure supports small practices with specialties-specific billing expertise.</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {specialties.map((spec, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-primary/50 transition-colors">
                    <div className="text-slate-400">{spec.icon}</div>
                    <span className="font-semibold text-slate-700">{spec.name}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-lg font-semibold shadow-md">
                <Link to="/specialties">View More Specialties</Link>
              </Button>
            </div>
          </section>

          {/* Success in Numbers Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Our Success in Numbers</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 text-center">
                {defaultStats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center border-primary/20 border-l-0 sm:border-l-2 first:border-l-0 md:[&:nth-child(4n+1)]:border-l-0">
                    <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                    <div className="text-sm font-medium text-slate-600 uppercase tracking-wider max-w-[150px]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Purple Ribbon Section */}
          <section className="py-20 bg-slate-50 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{ribbonTitle}</h2>
              {ribbonSubtitle && <p className="text-slate-600 mb-12 max-w-3xl mx-auto">{ribbonSubtitle}</p>}
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                {ribbonItems.map((item, i) => (
                  <div key={i} className="text-center flex flex-col items-center">
                    {item.icon && <div className="text-primary mb-4">{item.icon}</div>}
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-lg font-semibold shadow-lg">
                <Link to="/contact">Request Pricing</Link>
              </Button>
            </div>
          </section>

          {/* RCM Tabs Section */}
          <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Full Spectrum Revenue Cycle Management Services</h2>
              
              <div className="grid grid-cols-1 xl:grid-cols-4 border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                {/* Tabs Sidebar */}
                <div className="bg-slate-50 xl:border-r border-b xl:border-b-0 border-slate-200 flex xl:flex-col flex-row overflow-x-auto">
                  {rcmTabs.map((tab, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTab(i)}
                      className={`text-left px-4 sm:px-6 py-3 sm:py-5 text-sm font-semibold transition-colors border-b xl:border-b border-r xl:border-r-0 border-slate-200 last:border-b-0 whitespace-nowrap xl:whitespace-normal ${
                        activeTab === i 
                          ? 'bg-[#8c2a8d] text-white' 
                          : 'text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {tab.tabName}
                    </button>
                  ))}
                </div>
                
                {/* Tab Content */}
                <div className="xl:col-span-3 p-5 sm:p-8 bg-white">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{rcmTabs[activeTab].title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {rcmTabs[activeTab].text}
                      </p>
                      <ul className="space-y-3">
                        {rcmTabs[activeTab].bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <span className="text-slate-700">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Pricing Section */}
          <section className="py-24 bg-slate-50 border-t border-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-slate-900 mb-20">Affordable Revenue Cycle Management Pricing</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                {/* Left Content */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{pricingLeftHeading || pricingSubtitle}</h3>
                  {pricingText && (
                    <p className="text-slate-600 leading-relaxed text-lg mb-6">
                      {pricingText}
                    </p>
                  )}
                  {pricingBullets && (
                    <ul className="space-y-4">
                      {pricingBullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2.5 flex-shrink-0"></div>
                          <span className="text-slate-700">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {pricingLeftHeading && (
                    <p className="text-slate-600 italic mt-8">
                      Contact our experts today and ensure hassle-free, profitable Medical Billing with our billing services!
                    </p>
                  )}
                </div>
                
                {/* Right Pricing Card */}
                <div className="bg-[#4b1156] rounded-2xl p-4 sm:p-8 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                  
                  <div className="text-center border-b border-white/20 pb-8 mb-8 relative z-10">
                    <h4 className="text-xl font-bold mb-4">{pricingCardTitle}</h4>
                    <div className="text-3xl font-bold">{pricingCardFee}</div>
                  </div>
                  
                  <div className="relative z-10">
                    <p className="font-medium mb-6 text-white/90 text-sm leading-relaxed text-center">
                      {pricingCardDescription}
                    </p>
                    <ul className="space-y-4 mb-10">
                      {pricingCardFeatures.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="font-medium text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full bg-white hover:bg-slate-100 text-[#4b1156] rounded-full py-6 text-lg font-bold">
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* EHR Grid Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">We work with these EHRs</h2>
              <p className="text-slate-600 mb-12 max-w-3xl mx-auto">Our medical billing specialists know the workarounds of all the EHRs. We help you submit clean claims no matter which EHR you use.</p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                {ehrs.map((ehr, i) => (
                  <div key={i} className="flex items-center justify-center bg-white h-24 rounded-xl border border-slate-300 shadow-sm hover:border-primary/50 transition-colors">
                    <span className={`font-black text-2xl tracking-tighter ${ehr.color}`}>{ehr.name}</span>
                  </div>
                ))}
              </div>
              
              <Button asChild className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-lg font-semibold shadow-md">
                <Link to="/emr">Explore More</Link>
              </Button>
            </div>
          </section>

          {/* FAQs Section */}
          {faqs && faqs.length > 0 && (
            <section className="py-20 bg-slate-50 border-t border-border">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions (FAQs)</h2>
                
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleFaq(i)}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                      >
                        <span className="font-bold text-slate-900 pr-8">{faq.question}</span>
                        {openFaqIndex === i ? (
                          <ChevronUp className="w-6 h-6 text-slate-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-slate-400 flex-shrink-0" />
                        )}
                      </button>
                      <AnimatePresence>
                        {openFaqIndex === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="p-6 pt-0 text-slate-600 border-t border-slate-100">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Bottom Banner */}
          <section className="py-12 bg-white border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center gap-4">
                  <TrendingUp className="w-10 h-10 text-primary/70 flex-shrink-0" />
                  <p className="text-sm text-slate-600">Maximize your revenue potential with our 24/7 medical billing services.</p>
                </div>
                <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-slate-200 pt-8 md:pt-0 pl-0 md:pl-8">
                  <Users className="w-10 h-10 text-primary/70 flex-shrink-0" />
                  <p className="text-sm text-slate-600">Hire a team of experts who are well-versed with your EHR and improve the billing process.</p>
                </div>
                <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-slate-200 pt-8 md:pt-0 pl-0 md:pl-8">
                  <FileText className="w-10 h-10 text-primary/70 flex-shrink-0" />
                  <p className="text-sm text-slate-600">Save $2,500 with our complimentary Billing Audit! Get insights based on 25 various KPIs to enhance cash flow.</p>
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

export default WhoWeServeTemplate;


