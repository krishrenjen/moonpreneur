"use client";

import React, { useState, useEffect, Children } from "react";
import Autoplay from "embla-carousel-autoplay";
import clsx from "clsx";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

type EmblaAutoCarouselProps = {
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  autoPlay?: boolean;
  arrows?: boolean;
  dots?: boolean;
  stopOnInteraction?: boolean;
};

export default function CustomCarousel({ children, className, delay = 3000, ...props }: EmblaAutoCarouselProps) {
  const childArray = Children.toArray(children);
  const [emblaApi, setEmblaApi] = useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className={clsx("relative w-full", className)}>
      <Carousel
        opts={{ loop: true, duration: 75 }}
        plugins={props.autoPlay ? [Autoplay({ delay, stopOnInteraction: props.stopOnInteraction, stopOnMouseEnter: true })] : []}
        setApi={setEmblaApi}
        className="w-full h-full"
      >
        <CarouselContent>
          {childArray.map((child, idx) => (
            <CarouselItem key={idx}>{child}</CarouselItem>
          ))}
        </CarouselContent>

        {props.arrows && <CarouselPrevious />}
        {props.arrows && <CarouselNext />}
      </Carousel>

      {/* Pagination Dots */}
      {props.dots && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {scrollSnaps.map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx)}
              className={clsx(
                "w-3 h-3 rounded-full transition-all duration-300 z-50 border border-black/30",
                selectedIndex === idx ? "bg-brand-purple scale-125 shadow-2xl" : "bg-gray-300 cursor-pointer shadow-2xl"
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
