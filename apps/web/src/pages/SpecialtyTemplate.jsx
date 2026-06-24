import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const specialtyData = {
  'urology': {
    title: 'Urology',
    description: 'Specialized billing for urology practices that handles procedure complexity, payer rules, and implant/device tracking to improve reimbursement.',
    image: 'https://images.unsplash.com/photo-1582719478250-4e8f0a5d6c26?auto=format&fit=crop&w=1200&q=80',
    steps: [
      'Intake & eligibility verification to reduce rejections',
      'Accurate procedure & modifier selection by specialty coders',
      'Pre-submission scrubbing and payer rules validation',
      'Denial triage and focused appeals for highest-yield claims',
      'Monthly specialty reporting and revenue optimization'
    ],
    faqs: [
      { q: 'How do you handle implant/device charges?', a: 'We track implants and devices at charge capture, reconcile with OR logs, and bill using payer-specific rules to maximize recovery.' },
      { q: 'Can you support tele-urology visits?', a: 'Yes â€” we manage telehealth coding, modifiers, and payer policies to ensure compliant submission.' }
    ],
    challenges: [
      'Complex procedure and endoscopy coding',
      'High denial rates for specialized CPTs',
      'Bundling and modifier usage challenges'
    ],
    solutions: [
      'Specialty-trained coders with urology experience',
      'Pre-submission claim scrubbing to reduce denials',
      'Procedure-level documentation support and appeals assistance'
    ],
    procedures: ['Cystoscopy', 'Lithotripsy', 'Prostate procedures', 'Urodynamics']
  },
  'cardiology': {
    title: 'Cardiology',
    description: 'Comprehensive cardiology billing covering device procedures, cath lab coding, and bundled service reconciliation to protect revenue.',
    image: 'https://images.unsplash.com/photo-1587502536263-3f1c8d7b9fbe?auto=format&fit=crop&w=1200&q=80',
    steps: [
      'Device & implant capture and reconciliation',
      'Procedure-level coding with bundle checks',
      'Prior auth and eligibility before scheduled procedures',
      'Denial prevention through clinical documentation improvement'
    ],
    faqs: [
      { q: 'Do you handle cath lab coding?', a: 'Yes â€” our coders have cath lab experience and apply appropriate modifiers and exception rules.' }
    ],
    challenges: [
      'Device and implant charge capture',
      'Complex procedure bundles and global periods',
      'Payer-specific authorization rules'
    ],
    solutions: [
      'Device-tracking workflows to capture implant charges',
      'CPT/CMS bundle optimization and modifier expertise',
      'Authorization and eligibility checks before visits'
    ],
    procedures: ['Cardiac catheterization', 'Stress testing', 'Device implantation']
  },
  'urgent-care': {
    title: 'Urgent Care',
    description: 'High-volume urgent care billing focused on rapid claim turnaround, patient collections, and streamlined documentation.',
    image: 'https://images.unsplash.com/photo-1586772008310-4f4d9a6f9d1a?auto=format&fit=crop&w=1200&q=80',
    steps: [
      'Real-time eligibility and benefit checks at intake',
      'Fast coding templates for walk-in visits',
      'Electronic claim submission with rapid follow-up',
      'Patient-friendly billing and payment solutions'
    ],
    faqs: [
      { q: 'How do you improve collections?', a: 'We implement clear patient statements, online payments, and pre-visit estimates when possible.' }
    ],
    challenges: [
      'Large volumes of low-dollar visits',
      'Point-of-care collections and self-pay handling',
      'Accurate visit-level coding under time pressure'
    ],
    solutions: [
      'Rapid claim processing with electronic submission',
      'Patient-friendly statements and payment plans',
      'Training and templates for accurate visit documentation'
    ],
    procedures: ['Walk-in visits', 'Minor procedures', 'Immunizations & testing']
  },
  'laboratory-billing': {
    title: 'Laboratory Billing',
    description: 'Laboratory billing expertise for panel management, specimen-level rules, and payer pricing differences.',
    image: 'https://images.unsplash.com/photo-1581091012184-7e3b3a6e2cdb?auto=format&fit=crop&w=1200&q=80',
    steps: [
      'Panel mapping and test component handling',
      'Specimen and ordering-provider rule enforcement',
      'Payer pricing optimization and bundles handling'
    ],
    faqs: [
      { q: 'Can you bill complex molecular tests?', a: 'Yes â€” we handle panels, component pricing, and payer negotiation for higher-value molecular testing.' }
    ],
    challenges: [
      'Panel and component billing complexity',
      'Specimen and ordering provider rules',
      'Low reimbursement for common tests'
    ],
    solutions: [
      'Panel mapping and hierarchical logic for clean claims',
      'Coordination with labs on specimen documentation',
      'Payer rate negotiation and monitoring'
    ],
    procedures: ['CBC panels', 'Metabolic panels', 'Molecular testing']
  },
  'behavioral-health': {
    title: 'Behavioral Health',
    description: 'Billing and compliance support for behavioral health providers including telehealth, group sessions, and therapy coding.',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=80',
    steps: [
      'Telehealth and documentation templates',
      'Group session and multi-provider claim workflows',
      'Behavioral health credentialing and payer setup'
    ],
    faqs: [
      { q: 'Do you support teletherapy billing?', a: 'Yes â€” including place-of-service, telehealth modifiers, and state-specific rules.' }
    ],
    challenges: [
      'Telehealth and remote service coding',
      'Group session and multi-provider billing',
      'Licensure and payer credentialing nuances'
    ],
    solutions: [
      'Telehealth-ready documentation templates',
      'Specialized coders for therapy and group visits',
      'Credentialing assistance for behavioral health payers'
    ],
    procedures: ['Individual therapy', 'Group therapy', 'Telehealth sessions']
  },
  'orthopedics': {
    title: 'Orthopedics',
    description: 'Orthopedics billing covering surgical procedures, implant tracking, and therapy billing to ensure correct reimbursement across episodes of care.',
    image: 'https://images.unsplash.com/photo-1576085898326-3c0b78351e27?auto=format&fit=crop&w=1200&q=80',
    steps: [
      'Implant/device charge reconciliation',
      'Surgical coding with global period checks',
      'Integrated therapy and rehab billing'
    ],
    faqs: [
      { q: 'How are implants billed?', a: 'We reconcile OR logs to ensure implants are billed and documented correctly to avoid missed revenue.' }
    ],
    challenges: [
      'Surgical and implant charge capture',
      'Rehab and therapy billing coordination',
      'Bundled global periods and modifier rules'
    ],
    solutions: [
      'Implant and device reconciliation workflows',
      'Integrated therapy billing and documentation support',
      'Surgical coding specialists and denial appeals'
    ],
    procedures: ['Joint replacement', 'Arthroscopy', 'Fracture care']
  },
  'pain-management': {
    title: 'Pain Management',
    description: 'Focused billing for pain management clinics including injection coding, long-term therapy plans, and interventional procedures.',
    image: '/images/specialties/pain-management.svg',
    steps: [
      'Accurate procedure coding for injections and interventions',
      'Chronic therapy documentation and authorization support',
      'Denial management for high-frequency services'
    ],
    faqs: [
      { q: 'Do you handle injection and procedure coding?', a: 'Yes â€” we code injections, nerve blocks, and interventional procedures with specialty-trained coders.' }
    ],
    challenges: ['High visit frequency', 'Authorization for chronic therapies', 'Procedure-level denials'],
    solutions: ['Pre-auth workflows', 'Procedure-specific coding templates', 'Focused denial appeal workflows'],
    procedures: ['Epidural injections', 'Nerve blocks', 'Spinal procedures']
  },
  'nephrology': {
    title: 'Nephrology',
    description: 'Billing support for nephrology covering dialysis, transplant follow-up, and complex labs associated with kidney care.',
    image: '/images/specialties/nephrology.svg',
    steps: ['Dialysis claim optimization', 'Transplant follow-up billing', 'Lab panel coordination'],
    faqs: [{ q: 'Can you bill dialysis services?', a: 'Yes â€” we optimize bundled payments, modifiers, and facility vs professional rules.' }],
    challenges: ['Complex dialysis bundles', 'Multi-provider visit coordination'],
    solutions: ['Bundle mapping', 'Cross-provider claim coordination'],
    procedures: ['Dialysis sessions', 'Transplant follow-ups']
  },
  'asc-billing': {
    title: 'ASC Billing',
    description: 'Ambulatory surgery center billing including facility fees, implant billing, and physician/facility carve-outs.',
    image: '/images/specialties/asc-billing.svg',
    steps: ['Facility vs professional split billing', 'Implant reconciliation', 'Payer-specific ASC rules'],
    faqs: [{ q: 'Do you support ASC billing workflows?', a: 'Yes â€” we manage ASC-specific coding, reimbursement optimization, and implant capture.' }],
    challenges: ['Facility/professional splits', 'Implant charge capture'],
    solutions: ['ASC-native workflows', 'Implant reconciliation'],
    procedures: ['Same-day surgery', 'Minor procedures']
  },
  'neurology': {
    title: 'Neurology',
    description: 'Neurology billing for complex diagnostics, EEG/EMG procedures, and chronic neurology therapy visits.',
    image: '/images/specialties/neurology.svg',
    steps: ['Procedure-level coding for diagnostics', 'Authorization for high-cost testing'],
    faqs: [{ q: 'Can you code EEG/EMG claims?', a: 'Yes â€” our coders are familiar with neurology-specific test codes and bundling rules.' }],
    challenges: ['High-cost diagnostics', 'Complex test mapping'],
    solutions: ['Diagnostic coding specialists', 'Pre-auth coordination'],
    procedures: ['EEG', 'EMG', 'Neuro consults']
  },
  'oncology': {
    title: 'Oncology',
    description: 'Oncology billing managing chemotherapy infusion coding, oral oncolytics, and site-of-care payment differences.',
    image: '/images/specialties/oncology.svg',
    steps: ['Infusion & drug administration coding', 'Oral agent billing workflows', 'Site-of-care reconciliation'],
    faqs: [{ q: 'Do you handle chemotherapy infusion coding?', a: 'Yes â€” including J-codes, drug mapping, and infusion-related services.' }],
    challenges: ['High-cost drug billing', 'Site-of-care payment variance'],
    solutions: ['Drug mapping and reimbursement checks', 'Infusion documentation workflows'],
    procedures: ['Chemotherapy infusion', 'Oncology consults']
  },
  'gastroenterology': {
    title: 'Gastroenterology',
    description: 'Gastroenterology billing for endoscopy, colonoscopy, and complex procedural bundles with pathology correlation.',
    image: '/images/specialties/gastroenterology.svg',
    steps: ['Endoscopy coding and pathology linkage', 'Polypectomy and modifier management'],
    faqs: [{ q: 'Can you handle colonoscopy coding with pathology?', a: 'Yes â€” we reconcile pathology and procedure claims for accurate reimbursement.' }],
    challenges: ['Pathology linkage', 'Polypectomy coding nuances'],
    solutions: ['Procedure-pathology reconciliation', 'Specialty coding templates'],
    procedures: ['Colonoscopy', 'Endoscopy']
  },
  'podiatry': {
    title: 'Podiatry',
    description: 'Podiatry billing covering minor procedures, wound care, and orthotics documentation.',
    image: '/images/specialties/podiatry.svg',
    steps: ['Wound care billing', 'Orthotic and supply coding'],
    faqs: [{ q: 'Do you support orthotic billing?', a: 'Yes â€” including modifiers and durable medical equipment coordination.' }],
    challenges: ['Supply/orthotic coding', 'Wound care bundles'],
    solutions: ['Supply mapping', 'Wound care billing workflows'],
    procedures: ['Wound care', 'Minor procedures']
  },
  'dental': {
    title: 'Dental',
    description: 'Dental billing integration with medical billing for medically-necessary oral services and anesthesia.',
    image: '/images/specialties/dental.svg',
    steps: ['Coordination of medical vs dental coverage', 'Anesthesia and surgical oral coding'],
    faqs: [{ q: 'Can you bill medically-necessary dental procedures?', a: 'Yes â€” we coordinate medical billing for covered dental services.' }],
    challenges: ['Medical vs dental payer rules'],
    solutions: ['Cross-coverage workflows'],
    procedures: ['Oral surgery', 'Anesthesia']
  },
  'pediatrics': {
    title: 'Pediatrics',
    description: 'Pediatrics billing focusing on immunizations, well-child visits, and complex pediatric procedures.',
    image: '/images/specialties/pediatrics.svg',
    steps: ['Immunization capture and billing', 'Age-specific coding templates'],
    faqs: [{ q: 'Do you manage pediatric immunization claims?', a: 'Yes â€” including vaccine administration and inventory reconciliation.' }],
    challenges: ['Vaccine inventory & coding'],
    solutions: ['Immunization workflows and reconciliation'],
    procedures: ['Well-child visits', 'Immunizations']
  },
  'obgyn': {
    title: 'OBGYN',
    description: 'OBGYN billing for prenatal care, deliveries, and gynecological procedures with global period and bundle management.',
    image: '/images/specialties/obgyn.svg',
    steps: ['Prenatal visit bundles', 'Delivery and postpartum coding', 'Gynecologic procedure billing'],
    faqs: [{ q: 'Do you handle delivery global period billing?', a: 'Yes â€” we manage global period rules and postpartum follow-up claims.' }],
    challenges: ['Global periods and modifiers'],
    solutions: ['Global period management and documentation review'],
    procedures: ['Prenatal care', 'Delivery', 'Gynecologic procedures']
  },
  'aba-therapy': {
    title: 'ABA Therapy',
    description: 'ABA-focused billing with session-level tracking, payer authorization management, and behavior-specific code sets.',
    image: 'https://images.unsplash.com/photo-1588774067205-1aeb1b5f6b20?auto=format&fit=crop&w=1200&q=80',
    steps: [
      'Session tracking and batch claim generation',
      'Authorization and plan-of-care verification',
      'School and payer-specific coordination'
    ],
    faqs: [
      { q: 'Can you handle school-based billing?', a: 'Yes â€” we support mixed funding sources and school-based claim requirements.' }
    ],
    challenges: [
      'Session documentation and time-based codes',
      'Payer prior authorization for ongoing therapy',
      'Multiple payers and school-based billing rules'
    ],
    solutions: [
      'Automated session tracking and claims batching',
      'Authorization and benefit verification workflows',
      'School and payer-specific billing support'
    ],
    procedures: ['Behavioral therapy sessions', 'Assessment & progress reports']
  },
  'pme': {
    title: 'PME',
    description: 'PME and occupational health billing including employer invoicing, reports, and return-to-work documentation.',
    image: 'https://images.unsplash.com/photo-1597764696053-8a3be9b8b48b?auto=format&fit=crop&w=1200&q=80',
    steps: [
      'Employer invoicing configuration',
      'Standardized RTW documentation',
      'Consolidated reporting for employers'
    ],
    faqs: [
      { q: 'Do you produce employer reports?', a: 'Yes â€” customizable consolidated invoices and reports for employer clients.' }
    ],
    challenges: [
      'Employer invoicing and billing frequency',
      'Return-to-work documentation requirements',
      'Mixed payer and self-pay scenarios'
    ],
    solutions: [
      'Employer-facing invoicing and consolidated reporting',
      'Standardized RTW documentation templates',
      'Flexible billing models for occupational services'
    ],
    procedures: ['Pre-employment exams', 'Drug screening', 'Fitness-for-duty assessments']
  }
};

