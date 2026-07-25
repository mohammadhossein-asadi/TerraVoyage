"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { divIcon } from "leaflet";
import { Attraction } from "@/types/destination";
import { Coordinates } from "@/types/destination";

interface DestinationMapProps {
  coordinates: Coordinates;
  attractions: Attraction[];
}

function createAttractionIcon(name: string) {
  return divIcon({
    className: "custom-attraction-marker",
    html: `<div style="background:#f97316;color:white;padding:4px 8px;border-radius:8px;font-size:11px;font-weight:500;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,0.2);border:2px solid white;">${name}</div>`,
    iconSize: [0, 0],
    iconAnchor: [0, -10],
  });
}

function createMainIcon() {
  return divIcon({
    className: "custom-main-marker",
    html: `<div style="background:#2563eb;color:white;padding:6px 12px;border-radius:12px;font-size:12px;font-weight:600;white-space:nowrap;box-shadow:0 2px 12px rgba(37,99,235,0.4);border:3px solid white;">Location</div>`,
    iconSize: [0, 0],
    iconAnchor: [0, -15],
  });
}

export function DestinationMap({ coordinates, attractions }: DestinationMapProps) {
  return (
    <MapContainer
      center={[coordinates.lat, coordinates.lng]}
      zoom={11}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[coordinates.lat, coordinates.lng]} icon={createMainIcon()}>
        <Popup>
          <strong>{attractions.length > 0 ? attractions[0].name : "Main location"}</strong>
        </Popup>
      </Marker>
      {attractions.map((attr) => (
        <Marker key={attr.id} position={[attr.coordinates.lat, attr.coordinates.lng]} icon={createAttractionIcon(attr.name)}>
          <Popup>
            <div style={{ minWidth: 180 }}>
              <strong>{attr.name}</strong>
              <br />
              <span style={{ fontSize: 12, color: "#666" }}>{attr.description}</span>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
