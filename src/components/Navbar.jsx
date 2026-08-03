import React, { useState } from 'react';
import { Phone, Mail, MapPin, Globe, ShieldCheck, Menu, X, LayoutDashboard, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export default function Navbar({ lang, setLang, openQuoteModal, openAdminModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isId = lang === 'id';

  const navLinks = [
    { name: isId ? 'Beranda' : 'Home', href: '#home' },
    { name: isId ? 'Tentang Kami' : 'About Us', href: '#about' },
    { name: isId ? 'Layanan Kami' : 'Our Services', href: '#services' },
    { name: isId ? 'HSE & Kepatuhan' : 'HSE & Safety', href: '#hse' },
    { name: isId ? 'Hubungi Kami' : 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-navy-950/90 backdrop-blur-md border-b border-white/5 py-2 px-4 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 hover:text-safety-400 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-safety-500" />
              <span>Banjarmasin, Kalimantan Selatan</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 hover:text-safety-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-ocean-400" />
              <span>{COMPANY_INFO.phone}</span>
            </span>
            <span className="hidden lg:flex items-center gap-1.5 hover:text-safety-400 transition-colors">
              <Mail className="w-3.5 h-3.5 text-ocean-400" />
              <span>{COMPANY_INFO.email}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* HSE Badge */}
            <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>{isId ? 'Terlisensi B3 KLHK' : 'B3 Licensed'}</span>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center bg-navy-900 border border-white/10 rounded-lg p-0.5">
              <button
                onClick={() => setLang('id')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                  isId ? 'bg-safety-500 text-navy-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                ID
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                  !isId ? 'bg-safety-500 text-navy-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Admin CMS Button */}
            <button
              onClick={openAdminModal}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-300 border border-white/10 text-xs font-medium transition-all"
              title="Akses Portal Simulasi CMS Admin"
            >
              <LayoutDashboard className="w-3.5 h-3.5 text-safety-400" />
              <span className="hidden sm:inline">CMS Admin</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="glass-panel border-b border-white/10 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-safety-400 via-safety-500 to-ocean-600 flex items-center justify-center shadow-lg shadow-safety-500/20 group-hover:scale-105 transition-transform">
              {/* Star icon representing Mitra Bintang */}
              <svg className="w-6 h-6 text-navy-950 font-bold fill-current" viewBox="0 0 24 24">
                <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg sm:text-xl tracking-tight text-white leading-tight">
                MITRA BINTANG <span className="text-safety-400">TRANSPORTINDO</span>
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider font-semibold uppercase">
                Freight Forwarding & Special Cargo
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-safety-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-safety-400 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={openQuoteModal}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-safety-500 to-safety-600 text-navy-950 font-bold text-sm shadow-lg shadow-safety-500/25 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Send className="w-4 h-4 fill-current" />
              <span>{isId ? 'Minta Penawaran' : 'Request Quote'}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-navy-800 text-slate-200 border border-white/10 hover:bg-navy-700"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-3 px-2 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-safety-400 py-2 text-sm font-medium px-3 rounded-lg hover:bg-navy-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-safety-500 text-navy-950 font-bold text-sm shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>{isId ? 'Minta Penawaran (Quote)' : 'Request Quote'}</span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
