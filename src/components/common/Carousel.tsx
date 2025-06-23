'use client';

import clsx from 'clsx';
import React, { useState, Children, ReactNode } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

type CarouselProps = {
  children: ReactNode;
  showArrows?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  maxDots?: number;
  className?: string;
  loop?: boolean;
  animateSlides?: boolean;
};

export default function Carousel(props: CarouselProps) {
  const childArray = Children.toArray(props.children);
  const [current, setCurrent] = useState(0);
  const total = childArray.length;

  const loop = props.loop ?? true;
  const autoPlay = props.autoPlay ?? false;
  const autoPlayInterval = props.autoPlayInterval ?? 3000;
  const showArrows = props.showArrows ?? true;
  const showDots = props.showDots ?? false;
  const animateSlides = props.animateSlides ?? true;
  const maxDots = props.maxDots ?? 5;

  const prev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  const getVisibleSlides = () => {
    const prevIndex = (current - 1 + total) % total;
    const nextIndex = (current + 1) % total;
    return [childArray[prevIndex], childArray[current], childArray[nextIndex]];
  };

  React.useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        next();
      }, autoPlayInterval);
      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayInterval, next]);

  const visibleSlides = getVisibleSlides();

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div
        className="flex w-full h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-100%)` }}
      >
        {visibleSlides.map((item, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full">
            {item}
          </div>
        ))}
      </div>

      <button
        onClick={prev}
        disabled={!loop && current === 0}
        className={clsx(
          "absolute top-1/2 left-2 -translate-y-1/2 bg-white p-2 rounded-full shadow transition-all duration-300",
          !showArrows && 'hidden',
          (loop || current > 0) ? 'cursor-pointer' : 'cursor-default opacity-30'
        )}
        aria-label="Previous Slide"
      >
        <FaArrowAltCircleLeft className="w-8 h-8"/>

      </button>
      <button
        onClick={next}
        disabled={!loop && current === total - 1}
        className={clsx(
          "absolute top-1/2 right-2 -translate-y-1/2 bg-white p-2 rounded-full shadow transition-all duration-300",
          !showArrows && 'hidden',
          (loop || current < total-1) ? 'cursor-pointer' : 'cursor-default opacity-30'
        )}
        aria-label="Next Slide"
      >
        <FaArrowAltCircleRight className="w-8 h-8"/>

      </button>
    </div>
  );
}
