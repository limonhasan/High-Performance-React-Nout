import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lock } from "lucide-react";

interface Event {
  name: string;
  date: string;
  venue: string;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: Event | null;
}

export default function BookingModal({ isOpen, onClose, event }: BookingModalProps) {
  const [name, setName] = useState("");
  const [instagram, setInstagram] = useState("");
  const [reason, setReason] = useState("");

  const handleConfirm = () => {
    if (!name.trim() || !event) return;
    const igPart = instagram.trim() ? ` | Instagram: @${instagram.replace(/^@/, "")}` : "";
    const reasonPart = reason.trim() ? ` | Why I should be invited: ${reason}` : "";
    const message = encodeURIComponent(
      `Hi No Outsiders! I'd like to request an invite for ${event.name}. My name is ${name}${igPart}${reasonPart}.`
    );
    // REPLACE YOUR_NUMBER with the actual WhatsApp number (e.g. 8801XXXXXXXXX)
    window.open(`https://wa.me/YOUR_NUMBER?text=${message}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && event && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 z-50"
            onClick={onClose}
          />
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div className="glassmorphism w-full max-w-md p-0 overflow-hidden">
              {/* Header */}
              <div className="relative bg-[#E31212] px-6 py-5">
                <div className="flex items-center gap-2 mb-1">
                  <Lock size={12} className="text-white/80" />
                  <div className="sub-headline text-white/80 font-bold text-xs tracking-widest">
                    INVITE ONLY
                  </div>
                </div>
                <h2 className="headline text-white text-2xl leading-tight">{event.name}</h2>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="px-6 py-6">
                {/* Notice banner */}
                <div className="flex items-start gap-3 mb-6 p-4 border border-[#E31212]/30 bg-[#E31212]/5">
                  <Lock size={14} className="text-[#E31212] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="sub-headline text-[#E31212] text-xs font-bold tracking-widest mb-1">
                      NO TICKETS AVAILABLE
                    </div>
                    <div className="text-white/60 text-xs leading-relaxed">
                      This is an exclusive invite-only event. Submit your request and we'll reach out if you're selected.
                    </div>
                  </div>
                </div>

                {/* Event info strip */}
                <div className="flex items-center gap-4 mb-6 text-sm text-white/50">
                  <span>{event.date}</span>
                  {event.venue && (
                    <>
                      <span className="w-px h-4 bg-white/20" />
                      <span>{event.venue}</span>
                    </>
                  )}
                </div>

                {/* Form */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="sub-headline text-[#E31212] text-xs block mb-2 tracking-widest">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="w-full bg-black border-2 border-white/20 focus:border-[#E31212] text-white px-4 py-3 text-sm outline-none transition-colors placeholder-white/30"
                    />
                  </div>
                  <div>
                    <label className="sub-headline text-[#E31212] text-xs block mb-2 tracking-widest">
                      INSTAGRAM HANDLE
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 text-sm">@</span>
                      <input
                        type="text"
                        value={instagram}
                        onChange={(e) => setInstagram(e.target.value)}
                        placeholder="yourhandle"
                        className="w-full bg-black border-2 border-white/20 focus:border-[#E31212] text-white pl-8 pr-4 py-3 text-sm outline-none transition-colors placeholder-white/30"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="sub-headline text-[#E31212] text-xs block mb-2 tracking-widest">
                      WHY SHOULD YOU GET AN INVITE?
                    </label>
                    <textarea
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      placeholder="Tell us a little about yourself..."
                      rows={3}
                      className="w-full bg-black border-2 border-white/20 focus:border-[#E31212] text-white px-4 py-3 text-sm outline-none transition-colors placeholder-white/30 resize-none"
                    />
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleConfirm}
                  disabled={!name.trim()}
                  className="w-full bg-[#E31212] text-white sub-headline font-bold text-sm tracking-widest py-4 transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#c00e0e] flex items-center justify-center gap-3"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  SEND INVITE REQUEST
                </motion.button>

                <p className="text-white/30 text-xs text-center mt-3">
                  We'll review your request and get back to you via WhatsApp
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
