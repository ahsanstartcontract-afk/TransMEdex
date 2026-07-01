import React from 'react';
import WhoWeServeTemplate from './WhoWeServeTemplate.jsx';
import { Activity, ShieldCheck, TrendingUp, Users, DollarSign } from 'lucide-react';

function OutsourceBillingServicesPage() {
  const heroFeatures = [
    { 
      icon: <TrendingUp className="w-8 h-8" />, 
      title: 'Accelerated Revenue Growth', 
      description: 'Outsourcing to our expert team ensures your claims are processed faster and more accurately, leading to immediate revenue growth.' 
    },
    { 
      icon: <Activity className="w-8 h-8" />, 
      title: 'Reduced Operational Costs', 
      description: 'Eliminate overhead costs associated with in-house billing staff, training, and software maintenance by partnering with us.' 
    },
    { 
      icon: <ShieldCheck className="w-8 h-8" />, 
      title: 'Guaranteed Compliance', 
      description: 'Our team stays up-to-date with the latest healthcare regulations and coding standards, ensuring your practice remains fully compliant.' 
    }
  ];

  const mainContentBullets = [
    'Minimize billing errors and maximize first-pass claim acceptance rates.',
    'Access to a dedicated team of certified coders and billing specialists.',
    'Detailed financial reporting and analytics for complete transparency.',
    'Scalable solutions that grow alongside your healthcare practice.',
    'Reduced administrative burden, allowing staff to focus on patient experience.',
    'Continuous monitoring of payer fee schedules and contract negotiations.'
  ];

  const ribbonItems = [
    { icon: <TrendingUp className="w-8 h-8" />, title: 'Denial Management', description: 'Proactive identification and resolution of denied claims to recover lost revenue quickly.' },
    { icon: <Users className="w-8 h-8" />, title: 'Patient Billing Support', description: 'Professional and compassionate handling of patient inquiries and statement generation.' },
    { icon: <DollarSign className="w-8 h-8" />, title: 'Financial Analytics', description: 'In-depth reporting that provides actionable insights into your practice\'s financial health.' }
  ];

  const rcmTabs = [
    {
      tabName: 'End-to-End RCM Services',
      title: 'Complete Outsourced Revenue Cycle',
      text: 'We handle every aspect of your revenue cycle, from the moment a patient schedules an appointment to the final payment resolution.',
      bullets: [
        'Seamless integration with your existing EMR.',
        'Continuous performance monitoring.',
        'Dedicated account management team.',
        'Transparent fee structures.'
      ]
    },
    {
      tabName: 'Medical Billing',
      title: 'Expert Medical Billing',
      text: 'Our specialized billers ensure that every claim is scrubbed, verified, and submitted correctly the first time.',
      bullets: [
        'Daily claim submissions.',
        'Electronic remittance advice processing.',
        'Secondary and tertiary claim filing.',
        'Payment posting and reconciliation.'
      ]
    },
    {
      tabName: 'AR Management',
      title: 'Aggressive AR Follow-ups',
      text: 'We do not let claims age. Our AR specialists relentlessly pursue outstanding balances from both insurance companies and patients.',
      bullets: [
        'Focus on >90 days AR reduction.',
        'Appeals for underpaid claims.',
        'Insurance follow-up calls.',
        'Patient collection strategies.'
      ]
    },
    {
      tabName: 'Credentialing Services',
      title: 'Provider Credentialing',
      text: 'Our credentialing experts manage the entire enrollment process, ensuring your providers are always in-network and ready to bill.',
      bullets: [
        'Initial payer enrollments.',
        'Re-credentialing and CAQH updates.',
        'NPI registration and maintenance.',
        'Hospital privilege applications.'
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
    'Access to certified billers without the overhead',
    'Elimination of staff turnover disruptions',
    'Advanced denial management and prevention',
    'Scalable operations for practice growth',
    'HIPAA Compliant & ISO27001 Certified',
    'Significant reduction in software and hardware costs',
    'Transparent financial reporting',
    'Accelerated cash flow'
  ];

  const faqs = [
    {
      question: 'Why should I outsource my medical billing instead of keeping it in-house?',
      answer: 'Outsourcing eliminates the headaches of hiring, training, and retaining billing staff. It also converts fixed overhead costs into a variable cost based on collections, often resulting in higher net revenue due to specialized expertise.'
    },
    {
      question: 'Will I lose control over my practice\'s finances if I outsource?',
      answer: 'Not at all. We provide complete transparency with 24/7 access to your financial data and custom dashboards. You maintain total visibility while we do the heavy lifting.'
    },
    {
      question: 'How long does it take to transition to your outsourced billing services?',
      answer: 'Our dedicated implementation team ensures a seamless transition, typically taking 2-4 weeks without disrupting your cash flow.'
    }
  ];

  return (
    <WhoWeServeTemplate 
      pageTitle="Outsource Medical Billing Services"
      seoDescription="Outsource your medical billing to Transcure. Reduce costs, accelerate revenue, and ensure compliance with our expert billing teams."
      heroTitle="Transform Your Practice by Outsourcing Medical Billing"
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80"
      heroSubtitle="Let the experts handle your revenue cycle while you focus on patient care."
      heroFeatures={heroFeatures}
      mainContentTitle="The Strategic Advantage of Outsourced Billing"
      mainContentSubtitle="Partner with Transcure for unmatched financial performance."
      mainContentHeading="Is in-house billing draining your resources and profits?"
      mainContentText1="Managing an in-house billing team comes with hidden costs: salaries, benefits, turnover, training, and software fees. By outsourcing your billing to Transcure, you convert fixed costs into a predictable percentage of collections."
      mainContentText2="Our specialized teams work as an extension of your practice. We leverage advanced technology and deep industry expertise to collect every dollar you rightfully earn, significantly improving your bottom line."
      mainContentBullets={mainContentBullets}
      ribbonTitle="Comprehensive Outsourced Billing Solutions"
      ribbonItems={ribbonItems}
      rcmTabs={rcmTabs}
      pricingLeftHeading="Why Choose Transcure for Outsourced Billing?"
      pricingBullets={pricingBullets}
      pricingCardTitle="All-in-One RCM"
      pricingCardFee="5% of Monthly Collections"
      pricingCardDescription="Full-cycle revenue cycle management for healthcare providers"
      pricingCardFeatures={pricingCardFeatures}
      faqs={faqs}
    />
  );
}

export default OutsourceBillingServicesPage;
