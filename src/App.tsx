import React, { useState, useEffect } from 'react';
import { Page, RoomType, SpecialOffer } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import HomePage from './pages/HomePage';
import AccommodationPage from './pages/AccommodationPage';
import SpecialOffersPage from './pages/SpecialOffersPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<RoomType | null>(null);
  const [selectedOffer, setSelectedOffer] = useState<SpecialOffer | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleOpenBooking = (room?: RoomType, offer?: SpecialOffer) => {
    setSelectedRoom(room || null);
    setSelectedOffer(offer || null);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedRoom(null);
    setSelectedOffer(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf9] text-slate-900 font-['Plus_Jakarta_Sans'] selection:bg-amber-500 selection:text-white">
      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={setCurrentPage}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'accommodation' && (
          <AccommodationPage
            onNavigate={setCurrentPage}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'offers' && (
          <SpecialOffersPage
            onNavigate={setCurrentPage}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={setCurrentPage}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={setCurrentPage}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Reservation Inquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        selectedRoom={selectedRoom}
        selectedOffer={selectedOffer}
      />
    </div>
  );
}
