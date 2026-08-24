import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Calendar, ArrowRight, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

/* ──────────────────────────────────────────────
   Blog post data (static for now)
   ────────────────────────────────────────────── */
const blogPosts = [
  {
    id: 1,
    title: 'Urology Billing Guide: Codes, Modifiers, Denials, and Reimbursement',
    excerpt: 'Master urology billing with CPT codes, modifier details, prevention, reimbursement strategies, and documentation tips to improve clean claims and maximize revenue.',
    category: 'MEDICAL BILLING',
    date: '06/16/2026',
    image: '/blog/urology-billing.webp',
    slug: 'urology-billing-guide',
    color: '#7c3aed'
  },
  {
    id: 2,
    title: 'CPT Code 64612: Description, Cost, Scenarios, and Rules',
    excerpt: 'Learn CPT code 64612 billing rates, Medicare payment, modifiers, e-codes, ICD-10 codes, reimbursement, documentation, and common denial tips for 2026.',
    category: 'MEDICAL BILLING',
    date: '06/16/2026',
    image: '/blog/cpt-64612.webp',
    slug: 'cpt-code-64612',
    color: '#0da1df'
  },
  {
    id: 3,
    title: 'CPT Code 49083: Description, Cost, Scenarios, and Rules',
    excerpt: 'CPT code 49083 covers abdominal paracentesis with imaging guidance. Learn the Medicare payment, correct modifiers, ICD-10 coding, and RCO bundling rules for accurate billing.',
    category: 'MEDICAL BILLING',
    date: '06/16/2026',
    image: '/blog/cpt-49083.webp',
    slug: 'cpt-code-49083',
    color: '#dc2626'
  },
  {
    id: 4,
    title: 'Top 10 Ophthalmology Billing Companies in the USA',
    excerpt: 'Compare the top 10 ophthalmology billing companies in the USA. Read company data, verified contacts, and key points to help your eye care practice cut denials.',
    category: 'MEDICAL BILLING',
    date: '06/16/2026',
    image: '/blog/ophthalmology-billing.webp',
    slug: 'ophthalmology-billing-companies',
    color: '#7c3aed'
  },
  {
    id: 5,
    title: 'ICD-10 Codes for ASC: Complete 2026 Billing Guide by Specialty',
    excerpt: 'Explore ICD-10 codes for ASC billing by specialty, HIPAA updates, denial prevention strategies, CPT pairing rules, and coding compliance best practices.',
    category: 'MEDICAL BILLING',
    date: '06/16/2026',
    image: '/blog/icd10-asc.webp',
    slug: 'icd10-codes-asc',
    color: '#0da1df'
  },
  {
    id: 6,
    title: 'New Jersey Prompt Pay Law: Deadlines, Interest & Appeals',
    excerpt: 'Complete guide to N.J.A.C. 11:22-1 including payment deadlines, interest rates, the internal appeal and arbitration path, and which payers are exempt from the rule.',
    category: 'MEDICAL BILLING',
    date: '06/16/2026',
    image: '/blog/nj-prompt-pay.webp',
    slug: 'nj-prompt-pay-law',
    color: '#7c3aed'
  },
  {
    id: 7,
    title: 'eClinicalWorks vs Epic: A 2026 EHR Comparison for Healthcare Decision-Makers',
    excerpt: 'eClinicalWorks vs Epic compared on pricing, market share, interoperability, output, and which one your specialty and facility type need.',
    category: 'MEDICAL BILLING',
    date: '06/17/2026',
    image: '/blog/ecw-vs-epic.webp',
    slug: 'eclinicalworks-vs-epic',
    color: '#0da1df'
  },
  {
    id: 8,
    title: 'HCPCS Code J2785: Description, Cost, Scenarios, and Rules',
    excerpt: 'It is a drug used for 1 unit of 275 mg, and one vial is 1 serving and you surrender three quarters of the drug payment. Run rates, packaging, and denied fees.',
    category: 'MEDICAL BILLING',
    date: '06/17/2026',
    image: '/blog/hcpcs-j2785.webp',
    slug: 'hcpcs-code-j2785',
    color: '#7c3aed'
  },
  {
    id: 9,
    title: 'HCPCS Code J9332: Description, Cost, Scenarios, and Rules',
    excerpt: 'Learn HCPCS code J9332 billing rates for Keytruda, including documentation, refill modifiers, ICD-10 coding, reimbursement, prior authorization, and cost guidelines for 2026.',
    category: 'MEDICAL BILLING',
    date: '06/17/2026',
    image: '/blog/hcpcs-j9332.webp',
    slug: 'hcpcs-code-j9332',
    color: '#dc2626'
  },
  {
    id: 10,
    title: 'Top 10 Internal Medicine Billing Companies in the USA',
    excerpt: 'Explore the top 10 internal medicine billing companies in the USA. This guide covers ratings and key features to find your ideal billing partner.',
    category: 'MEDICAL BILLING',
    date: '06/17/2026',
    image: '/blog/internal-medicine-billing.webp',
    slug: 'internal-medicine-billing-companies',
    color: '#0da1df'
  },
  {
    id: 11,
    title: 'POEM Procedure Billing and Coding Guide for US Practices',
    excerpt: 'Learn connectivity of POEM coding for POEM procedures, denial common denials, and understand ICD-10, prior authorization, and modifier billing requirements for all practices.',
    category: 'GASTROENTEROLOGY',
    date: '06/21/2026',
    image: '/blog/poem-procedure.webp',
    slug: 'poem-procedure-billing',
    color: '#7c3aed'
  },
  {
    id: 12,
    title: 'eClinicalWorks Features: A Complete Guide to the eCW Platform (2026)',
    excerpt: 'Explore eClinicalWorks features across web, practice management, telehealth and review portal to support, Healow Interoperability, and pricing.',
    category: 'MEDICAL BILLING',
    date: '06/21/2026',
    image: '/blog/ecw-features.webp',
    slug: 'eclinicalworks-features',
    color: '#0da1df'
  },
  {
    id: 13,
    title: 'Pediatric ICD-10 Codes: Complete Guide on Pediatric Codes',
    excerpt: 'Complete pediatric ICD-10 code guide at 250 CPT code, age gates, growth, behavioral and chronic codes, plus the clinic best that stop specialty denials.',
    category: 'MEDICAL BILLING',
    date: '06/21/2026',
    image: '/blog/pediatric-icd10.webp',
    slug: 'pediatric-icd10-codes',
    color: '#dc2626'
  },
  {
    id: 14,
    title: 'Pediatric CPT Codes Guide: Well Visits, Vaccines, E/M & Modifiers',
    excerpt: 'Pediatric CPT codes decoded: age-banded well visits, 90460 component counting, modifier 25 placement, and the new 2026 counseling codes. Kind of info.',
    category: 'MEDICAL BILLING',
    date: '06/21/2026',
    image: '/blog/pediatric-cpt.webp',
    slug: 'pediatric-cpt-codes',
    color: '#7c3aed'
  },
  {
    id: 15,
    title: 'General Surgery CPT Codes: The 2026 Cheat Sheet for Surgical Billing',
    excerpt: 'The American College of Surgeons confirms CPT 2026 added new general surgery codes for gastric procedures. Rates also our work rates by 2.6%.',
    category: 'MEDICAL BILLING',
    date: '06/21/2026',
    image: '/blog/general-surgery-cpt.webp',
    slug: 'general-surgery-cpt-codes',
    color: '#0da1df'
  },
  {
    id: 16,
    title: 'Pulmonology ICD-10 Codes: A Respiratory Coding Reference Guide for 2026',
    excerpt: 'Learn pulmonology ICD-10 codes by condition plus COPD exacerbation coding nuances, a respiratory coding failure specialty that keeps claims clean.',
    category: 'MEDICAL BILLING',
    date: '06/21/2026',
    image: '/blog/pulmonology-icd10.webp',
    slug: 'pulmonology-icd10-codes',
    color: '#7c3aed'
  },
  {
    id: 17,
    title: 'Urology ICD-10 Codes: Complete Diagnosis Code Reference by Category',
    excerpt: 'Comprehensive urology ICD-10 code reference by category, with CPT links, NCC flags, and documentation steps for accurate billing.',
    category: 'MEDICAL BILLING',
    date: '06/21/2026',
    image: '/blog/urology-icd10.webp',
    slug: 'urology-icd10-codes',
    color: '#0da1df'
  },
  {
    id: 18,
    title: 'AdvancedMD vs Epic: Practice Size, Cost, and Billing',
    excerpt: 'AdvancedMD serves practices of 2 to 50 clinicians. Epic reaches independent groups above 40. Compare practice size, pricing, billing modules, and migration tips.',
    category: 'MEDICAL BILLING',
    date: '06/24/2026',
    image: '/blog/advancedmd-vs-epic.webp',
    slug: 'advancedmd-vs-epic',
    color: '#7c3aed'
  },
  {
    id: 19,
    title: 'Pulmonary CPT Codes 2026: Cheat Sheet with 70+ Codes',
    excerpt: 'Do you know that bronchoscopy has more than 31 CPT codes, whereas pulmonary function test (PFT) has 22? How acid sleep medicine, pulmonary rehabilitation, respiratory.',
    category: 'MEDICAL BILLING',
    date: '06/24/2026',
    image: '/blog/pulmonary-cpt.webp',
    slug: 'pulmonary-cpt-codes',
    color: '#dc2626'
  },
  {
    id: 20,
    title: 'A Comprehensive Guide to Urology CPT Codes (2026)',
    excerpt: 'This guide explains urology CPT codes: categories, common codes, modifiers, NCC edits, and the 2026 prostate biopsy and transplant code changes.',
    category: 'MEDICAL BILLING',
    date: '07/02/2026',
    image: '/blog/urology-cpt.webp',
    slug: 'urology-cpt-codes',
    color: '#0da1df'
  },
  {
    id: 21,
    title: 'Dermatology Billing Guide: CPT Codes, Modifiers & Compliance Tips',
    excerpt: 'Complete dermatology billing reference covering E/M codes, biopsy coding, Mohs surgery modifiers, and payer-specific documentation requirements for 2026.',
    category: 'MEDICAL BILLING',
    date: '07/05/2026',
    image: '/blog/dermatology-billing.webp',
    slug: 'dermatology-billing-guide',
    color: '#7c3aed'
  },
  {
    id: 22,
    title: 'How to Reduce Claim Denials: A Step-by-Step Action Plan',
    excerpt: 'Discover the top 10 denial reasons in medical billing and proven strategies to prevent them. Reduce your denial rate below 5% with this actionable guide.',
    category: 'MEDICAL BILLING',
    date: '07/08/2026',
    image: '/blog/reduce-denials.webp',
    slug: 'reduce-claim-denials',
    color: '#0da1df'
  },
  {
    id: 23,
    title: 'Credentialing vs Privileging: What Every Practice Needs to Know',
    excerpt: 'Understand the key differences between provider credentialing and privileging, timelines, required documents, and how delays impact your revenue cycle.',
    category: 'MEDICAL BILLING',
    date: '07/10/2026',
    image: '/blog/credentialing.webp',
    slug: 'credentialing-vs-privileging',
    color: '#dc2626'
  },
  {
    id: 24,
    title: 'Telehealth Billing Guide 2026: CPT Codes, Modifiers & Place of Service',
    excerpt: 'Navigate telehealth reimbursement with updated CPT codes, modifier 95 vs GT, POS 02 vs 10, and state-by-state parity law differences for 2026.',
    category: 'MEDICAL BILLING',
    date: '07/12/2026',
    image: '/blog/telehealth-billing.webp',
    slug: 'telehealth-billing-guide',
    color: '#7c3aed'
  },
  {
    id: 25,
    title: 'Medical Billing KPIs: 12 Metrics Every Practice Should Track',
    excerpt: 'From days in A/R to clean claim rate, learn the 12 essential KPIs that reveal the true health of your revenue cycle and how to benchmark them.',
    category: 'MEDICAL BILLING',
    date: '07/14/2026',
    image: '/blog/billing-kpis.webp',
    slug: 'medical-billing-kpis',
    color: '#0da1df'
  },
  {
    id: 26,
    title: 'ICD-10 Coding for Mental Health: Depression, Anxiety & PTSD',
    excerpt: 'Accurate ICD-10 coding for behavioral health conditions including major depressive disorder, generalized anxiety, PTSD, and substance use disorders.',
    category: 'BEHAVIORAL HEALTH',
    date: '07/16/2026',
    image: '/blog/mental-health-icd10.webp',
    slug: 'mental-health-icd10',
    color: '#7c3aed'
  },
  {
    id: 27,
    title: 'Prior Authorization Best Practices for Faster Approvals',
    excerpt: 'Streamline your prior auth workflow with electronic submission tips, payer-specific requirements, and appeal letter templates that actually work.',
    category: 'MEDICAL BILLING',
    date: '07/18/2026',
    image: '/blog/prior-auth.webp',
    slug: 'prior-authorization-best-practices',
    color: '#dc2626'
  },
  {
    id: 28,
    title: 'Orthopedic Billing: Complete CPT & ICD-10 Reference for 2026',
    excerpt: 'Master orthopedic billing with fracture care codes, arthroscopy CPT updates, global period rules, and modifier usage for surgical and non-surgical cases.',
    category: 'MEDICAL BILLING',
    date: '07/20/2026',
    image: '/blog/orthopedic-billing.webp',
    slug: 'orthopedic-billing-guide',
    color: '#0da1df'
  },
  {
    id: 29,
    title: 'HIPAA Compliance Checklist for Medical Billing Companies',
    excerpt: 'Ensure your billing operations meet HIPAA requirements with this 15-point compliance checklist covering PHI handling, BAAs, encryption, and staff training.',
    category: 'MEDICAL BILLING',
    date: '07/22/2026',
    image: '/blog/hipaa-compliance.webp',
    slug: 'hipaa-compliance-checklist',
    color: '#7c3aed'
  },
  {
    id: 30,
    title: 'Revenue Cycle Management: The Ultimate 2026 Guide',
    excerpt: 'End-to-end RCM breakdown from patient registration to final payment posting. Learn how top-performing practices achieve 98%+ collection rates.',
    category: 'MEDICAL BILLING',
    date: '07/25/2026',
    image: '/blog/rcm-guide.webp',
    slug: 'rcm-ultimate-guide',
    color: '#0da1df'
  },
  {
    id: 31,
    title: 'Gastroenterology Billing: EGD, Colonoscopy & Modifier 59 Rules',
    excerpt: 'Detailed gastroenterology billing guide covering screening vs diagnostic colonoscopy, EGD coding, polyp removal add-ons, and modifier 59 unbundling.',
    category: 'GASTROENTEROLOGY',
    date: '07/28/2026',
    image: '/blog/gi-billing.webp',
    slug: 'gastroenterology-billing',
    color: '#dc2626'
  },
  {
    id: 32,
    title: 'How to Choose a Medical Billing Company: 8 Questions to Ask',
    excerpt: 'Not all billing companies are equal. Use these 8 critical questions to evaluate transparency, technology, specialty expertise, and contract terms.',
    category: 'MEDICAL BILLING',
    date: '07/30/2026',
    image: '/blog/choose-billing-company.webp',
    slug: 'choose-medical-billing-company',
    color: '#7c3aed'
  },
  {
    id: 33,
    title: 'E/M Coding Changes 2026: What Providers Must Know',
    excerpt: 'Stay current with the latest evaluation and management code updates, including split/shared visit rules, MDM complexity changes, and add-on code G2211.',
    category: 'MEDICAL BILLING',
    date: '08/02/2026',
    image: '/blog/em-coding-2026.webp',
    slug: 'em-coding-changes-2026',
    color: '#0da1df'
  },
  {
    id: 34,
    title: 'Pain Management Billing: Injection Codes, Modifiers & Bundling',
    excerpt: 'Navigate pain management billing complexity with epidural injection codes, trigger point CPTs, fluoroscopy guidance rules, and NCCI bundling edits.',
    category: 'MEDICAL BILLING',
    date: '08/05/2026',
    image: '/blog/pain-management.webp',
    slug: 'pain-management-billing',
    color: '#dc2626'
  },
  {
    id: 35,
    title: 'Medical Billing Outsourcing: Pros, Cons & Cost Analysis',
    excerpt: 'Should your practice outsource billing? Analyze the true cost comparison between in-house and outsourced billing, including hidden expenses most overlook.',
    category: 'MEDICAL BILLING',
    date: '08/08/2026',
    image: '/blog/outsourcing-analysis.webp',
    slug: 'billing-outsourcing-analysis',
    color: '#7c3aed'
  },
  {
    id: 36,
    title: 'Nephrology Billing Guide: Dialysis Codes & MCP Bundling Rules',
    excerpt: 'Comprehensive nephrology billing resource covering monthly capitation payments, dialysis CPT codes, ESRD bundling, and transplant evaluation coding.',
    category: 'MEDICAL BILLING',
    date: '08/10/2026',
    image: '/blog/nephrology-billing.webp',
    slug: 'nephrology-billing-guide',
    color: '#0da1df'
  }
];

