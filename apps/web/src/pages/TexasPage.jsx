import React from 'react';
import StatePageTemplate from './StatePageTemplate.jsx';

function TexasPage() {
  const challenges = [
    { title: 'Prompt-Pay and Clean-Claim Deadlines', desc: 'Texas carriers can deny or delay payment if claims miss the 95-day filing window, and clean claims must meet strict payment timelines.' },
    { title: 'Prior Authorization and Utilization Review', desc: 'Many services need preauthorization, and Texas requires certified reviewers and same-specialty oversight, which slows revenue cycles.' },
    { title: 'Balance Billing Restrictions', desc: 'Texas and federal surprise billing rules limit out-of-network patient billing for emergencies and certain facility-based care, forcing careful claims handling.' },
    { title: 'Texas Medicaid Managed-Care Complexity', desc: 'HHSC and TMHP rules are plan-specific and updated regularly, so practices face frequent billing edits, denials, and resubmissions.' },
  ];

  const locations = [
    { name: 'Andrews County', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80' },
    { name: 'Aransas County', image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80' },
    { name: 'Bexar County', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80' },
    { name: 'Tarrant County', image: 'https://images.unsplash.com/photo-1502740479091-635887520276?auto=format&fit=crop&w=800&q=80' },
    { name: 'Collin County', image: 'https://images.unsplash.com/photo-1518398046578-8cca57782e17?auto=format&fit=crop&w=800&q=80' },
    { name: 'Travis County', image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <StatePageTemplate 
      stateName="Texas"
      seoDescription="Expert medical billing services in Texas. AAPC-certified coders, AI-powered workflows, and compliance with Texas billing regulations."
      heroImage="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Texas.svg/960px-Flag_of_Texas.svg.png"
      challenges={challenges}
      cities={locations}
      locationType="Counties"
    />
  );
}

export default TexasPage;
