"use client";

import { Search, MapPin, Calendar, Users } from "lucide-react";

export function SearchBar() {
  return (
    <div className="glass-card p-3 max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-foreground/5">
          <MapPin className="h-5 w-5 text-foreground/40 shrink-0" />
          <input type="text" placeholder="Where to?" className="w-full bg-transparent text-sm outline-none placeholder:text-foreground/40" />
        </div>
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-foreground/5 sm:w-44">
          <Calendar className="h-5 w-5 text-foreground/40 shrink-0" />
          <input type="text" placeholder="When?" className="w-full bg-transparent text-sm outline-none placeholder:text-foreground/40" />
        </div>
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-foreground/5 sm:w-36">
          <Users className="h-5 w-5 text-foreground/40 shrink-0" />
          <input type="number" placeholder="Guests" min={1} className="w-full bg-transparent text-sm outline-none placeholder:text-foreground/40" />
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-medium text-sm hover:bg-accent/90 transition-colors shrink-0">
          <Search className="h-4 w-4" />
          Search
        </button>
      </div>
    </div>
  );
}
