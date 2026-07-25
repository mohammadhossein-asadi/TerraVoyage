"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Calendar, Heart, Star, Compass, Settings, TrendingUp, Bookmark } from "lucide-react";
import { getFeaturedDestinations } from "@/data/destinations";
import { getFeaturedAccommodations } from "@/data/accommodations";
import { formatPrice } from "@/lib/utils";

const savedTrips = [
  { id: "t1", name: "Bali Adventure 2025", dates: "Aug 1 - Aug 10, 2025", status: "upcoming", image: "https://picsum.photos/seed/trip-bali/400/300" },
  { id: "t2", name: "Japan in Spring", dates: "Mar 25 - Apr 5, 2025", status: "completed", image: "https://picsum.photos/seed/trip-japan/400/300" },
];

const wishlist = getFeaturedDestinations().slice(0, 4);
const savedStays = getFeaturedAccommodations().slice(0, 3);

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-secondary/30">
      <div className="py-12 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, Traveler</h1>
              <p className="text-foreground/50 mt-1">Manage your trips and saved places</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/50 text-sm hover:shadow-md transition-all">
              <Settings className="h-4 w-4" />
              Settings
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: Compass, label: "Trips Planned", value: "2", color: "text-accent" },
              { icon: MapPin, label: "Destinations Saved", value: "4", color: "text-accent-warm" },
              { icon: Heart, label: "Wishlist Items", value: `${wishlist.length}`, color: "text-red-500" },
              { icon: Star, label: "Reviews Given", value: "3", color: "text-yellow-500" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl bg-card border border-border/50 p-5"
              >
                <stat.icon className={`h-5 w-5 ${stat.color} mb-3`} />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-foreground/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* My Trips */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">My Trips</h2>
              <Link href="/trip-planner" className="text-sm text-accent hover:underline">Plan new trip</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {savedTrips.map((trip, i) => (
                <motion.div
                  key={trip.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl overflow-hidden bg-card border border-border/50 hover:shadow-lg transition-all"
                >
                  <div className="relative aspect-[2/1]">
                    <img src={trip.image} alt={trip.name} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/40 text-white text-xs backdrop-blur-sm capitalize">
                      {trip.status}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{trip.name}</h3>
                    <p className="text-sm text-foreground/50 mt-1 flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {trip.dates}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Wishlist */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Wishlist</h2>
              <Link href="/destinations" className="text-sm text-accent hover:underline">Explore more</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {wishlist.map((dest, i) => (
                <motion.div
                  key={dest.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/destinations/${dest.slug}`} className="group block rounded-2xl overflow-hidden bg-card border border-border/50 hover:shadow-lg transition-all">
                    <div className="relative aspect-square">
                      <img src={dest.images[0]} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="text-white font-semibold">{dest.name}</div>
                        <div className="text-white/60 text-xs">{dest.country}</div>
                      </div>
                      <button className="absolute top-3 right-3 p-1.5 rounded-full bg-black/30 text-white hover:bg-red-500 transition-colors">
                        <Heart className="h-3.5 w-3.5 fill-current" />
                      </button>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Saved Stays */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Saved Stays</h2>
              <Link href="/accommodations" className="text-sm text-accent hover:underline">Browse all</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {savedStays.map((acc, i) => (
                <motion.div
                  key={acc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/accommodations/${acc.id}`} className="group block rounded-2xl overflow-hidden bg-card border border-border/50 hover:shadow-lg transition-all">
                    <div className="relative aspect-[3/2]">
                      <img src={acc.images[0]} alt={acc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-sm">{acc.name}</h3>
                      <p className="text-xs text-foreground/40 capitalize">{acc.type.replace("-", " ")}</p>
                      <p className="text-sm font-bold mt-2">{formatPrice(acc.price.amount)}<span className="text-foreground/40 font-normal text-xs"> / night</span></p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
