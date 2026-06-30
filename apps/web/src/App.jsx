import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from '@/components/ScrollToTop.jsx';

// Pages
import HomePage from '@/pages/HomePage.jsx';
import ContactPage from '@/pages/ContactPage.jsx';
import SpecialtiesPage from '@/pages/SpecialtiesPage.jsx';
import SpecialtyTemplate from '@/pages/SpecialtyTemplate.jsx';
import ABATherapyPage from '@/pages/ABATherapyPage.jsx';
import BehavioralHealthPage from '@/pages/BehavioralHealthPage.jsx';
import CardiologyPage from '@/pages/CardiologyPage.jsx';
import OrthopedicsPage from '@/pages/OrthopedicsPage.jsx';
import PMEPage from '@/pages/PMEPage.jsx';
import SportsMedicinePage from '@/pages/SportsMedicinePage.jsx';
import UrgentCarePage from '@/pages/UrgentCarePage.jsx';
import UrologyPage from '@/pages/UrologyPage.jsx';

// State Pages
import TexasPage from '@/pages/TexasPage.jsx';
import CaliforniaPage from '@/pages/CaliforniaPage.jsx';
import DelawarePage from '@/pages/DelawarePage.jsx';
import FloridaPage from '@/pages/FloridaPage.jsx';
import NevadaPage from '@/pages/NevadaPage.jsx';
import NewJerseyPage from '@/pages/NewJerseyPage.jsx';
import NewYorkPage from '@/pages/NewYorkPage.jsx';
import PennsylvaniaPage from '@/pages/PennsylvaniaPage.jsx';

// Who We Serve Pages
import MedicalGroupPracticesPage from '@/pages/MedicalGroupPracticesPage.jsx';
import OutsourceBillingServicesPage from '@/pages/OutsourceBillingServicesPage.jsx';
import SmallPracticesPage from '@/pages/SmallPracticesPage.jsx';
import HospitalsHealthSystemsPage from '@/pages/HospitalsHealthSystemsPage.jsx';
import IndependentPracticesPage from '@/pages/IndependentPracticesPage.jsx';

