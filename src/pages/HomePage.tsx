import React from 'react';
import { Page, RoomType, SpecialOffer } from '../types';
import { ROOMS, SPECIAL_OFFERS, REVIEWS, FACILITIES } from '../data/mockData';
import { 
  Building2, Star, Wifi, Utensils, Car, Shirt, ShieldCheck, 
  ArrowRight, Check, MapPin, Phone, ExternalLink 
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onOpenBooking: (room?: RoomType, offer?: SpecialOffer) => void;
}

export default function HomePage({ onNavigate, onOpenBooking }: HomePageProps) {
  return (
    <div className="space-y-0 bg-white">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden">
        {/* Background Image with Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/aistudio/thumbnail_cb8452fb.jpg"
            alt="Columbia Apartments Auckland Exterior"
            className="w-full h-full object-cover opacity-40 transform scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md">
            <MapPin className="w-3.5 h-3.5" /> 15 Whitaker Place, Grafton, Auckland 1010
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 font-['Outfit'] leading-tight">
            Welcome to <span className="text-amber-400">Columbia Apartments</span>
          </h1>

          <p className="text-lg sm:text-2xl text-slate-300 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Comfortable apartment living in the heart of Auckland. Unmatched convenience, premium amenities, and professional hospitality.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5 text-base flex items-center justify-center gap-2"
            >
              <span>Book Your Stay</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('accommodation')}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold rounded-2xl backdrop-blur-md transition-all text-base"
            >
              Explore Rooms
            </button>
          </div>

          <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-amber-400 font-['Outfit']">4.8 / 5</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Guest Rating Score</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-400 font-['Outfit']">Central</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Grafton Location</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-400 font-['Outfit']">24/7</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Security & Support</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-400 font-['Outfit']">Free</p>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider">Fiber Wi-Fi</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT US */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
                About Columbia Apartments
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 font-['Outfit'] leading-tight">
                Your Sanctuary of Comfort in Central Auckland
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Situated at 15 Whitaker Place in the vibrant Grafton precinct, Columbia Apartments offers premium independent living designed for business executives, medical visitors, holidaymakers, and extended-stay travellers. 
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                We combine the independence of a private residence with hotel-quality hospitality, featuring our on-site Columbia Mini Mart. Enjoy effortless access to Auckland City Hospital, the University of Auckland, and Grafton station.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">✓</div>
                  <span className="text-sm font-semibold text-slate-800">Prime Central Location</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">✓</div>
                  <span className="text-sm font-semibold text-slate-800">Columbia Mini Mart On-site</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src="/assets/aistudio/unnamed_c788c8f4.jpg"
                  alt="Columbia Apartments Reception Desk"
                  className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-slate-900 text-white p-6 rounded-2xl shadow-2xl hidden sm:block max-w-xs border border-slate-800">
                <div className="flex items-center gap-1.5 text-amber-400 mb-2">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "Friendly 24/7 reception and immaculately kept apartments in Grafton."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OUR ACCOMMODATION */}
      <section className="py-28 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
              Our Accommodation
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 font-['Outfit'] mt-4">
              Thoughtfully Designed Rooms & Suites
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Choose from our immaculate collection of executive studios and apartments equipped for your comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ROOMS.map((room) => (
              <div key={room.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col group">
                <div className="relative h-72 overflow-hidden bg-slate-100">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-md">
                    ${room.pricePerNight} NZD / night
                  </div>
                  {room.popular && (
                    <div className="absolute top-4 left-4 bg-amber-600 text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md">
                      Most Popular
                    </div>
                  )}
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-slate-900 font-['Outfit']">{room.name}</h3>
                    <p className="text-xs text-amber-700 font-semibold">{room.tagline}</p>
                    <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">{room.description}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs text-slate-600 font-medium">
                    <span className="bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">{room.size}</span>
                    <span className="bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">Up to {room.maxGuests} Guests</span>
                    <span className="bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">{room.bedType}</span>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => onNavigate('accommodation')}
                      className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors text-center"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => onOpenBooking(room)}
                      className="flex-1 py-3 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold rounded-xl transition-colors text-center shadow-md"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => onNavigate('accommodation')}
              className="inline-flex items-center gap-2 px-9 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-2xl transition-colors text-sm shadow-lg"
            >
              <span>View All Rooms & Amenities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 4: FACILITIES & AMENITIES */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
              Facilities & Amenities
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 font-['Outfit'] mt-4">
              Everything You Need for a Seamless Stay
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Explore our verified on-site amenities, convenience store, and 24/7 services at 15 Whitaker Place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FACILITIES.map((fac, idx) => (
              <div key={idx} className="bg-slate-50/80 rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img src={fac.image} alt={fac.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md text-amber-400 px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    Verified Feature
                  </div>
                </div>
                <div className="p-8 space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">{fac.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{fac.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CUSTOMER REVIEWS & RATINGS */}
      <section className="py-28 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/20 px-3.5 py-1.5 rounded-full border border-amber-400/30">
                Customer Reviews & Ratings
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white font-['Outfit'] mt-4">
                Loved by Guests from Around the World
              </h2>
            </div>
            <div className="flex items-center gap-4 bg-slate-900 p-5 rounded-2xl border border-slate-800">
              <div className="text-4xl font-bold text-amber-400 font-['Outfit']">4.8</div>
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-xs text-slate-400">Based on 180+ Verified Reviews</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((rev) => (
              <div key={rev.id} className="bg-slate-900/90 backdrop-blur-md rounded-3xl p-8 border border-slate-800 flex flex-col justify-between shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-800 text-amber-300">
                      {rev.source}
                    </span>
                  </div>
                  <h4 className="font-bold text-white text-base font-['Outfit']">{rev.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed italic">"{rev.comment}"</p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-white">{rev.author}</span>
                  <span>{rev.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* QR Code / Review Banner */}
          <div className="mt-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-10 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs uppercase tracking-wider font-bold text-amber-200">Stayed with us recently?</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-['Outfit']">Share Your Feedback on Google Reviews</h3>
              <p className="text-amber-100 text-sm max-w-xl">
                We value your experience at Columbia Apartments. Leave your rating and help future travellers.
              </p>
            </div>
            <a
              href="https://g.page/r/columbia-apartments-auckland"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-slate-100 transition-colors shadow-lg text-sm whitespace-nowrap"
            >
              Leave Google Review
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 6: SPECIAL OFFERS & PACKAGES */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
              Special Offers & Packages
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 font-['Outfit'] mt-4">
              Exclusive Accommodation Deals
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              Maximize your stay with our curated weekend, extended stay, and seasonal promotions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SPECIAL_OFFERS.map((offer) => (
              <div key={offer.id} className="bg-slate-50/80 rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="relative h-52 overflow-hidden bg-slate-100">
                    <img src={offer.image} alt={offer.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 right-4 bg-amber-600 text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md">
                      {offer.discount}
                    </div>
                  </div>
                  <div className="p-8 space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">{offer.title}</h3>
                    <p className="text-xs text-amber-700 font-semibold">{offer.subtitle}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{offer.description}</p>
                    <div className="pt-2">
                      <span className="text-[11px] font-mono text-slate-700 bg-white px-3 py-1.5 rounded-xl border border-slate-200 inline-block font-semibold">
                        Code: {offer.code}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <button
                    onClick={() => onOpenBooking(undefined, offer)}
                    className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs transition-colors shadow-sm"
                  >
                    Claim Offer
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => onNavigate('offers')}
              className="inline-flex items-center gap-2 px-9 py-4 bg-amber-600 hover:bg-amber-500 text-white font-semibold rounded-2xl transition-colors text-sm shadow-lg"
            >
              <span>Explore All Special Packages</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
