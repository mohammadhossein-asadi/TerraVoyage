"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-10 sm:p-16 text-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=600&fit=crop&auto=format')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/80 via-black/60 to-accent-purple/80" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-sm text-white mb-6">
              <Compass className="h-4 w-4" />
              Start your journey
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Plan Your Next Adventure</h2>
            <p className="text-white/70 max-w-lg mx-auto mb-8">
              Create personalized itineraries, track your budget, and discover hidden gems with our intelligent trip planner.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/destinations"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-gray-900 font-medium hover:bg-white/90 transition-colors"
              >
                Explore Destinations
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/trip-planner"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white font-medium hover:bg-white/10 transition-colors"
              >
                Plan a Trip
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
