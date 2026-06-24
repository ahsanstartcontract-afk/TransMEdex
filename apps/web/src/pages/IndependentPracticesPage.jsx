import React from 'react';
import WhoWeServeTemplate from './WhoWeServeTemplate.jsx';
import { DollarSign, ShieldCheck, Activity, Users, FileText } from 'lucide-react';

function IndependentPracticesPage() {
  const heroFeatures = [
    { 
      icon: <DollarSign className="w-8 h-8" />, 
      title: 'Maximize Your Reimbursements', 
      description: 'We help independent practices capture every dollar they earn by ensuring clean claims and relentless follow-up on denials.' 
    },
    { 
      icon: <Activity className="w-8 h-8" />, 
      title: 'Operational Efficiency', 
      description: 'Free your staff from time-consuming billing tasks so they can focus on patient care and practice growth.' 
    },
    { 
      icon: <ShieldCheck className="w-8 h-8" />, 
      title: 'Practice Independence', 
      description: 'Maintain your autonomy. We provide the financial backbone that allows independent providers to stay independent and thrive.' 
    }
  ];

  const mainContentBullets = [
    'Protect your independence with a strong, optimized revenue cycle.',
    'Eliminate the high costs of hiring, training, and retaining in-house billers.',
    'Detailed, transparent reporting so you always know your financial health.',
    'Expert coding specifically tailored to your specialty.',
    'Proactive management of payer contracts and fee schedules.',
    'Improved patient satisfaction through clear, accurate patient statements.'
  ];

  const ribbonItems = [
    { icon: <FileText className="w-8 h-8" />, title: 'Clean Claim Submissions', description: 'Our certified coders ensure your claims are accurate the first time, preventing delays.' },
    { icon: <ShieldCheck className="w-8 h-8" />, title: 'Denial Management', description: 'We don\'t take no for an answer. We aggressively appeal unjust denials to get you paid.' },
    { icon: <DollarSign className="w-8 h-8" />, title: 'Payment Posting', description: 'Fast and accurate payment posting to keep your AR days low and your cash flow high.' }
  ];

  const rcmTabs = [
    {
      tabName: 'End-to-End RCM Services',
      title: 'Revenue Cycle Management for Independents',
      text: 'We provide a complete, outsourced business office that empowers your independent practice to compete financially with larger groups.',
      bullets: [
        'End-to-end workflow optimization.',
        'Reduced days in AR.',
        'Dedicated account manager.',
        'HIPAA compliant solutions.'
      ]
    },
    {
      tabName: 'Medical Billing',
      title: 'Expert Medical Billing',
      text: 'Our billing services ensure you get paid quickly and correctly, providing the steady cash flow an independent practice relies on.',
      bullets: [
        'Daily electronic claim submissions.',
        'Secondary claim filing.',
        'Certified medical coders.',
        'Thorough charge entry.'
      ]
    },
    {
      tabName: 'AR Management',
      title: 'Aggressive AR Follow-ups',
      text: 'We chase down every dollar owed to you. Our AR specialists relentlessly pursue outstanding balances from insurance companies.',
      bullets: [
        'Insurance follow-up calls.',
        'Denial resolution.',
        'Appeals for underpaid claims.',
        'Old AR clean-up.'
      ]
    },
    {
      tabName: 'Credentialing Services',
      title: 'Provider Credentialing',
      text: 'Stay in-network without the hassle. We handle the mountains of paperwork required for initial credentialing and re-credentialing.',
      bullets: [
        'Payer enrollment.',
        'Medicare/Medicaid enrollment.',
        'CAQH profile updates.',
        'Contract negotiations.'
      ]
    }
  ];

  const pricingCardFeatures = [
    'RCM Management',
    'Credentialing & Enrollments',
    'Appointment Scheduling',
    'Eligibility Verification',
    'Aggressive AR follow-ups',
    'ERA Processing',
    'Denial Pushing',
    'Appeals & Grievances'
  ];

  const pricingBullets = [
    'Dedicated billing team for independent providers',
    'Specialty-specific coding expertise',
    'Continuous payer contract monitoring',
    'Seamless EMR/EHR integrations',
    'HIPAA Compliant & ISO27001 Certified',
    'Comprehensive credentialing services',
    'Aggressive aging AR clean-up',
    'Transparent financial dashboards'
  ];

  const faqs = [
    {
      question: 'Will I lose control of my practice by outsourcing billing?',
      answer: 'No. Outsourcing to Transcure gives you more control. We provide completely transparent reporting and analytics, so you always know exactly where your finances stand, without the day-to-day burden of managing billing staff.'
    },
    {
      question: 'Do you help with credentialing for independent practices?',
      answer: 'Yes, our credentialing experts handle all your payer enrollments, CAQH updates, and re-credentialing to ensure you never miss a payment due to a lapsed credential.'
    },
    {
      question: 'What happens to my old AR if I switch to Transcure?',
      answer: 'We deploy specialized teams to aggressively work your old accounts receivable, recovering as much legacy cash as possible while simultaneously managing your new claims.'
    }
  ];

  return (
    <WhoWeServeTemplate 
      pageTitle="Medical Billing for Independent Practices"
      seoDescription="Expert medical billing and RCM services for independent medical practices. Maintain your autonomy and boost your revenue with Transcure."
      heroTitle="Empowering Independent Practices with Expert Billing"
      heroSubtitle="Secure your financial independence with our comprehensive revenue cycle management."
      heroFeatures={heroFeatures}
      mainContentTitle="Stay Independent, Stay Profitable"
      mainContentSubtitle="Discover why independent practices trust Transcure for their financial health."
      mainContentHeading="Are billing headaches threatening your practice's independence?"
      mainContentText1="For independent practitioners, maintaining financial stability while delivering quality care is a constant balancing act. In-house billing can quickly become a drain on resources, threatening the very autonomy you worked so hard to build."
      mainContentText2="Transcure provides the financial infrastructure you need to stay independent. Our expert billing services act as your dedicated back-office, ensuring you get paid everything you deserve, faster and more efficiently, allowing you to focus on what matters most: your patients."
      mainContentBullets={mainContentBullets}
      ribbonTitle="Essential Billing Solutions for Independents"
      ribbonItems={ribbonItems}
      rcmTabs={rcmTabs}
      pricingLeftHeading="Why Choose Transcure for Independent Practices?"
      pricingBullets={pricingBullets}
      pricingCardTitle="All-in-One RCM"
      pricingCardFee="5% of Monthly Collections"
      pricingCardDescription="Full-cycle revenue cycle management for healthcare providers"
      pricingCardFeatures={pricingCardFeatures}
      faqs={faqs}
    />
  );
}

export default IndependentPracticesPage;
