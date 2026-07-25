"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getFeaturedDestinations } from "@/data/destinations";
import { DestinationCard } from "@/components/shared/destination-card";
import { SectionHeader } from "@/components/shared/section-header";

export function FeaturedDestinations() {
  const featured = getFeaturedDestinations();

  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Featured Destinations" subtitle="Handpicked places that will inspire your next journey" action={{ label: "View All", href: "/destinations" }} />
        <div className="mt-10 flex gap-6 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 snap-x snap-mandatory">
          {featured.map((dest, i) => (
            <motion.div
              key={dest.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="shrink-0 w-80 snap-start"
            >
              <DestinationCard destination={dest} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
