"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Calendar, MapPin, Clock, Trash2, GripVertical, DollarSign, ChevronDown, ChevronUp } from "lucide-react";
import { activities as allActivities } from "@/data/activities";
import { destinations } from "@/data/destinations";
import { formatPrice, cn } from "@/lib/utils";
import type { Activity, TimeSlot, ItineraryActivity } from "@/types/trip";

interface DayPlan {
  id: string;
  dayNumber: number;
  destination: string;
  date: string;
  activities: ItineraryActivity[];
}

export default function TripPlannerPage() {
  const [tripName, setTripName] = useState("My Dream Trip");
  const [days, setDays] = useState<DayPlan[]>([
    { id: "d1", dayNumber: 1, destination: "Bali", date: "2025-08-01", activities: [] },
  ]);
  const [showAddActivity, setShowAddActivity] = useState<string | null>(null);
  const [selectedDest, setSelectedDest] = useState("bali");

  const totalCost = days.reduce((sum, day) => sum + day.activities.reduce((s, a) => s + a.cost, 0), 0);
  const destActivities = allActivities.filter((a) => a.destinationSlug === selectedDest);

  const addActivity = (dayId: string, activity: Activity) => {
    setDays((prev) =>
      prev.map((d) => {
        if (d.id !== dayId) return d;
        const newAct: ItineraryActivity = {
          id: `ia-${Date.now()}`,
          activity,
          timeSlot: "morning" as TimeSlot,
          startTime: "09:00",
          endTime: "12:00",
          cost: activity.price,
          notes: "",
        };
        return { ...d, activities: [...d.activities, newAct] };
      })
    );
    setShowAddActivity(null);
  };

  const removeActivity = (dayId: string, actId: string) => {
    setDays((prev) =>
      prev.map((d) => (d.id === dayId ? { ...d, activities: d.activities.filter((a) => a.id !== actId) } : d))
    );
  };

  const addDay = () => {
    setDays((prev) => [
      ...prev,
      {
        id: `d-${Date.now()}`,
        dayNumber: prev.length + 1,
        destination: selectedDest,
        date: "",
        activities: [],
      },
    ]);
  };

  const removeDay = (dayId: string) => {
    setDays((prev) => prev.filter((d) => d.id !== dayId).map((d, i) => ({ ...d, dayNumber: i + 1 })));
  };

  return (
    <div className="min-h-screen">
      <div className="relative py-12 px-4 bg-secondary/30">
        <div className="mx-auto max-w-5xl">
          <input
            type="text"
            value={tripName}
            onChange={(e) => setTripName(e.target.value)}
            className="text-3xl sm:text-4xl font-bold bg-transparent outline-none w-full placeholder:text-foreground/30"
            placeholder="Name your trip..."
          />
          <div className="flex items-center gap-4 mt-4 text-sm text-foreground/50">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {days.length} days</span>
            <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {days.length > 0 ? days[0].destination : "No destination"}</span>
            <span className="flex items-center gap-1"><DollarSign className="h-4 w-4" /> {formatPrice(totalCost)} estimated</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence>
              {days.map((day) => (
                <motion.div
                  key={day.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="rounded-2xl border border-border/50 overflow-hidden"
                >
                  <div className="flex items-center justify-between p-4 bg-secondary/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center font-bold text-accent">
                        {day.dayNumber}
                      </div>
                      <div>
                        <div className="font-semibold">Day {day.dayNumber}</div>
                        <div className="text-xs text-foreground/40">{day.destination}</div>
                      </div>
                    </div>
                    <button onClick={() => removeDay(day.id)} className="p-2 rounded-lg hover:bg-foreground/5 text-foreground/40 hover:text-red-500 transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="p-4 space-y-3 min-h-[100px]">
                    {day.activities.length === 0 && (
                      <p className="text-sm text-foreground/30 text-center py-4">No activities planned yet</p>
                    )}
                    {day.activities.map((ia) => (
                      <div key={ia.id} className="flex items-center gap-3 p-3 rounded-xl bg-foreground/5 group">
                        <GripVertical className="h-4 w-4 text-foreground/20 shrink-0" />
                        <img src={ia.activity.image} alt={ia.activity.name} className="w-12 h-12 rounded-lg object-cover shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">{ia.activity.name}</div>
                          <div className="text-xs text-foreground/40">{ia.activity.duration} · {ia.activity.category}</div>
                        </div>
                        <span className="text-sm font-semibold text-accent shrink-0">
                          {ia.cost === 0 ? "Free" : formatPrice(ia.cost)}
                        </span>
                        <button onClick={() => removeActivity(day.id, ia.id)} className="p-1 rounded opacity-0 group-hover:opacity-100 hover:bg-red-500/10 hover:text-red-500 transition-all">
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    ))}

                    <button
                      onClick={() => setShowAddActivity(day.id)}
                      className="w-full py-3 rounded-xl border border-dashed border-border/50 text-sm text-foreground/40 hover:text-accent hover:border-accent/50 transition-colors flex items-center justify-center gap-2"
                    >
                      <Plus className="h-4 w-4" />
                      Add activity
                    </button>
                  </div>

                  <div className="px-4 py-3 border-t flex justify-between text-sm">
                    <span className="text-foreground/40">Day estimated cost</span>
                    <span className="font-semibold">{formatPrice(day.activities.reduce((s, a) => s + a.cost, 0))}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <button
              onClick={addDay}
              className="w-full py-4 rounded-2xl border border-dashed border-border/50 text-foreground/40 hover:text-accent hover:border-accent/50 transition-colors flex items-center justify-center gap-2"
            >
              <Plus className="h-5 w-5" />
              Add another day
            </button>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Budget Summary */}
            <div className="rounded-2xl border border-border/50 p-6">
              <h3 className="font-semibold text-lg mb-4">Budget Summary</h3>
              <div className="space-y-3">
                {days.map((day) => {
                  const cost = day.activities.reduce((s, a) => s + a.cost, 0);
                  return (
                    <div key={day.id} className="flex justify-between text-sm">
                      <span className="text-foreground/60">Day {day.dayNumber}</span>
                      <span>{formatPrice(cost)}</span>
                    </div>
                  );
                })}
                <div className="pt-3 border-t flex justify-between font-bold">
                  <span>Total</span>
                  <span className="text-accent">{formatPrice(totalCost)}</span>
                </div>
              </div>
            </div>

            {/* Destination */}
            <div className="rounded-2xl border border-border/50 p-6">
              <h3 className="font-semibold text-lg mb-4">Destination</h3>
              <select
                value={selectedDest}
                onChange={(e) => setSelectedDest(e.target.value)}
                className="w-full p-3 rounded-xl bg-foreground/5 border border-border/50 text-sm outline-none"
              >
                {destinations.map((d) => (
                  <option key={d.slug} value={d.slug}>{d.name}, {d.country}</option>
                ))}
              </select>
            </div>

            {/* Quick Add Activities */}
            <div className="rounded-2xl border border-border/50 p-6">
              <h3 className="font-semibold text-lg mb-4">Available Activities</h3>
              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {destActivities.map((act) => (
                  <div key={act.id} className="flex gap-3 p-3 rounded-xl bg-foreground/5 hover:bg-foreground/10 transition-colors">
                    <img src={act.image} alt={act.name} className="w-12 h-12 rounded-lg object-cover shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{act.name}</div>
                      <div className="text-xs text-foreground/40">{act.duration}</div>
                      <div className="text-sm font-semibold text-accent mt-1">
                        {act.price === 0 ? "Free" : formatPrice(act.price)}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        if (days.length > 0) addActivity(days[0].id, act);
                      }}
                      className="self-center p-1.5 rounded-lg bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                ))}
                {destActivities.length === 0 && (
                  <p className="text-sm text-foreground/30 text-center py-4">No activities available for this destination</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
