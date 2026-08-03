import React, { useState } from 'react';
import { ShieldCheck, Award, FileText, Check, Target, Compass, Eye, Building2, ExternalLink, X } from 'lucide-react';
import { COMPANY_INFO, CERTIFICATIONS } from '../data/companyData';

export default function AboutUs({ lang }) {
  const [selectedCert, setSelectedCert] = useState(null);
  const isId = lang === 'id';

  return (
    <section id="about" className="py-20 px-4 relative bg-navy-900/60 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-safety-500/10 border border-safety-500/30 text-safety-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>{isId ? 'Profil Perusahaan' : 'Company Profile'}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            {isId ? 'Tentang PT Mitra Bintang Transportindo' : 'About PT Mitra Bintang Transportindo'}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-safety-500 to-ocean-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-300 text-base mt-4 font-normal">
            "{COMPANY_INFO.motto}"
          </p>
        </div>

        {/* Executive Summary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col gap-5 text-slate-300 leading-relaxed text-sm sm:text-base">
            <h3 className="font-display font-bold text-2xl text-white">
              {isId ? 'Pusat Logistik & Forwarding Terpercaya di Kalimantan' : 'Trusted Logistics & Forwarding Center in Kalimantan'}
            </h3>
            <p>
              {isId ? (
                <>
                  <strong className="text-white">PT Mitra Bintang Transportindo</strong> berdiri untuk membangun kredibilitas digital dan menjadi pusat informasi resmi pengiriman kargo spesialis. Mengingat ruang lingkup bisnis mencakup penanganan material sensitif (<strong className="text-safety-400">Limbah B3, Bahan Kimia</strong>) dan proyek infrastruktur strategis (<strong className="text-ocean-400">Gardu Induk PLN</strong>), kami senantiasa memancarkan profesionalisme, kepatuhan terhadap standar keselamatan (HSE), serta kapasitas operasional yang mumpuni.
                </>
              ) : (
                <>
                  <strong className="text-white">PT Mitra Bintang Transportindo</strong> provides official specialized cargo forwarding services. Managing sensitive materials (<strong className="text-safety-400">Hazardous Waste B3, Chemicals</strong>) and strategic infrastructure projects (<strong className="text-ocean-400">PLN Substations</strong>), we embody professionalism, strict HSE compliance, and dependable operational capacity.
                </>
              )}
            </p>
            <p>
              {isId ? (
                <>
                  Berlokasi strategis di <strong className="text-white">Banjarmasin (Jl. Sutoyo S komplek Ar Rahman No.50)</strong>, kami menghubungkan jalur logistik sungai, laut, dan darat di Kalimantan serta memfasilitasi pengangkutan ke seluruh wilayah Indonesia dengan izin resmi KLHK dan Kemenhub.
                </>
              ) : (
                <>
                  Strategically located in <strong className="text-white">Banjarmasin (Jl. Sutoyo S komplek Ar Rahman No.50)</strong>, we connect river, sea, and land logistics across Kalimantan and facilitate nationwide shipments with full KLHK and Ministry of Transportation licenses.
                </>
              )}
            </p>

            {/* Target Audience Badges */}
            <div className="pt-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                {isId ? 'Fokus Target Mitra B2B:' : 'Target B2B Audiences:'}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className="p-2.5 rounded-lg bg-navy-950/80 border border-white/10 text-xs">
                  <div className="font-semibold text-safety-400 mb-0.5">Procurement & Supply Chain</div>
                  <div className="text-slate-400 text-[11px]">{isId ? 'Manajer Pabrik & Vendor B3' : 'Supply Chain & B3 Vendors'}</div>
                </div>
                <div className="p-2.5 rounded-lg bg-navy-950/80 border border-white/10 text-xs">
                  <div className="font-semibold text-ocean-400 mb-0.5">BUMN & Instansi</div>
                  <div className="text-slate-400 text-[11px]">{isId ? 'Proyek Gardu Induk (GI) PLN' : 'PLN Substation Operations'}</div>
                </div>
                <div className="p-2.5 rounded-lg bg-navy-950/80 border border-white/10 text-xs">
                  <div className="font-semibold text-emerald-400 mb-0.5">Kimia & Pertambangan</div>
                  <div className="text-slate-400 text-[11px]">{isId ? 'Isotank HCl, Sianida, Biodiesel' : 'Isotank HCl, Cyanide, Biofuel'}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cards: Vision & Mission */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-safety-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-safety-500/10 text-safety-400">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-xl text-white">
                  {isId ? 'Visi Perusahaan' : 'Our Vision'}
                </h4>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {isId
                  ? 'Menjadi perusahaan Freight Forwarding B3 & Kargo Spesialis terdepan di Indonesia yang diakui atas keunggulan operasional, keandalan keselamatan (HSE), dan komitmen terhadap keberlanjutan lingkungan.'
                  : 'To become the premier B3 Freight Forwarding & Special Cargo logistics company in Indonesia recognized for operational excellence, HSE safety leadership, and environmental commitment.'}
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-ocean-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-ocean-500/10 text-ocean-400">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-xl text-white">
                  {isId ? 'Misi Utama' : 'Our Mission'}
                </h4>
              </div>
              <ul className="text-slate-300 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-ocean-400 shrink-0 mt-0.5" />
                  <span>{isId ? 'Menyediakan armada Isotank, LCT, & kargo berstandar ISO & K3 tinggi.' : 'Provide ISO & HSE-compliant Isotank, LCT, and cargo fleets.'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-ocean-400 shrink-0 mt-0.5" />
                  <span>{isId ? 'Menjamin kepatuhan hukum 100% atas pengangkutan limbah B3.' : 'Ensure 100% legal compliance for hazardous waste logistics.'}</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-ocean-400 shrink-0 mt-0.5" />
                  <span>{isId ? 'Mendukung percepatan pembangunan proyek listrik Gardu Induk PLN.' : 'Support national power infrastructure projects for PLN.'}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legalities & Certifications Section (Crucial for B3 Cargo) */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                {isId ? 'Legalitas & Lisensi Resm' : 'Official Certifications'}
              </div>
              <h3 className="font-display font-bold text-2xl text-white">
                {isId ? 'Kepatuhan & Sertifikasi B3' : 'Compliance & Licensing Standard'}
              </h3>
            </div>
            <p className="text-slate-400 text-xs max-w-md">
              {isId
                ? 'Sangat krusial untuk transportasi B3: Kami mengantongi sertifikasi lengkap dari KLHK, Kemenhub, serta ISO International.'
                : 'Crucial for hazardous logistics: We maintain full licensing from KLHK, Ministry of Transport, and ISO standards.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="glass-panel-card p-5 rounded-xl cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-semibold">
                      {cert.category}
                    </span>
                    <FileText className="w-4 h-4 text-slate-400 group-hover:text-safety-400 transition-colors" />
                  </div>
                  <h4 className="font-display font-bold text-white text-base group-hover:text-safety-400 transition-colors">
                    {cert.title}
                  </h4>
                  <div className="text-slate-400 text-xs font-mono mt-1">
                    {cert.code}
                  </div>
                  <p className="text-slate-300 text-xs mt-3 line-clamp-2">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center text-xs font-medium text-safety-400 gap-1 group-hover:translate-x-1 transition-transform">
                  <span>{isId ? 'Lihat Detail Sertifikat' : 'View Certificate'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Certification Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm">
          <div className="glass-panel p-6 rounded-2xl border border-white/20 max-w-lg w-full relative shadow-2xl animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-navy-800 text-slate-400 hover:text-white hover:bg-navy-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">{selectedCert.category}</span>
                <h3 className="font-display font-bold text-xl text-white">{selectedCert.title}</h3>
              </div>
            </div>

            <div className="space-y-3 text-sm text-slate-300 my-4 bg-navy-950/60 p-4 rounded-xl border border-white/10 font-mono text-xs">
              <div><strong className="text-slate-400">Penerbit / Authority:</strong> {selectedCert.authority}</div>
              <div><strong className="text-slate-400">Nomor Registrasi:</strong> <span className="text-safety-400 font-bold">{selectedCert.code}</span></div>
              <div><strong className="text-slate-400">Status Kepatuhan:</strong> <span className="text-emerald-400 font-bold">AKTIF & TERVERIFIKASI (VERIFIED)</span></div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedCert.description}
            </p>

            <button
              onClick={() => setSelectedCert(null)}
              className="w-full py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 font-medium text-sm transition-colors"
            >
              Tutup Modal
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
