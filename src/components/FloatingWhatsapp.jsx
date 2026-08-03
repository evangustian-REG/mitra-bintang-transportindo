import React, { useState } from 'react';
import { MessageCircle, X, Send, ShieldCheck, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function FloatingWhatsapp({ lang }) {
  const [chatOpen, setChatOpen] = useState(false);
  const isId = lang === 'id';

  const sendQuickMessage = (msg) => {
    const text = encodeURIComponent(msg);
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Expanded Quick Chat Popup Drawer */}
      {chatOpen && (
        <div className="mb-4 glass-panel p-4 rounded-2xl border border-emerald-500/40 shadow-2xl max-w-xs w-full animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">
                <MessageCircle className="w-4 h-4 fill-current" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Sales & Customer Service</div>
                <div className="text-[10px] text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online | Ready 24/7
                </div>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="my-3 text-xs text-slate-300 bg-navy-950/80 p-3 rounded-xl border border-white/5 leading-relaxed">
            {isId
              ? 'Halo! Selamat datang di PT Mitra Bintang Transportindo. Silakan pilih topik pertanyaan Anda di bawah ini:'
              : 'Hello! Welcome to PT Mitra Bintang Transportindo. Please select your inquiry topic below:'}
          </div>

          {/* Preset Quick Actions */}
          <div className="space-y-2">
            <button
              onClick={() => sendQuickMessage('Halo Sales PT MBT, saya ingin meminta informasi penawaran pengangkutan Limbah B3 / Isotank.')}
              className="w-full text-left p-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 border border-white/10 text-xs text-slate-200 hover:text-emerald-400 transition-colors flex items-center justify-between group"
            >
              <span>{isId ? '🚚 Transportasi Limbah B3 & Isotank' : '🚚 B3 Hazardous Waste Transport'}</span>
              <Send className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button
              onClick={() => sendQuickMessage('Halo Sales PT MBT, saya ingin bertanya penyewaan Armada Kapal LCT / Tongkang / SPOB.')}
              className="w-full text-left p-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 border border-white/10 text-xs text-slate-200 hover:text-emerald-400 transition-colors flex items-center justify-between group"
            >
              <span>{isId ? '🚢 Sewa Kapal LCT / Tongkang / SPOB' : '🚢 LCT / Barge Vessel Charter'}</span>
              <Send className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button
              onClick={() => sendQuickMessage('Halo Sales PT MBT, saya dari tim proyek PLN / BUMN ingin bertanya pengiriman peralatan Gardu Induk.')}
              className="w-full text-left p-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 border border-white/10 text-xs text-slate-200 hover:text-emerald-400 transition-colors flex items-center justify-between group"
            >
              <span>{isId ? '⚡ Proyek Distribusi PLN Gardu Induk' : '⚡ PLN Infrastructure Logistics'}</span>
              <Send className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          <div className="mt-3 pt-2 border-t border-white/10 text-center">
            <span className="text-[10px] text-slate-400">Respon WhatsApp rata-rata &lt; 5 menit</span>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="group relative flex items-center justify-center p-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl shadow-emerald-500/50 transition-all hover:scale-110 active:scale-95"
        title="Chat WhatsApp Sales PT Mitra Bintang Transportindo"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/50 animate-ping opacity-75 pointer-events-none" />
        
        {chatOpen ? (
          <X className="w-7 h-7 relative z-10" />
        ) : (
          <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
        )}
      </button>

    </div>
  );
}
