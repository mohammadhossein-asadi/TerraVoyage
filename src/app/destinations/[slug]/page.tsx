"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Calendar, Shield, Star, ArrowLeft, ChevronRight, Clock, Thermometer } from "lucide-react";
import { getDestinationBySlug } from "@/data/destinations";
import { getAccommodationsByDestination } from "@/data/accommodations";
import { getActivitiesByDestination } from "@/data/activities";
import { formatPrice } from "@/lib/utils";
import dynamic from "next/dynamic";

const DestinationMap = dynamic(() => import("@/components/destinations/destination-map").then(m => m.DestinationMap), { ssr: false });

export default function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const destination = getDestinationBySlug(slug);
  const accommodations = getAccommodationsByDestination(slug);
  const destinationActivities = getActivitiesByDestination(slug);

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Destination not found</h1>
          <Link href="/destinations" className="text-accent hover:underline">Back to destinations</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <img src={destination.images[0]} alt={destination.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <Link href="/destinations" className="absolute top-6 left-6 z-10 flex items-center gap-2 px-3 py-2 rounded-lg bg-black/40 text-white text-sm backdrop-blur-sm hover:bg-black/60 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
              <MapPin className="h-4 w-4" />
              {destination.country}, {destination.continent}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">{destination.name}</h1>
            <p className="mt-3 text-white/70 text-lg max-w-2xl">{destination.shortDescription}</p>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-1 text-white/80 text-sm">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                {destination.rating} ({destination.reviewCount.toLocaleString()} reviews)
              </div>
              <div className="flex items-center gap-1 text-white/80 text-sm">
                <Calendar className="h-4 w-4" />
                Best: {destination.bestTimeToVisit}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold mb-4">About {destination.name}</h2>
              <p className="text-foreground/70 leading-relaxed">{destination.description}</p>
            </motion.section>

            {/* Culture & Tips */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold mb-4">Culture & Tips</h2>
              <p className="text-foreground/70 leading-relaxed mb-6">{destination.culture}</p>
              <div className="space-y-3">
                {destination.tips.map((tip, i) => (
                  <div key={i} className="flex gap-3 p-3 rounded-xl bg-secondary/50">
                    <ChevronRight className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/70">{tip}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Attractions */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold mb-6">Popular Attractions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.attractions.map((attraction) => (
                  <div key={attraction.id} className="group rounded-xl overflow-hidden border border-border/50 hover:shadow-lg transition-all">
                    <div className="relative aspect-[2/1] overflow-hidden">
                      <img src={attraction.image} alt={attraction.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">{attraction.name}</h3>
                      <p className="text-sm text-foreground/50 mt-1">{attraction.description}</p>
                      <div className="flex items-center gap-1 mt-2 text-xs text-foreground/40">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        {attraction.rating}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Activities */}
            {destinationActivities.length > 0 && (
              <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold mb-6">Activities</h2>
                <div className="space-y-4">
                  {destinationActivities.map((activity) => (
                    <div key={activity.id} className="flex gap-4 p-4 rounded-xl border border-border/50 hover:shadow-md transition-all">
                      <img src={activity.image} alt={activity.name} className="w-24 h-24 rounded-lg object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold">{activity.name}</h3>
                        <p className="text-sm text-foreground/50 mt-1 line-clamp-2">{activity.description}</p>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="text-xs text-foreground/40 flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {activity.duration}
                          </span>
                          <span className="text-sm font-semibold text-accent">
                            {activity.price === 0 ? "Free" : formatPrice(activity.price)}
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-foreground/5">{activity.difficulty}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Map */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold mb-6">Location</h2>
              <div className="h-[400px] rounded-2xl overflow-hidden border border-border/50">
                <DestinationMap
                  coordinates={destination.coordinates}
                  attractions={destination.attractions}
                />
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Budget */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-border/50 p-6">
              <h3 className="font-semibold text-lg mb-4">Estimated Daily Budget</h3>
              <div className="space-y-3">
                {[
                  { label: "Accommodation", amount: destination.budget.accommodation },
                  { label: "Food", amount: destination.budget.food },
                  { label: "Transport", amount: destination.budget.transport },
                  { label: "Activities", amount: destination.budget.activities },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between text-sm">
                    <span className="text-foreground/60">{item.label}</span>
                    <span className="font-medium">{formatPrice(item.amount)}</span>
                  </div>
                ))}
                <div className="pt-3 border-t flex justify-between">
                  <span className="font-semibold">Daily Total</span>
                  <span className="font-bold text-accent">{formatPrice(destination.budget.daily)}</span>
                </div>
              </div>
            </motion.div>

            {/* Weather */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-border/50 p-6">
              <h3 className="font-semibold text-lg mb-4">Weather by Month</h3>
              <div className="space-y-2 max-h-[300px] overflow-y-auto">
                {destination.weather.map((month) => (
                  <div key={month.name} className="flex items-center gap-3 text-sm">
                    <span className="w-8 font-medium">{month.name}</span>
                    <div className="flex-1 h-2 bg-foreground/5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-400 to-orange-400"
                        style={{ width: `${(month.tempHigh / 40) * 100}%` }}
                      />
                    </div>
                    <span className="text-foreground/50 w-16 text-right">{month.tempLow}° - {month.tempHigh}°</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Safety */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-border/50 p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent-teal" />
                Safety
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{destination.safety}</p>
            </motion.div>

            {/* Nearby Accommodations */}
            {accommodations.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-border/50 p-6">
                <h3 className="font-semibold text-lg mb-4">Where to Stay</h3>
                <div className="space-y-4">
                  {accommodations.slice(0, 3).map((acc) => (
                    <Link key={acc.id} href={`/accommodations/${acc.id}`} className="flex gap-3 group">
                      <img src={acc.images[0]} alt={acc.name} className="w-16 h-16 rounded-lg object-cover shrink-0" />
                      <div className="min-w-0">
                        <h4 className="text-sm font-medium group-hover:text-accent transition-colors truncate">{acc.name}</h4>
                        <p className="text-xs text-foreground/40 capitalize">{acc.type.replace("-", " ")}</p>
                        <p className="text-sm font-bold mt-1">{formatPrice(acc.price.amount)}<span className="text-foreground/40 font-normal text-xs"> / night</span></p>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href={`/accommodations?destination=${slug}`} className="mt-4 block text-center text-sm text-accent hover:underline">
                  View all accommodations
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
