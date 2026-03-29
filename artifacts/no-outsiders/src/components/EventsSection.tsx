import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Clock, Lock } from "lucide-react";

const events = [
  {
    id: 1,
    name: "RED ROOM",
    subtitle: "Bollywood X Club",
    date: "Jan 29",
    time: "7PM – 10PM",
    venue: "TBA",
    tag: "INVITE ONLY",
    // REPLACE WITH IG MEDIA HERE
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
  },
  {
    id: 2,
    name: "ALADDIN",
    subtitle: "Exclusive Night",
    date: "Coming Soon",
    time: "TBA",
    venue: "Mirpur 10",
    tag: "INVITE ONLY",
    // REPLACE WITH IG MEDIA HERE
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
  },
  {
    id: 3,
    name: "EDM X BOLLYWOOD",
    subtitle: "The Fusion Night",
    date: "Dec 22",
    time: "Exclusive",
    venue: "Ocean Basket",
    tag: "INVITE ONLY",
    // REPLACE WITH IG MEDIA HERE
    image: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800&q=80",
  },
];

interface EventsProps {
  onBook: (event: { name: string; date: string; venue: string }) => void;
}

export default function EventsSection({ onBook }: EventsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="events" className="relative py-24 sm:py-32 bg-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-12 h-1 bg-[#E31212]" />
              <span className="sub-headline text-[#E31212] text-xs tracking-widest font-bold">
                UPCOMING EVENTS
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="headline text-white text-[clamp(2rem,6vw,4rem)]"
            >
              OUR NIGHTS.
              <br />
              <span className="text-[#E31212]">YOUR ESCAPE.</span>
            </motion.h2>
          </div>

          {/* Invite only notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2 border-2 border-white/10 px-4 py-3 self-start sm:self-auto"
          >
            <Lock size={12} className="text-[#E31212]" />
            <span className="sub-headline text-white/50 text-xs tracking-widest">
              NO TICKETS — INVITE ONLY
            </span>
          </motion.div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.15 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-black border-2 border-white/10 hover:border-[#E31212] transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                {/* REPLACE WITH IG MEDIA HERE */}
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-50 group-hover:brightness-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/80 border border-[#E31212]/60 px-3 py-1">
                  <Lock size={10} className="text-[#E31212]" />
                  <span className="sub-headline text-[#E31212] text-xs font-bold tracking-widest">
                    {event.tag}
                  </span>
                </div>

                {/* Event name overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="sub-headline text-[#E31212] text-xs font-bold tracking-widest mb-1">
                    {event.subtitle}
                  </div>
                  <div className="headline text-white text-2xl sm:text-3xl leading-tight">
                    {event.name}
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="flex-1 p-5">
                <div className="space-y-2.5 mb-5">
                  <div className="flex items-center gap-2.5 text-white/60 text-sm">
                    <Calendar size={14} className="text-[#E31212] flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-white/60 text-sm">
                    <Clock size={14} className="text-[#E31212] flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-white/60 text-sm">
                    <MapPin size={14} className="text-[#E31212] flex-shrink-0" />
                    <span>{event.venue}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() =>
                    onBook({
                      name: `${event.name} – ${event.subtitle}`,
                      date: event.date,
                      venue: event.venue,
                    })
                  }
                  className="w-full sub-headline font-bold text-white bg-[#E31212] border-2 border-[#E31212] hover:bg-transparent hover:text-[#E31212] transition-all text-xs tracking-widest py-3 flex items-center justify-center gap-2"
                >
                  <Lock size={11} />
                  REQUEST INVITE
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
