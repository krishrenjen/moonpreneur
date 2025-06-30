"use client";

import dynamic from "next/dynamic";
import { Location } from "./MapView";

// Dynamically import MapView client-only
const MapView = dynamic(() => import("./MapView"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

export default function MapWrapper({ locations }: { locations: Location[] }) {
  return <MapView locations={locations} />;
}
