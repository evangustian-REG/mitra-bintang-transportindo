import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import HseSection from './components/HseSection';
import QuoteWizard from './components/QuoteWizard';
import ContactSection from './components/ContactSection';
import AdminDashboard from './components/AdminDashboard';
import FloatingWhatsapp from './components/FloatingWhatsapp';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState('id');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  // Live Announcement Banner State (editable via CMS Admin)
  const [activeAnnouncement, setActiveAnnouncement] = useState(
    'Sertifikasi Resmi KLHK RI 2026: Izin Transportasi Limbah B3 & Kargo Spesialis LCT / SPOB Terverifikasi.'
  );

  // Simulated CMS Admin Quote Request Log State
  const [quoteRequests, setQuoteRequests] = useState([
    {
      id: 'MBT-RFQ-982145',
      date: '03/08/2026',
      company: 'PT Petrokimia Biofuel',
      contact: 'Bpk. Irfan Supply Chain',
      email: 'irfan@petro-biofuel.com',
      phone: '0812-9876-5432',
      category: 'b3-chemicals',
      commodity: 'Isotank Sodium Methylate (UN 1289)',
      route: 'Banjarmasin ➔ Sampit, Kalteng',
      weightVolume: '50,000 Liters (2 Units)',
      status: 'Processed'
    },
    {
      id: 'MBT-RFQ-714209',
      date: '02/08/2026',
      company: 'PT Kalimantan Gold Mining',
      contact: 'Ibu Ratna Procurement',
      email: 'ratna@kalimantan-gold.co.id',
      phone: '0813-4455-6677',
      category: 'b3-chemicals',
      commodity: 'Regular Container B3 - Sianida Padat',
      route: 'Surabaya ➔ Site Tambang Barito',
      weightVolume: '4 Container 20ft',
      status: 'Approved'
    }
  ]);

  const handleAddQuoteRequest = (newRfq) => {
    setQuoteRequests(prev => [newRfq, ...prev]);
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 font-sans relative selection:bg-safety-500 selection:text-navy-950">
      
      {/* Live Announcement Top Banner */}
      {activeAnnouncement && (
        <div className="bg-gradient-to-r from-safety-600 via-amber-500 to-safety-600 text-navy-950 py-1.5 px-4 text-center text-xs font-extrabold tracking-wide flex items-center justify-center gap-2 border-b border-safety-400">
          <span className="w-2 h-2 rounded-full bg-navy-950 animate-pulse" />
          <span>{activeAnnouncement}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        openQuoteModal={() => setQuoteModalOpen(true)}
        openAdminModal={() => setAdminModalOpen(true)}
      />

      {/* Main Page Content */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          lang={lang}
          openQuoteModal={() => setQuoteModalOpen(true)}
        />

        {/* 2. About Us & Legalities / Certifications */}
        <AboutUs
          lang={lang}
        />

        {/* 3. Services Showcase (Categorized B3, Fleet, Flexibag, PLN, Warehouse) */}
        <Services
          lang={lang}
          openQuoteModal={() => setQuoteModalOpen(true)}
        />

        {/* 4. HSE Safety & Compliance SOP */}
        <HseSection
          lang={lang}
        />

        {/* 5. Contact Section & Interactive Banjarmasin Map */}
        <ContactSection
          lang={lang}
          openQuoteModal={() => setQuoteModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        openQuoteModal={() => setQuoteModalOpen(true)}
      />

      {/* Interactive Modals */}
      {/* A. Quote Wizard Modal */}
      <QuoteWizard
        lang={lang}
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        onAddQuoteRequest={handleAddQuoteRequest}
      />

      {/* B. Admin CMS Preview Dashboard Modal */}
      <AdminDashboard
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        quoteRequests={quoteRequests}
        setQuoteRequests={setQuoteRequests}
        activeAnnouncement={activeAnnouncement}
        setActiveAnnouncement={setActiveAnnouncement}
      />

      {/* C. Floating WhatsApp Button */}
      <FloatingWhatsapp
        lang={lang}
      />

    </div>
  );
}
