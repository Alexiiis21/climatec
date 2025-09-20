import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BrandCarousel from "@/components/brand-carousel";

export default function Home() {
  return (
<>
{/* Hero Section */}
<section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 overflow-hidden bg-background pt-54 md:pt-72">
  {/* Contenido principal */}
  <div className="relative z-10 flex flex-col items-center w-full">
    <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-4">
      Climas y <span className="text-accent">Tecnología de Confort</span> en segundos.
    </h1>
    <p className="text-lg md:text-xl text-center text-accent mb-8 max-w-2xl">
      Soluciones integrales en aire acondicionado, ventilación, paneles térmicos y refrigeración para tu empresa o residencia.
    </p>
    <Link
      href="/contacto"
      className="bg-accent text-background font-medium py-3 px-8 rounded-lg flex items-center justify-center hover:brightness-110 transition-colors mb-12"
    >
      Solicita tu cotización <ArrowRight size={18} className="ml-2" />
    </Link>
    <div className="w-full flex justify-center">
      <Image
        src="/hero-image.svg"
        alt="Vista previa de sistemas de climatización"
        width={700}
        height={400}
        className="rounded-xl shadow-lg"
        priority
      />
    </div>
  </div>
  {/* Polígono de fondo solo abajo */}
  <svg
    className="absolute left-0 bottom-0 w-full h-40"
    viewBox="0 0 1440 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ zIndex: 0 }}
  >
    <path
      fill="var(--color-subtext)"
      fillOpacity="0.12"
      d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,165.3C672,149,768,139,864,154.7C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
    />
  </svg>
</section>
      
      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Soluciones completas para su comodidad
            </h2>
            <p className="text-lg text-accent max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios y productos para climatización, 
              ventilación y refrigeración con la más alta calidad.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Aire Acondicionado",
                description: "Instalación y mantenimiento de equipos mini split, divididos y paquete.",
                icon: "/icons/air-conditioner.svg",
              },
              {
                title: "Calefacción",
                description: "Sistemas eficientes para mantener espacios cálidos en temporadas frías.",
                icon: "/icons/heating.svg",
              },
              {
                title: "Ventilación",
                description: "Fabricación e instalación de ductos de lámina y flexibles.",
                icon: "/icons/ventilation.svg",
              },
              {
                title: "Paneles Térmicos",
                description: "Soluciones con paneles inyectados con poliuretano de alta densidad.",
                icon: "/icons/panel.svg",
              },
              {
                title: "Refrigeración",
                description: "Sistemas para cuartos fríos y cámaras frigoríficas modulares.",
                icon: "/icons/refrigeration.svg",
              },
              {
                title: "Mantenimiento",
                description: "Programas de mantenimiento preventivo y correctivo para todos sus equipos.",
                icon: "/icons/maintenance.svg",
              },
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-secondary/80 p-6 rounded-xl shadow-sm border border-accent/30 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Image src={feature.icon} alt={feature.title} width={32} height={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-accent">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Brands Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Trabajamos con las mejores marcas
            </h2>
            <p className="text-lg text-accent max-w-2xl mx-auto">
              Somos distribuidores autorizados de las marcas líderes en el mercado
            </p>
          </div>
          <BrandCarousel 
            brands={[
              { name: "BOHN", logo: "/brands/bohn.svg" },
              { name: "DAIKIN", logo: "/brands/daikin.svg" },
              { name: "meTecno Mexico", logo: "/brands/metecno.svg" },
              { name: "LG", logo: "/brands/lg.svg" },
            ]}
          />
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-accent">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para mejorar su sistema de climatización?
              </h2>
              <p className="text-lg text-accent">
                Contáctenos hoy mismo para recibir asesoría personalizada y un presupuesto sin compromiso.
              </p>
            </div>
            <div>
              <Link 
                href="/contacto" 
                className="bg-background text-accent font-medium py-3 px-8 rounded-lg hover:bg-accent/80 hover:text-background transition-colors inline-block border border-background"
              >
                Contactar ahora
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}