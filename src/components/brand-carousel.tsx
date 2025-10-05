"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Duplicar marcas para efecto infinito
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Gradiente de desvanecido izquierdo - más ancho en móvil */}
  <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 md:w-40 bg-gradient-to-r from-[#0a1b25] via-[#0a1b25] to-transparent z-10 pointer-events-none" />
      
      {/* Gradiente de desvanecido derecho - más ancho en móvil */}
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 md:w-40 bg-gradient-to-l from-[#0a1b25] via-[#0a1b25] to-transparent z-10 pointer-events-none" />
      
      <div className={`flex gap-6 sm:gap-8 md:gap-12 lg:gap-16 ${isMobile ? 'animate-scroll-mobile' : 'animate-scroll'}`}>
        {duplicatedBrands.map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="flex-shrink-0 w-[120px] sm:w-[140px] md:w-[180px] lg:w-[200px] flex items-center justify-center"
          >
            <div className={`relative w-full h-16 sm:h-18 md:h-20 lg:h-24 transition-all duration-300 ${
              isMobile 
                ? "opacity-100" 
                : "grayscale opacity-70 hover:grayscale-0 hover:opacity-100"
            }`}>
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain"
                priority={index < 4}
              />
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-mobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll-mobile {
          animation: scroll-mobile 15s linear infinite;
        }

        .animate-scroll:hover,
        .animate-scroll-mobile:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}