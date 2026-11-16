import React from 'react';
import { Page } from '../types';
import { Building2, Phone, MessageSquare } from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenBooking: () => void;
}

export default function Navbar({ currentPage, onNavigate, onOpenBooking }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <button 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-3 text-left group shrink-0 focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-md group-hover:bg-amber-700 transition-colors">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-lg font-bold tracking-tight text-slate-900 font-['Outfit']">
              Columbia Apartments
            </span>
            <span className="block text-[11px] font-medium text-amber-700 tracking-wider uppercase">
              Auckland Central
            </span>
          </div>
        </button>

        {/* Zone 2: 4 concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
          <button
            onClick={() => onNavigate('home')}
            className={`transition-colors whitespace-nowrap shrink-0 py-2 border-b-2 ${
              currentPage === 'home'
                ? 'border-amber-600 text-amber-600 font-bold'
                : 'border-transparent hover:text-amber-600'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('accommodation')}
            className={`transition-colors whitespace-nowrap shrink-0 py-2 border-b-2 ${
              currentPage === 'accommodation'
                ? 'border-amber-600 text-amber-600 font-bold'
                : 'border-transparent hover:text-amber-600'
            }`}
          >
            Accommodation
          </button>
          <button
            onClick={() => onNavigate('offers')}
            className={`transition-colors whitespace-nowrap shrink-0 py-2 border-b-2 ${
              currentPage === 'offers'
                ? 'border-amber-600 text-amber-600 font-bold'
                : 'border-transparent hover:text-amber-600'
            }`}
          >
            Special Offers
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className={`transition-colors whitespace-nowrap shrink-0 py-2 border-b-2 ${
              currentPage === 'contact'
                ? 'border-amber-600 text-amber-600 font-bold'
                : 'border-transparent hover:text-amber-600'
            }`}
          >
            Contact Us
          </button>
        </nav>

        {/* Zone 3: 1 primary action & Quick phone/WhatsApp */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+6499738600"
            className="hidden sm:flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors whitespace-nowrap"
            title="Call Us Now"
          >
            <Phone className="w-3.5 h-3.5 text-amber-600" />
            <span>+64 9 973 8600</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Mobile Nav Bar */}
      <div className="lg:hidden flex items-center justify-around bg-slate-50 border-t border-slate-200 px-2 py-2 text-xs font-medium text-slate-700">
        <button
          onClick={() => onNavigate('home')}
          className={`px-3 py-1.5 rounded-lg ${currentPage === 'home' ? 'bg-amber-600 text-white font-bold' : 'hover:text-amber-600'}`}
        >
          Home
        </button>
        <button
          onClick={() => onNavigate('accommodation')}
          className={`px-3 py-1.5 rounded-lg ${currentPage === 'accommodation' ? 'bg-amber-600 text-white font-bold' : 'hover:text-amber-600'}`}
        >
          Rooms
        </button>
        <button
          onClick={() => onNavigate('offers')}
          className={`px-3 py-1.5 rounded-lg ${currentPage === 'offers' ? 'bg-amber-600 text-white font-bold' : 'hover:text-amber-600'}`}
        >
          Offers
        </button>
        <button
          onClick={() => onNavigate('contact')}
          className={`px-3 py-1.5 rounded-lg ${currentPage === 'contact' ? 'bg-amber-600 text-white font-bold' : 'hover:text-amber-600'}`}
        >
          Contact
        </button>
      </div>
    </header>
  );
}
