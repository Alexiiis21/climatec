import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import MaxWidthWrapper from "@/components/max-width-wapper";
import { Badge } from "@/components/ui/badge";

export default function ServiciosPage() {
  return (
    <div className="bg-[#0a1b25]">
      {/* Hero Section */}
      <div className="relative isolate pt-14 overflow-hidden">
        <MaxWidthWrapper className="mb-20 mt-20 sm:mt-28 flex flex-col items-center justify-center text-center">
          {/* Badge superior */}
          <div className="mx-auto mb-6 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-zinc-200/40 bg-[#0a1b25]/90 px-6 py-2 shadow-xl backdrop-blur-sm transition-all hover:border-[#e6a126] hover:shadow-[#e6a126]/20">
            <p className="text-sm font-semibold text-zinc-200">
              Soluciones especializadas para cada necesidad
            </p>
          </div>

          {/* Título grande */}
          <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white drop-shadow-2xl">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-[#e6a126] to-[#ffbe3d] bg-clip-text text-transparent">
              Servicios
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/80 font-medium">
            Soluciones integrales en climatización, ventilación, extracción y
            refrigeración para proyectos residenciales, comerciales e
            industriales.
          </p>
        </MaxWidthWrapper>
      </div>

      {/* Services List */}
      <section className="py-16 bg-[#0a1b25]">
        <MaxWidthWrapper>
          {/* Service 1 */}
          <div className="mb-24">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <Badge className="mb-4 bg-[#e6a126]/20 text-[#e6a126] hover:bg-[#e6a126]/30 border-[#e6a126]/40">
                  Climatización
                </Badge>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Climatización Eficiente y de{" "}
                  <span className="bg-gradient-to-r from-[#e6a126] to-[#ffbe3d] bg-clip-text text-transparent">
                    Calidad
                  </span>
                </h2>
                <p className="text-lg text-white/80 mb-6">
                  A través de la nueva y eficiente tecnología, hemos diseñado
                  diversos sistemas de climatización ambiental para obtener
                  dentro de un solo equipo: aire acondicionado, ventilación y
                  calefacción, cubriendo las diferentes necesidades para todo
                  tipo de aplicaciones.
                </p>

                <div className="bg-[#0a1b25]/50 border border-[#e6a126]/20 shadow-lg rounded-lg p-6">
                  <ul className="space-y-4">
                    {[
                      "Equipos Mini Split",
                      "Equipos Divididos",
                      "Equipos Paquete",
                      "Equipos Fan & Coil",
                      "Equipos de Agua Helada (Chillers)",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#e6a126] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#e6a126] to-[#ffbe3d] rounded-xl blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative">
                    <Image
                      src="/services/climatizacion.jpeg"
                      alt="Climatización"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-2xl object-cover w-full max-w-f mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="mb-24">
            <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
              <div className="lg:w-1/2">
                <Badge className="mb-4 bg-[#e6a126]/20 text-[#e6a126] hover:bg-[#e6a126]/30 border-[#e6a126]/40">
                  Construcción
                </Badge>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Paneles para{" "}
                  <span className="bg-gradient-to-r from-[#e6a126] to-[#ffbe3d] bg-clip-text text-transparent">
                    Muros y Cubiertas
                  </span>
                </h2>
                <p className="text-lg text-white/80 mb-6">
                  Implementamos una tecnología novedosa y revolucionaria en el
                  campo de la construcción, fabricando paneles inyectados con
                  poliuretano de alta densidad y tecnología de punta, para
                  utilizarse como cubiertas, fachadas, muros y en cuartos fríos,
                  cámaras de sonido, entre otras aplicaciones.
                </p>

                <div className="bg-[#0a1b25]/50 border border-[#e6a126]/20 shadow-lg rounded-lg p-6">
                  <ul className="space-y-4">
                    {[
                      "Paneles de poliuretano con caras en lámina de acero galvanizada pre pintada",
                      "Paneles de lana mineral con lámina perforada",
                      "Línea completa de accesorios para cada producto",
                      "Paneles para cámaras frigoríficas y modulares",
                      "Salas blancas para la industria farmacéutica y electrónica",
                      "Paneles en poliestireno",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#e6a126] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#e6a126] to-[#ffbe3d] rounded-xl blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative">
                    <Image
                      src="/services/paneles.jpeg"
                      alt="Paneles Térmicos"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-2xl object-cover w-full max-w-md mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3 */}
          <div>
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <Badge className="mb-4 bg-[#e6a126]/20 text-[#e6a126] hover:bg-[#e6a126]/30 border-[#e6a126]/40">
                  Sistemas
                </Badge>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Ventilación,{" "}
                  <span className="bg-gradient-to-r from-[#e6a126] to-[#ffbe3d] bg-clip-text text-transparent">
                    Extracción
                  </span>{" "}
                  y Refrigeración
                </h2>
                <p className="text-lg text-white/80 mb-6">
                  Ofrecemos diseño e ingeniería para la adecuada adquisición de
                  equipos de acuerdo a sus requerimientos específicos.
                </p>

                <div className="bg-[#0a1b25]/50 border border-[#e6a126]/20 shadow-lg rounded-lg p-6">
                  <ul className="space-y-4">
                    {[
                      "Instalación profesional",
                      "Fabricación de ductos y filtros metálicos",
                      "Ductos flexibles de lona",
                      "Mantenimiento preventivo, predictivo y correctivo",
                      "Sistemas de mantenimiento para todos sus equipos",
                      "Programas mensuales, anuales y/o por evento",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-[#e6a126] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#e6a126] to-[#ffbe3d] rounded-xl blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative">
                    <Image
                      src="/services/ventilacion.jpeg"
                      alt="Ventilación y Extracción"
                      width={600}
                      height={400}
                      className="rounded-lg shadow-2xl object-cover w-full max-w-md mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  ¿Necesita ayuda con su proyecto de{" "}
                  <span className="text-[#e6a126]">climatización</span>?
                </h2>
                <p className="text-lg text-white/80">
                  Nuestro equipo de expertos está listo para asesorarle y
                  ofrecerle la mejor solución para sus necesidades específicas.
                </p>
              </div>
              <div>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#e6a126] to-[#ffbe3d] text-[#0a1b25] font-bold py-4 px-8 rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-[#e6a126]/30 transition-all border-2 border-[#ffbe3d]/30"
                >
                  Solicitar cotización <ArrowRight size={22} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
