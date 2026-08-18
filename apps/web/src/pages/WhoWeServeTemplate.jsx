import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText, DollarSign, CheckCircle,
  ChevronDown, ChevronUp, Users,
  Activity, ShieldCheck, TrendingUp,
  Stethoscope, Heart, Brain, Bone, Eye, Pill, Scissors, Baby,
  BadgeCheck, Zap, Briefcase, ArrowRight, Phone, Clock, Award, Star, HeartHandshake
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function WhoWeServeTemplate({
  pageTitle,
  seoDescription,
  heroTitle,
  heroSubtitle,
  heroFeatures,
  heroImage,
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
    { value: '48 Hrs', label: 'Turn Around Time (TAT)' },
    { value: '99%', label: 'Customer Retention' },
    { value: '2.7M', label: 'Number of Claims Processed' },
    { value: '98%', label: 'First Pass Clean Claims Rate' },
    { value: '5–10%', label: 'Revenue Improvement' },
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
      
      <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
        <Header />

        <main className="flex-grow">

          {/* ─────────── PREMIUM HERO SECTION ─────────── */}
          <section className="relative py-14 sm:py-18 md:py-20 lg:py-24 bg-slate-900 text-white overflow-hidden">
            {/* Background image */}
            <div
              className="absolute inset-0 z-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${heroImage || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80"}')` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/60" />
            {/* Blobs */}
            <div className="absolute top-0 right-0 w-[200px] sm:w-[500px] h-[200px] sm:h-[500px] rounded-full bg-[#0da1df]/10 blur-3xl z-0 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[150px] sm:w-[400px] h-[150px] sm:h-[400px] rounded-full bg-purple-700/10 blur-3xl z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-8 xl:gap-16 items-center">

                {/* Left – hero copy */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 rounded-full mb-4 sm:mb-5">
                    <span className="w-2 h-2 rounded-full bg-[#0da1df] animate-pulse" />
                    Who We Serve · TransMedex
                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] mb-4 sm:mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0da1df] to-purple-400">
                      {heroTitle}
                    </span>
                  </h1>

                  <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-6 sm:mb-8 max-w-xl leading-relaxed">
                    {heroSubtitle}
                  </p>

                  <ul className="space-y-2 sm:space-y-3 mb-7 sm:mb-10">
                    {heroFeatures.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3 text-white/90 text-[13px] sm:text-[15px]">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#0da1df] flex-shrink-0 mt-0.5" />
                        <span><strong className="text-white">{feature.title}:</strong> {feature.description}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {[
                      { icon: <ShieldCheck className="w-4 h-4 text-[#0da1df]" />, label: 'ISO 27001 Certified' },
                      { icon: <BadgeCheck className="w-4 h-4 text-[#0da1df]" />, label: 'HIPAA Compliant' },
                      { icon: <Award className="w-4 h-4 text-[#0da1df]" />, label: 'AAPC Certified' },
                    ].map((b, i) => (
                      <div key={i} className="flex items-center gap-1.5 sm:gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                        {b.icon}
                        <span className="text-xs sm:text-sm font-bold whitespace-nowrap">{b.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right – premium CTA card */}
                <div className="relative mt-6 xl:mt-0">
                  <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-[#0da1df]/30 to-purple-600/30 rounded-3xl blur-2xl" />
                  <div className="relative bg-white/10 border border-white/20 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-10 shadow-2xl">
                    <div className="flex items-center gap-3 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0da1df] to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
                        <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs text-white/60 uppercase tracking-widest font-semibold">Free Consultation</p>
                        <h3 className="text-lg sm:text-xl font-bold text-white">Let's Get Started!</h3>
                      </div>
                    </div>

                    <p className="text-white/75 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                      Ready to streamline your billing and boost revenue? Connect with our specialists for a <span className="text-[#0da1df] font-semibold">free, no-obligation consultation</span> and see how TransMedex can transform your revenue cycle.
                    </p>

                    <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-5 sm:mb-7">
                      {[
                        { icon: <Clock className="w-4 h-4" />, label: 'Response within 24 hrs' },
                        { icon: <Zap className="w-4 h-4" />, label: '48-hr onboarding' },
                        { icon: <Star className="w-4 h-4" />, label: '99% client retention' },
                        { icon: <TrendingUp className="w-4 h-4" />, label: 'Revenue up 10–30%' },
                      ].map((w, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2.5">
                          <div className="text-[#0da1df]">{w.icon}</div>
                          <span className="text-xs font-semibold text-white/90 leading-tight">{w.label}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild size="lg" className="w-full h-13 text-base font-bold rounded-2xl bg-gradient-to-r from-[#0da1df] to-purple-600 hover:from-purple-600 hover:to-[#0da1df] text-white shadow-[0_0_20px_rgba(13,161,223,0.5)] hover:shadow-[0_0_30px_rgba(13,161,223,0.7)] transition-all duration-300 mb-3">
                      <Link to="/contact" className="flex items-center justify-center gap-2">
                        Get a Free Consultation <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>

                    <a
                      href="tel:+16097930400"
                      className="flex items-center justify-center gap-2 w-full h-12 rounded-2xl border border-white/30 text-white/90 font-semibold text-sm hover:bg-white/10 transition-all duration-200"
                    >
                      <Phone className="w-4 h-4 text-[#0da1df]" />
                      Call +1 (609) 793-0400
                    </a>

                    <p className="text-center text-xs text-white/40 mt-4">No credit card required · 100% confidential</p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ─────────── HERO FEATURES SECTION ─────────── */}
          <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                {heroFeatures.map((feature, i) => (
                  <div key={i} className="flex flex-col items-center group p-5 sm:p-6 rounded-2xl hover:bg-white hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0da1df] to-purple-600 flex items-center justify-center text-white mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-4">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─────────── MAIN CONTENT SECTION ─────────── */}
          <section className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                <span className="inline-block bg-[#0da1df]/10 text-[#0da1df] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 sm:mb-4">
                  {mainContentSubtitle}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">{mainContentTitle}</h2>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 sm:gap-12 items-start">
                {/* Left Content */}
                <div className="xl:col-span-3 space-y-4 sm:space-y-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{mainContentHeading}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{mainContentText1}</p>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{mainContentText2}</p>

                  <ul className="space-y-3 sm:space-y-4 mt-6 sm:mt-8">
                    {mainContentBullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3">
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#0da1df] to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <span className="text-slate-700 text-sm sm:text-base">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right – Premium CTA card (inline, no form) */}
                <div className="xl:col-span-2">
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-br from-[#0da1df]/20 to-purple-600/20 rounded-3xl blur-xl" />
                    <div className="relative bg-gradient-to-br from-slate-900 to-[#1e1b4b] rounded-3xl p-8 text-white shadow-2xl overflow-hidden">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-[#0da1df]/10 rounded-full -mr-16 -mt-16 blur-2xl pointer-events-none" />

                      <div className="flex items-center gap-3 mb-6 relative">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0da1df] to-purple-600 flex items-center justify-center shadow-lg">
                          <HeartHandshake className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-white/60 uppercase tracking-widest font-semibold">Schedule a Demo</p>
                          <h3 className="text-xl font-bold text-white">Talk to an Expert</h3>
                        </div>
                      </div>

                      <p className="text-white/70 text-sm leading-relaxed mb-6 relative">
                        Get connected with a TransMedex billing expert who specializes in your practice type. We'll walk you through our process and show you exactly how much revenue you're leaving on the table.
                      </p>

                      <div className="space-y-3 mb-7 relative">
                        {[
                          '✓ Free revenue cycle audit',
                          '✓ Custom billing workflow review',
                          '✓ Denial rate analysis',
                          '✓ No-obligation proposal',
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm font-medium text-white/90">
                            <span className="text-[#0da1df]">{item.split(' ')[0]}</span>
                            <span>{item.slice(2)}</span>
                          </div>
                        ))}
                      </div>

                      <Button asChild size="lg" className="w-full h-12 text-base font-bold rounded-2xl bg-gradient-to-r from-[#0da1df] to-purple-600 hover:from-purple-600 hover:to-[#0da1df] text-white shadow-[0_0_20px_rgba(13,161,223,0.4)] hover:shadow-[0_0_30px_rgba(13,161,223,0.6)] transition-all duration-300 mb-3 relative">
                        <Link to="/contact" className="flex items-center justify-center gap-2">
                          Contact Us Now <ArrowRight className="w-5 h-5" />
                        </Link>
                      </Button>

                      <a
                        href="tel:+16097930400"
                        className="flex items-center justify-center gap-2 w-full h-11 rounded-2xl border border-white/20 text-white/80 font-semibold text-sm hover:bg-white/10 transition-all duration-200 relative"
                      >
                        <Phone className="w-4 h-4 text-[#0da1df]" />
                        +1 (609) 793-0400
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─────────── SPECIALTIES SECTION ─────────── */}
          <section className="py-20 bg-slate-50 border-t border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Medical Billing Services for 40+ Specialties</h2>
              <p className="text-slate-600 mb-12 max-w-3xl mx-auto">From primary care to surgical centers, TransMedex supports practices with specialty-specific billing expertise.</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {specialties.map((spec, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:border-[#0da1df]/50 hover:shadow-md transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-xl bg-[#0da1df]/10 flex items-center justify-center text-[#0da1df] group-hover:bg-[#0da1df] group-hover:text-white transition-all duration-300 flex-shrink-0">
                      {spec.icon}
                    </div>
                    <span className="font-semibold text-slate-700 group-hover:text-[#0da1df] transition-colors">{spec.name}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-gradient-to-r from-[#0da1df] to-purple-600 hover:from-purple-600 hover:to-[#0da1df] text-white rounded-full px-10 py-6 text-lg font-semibold shadow-md transition-all duration-300">
                <Link to="/specialties" className="flex items-center gap-2">View More Specialties <ArrowRight className="w-5 h-5" /></Link>
              </Button>
            </div>
          </section>

          {/* ─────────── SUCCESS IN NUMBERS ─────────── */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Our Success in Numbers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 text-center">
                {defaultStats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center border-primary/20 border-l-0 sm:border-l-2 first:border-l-0 md:[&:nth-child(4n+1)]:border-l-0">
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm font-medium text-slate-600 uppercase tracking-wider max-w-[150px]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─────────── RIBBON SECTION ─────────── */}
          <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 border-y border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#0da1df]/5 blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">{ribbonTitle}</h2>
              {ribbonSubtitle && <p className="text-slate-600 mb-12 max-w-3xl mx-auto">{ribbonSubtitle}</p>}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {ribbonItems.map((item, i) => (
                  <div key={i} className="group bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden text-left">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0da1df] to-purple-600 rounded-t-2xl" />
                    {item.icon && (
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0da1df] to-purple-600 flex items-center justify-center text-white mb-5 shadow-lg">
                        {item.icon}
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0da1df] transition-colors">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-gradient-to-r from-[#0da1df] to-purple-600 hover:from-purple-600 hover:to-[#0da1df] text-white rounded-full px-10 py-6 text-lg font-semibold shadow-lg transition-all duration-300">
                <Link to="/contact" className="flex items-center gap-2">Request Pricing <ArrowRight className="w-5 h-5" /></Link>
              </Button>
            </div>
          </section>

          {/* ─────────── RCM TABS SECTION ─────────── */}
          <section className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Full Spectrum Revenue Cycle Management Services</h2>

              <div className="grid grid-cols-1 xl:grid-cols-4 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                {/* Tabs Sidebar */}
                <div className="bg-slate-50 xl:border-r border-b xl:border-b-0 border-slate-200 flex xl:flex-col flex-row overflow-x-auto">
                  {rcmTabs.map((tab, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTab(i)}
                      className={`text-left px-4 sm:px-6 py-3 sm:py-5 text-sm font-semibold transition-all duration-200 border-b xl:border-b border-r xl:border-r-0 border-slate-200 last:border-b-0 whitespace-nowrap xl:whitespace-normal ${
                        activeTab === i
                          ? 'bg-gradient-to-r from-[#0da1df] to-purple-600 text-white'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-[#0da1df]'
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
                      <p className="text-slate-600 leading-relaxed mb-6">{rcmTabs[activeTab].text}</p>
                      <ul className="space-y-3">
                        {rcmTabs[activeTab].bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#0da1df] to-purple-500 flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
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

          {/* ─────────── PRICING SECTION ─────────── */}
          <section className="py-24 bg-slate-50 border-t border-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-slate-900 mb-20">Affordable Revenue Cycle Management Pricing</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                {/* Left Content */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{pricingLeftHeading || pricingSubtitle}</h3>
                  {pricingText && (
                    <p className="text-slate-600 leading-relaxed text-lg mb-6">{pricingText}</p>
                  )}
                  {pricingBullets && (
                    <ul className="space-y-4">
                      {pricingBullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#0da1df] to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
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
                <div className="bg-gradient-to-br from-[#4b1156] to-[#2d0a3e] rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#0da1df]/10 rounded-full -ml-16 -mb-16 blur-2xl pointer-events-none" />

                  <div className="text-center border-b border-white/20 pb-8 mb-8 relative z-10">
                    <h4 className="text-xl font-bold mb-4">{pricingCardTitle}</h4>
                    <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0da1df] to-purple-400">{pricingCardFee}</div>
                  </div>

                  <div className="relative z-10">
                    <p className="font-medium mb-6 text-white/90 text-sm leading-relaxed text-center">
                      {pricingCardDescription}
                    </p>
                    <ul className="space-y-4 mb-10">
                      {pricingCardFeatures.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#0da1df]/20 border border-[#0da1df]/40 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-[#0da1df]" />
                          </div>
                          <span className="font-medium text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full bg-gradient-to-r from-[#0da1df] to-purple-600 hover:from-purple-600 hover:to-[#0da1df] text-white rounded-2xl py-6 text-lg font-bold shadow-lg transition-all duration-300">
                      <Link to="/contact" className="flex items-center justify-center gap-2">Get Quote <ArrowRight className="w-5 h-5" /></Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ─────────── EHR GRID SECTION ─────────── */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">We work with these EHRs</h2>
              <p className="text-slate-600 mb-12 max-w-3xl mx-auto">Our medical billing specialists know the workarounds of all the EHRs. We help you submit clean claims no matter which EHR you use.</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                {ehrs.map((ehr, i) => (
                  <div key={i} className="flex items-center justify-center bg-white h-24 rounded-2xl border border-slate-200 shadow-sm hover:border-[#0da1df]/50 hover:shadow-md transition-all duration-300 group">
                    <span className={`font-black text-2xl tracking-tighter ${ehr.color} group-hover:scale-110 transition-transform duration-300`}>{ehr.name}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-gradient-to-r from-[#0da1df] to-purple-600 hover:from-purple-600 hover:to-[#0da1df] text-white rounded-full px-10 py-6 text-lg font-semibold shadow-md transition-all duration-300">
                <Link to="/emr" className="flex items-center gap-2">Explore More EMRs <ArrowRight className="w-5 h-5" /></Link>
              </Button>
            </div>
          </section>

          {/* ─────────── FAQs SECTION ─────────── */}
          {faqs && faqs.length > 0 && (
            <section className="py-20 bg-slate-50 border-t border-border">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>

                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                      <button
                        onClick={() => toggleFaq(i)}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                      >
                        <span className="font-bold text-slate-900 pr-8">{faq.question}</span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaqIndex === i ? 'bg-[#0da1df] text-white' : 'bg-slate-100 text-slate-400'}`}>
                          {openFaqIndex === i ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </div>
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

          {/* ─────────── BOTTOM CTA BANNER ─────────── */}
          <section className="py-20 bg-gradient-to-r from-[#0da1df] to-purple-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTYgNnY2aDZ2LTZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40" />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                Now Accepting New Practices
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Ready to Maximize Your Revenue?
              </h2>
              <p className="text-white/85 text-lg mb-10 max-w-2xl mx-auto">
                Join 500+ physicians who trust TransMedex to handle their billing — so they can focus on what matters most: delivering exceptional patient care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-[#0da1df] hover:bg-white/90 font-bold text-base h-14 px-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Link to="/contact" className="flex items-center gap-2">
                    Schedule a Free Consultation <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <a
                  href="tel:+16097930400"
                  className="flex items-center justify-center gap-2 h-14 px-8 rounded-2xl border-2 border-white/50 text-white font-bold text-base hover:bg-white/10 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 (609) 793-0400
                </a>
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
