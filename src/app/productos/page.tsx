import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight, Info, Star, Shield, Zap } from "lucide-react";
import MaxWidthWrapper from "@/components/max-width-wapper";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProductosPage() {
  // Datos de productos organizados por categoría
  const productCategories = [
    {
      id: "climatizacion",
      name: "Climatización",
      icon: <Zap className="h-5 w-5" />,
      products: [
        { name: "Equipos Mini Split", description: "Ideal para espacios residenciales" },
        { name: "Sistemas VRF", description: "Tecnología avanzada para edificios" },
        { name: "Equipos Paquete", description: "Soluciones para espacios comerciales" },
        { name: "Chillers", description: "Para grandes instalaciones" },
      ]
    },
    {
      id: "paneles",
      name: "Paneles Térmicos",
      icon: <Shield className="h-5 w-5" />,
      products: [
        { name: "Paneles Galvanizados", description: "Resistentes a la intemperie" },
        { name: "Paneles de Aluminio", description: "Ligeros y duraderos" },
        { name: "Paneles para Cuartos Fríos", description: "Alta capacidad aislante" },
        { name: "Paneles de Poliestireno", description: "Económicos y funcionales" },
      ]
    },
    {
      id: "ventilacion",
      name: "Ventilación",
      icon: <Info className="h-5 w-5" />,
      products: [
        { name: "Ventiladores Industriales", description: "Gran capacidad de flujo" },
        { name: "Campanas de Extracción", description: "Para cocinas comerciales" },
        { name: "Extractores de Baño", description: "Silenciosos y eficientes" },
        { name: "Ventilación Mecánica", description: "Controlada por sensores" },
      ]
    },
    {
      id: "accesorios",
      name: "Ductos y Accesorios",
      icon: <Star className="h-5 w-5" />,
      products: [
        { name: "Ductos en Lámina", description: "Fabricados a medida" },
        { name: "Ductos Flexibles", description: "Adaptables a cualquier espacio" },
        { name: "Rejillas y Difusores", description: "Diversos diseños y tamaños" },
        { name: "Filtros de Aire", description: "Para purificación óptima" },
      ]
    }
  ];

  return (
    <div className="bg-[#0a1b25] min-h-screen">
      {/* Hero con Video Background */}
      <div className="relative h-[60vh] overflow-hidden flex items-center">
        {/* Video o imagen de fondo con overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1b25]/40 to-[#0a1b25] z-10"></div>
        <div className="absolute inset-0 bg-[url('/products/hero-bg.jpg')] bg-cover bg-center"></div>
        
        <MaxWidthWrapper className="relative z-20">
          <div className="flex flex-col items-start max-w-2xl">
            <Badge className="mb-4 bg-[#e6a126] text-[#0a1b25] hover:bg-[#e6a126]/90">
              Catálogo 2025
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Productos de <span className="text-[#e6a126]">alta tecnología</span> para climatización
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Descubra nuestra línea completa de equipos y materiales certificados internacionalmente.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#categorias"
                className="bg-white text-[#0a1b25] hover:bg-white/90 font-medium px-6 py-3 rounded-full"
              >
                Ver categorías
              </Link>
              <Link 
                href="/contacto"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium px-6 py-3 rounded-full"
              >
                Solicitar catálogo
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>

      {/* Marcas en movimiento */}
      <div className="py-12 bg-[#0a1b25]/80 backdrop-blur-sm border-y border-[#e6a126]/10">
        <div className="flex justify-center items-center space-x-12 animate-marquee">
          {["BOHN", "DAIKIN", "LG", "meTecno", "YORK", "CARRIER", "TRANE", "GREENHECK"].map((brand, index) => (
            <div key={index} className="text-xl font-bold text-white/60">{brand}</div>
          ))}
        </div>
      </div>

      {/* Tabs de categorías */}
      <section id="categorias" className="py-24">
        <MaxWidthWrapper>
          <Tabs defaultValue="climatizacion" className="w-full">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Navegue por <span className="text-[#e6a126]">categorías</span>
              </h2>
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent">
                {productCategories.map((category) => (
                  <TabsTrigger 
                    key={category.id}
                    value={category.id}
                    className="flex items-center gap-2 data-[state=active]:bg-[#e6a126] data-[state=active]:text-[#0a1b25] bg-[#0a1b25]/60 border border-[#e6a126]/20 text-white"
                  >
                    {category.icon}
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {productCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {/* Tarjeta destacada */}
                  <Card className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 bg-gradient-to-br from-[#e6a126]/10 to-[#0a1b25] border border-[#e6a126]/30">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/2 p-8">
                        <h3 className="text-2xl font-bold text-white mb-4">Línea de {category.name}</h3>
                        <p className="text-white/80 mb-6">
                          Ofrecemos soluciones completas para proyectos residenciales, comerciales e industriales con la más alta calidad y tecnología.
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-center text-white/90">
                            <CheckCircle className="h-5 w-5 text-[#e6a126] mr-2" /> Certificación internacional
                          </li>
                          <li className="flex items-center text-white/90">
                            <CheckCircle className="h-5 w-5 text-[#e6a126] mr-2" /> Garantía extendida
                          </li>
                          <li className="flex items-center text-white/90">
                            <CheckCircle className="h-5 w-5 text-[#e6a126] mr-2" /> Instalación profesional
                          </li>
                        </ul>
                        <div className="mt-8">
                          <Link href="/contacto" className="inline-flex items-center text-[#e6a126] hover:underline">
                            Ver especificaciones <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                      <div className="md:w-1/2 relative min-h-[300px]">
                        <Image
                          src={`/products/${category.id}-hero.jpg`}
                          alt={category.name}
                          fill
                          className="object-cover rounded-br-lg rounded-bl-lg md:rounded-bl-none md:rounded-tr-lg"
                        />
                      </div>
                    </div>
                  </Card>
                  
                  {/* Productos individuales */}
                  {category.products.map((product, idx) => (
                    <Card key={idx} className="bg-[#0a1b25]/70 border border-[#e6a126]/20 hover:border-[#e6a126]/50 transition-all">
                      <CardHeader>
                        <div className="w-full h-48 relative mb-4">
                          <Image
                            src={`/products/${category.id}-${idx + 1}.jpg`}
                            alt={product.name}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <CardTitle className="text-white">{product.name}</CardTitle>
                        <CardDescription className="text-white/70">{product.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="border-[#e6a126]/40 text-[#e6a126]">
                            {category.name}
                          </Badge>
                          <span className="text-sm text-white/60">Disponible</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link href="/contacto" className="w-full">
                          <button className="w-full bg-[#0a1b25] border border-[#e6a126]/30 text-white py-2 rounded-lg hover:bg-[#e6a126]/20 transition-all">
                            Solicitar información
                          </button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </MaxWidthWrapper>
      </section>

      {/* Características destacadas */}
      <section className="py-24 bg-[#0a1b25]/80 border-y border-[#e6a126]/10">
        <MaxWidthWrapper>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Por qué nuestros productos <span className="text-[#e6a126]">marcan la diferencia</span>
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Tecnología de punta y materiales de primera calidad para garantizar el mejor rendimiento
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-12 w-12 text-[#e6a126]" />,
                title: "Certificación Internacional",
                description: "Todos nuestros productos cumplen con los estándares internacionales de calidad y eficiencia energética."
              },
              {
                icon: <Zap className="h-12 w-12 text-[#e6a126]" />,
                title: "Alta Eficiencia",
                description: "Diseñados para minimizar el consumo energético sin comprometer el rendimiento."
              },
              {
                icon: <Star className="h-12 w-12 text-[#e6a126]" />,
                title: "Garantía Extendida",
                description: "Confiamos tanto en nuestros productos que ofrecemos garantías superiores al estándar del mercado."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-[#0a1b25] to-[#0a1b25]/50 p-8 rounded-2xl border border-[#e6a126]/20">
                <div className="bg-[#0a1b25] p-4 rounded-full w-fit mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Catálogo Digital */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[url('/products/catalog-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1b25] via-[#0a1b25]/90 to-[#0a1b25]"></div>
        
        <MaxWidthWrapper className="relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Badge className="mb-4 bg-[#e6a126]/20 text-[#e6a126] hover:bg-[#e6a126]/30 border-[#e6a126]/40">
                Descarga Gratuita
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Nuestro catálogo digital completo
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Acceda a información detallada, especificaciones técnicas y precios de referencia
                de toda nuestra gama de productos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-[#e6a126] to-[#ffbe3d] text-[#0a1b25] font-bold rounded-full hover:shadow-lg hover:shadow-[#e6a126]/30 transition-all">
                  Descargar PDF
                </button>
                <button className="px-8 py-3 bg-transparent border border-white/30 text-white rounded-full hover:bg-white/10 transition-all">
                  Recibir por correo
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="relative h-[400px] w-full">
                <div className="absolute top-0 right-0 w-3/4 h-4/5 bg-[#0a1b25] border border-[#e6a126]/30 rounded-lg shadow-2xl transform rotate-3 z-10"></div>
                <div className="absolute bottom-0 left-0 w-3/4 h-4/5 bg-[#0a1b25] border border-[#e6a126]/30 rounded-lg shadow-2xl transform -rotate-3 z-20"></div>
                <div className="absolute inset-0 m-auto w-4/5 h-4/5 bg-gradient-to-br from-[#0a1b25]/90 to-[#0a1b25] border-2 border-[#e6a126]/40 rounded-lg shadow-2xl z-30 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Catálogo 2025</h3>
                    <p className="text-[#e6a126]">Climatec S.A.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a1b25]">
        <MaxWidthWrapper>
          <div className="bg-gradient-to-r from-[#e6a126]/20 to-[#0a1b25] border border-[#e6a126]/30 rounded-3xl p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 h-full w-1/3 bg-[url('/products/cta-pattern.png')] bg-cover opacity-10"></div>
            
            <div className="max-w-2xl relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Listo para comenzar su proyecto?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Nuestro equipo de especialistas está preparado para asesorarlo en la elección
                de los productos ideales para sus necesidades específicas.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <Link href="/contacto">
                  <button className="px-8 py-4 bg-[#e6a126] text-[#0a1b25] font-bold rounded-full hover:bg-[#ffbe3d] transition-all flex items-center gap-2">
                    Contactar ahora <ArrowRight className="h-5 w-5" />
                  </button>
                </Link>
                
                <Link href="/servicios">
                  <button className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full hover:bg-white/10 transition-all">
                    Ver servicios
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}