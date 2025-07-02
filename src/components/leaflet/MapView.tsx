"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import "./Marker.css";
import { LuCalendar, LuMapPin } from "react-icons/lu";
import { Hyperlink } from "@/common/types/Hyperlink";
import useDimensions from "@/hooks/useDimensions";

export interface Location {
  lat: number;
  lng: number;
  name: string;
  date?: string;
  link?: Hyperlink;
}

interface Props {
  locations: Location[];
}

const MapView = ({ locations }: Props) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const center: [number, number] = [39.8283, -98.5795];

  const { width } = useDimensions();

  const zoomLevel = width > 768 ? 4 : 3; // Adjust zoom level based on screen width

  if (width === 0) return null;

  return (
    <MapContainer
      center={center}
      zoom={zoomLevel}
      minZoom={2}
      className="!z-0 h-[500px] w-[100%]"
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((loc, idx) => (
        <Marker
          key={idx}
          position={[loc.lat, loc.lng]}
          eventHandlers={{
            popupopen: () => setActiveIdx(idx),
            popupclose: () => setActiveIdx(null),
          }}
          icon={L.divIcon({
            className: `custom-marker`,
            html: `<div class="marker-icon ${
              activeIdx === idx ? "active" : ""
            }"></div>`,
            iconSize: [30, 30],
          })}
        >
          <Popup>
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-1 ">
                <LuMapPin className="!m-0 p-0" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center align-middle"
                >
                  {loc.name}
                </a>
              </div>

              {loc.date && (
                <div className="flex items-center gap-1 justify-center">
                  <LuCalendar className="text-sm" />
                  <p className="!m-0 p-0 leading-none text-center align-middle">
                    {loc.date}
                  </p>
                </div>
              )}

              {loc.link && (
                <a
                  href={loc.link.href}
                  className="w-fit px-2 py-1 rounded-md bg-red-400 !text-white"
                >
                  {loc.link.label ?? "More Info"}
                </a>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
