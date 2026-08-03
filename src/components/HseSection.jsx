import React, { useState } from 'react';
import { ShieldCheck, AlertTriangle, Radio, Truck, CheckCircle2, FileSpreadsheet, Activity, ChevronDown } from 'lucide-react';
import { HSE_PROTOCOLS } from '../data/companyData';

export default function HseSection({ lang }) {
  const [activeStep, setActiveStep] = useState(0);
  const isId = lang === 'id';

  return (
    <section id="hse" className="py-20 px-4 relative bg-navy-900/80 border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>{isId ? 'Standar Keselamatan & Kepatuhan' : 'HSE Safety & Compliance'}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            {isId ? 'SOP Penanganan Limbah B3 & Keamanan Kargo' : 'Hazardous Waste Handling SOP & Safety System'}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-safety-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-300 text-sm sm:text-base mt-4 font-normal">
            {isId
              ? 'Keselamatan manusia dan perlindungan lingkungan hidup adalah prioritas absolut kami dalam mengoperasikan angkutan limbah B3 dan bahan kimia sensitif.'
              : 'Human safety and environmental protection are our non-negotiable priorities in hazardous B3 waste logistics.'}
          </p>
        </div>

        {/* HSE Interactive SOP Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Steps Selector */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              {isId ? 'Tahapan Prosedur SOP B3:' : 'B3 Handling SOP Steps:'}
            </div>
            {HSE_PROTOCOLS.map((proto, idx) => {
              const isActive = idx === activeStep;
              return (
                <div
                  key={proto.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-xl cursor-pointer transition-all border ${
                    isActive
                      ? 'bg-navy-950 border-emerald-500/50 shadow-lg shadow-emerald-500/10 scale-[1.01]'
                      : 'bg-navy-900/60 border-white/5 hover:border-white/20 hover:bg-navy-900'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                        isActive ? 'bg-emerald-500 text-navy-950' : 'bg-navy-800 text-slate-400'
                      }`}>
                        {proto.step}
                      </span>
                      <h4 className={`font-display font-bold text-sm ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {isId ? proto.titleId : proto.titleEn}
                      </h4>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isActive ? 'rotate-90 text-emerald-400' : ''}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Step Detail Showcase */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-emerald-500/30 relative">
            <div className="flex items-center justify-between gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold">
                PROTOCOL PHASE {HSE_PROTOCOLS[activeStep].step}
              </span>
              <span className="text-slate-400 text-xs font-medium flex items-center gap-1">
                <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                Active HSE Standard
              </span>
            </div>

            <h3 className="font-display font-extrabold text-2xl text-white mb-4">
              {isId ? HSE_PROTOCOLS[activeStep].titleId : HSE_PROTOCOLS[activeStep].titleEn}
            </h3>

            <p className="text-slate-200 text-base leading-relaxed mb-6">
              {isId ? HSE_PROTOCOLS[activeStep].descId : HSE_PROTOCOLS[activeStep].descEn}
            </p>

            {/* Checklist items inside step */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-navy-950/60 p-3 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Leakage Policy (Anti-Bocor)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-navy-950/60 p-3 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Simulasi Spill Response Berkala</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-navy-950/60 p-3 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Manifest B3 Digital (FESTRONIK)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-navy-950/60 p-3 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Asuransi Kargo & Lingkungan</span>
              </div>
            </div>
          </div>

        </div>

        {/* HSE Feature Grid Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel-card p-6 rounded-xl border-t-2 border-t-emerald-500">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-lg text-white mb-2">Spill Kit & APD Hazmat</h4>
            <p className="text-slate-300 text-xs leading-relaxed">
              Setiap truk dan kapal dilengkapi Chemical Neutralizer Spill Kit (absorbent boom, neutralizing agent, hazmat suit level B) siap tanggap 24/7.
            </p>
          </div>

          <div className="glass-panel-card p-6 rounded-xl border-t-2 border-t-safety-500">
            <div className="w-10 h-10 rounded-lg bg-safety-500/10 text-safety-400 flex items-center justify-center mb-4">
              <Radio className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-lg text-white mb-2">Telematika & Sensor Suhu</h4>
            <p className="text-slate-300 text-xs leading-relaxed">
              Sistem GPS terintegrasi dengan pemantauan suhu & tekanan valve tangki Isotank secara real-time dari Pusat Kontrol Banjarmasin.
            </p>
          </div>

          <div className="glass-panel-card p-6 rounded-xl border-t-2 border-t-ocean-500">
            <div className="w-10 h-10 rounded-lg bg-ocean-500/10 text-ocean-400 flex items-center justify-center mb-4">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-lg text-white mb-2">Dokumentasi FESTRONIK</h4>
            <p className="text-slate-300 text-xs leading-relaxed">
              Kepatuhan pelaporan sistem manifest elektronik KLHK (FESTRONIK) menjamin transparansi jejak limbah B3 dari asal hingga tempat pengolahan akhir.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
