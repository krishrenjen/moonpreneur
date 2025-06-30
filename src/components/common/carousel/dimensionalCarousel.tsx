"use client";

import useDimensions from "@/hooks/useDimensions";
import CustomCarousel, { EmblaAutoCarouselProps } from "./carousel";

type Breakpoints<T> = {
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
};

type DimensionalCarouselProps = EmblaAutoCarouselProps & {
  dynamicNumberOfItemsPerSlide?: Breakpoints<number>;
  dynamicAutoplay?: Breakpoints<boolean>;
  dynamicArrows?: Breakpoints<boolean>;
  dynamicDots?: Breakpoints<boolean>;
};

function getResponsiveValue<T>(breakpoints: Breakpoints<T> | undefined, width: number, defaultValue: T): T {
  if (!breakpoints) return defaultValue;
  if (width >= 1280 && breakpoints["2xl"] !== undefined) return breakpoints["2xl"];
  if (width >= 1024 && breakpoints.xl !== undefined) return breakpoints.xl;
  if (width >= 768 && breakpoints.lg !== undefined) return breakpoints.lg;
  if (width >= 640 && breakpoints.md !== undefined) return breakpoints.md;
  if (breakpoints.sm !== undefined) return breakpoints.sm;
  return defaultValue;
}

export default function DimensionalCarousel(props: DimensionalCarouselProps) {
  const { width } = useDimensions();

  const numberOfItemsPerSlide = getResponsiveValue(props.dynamicNumberOfItemsPerSlide, width, props.numberOfItemsPerSlide || 1);
  const autoplay = getResponsiveValue(props.dynamicAutoplay, width, props.autoPlay || false);
  const arrows = getResponsiveValue(props.dynamicArrows, width, props.arrows || false);
  const dots = getResponsiveValue(props.dynamicDots, width, props.dots || false);

  return (
    <CustomCarousel {...props} numberOfItemsPerSlide={numberOfItemsPerSlide} autoPlay={autoplay} arrows={arrows} dots={dots}>
      {props.children}
    </CustomCarousel>
  );
}
