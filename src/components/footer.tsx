import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-xl font-bold text-white">Climatec</span>
            </div>
            <p className="mb-6">
              Especialistas en climatización, ventilación, extracción y sistemas de refrigeración
              con más de 15 años de experiencia en el mercado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/productos" className="hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="hover:text-white transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/servicios#climatizacion" className="hover:text-white transition-colors">
                  Aire Acondicionado
                </Link>
              </li>
              <li>
                <Link href="/servicios#paneles" className="hover:text-white transition-colors">
                  Paneles Térmicos
                </Link>
              </li>
              <li>
                <Link href="/servicios#ventilacion" className="hover:text-white transition-colors">
                  Ventilación y Extracción
                </Link>
              </li>
              <li>
                <Link href="/servicios#refrigeracion" className="hover:text-white transition-colors">
                  Refrigeración
                </Link>
              </li>
              <li>
                <Link href="/servicios#mantenimiento" className="hover:text-white transition-colors">
                  Mantenimiento
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-6 w-6 mr-3 flex-shrink-0" />
                <span>Av. Fco y Madero no 320, Col. Niños, Querétaro, Qro. C.P. 76010</span>
              </li>
              <li className="flex">
                <Phone className="h-6 w-6 mr-3 flex-shrink-0" />
                <a href="tel:+524421444789" className="hover:text-white transition-colors">
                  442-144-4789
                </a>
              </li>
              <li className="flex">
                <Mail className="h-6 w-6 mr-3 flex-shrink-0" />
                <a href="mailto:vica1603@hotmail.com" className="hover:text-white transition-colors">
                  vica1603@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Climatec. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;