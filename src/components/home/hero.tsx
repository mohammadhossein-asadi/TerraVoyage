"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 aurora-bg opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />

      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent-purple/10 blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="block">Discover</span>
            <span className="block bg-gradient-to-r from-accent via-accent-purple to-accent-warm bg-clip-text text-transparent">
              Worlds, Not Just Places
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto mb-10"
        >
          Your next adventure starts here. Explore destinations, find perfect stays, and plan unforgettable journeys — all in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass-card p-3 sm:p-4 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-foreground/5">
                <MapPin className="h-5 w-5 text-foreground/40 shrink-0" />
                <input
                  type="text"
                  placeholder="Where to?"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-foreground/40"
                />
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-foreground/5 sm:w-44">
                <Calendar className="h-5 w-5 text-foreground/40 shrink-0" />
                <input
                  type="text"
                  placeholder="When?"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-foreground/40"
                />
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-foreground/5 sm:w-36">
                <Users className="h-5 w-5 text-foreground/40 shrink-0" />
                <input
                  type="number"
                  placeholder="Guests"
                  min={1}
                  className="w-full bg-transparent text-sm outline-none placeholder:text-foreground/40"
                />
              </div>
              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-medium text-sm hover:bg-accent/90 transition-colors shrink-0">
                <Search className="h-4 w-4" />
                <span className="sm:hidden">Search</span>
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 flex items-center justify-center gap-6 text-sm text-foreground/40"
        >
          <span>Popular: Bali, Santorini, Kyoto, Maldives</span>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-foreground/30" />
        </div>
      </div>
    </section>
  );
}
