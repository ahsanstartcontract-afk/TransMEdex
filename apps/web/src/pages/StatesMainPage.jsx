import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const defaultImages = [
  'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1473220464506-69d5a9d66db1?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1428366890462-dd4baecf492b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1502899576159-f224dc2349fa?auto=format&fit=crop&w=600&q=80'
];

const specificStatesData = [
  { name: 'Texas', desc: "Boost your practice's revenue with our expert medical billing services in Texas and achieve 99% accurate claim submissions." },
  { name: 'California', desc: "Our comprehensive medical billing services in California stay updated with local California payers and ensure compliance." },
  { name: 'Florida', desc: "Searching for a trusted medical billing company in Florida. Our team offers effective RCM services to improve your revenue cycle." },
  { name: 'New York', desc: "Enhance your practice's revenue with our reliable medical billing services in New York, ensuring seamless claim processing and compliance with state regulations." },
  { name: 'New Jersey', desc: "Optimize revenue cycle management with TransMedex's expert medical billing services in New Jersey. Reduce claim denials and ensure compliance." },
  { name: 'Delaware', desc: "Boost your practice's revenue with our expert medical billing services in Delaware and achieve 99% accurate claim submissions." },
  { name: 'Pennsylvania', desc: "Optimize your revenue cycle management with TransMedex's expert medical billing services in Pennsylvania. Reduce claim denials and ensure compliance." },
  { name: 'Nevada', desc: "Looking for local medical billing services in Nevada? Partner with TransMedex for up to 30% improvement in your net revenue." },
  { name: 'Michigan', desc: "TransMedex delivers accurate medical billing services in Michigan to strengthen collections and limit claim denials." },
  { name: 'Utah', desc: "TransMedex offers consistent medical billing services in Utah to improve collections and minimize claim issues." },
  { name: 'Illinois', desc: "Choose TransMedex's medical billing services in Illinois to improve reimbursements and maintain billing compliance." },
  { name: 'Colorado', desc: "Improve reimbursements with TransMedex's medical billing services in Colorado. We reduce claim issues and support full compliance." },
  { name: 'North Carolina', desc: "Strengthen collections with TransMedex's medical billing services in North Carolina. We reduce errors and improve payments." },
  { name: 'Alabama', desc: "TransMedex provides reliable medical billing services in Alabama to reduce claim denials, improve reimbursements, and keep your practice compliant." },
  { name: 'Alaska', desc: "Get dependable medical billing services in Alaska with TransMedex. We help lower denials, speed up payments, and maintain compliance." },
  { name: 'Arizona', desc: "TransMedex delivers accurate medical billing services in Arizona to improve collections, prevent errors, and protect compliance." },
  { name: 'Arkansas', desc: "Choose TransMedex's medical billing services in Arkansas to cut claim rejections, increase revenue, and maintain billing accuracy." },
  { name: 'Connecticut', desc: "TransMedex provides trusted medical billing services in Connecticut to lower denials and keep your revenue cycle on track." },
  { name: 'Georgia', desc: "Rely on TransMedex's medical billing services in Georgia to prevent claim rejections and accelerate your practice's cash flow." },
  { name: 'Hawaii', desc: "TransMedex delivers consistent medical billing services in Hawaii to streamline your revenue cycle and ensure steady payments." },
  { name: 'Idaho', desc: "Strengthen collections with TransMedex's medical billing services in Idaho. We simplify billing operations to boost your bottom line." },
  { name: 'Indiana', desc: "TransMedex provides efficient medical billing services in Indiana to lower denials and protect your revenues." },
  { name: 'Iowa', desc: "Get dependable medical billing services in Iowa with TransMedex. We reduce billing errors and speed up payments." },
  { name: 'Kansas', desc: "TransMedex's medical billing services in Kansas help cut rejections and improve overall revenue performance." },
  { name: 'Kentucky', desc: "Improve financial stability with TransMedex's medical billing services in Kentucky. Reduce denials and ensure accuracy." },
  { name: 'Louisiana', desc: "TransMedex offers reliable medical billing services in Louisiana to prevent claim issues and increase collections." },
  { name: 'Maine', desc: "Simplify revenue management with TransMedex's medical billing services in Maine. We help reduce errors and delays." },
  { name: 'Maryland', desc: "TransMedex provides professional medical billing services in Maryland to lower denials and maintain compliance." },
  { name: 'Massachusetts', desc: "Improve payment turnaround with TransMedex's medical billing services in Massachusetts. Reduce rejections and protect revenue." },
  { name: 'Minnesota', desc: "Choose TransMedex's medical billing services in Minnesota to improve cash flow and reduce billing mistakes." },
  { name: 'Mississippi', desc: "TransMedex offers dependable medical billing services in Mississippi to lower denials and ensure clean claims." },
  { name: 'Missouri', desc: "Strengthen your revenue cycle with TransMedex's medical billing services in Missouri. We reduce rejections and delays." },
  { name: 'Montana', desc: "TransMedex provides consistent medical billing services in Montana to prevent errors and improve reimbursements." },
  { name: 'Nebraska', desc: "Improve billing accuracy with TransMedex's medical billing services in Nebraska. We help reduce denials and speed payments." },
  { name: 'New Hampshire', desc: "Choose TransMedex's medical billing services in New Hampshire to maintain compliance and reduce billing errors." },
  { name: 'New Mexico', desc: "Improve revenue performance with TransMedex's medical billing services in New Mexico. Reduce claim issues and delays." },
  { name: 'North Dakota', desc: "TransMedex offers efficient medical billing services in North Dakota to limit claim rejections and increase revenues." },
  { name: 'Ohio', desc: "Choose TransMedex's medical billing services in Ohio to improve reimbursement rates and reduce billing mistakes." },
  { name: 'Oklahoma', desc: "TransMedex provides dependable medical billing services in Oklahoma to prevent denials and improve collections." },
  { name: 'Oregon', desc: "Improve claim accuracy with TransMedex's medical billing services in Oregon. Reduce rejections and speed payments." },
  { name: 'Rhode Island', desc: "Get reliable medical billing services in Rhode Island with TransMedex. We reduce claim denials and billing delays." },
  { name: 'South Carolina', desc: "TransMedex delivers professional medical billing services in South Carolina to lower rejections and strengthen collections." },
  { name: 'South Dakota', desc: "Choose TransMedex's medical billing services in South Dakota to prevent billing errors and improve cash flow." },
  { name: 'Tennessee', desc: "TransMedex provides accurate medical billing services in Tennessee to reduce denials and protect revenue." },
  { name: 'Vermont', desc: "Improve billing performance with TransMedex's medical billing services in Vermont. Reduce denials and speed reimbursements." }
];

