import BrandButton from "@/components/common/BrandButton";
import ProgramSection from "@/components/common/forms/ProgramSection";
import ReserveSeatForm from "@/components/common/forms/ReserveSeatForm";
import MapView from "@/components/leaflet/MapView";
import CustomCarousel from "@/components/common/carousel/carousel";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function Page() {
  const locations = [
    {
      lat: 40.7128,
      lng: -74.006,
      name: "New York",
      date: "2/10/20",
      link: { href: "https://example.com", label: "Book" },
    },
    { lat: 34.0522, lng: -118.2437, name: "Los Angeles" },
    { lat: 41.8781, lng: -87.6298, name: "Chicago" },
  ];

  return (
    <div>
      <style>
        {`
          @keyframes blink {
            0%, 10%, 90%, 100% {
              opacity: 1;
              box-shadow: 0 0 4px 2px rgba(255, 0, 0, 0.5);
            }
            45%, 50% {
              opacity: 0;
              box-shadow: 0 0 0px 0px rgba(255, 0, 0, 0);
            }
          }
        `}
      </style>
      {/* <img src="/assets/home/banner/map.webp" alt="Slide 1" className="w-full max-h-[600px] object-cover overflow-clip" /> */}

      <div className="w-full flex items-start justify-center min-h-screen py-2">
        <div className="w-full my-4 py-4 flex flex-col items-center justify-center gap-4">
          {/* Carousel with ProgramSection overlay */}
          <div className="relative w-full h-[600px]">
            {/* Carousel Background */}
            <CustomCarousel className="w-full h-full" delay={10000} autoPlay={true} dots>
              <img src="/assets/home/banner/map.webp" alt="Slide 1" className="w-full max-h-[600px] object-cover overflow-clip" />
              <img src="/assets/home/banner/map2.webp" alt="Slide 2" className="w-full max-h-[600px] object-cover overflow-clip" />
            </CustomCarousel>

            {/* Overlayed ProgramSection */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-full max-w-md px-4">
              <div className="bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-xl">
                <ProgramSection
                  className=""
                  tabs={[
                    <div className="flex flex-col items-center justify-center gap-0">
                      <div className="text-sm font-bold">Robotics</div>
                      <div className="text-gray-600 text-xs">Free workshop in-person and online</div>
                    </div>,
                    <div className="flex flex-col items-center justify-center gap-0">
                      <div className="text-sm font-bold">Math</div>
                      <div className="text-gray-600 text-xs flex flex-row gap-2 items-center justify-center">
                        Free trial online{" "}
                        <div
                          style={{
                            width: "0.5rem",
                            height: "0.5rem",
                            backgroundColor: "red",
                            borderRadius: "999999px",
                            animation: "blink 2s infinite",
                          }}
                        ></div>
                      </div>
                    </div>,
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Map View */}
          <div className="w-full max-w-4xl h-[400px]">
            <MapView locations={locations} />
          </div>
        </div>
      </div>
    </div>
  );
}
