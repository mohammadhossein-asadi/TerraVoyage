"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Wifi, Car, Waves, Dumbbell } from "lucide-react";
import { Accommodation } from "@/types/accommodation";
import { formatPrice } from "@/lib/utils";

const amenityIcons: Record<string, React.ElementType> = {
  WiFi: Wifi, Parking: Car, Pool: Waves, Gym: Dumbbell,
};

interface AccommodationCardProps {
  accommodation: Accommodation;
}

export function AccommodationCard({ accommodation }: AccommodationCardProps) {
  return (
    <Link href={`/accommodations/${accommodation.id}`}>
      <motion.div
        whileHover={{ y: -4 }}
        className="group rounded-2xl overflow-hidden bg-card border border-border/50 hover:shadow-xl transition-all cursor-pointer"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={accommodation.images[0]}
            alt={accommodation.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 dark:bg-black/70 text-xs font-medium backdrop-blur-sm">
            {accommodation.type.charAt(0).toUpperCase() + accommodation.type.slice(1).replace("-", " ")}
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-semibold text-base leading-tight line-clamp-1">{accommodation.name}</h3>
          <p className="text-foreground/50 text-xs mt-1 line-clamp-2">{accommodation.description}</p>

          <div className="flex items-center gap-1 mt-3">
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{accommodation.rating}</span>
            <span className="text-xs text-foreground/40">({accommodation.reviewCount})</span>
          </div>

          <div className="flex items-center gap-2 mt-3">
            {accommodation.amenities.slice(0, 4).map((amenity) => {
              const Icon = amenityIcons[amenity];
              return Icon ? (
                <div key={amenity} className="p-1.5 rounded-md bg-foreground/5" title={amenity}>
                  <Icon className="h-3.5 w-3.5 text-foreground/40" />
                </div>
              ) : null;
            })}
          </div>

          <div className="mt-4 pt-3 border-t flex items-baseline gap-1">
            <span className="text-lg font-bold">{formatPrice(accommodation.price.amount)}</span>
            <span className="text-sm text-foreground/50">/ night</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
