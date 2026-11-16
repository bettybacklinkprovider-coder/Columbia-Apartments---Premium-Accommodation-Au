import React, { useState } from 'react';
import { Page } from '../types';
import { TESTIMONIALS } from '../data/mockData';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle, Star, Quote, Building2 } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: Page) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 bg-slate-50 min-h-screen space-y-20">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 z-0 opacity-30">
            <img src="/src/assets/images/facilities_lounge_1794827764439.jpg" alt="Contact Banner" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30">
              Get in Touch with Us
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold font-['Outfit']">
              Contact Columbia Apartments
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We are here to assist with your accommodation inquiries, corporate bookings, and special requests in Auckland.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info & Inquiry Form Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details & Map Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-md border border-slate-200 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-md">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 font-['Outfit']">Columbia Apartments</h3>
                  <p className="text-xs text-amber-700 font-semibold">Auckland Central Accommodation</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-600 pt-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Address:</strong>
                    <span>15 Whitaker Place, Grafton, Auckland 1010, New Zealand</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-600 shrink-0" />
                  <div>
                    <strong className="block text-slate-900">Phone:</strong>
                    <a href="tel:+6499738600" className="text-amber-600 font-bold hover:underline">+64 9 973 8600</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-amber-600 shrink-0" />
                  <div>
                    <strong className="block text-slate-900">Email:</strong>
                    <a href="mailto:info@columbiaapartments.co.nz" className="text-amber-600 font-bold hover:underline">info@columbiaapartments.co.nz</a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex gap-4">
                <a
                  href="tel:+6499738600"
                  className="flex-1 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs text-center transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us Now</span>
                </a>
                <a
                  href="https://wa.me/6499738600"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-xs text-center transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Embedded / Interactive Map Card */}
            <div className="bg-white rounded-3xl p-4 shadow-md border border-slate-200 overflow-hidden">
              <div className="relative h-64 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                <iframe
                  title="Columbia Apartments Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.859063854897!2d174.7594!3d-36.8552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47e85c13e51f%3A0x500ef868439e650!2s15%20Whitaker%20Place%2C%20Grafton%2C%20Auckland%201010%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1650000000000!5m2!1sen!2snz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-3 text-center text-xs text-slate-500 font-medium">
                15 Whitaker Place, Grafton, Auckland 1010
              </div>
            </div>
          </div>

          {/* Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-md border border-slate-200">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-['Outfit']">Message Sent Successfully!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you for reaching out, <span className="font-semibold text-slate-900">{name}</span>. Our reception team at 15 Whitaker Place will respond to your inquiry shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 font-['Outfit']">Send Us a Message</h3>
                    <p className="text-slate-600 text-xs mt-1">
                      Fill out the form below and our team will get back to you promptly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+64 21 000 0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">Inquiry Type</label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none bg-white"
                      >
                        <option>General Accommodation Inquiry</option>
                        <option>Corporate Stay / Long Term</option>
                        <option>Existing Reservation</option>
                        <option>Event or Group Booking</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">Your Message *</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Please let us know your dates, room preferences, or any specific questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-md transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Columbia Apartments</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CLIENT TESTIMONIALS SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-['Outfit'] mt-3">
            What Our Guests Say
          </h2>
          <p className="text-slate-600 mt-2">
            Real feedback from professionals, researchers, and travellers who stayed at Columbia Apartments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div key={test.id} className="bg-white rounded-3xl p-8 shadow-md border border-slate-200 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-4 right-6 text-amber-100 -z-0">
                <Quote className="w-20 h-20" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">"{test.comment}"</p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between relative z-10">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm font-['Outfit']">{test.name}</h4>
                  <p className="text-xs text-amber-700 font-medium">{test.role}</p>
                </div>
                <span className="text-[11px] font-mono bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg">
                  {test.stayDuration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
