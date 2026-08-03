import React, { useState } from 'react';
import { 
  LayoutDashboard, FileText, Truck, Settings, X, Plus, Edit, Check, 
  Clock, AlertCircle, RefreshCw, Layers, ShieldCheck, Filter 
} from 'lucide-react';
import { COMPANY_INFO, SERVICE_CATEGORIES } from '../data/companyData';

export default function AdminDashboard({ isOpen, onClose, quoteRequests, setQuoteRequests, activeAnnouncement, setActiveAnnouncement }) {
  const [activeTab, setActiveTab] = useState('quotes');
  const [editNoticeText, setEditNoticeText] = useState(activeAnnouncement);
  const [saveFeedback, setSaveFeedback] = useState(false);

  if (!isOpen) return null;

  const updateQuoteStatus = (id, newStatus) => {
    setQuoteRequests(prev => prev.map(q => q.id === id ? { ...q, status: newStatus } : q));
  };

  const handleSaveAnnouncement = (e) => {
    e.preventDefault();
    setActiveAnnouncement(editNoticeText);
    setSaveFeedback(true);
    setTimeout(() => setSaveFeedback(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-lg">
      <div className="glass-panel rounded-2xl border border-white/20 max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Admin Header Bar */}
        <div className="p-4 sm:p-6 border-b border-white/10 bg-navy-950 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-safety-500 text-navy-950 flex items-center justify-center font-bold">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-extrabold text-lg text-white">
                  CMS Admin Dashboard Portal
                </h3>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono font-bold">
                  SIMULASI LIVE
                </span>
              </div>
              <p className="text-slate-400 text-xs">
                PT Mitra Bintang Transportindo - Content Management & Sales RFQ Tracker
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-navy-800 text-slate-400 hover:text-white border border-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 py-3 bg-navy-900 border-b border-white/10 overflow-x-auto">
          <button
            onClick={() => setActiveTab('quotes')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'quotes'
                ? 'bg-safety-500 text-navy-950 shadow-md'
                : 'text-slate-300 hover:bg-navy-800'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Permintaan Penawaran ({quoteRequests.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'services'
                ? 'bg-safety-500 text-navy-950 shadow-md'
                : 'text-slate-300 hover:bg-navy-800'
            }`}
          >
            <Truck className="w-4 h-4" />
            <span>Manajemen Armada & Layanan</span>
          </button>

          <button
            onClick={() => setActiveTab('content')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'content'
                ? 'bg-safety-500 text-navy-950 shadow-md'
                : 'text-slate-300 hover:bg-navy-800'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Pengaturan Notice Header</span>
          </button>
        </div>

        {/* Admin Body Content */}
        <div className="p-6 flex-1 overflow-y-auto bg-navy-950/80">
          
          {/* TAB 1: Quote Requests RFQ List */}
          {activeTab === 'quotes' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-white text-base">Log Permintaan Quote Masuk (RFQ)</h4>
                  <p className="text-slate-400 text-xs">Kelola status dan follow-up pengajuan penawaran dari calon klien B2B.</p>
                </div>
                <span className="text-xs text-slate-400 bg-navy-900 px-3 py-1.5 rounded-lg border border-white/10 font-mono">
                  Total RFQ: {quoteRequests.length}
                </span>
              </div>

              <div className="space-y-3">
                {quoteRequests.length > 0 ? (
                  quoteRequests.map((rfq) => (
                    <div
                      key={rfq.id}
                      className="glass-panel p-4 rounded-xl border border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-safety-400 text-xs">{rfq.id}</span>
                          <span className="text-slate-500">•</span>
                          <span className="text-xs text-slate-400">{rfq.date}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            rfq.status === 'Approved' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                            rfq.status === 'Processed' ? 'bg-ocean-500/20 text-ocean-400 border border-ocean-500/30' :
                            'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          }`}>
                            {rfq.status}
                          </span>
                        </div>

                        <div className="font-bold text-white text-sm">
                          {rfq.company} <span className="font-normal text-slate-300">({rfq.contact})</span>
                        </div>

                        <div className="text-xs text-slate-300 font-mono">
                          <span className="text-safety-300">{rfq.commodity}</span> | Rute: {rfq.route} | Volume: {rfq.weightVolume}
                        </div>

                        <div className="text-[11px] text-slate-400 flex items-center gap-3 pt-1">
                          <span>Phone: {rfq.phone}</span>
                          <span>Email: {rfq.email}</span>
                        </div>
                      </div>

                      {/* Status Action buttons */}
                      <div className="flex items-center gap-2 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/10">
                        <button
                          onClick={() => updateQuoteStatus(rfq.id, 'Pending')}
                          className={`px-2.5 py-1 rounded text-xs font-semibold ${rfq.status === 'Pending' ? 'bg-amber-500 text-navy-950' : 'bg-navy-800 text-slate-400 hover:text-white'}`}
                        >
                          Pending
                        </button>
                        <button
                          onClick={() => updateQuoteStatus(rfq.id, 'Processed')}
                          className={`px-2.5 py-1 rounded text-xs font-semibold ${rfq.status === 'Processed' ? 'bg-ocean-500 text-white' : 'bg-navy-800 text-slate-400 hover:text-white'}`}
                        >
                          Diproses
                        </button>
                        <button
                          onClick={() => updateQuoteStatus(rfq.id, 'Approved')}
                          className={`px-2.5 py-1 rounded text-xs font-semibold ${rfq.status === 'Approved' ? 'bg-emerald-500 text-navy-950' : 'bg-navy-800 text-slate-400 hover:text-white'}`}
                        >
                          Disetujui
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 text-slate-400 text-sm">
                    Belum ada permintaan penawaran baru.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: Fleet & Service Management */}
          {activeTab === 'services' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-display font-bold text-white text-base">Katalog Layanan & Unit Armada Active</h4>
                <p className="text-slate-400 text-xs">Simulasi pembaruan data armada tanpa perlu mengedit kode.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SERVICE_CATEGORIES.flatMap(c => c.items).map((item) => (
                  <div key={item.id} className="glass-panel p-4 rounded-xl border border-white/10 flex items-start gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover border border-white/10 shrink-0"
                    />
                    <div className="flex-1">
                      <span className="text-[10px] font-bold text-safety-400 uppercase tracking-wider">{item.tag}</span>
                      <h5 className="font-bold text-white text-sm">{item.name}</h5>
                      <div className="text-xs text-emerald-400 font-medium mt-1 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" />
                        <span>Status: Operasional Ready</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Notice & Header CMS Settings */}
          {activeTab === 'content' && (
            <form onSubmit={handleSaveAnnouncement} className="space-y-5 max-w-xl">
              <div>
                <h4 className="font-display font-bold text-white text-base">CMS Pengumuman Live Header</h4>
                <p className="text-slate-400 text-xs">Ubah pesan pengumuman atau promo layanan yang muncul di baris teratas website.</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Teks Pengumuman Header:
                </label>
                <input
                  type="text"
                  value={editNoticeText}
                  onChange={(e) => setEditNoticeText(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-navy-950 border border-white/15 text-white text-sm focus:border-safety-500 focus:outline-none"
                  placeholder="Contoh: Terlisensi Resmi KLHK untuk Pengangkutan Limbah B3 2026"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-safety-500 text-navy-950 font-bold text-sm shadow-md hover:brightness-110 flex items-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  <span>Simpan Perubahan Teks</span>
                </button>
                {saveFeedback && (
                  <span className="text-xs text-emerald-400 font-semibold animate-pulse">
                    ✓ Perubahan Berhasil Disimpan Live!
                  </span>
                )}
              </div>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}
