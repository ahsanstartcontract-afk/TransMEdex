import React from 'react';
import StatePageTemplate from './StatePageTemplate.jsx';

function NewYorkPage() {
  const challenges = [
    { title: 'No-Fault Billing Rules', desc: 'Strict compliance with New York\'s complex No-Fault insurance regulations for accident claims.' },
    { title: 'Complex Medicaid Plans', desc: 'Navigating New York\'s intricate Medicaid managed care system and frequent policy updates.' },
    { title: 'Prior Auth Requirements', desc: 'Extensive pre-authorization requirements for specialty services and advanced imaging.' },
    { title: 'Balance Billing Rules', desc: 'Compliance with state and federal regulations regarding out-of-network billing.' },
  ];

  const locations = [
    { name: 'Kings County', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80' },
    { name: 'Queens County', image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80' },
    { name: 'New York County', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80' },
    { name: 'Suffolk County', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80' },
    { name: 'Bronx County', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80' },
    { name: 'Nassau County', image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <StatePageTemplate 
      stateName="New York"
      seoDescription="Expert medical billing services in New York. AAPC-certified coders, No-Fault compliance, and AI-powered workflows."
      heroImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80"
      challenges={challenges}
      cities={locations}
      locationType="Counties"
    />
  );
}

export default NewYorkPage;