const POSTS_PER_PAGE = 9;

const categories = ['All', ...new Set(blogPosts.map((p) => p.category))];

function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  /* Card animations */
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.06, duration: 0.45, ease: 'easeOut' }
    })
  };

  return (
    <>
      <div className="min-h-screen flex flex-col bg-white text-foreground">
        <Header />

        <main className="flex-grow">
          {/* ── Hero ── */}
          <section className="relative bg-gradient-to-br from-[#0c4a6e] via-[#0369a1] to-[#0ea5e9] pt-32 pb-20 overflow-hidden">
            {/* decorative blobs */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#0da1df]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white/90 text-sm font-medium mb-6"
              >
                <BookOpen className="w-4 h-4" />
                TransMedex Knowledge Hub
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight"
              >
                Blog & <span className="text-sky-200">Resources</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-white/75 max-w-2xl mx-auto mb-10"
              >
                Stay ahead with the latest insights on medical billing, CPT &amp; ICD-10 codes, compliance updates, and healthcare revenue optimization.
              </motion.p>


            </div>
          </section>

          {/* ── Category filter pills ── */}
          <section className="bg-slate-50 border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap gap-2.5 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-[#0da1df] text-white shadow-md shadow-[#0da1df]/20'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-[#0da1df]/30 hover:text-[#0da1df]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* ── Blog Grid ── */}
          <section className="py-14 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {paginatedPosts.length === 0 ? (
                <div className="text-center py-24">
                  <div className="text-6xl mb-4">📭</div>
                  <h3 className="text-xl font-bold text-slate-700 mb-2">No articles found</h3>
                  <p className="text-slate-500">Try adjusting your search or filter.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {paginatedPosts.map((post, i) => (
                    <motion.article
                      key={post.id}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-40px' }}
                      variants={cardVariants}
                      className="group flex flex-col rounded-2xl border border-slate-100 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-400"
                    >
                      {/* Image area */}
                      <div className="relative h-52 overflow-hidden bg-slate-100">
                        {/* Placeholder gradient — replace with real <img> when images are ready */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background: `linear-gradient(135deg, ${post.color}22 0%, ${post.color}11 50%, #f1f5f9 100%)`
                          }}
                        />
                        {/* Category badge */}
                        <span
                          className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-white shadow-sm"
                          style={{ backgroundColor: post.color }}
                        >
                          {post.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-1 p-5">
                        <h2 className="text-[17px] font-bold text-slate-900 leading-snug mb-2 group-hover:text-[#0da1df] transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>



                        <div className="border-t border-slate-100 pt-3 flex items-center gap-2 text-xs text-slate-400 font-medium">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}

              {/* ── Pagination ── */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-14">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 text-slate-500 hover:bg-[#0da1df] hover:text-white hover:border-[#0da1df] transition-all disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-slate-500 disabled:hover:border-slate-200"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all ${
                        currentPage === page
                          ? 'bg-[#0da1df] text-white shadow-md shadow-[#0da1df]/20'
                          : 'border border-slate-200 text-slate-500 hover:border-[#0da1df]/30 hover:text-[#0da1df]'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200 text-slate-500 hover:bg-[#0da1df] hover:text-white hover:border-[#0da1df] transition-all disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-slate-500 disabled:hover:border-slate-200"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </section>


        </main>

        <Footer />
      </div>
    </>
  );
}

export default BlogPage;
