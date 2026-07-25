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
          <div className="absolute inset-0 aurora-bg opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent-purple/20" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-sm mb-6">
              <Compass className="h-4 w-4" />
              Start your journey
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Plan Your Next Adventure</h2>
            <p className="text-foreground/60 max-w-lg mx-auto mb-8">
              Create personalized itineraries, track your budget, and discover hidden gems with our intelligent trip planner.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/destinations"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent/90 transition-colors"
              >
                Explore Destinations
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/trip-planner"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border font-medium hover:bg-foreground/5 transition-colors"
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
