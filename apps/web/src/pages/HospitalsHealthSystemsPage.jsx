import React from 'react';
import WhoWeServeTemplate from './WhoWeServeTemplate.jsx';
import { Activity, FileText, CheckCircle, ShieldCheck, DollarSign } from 'lucide-react';

function HospitalsHealthSystemsPage() {
  const heroFeatures = [
    { 
      icon: <Activity className="w-8 h-8" />, 
      title: 'High-Volume Capacity', 
      description: 'Our robust infrastructure and large teams are designed to handle the complex, high-volume billing needs of modern health systems.' 
    },
    { 
      icon: <FileText className="w-8 h-8" />, 
      title: 'Advanced Analytics', 
      description: 'Gain deep insights into your hospital\'s financial performance with enterprise-level reporting and custom BI dashboards.' 
    },
    { 
      icon: <CheckCircle className="w-8 h-8" />, 
      title: 'Compliance & Security', 
      description: 'Rigorous compliance programs, strict data security protocols, and comprehensive HIPAA adherence for enterprise peace of mind.' 
    }
  ];

  const mainContentBullets = [
    'Seamless interoperability with enterprise EMR systems like Epic and Cerner.',
    'Specialized coding teams for complex inpatient and outpatient procedures.',
    'Consolidated billing processes across multiple facilities and departments.',
    'Dedicated enterprise account management and strategy teams.',
    'Rapid reduction of legacy AR during system transitions or acquisitions.',
    'Comprehensive staff augmentation to support your existing revenue cycle teams.'
  ];

  const ribbonItems = [
    { icon: <FileText className="w-8 h-8" />, title: 'Complex Claim Scrubbing', description: 'Advanced rule engines designed specifically for institutional and facility billing.' },
    { icon: <ShieldCheck className="w-8 h-8" />, title: 'Denial Prevention', description: 'Root-cause analysis to prevent recurring denials across your entire health system.' },
    { icon: <DollarSign className="w-8 h-8" />, title: 'Self-Pay Management', description: 'Sophisticated strategies for managing patient responsibility in a hospital setting.' }
  ];

  const rcmTabs = [
    {
      tabName: 'End-to-End RCM Services',
      title: 'Enterprise Revenue Cycle Management',
      text: 'We provide scalable, comprehensive RCM solutions designed to streamline operations across your entire hospital network or health system.',
      bullets: [
        'Customized enterprise workflows.',
        'High-volume claim processing.',
        'System-wide financial reporting.',
        'Stringent compliance standards.'
      ]
    },
    {
      tabName: 'Medical Billing',
      title: 'Institutional & Professional Billing',
      text: 'Our teams are adept at handling both UB-04 institutional claims and CMS-1500 professional claims with high accuracy.',
      bullets: [
        'Inpatient and outpatient billing.',
        'Surgical and specialty coding.',
        'Charge capture optimization.',
        'Payment posting automation.'
      ]
    },
    {
      tabName: 'AR Management',
      title: 'Legacy AR Resolution',
      text: 'We deploy specialized teams to aggressively work down high-balance and aged accounts receivable, injecting cash into your health system.',
      bullets: [
        'Old AR clean-up projects.',
        'High-dollar claim appeals.',
        'Payer contract compliance auditing.',
        'Denial trend analysis.'
      ]
    },
    {
      tabName: 'Credentialing Services',
      title: 'Facility & Provider Credentialing',
      text: 'Manage the massive task of credentialing hundreds of providers and multiple facilities with our specialized enterprise credentialing team.',
      bullets: [
        'Delegated credentialing support.',
        'Facility Medicare enrollment.',
        'Roster management.',
        'Primary source verification.'
      ]
    }
  ];

  const pricingCardFeatures = [
    'Enterprise RCM Management',
    'Facility & Provider Credentialing',
    'System-wide Integration',
    'Advanced BI Reporting',
    'Legacy AR Resolution',
    'Inpatient & Outpatient Coding',
    'Denial Root-Cause Analysis',
    'Dedicated Enterprise Team'
  ];

  const pricingBullets = [
    'Seamless interoperability with Epic, Cerner, and Meditech',
    'Specialized inpatient and outpatient coding (UB-04 & CMS-1500)',
    'Comprehensive legacy AR resolution projects',
    'Dedicated enterprise account management teams',
    'Enterprise-grade data security and HIPAA compliance',
    'Reduction in cost-to-collect across the network',
    'Advanced BI reporting and custom dashboards',
    'Facility and provider credentialing at scale'
  ];

  const faqs = [
    {
      question: 'Do you handle both institutional (UB-04) and professional (CMS-1500) billing?',
      answer: 'Yes, our enterprise teams have deep expertise in both facility billing and professional billing, allowing us to manage the entire revenue cycle for health systems and their employed physician groups.'
    },
    {
      question: 'Can you work within our existing enterprise EMR, like Epic or Cerner?',
      answer: 'Absolutely. We do not require you to change systems. Our teams log directly into your enterprise EMR via secure VPN to work accounts, ensuring your data never leaves your environment.'
    },
    {
      question: 'How do you handle legacy AR during a system transition?',
      answer: 'We deploy specialized AR strike teams to aggressively work down your legacy AR from your old system, ensuring you collect cash while your internal teams focus on the new system implementation.'
    }
  ];

  return (
    <WhoWeServeTemplate 
      pageTitle="Billing for Hospitals & Health Systems"
      seoDescription="Enterprise-grade medical billing and RCM services for hospitals and health systems. Scale your revenue cycle operations with Transcure."
      heroTitle="Enterprise RCM Solutions for Hospitals & Health Systems"
      heroSubtitle="Maximize revenue, ensure compliance, and scale efficiently with our enterprise billing services."
      heroFeatures={heroFeatures}
      mainContentTitle="Transform Your Health System's Financial Performance"
      mainContentSubtitle="Leverage enterprise-grade technology and expertise."
      mainContentHeading="Is your hospital's revenue cycle keeping pace with your growth?"
      mainContentText1="Hospitals and large health systems face unique revenue cycle challenges: massive claim volumes, complex payer contracts, disparate departmental systems, and strict regulatory requirements. Transcure understands these complexities."
      mainContentText2="We provide enterprise-level RCM services designed to consolidate your billing processes, improve interoperability, and aggressively work down AR, ensuring your health system remains financially strong and ready for expansion."
      mainContentBullets={mainContentBullets}
      ribbonTitle="Enterprise Billing Solutions"
      ribbonItems={ribbonItems}
      rcmTabs={rcmTabs}
      pricingLeftHeading="Why Choose Transcure for Hospital Billing?"
      pricingBullets={pricingBullets}
      pricingCardTitle="Enterprise RCM"
      pricingCardFee="Custom Pricing"
      pricingCardDescription="Scalable revenue cycle management for large health networks"
      pricingCardFeatures={pricingCardFeatures}
      faqs={faqs}
    />
  );
}

export default HospitalsHealthSystemsPage;
