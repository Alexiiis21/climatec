"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    location: "Monterrey",
    image: "/avatar1.png",
    text: "Excelente servicio y atención personalizada. Mi empresa ahora tiene el clima perfecto todo el año.",
    rating: 5,
  },
  {
    name: "María G.",
    location: "Guadalajara",
    image: "/avatar2.png",
    text: "Instalaron nuestro sistema de aire acondicionado en tiempo récord. Muy profesionales y el precio fue justo.",
    rating: 5,
  },
  {
    name: "Roberto L.",
    location: "Ciudad de México",
    image: "/avatar3.png",
    text: "El mantenimiento preventivo que ofrecen es excelente. Nunca hemos tenido problemas con nuestros equipos.",
    rating: 5,
  },
  {
    name: "Ana P.",
    location: "Puebla",
    image: "/avatar4.png",
    text: "Recomiendo totalmente sus servicios. El equipo es muy profesional y los precios competitivos.",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "center",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 px-2"
            >
              <div className="bg-[#0a1b25]/50 border border-[#e6a126]/20 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-sm h-full flex flex-col">
                <Quote className="text-[#e6a126] mb-4" size={32} />
                
                <p className="text-white/90 text-base md:text-lg italic mb-6 flex-grow leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="rounded-full border-2 border-[#e6a126] object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-base md:text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-[#e6a126] text-sm">{testimonial.location}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-[#e6a126] text-sm">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flechas de navegación - Solo en desktop */}
      {!isMobile && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 -translate-x-4 cursor-pointer bg-[#e6a126] text-[#0a1b25] p-3 rounded-full shadow-xl hover:bg-[#ffbe3d] transition-all hover:scale-110 z-10"
            aria-label="Anterior testimonio"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-[-16px] top-1/2 -translate-y-1/2 translate-x-4 cursor-pointer bg-[#e6a126] text-[#0a1b25] p-3 rounded-full shadow-xl hover:bg-[#ffbe3d] transition-all hover:scale-110 z-10"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}

      {/* Puntos de navegación - Solo en mobile */}
      {isMobile && (
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === selectedIndex
                  ? "w-8 bg-[#e6a126]"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}