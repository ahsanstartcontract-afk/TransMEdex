import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CaseStudiesList from '@/components/CaseStudiesList.jsx';
import { Button } from '@/components/ui/button';

const categoryTitles = {
  services: 'Services',
  specialties: 'Specialties',
  emr: 'EMR Platforms',
  states: 'States We Serve',
  'who-we-serve': 'Who We Serve',
  resources: 'Resources',
};

const formatTitle = (slug) =>
  slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

function GenericPage({ categoryOverride }) {
  const params = useParams();
  const category = categoryOverride || params.category || 'Page';
  const slug = params.slug || categoryOverride || 'overview';
  const pageTitle = formatTitle(slug);
  const categoryLabel = categoryTitles[category] || formatTitle(category);

  return (
    <>
      
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />

        <main className="flex-grow py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-border bg-white p-10 shadow-lg shadow-slate-900/5">
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.32em] text-primary/80">{categoryLabel}</p>
                <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-foreground">{pageTitle}</h1>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                  Discover how TransMedex supports {pageTitle.toLowerCase()} with expert medical billing services, clean claims, and responsive practice support.
                </p>
              </div>

              {slug === 'case-studies' ? (
                <div className="mt-6">
                  <CaseStudiesList />
                </div>
              ) : (
                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="space-y-6 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                    <h2 className="text-xl font-semibold text-slate-950">What this page is about</h2>
                    <p className="text-slate-600 leading-relaxed">
                      This is a dynamic TransMedex page placeholder that keeps your navigation working while we build the full content for this area.
                    </p>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" /> Clean claims and coding support</li>
                      <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" /> Faster reimbursement and billing transparency</li>
                      <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" /> Dedicated specialists for your practice needs</li>
                    </ul>
                  </div>

                  <div className="space-y-6 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold text-slate-950">Next steps</h2>
                    <p className="text-slate-600 leading-relaxed">
                      If you want support right away, our team is ready to help. Contact Us or explore related services for your practice.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                      <Button asChild className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                        <Link to="/contact">Contact Us</Link>
                      </Button>
                      <Button asChild variant="outline" className="rounded-full px-6 py-3 text-sm font-semibold bg-transparent text-slate-700 border-slate-300 hover:bg-slate-100 hover:text-slate-900">
                        <Link to="/services">Explore Our Services</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default GenericPage;



