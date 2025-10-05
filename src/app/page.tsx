import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BrandCarousel from "@/components/brand-carousel";
import TestimonialCarousel from "@/components/testimonial-carousel";
import MaxWidthWrapper from "@/components/max-width-wapper";

export default function Home() {
  return (
    <div className="bg-[#0a1b25]">
      {/* Hero Section */}
      <div className="relative isolate pt-14 overflow-hidden">
        <MaxWidthWrapper className="mb-20 mt-20 sm:mt-32 flex flex-col items-center justify-center text-center">
          {/* Badge superior */}
          <div className="mx-auto mb-6 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-zinc-200/40 bg-[#0a1b25]/90 px-6 py-2 shadow-xl backdrop-blur-sm transition-all hover:border-[#e6a126] hover:shadow-[#e6a126]/20">
            <p className="text-sm font-semibold text-zinc-200">
              ¡Soluciones integrales en climatización!
            </p>
          </div>

          {/* Título grande */}
          <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white drop-shadow-2xl">
            Climas y <span className="bg-gradient-to-r from-[#e6a126] to-[#ffbe3d] bg-clip-text text-transparent">Tecnología</span> de Confort
          </h1>

          {/* Subtítulo */}
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/80 font-medium">
            Soluciones profesionales en aire acondicionado, ventilación, paneles térmicos y refrigeración para empresas y residencias.
          </p>

          {/* Botón destacado */}
          <Link
            href="/contacto"
            className="mt-8 inline-flex items-center justify-center bg-gradient-to-r from-[#e6a126] to-[#ffbe3d] text-[#0a1b25] font-bold py-4 px-10 rounded-full shadow-2xl hover:scale-105 hover:shadow-[#e6a126]/50 transition-all text-lg border-2 border-[#ffbe3d]/30"
          >
            Solicita tu cotización <ArrowRight size={22} className="ml-3" />
          </Link>
        </MaxWidthWrapper>
      </div>

      {/* Ventajas Section */}
      <section className="py-24 bg-[#0a1b25] relative">
        <MaxWidthWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              ¿Por qué elegir <span className="bg-gradient-to-r from-[#e6a126] to-[#ffbe3d] bg-clip-text text-transparent">CLIMATEC</span>?
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Climas y Tecnología de Confort
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ventaja 1 */}
            <div className="group flex flex-col items-center text-center bg-[#0a1b25]/50 rounded-3xl p-8 shadow-xl border border-[#e6a126]/20 hover:border-[#e6a126]/50 transition-all hover:scale-105 backdrop-blur-sm">
              <div className="bg-gradient-to-br from-[#e6a126]/30 to-[#e6a126]/10 rounded-full p-5 mb-6 group-hover:from-[#e6a126]/40 group-hover:to-[#e6a126]/20 transition-all">
                <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
                  <path d="M20 4v32M4 20h32" stroke="#e6a126" strokeWidth="3" strokeLinecap="round"/>
                  <circle cx="20" cy="20" r="12" stroke="#e6a126" strokeWidth="3"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#e6a126] transition-colors">Experiencia y Profesionalismo</h3>
              <ul className="text-white/80 text-left mx-auto space-y-3 max-w-xs">
                <li className="flex items-start gap-2">
                  <span className="text-[#e6a126] mt-1">✓</span>
                  <span>Más de 15 años en el sector</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e6a126] mt-1">✓</span>
                  <span>Personal certificado y capacitado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e6a126] mt-1">✓</span>
                  <span>Atención personalizada</span>
                </li>
              </ul>
            </div>

            {/* Ventaja 2 */}
            <div className="group flex flex-col items-center text-center bg-[#0a1b25]/50 rounded-3xl p-8 shadow-xl border border-[#e6a126]/20 hover:border-[#e6a126]/50 transition-all hover:scale-105 backdrop-blur-sm">
              <div className="bg-gradient-to-br from-[#e6a126]/30 to-[#e6a126]/10 rounded-full p-5 mb-6 group-hover:from-[#e6a126]/40 group-hover:to-[#e6a126]/20 transition-all">
                <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
                  <path d="M8 20l8 8 16-16" stroke="#e6a126" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="20" cy="20" r="18" stroke="#e6a126" strokeWidth="3"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#e6a126] transition-colors">Calidad Garantizada</h3>
              <ul className="text-white/80 text-left mx-auto space-y-3 max-w-xs">
                <li className="flex items-start gap-2">
                  <span className="text-[#e6a126] mt-1">✓</span>
                  <span>Materiales y equipos de marcas líderes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e6a126] mt-1">✓</span>
                  <span>Garantía en todos nuestros trabajos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e6a126] mt-1">✓</span>
                  <span>Soluciones a la medida</span>
                </li>
              </ul>
            </div>

            {/* Ventaja 3 */}
            <div className="group flex flex-col items-center text-center bg-[#0a1b25]/50 rounded-3xl p-8 shadow-xl border border-[#e6a126]/20 hover:border-[#e6a126]/50 transition-all hover:scale-105 backdrop-blur-sm">
              <div className="bg-gradient-to-br from-[#e6a126]/30 to-[#e6a126]/10 rounded-full p-5 mb-6 group-hover:from-[#e6a126]/40 group-hover:to-[#e6a126]/20 transition-all">
                <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
                  <path d="M6 32V28C6 24 9 21 13 21H27C31 21 34 24 34 28V32" stroke="#e6a126" strokeWidth="3"/>
                  <circle cx="20" cy="13" r="7" stroke="#e6a126" strokeWidth="3"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#e6a126] transition-colors">Atención Rápida y Cercana</h3>
              <ul className="text-white/80 text-left mx-auto space-y-3 max-w-xs">
                <li className="flex items-start gap-2">
                  <span className="text-[#e6a126] mt-1">✓</span>
                  <span>Respuesta ágil a tus solicitudes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e6a126] mt-1">✓</span>
                  <span>Soporte post-venta</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#e6a126] mt-1">✓</span>
                  <span>Asesoría sin costo</span>
                </li>
              </ul>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#0a1b25] relative">
        <MaxWidthWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Lo que dicen nuestros <span className="text-[#e6a126]">clientes</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Testimonios reales de clientes satisfechos
            </p>
          </div>
          <TestimonialCarousel />
        </MaxWidthWrapper>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-[#0a1b25]">
        <MaxWidthWrapper>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trabajamos con las <span className="text-[#e6a126]">mejores marcas</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Somos distribuidores autorizados de las marcas líderes en el mercado
            </p>
          </div>
          <BrandCarousel 
            brands={[
              { name: "BOHN", logo: "/brands/bohn.png" },
              { name: "DAIKIN", logo: "/brands/daikin.svg" },
              { name: "meTecno Mexico", logo: "/brands/metecno-logo.png" },
              { name: "LG", logo: "/brands/logo-lg.svg" },
            ]}
          />
        </MaxWidthWrapper>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a1b25] relative overflow-hidden">
        {/* Efecto de brillo */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#e6a126]/5 to-transparent" />
        
        <MaxWidthWrapper>
          <div className="relative bg-[#0a1b25]/50 rounded-3xl p-12 md:p-16 border border-[#e6a126]/30 shadow-2xl backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-2/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  ¿Listo para mejorar su sistema de <span className="text-[#e6a126]">climatización</span>?
                </h2>
                <p className="text-lg text-white/80">
                  Contáctenos hoy mismo para recibir asesoría personalizada y un presupuesto sin compromiso.
                </p>
              </div>
              <div>
                <Link 
                  href="/contacto" 
                  className="inline-block bg-gradient-to-r from-[#e6a126] to-[#ffbe3d] text-[#0a1b25] font-bold py-4 px-8 rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-[#e6a126]/30 transition-all border-2 border-[#ffbe3d]/30"
                >
                  Contactar ahora
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}