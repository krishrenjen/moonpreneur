"use client";

import React, { useState, useEffect, Children } from "react";
import Autoplay from "embla-carousel-autoplay";
import clsx from "clsx";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";

export type EmblaAutoCarouselProps = {
  children?: React.ReactNode;
  className?: string;
  carouselClassName?: string;
  carouselContentClassName?: string;
  delay?: number;
  autoPlay?: boolean;
  arrows?: boolean;
  dots?: boolean;
  stopOnInteraction?: boolean;
  numberOfItemsPerSlide?: number;
  align?: "start" | "center" | "end";
  slideDuration?: number;
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
    <div className={clsx("relative w-fit", className)}>
      <Carousel
        opts={{ loop: true, duration: props.slideDuration ?? 75, align: props.align || "start", containScroll: "trimSnaps" }}
        plugins={props.autoPlay ? [Autoplay({ delay, stopOnInteraction: props.stopOnInteraction, stopOnMouseEnter: true })] : []}
        setApi={setEmblaApi}
        className={clsx("w-fit h-full", props.carouselClassName)}
      >
        <CarouselContent className={clsx("w-fit h-full", props.carouselContentClassName)}>
          {childArray.map((child, idx) => (
            <CarouselItem className="flex items-center justify-center" key={idx} style={{ flexBasis: `calc(100% / ${props.numberOfItemsPerSlide || 1})` }}>
              {child}
            </CarouselItem>
          ))}
        </CarouselContent>

        {props.arrows && <CarouselPrevious />}
        {props.arrows && <CarouselNext />}
      </Carousel>

      {/* Pagination Dots */}
      {props.dots && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {Array.from({ length: Math.ceil(childArray.length / (props.numberOfItemsPerSlide || 1)) }).map((_, idx) => (
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
