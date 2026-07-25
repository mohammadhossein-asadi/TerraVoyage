export type ActivityCategory =
  | "adventure"
  | "culture"
  | "nature"
  | "food"
  | "wellness"
  | "nightlife"
  | "shopping"
  | "sports";

export type TimeSlot = "morning" | "afternoon" | "evening";

export interface Activity {
  id: string;
  name: string;
  destinationSlug: string;
  category: ActivityCategory;
  description: string;
  duration: string;
  price: number;
  difficulty: "easy" | "moderate" | "challenging";
  rating: number;
  image: string;
}

export interface ItineraryActivity {
  id: string;
  activity: Activity;
  timeSlot: TimeSlot;
  startTime: string;
  endTime: string;
  cost: number;
  notes: string;
}

export interface ItineraryDay {
  id: string;
  dayNumber: number;
  date: string;
  destination: string;
  activities: ItineraryActivity[];
  estimatedCost: number;
}

export interface Trip {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  destinations: string[];
  days: ItineraryDay[];
  totalBudget: number;
  spent: number;
  coverImage: string;
  createdAt: string;
}
