import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ServiciosPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-blue-100">
              Soluciones integrales en climatización, ventilación, extracción y refrigeración
              para proyectos residenciales, comerciales e industriales.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Service 1 */}
          <div className="flex flex-col md:flex-row items-center mb-20 border-b border-gray-200 pb-16">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Climatización Eficiente y de Calidad
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A través de la nueva y eficiente tecnología, hemos diseñado diversos sistemas de
                climatización ambiental para obtener dentro de un solo equipo: aire acondicionado,
                ventilación y calefacción, cubriendo las diferentes necesidades para todo tipo de
                aplicaciones.
              </p>
              <ul className="space-y-3">
                {["Equipos Mini Split", "Equipos Divididos", "Equipos Paquete", 
                  "Equipos Fan & Coil", "Equipos de Agua Helada (Chillers)"].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="/services/climatizacion.jpg" 
                alt="Climatización" 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-20 border-b border-gray-200 pb-16">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Paneles para Muros y Cubiertas
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Implementamos una tecnología novedosa y revolucionaria en el campo de la construcción,
                fabricando paneles inyectados con poliuretano de alta densidad y tecnología de punta,
                para utilizarse como cubiertas, fachadas, muros y en cuartos fríos, cámaras
                de sonido, entre otras aplicaciones.
              </p>
              <ul className="space-y-3">
                {[
                  "Paneles de poliuretano con caras en lámina de acero galvanizada pre pintada, aluminio, cobre, vinil, cartón fieltro y foil de aluminio",
                  "Paneles de lana mineral con caras en lámina de acero galvanizada pre pintada perforada",
                  "Línea completa de accesorios para cada producto",
                  "Paneles para cámaras frigoríficas y cámaras frigoríficas modulares",
                  "Salas blancas para la industria farmacéutica y electrónica",
                  "Paneles en poliestireno"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="/services/paneles.jpg" 
                alt="Paneles Térmicos" 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Ventilación, Extracción y Refrigeración
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Ofrecemos diseño e ingeniería para la adecuada adquisición de equipos
                de acuerdo a sus requerimientos específicos.
              </p>
              <ul className="space-y-3">
                {[
                  "Instalación profesional",
                  "Fabricación de ductos y filtros metálicos",
                  "Ductos flexibles de lona",
                  "Mantenimiento preventivo, predictivo y correctivo",
                  "Sistemas de mantenimiento preventivo y correctivo para todos sus equipos",
                  "Programas mensuales, anuales y/o por evento"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image 
                src="/services/ventilacion.jpg" 
                alt="Ventilación y Extracción" 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            ¿Necesita ayuda con su proyecto de climatización?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Nuestro equipo de expertos está listo para asesorarle y ofrecerle la mejor solución para sus necesidades específicas.
          </p>
          <Link
            href="/contacto"
            className="bg-blue-600 text-white font-medium py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            Solicitar cotización
          </Link>
        </div>
      </section>
    </>
  );
}