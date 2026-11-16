import React, { useState } from 'react';
import { X, Calendar, Users, CheckCircle, Phone, Building } from 'lucide-react';
import { RoomType, SpecialOffer } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoom?: RoomType | null;
  selectedOffer?: SpecialOffer | null;
}

export default function BookingModal({ isOpen, onClose, selectedRoom, selectedOffer }: BookingModalProps) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2 Guests');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setSpecialRequests('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-amber-100">
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Columbia Apartments</span>
            <h3 className="text-xl font-bold mt-0.5">
              {selectedOffer ? `Claim: ${selectedOffer.title}` : selectedRoom ? `Book ${selectedRoom.name}` : 'Reservation Inquiry'}
            </h3>
          </div>
          <button 
            onClick={resetAndClose}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900">Inquiry Received Successfully!</h4>
            <p className="text-slate-600 text-sm max-w-sm mx-auto">
              Thank you, <span className="font-semibold text-slate-900">{name}</span>. Our reservation team at 15 Whitaker Place, Auckland has received your request and will contact you via email or phone within 2 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={resetAndClose}
                className="w-full py-3 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors"
              >
                Return to Website
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {selectedRoom && (
              <div className="p-3 bg-amber-50/70 border border-amber-200/60 rounded-xl flex items-center gap-3">
                <img src={selectedRoom.image} alt={selectedRoom.name} className="w-16 h-16 object-cover rounded-lg" />
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">{selectedRoom.name}</h4>
                  <p className="text-xs text-slate-600">${selectedRoom.pricePerNight} NZD / night · {selectedRoom.size}</p>
                </div>
              </div>
            )}

            {selectedOffer && (
              <div className="p-3 bg-amber-50/70 border border-amber-200/60 rounded-xl">
                <h4 className="font-semibold text-slate-900 text-sm">{selectedOffer.title} ({selectedOffer.discount})</h4>
                <p className="text-xs text-slate-600">{selectedOffer.subtitle}</p>
                <p className="text-xs font-mono text-amber-700 mt-1">Promo Code: {selectedOffer.code}</p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Check-in Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="date"
                    required
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Check-out Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="date"
                    required
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Guests</label>
              <div className="relative">
                <Users className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
                >
                  <option>1 Guest (Studio)</option>
                  <option>2 Guests</option>
                  <option>3 Guests (1 Bedroom)</option>
                  <option>4-5 Guests (2 Bedroom Suite)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    required
                    placeholder="+64 21 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Email Address *</label>
              <input
                type="email"
                required
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">Special Requests (Optional)</label>
              <textarea
                rows={2}
                placeholder="Late arrival, high floor preference, airport transfer..."
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Building className="w-4 h-4" />
                Submit Reservation Inquiry
              </button>
              <p className="text-[11px] text-slate-500 text-center mt-2">
                No immediate payment required. Free cancellation up to 48 hours before check-in.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
