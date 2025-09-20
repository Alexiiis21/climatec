"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

interface Brand {
  name: string;
  logo: string;
}

interface BrandCarouselProps {
  brands: Brand[];
}

export default function BrandCarousel({ brands }: BrandCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: true,
    containScroll: "trimSnaps",
  });

  const [autoplayInterval, setAutoplayInterval] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!autoplayInterval) {
      const interval = setInterval(() => {
        if (emblaApi) {
          emblaApi.scrollNext();
        }
      }, 3000);
      setAutoplayInterval(interval);
    }
    
    return () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
      }
    };
  }, [emblaApi, autoplayInterval]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {brands.map((brand, index) => (
          <div 
            key={index} 
            className="flex-grow-0 flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 px-4"
          >
            <div className="bg-white p-6 rounded-lg shadow-sm h-32 flex items-center justify-center">
              <Image 
                src={brand.logo} 
                alt={brand.name} 
                width={120} 
                height={60} 
                className="max-h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}