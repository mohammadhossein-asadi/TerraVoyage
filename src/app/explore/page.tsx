"use client";

import { useState, useMemo } from "react";
import { accommodations } from "@/data/accommodations";
import { AccommodationCard } from "@/components/shared/accommodation-card";
import { Search, Map, List } from "lucide-react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const MapContainer = dynamic(() => import("@/components/map/map-container").then(m => m.MapContainer), { ssr: false });

export default function ExplorePage() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const [showMap, setShowMap] = useState(false);

  const filtered = useMemo(() => {
    if (!search) return accommodations;
    const q = search.toLowerCase();
    return accommodations.filter(
      (a) => a.name.toLowerCase().includes(q) || a.destinationSlug.includes(q)
    );
  }, [search]);

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col">
      <div className="p-4 border-b bg-background">
        <div className="mx-auto max-w-7xl flex items-center gap-4">
          <h1 className="text-xl font-bold shrink-0">Explore</h1>
          <div className="flex-1 flex items-center gap-2 px-4 py-2 rounded-xl bg-foreground/5 max-w-md">
            <Search className="h-4 w-4 text-foreground/40" />
            <input
              type="text"
              placeholder="Search locations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm outline-none placeholder:text-foreground/40"
            />
          </div>
          <span className="text-sm text-foreground/40 hidden sm:block">{filtered.length} properties</span>
          <button
            onClick={() => setShowMap(!showMap)}
            className={cn(
              "lg:hidden flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium border transition-colors shrink-0",
              showMap ? "bg-accent text-white border-accent" : "bg-card hover:bg-foreground/5 border-border/50"
            )}
          >
            {showMap ? <List className="h-4 w-4" /> : <Map className="h-4 w-4" />}
            {showMap ? "List" : "Map"}
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row">
        {/* List Panel */}
        <div className={cn(
          "overflow-y-auto p-4 space-y-3 border-r",
          showMap ? "h-[40vh] lg:h-auto lg:w-96" : "flex-1 lg:w-96",
          "lg:block"
        )}>
          {filtered.map((acc) => (
            <div
              key={acc.id}
              onClick={() => setSelected(acc.id)}
              className={`cursor-pointer rounded-xl transition-all ${selected === acc.id ? "ring-2 ring-accent" : ""}`}
            >
              <AccommodationCard accommodation={acc} />
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-12 text-foreground/40">
              <p>No accommodations found</p>
            </div>
          )}
        </div>

        {/* Map Panel */}
        <div className={cn(
          "flex-1 min-h-0",
          showMap ? "h-[60vh] lg:h-auto" : "hidden lg:block"
        )}>
          <MapContainer
            accommodations={filtered}
            center={filtered.length > 0 ? [filtered[0].coordinates.lat, filtered[0].coordinates.lng] : [20, 0]}
            zoom={filtered.length === 1 ? 11 : 2}
          />
        </div>
      </div>
    </div>
  );
}
