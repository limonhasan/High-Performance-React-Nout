import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    number: "01",
    title: "EXCLUSIVE NIGHTS ONLY",
    desc: "We don't do regular. Every event is handcrafted — limited seats, curated energy, and an atmosphere you won't find anywhere else in the city.",
  },
  {
    number: "02",
    title: "A COMMUNITY OF POSITIVITY",
    desc: "No substances. No drama. Just pure human connection and music that hits different when you're fully present. We built this for the real ones.",
  },
  {
    number: "03",
    title: "WE VIBE DIFFERENT",
    desc: "Bollywood meets club. EDM meets culture. We blur every line you thought existed between genres and create something entirely our own.",
  },
];

export default function TheCode() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="thecode" className="relative py-24 sm:py-32 bg-black overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E31212] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-12 h-1 bg-[#E31212]" />
          <span className="sub-headline text-[#E31212] text-xs tracking-widest font-bold">
            THE CODE
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Big statement */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="headline text-white text-[clamp(2.5rem,7vw,5rem)] mb-6">
              WE BUILT A
              <br />
              <span className="text-[#E31212]">MOVEMENT.</span>
              <br />
              NOT JUST
              <br />
              A PARTY.
            </h2>
            <p className="text-white/50 font-light text-base sm:text-lg leading-relaxed max-w-md">
              No Outsiders is more than a brand — it's a philosophy. In a world that constantly tells you to fit in, we created a space where being yourself is the only entry requirement.
            </p>

            <div className="mt-8 inline-block border-4 border-[#E31212] px-6 py-4">
              <div className="sub-headline text-[#E31212] font-bold text-xs tracking-widest mb-1">
                OUR GUARANTEE
              </div>
              <div className="text-white font-medium text-sm">
                100% Sober. 100% Safe. 100% Unforgettable.
              </div>
            </div>
          </motion.div>

          {/* Right: Value cards */}
          <div className="space-y-6">
            {values.map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, x: 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group border-l-4 border-[#E31212]/30 hover:border-[#E31212] transition-all duration-300 pl-6 py-2"
              >
                <div className="headline text-[#E31212]/30 group-hover:text-[#E31212] text-3xl transition-colors mb-1">
                  {item.number}
                </div>
                <div className="sub-headline text-white font-bold text-sm sm:text-base tracking-wide mb-2">
                  {item.title}
                </div>
                <div className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
