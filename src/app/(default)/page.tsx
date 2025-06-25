import BrandButton from "@/components/common/BrandButton";
import ProgramSection from "@/components/common/forms/ProgramSection";
import MapView from "@/components/leaflet/MapView";
import CustomCarousel from "@/components/common/carousel/carousel";

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
  ]; // TODO: Replace with real data input

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

      <div className="w-full flex items-start justify-center min-h-screen py-2">
        <div className="w-full py-2 flex flex-col items-center justify-center h-full">
          {/* Carousel with ProgramSection overlay */}
          <div className="flex gap-2 flex-col lg:relative w-full h-full lg:h-[600px] items-center justify-center overflow-hidden">
            {/* Carousel Background */}
            <CustomCarousel className="w-full h-full" delay={7500} autoPlay={true} dots>
              <img src="/assets/home/banner/map.webp" alt="Slide 1" className="w-full max-h-[600px] object-cover overflow-clip" />
              <img src="/assets/home/banner/top-banner-girl.webp" alt="Slide 2" className="w-full max-h-[600px] overflow-clip" />
            </CustomCarousel>

            {/* Overlayed ProgramSection */}
            <div className="relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0 w-full max-w-lg px-4 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-md p-2 rounded-xl shadow-xl">
                <ProgramSection
                  className="!max-w-lg"
                  tabs={[
                    <div className="flex flex-col items-center justify-center gap-0">
                      <div className="text-sm font-bold">Robotics</div>
                      <div className="text-xs">Free workshop in-person and online</div>
                    </div>,
                    <div className="flex flex-col items-center justify-center gap-0">
                      <div className="text-sm font-bold">Math</div>
                      <div className="text-xs flex flex-row gap-2 items-center justify-center">
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

          <div className="w-full bg-brand-purple-dark h-fit py-3 text-white font-base text-center text-lg">
            <p>
              Discover the
              <span className="text-brand-yellow font-medium">&nbsp;next generation of innovators</span>, showcasing their
              <span className="text-brand-yellow font-medium">&nbsp;creativity and talent&nbsp;</span>
              with
              <span className="text-brand-yellow font-bold">&nbsp;MoonCampaigns&nbsp;</span>
            </p>
          </div>

          {/* Map View */}
          <div className="w-full max-w-4xl h-fit">{/* <MapView locations={locations} /> */}</div>
        </div>
      </div>
    </div>
  );
}
