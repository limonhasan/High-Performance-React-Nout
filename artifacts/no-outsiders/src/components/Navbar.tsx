import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onGetTickets: () => void;
}

export default function Navbar({ onGetTickets }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-black/95 border-b-2 border-[#E31212]" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="relative flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full border-2 border-[#E31212] bg-[#E31212] flex items-center justify-center font-bold text-white text-lg"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}>
              N
            </div>
            <span className="hidden sm:block sub-headline text-white font-bold tracking-widest text-xs">
              NO OUTSIDERS
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["events", "thecode", "gallery"].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="sub-headline text-white/70 hover:text-[#E31212] text-xs tracking-widest transition-colors font-semibold"
              >
                {id === "thecode" ? "THE CODE" : id.toUpperCase()}
              </button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={onGetTickets}
              className="sub-headline text-white bg-[#E31212] border-2 border-[#E31212] px-5 py-2 text-xs tracking-widest font-bold hover:bg-transparent hover:text-[#E31212] transition-all"
            >
              GET TICKETS
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-39 bg-black border-b-2 border-[#E31212] py-6 px-6 flex flex-col gap-5 md:hidden"
            style={{ zIndex: 39 }}
          >
            {[
              { id: "events", label: "EVENTS" },
              { id: "thecode", label: "THE CODE" },
              { id: "gallery", label: "GALLERY" },
            ].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="sub-headline text-white/70 hover:text-[#E31212] text-sm tracking-widest font-bold text-left transition-colors"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                onGetTickets();
              }}
              className="sub-headline text-white bg-[#E31212] border-2 border-[#E31212] px-5 py-3 text-sm tracking-widest font-bold text-center"
            >
              GET TICKETS
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
