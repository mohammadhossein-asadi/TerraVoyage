"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import { Destination } from "@/types/destination";
import { cn } from "@/lib/utils";

interface DestinationCardProps {
  destination: Destination;
  size?: "sm" | "md" | "lg";
}

export function DestinationCard({ destination, size = "md" }: DestinationCardProps) {
  return (
    <Link href={`/destinations/${destination.slug}`}>
      <motion.div
        whileHover={{ y: -4 }}
        className={cn(
          "group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:shadow-xl transition-all cursor-pointer",
          size === "lg" ? "aspect-[4/3]" : "aspect-[3/4]"
        )}
      >
        <div className="absolute inset-0">
          <img
            src={destination.images[0]}
            alt={destination.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          {destination.rating}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center gap-1 text-white/70 text-xs mb-1">
            <MapPin className="h-3 w-3" />
            {destination.country}
          </div>
          <h3 className="text-white font-semibold text-lg leading-tight">{destination.name}</h3>
          <p className="text-white/60 text-xs mt-1 line-clamp-2">{destination.shortDescription}</p>
        </div>
      </motion.div>
    </Link>
  );
}
