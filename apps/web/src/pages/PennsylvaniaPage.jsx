import React from 'react';
import StatePageTemplate from './StatePageTemplate.jsx';

function PennsylvaniaPage() {
  const challenges = [
    { title: 'Regional Payer Monopolies', desc: 'Dealing with dominant regional payers and their specific claim adjudication processes.' },
    { title: 'Intricate Credentialing', desc: 'Navigating complex credentialing requirements for various commercial and state networks.' },
    { title: 'Prior Auth Requirements', desc: 'Extensive pre-authorization requirements for specialty services and advanced imaging.' },
    { title: 'Balance Billing Rules', desc: 'Compliance with state and federal regulations regarding out-of-network billing.' },
  ];

  const locations = [
    { name: 'Philadelphia County', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80' },
    { name: 'Allegheny County', image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80' },
    { name: 'Montgomery County', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80' },
    { name: 'Bucks County', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80' },
    { name: 'Delaware County', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80' },
    { name: 'Lancaster County', image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <StatePageTemplate 
      stateName="Pennsylvania"
      seoDescription="Expert medical billing services in Pennsylvania. AAPC-certified coders, comprehensive RCM, and AI-powered workflows."
      heroImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80"
      challenges={challenges}
      cities={locations}
      locationType="Counties"
    />
  );
}

export default PennsylvaniaPage;
