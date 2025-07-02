"use client";
import useDimensions from "@/hooks/useDimensions";
import ProgramCard, { Program } from "./ProgramCard";
import DimensionalCarousel from "../common/carousel/dimensionalCarousel";

export default function ProgramCarousel({
  programs,
}: {
  programs?: Program[];
}) {
  const { width } = useDimensions();

  return (
    <div className="w-full items-center justify-center flex">
      <DimensionalCarousel
        className="!w-full flex items-center justify-center"
        carouselClassName="!w-10/12"
        carouselContentClassName="!w-full"
        align="start"
        dynamicNumberOfItemsPerSlide={{ sm: 1, md: 2, lg: 3, xl: 3, "2xl": 3 }}
        dynamicArrows={{ sm: false, md: true, lg: true, xl: true, "2xl": true }}
      >
        {programs?.map((program, index) => (
          <ProgramCard key={index} program={program} />
        ))}
      </DimensionalCarousel>
    </div>
  );
}
