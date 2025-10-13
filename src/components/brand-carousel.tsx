"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Brand {
  name: string;
  logo: string;
}

interface BrandCarouselProps {
  brands: Brand[];
}

export default function BrandCarousel({ brands }: BrandCarouselProps) {
  const [isMobile, setIsMobile] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Triplica el array para asegurar loop visual en móvil
  const repeatedBrands = isMobile
    ? [...brands, ...brands, ...brands, ...brands]
    : [...brands, ...brands];

  // Ajusta la velocidad y el ancho del loop según móvil/escritorio
  const animationDuration = isMobile ? 25 : 40; // segundos

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Gradiente de desvanecido izquierdo */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-[#0a1b25] via-[#0a1b25]/80 to-transparent z-10 pointer-events-none" />
      {/* Gradiente de desvanecido derecho */}
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-[#0a1b25] via-[#0a1b25]/80 to-transparent z-10 pointer-events-none" />

      <div className="overflow-hidden w-full">
        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-8 md:gap-12 lg:gap-16 carousel-track"
          style={{
            animation: `scroll ${animationDuration}s linear infinite`,
            minWidth: isMobile ? "200vw" : "100vw",
          }}
        >
          {repeatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex-shrink-0 w-[96px] sm:w-[120px] md:w-[160px] lg:w-[200px] flex items-center justify-center"
            >
              <div className={`relative w-full h-14 sm:h-16 md:h-20 lg:h-24 transition-all duration-300 ${
                isMobile
                  ? "opacity-100"
                  : "grayscale opacity-70 hover:grayscale-0 hover:opacity-100"
              }`}>
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  priority={index < brands.length}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .carousel-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}