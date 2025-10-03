"use client";

import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

interface Brand {
  name: string;
  logo: string;
}

interface BrandCarouselProps {
  brands: Brand[];
}

export default function BrandCarousel({ brands }: BrandCarouselProps) {
  const autoplayOptions = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      dragFree: true,
    },
    [autoplayOptions.current]
  );

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradiente de desvanecido izquierdo */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a1b25] to-transparent z-10 pointer-events-none" />
      
      {/* Gradiente de desvanecido derecho */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a1b25] to-transparent z-10 pointer-events-none" />
      
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-12">
          {[...brands, ...brands, ...brands].map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-[0_0_200px] min-w-0 flex items-center justify-center"
            >
              <div className="relative w-full h-24 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}