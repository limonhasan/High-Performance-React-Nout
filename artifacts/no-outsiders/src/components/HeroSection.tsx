import { motion } from "framer-motion";

interface HeroProps {
  onGetTickets: () => void;
}

export default function HeroSection({ onGetTickets }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-black px-4"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(#E31212 1px, transparent 1px), linear-gradient(90deg, #E31212 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Red glow blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#E31212]/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-block border-2 border-[#E31212] bg-[#E31212]/10 px-4 py-1.5 mb-8"
        >
          <span className="sub-headline text-[#E31212] text-xs tracking-widest font-bold">
            ★ DHAKA'S MOST EXCLUSIVE NIGHT ★
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="headline text-white text-[clamp(3rem,12vw,9rem)] mb-6"
        >
          3 HOURS
          <br />
          <span className="text-[#E31212] neon-text">OF NONSTOP</span>
          <br />
          ENERGY.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="sub-headline text-white/50 text-sm sm:text-base tracking-widest mb-12 font-medium"
        >
          No Smoking &nbsp;•&nbsp; No Alcohol &nbsp;•&nbsp; No Daily Raves
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={onGetTickets}
            className="pulse-glow sub-headline font-bold text-white bg-[#E31212] border-4 border-[#E31212] px-10 py-4 text-sm tracking-widest w-full sm:w-auto"
          >
            REQUEST INVITE →
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              document.getElementById("events")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="sub-headline font-bold text-white border-4 border-white/30 px-10 py-4 text-sm tracking-widest hover:border-white transition-colors w-full sm:w-auto"
          >
            VIEW EVENTS
          </motion.button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center gap-8 sm:gap-16 mt-16 pt-12 border-t border-white/10"
        >
          {[
            { value: "3+", label: "EVENTS" },
            { value: "500+", label: "ATTENDEES" },
            { value: "INVITE", label: "ONLY" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="headline text-white text-2xl sm:text-3xl">{value}</div>
              <div className="sub-headline text-white/40 text-xs tracking-widest mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="sub-headline text-white/30 text-xs tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#E31212] to-transparent"
        />
      </motion.div>
    </section>
  );
}
