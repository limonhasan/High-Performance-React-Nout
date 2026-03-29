import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TheCode from "@/components/TheCode";
import EventsSection from "@/components/EventsSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

interface BookingEvent {
  name: string;
  date: string;
  venue: string;
}

const defaultEvent: BookingEvent = {
  name: "NO OUTSIDERS – NEXT EVENT",
  date: "Coming Soon",
  venue: "TBA",
};

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<BookingEvent>(defaultEvent);

  const openBooking = (event?: BookingEvent) => {
    setSelectedEvent(event || defaultEvent);
    setModalOpen(true);
  };

  return (
    <div className="bg-black min-h-screen">
      <Navbar onGetTickets={() => openBooking()} />

      <main>
        <HeroSection onGetTickets={() => openBooking()} />
        <EventsSection onBook={openBooking} />
        <TheCode />
        <GallerySection />
      </main>

      <Footer />

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        event={selectedEvent}
      />
    </div>
  );
}
