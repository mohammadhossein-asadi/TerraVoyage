export type DestinationCategory =
  | "beaches"
  | "mountains"
  | "cities"
  | "islands"
  | "historical"
  | "nature"
  | "luxury"
  | "adventure";

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface WeatherMonth {
  name: string;
  tempHigh: number;
  tempLow: number;
  rainfall: number;
  humidity: number;
}

export interface Budget {
  accommodation: number;
  food: number;
  transport: number;
  activities: number;
  daily: number;
  currency: string;
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  image: string;
  coordinates: Coordinates;
  rating: number;
  category: string;
}

export interface Destination {
  slug: string;
  name: string;
  country: string;
  continent: string;
  categories: DestinationCategory[];
  description: string;
  shortDescription: string;
  images: string[];
  coordinates: Coordinates;
  weather: WeatherMonth[];
  bestTimeToVisit: string;
  culture: string;
  safety: string;
  tips: string[];
  attractions: Attraction[];
  budget: Budget;
  tags: string[];
  featured: boolean;
  trending: boolean;
  rating: number;
  reviewCount: number;
}
