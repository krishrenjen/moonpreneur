import BrandButton from "@/components/common/buttons/BrandButton";
import MapView from "@/components/leaflet/MapView";

export default function Page() {

  const locations = [
  { lat: 40.7128, lng: -74.0060, name: "New York", date: "2/10/20", link: { href: "https://example.com", label: "Book" } },
  { lat: 34.0522, lng: -118.2437, name: "Los Angeles" },
  { lat: 41.8781, lng: -87.6298, name: "Chicago" },
  ];

  return (
    <div className="w-full flex items-start justify-center min-h-screen">
      <div className="w-10/12 my-4">
        {/* <MapView locations={locations}/> */}
        <div className="px-10 flex flex-row items-center justify-center gap-4 bg-gray-300">
          
        </div>
      </div>
      
      

    </div>
  );
}