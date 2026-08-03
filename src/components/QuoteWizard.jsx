import React, { useState } from 'react';
import { 
  Send, CheckCircle2, ChevronRight, ChevronLeft, Building2, User, Phone, Mail, 
  MapPin, Package, ShieldAlert, Sparkles, X, Copy, Check 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function QuoteWizard({ lang, isOpen, onClose, onAddQuoteRequest }) {
  const [step, setStep] = useState(1);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [generatedRef, setGeneratedRef] = useState('');

  const isId = lang === 'id';

  // Form State
  const [formData, setFormData] = useState({
    category: 'b3-chemicals',
    commodity: 'Sodium Methylate Solution (Isotank)',
    weightVolume: '25 Tons / 24,000 Liters',
    origin: 'Banjarmasin, Kalimantan Selatan',
    destination: 'Site Industri Kalimantan Tengah',
    targetDate: '2026-08-15',
    hseEscort: true,
    festronikManifest: true,
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCategorySelect = (cat) => {
    let defaultCommodity = 'Sodium Methylate Solution (Isotank)';
    if (cat === 'maritime-fleet') defaultCommodity = 'Sewa Kapal LCT 1000 DWT';
    if (cat === 'regular-specialist') defaultCommodity = 'Flexibag CPO Liquid (20ft Container)';
    if (cat === 'pln-project') defaultCommodity = 'Trafo Daya Gardu Induk PLN';
    if (cat === 'warehouse-facility') defaultCommodity = 'Penyimpanan Warehouse Jumbo Bag';

    setFormData(prev => ({ ...prev, category: cat, commodity: defaultCommodity }));
  };

  const handleSubmitQuote = (e) => {
    e.preventDefault();
    const refCode = `MBT-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setGeneratedRef(refCode);
    
    // Save to simulated Admin CMS state
    if (onAddQuoteRequest) {
      onAddQuoteRequest({
        id: refCode,
        date: new Date().toLocaleDateString('id-ID'),
        company: formData.companyName || 'PT Client Industri',
        contact: formData.contactName || 'Procurement Manager',
        email: formData.email,
        phone: formData.phone,
        category: formData.category,
        commodity: formData.commodity,
        route: `${formData.origin} ➔ ${formData.destination}`,
        weightVolume: formData.weightVolume,
        status: 'Pending'
      });
    }

    setSubmitted(true);
  };

  const sendToWhatsApp = () => {
    const text = encodeURIComponent(
      `*PERMINTAAN PENAWARAN HARGA (REQUEST A QUOTE)*\n` +
      `*Kode Referensi:* ${generatedRef}\n` +
      `----------------------------------------\n` +
      `*Perusahaan:* ${formData.companyName}\n` +
      `*Pengirim:* ${formData.contactName}\n` +
      `*Telepon:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n\n` +
      `*Detail Kargo:* ${formData.commodity}\n` +
      `*Kategori:* ${formData.category}\n` +
      `*Volume/Berat:* ${formData.weightVolume}\n` +
      `*Rute:* ${formData.origin} ➔ ${formData.destination}\n` +
      `*Tanggal:* ${formData.targetDate}\n` +
      `*Persyaratan HSE:* ${formData.hseEscort ? 'Wajib Escort & Spill Kit B3' : 'Standard'}\n` +
      `*Manifest FESTRONIK:* ${formData.festronikManifest ? 'Ya' : 'Tidak'}\n` +
      `*Catatan:* ${formData.notes || '-'}\n\n` +
      `Mohon estimasi biaya dan jadwal ketersediaan armada. Terima kasih.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  const copyRefCode = () => {
    navigator.clipboard.writeText(generatedRef);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md">
      <div className="glass-panel rounded-2xl border border-white/20 max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-navy-900/60 sticky top-0 z-10 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-safety-500 to-amber-600 flex items-center justify-center text-navy-950 font-bold shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-lg text-white">
                {isId ? 'Formulir Permintaan Penawaran' : 'Request a Quote'}
              </h3>
              <p className="text-slate-400 text-xs">
                {isId ? 'PT Mitra Bintang Transportindo - Estimasi Biaya Logistics B2B' : 'B2B Logistics Freight Cost Estimate'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-navy-800 text-slate-400 hover:text-white border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Wizard body */}
        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmitQuote}>
              
              {/* Step indicator bar */}
              <div className="flex items-center justify-between mb-8 px-4">
                <div className={`flex items-center gap-2 text-xs font-bold ${step >= 1 ? 'text-safety-400' : 'text-slate-500'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${step >= 1 ? 'bg-safety-500 text-navy-950' : 'bg-navy-800 text-slate-400'}`}>1</span>
                  <span>Detail Kargo</span>
                </div>
                <div className="flex-1 h-0.5 mx-3 bg-navy-800">
                  <div className={`h-full bg-safety-500 transition-all ${step === 2 ? 'w-1/2' : step === 3 ? 'w-full' : 'w-0'}`} />
                </div>
                <div className={`flex items-center gap-2 text-xs font-bold ${step >= 2 ? 'text-safety-400' : 'text-slate-500'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${step >= 2 ? 'bg-safety-500 text-navy-950' : 'bg-navy-800 text-slate-400'}`}>2</span>
                  <span>Rute & Volume</span>
                </div>
                <div className="flex-1 h-0.5 mx-3 bg-navy-800">
                  <div className={`h-full bg-safety-500 transition-all ${step === 3 ? 'w-full' : 'w-0'}`} />
                </div>
                <div className={`flex items-center gap-2 text-xs font-bold ${step >= 3 ? 'text-safety-400' : 'text-slate-500'}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${step === 3 ? 'bg-safety-500 text-navy-950' : 'bg-navy-800 text-slate-400'}`}>3</span>
                  <span>Kontak Perusahaan</span>
                </div>
              </div>

              {/* STEP 1: Cargo Category & Commodity */}
              {step === 1 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Pilih Kategori Layanan Kargo
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { id: 'b3-chemicals', name: 'Material B3 & Kimia (Isotank / Container)', badge: 'Sertifikasi B3 KLHK' },
                        { id: 'maritime-fleet', name: 'Armada Laut (LCT / Tongkang / SPOB)', badge: 'Pelayaran Sungai & Laut' },
                        { id: 'regular-specialist', name: 'Flexi Bag & Container Reguler', badge: 'CPO & Liquid Non-B3' },
                        { id: 'pln-project', name: 'Distribusi Proyek Gardu Induk PLN', badge: 'Heavy Cargo / Trafo' },
                      ].map((cat) => (
                        <div
                          key={cat.id}
                          onClick={() => handleCategorySelect(cat.id)}
                          className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                            formData.category === cat.id
                              ? 'bg-navy-950 border-safety-500 shadow-md shadow-safety-500/10'
                              : 'bg-navy-900/60 border-white/10 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-bold text-white">{cat.name}</span>
                            {formData.category === cat.id && <CheckCircle2 className="w-4 h-4 text-safety-400" />}
                          </div>
                          <span className="text-[10px] text-slate-400 font-mono">{cat.badge}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Deskripsi Komoditas / Material Spesifik
                    </label>
                    <input
                      type="text"
                      name="commodity"
                      value={formData.commodity}
                      onChange={handleChange}
                      placeholder="Contoh: Sodium Methylate Solution, HCl, Sianida, Trafo 50 MVA"
                      className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/15 text-white placeholder-slate-500 text-sm focus:border-safety-500 focus:outline-none"
                      required
                    />
                  </div>

                  {/* HSE Options toggle */}
                  <div className="bg-navy-950/60 p-4 rounded-xl border border-white/10 space-y-3">
                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Opsional Layanan HSE Extra</div>
                    <label className="flex items-center gap-3 text-xs text-slate-300 cursor-pointer">
                      <input
                        type="checkbox"
                        name="hseEscort"
                        checked={formData.hseEscort}
                        onChange={handleChange}
                        className="rounded border-white/20 text-safety-500 focus:ring-safety-500"
                      />
                      <span>Pengawalan Tim Safety HSE + Perangkat Chemical Spill Kit</span>
                    </label>
                    <label className="flex items-center gap-3 text-xs text-slate-300 cursor-pointer">
                      <input
                        type="checkbox"
                        name="festronikManifest"
                        checked={formData.festronikManifest}
                        onChange={handleChange}
                        className="rounded border-white/20 text-safety-500 focus:ring-safety-500"
                      />
                      <span>Pelaporan Manifest Limbah B3 Elektronik (FESTRONIK KLHK)</span>
                    </label>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-safety-500 text-navy-950 font-bold text-sm shadow-md hover:brightness-110"
                    >
                      <span>Lanjut: Rute & Volume</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Route, Volume, Schedule */}
              {step === 2 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Lokasi Asal (Origin Port / Site)
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-safety-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          name="origin"
                          value={formData.origin}
                          onChange={handleChange}
                          placeholder="Kota / Pelabuhan Asal"
                          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-navy-950 border border-white/15 text-white placeholder-slate-500 text-sm focus:border-safety-500 focus:outline-none"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Lokasi Tujuan (Destination Site)
                      </label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-ocean-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          name="destination"
                          value={formData.destination}
                          onChange={handleChange}
                          placeholder="Pabrik / Site PLN / Tambang"
                          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-navy-950 border border-white/15 text-white placeholder-slate-500 text-sm focus:border-safety-500 focus:outline-none"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Estimasi Berat / Volume Kargo
                      </label>
                      <div className="relative">
                        <Package className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          name="weightVolume"
                          value={formData.weightVolume}
                          onChange={handleChange}
                          placeholder="Contoh: 24,000 Liters / 25 Ton / 4 Container"
                          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-navy-950 border border-white/15 text-white placeholder-slate-500 text-sm focus:border-safety-500 focus:outline-none"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Target Tanggal Pengiriman
                      </label>
                      <input
                        type="date"
                        name="targetDate"
                        value={formData.targetDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/15 text-white text-sm focus:border-safety-500 focus:outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Catatan Spesifikasi Tambahan (Optional)
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows="3"
                      placeholder="Petunjuk khusus penanganan kargo, kondisi akses jalan site, dsb."
                      className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/15 text-white placeholder-slate-500 text-sm focus:border-safety-500 focus:outline-none"
                    />
                  </div>

                  <div className="pt-4 flex justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-navy-800 text-slate-300 font-medium text-sm border border-white/10 hover:bg-navy-700"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Kembali</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl bg-safety-500 text-navy-950 font-bold text-sm shadow-md hover:brightness-110"
                    >
                      <span>Lanjut: Kontak Perusahaan</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Company & Contact Info */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Nama Perusahaan / Instansi *
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="PT Chemical / Supply Chain Ltd"
                          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-navy-950 border border-white/15 text-white placeholder-slate-500 text-sm focus:border-safety-500 focus:outline-none"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Nama Pengaju / Manajer *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          name="contactName"
                          value={formData.contactName}
                          onChange={handleChange}
                          placeholder="Bpk / Ibu Manajer Procurement"
                          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-navy-950 border border-white/15 text-white placeholder-slate-500 text-sm focus:border-safety-500 focus:outline-none"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Email Resmi Perusahaan *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="procurement@perusahaan.com"
                          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-navy-950 border border-white/15 text-white placeholder-slate-500 text-sm focus:border-safety-500 focus:outline-none"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                        Nomor WhatsApp / HP Kontak *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="0812-XXXX-XXXX"
                          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-navy-950 border border-white/15 text-white placeholder-slate-500 text-sm focus:border-safety-500 focus:outline-none"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Summary Box */}
                  <div className="bg-navy-950 p-4 rounded-xl border border-white/10 space-y-1.5 text-xs text-slate-300 font-mono">
                    <div className="text-slate-400 font-bold text-[11px] uppercase tracking-wider mb-1">Ringkasan Permintaan:</div>
                    <div><strong className="text-white">Material:</strong> {formData.commodity}</div>
                    <div><strong className="text-white">Rute:</strong> {formData.origin} ➔ {formData.destination}</div>
                    <div><strong className="text-white">Volume:</strong> {formData.weightVolume}</div>
                  </div>

                  <div className="pt-4 flex justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-navy-800 text-slate-300 font-medium text-sm border border-white/10 hover:bg-navy-700"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Kembali</span>
                    </button>
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-safety-500 to-amber-600 text-navy-950 font-extrabold text-sm shadow-xl shadow-safety-500/20 hover:brightness-110"
                    >
                      <Send className="w-4 h-4" />
                      <span>Kirim & Generasi Penawaran</span>
                    </button>
                  </div>
                </div>
              )}

            </form>
          ) : (
            /* SUBMITTED SUCCESS SCREEN */
            <div className="text-center py-6 space-y-6 animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="font-display font-extrabold text-2xl text-white">
                  Permintaan Penawaran Berhasil Dibuat!
                </h3>
                <p className="text-slate-300 text-sm mt-1 max-w-md mx-auto">
                  Tim Commercial Sales PT Mitra Bintang Transportindo akan segera memproses estimasi harga dan ketersediaan armada.
                </p>
              </div>

              {/* Reference Code Box */}
              <div className="bg-navy-950 p-4 rounded-xl border border-safety-500/40 max-w-md mx-auto flex items-center justify-between gap-3">
                <div className="text-left font-mono">
                  <div className="text-[10px] text-slate-400 uppercase">Kode Referensi Permintaan (RFQ)</div>
                  <div className="text-lg font-bold text-safety-400">{generatedRef}</div>
                </div>
                <button
                  onClick={copyRefCode}
                  className="p-2 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-white/10"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Tersalin' : 'Salin Kode'}</span>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto pt-2">
                <button
                  onClick={sendToWhatsApp}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Langsung via WhatsApp Sales</span>
                </button>
                <button
                  onClick={onClose}
                  className="py-3 px-6 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-300 font-medium text-sm border border-white/10"
                >
                  Selesai
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
