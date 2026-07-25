export const APP_NAME = "TerraVoyage";
export const APP_DESCRIPTION = "Discover the world's most extraordinary destinations";
export const APP_URL = "https://terravoyage.app";

export const NAV_ITEMS = [
  { label: "Destinations", href: "/destinations" },
  { label: "Accommodations", href: "/accommodations" },
  { label: "Explore", href: "/explore" },
  { label: "Trip Planner", href: "/trip-planner" },
  { label: "Dashboard", href: "/dashboard" },
] as const;

export const DESTINATION_CATEGORIES = [
  { id: "beaches", label: "Beaches", icon: "Waves", color: "#0EA5E9" },
  { id: "mountains", label: "Mountains", icon: "Mountain", color: "#10B981" },
  { id: "cities", label: "Cities", icon: "Building2", color: "#8B5CF6" },
  { id: "islands", label: "Islands", icon: "Palmtree", color: "#F97316" },
  { id: "historical", label: "Historical", icon: "Landmark", color: "#EC4899" },
  { id: "nature", label: "Nature", icon: "TreePine", color: "#22C55E" },
  { id: "luxury", label: "Luxury", icon: "Crown", color: "#EAB308" },
  { id: "adventure", label: "Adventure", icon: "Compass", color: "#EF4444" },
] as const;

export const PROPERTY_TYPES = [
  { id: "hotel", label: "Hotels" },
  { id: "villa", label: "Villas" },
  { id: "apartment", label: "Apartments" },
  { id: "hostel", label: "Hostels" },
  { id: "resort", label: "Resorts" },
  { id: "cabin", label: "Cabins" },
  { id: "eco-lodge", label: "Eco Lodges" },
  { id: "luxury", label: "Luxury" },
  { id: "camping", label: "Camping" },
  { id: "unique", label: "Unique Homes" },
] as const;

export const AMENITIES = [
  "WiFi", "Pool", "Parking", "Kitchen", "Air Conditioning", "Heating",
  "Washer", "Dryer", "Hot Tub", "Gym", "Spa", "Restaurant",
  "Room Service", "Concierge", "Beach Access", "Mountain View",
  "Ocean View", "City View", "Balcony", "Terrace", "Fireplace",
  "BBQ Grill", "Pet Friendly", "EV Charger", "Ski Access",
] as const;

export const MAP_DEFAULTS = {
  center: [20, 0] as [number, number],
  zoom: 2,
  minZoom: 2,
  maxZoom: 18,
  tileUrl: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
};

export const COUNTRIES = [
  "Indonesia", "Greece", "Japan", "Peru", "Switzerland", "Maldives",
  "Morocco", "Iceland", "South Africa", "Spain", "USA", "France",
  "UAE", "New Zealand", "Italy", "Thailand", "Australia", "Brazil",
  "Egypt", "Portugal",
] as const;

export const CONTINENTS = [
  "Asia", "Europe", "North America", "South America", "Africa", "Oceania",
] as const;
