import React from 'react';
import { Page, SpecialOffer } from '../types';
import { SPECIAL_OFFERS } from '../data/mockData';
import { Sparkles, Tag, ArrowRight, CheckCircle2, Calendar } from 'lucide-react';

interface SpecialOffersPageProps {
  onNavigate: (page: Page) => void;
  onOpenBooking: (room?: undefined, offer?: SpecialOffer) => void;
}

export default function SpecialOffersPage({ onNavigate, onOpenBooking }: SpecialOffersPageProps) {
  return (
    <div className="py-12 bg-slate-50 min-h-screen space-y-16">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 z-0 opacity-35">
            <img src="/src/assets/images/room_studio_interior_1794827762548.jpg" alt="Offers Banner" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
              Exclusive Packages & Promotions
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-['Outfit']">
              Special Offers & Deals
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Make your stay in Auckland even more rewarding with our exclusive seasonal packages, corporate discounts, and extended-stay savings.
            </p>
          </div>
        </div>
      </div>

      {/* Offers Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPECIAL_OFFERS.map((offer) => (
            <div key={offer.id} className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="relative h-64 overflow-hidden">
                  <img src={offer.image} alt={offer.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
                    {offer.discount}
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-700">
                    <Calendar className="w-4 h-4" />
                    <span>{offer.validUntil}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 font-['Outfit']">{offer.title}</h3>
                  <p className="text-xs text-amber-800 font-semibold uppercase tracking-wider">{offer.subtitle}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{offer.description}</p>

                  <div className="pt-2">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-600">Promo Code:</span>
                      <span className="text-xs font-mono font-bold text-slate-900 bg-white px-2.5 py-1 rounded border border-slate-200">
                        {offer.code}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{offer.conditions}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <button
                  onClick={() => onOpenBooking(undefined, offer)}
                  className="w-full py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-md transition-colors text-sm flex items-center justify-center gap-2"
                >
                  <span>Claim This Offer</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate / Long Term Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl border border-slate-800">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/40">
            Corporate & Group Bookings
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-['Outfit'] max-w-2xl mx-auto">
            Need Custom Long-Term Accommodation in Auckland?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            We offer specialized corporate billing, multi-apartment group bookings, and tailored contracts for relocating professionals and hospital staff.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-md transition-colors text-sm"
            >
              Contact Our Management Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