const bgImageMap = {
  'laboratory-billing': 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1600&q=80',
  'pain-management': 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1600&q=80',
  'nephrology': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80',
  'asc-billing': 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1600&q=80',
  'neurology': 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1600&q=80',
  'oncology': 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80',
  'gastroenterology': 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1600&q=80',
  'podiatry': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80',
  'dental': 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1600&q=80',
  'pediatrics': 'https://images.unsplash.com/photo-1605684954998-685c79d6a018?auto=format&fit=crop&w=1600&q=80',
  'obgyn': 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&w=1600&q=80',
};

export default function SpecialtyTemplate() {
  const { slug } = useParams();
  const data = specialtyData[slug] || { title: slug, description: 'Information coming soon.', bullets: [] };

  return (
    <div className="min-h-screen bg-[#f6f7ff] text-slate-950">
      <Helmet>
        <title>{data.title} | TransMedex</title>
        <meta name="description" content={data.description} />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{ backgroundImage: `url('${bgImageMap[slug] || 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=80'}')` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4 max-w-6xl">
          <div className="md:w-2/3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              {data.title} billing services
            </h1>
            <p className="text-base sm:text-xl text-slate-200 mb-8 leading-relaxed">
              {data.description}
            </p>
            <div className="flex flex-col xs:flex-row sm:flex-row gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-full">
                Contact Us
              </Button>
              <Button variant="outline" className="border-2 border-white text-white px-8 py-6 text-lg rounded-full hover:bg-white/10 bg-transparent">
                Call (609) 793-0400
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-[1rem] border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold mb-3">Common challenges</h3>
                <ul className="list-disc ml-5 text-slate-600">
                  {data.challenges && data.challenges.map((c, i) => (
                    <li key={i} className="mb-2">{c}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1rem] border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold mb-3">How we help</h3>
                <ul className="list-disc ml-5 text-slate-600">
                  {data.solutions && data.solutions.map((s, i) => (
                    <li key={i} className="mb-2">{s}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1rem] border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold mb-3">Procedures & services</h3>
                <div className="flex flex-wrap gap-3">
                  {data.procedures && data.procedures.map((p, i) => (
                    <span key={i} className="inline-block rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 bg-slate-50">{p}</span>
                  ))}
                </div>
              </div>
              
              {data.steps && (
                <div className="rounded-[1rem] border border-slate-200 bg-white p-6">
                  <h3 className="text-lg font-semibold mb-3">Step-by-step approach</h3>
                  <ol className="list-decimal ml-5 text-slate-600">
                    {data.steps.map((st, i) => (
                      <li key={i} className="mb-2">{st}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            <aside className="rounded-[1rem] border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold mb-3">Why choose our {data.title} team</h3>
              <p className="text-slate-600 mb-4">Experienced coders and billers with specialty-specific knowledge to maximize reimbursement and reduce denials.</p>
              <div className="mb-4">
                <Link to="/contact">
                  <Button className="gradient-bg text-white">Contact Us</Button>
                </Link>
              </div>
              <Link to="/services">
                <div className="inline-flex items-center gap-2 text-primary font-semibold">
                  Explore Services <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
              {data.faqs && (
                <div className="mt-6">
                  <h4 className="text-md font-semibold mb-2">FAQs</h4>
                  <div className="space-y-2 text-slate-600">
                    {data.faqs.map((f, i) => (
                      <details key={i} className="rounded-md border border-slate-100 bg-slate-50 p-3">
                        <summary className="cursor-pointer font-medium">{f.q}</summary>
                        <div className="mt-2 text-sm">{f.a}</div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}



