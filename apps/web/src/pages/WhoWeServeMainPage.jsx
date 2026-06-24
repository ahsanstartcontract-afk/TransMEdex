import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function WhoWeServeMainPage() {
  return (
    <>
      <Helmet>
        <title>Who We Serve | TransMedex</title>
      </Helmet>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />
        <main className="flex-grow pt-32 pb-20">
          {/* Content deleted as requested */}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default WhoWeServeMainPage;
