import React from 'react';
import WhoWeServeTemplate from './WhoWeServeTemplate.jsx';
import { FileText, DollarSign, CheckCircle, ShieldCheck, Activity, Users } from 'lucide-react';

function MedicalGroupPracticesPage() {
  const heroFeatures = [
    { 
      icon: <FileText className="w-8 h-8" />, 
      title: 'Super-Fast Claim Submission', 
      description: 'We simplify the claim submission process to help you increase the reimbursement rate. In addition, our certified medical billing team prevents revenue leakages.' 
    },
    { 
      icon: <DollarSign className="w-8 h-8" />, 
      title: 'Advanced Payment Posting', 
      description: 'Improve the payment posting process with TransMedex and achieve a seamless billing process. Also, we empower medical group practices to make better financial decisions.' 
    },
    { 
      icon: <CheckCircle className="w-8 h-8" />, 
      title: 'Clean Claim Submissions', 
      description: 'As a medical billing provider, we make sure that group practices improve the bottom line and avoid claim denials to grow financially.' 
    }
  ];

  const mainContentBullets = [
    'Reduce denials leading to potential revenue losses and boost financial growth.',
    'AHIMA/AAPC certified billing experts for clean medical coding and seamless billing.',
    'Error-free clinical documentation to resolve the issues of underpayments.',
    'Achieve seamless billing for medical group practices to optimize reimbursements.',
    'Improve the bottom line and enhance cash flows with our billing teams.',
    'Make workflows better and save valuable time to focus on patient care.'
  ];

  const ribbonItems = [
    { icon: <ShieldCheck className="w-8 h-8" />, title: 'Claim Scrubbing', description: 'Submit accurate claims to get timely payments and minimize the chances of denials to streamline the billing process.' },
    { icon: <Activity className="w-8 h-8" />, title: 'Pre-Authorization', description: 'We help you save time and focus on patient care by reducing the stress of dealing with the insurance payers.' },
    { icon: <DollarSign className="w-8 h-8" />, title: 'Accounts Receivable Management', description: 'Medical group practices can reduce the AR and improve overall collections with our medical billing group.' }
  ];

  const rcmTabs = [
    {
      tabName: 'End-to-End RCM Services',
      title: 'Revenue Cycle Management Services',
      text: 'Our end-to-end revenue cycle management makes your healthcare practice efficient by optimizing cash flows. Reduce overall costs with our RCM services and improve financial outcomes.',
      bullets: [
        'Customized solutions as per your practice needs.',
        '98% claim acceptance rate.',
        'Optimize performance in value-based care model.',
        'HIPAA compliant solutions.'
      ]
    },
    {
      tabName: 'Medical Billing',
      title: 'Expert Medical Billing',
      text: 'Our medical billing services handle the entire process from charge entry to final payment, ensuring you get paid quickly and correctly.',
      bullets: [
        'Comprehensive claim tracking.',
        'Reduced days in accounts receivable.',
        'Certified medical coders on staff.',
        'Transparent reporting and analytics.'
      ]
    },
    {
      tabName: 'AR Management',
      title: 'Aggressive AR Follow-ups',
      text: 'We actively pursue aging accounts and resolve denied claims to ensure your practice recovers the maximum possible revenue.',
      bullets: [
        'Dedicated follow-up team.',
        'Denial analysis and resolution.',
        'Appeals for underpaid claims.',
        'Consistent cash flow improvement.'
      ]
    },
    {
      tabName: 'Credentialing Services',
      title: 'Provider Credentialing',
      text: 'Stay in-network with crucial payers. We handle the complex paperwork and follow-ups required for initial credentialing and re-credentialing.',
      bullets: [
        'CAQH profile management.',
        'Medicare and Medicaid enrollment.',
        'Commercial payer contracting.',
        'Expirations tracking and renewal.'
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
    'Experienced team handling multi-provider billing',
    'Customized reporting for each provider and location',
    'Advanced denial management and prevention',
    'Seamless integration with group practice EMRs',
    'HIPAA Compliant & ISO27001 Certified',
    'Reduction in overall administrative costs',
    'Dedicated account managers for your group',
    'Comprehensive MIPS and MACRA reporting'
  ];

  const faqs = [
    {
      question: 'How do you handle billing for multiple providers in different locations?',
      answer: 'Our systems are designed for scale. We track and report on revenue down to the individual provider level, while managing the consolidated billing for the entire group.'
    },
    {
      question: 'Can you integrate with our existing group practice software?',
      answer: 'Yes, we have deep experience integrating with over 40 different EMR and EHR platforms used by medical group practices.'
    },
    {
      question: 'What is your success rate with claim denials?',
      answer: 'Our first-pass clean claim rate is 98%, and our dedicated denial management team aggressively pursues any remaining denials to ensure maximum reimbursement.'
    }
  ];

  return (
    <WhoWeServeTemplate 
      pageTitle="Medical Group Practices Billing Services"
      seoDescription="Enhance your medical group practice's billing process with TransMedex. Super-fast claim submission, advanced payment posting, and clean claim submissions."
      heroTitle="Enhance Billing Process of Medical Group Practices"
      heroImage="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1600&q=80"
      heroSubtitle="Streamline medical billing and get timely payments."
      heroFeatures={heroFeatures}
      mainContentTitle="Enhance Operational Efficiency with Hospital Billing Company"
      mainContentSubtitle="Leverage These Benefits of Choosing TransMedex"
      mainContentHeading="Managing your group practice plus billing services, sounds great?"
      mainContentText1="TransMedex provides end-to-end RCM services for medical group practices. As an expert medical billing group, we ensure seamless reimbursements to help you thrive in the modern healthcare ecosystem."
      mainContentText2="Our denial management services help medical group practices to get paid on time for their services. Also, we help you reduce accounts receivable and prevent claim denials to boost revenue growth."
      mainContentBullets={mainContentBullets}
      ribbonTitle="Complete Billing Solutions for Medical Group Practices"
      ribbonItems={ribbonItems}
      rcmTabs={rcmTabs}
      pricingLeftHeading="Why Choose TransMedex for Medical Group Practices?"
      pricingBullets={pricingBullets}
      pricingCardTitle="All-in-One RCM"
      pricingCardFee="5% of Monthly Collections"
      pricingCardDescription="Full-cycle revenue cycle management for healthcare providers"
      pricingCardFeatures={pricingCardFeatures}
      faqs={faqs}
    />
  );
}

export default MedicalGroupPracticesPage;
