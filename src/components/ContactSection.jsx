import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function ContactSection({ lang, openQuoteModal }) {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Pengangkutan Limbah B3 & Isotank',
    message: ''
  });

  const isId = lang === 'id';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 relative bg-navy-950 industrial-grid-bg">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-safety-500/10 border border-safety-500/30 text-safety-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{isId ? 'Hubungi Kantor Operasional' : 'Contact Operational HQ'}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            {isId ? 'Hubungi PT Mitra Bintang Transportindo' : 'Contact PT Mitra Bintang Transportindo'}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-safety-500 to-ocean-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-300 text-sm sm:text-base mt-4 font-normal">
            {isId
              ? 'Kantor pusat kami siap melayani kebutuhan pengangkutan material B3, sewa kapal LCT/Tongkang, dan konsul kargo proyek 24 jam.'
              : 'Our head office in Banjarmasin is ready to serve your B3 hazardous material transport and marine fleet inquiries.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
              <h3 className="font-display font-bold text-xl text-white pb-3 border-b border-white/10">
                {isId ? 'Informasi Kontak Resmi' : 'Official Contact Information'}
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-safety-500/10 border border-safety-500/30 text-safety-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Alamat Kantor Pusat</div>
                  <div className="text-sm font-semibold text-white mt-1 leading-snug">
                    {COMPANY_INFO.address}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">Banjarmasin 70118, Kalimantan Selatan</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-ocean-500/10 border border-ocean-500/30 text-ocean-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Telepon & WhatsApp Commercial</div>
                  <div className="text-sm font-bold text-white mt-1">
                    {COMPANY_INFO.phone}
                  </div>
                  <div className="text-xs text-emerald-400 font-medium mt-0.5">
                    WhatsApp: {COMPANY_INFO.whatsapp} (Respon Cepat)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Inquiry & Sales</div>
                  <div className="text-sm font-semibold text-white mt-1">
                    {COMPANY_INFO.email}
                  </div>
                  <div className="text-xs text-slate-400">{COMPANY_INFO.salesEmail}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-2 border-t border-white/10">
                <div className="w-10 h-10 rounded-xl bg-navy-800 text-slate-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Jam Operasional Kantor</div>
                  <div className="text-xs text-slate-300 mt-1">{COMPANY_INFO.operationalHours}</div>
                </div>
              </div>
            </div>

            {/* Quick Quote CTA Banner */}
            <div className="glass-panel-amber p-6 rounded-2xl flex items-center justify-between gap-4">
              <div>
                <h4 className="font-display font-bold text-white text-base">Butuh Estimasi Harga Cepat?</h4>
                <p className="text-slate-300 text-xs mt-1">Gunakan kalkulator penawaran interaktif kami.</p>
              </div>
              <button
                onClick={openQuoteModal}
                className="shrink-0 px-4 py-2.5 rounded-xl bg-safety-500 text-navy-950 font-bold text-xs shadow-md hover:brightness-110"
              >
                Minta Quote
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Map & Inquiry Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Location Map (Banjarmasin HQ) */}
            <div className="glass-panel p-2 rounded-2xl border border-white/10 overflow-hidden shadow-xl">
              <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-navy-900">
                <iframe
                  title="Lokasi PT Mitra Bintang Transportindo Banjarmasin"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.136894452174!2d114.5886!3d-3.3194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423f038c11e6d%3A0x89e830f0f1b203c9!2sJl.%20Sutoyo%20S%2C%20Banjarmasin!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-80"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                
                {/* Map Overlay Badge */}
                <div className="absolute top-4 left-4 p-3 rounded-xl glass-panel border border-white/15 max-w-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>PT Mitra Bintang Transportindo HQ</span>
                  </div>
                  <div className="text-[11px] text-slate-300 mt-0.5">Banjarmasin, Kalimantan Selatan</div>
                </div>
              </div>
            </div>

            {/* Direct General Inquiry Form */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10">
              <h3 className="font-display font-bold text-xl text-white mb-4">
                {isId ? 'Kirim Pesan Langsung' : 'Send Direct Message'}
              </h3>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Nama Anda *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Nama Lengkap"
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/15 text-white placeholder-slate-500 text-sm focus:border-safety-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/15 text-white placeholder-slate-500 text-sm focus:border-safety-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Nomor Telepon *</label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="0812-XXXX-XXXX"
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/15 text-white placeholder-slate-500 text-sm focus:border-safety-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Subjek Pertanyaan</label>
                      <select
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/15 text-white text-sm focus:border-safety-500 focus:outline-none"
                      >
                        <option value="Pengangkutan Limbah B3 & Isotank">Pengangkutan Limbah B3 & Isotank</option>
                        <option value="Sewa Kapal LCT & SPOB">Sewa Kapal LCT & SPOB</option>
                        <option value="Flexi Bag CPO & Liquid">Flexi Bag CPO & Liquid</option>
                        <option value="Proyek Distribusi PLN GI">Proyek Distribusi PLN GI</option>
                        <option value="Lainnya">Pertanyaan Umum / Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">Pesan / Pertanyaan *</label>
                    <textarea
                      required
                      rows="3"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tuliskan rincian pertanyaan Anda..."
                      className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/15 text-white placeholder-slate-500 text-sm focus:border-safety-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-safety-500 to-amber-600 text-navy-950 font-bold text-sm shadow-md hover:brightness-110"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Pesan Ke Operasional HQ</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="font-display font-bold text-xl text-white">Pesan Terkirim!</h4>
                  <p className="text-slate-300 text-xs max-w-sm mx-auto">
                    Terima kasih telah menghubungi PT Mitra Bintang Transportindo. Tim kami akan menghubungi Anda dalam waktu 1x24 jam.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-navy-800 text-slate-300 text-xs font-semibold"
                  >
                    Kirim Pesan Lain
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