// Service Pages
import ServicesPage from '@/pages/ServicesPage.jsx';
import MedicalBillingPage from '@/pages/MedicalBillingPage.jsx';
import RCMPage from '@/pages/RCMPage.jsx';
import CredentialingPage from '@/pages/CredentialingPage.jsx';
import MedicalCodingPage from '@/pages/MedicalCodingPage.jsx';
import ClearinghousePage from '@/pages/ClearinghousePage.jsx';
import MedicalAuditPage from '@/pages/MedicalAuditPage.jsx';
import HealthcareSEOPage from '@/pages/HealthcareSEOPage.jsx';
import LaboratoryBillingPage from '@/pages/LaboratoryBillingPage.jsx';
import MIPSConsultingPage from '@/pages/MIPSConsultingPage.jsx';
import PatientBenefitsEligibilityPage from '@/pages/PatientBenefitsEligibilityPage.jsx';
import MedicalBillingCodingPage from '@/pages/MedicalBillingCodingPage.jsx';
import EpicPage from '@/pages/EpicPage.jsx';
import AthenahealthPage from '@/pages/AthenahealthPage.jsx';
import AdvancedMDPage from '@/pages/AdvancedMDPage.jsx';
import ICANotesPage from '@/pages/ICANotesPage.jsx';
import NextGenPage from '@/pages/NextGenPage.jsx';
import CareCloudPage from '@/pages/CareCloudPage.jsx';
import GenericPage from '@/pages/GenericPage.jsx';
import CompanyPage from '@/pages/CompanyPage.jsx';
import PricingPage from '@/pages/PricingPage.jsx';
import EMRMainPage from '@/pages/EMRMainPage.jsx';
import StatesMainPage from '@/pages/StatesMainPage.jsx';
import WhoWeServeMainPage from '@/pages/WhoWeServeMainPage.jsx';
import ResourcesMainPage from '@/pages/ResourcesMainPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Services Routes */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/medical-billing" element={<MedicalBillingPage />} />
        <Route path="/services/rcm" element={<RCMPage />} />
        <Route path="/services/credentialing" element={<CredentialingPage />} />
        <Route path="/services/medical-coding" element={<MedicalCodingPage />} />
        <Route path="/services/clearinghouse" element={<ClearinghousePage />} />
        <Route path="/services/medical-audit" element={<MedicalAuditPage />} />
        <Route path="/services/healthcare-seo" element={<HealthcareSEOPage />} />
        <Route path="/services/medical-billing-coding" element={<MedicalBillingCodingPage />} />
        <Route path="/services/mips-consulting" element={<MIPSConsultingPage />} />
        <Route path="/services/laboratory-billing" element={<LaboratoryBillingPage />} />
        <Route path="/services/revenue-cycle-management" element={<RCMPage />} />
        <Route path="/services/medical-audit" element={<MedicalAuditPage />} />
        <Route path="/services/eligibility-verification" element={<PatientBenefitsEligibilityPage />} />
        <Route path="/emr/epic" element={<EpicPage />} />
        <Route path="/emr/athenahealth" element={<AthenahealthPage />} />
        <Route path="/emr/advancedmd" element={<AdvancedMDPage />} />
        <Route path="/emr/icanotes" element={<ICANotesPage />} />
        <Route path="/emr/nextgen" element={<NextGenPage />} />
        <Route path="/emr/carecloud" element={<CareCloudPage />} />
        
        {/* Specialties Routes */}
        <Route path="/specialties" element={<SpecialtiesPage />} />
        <Route path="/specialties/aba-therapy" element={<ABATherapyPage />} />
        <Route path="/specialties/behavioral-health" element={<BehavioralHealthPage />} />
        <Route path="/specialties/cardiology" element={<CardiologyPage />} />
        <Route path="/specialties/orthopedics" element={<OrthopedicsPage />} />
        <Route path="/specialties/pme" element={<PMEPage />} />
        <Route path="/specialties/sports-medicine" element={<SportsMedicinePage />} />
        <Route path="/specialties/urgent-care" element={<UrgentCarePage />} />
        <Route path="/specialties/urology" element={<UrologyPage />} />
        <Route path="/specialties/:slug" element={<SpecialtyTemplate />} />
        <Route path="/emr" element={<EMRMainPage />} />
        <Route path="/states" element={<StatesMainPage />} />
        <Route path="/who-we-serve" element={<WhoWeServeMainPage />} />
        <Route path="/resources" element={<ResourcesMainPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/services/:slug" element={<GenericPage categoryOverride="services" />} />

        <Route path="/emr/:slug" element={<GenericPage categoryOverride="emr" />} />
        <Route path="/states" element={<StatesMainPage />} />
        <Route path="/states/texas" element={<TexasPage />} />
        <Route path="/states/california" element={<CaliforniaPage />} />
        <Route path="/states/delaware" element={<DelawarePage />} />
        <Route path="/states/florida" element={<FloridaPage />} />
        <Route path="/states/nevada" element={<NevadaPage />} />
        <Route path="/states/new-jersey" element={<NewJerseyPage />} />
        <Route path="/states/new-york" element={<NewYorkPage />} />
        <Route path="/states/pennsylvania" element={<PennsylvaniaPage />} />
        <Route path="/states/:slug" element={<GenericPage categoryOverride="states" />} />
        
        {/* Who We Serve Routes */}
        <Route path="/who-we-serve/medical-group-practices" element={<MedicalGroupPracticesPage />} />
        <Route path="/who-we-serve/outsource-billing-services" element={<OutsourceBillingServicesPage />} />
        <Route path="/who-we-serve/medical-billing-small-practices" element={<SmallPracticesPage />} />
        <Route path="/who-we-serve/hospitals-health-systems" element={<HospitalsHealthSystemsPage />} />
        <Route path="/who-we-serve/independent-practices" element={<IndependentPracticesPage />} />
        <Route path="/who-we-serve/:slug" element={<GenericPage categoryOverride="who-we-serve" />} />
        
        <Route path="/resources/company" element={<CompanyPage />} />
        <Route path="/resources/:slug" element={<GenericPage categoryOverride="resources" />} />
        
        {/* Catch-all 404 */}
        <Route path="*" element={
          <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <p className="text-xl text-muted-foreground mb-8">Page not found</p>
            <a href="/" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Back to home
            </a>
          </div>
        } />
      </Routes>
      <Toaster position="bottom-right" />
    </Router>
  );
}

export default App;