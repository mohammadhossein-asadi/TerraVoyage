"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { accommodations } from "@/data/accommodations";
import { AccommodationCard } from "@/components/shared/accommodation-card";
import { cn, formatPrice } from "@/lib/utils";
import dynamic from "next/dynamic";

const MapContainer = dynamic(() => import("@/components/map/map-container").then(m => m.MapContainer), { ssr: false });

const propertyTypes = ["All", "hotel", "villa", "apartment", "hostel", "resort", "cabin", "eco-lodge", "luxury", "camping", "unique"] as const;

export default function AccommodationsPage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState<string>("All");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [showMap, setShowMap] = useState(false);

  const filtered = useMemo(() => {
    let result = accommodations;
    if (type !== "All") {
      result = result.filter((a) => a.type === type);
    }
    result = result.filter((a) => a.price.amount >= priceRange[0] && a.price.amount <= priceRange[1]);
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.destinationSlug.replace("-", " ").includes(q) ||
          a.amenities.some((am) => am.toLowerCase().includes(q))
      );
    }
    return result;
  }, [search, type, priceRange]);

  return (
    <div className="min-h-screen">
      <div className="relative py-16 px-4 bg-secondary/30">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold mb-2">Find Your Perfect Stay</h1>
          <p className="text-foreground/60 mb-8">Browse {accommodations.length} accommodations worldwide</p>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border/50">
              <Search className="h-5 w-5 text-foreground/40" />
              <input
                type="text"
                placeholder="Search by name, location, or amenity..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-sm outline-none placeholder:text-foreground/40"
                aria-label="Search accommodations"
              />
            </div>
            <button
              onClick={() => setShowMap(!showMap)}
              className={cn(
                "px-4 py-3 rounded-xl text-sm font-medium border transition-colors",
                showMap ? "bg-accent text-white border-accent" : "bg-card hover:bg-foreground/5"
              )}
              aria-pressed={showMap}
            >
              {showMap ? "Hide Map" : "Show Map"}
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide" role="tablist" aria-label="Property types">
          {propertyTypes.map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors shrink-0 capitalize",
                type === t ? "bg-accent text-white" : "bg-foreground/5 hover:bg-foreground/10"
              )}
              role="tab"
              aria-selected={type === t}
            >
              {t === "All" ? "All Types" : t.replace("-", " ")}
            </button>
          ))}
        </div>

        <div className="mb-6">
          <label htmlFor="price-range" className="text-sm text-foreground/60 mb-2 block">
            Price range: {formatPrice(priceRange[0])} — {formatPrice(priceRange[1])}
          </label>
          <input
            id="price-range"
            type="range"
            min={0}
            max={2000}
            step={50}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className="w-full accent-accent"
            aria-valuemin={0}
            aria-valuemax={2000}
            aria-valuenow={priceRange[1]}
          />
        </div>

        {showMap && (
          <div className="mb-8 h-[400px] rounded-2xl overflow-hidden border border-border/50">
            <MapContainer accommodations={filtered} />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((acc, i) => (
            <motion.div
              key={acc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <AccommodationCard accommodation={acc} />
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-foreground/40">
            <p className="text-lg">No accommodations found matching your criteria.</p>
            <button onClick={() => { setSearch(""); setType("All"); setPriceRange([0, 2000]); }} className="mt-4 text-accent text-sm hover:underline">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