const allStatesList = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const statesData = allStatesList.map((stateName, index) => {
  const specificData = specificStatesData.find(s => s.name === stateName);
  return {
    name: stateName,
    path: `/states/${stateName.toLowerCase().replace(/\s+/g, '-')}`,
    desc: specificData ? specificData.desc : `Optimize your revenue cycle management with TransMedex's expert medical billing services in ${stateName}. Reduce claim denials and ensure compliance.`,
    image: defaultImages[index % defaultImages.length]
  };
});

export default function StatesMainPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950 font-sans">
      <Helmet>
        <title>States We Serve | TransMedex</title>
        <meta
          name="description"
          content="TransMedex provides expert medical billing and RCM services across all 50 US states. Find tailored solutions for your state's regulations."
        />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <div className="bg-[#f4f5f8] pt-32 pb-16 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-10">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-slate-950 leading-snug"
            >
              Complete RCM Services Serving Providers Across Every US State
            </motion.h1>
          </div>
          <div className="flex justify-center md:justify-end">
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1024&q=80" 
              alt="Map of USA" 
              className="w-full h-auto max-h-72 object-contain rounded-2xl shadow-lg opacity-90"
            />
          </div>
        </div>
      </div>

      <main className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-950 mb-4 tracking-tight">
              Which States Does TransMedex Serve With Their Medical Billing Services?
            </h2>
            <p className="max-w-3xl mx-auto text-slate-600 text-[15px] leading-relaxed">
              TransMedex serves the following states with their complete medical billing services, from prior authorization and coding to claim submission and denial management.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {statesData.map((state, index) => (
              <motion.div
                key={state.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: (index % 10) * 0.05 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={state.image} 
                    alt={`${state.name} cityscape`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-[#0da1df] text-xl font-semibold mb-3">
                    {state.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {state.desc}
                  </p>
                  <Link 
                    to={state.path}
                    className="text-[#0da1df] font-bold text-sm tracking-wide hover:underline mt-auto"
                  >
                    Optimize Billing Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}


