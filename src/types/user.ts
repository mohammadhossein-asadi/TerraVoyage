export type TravelStyle =
  | "adventure"
  | "luxury"
  | "budget"
  | "family"
  | "digital-nomad"
  | "photographer"
  | "food-lover"
  | "nature-lover"
  | "history-lover";

export interface UserPreferences {
  travelStyles: TravelStyle[];
  preferredBudget: "budget" | "mid-range" | "luxury";
  preferredAccommodation: string[];
  interests: string[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  preferences: UserPreferences;
  savedDestinations: string[];
  savedAccommodations: string[];
  wishlist: string[];
}
