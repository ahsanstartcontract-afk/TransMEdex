import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { testimonials } from '@/data/testimonialData.js';

const teamMembers = [
  {
    id: 'dr-ahmed',
    name: 'Dr. Ahmed',
    image: '/images/doctors/dr-ahmed.svg',
  },
  {
    id: 'dr-khan-1',
    name: 'Dr. Khan',
    image: '/images/doctors/dr-khan-1.svg',
  },
  {
    id: 'dr-khan-2',
    name: 'Dr. Khan',
    image: '/images/doctors/dr-khan-2.svg',
  }
];

function TestimonialsPage() {
  return (
    <>
      <Helmet>
        <title>Testimonials | TransMedex</title>
        <meta
          name="description"
          content="Read verified TransMedex testimonials from healthcare providers across the United States."
        />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        <Header />

        <main className="pb-24">
          <section className="relative overflow-hidden bg-slate-950 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_40%)]" />
            <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.32em] text-primary/80">Testimonials</p>
                <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">Reviews</h1>
                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Revolutionizing the healthcare paradigm with improved and endorsed services from providers who trust TransMedex.
                </p>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid gap-8 xl:grid-cols-[0.9fr_0.3fr] items-center">
              <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-lg">
                <p className="text-xl leading-8 text-slate-700">"We’ve been working with Transcure for 8 years now and we are satisfied with their services and customer support."</p>
                <p className="text-lg font-semibold text-slate-950">Amber Vaughan</p>
                <p className="text-sm text-slate-500">Office Manager, Harding Memorial Healthcare</p>
              </div>
              <div className="relative rounded-[2rem] border border-slate-200 bg-white p-10 shadow-lg">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10" />
                <div className="absolute left-8 top-16 h-20 w-20 rounded-full bg-emerald-100/80" />
                <p className="text-base font-semibold uppercase tracking-[0.22em] text-primary">Customer voices</p>
                <p className="mt-4 text-xl font-bold text-slate-950">Trusted by health systems, clinics, and specialist providers nationwide.</p>
                <div className="mt-8 space-y-4">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm text-slate-600">Google 4.8 stars from 340+ reviews</p>
                  </div>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm text-slate-600">BBB A+ rating and consistent client retention</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="space-y-6 text-center">
              <p className="text-sm uppercase tracking-[0.32em] text-primary">Our Medical Team</p>
              <h2 className="text-3xl font-bold text-slate-950">Our Medical Team</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {teamMembers.map((doctor) => (
                <div key={doctor.id} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-lg">
                  <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50">
                    <img src={doctor.image} alt={doctor.name} className="h-96 w-full object-cover" />
                  </div>
                  <div className="mt-4 rounded-b-[1.75rem] bg-slate-950 px-4 py-5 text-center text-white">
                    <p className="text-lg font-semibold">{doctor.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-4">
                    <img src={testimonial.image} alt={testimonial.name} className="h-16 w-16 rounded-full border border-slate-200 bg-slate-100 object-cover" />
                    <div>
                      <p className="font-semibold text-slate-950">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mt-6 space-y-4">
                    <p className="text-slate-700 leading-7">"{testimonial.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default TestimonialsPage;
