import React, { useState } from 'react';
import { 
  FlaskConical, Ship, PackageCheck, Zap, Warehouse, 
  CheckCircle2, ArrowUpRight, ShieldCheck, ChevronRight, X, Send 
} from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/companyData';

export default function Services({ lang, openQuoteModal }) {
  const [activeCategory, setActiveCategory] = useState("b3-chemicals");
  const [selectedService, setSelectedService] = useState(null);

  const isId = lang === 'id';

  const categoryIcons = {
    "FlaskConical": FlaskConical,
    "Ship": Ship,
    "PackageCheck": PackageCheck,
    "Zap": Zap,
    "Warehouse": Warehouse
  };

  const currentCategoryData = SERVICE_CATEGORIES.find(c => c.id === activeCategory) || SERVICE_CATEGORIES[0];

  return (
    <section id="services" className="py-20 px-4 relative industrial-grid-bg">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ocean-500/10 border border-ocean-500/30 text-ocean-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <PackageCheck className="w-3.5 h-3.5" />
            <span>{isId ? 'Spesialisasi Services' : 'Our Specialized Services'}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            {isId ? 'Layanan & Armada Spesialis PT MBT' : 'Specialized Services & Fleet Solutions'}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-safety-500 to-ocean-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-300 text-sm sm:text-base mt-4 font-normal">
            {isId 
              ? 'Dikelompokkan secara terstruktur untuk memudahkan kebutuhan pengadaan B2B, manufaktur kimia, armada laut, dan distribusi PLN.' 
              : 'Structured categorization for B2B procurement managers, chemical manufacturers, marine transport, and PLN distribution.'}
          </p>
        </div>

        {/* Category Tabs Nav */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {SERVICE_CATEGORIES.map((cat) => {
            const IconComponent = categoryIcons[cat.icon] || PackageCheck;
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl font-display font-bold text-xs sm:text-sm whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-gradient-to-r from-safety-500 to-amber-600 text-navy-950 border-safety-400 shadow-lg shadow-safety-500/20 scale-[1.02]'
                    : 'bg-navy-900/80 text-slate-300 border-white/10 hover:bg-navy-800 hover:text-white'
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? 'text-navy-950' : 'text-safety-400'}`} />
                <span>{isId ? cat.titleId : cat.titleEn}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Description Banner */}
        <div className="glass-panel p-6 rounded-2xl mb-8 border-l-4 border-l-safety-500 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h3 className="font-display font-bold text-xl text-white">
              {isId ? currentCategoryData.titleId : currentCategoryData.titleEn}
            </h3>
            <p className="text-slate-300 text-sm mt-1">
              {isId ? currentCategoryData.descriptionId : currentCategoryData.descriptionEn}
            </p>
          </div>
          <button
            onClick={openQuoteModal}
            className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-800 hover:bg-navy-700 text-safety-400 border border-safety-500/30 text-xs font-bold transition-all"
          >
            <span>{isId ? 'Konsultasikan Kargo Ini' : 'Consult Cargo Spec'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Service Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategoryData.items.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedService(item)}
              className="glass-panel-card rounded-2xl overflow-hidden flex flex-col justify-between group cursor-pointer"
            >
              {/* Card Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-navy-950">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-navy-950/80 backdrop-blur-md border border-white/10 text-safety-400 text-[11px] font-bold">
                  {item.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-bold text-lg text-white group-hover:text-safety-400 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-slate-300 text-xs mt-2 line-clamp-2">
                    {isId ? item.descId : item.descEn}
                  </p>

                  {/* Highlights Specs */}
                  <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5">
                    {item.specs.slice(0, 2).map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-safety-400 group-hover:text-safety-300">
                  <span>{isId ? 'Lihat Spesifikasi & SOP' : 'View Spec & SOP'}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md">
          <div className="glass-panel rounded-2xl border border-white/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-navy-950/80 text-slate-300 hover:text-white border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image Banner */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-navy-950">
              <img
                src={selectedService.image}
                alt={selectedService.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-2.5 py-1 rounded-md bg-safety-500 text-navy-950 text-xs font-bold uppercase tracking-wider">
                  {selectedService.tag}
                </span>
                <h3 className="font-display font-extrabold text-2xl text-white mt-2">
                  {selectedService.name}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Deskripsi Operational</h4>
                <p className="text-slate-200 text-sm leading-relaxed">
                  {isId ? selectedService.descId : selectedService.descEn}
                </p>
              </div>

              {/* Technical Specifications */}
              <div>
                <h4 className="text-xs font-bold text-safety-400 uppercase tracking-wider mb-2">Spesifikasi Teknis & Unit</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-navy-950/60 p-4 rounded-xl border border-white/10">
                  {selectedService.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    openQuoteModal();
                  }}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-safety-500 text-navy-950 font-bold text-sm shadow-lg hover:brightness-110"
                >
                  <Send className="w-4 h-4" />
                  <span>{isId ? 'Minta Penawaran Kargo Ini' : 'Request Quote For This Cargo'}</span>
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="py-3 px-6 rounded-xl bg-navy-800 text-slate-300 hover:bg-navy-700 font-medium text-sm border border-white/10"
                >
                  {isId ? 'Tutup' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
