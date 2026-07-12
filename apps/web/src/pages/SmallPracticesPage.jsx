import React from 'react';
import WhoWeServeTemplate from './WhoWeServeTemplate.jsx';
import { ShieldCheck, Calendar, Users, BadgeCheck, Activity } from 'lucide-react';

function SmallPracticesPage() {
  const heroFeatures = [
    { 
      icon: <Users className="w-8 h-8" />, 
      title: 'Dedicated Support Team', 
      description: 'Small practices get big attention. Enjoy a dedicated billing manager who understands the unique needs of your independent practice.' 
    },
    { 
      icon: <Calendar className="w-8 h-8" />, 
      title: 'Streamlined Front Desk', 
      description: 'We help optimize your patient scheduling and eligibility verification, making your small front-office team highly efficient.' 
    },
    { 
      icon: <ShieldCheck className="w-8 h-8" />, 
      title: 'Financial Stability', 
      description: 'Ensure consistent cash flow so you can focus on building patient relationships instead of worrying about payroll.' 
    }
  ];

  const mainContentBullets = [
    'Affordable solutions tailored specifically for solo practitioners and small clinics.',
    'Eliminate the disruption caused by billing staff turnover or vacations.',
    'Easy-to-understand financial dashboards and transparent reporting.',
    'Seamless integration with your current EMR or EHR software.',
    'Expert coding guidance to prevent audits and ensure maximum legal reimbursement.',
    'Relentless follow-up on small balance claims that are often ignored in-house.'
  ];

  const ribbonItems = [
    { icon: <Users className="w-8 h-8" />, title: 'Certified Billing Experts', description: 'Access experienced billing professionals who understand your specialty.' },
    { icon: <BadgeCheck className="w-8 h-8" />, title: 'Credentialing & Enrollment', description: 'Start seeing patients and getting paid faster with end-to-end credentialing support that accelerates payer onboarding.' },
    { icon: <Activity className="w-8 h-8" />, title: 'Real-Time Insurance Eligibility Checks', description: 'Prevent rejections before they happen with automated eligibility verification, ensuring every patient is covered.' }
  ];

  const rcmTabs = [
    {
      tabName: 'End-to-End RCM Services',
      title: 'Tailored RCM for Small Practices',
      text: 'We provide a complete, outsourced business office for your small practice, handling everything from verification to final payment.',
      bullets: [
        'No setup fees or hidden costs.',
        'Dedicated point of contact.',
        'Customized workflows.',
        'HIPAA compliant solutions.'
      ]
    },
    {
      tabName: 'Medical Billing',
      title: 'Expert Medical Billing',
      text: 'We ensure that your claims go out clean and get paid fast, providing the steady cash flow a small practice relies on.',
      bullets: [
        'Daily claim submissions.',
        'Secondary claim filing.',
        'Certified medical coders.',
        'Payment posting.'
      ]
    },
    {
      tabName: 'AR Management',
      title: 'Aggressive AR Follow-ups',
      text: 'We chase down every dollar owed to you, regardless of the amount, because we know every claim matters to a small practice.',
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
      text: 'Starting a new practice or adding a new payer? We handle the mountains of paperwork so you can start seeing patients sooner.',
      bullets: [
        'New practice setup.',
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
    '100+ Trained small practices Medical Billers and Coders',
    'ICD-10, CPT, HCPCS Proficiency',
    'Expertise in 40+ small practices software & EHRs',
    'Smooth Billing Software Transition & Integration in Workflows',
    'HIPAA Compliant & ISO27001 Certified Medical Billing Company',
    'Accounts Receivable Recovery within Just 24 Days',
    'Reduces Your Expenses by 20%',
    'Daily, Weekly, & Monthly Claim Status Reporting'
  ];

  const faqs = [
    {
      question: 'Which company is best for medical billing for small practices?',
      answer: 'TransMedex is widely considered a top choice for small practices because we offer enterprise-level RCM tools tailored to the specific needs and budgets of solo practitioners and small clinics.'
    },
    {
      question: 'What is TransMedex\'s pricing model for medical billing for small practices?',
      answer: 'We offer an affordable flat rate of 5% of monthly collections. There are no setup fees or hidden charges. We only get paid when you get paid.'
    },
    {
      question: 'Is TransMedex compliant with healthcare regulations?',
      answer: 'Yes, TransMedex is strictly HIPAA compliant and ISO 27001 certified. We prioritize the security and confidentiality of all your patient and practice data.'
    }
  ];

  return (
    <WhoWeServeTemplate 
      pageTitle="Medical Billing for Small Practices"
      seoDescription="Affordable, expert medical billing services tailored for solo practitioners and small medical practices. Improve cash flow with TransMedex."
      heroTitle="Empowering Small Practices with Expert Medical Billing"
      heroImage="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1600&q=80"
      heroSubtitle="Big-practice resources and technology, personalized for your small clinic."
      heroFeatures={heroFeatures}
      mainContentTitle="Focus on Your Patients, We'll Focus on Your Payments"
      mainContentSubtitle="Discover why small practices trust TransMedex for their financial health."
      mainContentHeading="Struggling to balance patient care with billing headaches?"
      mainContentText1="For solo practitioners and small medical groups, managing billing in-house often means the physician is spending evenings and weekends dealing with insurance companies instead of resting or focusing on clinical care."
      mainContentText2="TransMedex offers a lifeline. Our comprehensive medical billing services act as your virtual back-office, bringing enterprise-level technology and expertise to your small practice at a fraction of the cost of hiring an in-house biller."
      mainContentBullets={mainContentBullets}
      ribbonTitle="Flexible Billing Solutions That Fit Small Practice Needs"
      ribbonItems={ribbonItems}
      rcmTabs={rcmTabs}
      pricingLeftHeading="Why Choose TransMedex for Medical Billing Services for Small Practices?"
      pricingBullets={pricingBullets}
      pricingCardTitle="All-in-One RCM"
      pricingCardFee="5% of Monthly Collections"
      pricingCardDescription="Full-cycle revenue cycle management for healthcare providers"
      pricingCardFeatures={pricingCardFeatures}
      faqs={faqs}
    />
  );
}

export default SmallPracticesPage;
