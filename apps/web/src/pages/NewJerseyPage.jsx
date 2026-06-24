import React from 'react';
import StatePageTemplate from './StatePageTemplate.jsx';

function NewJerseyPage() {
  const challenges = [
    { title: 'Dense Payer Network', desc: 'Navigating a complex web of commercial payers, HMOs, and state-specific Medicaid plans.' },
    { title: 'Strict State PIP Billing', desc: 'Managing New Jersey\'s specific Personal Injury Protection (PIP) regulations for auto accidents.' },
    { title: 'Prior Auth Requirements', desc: 'Extensive pre-authorization requirements for specialty services and advanced imaging.' },
    { title: 'Balance Billing Rules', desc: 'Compliance with state and federal regulations regarding out-of-network billing.' },
  ];

  const locations = [
    { name: 'Bergen County', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80' },
    { name: 'Middlesex County', image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80' },
    { name: 'Essex County', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80' },
    { name: 'Hudson County', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80' },
    { name: 'Monmouth County', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80' },
    { name: 'Ocean County', image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <StatePageTemplate 
      stateName="New Jersey"
      seoDescription="Expert medical billing services in New Jersey. AAPC-certified coders, PIP compliance, and AI-powered workflows."
      heroImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80"
      challenges={challenges}
      cities={locations}
      locationType="Counties"
    />
  );
}

export default NewJerseyPage;
