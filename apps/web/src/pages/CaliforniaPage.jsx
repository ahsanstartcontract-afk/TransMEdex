import React from 'react';
import StatePageTemplate from './StatePageTemplate.jsx';

function CaliforniaPage() {
  const challenges = [
    { title: 'Medi-Cal Complexity', desc: 'Multiple regional/county plans with different payment schedules and complex enrollment processes.' },
    { title: 'Timely Filing Limits', desc: '180-day filing deadlines for most California payers, requiring strict oversight to avoid denials.' },
    { title: 'Prior Auth Requirements', desc: 'Extensive pre-authorization requirements for many services, slowing down patient care and billing.' },
    { title: 'Balance Billing Rules', desc: 'Strict California patient protection laws on out-of-network charges limit revenue collection options.' },
  ];

  const locations = [
    { name: 'Los Angeles County', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80' },
    { name: 'San Diego County', image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80' },
    { name: 'Orange County', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80' },
    { name: 'Riverside County', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80' },
    { name: 'San Bernardino County', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80' },
    { name: 'Santa Clara County', image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <StatePageTemplate 
      stateName="California"
      seoDescription="Expert medical billing services in California. AAPC-certified coders, Medi-Cal compliance, and AI-powered workflows."
      heroImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80"
      challenges={challenges}
      cities={locations}
      locationType="Counties"
    />
  );
}

export default CaliforniaPage;
