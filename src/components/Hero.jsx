import React from 'react';
import { ShieldCheck, Truck, Anchor, Zap, ArrowRight, CheckCircle2, Award, FileCheck2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Hero({ lang, openQuoteModal }) {
  const isId = lang === 'id';

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-8 pb-16 px-4 overflow-hidden industrial-grid-bg">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-safety-500/15 via-ocean-500/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Hero Copy */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-center lg:text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-safety-500/30 text-slate-200 text-xs font-medium w-fit mx-auto lg:mx-0 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-safety-400 animate-pulse" />
            <span className="text-safety-400 font-semibold">{isId ? 'Pusat Logistik B3 & Kargo Spesialis' : 'B3 Logistics & Special Cargo Center'}</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">Banjarmasin, Indonesia</span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
            {isId ? (
              <>
                Mitra Logistik Terpercaya,<br />
                <span className="text-gradient-amber">Kami Menggerakkan Kesuksesan Anda</span>
              </>
            ) : (
              <>
                Your Logistic Partner,<br />
                <span className="text-gradient-amber">We Move Your Success</span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
            {isId
              ? 'Penyedia layanan Freight Forwarding spesialis pengangkutan Limbah B3, bahan kimia sensitif (Isotank Sodium Methylate & HCl), armada laut LCT/Tongkang/SPOB, serta distribusi proyek vital Gardu Induk PLN di seluruh Kalimantan dan Nusantara.'
              : 'Specialized freight forwarding provider for Hazardous Waste (B3), sensitive chemical transport (Sodium Methylate & HCl Isotanks), LCT/Barge maritime fleet, and PLN substation infrastructure projects across Indonesia.'}
          </p>

          {/* Key Value Pill Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-navy-900/60 border border-white/10 rounded-lg p-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{isId ? 'Izin B3 KLHK Resmi' : 'KLHK B3 Licensed'}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-navy-900/60 border border-white/10 rounded-lg p-2.5">
              <Truck className="w-4 h-4 text-safety-400 shrink-0" />
              <span>{isId ? 'Isotank & Flexibag' : 'Isotank & Flexibag'}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-navy-900/60 border border-white/10 rounded-lg p-2.5 col-span-2 sm:col-span-1">
              <Anchor className="w-4 h-4 text-ocean-400 shrink-0" />
              <span>{isId ? 'Armada LCT & SPOB' : 'LCT & SPOB Vessels'}</span>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
            <button
              onClick={openQuoteModal}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-safety-500 via-safety-400 to-amber-500 text-navy-950 font-extrabold text-base shadow-xl shadow-safety-500/25 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>{isId ? 'Minta Penawaran Harga' : 'Request Rate Estimate'}</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </button>

            <a
              href="#services"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-navy-900/80 hover:bg-navy-800 text-slate-200 border border-white/15 font-semibold text-base transition-all"
            >
              <span>{isId ? 'Jelajahi Armada & Layanan' : 'Explore Fleet & Services'}</span>
            </a>
          </div>

          {/* Trust Indicators / Stats */}
          <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center lg:text-left">
            <div>
              <div className="font-display font-bold text-2xl lg:text-3xl text-white">100%</div>
              <div className="text-xs text-slate-400 mt-0.5">{isId ? 'Kepatuhan HSE & KLHK' : 'KLHK HSE Compliance'}</div>
            </div>
            <div>
              <div className="font-display font-bold text-2xl lg:text-3xl text-safety-400">50+</div>
              <div className="text-xs text-slate-400 mt-0.5">{isId ? 'Unit Armada Khusus' : 'Specialized Fleet Units'}</div>
            </div>
            <div>
              <div className="font-display font-bold text-2xl lg:text-3xl text-ocean-400">24/7</div>
              <div className="text-xs text-slate-400 mt-0.5">{isId ? 'Monitoring Kargo' : 'Cargo GPS Tracking'}</div>
            </div>
          </div>

        </div>

        {/* Right Column: Hero Visual Card Showcase */}
        <div className="lg:col-span-5 relative">
          
          {/* Main Visual Card - Real Isotank Operational Image */}
          <div className="glass-panel p-3 rounded-2xl border border-white/15 shadow-2xl relative group overflow-hidden">
            <div className="relative h-[320px] sm:h-[380px] rounded-xl overflow-hidden">
              <img
                src="/images/isotank-b3-sodium-methylate.jpeg"
                alt="PT Mitra Bintang Transportindo Isotank Container B3 Sodium Methylate"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-white/10">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-safety-500 text-navy-950 font-bold text-[11px] uppercase tracking-wider">
                    Operational Asset
                  </span>
                  <span className="text-slate-300 text-xs font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    UN T11 Approved
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-base sm:text-lg">
                  Isotank B3 - Sodium Methylate Solution
                </h3>
                <p className="text-slate-300 text-xs mt-1">
                  {isId ? 'Sertifikasi pengangkutan bahan kimia korosif & mudah terbakar.' : 'Certified transport for corrosive & flammable liquid chemicals.'}
                </p>
              </div>
            </div>
          </div>

          {/* Floating Secondary Card 1 - Flexibag Container */}
          <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -left-6 p-3.5 rounded-xl glass-panel border border-safety-500/30 shadow-xl max-w-xs animate-float">
            <img
              src="/images/flexibag-liquid-container.jpeg"
              alt="Flexibag Liquid Transport"
              className="w-14 h-14 rounded-lg object-cover border border-white/10"
            />
            <div>
              <div className="text-xs font-bold text-white">Flexibag Liquid Freight</div>
              <div className="text-[11px] text-slate-300 mt-0.5">Food Grade & CPO Non-B3</div>
              <div className="text-[10px] text-safety-400 font-semibold mt-1">24,000L Capacity</div>
            </div>
          </div>

          {/* Floating Secondary Card 2 - Warehouse & B3 Storage */}
          <div className="hidden sm:flex items-center gap-3 absolute -top-6 -right-4 p-3 rounded-xl glass-panel border border-ocean-500/30 shadow-xl max-w-xs">
            <div className="w-10 h-10 rounded-lg bg-ocean-500/20 border border-ocean-400/40 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-ocean-400" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Distribusi Gardu Induk PLN</div>
              <div className="text-[11px] text-slate-300">Trafo Daya & Project Cargo</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
