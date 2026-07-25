"use client";

import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon } from "leaflet";
import { Accommodation } from "@/types/accommodation";

interface MapContainerProps {
  accommodations: Accommodation[];
  center?: [number, number];
  zoom?: number;
}

const markerIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function createPriceIcon(price: number) {
  return divIcon({
    className: "custom-price-marker",
    html: `<div style="background:#2563eb;color:white;padding:4px 8px;border-radius:8px;font-size:12px;font-weight:600;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,0.2);border:2px solid white;">$${price}</div>`,
    iconSize: [0, 0],
    iconAnchor: [30, 15],
  });
}

export function MapContainer({ accommodations, center = [20, 0], zoom = 2 }: MapContainerProps) {
  return (
    <LeafletMap center={center} zoom={zoom} style={{ height: "100%", width: "100%" }} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {accommodations.map((acc) => (
        <Marker
          key={acc.id}
          position={[acc.coordinates.lat, acc.coordinates.lng]}
          icon={createPriceIcon(acc.price.amount)}
        >
          <Popup>
            <div style={{ minWidth: 200 }}>
              <img src={acc.images[0]} alt={acc.name} style={{ width: "100%", height: 96, objectFit: "cover", borderRadius: 8, marginBottom: 8 }} />
              <strong style={{ fontSize: 14 }}>{acc.name}</strong>
              <p style={{ fontSize: 12, color: "#666", textTransform: "capitalize" }}>{acc.type.replace("-", " ")}</p>
              <p style={{ fontSize: 14, fontWeight: 700, marginTop: 4 }}>${acc.price.amount}/night</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </LeafletMap>
  );
}
