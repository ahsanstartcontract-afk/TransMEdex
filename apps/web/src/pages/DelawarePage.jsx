import React from 'react';
import StatePageTemplate from './StatePageTemplate.jsx';

function DelawarePage() {
  const challenges = [
    { title: 'Complex Medicaid Rules', desc: 'Navigating Delaware\'s specific Medicaid managed care networks requires meticulous attention to detail.' },
    { title: 'Commercial Payer Mix', desc: 'Balancing a high volume of commercial payers with different fee schedules and claim requirements.' },
    { title: 'Prior Auth Requirements', desc: 'Extensive pre-authorization requirements for specialty services and advanced imaging.' },
    { title: 'Balance Billing Rules', desc: 'Compliance with state and federal regulations regarding out-of-network billing.' },
  ];

  const locations = [
    { name: 'New Castle County', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80' },
    { name: 'Kent County', image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80' },
    { name: 'Sussex County', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <StatePageTemplate 
      stateName="Delaware"
      seoDescription="Expert medical billing services in Delaware. AAPC-certified coders, comprehensive RCM, and AI-powered workflows."
      heroImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Delaware.svg/960px-Flag_of_Delaware.svg.png"
      challenges={challenges}
      cities={locations}
      locationType="Counties"
    />
  );
}

export default DelawarePage;
