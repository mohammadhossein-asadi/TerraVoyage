import { Coordinates } from "./destination";

export type PropertyType =
  | "hotel"
  | "villa"
  | "apartment"
  | "hostel"
  | "resort"
  | "cabin"
  | "eco-lodge"
  | "luxury"
  | "camping"
  | "unique";

export interface Host {
  name: string;
  avatar: string;
  since: number;
  responseRate: number;
  responseTime: string;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

export interface Accommodation {
  id: string;
  name: string;
  type: PropertyType;
  destinationSlug: string;
  description: string;
  images: string[];
  coordinates: Coordinates;
  price: {
    amount: number;
    currency: string;
    perNight: boolean;
  };
  rating: number;
  reviewCount: number;
  amenities: string[];
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  host: Host;
  reviews: Review[];
  accessibility: string[];
  rules: string[];
  featured: boolean;
}
