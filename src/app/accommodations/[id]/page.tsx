"use client";

import { use } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Star, MapPin, Users, Bed, Bath, Wifi, Car, Waves, Dumbbell, Shield, Calendar } from "lucide-react";
import { getAccommodationById, getAccommodationsByDestination } from "@/data/accommodations";
import { getDestinationBySlug } from "@/data/destinations";
import { formatPrice, cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const AccommodationMap = dynamic(() => import("@/components/map/map-container").then(m => m.MapContainer), { ssr: false });

const amenityIcons: Record<string, React.ElementType> = {
  WiFi: Wifi, Parking: Car, Pool: Waves, Gym: Dumbbell,
};

export default function AccommodationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const accommodation = getAccommodationById(id);
  const destination = accommodation ? getDestinationBySlug(accommodation.destinationSlug) : undefined;
  const nearby = accommodation ? getAccommodationsByDestination(accommodation.destinationSlug).filter((a) => a.id !== accommodation.id).slice(0, 3) : [];

  if (!accommodation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Accommodation not found</h1>
          <Link href="/accommodations" className="text-accent hover:underline">Back to accommodations</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Gallery */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-2 sm:p-4">
        {accommodation.images.slice(0, 4).map((img, i) => (
          <div key={i} className={cn("relative overflow-hidden rounded-xl", i === 0 ? "sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-auto" : "aspect-[4/3]")}>
            <img src={img} alt={`${accommodation.name} ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>
        ))}
      </section>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <Link href="/accommodations" className="inline-flex items-center gap-1 text-sm text-accent hover:underline mb-4">
                <ArrowLeft className="h-3 w-3" /> All accommodations
              </Link>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium capitalize">
                  {accommodation.type.replace("-", " ")}
                </span>
                {accommodation.featured && (
                  <span className="px-2.5 py-0.5 rounded-full bg-accent-warm/10 text-accent-warm text-xs font-medium">Featured</span>
                )}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold">{accommodation.name}</h1>
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  {accommodation.rating} ({accommodation.reviewCount} reviews)
                </div>
                {destination && (
                  <div className="flex items-center gap-1 text-sm text-foreground/50">
                    <MapPin className="h-4 w-4" />
                    {destination.name}, {destination.country}
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-6 text-sm text-foreground/60 border-y py-4">
              <div className="flex items-center gap-2"><Bed className="h-4 w-4" /> {accommodation.bedrooms} bedroom{accommodation.bedrooms > 1 ? "s" : ""}</div>
              <div className="flex items-center gap-2"><Bath className="h-4 w-4" /> {accommodation.bathrooms} bathroom{accommodation.bathrooms > 1 ? "s" : ""}</div>
              <div className="flex items-center gap-2"><Users className="h-4 w-4" /> {accommodation.maxGuests} guests</div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">About this place</h2>
              <p className="text-foreground/70 leading-relaxed">{accommodation.description}</p>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-xl font-bold mb-4">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {accommodation.amenities.map((amenity) => {
                  const Icon = amenityIcons[amenity];
                  return (
                    <div key={amenity} className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50">
                      {Icon ? <Icon className="h-5 w-5 text-accent" /> : <div className="w-5 h-5 rounded-full bg-foreground/10" />}
                      <span className="text-sm">{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-xl font-bold mb-4">Location</h2>
              <div className="h-[300px] rounded-2xl overflow-hidden border border-border/50">
                <AccommodationMap accommodations={[accommodation]} />
              </div>
            </div>

            {/* Reviews */}
            <div>
              <h2 className="text-xl font-bold mb-4">Reviews</h2>
              <div className="space-y-4">
                {accommodation.reviews.map((review) => (
                  <div key={review.id} className="p-4 rounded-xl border border-border/50">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold text-accent">
                        {review.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-medium">{review.author}</div>
                        <div className="text-xs text-foreground/40">{review.date}</div>
                      </div>
                      <div className="ml-auto flex items-center gap-1 text-xs">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        {review.rating}
                      </div>
                    </div>
                    <p className="text-sm text-foreground/70">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Host */}
            <div className="p-6 rounded-2xl border border-border/50">
              <h2 className="text-xl font-bold mb-3">Hosted by {accommodation.host.name}</h2>
              <div className="flex items-center gap-4 text-sm text-foreground/60">
                <span>Since {accommodation.host.since}</span>
                <span>{accommodation.host.responseRate}% response rate</span>
                <span>Responds {accommodation.host.responseTime}</span>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-border/50 p-6 shadow-lg">
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-bold">{formatPrice(accommodation.price.amount)}</span>
                <span className="text-foreground/50">/ night</span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 rounded-xl border border-border/50 text-center">
                  <div className="text-xs text-foreground/40 mb-1">Check-in</div>
                  <div className="text-sm font-medium">Add date</div>
                </div>
                <div className="p-3 rounded-xl border border-border/50 text-center">
                  <div className="text-xs text-foreground/40 mb-1">Check-out</div>
                  <div className="text-sm font-medium">Add date</div>
                </div>
              </div>

              <div className="p-3 rounded-xl border border-border/50 mb-6">
                <div className="text-xs text-foreground/40 mb-1">Guests</div>
                <div className="text-sm font-medium">1 guest</div>
              </div>

              <button className="w-full py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent/90 transition-colors">
                Reserve
              </button>

              <p className="text-center text-xs text-foreground/40 mt-3">You won&apos;t be charged yet</p>

              <div className="mt-6 pt-6 border-t space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/60">{formatPrice(accommodation.price.amount)} x 5 nights</span>
                  <span>{formatPrice(accommodation.price.amount * 5)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/60">Service fee</span>
                  <span>{formatPrice(Math.round(accommodation.price.amount * 0.12))}</span>
                </div>
                <div className="pt-3 border-t flex justify-between font-bold">
                  <span>Total</span>
                  <span>{formatPrice(accommodation.price.amount * 5 + Math.round(accommodation.price.amount * 0.12))}</span>
                </div>
              </div>
            </motion.div>

            {/* Nearby */}
            {nearby.length > 0 && (
              <div className="mt-6 rounded-2xl border border-border/50 p-6">
                <h3 className="font-semibold mb-4">Nearby stays</h3>
                <div className="space-y-4">
                  {nearby.map((acc) => (
                    <Link key={acc.id} href={`/accommodations/${acc.id}`} className="flex gap-3 group">
                      <img src={acc.images[0]} alt={acc.name} className="w-14 h-14 rounded-lg object-cover shrink-0" />
                      <div className="min-w-0">
                        <h4 className="text-sm font-medium group-hover:text-accent transition-colors truncate">{acc.name}</h4>
                        <p className="text-xs text-foreground/40 capitalize">{acc.type.replace("-", " ")}</p>
                        <p className="text-sm font-bold mt-1">{formatPrice(acc.price.amount)}<span className="text-foreground/40 font-normal text-xs"> / night</span></p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
