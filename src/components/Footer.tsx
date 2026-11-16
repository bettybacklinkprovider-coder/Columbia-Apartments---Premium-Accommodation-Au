import React from 'react';
import { Page } from '../types';
import { Building2, MapPin, Phone, Mail, MessageCircle, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onOpenBooking: () => void;
}

export default function Footer({ onNavigate, onOpenBooking }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-md">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white font-['Outfit']">
                Columbia Apartments
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Premium, comfortable, and modern apartment living in the heart of Grafton, Auckland. Your home away from home.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/6499738600"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors shadow-md"
                title="WhatsApp Booking & Inquiry"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:+6499738600"
                className="w-10 h-10 rounded-full bg-amber-600 hover:bg-amber-500 text-white flex items-center justify-center transition-colors shadow-md"
                title="Call Us"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => { onNavigate('home'); window.scrollTo(0,0); }} className="hover:text-amber-400 transition-colors">
                  Home (Overview)
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('accommodation'); window.scrollTo(0,0); }} className="hover:text-amber-400 transition-colors">
                  Accommodation & Rooms
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('offers'); window.scrollTo(0,0); }} className="hover:text-amber-400 transition-colors">
                  Special Offers & Packages
                </button>
              </li>
              <li>
                <button onClick={() => { onNavigate('contact'); window.scrollTo(0,0); }} className="hover:text-amber-400 transition-colors">
                  Contact Us & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base uppercase tracking-wider">Contact & Location</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>15 Whitaker Place, Grafton, Auckland 1010, New Zealand</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <a href="tel:+6499738600" className="hover:text-amber-400 transition-colors">+64 9 973 8600</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <a href="mailto:info@columbiaapartments.co.nz" className="hover:text-amber-400 transition-colors">info@columbiaapartments.co.nz</a>
              </div>
            </div>
          </div>

          {/* Column 4: Quick Reservation CTA */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base uppercase tracking-wider">Plan Your Stay</h4>
            <p className="text-sm text-slate-400">
              Experience Auckland with premier comfort and unbeatable central location.
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl shadow-md transition-colors"
            >
              Book Your Stay Online
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Columbia Apartments. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>15 Whitaker Place, Grafton, Auckland</span>
            <span>·</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-slate-300">Privacy & Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
