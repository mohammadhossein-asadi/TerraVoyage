import type { Coordinates } from "./destination";

export type MapLayer = "standard" | "satellite" | "terrain";

export interface MapMarker {
  id: string;
  coordinates: Coordinates;
  type: "destination" | "accommodation" | "attraction" | "activity";
  name: string;
  description: string;
  image: string;
  rating?: number;
  price?: number;
}
