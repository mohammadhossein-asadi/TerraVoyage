"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { destinations } from "@/data/destinations";
import { DESTINATION_CATEGORIES } from "@/lib/constants";
import { DestinationCard } from "@/components/shared/destination-card";
import { cn } from "@/lib/utils";

export default function DestinationsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = destinations;
    if (activeCategory) {
      result = result.filter((d) => d.categories.includes(activeCategory as any));
    }
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.country.toLowerCase().includes(q) ||
          d.tags.some((t) => t.includes(q))
      );
    }
    return result;
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen">
      <div className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 aurora-bg-slow opacity-10" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Discover Destinations</h1>
          <p className="text-foreground/60 text-lg mb-8">Explore {destinations.length} incredible destinations around the world</p>

          <div className="glass-card p-3 max-w-xl mx-auto">
            <div className="flex items-center gap-3 px-4 py-2">
              <Search className="h-5 w-5 text-foreground/40" />
              <input
                type="text"
                placeholder="Search destinations, countries, or tags..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-sm outline-none placeholder:text-foreground/40"
                aria-label="Search destinations"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-20">
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide" role="tablist" aria-label="Destination categories">
          <button
            onClick={() => setActiveCategory(null)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors shrink-0",
              !activeCategory ? "bg-accent text-white" : "bg-foreground/5 hover:bg-foreground/10"
            )}
            role="tab"
            aria-selected={!activeCategory}
          >
            All
          </button>
          {DESTINATION_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors shrink-0",
                activeCategory === cat.id ? "bg-accent text-white" : "bg-foreground/5 hover:bg-foreground/10"
              )}
              role="tab"
              aria-selected={activeCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((dest, i) => (
            <motion.div
              key={dest.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <DestinationCard destination={dest} />
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-foreground/40">
            <p className="text-lg">No destinations found matching your search.</p>
            <button onClick={() => { setSearch(""); setActiveCategory(null); }} className="mt-4 text-accent text-sm hover:underline">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
