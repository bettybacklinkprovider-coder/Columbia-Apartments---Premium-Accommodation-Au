import React, { useState } from 'react';
import { Page, RoomType } from '../types';
import { ROOMS } from '../data/mockData';
import { Building2, Check, Wifi, Utensils, Car, ShieldCheck, Clock, Users, ArrowRight } from 'lucide-react';

interface AccommodationPageProps {
  onNavigate: (page: Page) => void;
  onOpenBooking: (room?: RoomType) => void;
}

export default function AccommodationPage({ onNavigate, onOpenBooking }: AccommodationPageProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'studio' | '1-bedroom' | '2-bedroom'>('all');

  const filteredRooms = ROOMS.filter(room => {
    if (selectedFilter === 'studio') return room.id.includes('studio');
    if (selectedFilter === '1-bedroom') return room.id.includes('one-bedroom');
    if (selectedFilter === '2-bedroom') return room.id.includes('two-bedroom');
    return true;
  });

  return (
    <div className="py-16 bg-white min-h-screen space-y-20">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950 rounded-3xl p-10 sm:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 z-0 opacity-40">
            <img src="/assets/aistudio/unnamed__3__c1d60734.jpg" alt="Accommodation Banner" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold bg-amber-500/20 px-3.5 py-1.5 rounded-full border border-amber-400/30">
              Columbia Apartments Auckland
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-['Outfit']">
              Premium Apartment Accommodation
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Experience the perfect blend of home and hotel in Grafton, Auckland. From cozy executive studios to sprawling 2-bedroom executive suites, we have your ideal stay.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Room Listings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-wrap items-center justify-between gap-6 border-b border-slate-200 pb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-['Outfit']">Available Apartment Types</h2>
          <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-200">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-colors ${selectedFilter === 'all' ? 'bg-amber-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
            >
              All Rooms
            </button>
            <button
              onClick={() => setSelectedFilter('studio')}
              className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-colors ${selectedFilter === 'studio' ? 'bg-amber-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Studios
            </button>
            <button
              onClick={() => setSelectedFilter('1-bedroom')}
              className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-colors ${selectedFilter === '1-bedroom' ? 'bg-amber-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
            >
              1-Bedroom
            </button>
            <button
              onClick={() => setSelectedFilter('2-bedroom')}
              className={`px-5 py-2.5 text-xs font-bold rounded-xl transition-colors ${selectedFilter === '2-bedroom' ? 'bg-amber-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
            >
              2-Bedroom Suite
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {filteredRooms.map((room) => (
            <div key={room.id} className="bg-slate-50/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-slate-100">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-amber-600 text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md">
                  {room.size}
                </div>
              </div>

              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-['Outfit']">{room.name}</h3>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-amber-600 font-['Outfit']">${room.pricePerNight} NZD</span>
                      <span className="block text-xs text-slate-500 font-medium">per night (incl. taxes)</span>
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider">{room.tagline}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{room.description}</p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">Room Amenities & Features:</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-700">
                      {room.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2 bg-white p-2.5 rounded-xl border border-slate-200/60 shadow-xs">
                          <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-xs text-slate-600 font-medium w-full sm:w-auto">
                    <span>Max: {room.maxGuests} Guests</span>
                    <span>·</span>
                    <span>Bed: {room.bedType}</span>
                  </div>

                  <button
                    onClick={() => onOpenBooking(room)}
                    className="w-full sm:w-auto px-9 py-3.5 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl shadow-md transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    <span>Book This Apartment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Check-In & Policies Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-slate-50/80 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base font-['Outfit']">Check-In & Check-Out</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Check-in is from 2:00 PM onwards. Express self-check-in available for late arrivals. Check-out time is strictly by 10:00 AM.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base font-['Outfit']">Cancellation Policy</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Free cancellation up to 48 hours prior to your scheduled check-in date. Flexible modifications for extended stays.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
              <Car className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base font-['Outfit']">Parking & Access</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Secure undercover parking is available on-site at 15 Whitaker Place for NZD $25 per night. Pre-booking recommended.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
