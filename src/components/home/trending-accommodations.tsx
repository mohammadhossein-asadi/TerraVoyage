"use client";

import { motion } from "framer-motion";
import { getFeaturedAccommodations } from "@/data/accommodations";
import { AccommodationCard } from "@/components/shared/accommodation-card";
import { SectionHeader } from "@/components/shared/section-header";

export function TrendingAccommodations() {
  const featured = getFeaturedAccommodations().slice(0, 6);

  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Trending Stays" subtitle="Unique accommodations loved by travelers worldwide" action={{ label: "View All", href: "/accommodations" }} />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((acc, i) => (
            <motion.div
              key={acc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <AccommodationCard accommodation={acc} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
