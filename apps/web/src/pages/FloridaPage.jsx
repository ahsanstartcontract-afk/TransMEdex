import React from 'react';
import StatePageTemplate from './StatePageTemplate.jsx';

function FloridaPage() {
  const challenges = [
    { title: 'High Medicare Population', desc: 'Managing the complexities of Medicare billing, including MACRA, MIPS, and frequent policy updates.' },
    { title: 'Strict PIP Laws', desc: 'Navigating Florida\'s Personal Injury Protection (PIP) laws for accident-related claims.' },
    { title: 'Seasonal Population Shifts', desc: 'Handling fluctuating patient volumes and out-of-state insurance plans during winter months.' },
    { title: 'Managed Care Complexity', desc: 'Dealing with numerous managed care organizations and their specific credentialing requirements.' },
  ];

  const locations = [
    { name: 'Miami-Dade County', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80' },
    { name: 'Broward County', image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80' },
    { name: 'Palm Beach County', image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80' },
    { name: 'Hillsborough County', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80' },
    { name: 'Orange County', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80' },
    { name: 'Pinellas County', image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <StatePageTemplate 
      stateName="Florida"
      seoDescription="Expert medical billing services in Florida. AAPC-certified coders, PIP compliance, and AI-powered workflows."
      heroImage="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Ocean_drive_day_2009j.JPG/960px-Ocean_drive_day_2009j.JPG"
      challenges={challenges}
      cities={locations}
      locationType="Counties"
    />
  );
}

export default FloridaPage;
