import React from 'react';
import { MapPin, Phone, Mail, ShieldCheck, ArrowUp, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Footer({ lang, openQuoteModal }) {
  const isId = lang === 'id';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-white/10 text-slate-400 text-xs pt-16 pb-12 px-4 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1 & 2: Company Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-safety-400 via-safety-500 to-ocean-600 flex items-center justify-center shadow-lg text-navy-950">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z" />
                </svg>
              </div>
              <span className="font-display font-extrabold text-lg text-white tracking-tight">
                PT MITRA BINTANG <span className="text-safety-400">TRANSPORTINDO</span>
              </span>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              "{COMPANY_INFO.motto}"
            </p>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Perusahaan Freight Forwarding terkemuka spesialis pengangkutan Limbah B3, Isotank Sodium Methylate & HCl, Armada LCT/SPOB, dan distribusi proyek PLN Gardu Induk di Kalimantan & Indonesia.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Terlisensi KLHK B3 Resmi
              </span>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Arsitektur Menu</h4>
            <ul className="space-y-2 font-medium">
              <li><a href="#home" className="hover:text-safety-400 transition-colors">Beranda (Home)</a></li>
              <li><a href="#about" className="hover:text-safety-400 transition-colors">Tentang Kami & Sertifikasi</a></li>
              <li><a href="#services" className="hover:text-safety-400 transition-colors">Layanan & Armada Spesialis</a></li>
              <li><a href="#hse" className="hover:text-safety-400 transition-colors">HSE & Kepatuhan Limbah B3</a></li>
              <li><a href="#contact" className="hover:text-safety-400 transition-colors">Hubungi Kami & Peta HQ</a></li>
            </ul>
          </div>

          {/* Col 4: Services Summary */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Layanan Utama</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Transportasi Isotank B3 (Sodium Methylate)</li>
              <li>Isotank Container Asam Klorida (HCl)</li>
              <li>Sewa Kapal LCT, Tongkang & SPOB</li>
              <li>Flexi Bag Container CPO & Liquid</li>
              <li>Distribusi Proyek Gardu Induk PLN</li>
              <li>Pergudangan & Storage Jumbo Bag</li>
            </ul>
          </div>

          {/* Col 5: HQ Address & CTA */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Kantor Operasional</h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-safety-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-ocean-400 shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-ocean-400 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </div>
            </div>

            <button
              onClick={openQuoteModal}
              className="mt-3 w-full py-2.5 px-3 rounded-xl bg-safety-500 text-navy-950 font-bold text-xs shadow-md hover:brightness-110 flex items-center justify-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Minta Penawaran Kargo</span>
            </button>
          </div>

        </div>

        {/* SEO B2B Keyword Tag Cloud */}
        <div className="py-6 border-b border-white/10">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Kata Kunci Utama (Local & B2B SEO):</div>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {[
              "Jasa angkut limbah B3 Banjarmasin", "Sewa LCT Kalimantan", "Forwarder Isotank B3", 
              "Transportasi Sodium Methylate", "Isotank HCl Kalimantan", "Pengiriman Sianida Tambang", 
              "Flexibag CPO Banjarmasin", "Distribusi PLN Gardu Induk", "SPOB Kalimantan", "Warehouse Logistik Banjarmasin"
            ].map((kw, i) => (
              <span key={i} className="px-2.5 py-1 rounded bg-navy-900 border border-white/10 text-slate-300">
                #{kw}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © {new Date().getFullYear()} PT Mitra Bintang Transportindo. All rights reserved. Registered Freight Forwarding & B3 Carrier.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-300 hover:text-safety-400 font-semibold"
            >
              <span>Kembali Ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
